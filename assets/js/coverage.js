// Story coverage, shared by the page and scripts/validate.js.
// A word card counts as covered only when the story highlights it and, if the
// card lists variants in `v` (for example ["hell", "dunkel"]), every variant
// also appears in the story text. "a|b" means either form; "steige ... aus"
// allows words in between, for separable verbs.
(function (root) {
  const TAG = /\{([^}|]+)(?:\|([^}]+))?\}/g;
  const plain = s => s.replace(TAG, "$1");
  const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const variantRe = alt => new RegExp("(^|[^\\p{L}])" + alt.split(" ... ").map(p => escRe(p.trim())).join("[^.!?]*?") + "(?=[^\\p{L}]|$)", "iu");

  function find(words, key) {
    let i = words.findIndex(x => x.w === key);
    if (i < 0) i = words.findIndex(x => x.w.toLowerCase() === key.toLowerCase());
    return i;
  }

  function coverage(batch) {
    const words = batch.words, lines = (batch.story && batch.story.lines) || [];
    const text = lines.map(l => plain(l.de)).join("\n");
    const tagged = new Set(), unknownKeys = [];
    for (const l of lines) {
      for (const m of l.de.matchAll(TAG)) {
        const i = find(words, m[2] || m[1]);
        if (i >= 0) tagged.add(words[i].w);
        else if (m[2]) unknownKeys.push(m[2]);
      }
    }
    const missing = [];
    for (const x of words) {
      if (!tagged.has(x.w)) { missing.push(x.w); continue; }
      const gaps = (x.v || []).filter(v => !v.split("|").some(alt => variantRe(alt).test(text)));
      if (gaps.length) missing.push(`${x.w} (missing: ${gaps.map(g => g.split("|")[0]).join(", ")})`);
    }
    return { total: words.length, covered: words.length - missing.length, missing, unknownKeys };
  }

  root.A1Coverage = { coverage, find, TAG };
})(typeof window !== "undefined" ? window : globalThis);
