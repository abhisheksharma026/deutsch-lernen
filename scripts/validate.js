#!/usr/bin/env node
// Content checks for every batch. Run: node scripts/validate.js
// Exits with 1 on errors. Warnings are printed but don't fail the run.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, p), "utf8");
const errors = [];
const warnings = [];

// Load the same files the page loads, in the same order.
const html = read("index.html");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
for (const src of scripts.filter(s => s !== "assets/js/app.js")) vm.runInContext(read(src), ctx, { filename: src });
const { A1, A1Coverage } = ctx;

// 1. Every data file is loaded, and every loaded batch is in the catalog.
const dataFiles = fs.readdirSync(path.join(root, "data")).filter(f => /^a\d.*\.js$/.test(f)).map(f => "data/" + f);
for (const f of dataFiles) if (!scripts.includes(f)) errors.push(`${f} is not loaded in index.html`);
const catalogIds = new Set(A1.tracks.flatMap(t => t.batches.map(b => b.id)));
for (const id of Object.keys(A1.batches)) if (!catalogIds.has(id)) errors.push(`${id} is not in data/catalog.js`);

// 2. Cards are complete.
const ARTICLES = ["der", "die", "das"];
const seen = new Map();
for (const [id, B] of Object.entries(A1.batches)) {
  const groups = new Set(B.groups.map(g => g.id));
  for (const x of B.words) {
    const where = `${id} "${x.w}"`;
    for (const k of ["w", "g", "ty", "m", "de", "en"]) if (!x[k]) errors.push(`${where}: missing ${k}`);
    if (x.g && !groups.has(x.g)) errors.push(`${where}: unknown group "${x.g}"`);
    if (x.de && !/\*.+?\*/.test(x.de)) errors.push(`${where}: example has no *highlighted* word`);
    if (x.a && !ARTICLES.includes(x.a)) errors.push(`${where}: article must be der, die or das`);
    if (x.a && !x.plOnly && !x.sc) errors.push(`${where}: noun has no article scene`);
    if (seen.has(x.w)) errors.push(`${where}: already taught in ${seen.get(x.w)}`);
    else seen.set(x.w, id);
  }
  for (const g of groups) if (!B.words.some(x => x.g === g)) warnings.push(`${id}: group "${g}" has no words`);

  // 3. The story uses every word, and every variant of multi-word cards.
  if (!B.story) { errors.push(`${id}: no story`); continue; }
  const c = A1Coverage.coverage(B);
  for (const m of c.missing) errors.push(`${id} story: missing ${m}`);
  for (const k of c.unknownKeys) errors.push(`${id} story: {...|${k}} does not match any card`);
}

// 4. Warn when a sentence uses a word that is only taught in a later batch.
const order = A1.tracks.flatMap(t => t.batches.map(b => b.id)).filter(id => A1.batches[id]);
const firstTaught = new Map();
order.forEach((id, n) => A1.batches[id].words.forEach(x => {
  if (!/[ /.?]/.test(x.w) && x.w.length > 3) firstTaught.set(x.w.toLowerCase(), n);
}));
const plain = s => s.replace(/<[^>]+>/g, "").replace(A1Coverage.TAG, "$1").replace(/\*/g, "");
order.forEach((id, n) => {
  const B = A1.batches[id];
  const texts = [...B.words.map(x => x.de), ...(B.story ? B.story.lines.map(l => l.de) : [])].map(plain);
  const later = new Set();
  for (const t of texts) for (const tok of t.toLowerCase().match(/\p{L}+/gu) || []) {
    const at = firstTaught.get(tok);
    if (at !== undefined && at > n) later.add(`${tok} (taught in ${order[at]})`);
  }
  if (later.size) warnings.push(`${id}: uses words from later batches: ${[...later].join(", ")}`);
});

for (const w of warnings) console.log("warning: " + w);
for (const e of errors) console.log("error:   " + e);
const words = Object.values(A1.batches).reduce((n, b) => n + b.words.length, 0);
console.log(`\n${Object.keys(A1.batches).length} batches, ${words} words, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
