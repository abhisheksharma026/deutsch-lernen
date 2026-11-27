// A1.1 Batch 9. Examples only use words from Batches 1-9, plus names, digits and obvious look-alikes (Ingenieurin, Spanisch, Pizza).
A1.batches["a1-1-b9"] = {
  lead: "30 words for your job, your colleagues and a normal day from getting up to Feierabend. Builds on Batches 4 and 8: clock times, zur Arbeit and Verspätung come to the office.",
  groups: [
    { id: "work", t: "At work", s: "Besprechung is die, like every -ung word. Büro and Homeoffice are das." },
    { id: "job", t: "Jobs", s: "For a woman, add -in and the word becomes die: der Lehrer, die Lehrerin. You saw the same with Freund and Freundin." },
    { id: "day", t: "My day: verbs", s: "aufstehen and anfangen split like umsteigen: Ich stehe um sieben auf. arbeiten adds an e: du arbeitest." },
    { id: "often", t: "How often?", s: "When one of these starts the sentence, the verb still comes second: Manchmal koche ich." },
    { id: "end", t: "End of the day", s: "Feierabend is the moment work is over, and Germans protect it." }
  ],
  words: [
    { g: "work", w: "Arbeit", a: "die", pl: "die Arbeiten", ty: "noun", m: "Work, job.", de: "Ich gehe zur *Arbeit*.", en: "I'm going to work.", sc: "The <b>Queen</b> tries a normal job for one day. She files every single document under Q, for Queen. By lunchtime the office has closed for good." },
    { g: "work", w: "Beruf", a: "der", pl: "die Berufe", ty: "noun", m: "Profession, occupation.", de: "Was sind Sie von *Beruf*?", en: "What do you do for a living?", tip: "The standard question at every form and party. Answer: Ich bin Lehrer. No \"ein\" before the job.", sc: "The <b>Superhero</b> fills in a form at the Bürgeramt. Beruf: Superhero. Frau Schmidt sends it back: not a real profession." },
    { g: "work", w: "Büro", a: "das", pl: "die Büros", ty: "noun", m: "Office.", de: "Ich arbeite im *Büro*.", en: "I work in an office.", sc: "The <b>Big Fat Baby</b>'s office is a playpen with a laptop. It sends emails by sitting on the keyboard. Its boss says they're the clearest emails in the company." },
    { g: "work", w: "Firma", a: "die", pl: "die Firmen", ty: "noun", m: "Company, firm.", de: "Die *Firma* ist in Berlin.", en: "The company is in Berlin.", sc: "The <b>Queen</b> starts a company that sells crowns. She is the only customer. Business is excellent." },
    { g: "work", w: "Kollege", a: "der", pl: "die Kollegen", ty: "noun", m: "Colleague (male). Female: die Kollegin.", de: "Mein *Kollege* heißt Max.", en: "My colleague's name is Max.", sc: "Every day a colleague steals the <b>Superhero</b>'s yoghurt from the office fridge. He has solved every crime in Berlin except this one." },
    { g: "work", w: "Chef", a: "der", pl: "die Chefs", ty: "noun", m: "Boss. Female: die Chefin. Not a cook (that's der Koch).", de: "Der *Chef* ist heute nicht da.", en: "The boss isn't in today.", sc: "The <b>Superhero</b>'s boss is a hamster in a tiny suit. Nobody knows how it got the job, but it's brilliant with budgets." },
    { g: "work", w: "Pause", a: "die", pl: "die Pausen", ty: "noun", m: "Break.", de: "Wir machen eine *Pause*.", en: "We're taking a break.", sc: "The <b>Queen</b>'s coffee break lasts three weeks. When she comes back, the whole company has moved to Hamburg." },
    { g: "work", w: "Besprechung", a: "die", pl: "die Besprechungen", ty: "noun", m: "Meeting.", de: "Die *Besprechung* dauert eine Stunde.", en: "The meeting takes an hour.", sc: "In the <b>Queen</b>'s meetings, only she talks. Everyone else has to curtsy every five minutes, and the minutes just say: Yes, Majesty." },
    { g: "work", w: "Homeoffice", a: "das", ty: "noun", m: "Working from home. A German-English word.", de: "Am Freitag bin ich im *Homeoffice*.", en: "On Friday I'm working from home.", tip: "Germans say \"im Homeoffice sein\". In English it's just \"working from home\".", sc: "The <b>Big Fat Baby</b> works from home in pyjamas. On every video call it drools on the mute button, and somehow everyone else is muted." },
    { g: "job", w: "Lehrer", a: "der", pl: "die Lehrer", ty: "noun", m: "Teacher (male). Female: die Lehrerin.", de: "Mein *Lehrer* spricht schnell.", en: "My teacher speaks fast.", sc: "The <b>Superhero</b> becomes a German teacher. He corrects articles with laser eyes. Every wrong der, die or das starts smoking on the page." },
    { g: "job", w: "Student", a: "der", pl: "die Studenten", ty: "noun", m: "University student (male). Female: die Studentin.", de: "Ich bin *Student*.", en: "I'm a student.", tip: "Student only means university. A school pupil is der Schüler / die Schülerin.", sc: "The <b>Superhero</b> has been a student for 15 years. His thesis, \"Capes through history\", is still on page 3." },
    { g: "job", w: "Kellner", a: "der", pl: "die Kellner", ty: "noun", m: "Waiter. Female: die Kellnerin.", de: "Der *Kellner* kommt.", en: "The waiter is coming.", tip: "To call a waiter, say \"Entschuldigung!\" or just make eye contact. Never shout \"Kellner!\"", sc: "The deadpan café waiter is secretly the <b>Superhero</b>. Nobody has noticed, because he has never once smiled." },
    { g: "day", w: "arbeiten", ty: "verb", m: "To work.", f: "ich <b>arbeite</b>, du <b>arbeitest</b>, er/sie <b>arbeitet</b>", de: "Wo *arbeitest* du?", en: "Where do you work?", tip: "Extra e for du and er/sie, like warten and finden." },
    { g: "day", w: "machen", ty: "verb", m: "To do, to make.", f: "ich <b>mache</b>, du <b>machst</b>, er/sie <b>macht</b>", de: "Was *machst* du am Wochenende?", en: "What are you doing at the weekend?" },
    { g: "day", w: "aufstehen", ty: "verb, separable", m: "To get up.", f: "ich <b>stehe</b> ... <b>auf</b>, du <b>stehst</b> ... <b>auf</b>", de: "Ich *stehe* um sieben Uhr *auf*.", en: "I get up at seven." },
    { g: "day", w: "anfangen", ty: "verb, separable, irregular", m: "To start, to begin.", f: "ich <b>fange</b> ... <b>an</b>, du <b>fängst</b> ... <b>an</b>, er/sie <b>fängt</b> ... <b>an</b>", de: "Der Kurs *fängt* um neun *an*.", en: "The course starts at nine." },
    { g: "day", w: "lernen", ty: "verb", m: "To learn, to study.", f: "ich <b>lerne</b>, du <b>lernst</b>, er/sie <b>lernt</b>", de: "Ich *lerne* Deutsch.", en: "I'm learning German." },
    { g: "day", w: "frühstücken", ty: "verb", m: "To have breakfast. The verb from das Frühstück.", f: "ich <b>frühstücke</b>, du <b>frühstückst</b>, er/sie <b>frühstückt</b>", de: "Wir *frühstücken* um acht.", en: "We have breakfast at eight." },
    { g: "day", w: "duschen", ty: "verb", m: "To shower.", f: "ich <b>dusche</b>, du <b>duschst</b>, er/sie <b>duscht</b>", de: "Ich *dusche* am Abend.", en: "I shower in the evening." },
    { g: "day", w: "verdienen", ty: "verb", m: "To earn.", f: "ich <b>verdiene</b>, du <b>verdienst</b>, er/sie <b>verdient</b>", de: "Er *verdient* gut.", en: "He earns well." },
    { g: "often", w: "immer", ty: "adverb", m: "Always.", de: "Der Bus ist *immer* spät.", en: "The bus is always late." },
    { g: "often", w: "oft", ty: "adverb", m: "Often.", de: "Ich gehe *oft* in den Park.", en: "I often go to the park." },
    { g: "often", w: "manchmal", ty: "adverb", m: "Sometimes.", de: "*Manchmal* koche ich.", en: "Sometimes I cook." },
    { g: "often", w: "nie", ty: "adverb", m: "Never.", de: "Ich trinke *nie* Kaffee.", en: "I never drink coffee." },
    { g: "often", w: "jeden Tag", ty: "phrase", m: "Every day.", de: "Ich lerne *jeden Tag* Deutsch.", en: "I learn German every day.", tip: "Same pattern: jede Woche (every week), jedes Jahr (every year). The ending follows the article." },
    { g: "often", w: "morgens / abends", ty: "adverbs", m: "In the mornings / in the evenings, as a habit.", de: "*Morgens* trinke ich Kaffee.", en: "In the mornings I drink coffee.", tip: "Also mittags (at midday) and nachts (at night). Lowercase, with -s." },
    { g: "end", w: "müde", ty: "adjective", m: "Tired.", de: "Ich bin *müde*.", en: "I'm tired." },
    { g: "end", w: "fertig", ty: "adjective", m: "Finished, ready. Also \"exhausted\".", de: "Bist du *fertig*?", en: "Are you done? / Are you ready?", tip: "Ich bin fertig can mean \"I'm finished\" or \"I'm completely worn out\". Tone tells you which." },
    { g: "end", w: "Feierabend", a: "der", pl: "die Feierabende", ty: "noun", m: "End of the working day, and the free time after it.", de: "Um fünf ist *Feierabend*.", en: "Work's over at five.", tip: "\"Schönen Feierabend!\" is how colleagues say goodbye in the evening.", sc: "At 17:00 sharp the <b>Superhero</b> stops mid-rescue: Feierabend. The cat stays in the tree until 9 o'clock tomorrow." },
    { g: "end", w: "Handy", a: "das", pl: "die Handys", ty: "noun", m: "Mobile phone. False friend: not \"handy\".", de: "Mein *Handy* ist kaputt.", en: "My phone is broken.", sc: "The <b>Big Fat Baby</b> drops the phone into its milk bottle. Now it only plays lullabies, and every call goes straight to sleep." }
  ]
};

