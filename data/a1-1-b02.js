// A1.1 Batch 2. Examples only use words from Batch 1 and 2, plus names, numbers and obvious look-alikes.
A1.batches["a1-1-b2"] = {
  lead: "30 words to talk about your family, friends, age and whether you are married (the Bürgeramt form will ask). Builds on Batch 1: heißen, wohnen, kommen, Land and Kind come back in new sentences.",
  groups: [
    { id: "fam", t: "The family", s: "Mostly natural gender here: male people are der, female people are die. Still read the scenes, they lock in the plurals too." },
    { id: "ppl", t: "Friends, photos, years", s: "The things you show and talk about when someone asks about your life." },
    { id: "pro", t: "He, she, we", s: "For talking about other people. Verb endings: er/sie take -t, wir takes -en (same as Sie)." },
    { id: "pos", t: "Mine, yours, yours (formal)", s: "Rule of thumb for now: with die-words and plurals, add an -e (mein Vater, meine Mutter, meine Eltern)." },
    { id: "desc", t: "Describing people", s: "Age and relationship status. The two questions every form and every Oma asks." },
    { id: "glue", t: "Glue words", s: "Join sentences together, and say \"no\" to a noun with kein." },
    { id: "verb", t: "Two new verbs", s: "Both regular. Same endings as wohnen from Batch 1." }
  ],
  words: [
    { g: "fam", w: "Familie", a: "die", pl: "die Familien", ty: "noun", m: "Family.", de: "Meine *Familie* wohnt nicht in Berlin.", en: "My family doesn't live in Berlin.", sc: "The <b>Queen</b> forces her whole family into a royal photo shoot. Everyone must wear a crown, including the dog. The dog eats his crown and burps glitter for a week." },
    { g: "fam", w: "Mutter", a: "die", pl: "die Mütter", ty: "noun", m: "Mother. Casual: Mama.", de: "Meine *Mutter* heißt Maria.", en: "My mother's name is Maria.", sc: "The <b>Queen</b> video-calls her mother. Mum's crown is so tall it pokes out of the top of the phone screen and knocks the Queen's tea into her lap." },
    { g: "fam", w: "Vater", a: "der", pl: "die Väter", ty: "noun", m: "Father. Casual: Papa.", de: "Mein *Vater* spricht kein Deutsch.", en: "My father doesn't speak any German.", sc: "The <b>Superhero</b> is now a dad. Mid-flight over Kreuzberg the baby's nappy explodes and it rains on the whole park. He keeps flying and pretends nothing happened." },
    { g: "fam", w: "Eltern", a: "die", plOnly: true, ty: "noun, plural only", m: "Parents. There is no singular form.", de: "Wo wohnen deine *Eltern*?", en: "Where do your parents live?", tip: "Plural-only words have no character: plural is always die." },
    { g: "fam", w: "Bruder", a: "der", pl: "die Brüder", ty: "noun", m: "Brother.", de: "Ich habe einen *Bruder*.", en: "I have a brother.", tip: "After haben, der-words switch ein to einen. You'll get the full rule later, for now just copy the pattern.", sc: "The <b>Superhero</b> has a twin brother who looks identical but can only fly backwards. Every morning they crash into each other at the bathroom door, cape to cape." },
    { g: "fam", w: "Schwester", a: "die", pl: "die Schwestern", ty: "noun", m: "Sister. Also a nurse in a hospital.", de: "Meine *Schwester* ist 25 Jahre alt.", en: "My sister is 25 years old.", sc: "The <b>Queen</b>'s little sister steals her crown and uses it as a cereal bowl. Milk drips through the gaps onto the throne." },
    { g: "fam", w: "Sohn", a: "der", pl: "die Söhne", ty: "noun", m: "Son.", de: "Wie alt ist Ihr *Sohn*?", en: "How old is your son?", sc: "The <b>Superhero</b>'s son copies everything. He ties a shower curtain around his neck, jumps off the sofa shouting \"Papa!\" and lands head first in the fish tank. The fish are not impressed." },
    { g: "fam", w: "Tochter", a: "die", pl: "die Töchter", ty: "noun", m: "Daughter.", de: "Das ist meine *Tochter*, Mia.", en: "This is my daughter, Mia.", sc: "The <b>Queen</b>'s daughter knights the vacuum cleaner. It is now Sir Suck-a-lot, refuses to clean, and demands to be called Your Grace." },
    { g: "fam", w: "Oma", a: "die", pl: "die Omas", ty: "noun", m: "Grandma. Formal: die Großmutter.", de: "Meine *Oma* versteht kein Englisch.", en: "My grandma doesn't understand any English.", sc: "The <b>Queen</b>'s grandma is 93 and rides a pink motorbike through the palace halls, crown fixed on with duct tape, honking at the Queen to get out of the way." },
    { g: "fam", w: "Opa", a: "der", pl: "die Opas", ty: "noun", m: "Grandpa. Formal: der Großvater.", de: "Oma und *Opa* wohnen auf dem Land.", en: "Grandma and grandpa live in the countryside.", tip: "auf dem Land = in the countryside. Land from Batch 1, second meaning.", sc: "The <b>Superhero</b>'s grandpa still flies, but in a bathrobe and slippers at 3 km/h. He falls asleep mid-air over Alexanderplatz and snores so loudly the trams stop." },
    { g: "ppl", w: "Freund", a: "der", pl: "die Freunde", ty: "noun", m: "Friend (male). Also \"boyfriend\".", de: "Das ist mein *Freund* Tom.", en: "This is my friend Tom. (or: my boyfriend Tom)", tip: "\"mein Freund\" usually sounds like boyfriend. To be clear, say \"ein Freund von mir\" (a friend of mine).", sc: "The <b>Superhero</b>'s best friend is a talking potato he keeps in his cape pocket. The potato gives terrible advice. The Superhero always follows it." },
    { g: "ppl", w: "Freundin", a: "die", pl: "die Freundinnen", ty: "noun", m: "Friend (female). Also \"girlfriend\".", de: "Hast du eine *Freundin*?", en: "Do you have a girlfriend?", tip: "-in turns a male person into a female one, and the word always becomes die.", sc: "The <b>Queen</b>'s best friend is a flamingo. It stands on one leg on the throne and screams at every visitor. The Queen says it is just being honest." },
    { g: "ppl", w: "Foto", a: "das", pl: "die Fotos", ty: "noun", m: "Photo.", de: "Wer ist das auf dem *Foto*?", en: "Who is that in the photo?", sc: "The <b>Big Fat Baby</b> takes a selfie with an enormous camera. The flash goes off, it screams, and drops the camera into its own milk bottle. The photo is one giant nostril." },
    { g: "ppl", w: "Jahr", a: "das", pl: "die Jahre", ty: "noun", m: "Year.", de: "Ich bin 30 *Jahre* alt.", en: "I am 30 years old.", sc: "The <b>Big Fat Baby</b>'s birthday cake has 365 candles, one for every day of the year. It tries to blow them out, sneezes instead, and the candles shoot across the room like fireworks." },
    { g: "pro", w: "er", ty: "pronoun", m: "He. Also \"it\" for der-words.", de: "*Er* heißt Paul und kommt aus Spanien.", en: "He's called Paul and comes from Spain." },
    { g: "pro", w: "sie", ty: "pronoun", m: "She. Also \"they\".", de: "*Sie* ist meine Schwester.", en: "She is my sister.", tip: "Three meanings: sie ist = she is, sie sind = they are, Sie sind = you are (formal). The verb and the capital S tell you which." },
    { g: "pro", w: "wir", ty: "pronoun", m: "We.", de: "*Wir* wohnen auch in Berlin.", en: "We live in Berlin too." },
    { g: "pos", w: "mein / meine", ty: "possessive", m: "My.", f: "<b>mein</b> Vater, <b>mein</b> Kind, <b>meine</b> Mutter, <b>meine</b> Eltern", de: "Das ist *mein* Vater.", en: "This is my father." },
    { g: "pos", w: "dein / deine", ty: "possessive", m: "Your (informal, goes with du).", f: "<b>dein</b> Bruder, <b>deine</b> Schwester", de: "Wie heißt *deine* Schwester?", en: "What's your sister's name?" },
    { g: "pos", w: "Ihr / Ihre", ty: "possessive", m: "Your (formal, goes with Sie). Capital I.", f: "<b>Ihr</b> Sohn, <b>Ihre</b> Tochter", de: "Ist das *Ihr* Kind?", en: "Is that your child?" },
    { g: "desc", w: "alt", ty: "adjective", m: "Old. Used for age, even for babies.", de: "Wie *alt* bist du?", en: "How old are you?", tip: "Answer: Ich bin 30 (Jahre alt). Germans ask this more directly than you might expect." },
    { g: "desc", w: "jung", ty: "adjective", m: "Young.", de: "Meine Eltern sind nicht alt, sie sind *jung*!", en: "My parents aren't old, they're young!" },
    { g: "desc", w: "verheiratet", ty: "adjective", m: "Married.", de: "Bist du *verheiratet*?", en: "Are you married?" },
    { g: "desc", w: "ledig", ty: "adjective", m: "Single, never married. A form word.", de: "Nein, ich bin *ledig*.", en: "No, I'm single.", tip: "You'll see ledig on every official form. In conversation people just say \"Single\"." },
    { g: "glue", w: "und", ty: "conjunction", m: "And.", de: "Ich habe einen Bruder *und* eine Schwester.", en: "I have a brother and a sister." },
    { g: "glue", w: "oder", ty: "conjunction", m: "Or.", de: "Bist du verheiratet *oder* ledig?", en: "Are you married or single?" },
    { g: "glue", w: "aber", ty: "conjunction", m: "But.", de: "Ich verstehe Deutsch, *aber* ich spreche nicht gut.", en: "I understand German, but I don't speak well." },
    { g: "glue", w: "kein / keine", ty: "negation", m: "No / not a / not any. Says no to a noun.", f: "<b>kein</b> Kind, <b>keine</b> Kinder", de: "Ich habe *keine* Kinder.", en: "I don't have any children.", tip: "nicht says no to verbs and adjectives, kein says no to nouns. Ich bin nicht verheiratet, but: Ich habe keine Kinder." },
    { g: "verb", w: "leben", ty: "verb", m: "To live, to be alive. Also: to live in a country.", f: "ich <b>lebe</b>, du <b>lebst</b>, er/sie <b>lebt</b>", de: "Meine Familie *lebt* in Spanien.", en: "My family lives in Spain.", tip: "For your address or flat, use wohnen. For your life in a country, both work." },
    { g: "verb", w: "kennen", ty: "verb", m: "To know a person or a place (not a fact).", f: "ich <b>kenne</b>, du <b>kennst</b>, er/sie <b>kennt</b>", de: "*Kennst* du meine Schwester?", en: "Do you know my sister?" }
  ]
};

