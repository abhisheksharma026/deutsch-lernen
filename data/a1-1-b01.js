// A1.1 Batch 1. Fields: g group, w word, a article, pl plural, ty type, m meaning,
// f forms, de example (*target*), en translation, tip, sc Superhero scene (original).
A1.batches["a1-1-b1"] = {
  lead: "32 words to introduce yourself, ask the basic questions and survive \"Entschuldigung, sprechen Sie Englisch?\". Every noun gets a weird little scene so the article sticks.",
  groups: [
    { id: "greet", t: "Hello, thanks, sorry", s: "The words you say ten times a day at the Späti, the bakery and the Bürgeramt." },
    { id: "me", t: "Me, you, and the polite you", s: "Three tiny words. Get du vs Sie right and Germans relax instantly." },
    { id: "verb", t: "The first 7 verbs", s: "Only the forms you need right now. sein and sprechen are irregular, so learn those forms as-is." },
    { id: "q", t: "Question words", s: "All start with W. They go first in the sentence, the verb comes right after." },
    { id: "noun", t: "People and places", s: "Read the scene once, picture it for 3 seconds, move on. Plurals are always die." },
    { id: "small", t: "Little glue words", s: "Tiny, but you will use them in almost every sentence." }
  ],
  words: [
    { g: "greet", w: "hallo", ty: "greeting", m: "Hi / hello. Works for friends and strangers.", de: "*Hallo*, Frau Müller!", en: "Hello, Mrs. Müller!" },
    { g: "greet", w: "tschüss", ty: "greeting", m: "Bye. Casual, but fine almost everywhere.", de: "Danke, *tschüss*!", en: "Thanks, bye!", tip: "The classic checkout line at any shop." },
    { g: "greet", w: "danke", ty: "expression", m: "Thank you.", de: "Nein, *danke*.", en: "No, thank you." },
    { g: "greet", w: "bitte", ty: "expression", m: "Please. Also \"you're welcome\" and \"here you go\".", de: "Ein Wasser, *bitte*.", en: "A water, please." },
    { g: "greet", w: "ja", ty: "expression", m: "Yes.", de: "*Ja*, ich verstehe.", en: "Yes, I understand." },
    { g: "greet", w: "nein", ty: "expression", m: "No.", de: "*Nein*, ich wohne nicht in Berlin.", en: "No, I don't live in Berlin." },
    { g: "greet", w: "Entschuldigung", a: "die", pl: "die Entschuldigungen", ty: "noun, used as a phrase", m: "Excuse me / sorry. Use it to get attention or to apologise.", de: "*Entschuldigung*, sprechen Sie Englisch?", en: "Excuse me, do you speak English?", sc: "The <b>Queen</b> stomps on your toe with her spiked heel. Then she stares at you until <i>you</i> say Entschuldigung to <i>her</i>." },
    { g: "me", w: "ich", ty: "pronoun", m: "I. Lowercase, unlike English.", de: "*Ich* bin Tom.", en: "I'm Tom." },
    { g: "me", w: "du", ty: "pronoun", m: "You, informal. For friends, kids, colleagues who said \"du\" first.", de: "Wo wohnst *du*?", en: "Where do you live?" },
    { g: "me", w: "Sie", ty: "pronoun", m: "You, formal. For strangers, officials, older people. Always a capital S.", de: "Wie heißen *Sie*?", en: "What's your name?", tip: "When in doubt, use Sie. Nobody is offended by too polite." },
    { g: "verb", w: "sein", ty: "verb, irregular", m: "To be.", f: "ich <b>bin</b>, du <b>bist</b>, er/sie <b>ist</b>, Sie <b>sind</b>", de: "Wer *ist* das?", en: "Who is that?" },
    { g: "verb", w: "haben", ty: "verb, slightly irregular", m: "To have.", f: "ich <b>habe</b>, du <b>hast</b>, er/sie <b>hat</b>", de: "Ich *habe* ein Kind.", en: "I have a child." },
    { g: "verb", w: "heißen", ty: "verb", m: "To be called. The normal way to give your name.", f: "ich <b>heiße</b>, du <b>heißt</b>, er/sie <b>heißt</b>", de: "Ich *heiße* Max. Und du?", en: "My name is Max. And you?" },
    { g: "verb", w: "kommen", ty: "verb", m: "To come. With \"aus\" it means where you are from.", f: "ich <b>komme</b>, du <b>kommst</b>, er/sie <b>kommt</b>", de: "Ich *komme* aus Italien.", en: "I come from Italy." },
    { g: "verb", w: "wohnen", ty: "verb", m: "To live somewhere (your home address, not \"be alive\").", f: "ich <b>wohne</b>, du <b>wohnst</b>, er/sie <b>wohnt</b>", de: "Ich *wohne* in Berlin.", en: "I live in Berlin." },
    { g: "verb", w: "sprechen", ty: "verb, irregular", m: "To speak.", f: "ich <b>spreche</b>, du <b>sprichst</b>, er/sie <b>spricht</b>", de: "*Sprichst* du Deutsch?", en: "Do you speak German?", tip: "The e flips to i for du and er/sie. Very common pattern, you will see it again." },
    { g: "verb", w: "verstehen", ty: "verb", m: "To understand.", f: "ich <b>verstehe</b>, du <b>verstehst</b>, er/sie <b>versteht</b>", de: "Ich *verstehe* nicht.", en: "I don't understand.", tip: "Probably the most useful sentence of your first month." },
    { g: "q", w: "wer", ty: "question word", m: "Who.", de: "*Wer* ist der Mann?", en: "Who is the man?", tip: "Trap: wer = who, wo = where. Not \"where\"." },
    { g: "q", w: "was", ty: "question word", m: "What.", de: "*Was* ist das?", en: "What is that?" },
    { g: "q", w: "wie", ty: "question word", m: "How. Also used to ask someone's name.", de: "*Wie* heißt du?", en: "What's your name? (literally: how are you called?)" },
    { g: "q", w: "wo", ty: "question word", m: "Where (location).", de: "*Wo* wohnen Sie?", en: "Where do you live?" },
    { g: "q", w: "woher", ty: "question word", m: "From where.", de: "*Woher* kommen Sie?", en: "Where are you from?" },
    { g: "noun", w: "Name", a: "der", pl: "die Namen", ty: "noun", m: "Name.", de: "Mein *Name* ist Anna.", en: "My name is Anna.", sc: "The <b>Superhero</b> gets his name embroidered on his cape in giant gold letters. It is spelled wrong. He flies over Berlin shouting the correct spelling while a pigeon heckles him." },
    { g: "noun", w: "Frau", a: "die", pl: "die Frauen", ty: "noun", m: "Woman. Also \"Mrs.\" and \"wife\".", de: "*Frau* Schmidt, bitte!", en: "Mrs. Schmidt, please! (called in a waiting room)", sc: "The <b>Queen</b> walks into the ballroom and sees another woman in the exact same dress. Both freeze. The Queen's crown slowly slides off and clangs on the floor." },
    { g: "noun", w: "Mann", a: "der", pl: "die Männer", ty: "noun", m: "Man. Also \"husband\".", de: "Wer ist der *Mann*?", en: "Who is the man?", sc: "The <b>Superhero</b> takes off his mask in front of the mirror and sees just a tired man in socks with holes. He puts the mask back on immediately." },
    { g: "noun", w: "Kind", a: "das", pl: "die Kinder", ty: "noun", m: "Child.", de: "Das *Kind* heißt Mia.", en: "The child's name is Mia.", sc: "The <b>Big Fat Baby</b> is babysitting a normal child. It holds the kid like a teddy bear and burps loudly right in its face." },
    { g: "noun", w: "Stadt", a: "die", pl: "die Städte", ty: "noun", m: "City / town.", de: "Wie heißt die *Stadt*?", en: "What's the city called?", sc: "The <b>Queen</b>, 100 metres tall, stomps through Berlin in high heels. Her crown scrapes the TV tower and makes it ring like a bell." },
    { g: "noun", w: "Land", a: "das", pl: "die Länder", ty: "noun", m: "Country. Also \"the countryside\".", de: "Aus welchem *Land* kommst du?", en: "Which country are you from?", sc: "The <b>Big Fat Baby</b> crawls onto a giant world map and licks an entire country. Now that country is wet, sticky and smells of milk." },
    { g: "noun", w: "Sprache", a: "die", pl: "die Sprachen", ty: "noun", m: "Language.", de: "Welche *Sprache* sprichst du?", en: "Which language do you speak?", sc: "The <b>Queen</b> opens her mouth to give a speech and only seagull noises come out. She has lost her language. Her guards nervously translate the squawks." },
    { g: "small", w: "nicht", ty: "negation", m: "Not. Goes near the end of a short sentence.", de: "Ich verstehe das *nicht*.", en: "I don't understand that." },
    { g: "small", w: "auch", ty: "adverb", m: "Also / too.", de: "Ich wohne *auch* in Berlin.", en: "I live in Berlin too." },
    { g: "small", w: "gut", ty: "adjective", m: "Good. Also \"well\".", de: "Sie sprechen *gut* Deutsch!", en: "You speak German well!" }
  ]
};

