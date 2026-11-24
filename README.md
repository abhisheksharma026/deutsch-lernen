# Deutsch lernen

Core German vocabulary in small themed batches, level by level from A1 upward.

Every word comes with:

- a simple meaning
- a short real-life example sentence and its English translation
- for nouns, a weird little scene that makes der, die or das stick

Each batch ends with a short story that uses every word from that batch.

## Levels

| Level | Status |
|---|---|
| A1.1 | In progress |
| A1.2 | Planned |
| A2.1, A2.2 | Planned |
| B1 | Planned |

## Run it

No build step. Open `index.html` in a browser.

## Project layout

```
index.html           page shell, loads the scripts below
assets/css/          styles
assets/js/app.js     index and batch views
data/catalog.js      levels and batch titles
data/<batch>.js      words and story for one batch
```

## Add a batch

1. Create `data/<batch-id>.js` with its words, groups and story.
2. Add a `<script>` tag for it in `index.html`.

The index and the previous / next links pick it up automatically.

## Credits

- Article technique: the Superhero Technique by [SmarterGerman](https://smartergerman.com/blog/german-articles/). Every scene, sentence and story in this repo is original.
- Word scope follows the CEFR levels, checked against the public Goethe-Institut word lists.

## License

[MIT](LICENSE)
