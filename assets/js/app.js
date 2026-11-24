// Deutsch lernen: a tiny hash router. "#" shows the index, "#a1-1-b2" shows a batch.
{
const $ = s => document.querySelector(s);
const app = $("#app");

const FIG = {
  der: '<svg viewBox="0 0 64 72" aria-hidden="true"><path d="M14 30 L4 66 L32 58 L60 66 L50 30Z" fill="var(--der)" opacity=".35"/><rect x="20" y="28" width="24" height="30" rx="6" fill="var(--der)"/><path d="M26 36 L32 46 L38 36Z" fill="#fff" opacity=".9"/><circle cx="32" cy="16" r="11" fill="#f2c9a5"/><path d="M21 13 Q32 2 43 13 Q38 9 32 10 Q26 9 21 13Z" fill="#2a2a2a"/><rect x="22" y="58" width="8" height="12" rx="3" fill="var(--der)"/><rect x="34" y="58" width="8" height="12" rx="3" fill="var(--der)"/></svg>',
  die: '<svg viewBox="0 0 64 72" aria-hidden="true"><path d="M18 34 L10 70 L54 70 L46 34Z" fill="var(--die)"/><rect x="22" y="28" width="20" height="10" rx="4" fill="var(--die)"/><circle cx="32" cy="18" r="10" fill="#f2c9a5"/><path d="M21 9 L24 1 L28 7 L32 0 L36 7 L40 1 L43 9Z" fill="#e8b923"/><path d="M22 14 Q20 26 24 30 M42 14 Q44 26 40 30" stroke="#6b3a1e" stroke-width="3" fill="none"/></svg>',
  das: '<svg viewBox="0 0 64 72" aria-hidden="true"><ellipse cx="32" cy="52" rx="24" ry="18" fill="var(--das)"/><circle cx="32" cy="24" r="17" fill="#f2c9a5"/><circle cx="26" cy="22" r="2.2" fill="#2a2a2a"/><circle cx="38" cy="22" r="2.2" fill="#2a2a2a"/><ellipse cx="32" cy="31" rx="4" ry="3" fill="#c76b6b"/><path d="M32 7 Q36 3 34 9" stroke="#2a2a2a" stroke-width="2" fill="none"/><rect x="28" y="30" width="8" height="4" rx="2" fill="#7fd1ff"/></svg>'
};

// progress, per batch, in this browser only
const key = id => "a1core:" + id; // kept stable so existing progress survives
const load = id => { try { return JSON.parse(localStorage.getItem(key(id)) || "{}") } catch (e) { return {} } };
const store = (id, v) => { try { localStorage.setItem(key(id), JSON.stringify(v)) } catch (e) {} };

const all = () => A1.tracks.flatMap(t => t.batches.map(b => ({ ...b, track: t })));
const ready = b => !!A1.batches[b.id];
const col = x => x.a && !x.plOnly ? "var(--" + x.a + ")" : "var(--oth)";
const kind = x => x.a ? "noun" : (x.ty.startsWith("verb") ? "verb" : "other");
const mark = s => s.replace(/\*(.+?)\*/g, "<mark>$1</mark>");
const esc = s => String(s).replace(/"/g, "&quot;");

function index() {
  document.title = "Deutsch lernen";
  const tile = b => {
    if (!ready(b)) return `<div class="tile soon"><span class="n">${b.n}</span><b>${b.title}</b><span class="meta">Coming soon</span></div>`;
    const W = A1.batches[b.id].words, k = load(b.id), n = W.filter(x => k[x.w]).length;
    return `<a class="tile" href="#${b.id}"><span class="n">${b.n}</span><b>${b.title}</b><span class="meta">${n} / ${W.length} known</span><div class="meter"><i style="width:${n / W.length * 100}%"></i></div></a>`;
  };
  app.innerHTML = `
  <header class="band"><div class="wrap">
    <h1>Deutsch lernen</h1>
    <p class="lead">Core German vocabulary from A1 to A2, about 1,300 words, served in small themed batches. Each word comes with a plain meaning, a real-life sentence, its English translation, and for nouns a weird little scene that glues the article to it.*</p>
    <div class="cast">
      <div class="who">${FIG.der}<div><b class="c-der">der</b><span>The Superhero. Masculine nouns. Cape, ego, loud entrances.</span></div></div>
      <div class="who">${FIG.die}<div><b class="c-die">die</b><span>The Queen. Feminine nouns. Crown, drama, very high standards.</span></div></div>
      <div class="who">${FIG.das}<div><b class="c-das">das</b><span>The Big Fat German Baby. Neuter nouns. Drools, burps, sits on things.</span></div></div>
    </div>
  </div></header>
  ${A1.tracks.map((t, i) => `<section class="band track" style="${i % 2 ? "background:var(--band)" : ""}"><div class="wrap">
    <h2>${t.title} <small>${t.words}, ${t.batches.length} batches</small></h2>
    <p class="sub">${t.sub}</p>
    <div class="tiles">${t.batches.map(tile).join("")}</div>
  </div></section>`).join("")}
  <section class="band"><div class="wrap">
    <h2>How to use it</h2>
    <p class="lead" style="margin-bottom:16px">About 15 minutes a day is enough. One batch takes 2 to 4 days.</p>
    <div class="how">
      <div><b>1. Read a group</b><p>Say each German sentence out loud once. For nouns, picture the scene for 3 seconds.</p></div>
      <div><b>2. Test yourself</b><p>Turn on Test me. Meanings blur out. Tap a card to check, and tick it when it is solid.</p></div>
      <div><b>3. Come back</b><p>Next day, filter by Not known yet. When the batch is done, reset the ticks a week later and run it again.</p></div>
    </div>
    <p style="margin-top:20px"><button class="chip warn" id="resetAll">Reset all progress</button></p>
    <div class="ask" id="askAll"><span>Clear every tick in every batch?</span><button class="chip solid" id="yesAll">Clear all</button><button class="chip" id="noAll">Cancel</button></div>
  </div></section>
  ${foot()}`;
  $("#resetAll").onclick = () => $("#askAll").classList.add("on");
  $("#noAll").onclick = () => $("#askAll").classList.remove("on");
  $("#yesAll").onclick = () => { all().forEach(b => { try { localStorage.removeItem(key(b.id)) } catch (e) {} }); index(); };
}

function batch(b) {
  const B = A1.batches[b.id], W = B.words;
  const list = all().filter(x => x.track === b.track);
  const i = list.findIndex(x => x.id === b.id), prev = list[i - 1], next = list[i + 1];
  let known = load(b.id), filt = "all";
  document.title = `${b.track.title} Batch ${b.n} | Deutsch lernen`;

  const card = x => `<article class="card${known[x.w] ? " done" : ""}" id="w-${W.indexOf(x)}" tabindex="0" data-w="${esc(x.w)}" data-k="${kind(x)}" style="--k:${col(x)}">
    <button class="known" aria-label="Mark ${esc(x.w)} as known" aria-pressed="${!!known[x.w]}">&#10003;</button>
    <div class="top">${x.a ? `<span class="art">${x.a}</span>` : ""}<span class="word">${x.w}</span>${x.pl ? `<span class="pl">pl. ${x.pl}</span>` : ""}</div>
    <div class="tag">${x.ty}</div>
    <p class="mean q">${x.m}</p>
    ${x.f ? `<p class="forms q">${x.f}</p>` : ""}
    <div class="ex"><div class="de">${mark(x.de)}</div><div class="en q">${x.en}</div></div>
    ${x.tip ? `<p class="tip q">${x.tip}</p>` : ""}
    ${x.sc ? `<div class="scene">${x.sc}</div>` : ""}
    <div class="hint">Tap to reveal</div>
  </article>`;
  const nav = (x, dir) => x
    ? (ready(x) ? `<a href="#${x.id}" class="${dir}"><small>${dir === "r" ? "Next" : "Previous"}: batch ${x.n}</small><b>${x.title}</b></a>` : `<div class="${dir}"><small>Next: batch ${x.n}, coming soon</small><b>${x.title}</b></div>`)
    : `<a href="#" class="${dir}"><small>${dir === "r" ? "Done with " + b.track.title : "Start"}</small><b>All batches</b></a>`;

  const S = B.story, used = new Set();
  const hl = t => t.replace(/\{([^}|]+)(?:\|([^}]+))?\}/g, (m, txt, k) => {
    k = k || txt; let i = W.findIndex(x => x.w === k); if (i < 0) i = W.findIndex(x => x.w.toLowerCase() === k.toLowerCase()); if (i < 0) return txt; k = W[i].w;
    used.add(k); return `<button class="hl" data-i="${i}" style="--k:${col(W[i])}" title="${esc(W[i].w)}">${txt}</button>`;
  });
  const storyLines = S ? S.lines.map(l => `<div class="line"><span class="who2">${l.who}</span><div><div class="sde">${hl(l.de)}</div><div class="sen">${l.en}</div></div></div>`).join("") : "";
  const story = S ? `<section class="band" id="story" style="background:var(--band)"><div class="wrap">
    <h2>Story time: ${S.title}</h2>
    <p class="sub">${S.intro} All ${used.size} of the ${W.length} words from this batch show up below, in their article colour. Tap one to jump to its card.</p>
    <div class="bar2"><button class="chip" id="noen" aria-pressed="false">Hide English</button><span class="sub" style="margin:0">Read each line out loud. With English hidden, tap a line to check it.</span></div>
    <div class="story">${storyLines}</div>
  </div></section>` : "";
  app.innerHTML = `
  <header class="band"><div class="wrap">
    <a class="back" href="#">&larr; All batches</a>
    <h1>${b.title}</h1>
    <p class="lead">${b.track.title}, batch ${b.n} of ${list.length}. ${B.lead}</p>
    <div class="legend"><span>${FIG.der}<b class="c-der">der</b> Superhero</span><span>${FIG.die}<b class="c-die">die</b> Queen</span><span>${FIG.das}<b class="c-das">das</b> Big Fat Baby</span><span style="color:var(--soft)">Plural: always die*</span>${S ? `<a class="chip" href="#" id="toStory">Jump to the story</a>` : ""}</div>
  </div></header>
  <div class="bar"><div class="wrap">
    <button class="chip" data-f="all" aria-pressed="true">All ${W.length}</button>
    <button class="chip" data-f="noun" aria-pressed="false">Nouns</button>
    <button class="chip" data-f="verb" aria-pressed="false">Verbs</button>
    <button class="chip" data-f="left" aria-pressed="false">Not known yet</button>
    <button class="chip" id="test" aria-pressed="false">Test me</button>
    <button class="chip warn" id="reset">Reset ticks</button>
    <div class="prog"><span id="pc"></span><div class="meter"><i id="pm"></i></div></div>
    <div class="ask" id="ask"><span>Clear all ticks in this batch and start over?</span><button class="chip solid" id="yes">Clear ticks</button><button class="chip" id="no">Cancel</button></div>
  </div></div>
  <main id="main">${B.groups.map((g, j) => `<section class="band" style="${j % 2 ? "background:var(--band)" : ""}"><div class="wrap"><h2>${g.t}</h2><p class="sub">${g.s}</p><div class="grid">${W.filter(x => x.g === g.id).map(card).join("")}</div></div></section>`).join("")}</main>
  ${story}
  <section class="band"><div class="wrap pn">${nav(prev, "l")}${nav(next, "r")}</div></section>
  ${foot()}`;
  window.scrollTo(0, 0);

  const main = $("#main");
  const prog = () => { const n = W.filter(x => known[x.w]).length; $("#pc").textContent = `${n} / ${W.length} known`; $("#pm").style.width = (n / W.length * 100) + "%"; };
  const apply = () => {
    main.querySelectorAll(".card").forEach(c => { const k = c.dataset.k; c.style.display = (filt === "all" || filt === k || (filt === "left" && !known[c.dataset.w])) ? "" : "none"; });
    main.querySelectorAll("section").forEach(s => { s.style.display = [...s.querySelectorAll(".card")].some(c => c.style.display !== "none") ? "" : "none"; });
  };
  document.querySelectorAll("[data-f]").forEach(btn => btn.onclick = () => { filt = btn.dataset.f; document.querySelectorAll("[data-f]").forEach(o => o.setAttribute("aria-pressed", o === btn)); apply(); });
  $("#test").onclick = () => { const on = !document.body.classList.contains("test"); document.body.classList.toggle("test", on); $("#test").setAttribute("aria-pressed", on); main.querySelectorAll(".card.open").forEach(c => c.classList.remove("open")); };
  $("#reset").onclick = () => $("#ask").classList.add("on");
  $("#no").onclick = () => $("#ask").classList.remove("on");
  $("#yes").onclick = () => {
    known = {}; store(b.id, known);
    main.querySelectorAll(".card").forEach(c => { c.classList.remove("done", "open"); c.querySelector(".known").setAttribute("aria-pressed", false); });
    $("#ask").classList.remove("on"); prog(); apply();
  };
  main.onclick = e => {
    const c = e.target.closest(".card"); if (!c) return;
    const k = e.target.closest(".known");
    if (k) {
      const w = c.dataset.w; if (known[w]) delete known[w]; else known[w] = 1;
      store(b.id, known); c.classList.toggle("done", !!known[w]); k.setAttribute("aria-pressed", !!known[w]); prog(); if (filt === "left") apply(); return;
    }
    if (document.body.classList.contains("test")) c.classList.toggle("open");
  };
  main.onkeydown = e => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card") && document.body.classList.contains("test")) { e.preventDefault(); e.target.classList.toggle("open"); } };
  if (S) {
    const st = $("#story");
    $("#toStory").onclick = e => { e.preventDefault(); st.scrollIntoView({ behavior: "smooth" }); };
    $("#noen").onclick = () => { const on = !st.classList.contains("noen"); st.classList.toggle("noen", on); $("#noen").setAttribute("aria-pressed", on); st.querySelectorAll(".line.open").forEach(l => l.classList.remove("open")); };
    st.onclick = e => {
      const h = e.target.closest(".hl");
      if (h) {
        filt = "all"; document.querySelectorAll("[data-f]").forEach(o => o.setAttribute("aria-pressed", o.dataset.f === "all")); apply();
        const c = $("#w-" + h.dataset.i); c.scrollIntoView({ behavior: "smooth", block: "center" });
        c.classList.remove("flash"); void c.offsetWidth; c.classList.add("flash"); return;
      }
      const l = e.target.closest(".line"); if (l && st.classList.contains("noen")) l.classList.toggle("open");
    };
  }
  prog();
}

function foot() {
  return `<footer class="band"><div class="wrap">
    <p>* Article memory method: the Superhero Technique by SmarterGerman (<a href="https://smartergerman.com/blog/german-articles/">smartergerman.com</a>). The idea of linking der, die and das to a Superhero, a Queen and a Big Fat German Baby is theirs; every scene, sentence and explanation on this site is original. Their free mini-course explains the method properly and is worth a look.</p>
    <p>Word scope follows the CEFR A1 and A2 levels, checked against the public Goethe-Institut word lists. The blue / red / green article colours are a common German textbook convention.</p>
  </div></footer>`;
}

function route() {
  document.body.classList.remove("test");
  const id = location.hash.slice(1);
  const b = all().find(x => x.id === id);
  if (b && ready(b)) batch(b); else index();
}
window.addEventListener("hashchange", route);
route();
}