// Story: every batch word appears at least once. {shown text|card word} highlights a word and links it to its card.
A1.batches["a1-1-b1"].story = {
  title: "Tom at the Bürgeramt",
  intro: "Tom has just moved to Berlin and needs to register his address. Frau Schmidt is not in the mood.",
  lines: [
    { who: "Tom", de: "{Hallo}! {Entschuldigung}, {sprechen} {Sie} Englisch?", en: "Hello! Excuse me, do you speak English?" },
    { who: "Frau Schmidt", de: "{Nein}. {Ich} {spreche|sprechen} Deutsch.", en: "No. I speak German." },
    { who: "Tom", de: "Ich {verstehe|verstehen} {nicht} {gut} Deutsch.", en: "I don't understand German well." },
    { who: "Frau Schmidt", de: "{Wie} {heißen} Sie?", en: "What's your name?" },
    { who: "Tom", de: "Mein {Name} {ist|sein} Tom Rossi.", en: "My name is Tom Rossi." },
    { who: "Frau Schmidt", de: "{Danke}. {Woher} {kommen} Sie?", en: "Thank you. Where are you from?" },
    { who: "Tom", de: "Aus Rom.", en: "From Rome." },
    { who: "Frau Schmidt", de: "Rom? {Was} ist das? Eine {Stadt}? Ein {Land}?", en: "Rome? What is that? A city? A country?" },
    { who: "Tom", de: "Rom ist eine Stadt! Das Land ist Italien, und die {Sprache} ist Italienisch.", en: "Rome is a city! The country is Italy, and the language is Italian." },
    { who: "Frau Schmidt", de: "{Ja}, ja. Und {wo} {wohnen} Sie in Berlin?", en: "Yes, yes. And where do you live in Berlin?" },
    { who: "Tom", de: "Ich wohne in Kreuzberg.", en: "I live in Kreuzberg." },
    { who: "Frau Schmidt", de: "{Wer} ist der {Mann}?", en: "Who is the man?" },
    { who: "Tom", de: "Das ist Paul. Paul kommt {auch} aus Rom.", en: "That's Paul. Paul is from Rome too." },
    { who: "Frau Schmidt", de: "Und das {Kind}?", en: "And the child?" },
    { who: "Mia", de: "Hallo! Ich heiße Mia. Wie heißt {du}?", en: "Hi! I'm Mia. What's your name?" },
    { who: "Frau Schmidt", de: "Ich bin {Frau} Schmidt. Und ich bin nicht \"du\". Ich bin \"Sie\"!", en: "I am Mrs. Schmidt. And I am not \"du\". I am \"Sie\"!" },
    { who: "Mia", de: "Oh. {Haben|haben} Sie auch ein Kind?", en: "Oh. Do you have a child too?" },
    { who: "Frau Schmidt", de: "... Ja. Gut. Danke, {tschüss}!", en: "... Yes. Right. Thank you, bye!" },
    { who: "Tom", de: "{Bitte}! Tschüss!", en: "You're welcome! Bye!" }
  ]
};
