// A1.1 Batch 3. Examples only use words from Batches 1-3, plus names, digits and obvious look-alikes (Pizza, Bier, Ticket, Kaffee).
A1.batches["a1-1-b3"] = {
  lead: "31 words to understand prices, give your phone number and pay at the till. Builds on Batch 2: the ages and Jahre from your family sentences now get real numbers.",
  groups: [
    { id: "n0", t: "Zero to twelve", s: "Learn these by heart. Every bigger number is built from them. Sound hints are rough English look-alikes." },
    { id: "nbig", t: "Building big numbers", s: "Four patterns take you from 13 to 9,999. The back-to-front one is the only real trick." },
    { id: "money", t: "Money things", s: "The nouns you see on every receipt, card machine and waiting-room screen." },
    { id: "verb", t: "Three verbs for paying", s: "All regular. Same endings as wohnen and kennen." },
    { id: "pay", t: "At the till and in the restaurant", s: "The short phrases that come up every single time you pay." }
  ],
  words: [
    { g: "n0", w: "null", ty: "number, 0", m: "Zero. Sounds like \"nool\".", de: "Meine Nummer ist *null* eins sieben sechs ...", en: "My number is zero one seven six ...", tip: "German mobile numbers start with 015, 016 or 017. People read them in single digits or in pairs." },
    { g: "n0", w: "eins", ty: "number, 1", m: "One. Sounds like \"ines\".", de: "Das kostet *eins* fünfzig.", en: "That's one fifty. (1,50 €)", tip: "Counting or alone: eins. Before a noun it becomes ein / eine: ein Kaffee, eine Pizza." },
    { g: "n0", w: "zwei", ty: "number, 2", m: "Two. Sounds like \"tsvai\".", de: "*Zwei* Bier, bitte!", en: "Two beers, please!", tip: "On the phone you'll hear \"zwo\" instead, so it can't be confused with drei." },
    { g: "n0", w: "drei", ty: "number, 3", m: "Three. Sounds like \"dry\".", de: "Ich habe *drei* Kinder.", en: "I have three children." },
    { g: "n0", w: "vier", ty: "number, 4", m: "Four. Sounds like \"fear\".", de: "Wir sind *vier*.", en: "There are four of us. (at a restaurant door)" },
    { g: "n0", w: "fünf", ty: "number, 5", m: "Five. The ü is \"ee\" said with round lips.", de: "Das kostet *fünf* Euro.", en: "That costs five euros." },
    { g: "n0", w: "sechs", ty: "number, 6", m: "Six. Sounds like \"zex\".", de: "Mein Sohn ist *sechs* Jahre alt.", en: "My son is six years old." },
    { g: "n0", w: "sieben", ty: "number, 7", m: "Seven. Sounds like \"zee-ben\".", de: "Die Pizza kostet *sieben* Euro.", en: "The pizza costs seven euros." },
    { g: "n0", w: "acht", ty: "number, 8", m: "Eight. The ch is a soft throat sound, like the end of Scottish \"loch\".", de: "*Acht* Euro? Das ist teuer!", en: "Eight euros? That's expensive!" },
    { g: "n0", w: "neun", ty: "number, 9", m: "Nine. Sounds like \"noin\".", de: "Meine Tochter ist *neun*.", en: "My daughter is nine." },
    { g: "n0", w: "zehn", ty: "number, 10", m: "Ten. Sounds like \"tsain\".", de: "Haben Sie *zehn* Cent?", en: "Do you have ten cents?" },
    { g: "n0", w: "elf", ty: "number, 11", m: "Eleven. Yes, like the fantasy creature.", de: "Das Ticket kostet *elf* Euro.", en: "The ticket costs eleven euros." },
    { g: "n0", w: "zwölf", ty: "number, 12", m: "Twelve. Sounds like \"tsvelf\" with round lips.", de: "Das kostet zusammen *zwölf* Euro.", en: "That's twelve euros all together." },
    { g: "nbig", w: "13 to 19: -zehn", ty: "number pattern", m: "Small number + zehn, just like English \"-teen\".", f: "dreizehn, vierzehn, fünfzehn, <b>sechzehn</b>, <b>siebzehn</b>, achtzehn, neunzehn", de: "Meine Schwester ist *sechzehn*.", en: "My sister is sixteen.", tip: "Two shortcuts: sechzehn drops the s, siebzehn drops the en." },
    { g: "nbig", w: "20 to 90: -zig", ty: "number pattern", m: "The tens end in -zig, like English \"-ty\".", f: "zwanzig, <b>dreißig</b>, vierzig, fünfzig, <b>sechzig</b>, <b>siebzig</b>, achtzig, neunzig", de: "Das kostet *dreißig* Euro.", en: "That costs thirty euros.", tip: "dreißig is the rebel: ß instead of z. sechzig and siebzig use the same shortcuts as the teens." },
    { g: "nbig", w: "21 to 99: back to front", ty: "number pattern", m: "Say the ones first, then \"und\", then the tens. 21 = one-and-twenty.", f: "21 <b>einundzwanzig</b>, 34 <b>vierunddreißig</b>, 99 <b>neunundneunzig</b>", de: "Ich bin *vierunddreißig* Jahre alt.", en: "I am thirty-four years old.", tip: "When someone says a price, write the second digit first, then the first. It feels odd for about a week, then it's automatic." },
    { g: "nbig", w: "hundert / tausend", ty: "numbers, 100 and 1,000", m: "Hundred and thousand. Everything joins into one long word.", f: "250 <b>zweihundertfünfzig</b>, 2026 <b>zweitausendsechsundzwanzig</b>", de: "*Hundert* Euro? Das ist teuer!", en: "A hundred euros? That's expensive!", tip: "Years before 2000 use hundert: 1990 = neunzehnhundertneunzig." },
    { g: "money", w: "Euro", a: "der", pl: "die Euro", ty: "noun", m: "Euro. Stays \"Euro\" after numbers: fünf Euro.", de: "Das kostet zwei *Euro* fünfzig.", en: "That costs two euros fifty.", tip: "Germans write 2,50 € with a comma, and say it \"zwei Euro fünfzig\".", sc: "The <b>Superhero</b> uses a giant euro coin as a shield. A bullet bounces off, the coin swings back and smacks him in the face. He now has a €-shaped bruise on his forehead and calls it a logo." },
    { g: "money", w: "Cent", a: "der", pl: "die Cent", ty: "noun", m: "Cent. 100 Cent = 1 Euro.", de: "Das kostet neunundneunzig *Cent*.", en: "That costs ninety-nine cents.", sc: "A single cent falls into a street drain. The <b>Superhero</b> uses laser eyes, super strength and his whole cape to get it out while a crowd films him. It turns out to be a bottle cap." },
    { g: "money", w: "Geld", a: "das", ty: "noun, no plural", m: "Money.", de: "Ich habe kein *Geld*.", en: "I don't have any money.", sc: "The <b>Big Fat Baby</b> grabs a 50-euro note, chews it for ten minutes and hands it to the Späti guy, dripping wet. He sighs and takes it." },
    { g: "money", w: "Karte", a: "die", pl: "die Karten", ty: "noun", m: "Card (bank card). Also a ticket, a map or a menu.", de: "Kann ich mit *Karte* zahlen?", en: "Can I pay by card?", tip: "Kann ich ...? = Can I ...? You'll learn können in A1.2, but this sentence is worth stealing now.", sc: "The <b>Queen</b> pays with a card made of solid gold. She taps it on the machine and squashes it flat. The machine wheezes \"Danke, Majestät\" and dies." },
    { g: "money", w: "Preis", a: "der", pl: "die Preise", ty: "noun", m: "Price. Also \"prize\".", de: "Der *Preis* ist gut.", en: "The price is good.", sc: "The <b>Superhero</b> wins a prize for cheapest hero in Berlin. The trophy is a giant price tag. He wears it around his neck everywhere, and people keep trying to buy him." },
    { g: "money", w: "Nummer", a: "die", pl: "die Nummern", ty: "noun", m: "Number, as in phone number, house number or waiting ticket.", de: "Wie ist Ihre *Nummer*?", en: "What's your number?", tip: "Nummer is a label (phone, ticket). A number in maths is die Zahl.", sc: "The <b>Queen</b> pulls waiting ticket Nummer 847 at the Bürgeramt. The screen shows 12. She waits so long her crown grows cobwebs and a pigeon nests in it." },
    { g: "verb", w: "kosten", ty: "verb", m: "To cost.", f: "es <b>kostet</b>, sie <b>kosten</b>", de: "Was *kostet* das?", en: "How much is that?", tip: "You almost only need two forms: das kostet (one thing) and die kosten (several)." },
    { g: "verb", w: "zahlen", ty: "verb", m: "To pay.", f: "ich <b>zahle</b>, du <b>zahlst</b>, er/sie <b>zahlt</b>", de: "*Zahlen*, bitte!", en: "The bill, please! (literally: pay, please)", tip: "Say it to the waiter. In restaurants they don't bring the bill until you ask." },
    { g: "verb", w: "brauchen", ty: "verb", m: "To need.", f: "ich <b>brauche</b>, du <b>brauchst</b>, er/sie <b>braucht</b>", de: "*Brauchst* du Geld?", en: "Do you need money?" },
    { g: "pay", w: "wie viel", ty: "question words", m: "How much / how many. Two words.", de: "*Wie viel* kostet das?", en: "How much does that cost?", tip: "Was kostet das? means exactly the same and is shorter." },
    { g: "pay", w: "teuer", ty: "adjective", m: "Expensive.", de: "Die Pizza ist *teuer*, aber gut.", en: "The pizza is expensive, but good." },
    { g: "pay", w: "billig", ty: "adjective", m: "Cheap. Can sound like \"cheap and bad\".", de: "Das Bier ist *billig*.", en: "The beer is cheap.", tip: "For a good price without the cheap feeling, Germans say günstig." },
    { g: "pay", w: "bar", ty: "adverb", m: "In cash.", de: "Ich zahle *bar*.", en: "I'm paying cash.", tip: "Plenty of Berlin cafés and Spätis are still cash only. Look for a sign saying \"Nur bar\"." },
    { g: "pay", w: "zusammen / getrennt", ty: "adverbs", m: "Together / separately. Who pays what.", de: "*Zusammen* oder *getrennt*?", en: "One bill or separate?", tip: "The waiter asks this at every table. Getrennt means each person pays for their own food." }
  ]
};