A1.batches["a1-1-b9"].story = {
  title: "Tom's Monday",
  intro: "Tom's first week at a new job in Berlin. The alarm goes off at six.",
  lines: [
    { who: "Tom", de: "Sechs Uhr? Ich bin so {müde} ...", en: "Six o'clock? I'm so tired ..." },
    { who: "Tom", de: "OK. Ich {stehe auf|aufstehen}, {dusche|duschen} und {frühstücke|frühstücken}.", en: "OK. I get up, shower and have breakfast." },
    { who: "Tom", de: "Das {Büro} ist schön!", en: "The office is nice!" },
    { who: "Lisa", de: "Hallo! Bist du Tom? Ich bin Lisa, deine {Kollegin|Kollege}.", en: "Hi! Are you Tom? I'm Lisa, your colleague." },
    { who: "Tom", de: "Hallo, Lisa! Was ist dein {Beruf}?", en: "Hi, Lisa! What's your job?" },
    { who: "Lisa", de: "Ich bin Ingenieurin. Aber {manchmal} ist mein Beruf: Kaffee trinken.", en: "I'm an engineer. But sometimes my job is drinking coffee." },
    { who: "Lisa", de: "Die {Firma} ist gut. Aber der {Chef} ... er ist {immer} hier. Er {arbeitet|arbeiten} {jeden Tag}, {morgens|morgens / abends} und abends.", en: "The company is good. But the boss ... he's always here. He works every day, mornings and evenings." },
    { who: "Chef", de: "Guten Morgen! Die {Besprechung} {fängt|anfangen} um neun an!", en: "Good morning! The meeting starts at nine!" },
    { who: "Tom", de: "Und {Homeoffice}?", en: "And working from home?" },
    { who: "Lisa", de: "Am Freitag. Und die {Pause} ist um zwölf. Aber der Chef macht {nie} Pause.", en: "On Fridays. And the break is at twelve. But the boss never takes a break." },
    { who: "Tom", de: "Was {machst|machen} du am Abend, Lisa?", en: "What do you do in the evenings, Lisa?" },
    { who: "Lisa", de: "Ich {lerne|lernen} Spanisch. Mein Mann ist {Lehrer} und mein Sohn ist {Student}. Ich koche {oft}.", en: "I'm learning Spanish. My husband is a teacher and my son is a student. I cook a lot." },
    { who: "Tom", de: "Ich {verdiene|verdienen} hier Geld, und dann ... Kaffee im Café. Der {Kellner} ist mein Freund!", en: "I earn money here, and then ... coffee at the café. The waiter is my friend!" },
    { who: "Chef", de: "Tom! Ist die {Arbeit} {fertig}?", en: "Tom! Is the work done?" },
    { who: "Tom", de: "Ja!", en: "Yes!" },
    { who: "Chef", de: "Gut. Schönen {Feierabend}!", en: "Good. Have a nice evening!" },
    { who: "Tom", de: "Oh, das {Handy}. Anna: \"Pizza?\" ... Ich bin müde, aber Pizza geht immer!", en: "Oh, my phone. Anna: \"Pizza?\" ... I'm tired, but pizza always works!" }
  ]
};