A1.batches["a1-1-b2"].story = {
  title: "Photos with Anna",
  intro: "A week later. Tom shows his new neighbour Anna some photos from home. Then Anna's grandma turns up.",
  lines: [
    { who: "Anna", de: "Hallo, Tom! Was ist das? Ein {Foto}?", en: "Hi Tom! What's that? A photo?" },
    { who: "Tom", de: "Ja. Das ist {meine|mein / meine} {Familie}.", en: "Yes. This is my family." },
    { who: "Anna", de: "Wer ist der Mann? {Dein|dein / deine} {Vater}?", en: "Who's the man? Your father?" },
    { who: "Tom", de: "Ja, {und} das ist meine {Mutter}. Meine {Eltern} {leben} in Italien.", en: "Yes, and that's my mother. My parents live in Italy." },
    { who: "Anna", de: "Deine Eltern sind {jung}!", en: "Your parents are young!" },
    { who: "Tom", de: "Ha, nein! Mein Vater ist 61 {Jahre|Jahr} {alt}.", en: "Ha, no! My father is 61 years old." },
    { who: "Anna", de: "Und das? Dein {Bruder}?", en: "And that? Your brother?" },
    { who: "Tom", de: "Ja, Marco. {Er} ist 27. Und das ist meine {Schwester} Giulia. {Sie|sie} ist 19.", en: "Yes, Marco. He's 27. And that's my sister Giulia. She's 19." },
    { who: "Anna", de: "Ist Marco {verheiratet} {oder} {ledig}?", en: "Is Marco married or single?" },
    { who: "Tom", de: "Ledig. {Aber} er hat eine {Freundin}.", en: "Single. But he has a girlfriend." },
    { who: "Anna", de: "Oh, nein!", en: "Oh, no!" },
    { who: "Anna", de: "Ich habe einen {Sohn}, Leo. Er ist 6. {Kennst|kennen} du Leo?", en: "I have a son, Leo. He's 6. Do you know Leo?" },
    { who: "Tom", de: "Ja! Leo und Mia sind {Freunde|Freund}. Mia ist meine {Tochter}.", en: "Yes! Leo and Mia are friends. Mia is my daughter." },
    { who: "Anna", de: "Oh, und das ist meine {Oma}!", en: "Oh, and this is my grandma!" },
    { who: "Oma", de: "Hallo! Wer sind Sie?", en: "Hello! Who are you?" },
    { who: "Tom", de: "Ich bin Tom. Ich wohne auch in Kreuzberg.", en: "I'm Tom. I live in Kreuzberg too." },
    { who: "Oma", de: "Ah! Und {Ihre|Ihr / Ihre} Familie?", en: "Ah! And your family?" },
    { who: "Tom", de: "In Italien. Und Ihr Mann?", en: "In Italy. And your husband?" },
    { who: "Oma", de: "Mein Mann, der {Opa}, lebt auf dem Land. Er kennt {keine|kein / keine} Stadt! Aber {wir} sind 60 Jahre verheiratet.", en: "My husband, grandpa, lives in the countryside. He doesn't know a single city! But we've been married for 60 years." }
  ]
};