A1.batches["a1-1-b3"].story = {
  title: "Coffee with Anna and Leo",
  intro: "Tom, Anna and little Leo go to a café in Kreuzberg. Berlin prices are a shock for Tom.",
  lines: [
    { who: "Waiter", de: "Hallo! {Zwei|zwei}?", en: "Hello! Two?" },
    { who: "Anna", de: "Nein, {drei}. Leo kommt auch.", en: "No, three. Leo is coming too." },
    { who: "Tom", de: "Zwei Kaffee und ein Wasser, bitte. {Wie viel|wie viel} {kostet|kosten} ein Kaffee?", en: "Two coffees and a water, please. How much is a coffee?" },
    { who: "Waiter", de: "{Vier|vier} {Euro} {fünfzig|20 to 90: -zig}.", en: "Four euros fifty." },
    { who: "Tom", de: "Vier Euro fünfzig? Das ist {teuer}! In Rom kostet ein Kaffee {eins} zwanzig.", en: "Four fifty? That's expensive! In Rome a coffee costs one twenty." },
    { who: "Waiter", de: "Der {Preis} ist der Preis.", en: "The price is the price." },
    { who: "Anna", de: "Berlin ist nicht {billig}, Tom.", en: "Berlin isn't cheap, Tom." },
    { who: "Leo", de: "Mama, ich bin {sechs}. Ich {brauche|brauchen} {Geld}!", en: "Mum, I'm six. I need money!" },
    { who: "Anna", de: "Du hast {zehn} {Cent}.", en: "You have ten cents." },
    { who: "Leo", de: "Zehn Cent? Das ist nicht gut!", en: "Ten cents? That's not good!" },
    { who: "Tom", de: "Anna, wie ist deine {Nummer}?", en: "Anna, what's your number?" },
    { who: "Anna", de: "{Null|null} eins {sieben} {fünf}, {acht} {neun} ...", en: "Zero one seven five, eight nine ..." },
    { who: "Tom", de: "Entschuldigung, ich verstehe nicht. {Neunzehn|13 to 19: -zehn}?", en: "Sorry, I don't understand. Nineteen?" },
    { who: "Anna", de: "Nein! Neun!", en: "No! Nine!" },
    { who: "Tom", de: "{Zahlen|zahlen}, bitte!", en: "The bill, please!" },
    { who: "Waiter", de: "{Zusammen oder getrennt|zusammen / getrennt}?", en: "Together or separately?" },
    { who: "Tom", de: "Zusammen.", en: "Together." },
    { who: "Waiter", de: "Das kostet {elf} Euro {neunundneunzig|21 to 99: back to front}. Mit {Karte} oder {bar}?", en: "That's eleven euros ninety-nine. Card or cash?" },
    { who: "Tom", de: "Bar. Hier sind {zwölf} Euro. Danke!", en: "Cash. Here's twelve euros. Thanks!" },
    { who: "Leo", de: "Ich {zahle|zahlen} auch! Hier: {hundert|hundert / tausend} Euro!", en: "I'm paying too! Here: a hundred euros!" },
    { who: "Anna", de: "Leo, das ist ein Foto von Geld!", en: "Leo, that's a photo of money!" }
  ]
};
