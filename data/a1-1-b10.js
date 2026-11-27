// A1.1 Batch 10. Examples only use words from Batches 1-10, plus names, digits and obvious look-alikes (Fußball, Gitarre, August, Rom).
A1.batches["a1-1-b10"] = {
  lead: "30 words for hobbies, going out, how you feel and how to say yes, no or maybe. The last batch of A1.1: gern from Batch 5 grows into lieber and am liebsten.",
  groups: [
    { id: "fun", t: "Things to do", s: "Mostly das and der here. Musik is die, and so are almost all words ending in -ik: die Physik, die Politik." },
    { id: "verb", t: "Eight free-time verbs", s: "Watch the vowel change for du and er/sie: lesen (liest), sehen (sieht), treffen (trifft). mögen is its own thing: ich mag." },
    { id: "feel", t: "How was it?", s: "The words you need for \"how was the film?\" and \"how are you?\"." },
    { id: "plan", t: "Making plans", s: "Lust, Spaß and the polite way to say no. Germans say leider a lot, and it softens every refusal." }
  ],
  words: [
    { g: "fun", w: "Hobby", a: "das", pl: "die Hobbys", ty: "noun", m: "Hobby.", de: "Hast du ein *Hobby*?", en: "Do you have a hobby?", sc: "The <b>Big Fat Baby</b>'s hobby is collecting other people's socks, one from each pair. It has 4,000. Nobody in the building has a matching pair any more." },
    { g: "fun", w: "Sport", a: "der", ty: "noun", m: "Sport, exercise.", de: "Ich mache gern *Sport*.", en: "I like doing sport.", tip: "Germans \"make\" sport: Sport machen.", sc: "The <b>Superhero</b> refuses to run. At the gym he just hovers above the treadmill with his arms crossed, and still calls it cardio." },
    { g: "fun", w: "Musik", a: "die", ty: "noun", m: "Music.", de: "Ich höre gern *Musik*.", en: "I like listening to music.", sc: "The <b>Queen</b> sings one high note. Every wine glass in Berlin shatters, and the top of the TV tower bends a little to the left." },
    { g: "fun", w: "Buch", a: "das", pl: "die Bücher", ty: "noun", m: "Book.", de: "Ich lese ein *Buch*.", en: "I'm reading a book.", sc: "The <b>Big Fat Baby</b> doesn't read books, it eats them. Now it knows everything, and burps out quotes from Goethe." },
    { g: "fun", w: "Film", a: "der", pl: "die Filme", ty: "noun", m: "Film, movie.", de: "Wann fängt der *Film* an?", en: "When does the film start?", sc: "The <b>Superhero</b> watches a superhero film and complains loudly all the way through: the cape is wrong, the landing is wrong, completely unrealistic." },
    { g: "fun", w: "Kino", a: "das", pl: "die Kinos", ty: "noun", m: "Cinema.", de: "Gehen wir ins *Kino*?", en: "Shall we go to the cinema?", tip: "ins = in das. Gehen wir ...? at the start is a friendly suggestion: Shall we ...?", sc: "The <b>Big Fat Baby</b> goes to the cinema with a bathtub full of popcorn. It eats it all before the adverts finish, then falls asleep." },
    { g: "fun", w: "Konzert", a: "das", pl: "die Konzerte", ty: "noun", m: "Concert, gig.", de: "Das *Konzert* ist heute Abend.", en: "The concert is tonight.", sc: "The <b>Big Fat Baby</b> plays a concert with one rattle. It sells out in four minutes, and the crowd cries at the encore." },
    { g: "verb", w: "spielen", ty: "verb", m: "To play: games, sport, instruments.", f: "ich <b>spiele</b>, du <b>spielst</b>, er/sie <b>spielt</b>", de: "*Spielst* du Fußball?", en: "Do you play football?", tip: "Also for instruments: Ich spiele Gitarre." },
    { g: "verb", w: "lesen", ty: "verb, irregular", m: "To read.", f: "ich <b>lese</b>, du <b>liest</b>, er/sie <b>liest</b>", de: "Ich *lese* gern.", en: "I like reading." },
    { g: "verb", w: "hören", ty: "verb", m: "To hear, to listen to.", f: "ich <b>höre</b>, du <b>hörst</b>, er/sie <b>hört</b>", de: "*Hörst* du das?", en: "Can you hear that?" },
    { g: "verb", w: "sehen", ty: "verb, irregular", m: "To see. Also to watch.", f: "ich <b>sehe</b>, du <b>siehst</b>, er/sie <b>sieht</b>", de: "*Siehst* du den Bus?", en: "Can you see the bus?", tip: "Watching TV is fernsehen: Ich sehe fern. It splits, like aufstehen." },
    { g: "verb", w: "schwimmen", ty: "verb", m: "To swim.", f: "ich <b>schwimme</b>, du <b>schwimmst</b>, er/sie <b>schwimmt</b>", de: "Ich *schwimme* gern.", en: "I like swimming." },
    { g: "verb", w: "tanzen", ty: "verb", m: "To dance.", f: "ich <b>tanze</b>, du <b>tanzt</b>, er/sie <b>tanzt</b>", de: "*Tanzt* du gern?", en: "Do you like dancing?" },
    { g: "verb", w: "treffen", ty: "verb, irregular", m: "To meet.", f: "ich <b>treffe</b>, du <b>triffst</b>, er/sie <b>trifft</b>", de: "Ich *treffe* Anna im Park.", en: "I'm meeting Anna in the park." },
    { g: "verb", w: "mögen", ty: "verb, irregular", m: "To like (people, things, food).", f: "ich <b>mag</b>, du <b>magst</b>, er/sie <b>mag</b>", de: "Ich *mag* Berlin.", en: "I like Berlin.", tip: "mögen for things and people. gern for activities: Ich schwimme gern. And möchte (Batch 5) is the polite form of mögen." },
    { g: "feel", w: "toll", ty: "adjective", m: "Great, brilliant.", de: "Die Party ist *toll*!", en: "The party is great!" },
    { g: "feel", w: "schlecht", ty: "adjective", m: "Bad.", de: "Der Film ist *schlecht*.", en: "The film is bad." },
    { g: "feel", w: "glücklich", ty: "adjective", m: "Happy.", de: "Ich bin *glücklich*.", en: "I'm happy." },
    { g: "feel", w: "traurig", ty: "adjective", m: "Sad.", de: "Bist du *traurig*?", en: "Are you sad?" },
    { g: "feel", w: "langweilig", ty: "adjective", m: "Boring.", de: "Das Buch ist *langweilig*.", en: "The book is boring.", tip: "Mir ist langweilig = I'm bored. Ich bin langweilig = I am a boring person. Choose carefully." },
    { g: "feel", w: "interessant", ty: "adjective", m: "Interesting.", de: "Das ist *interessant*!", en: "That's interesting!" },
    { g: "feel", w: "Wie geht's?", ty: "phrase", m: "How are you? / How's it going?", de: "Hallo Anna, *wie geht's*?", en: "Hi Anna, how are you?", tip: "Answer: Gut, danke! or Es geht (so-so). Formal: Wie geht es Ihnen?" },
    { g: "plan", w: "Lust", a: "die", ty: "noun", m: "Wanting to do something, being in the mood.", de: "Hast du *Lust* auf Kino?", en: "Do you feel like going to the cinema?", tip: "Ich habe keine Lust = I don't feel like it. Very common, and not rude among friends.", sc: "The <b>Queen</b> never has Lust for anything. So she employs one servant whose only job is to feel like doing things for her." },
    { g: "plan", w: "Spaß", a: "der", ty: "noun", m: "Fun.", de: "Das macht *Spaß*!", en: "That's fun!", tip: "Spaß machen = to be fun. Viel Spaß! = Have fun!", sc: "The <b>Superhero</b> rides a slide three kilometres long. He has so much fun that he gets stuck at the bottom, laughing too hard to fly." },
    { g: "plan", w: "Freizeit", a: "die", ty: "noun", m: "Free time, spare time.", de: "Was machst du in der *Freizeit*?", en: "What do you do in your free time?", tip: "frei + die Zeit = die Freizeit. Last part decides, again.", sc: "In her free time the <b>Queen</b> knits tiny crowns for pigeons. Half the pigeons in Berlin now look extremely important." },
    { g: "plan", w: "Urlaub", a: "der", pl: "die Urlaube", ty: "noun", m: "Holiday, vacation (time off work).", de: "Im August habe ich *Urlaub*.", en: "I'm on holiday in August.", sc: "The <b>Superhero</b> goes on holiday to the beach and spends the whole week rescuing people's ice creams. He comes back more tired than before." },
    { g: "plan", w: "Party", a: "die", pl: "die Partys", ty: "noun", m: "Party.", de: "Die *Party* ist am Samstag.", en: "The party is on Saturday.", sc: "The <b>Queen</b>'s party has a dress code: crowns only. The cake is a life-size statue of her, and she won't let anyone cut it." },
    { g: "plan", w: "lieber / am liebsten", v: ["lieber", "am liebsten"], ty: "adverbs", m: "Rather, prefer / most of all, best. The next steps after gern.", f: "gern → <b>lieber</b> → <b>am liebsten</b>", de: "Ich trinke *lieber* Tee.", en: "I'd rather have tea." },
    { g: "plan", w: "vielleicht", ty: "adverb", m: "Maybe, perhaps.", de: "*Vielleicht* morgen.", en: "Maybe tomorrow." },
    { g: "plan", w: "leider", ty: "adverb", m: "Unfortunately. Makes any no sound polite.", de: "*Leider* habe ich keine Zeit.", en: "Unfortunately I don't have time." }
  ]
};

A1.batches["a1-1-b10"].story = {
  title: "Saturday at Anna's",
  intro: "The end of a long first month in Berlin. Tom is tired, a bit down, and Anna has a plan.",
  lines: [
    { who: "Anna", de: "Hallo Tom! {Wie geht's?|Wie geht's?}", en: "Hi Tom! How are you?" },
    { who: "Tom", de: "Ach, {schlecht}. Ich bin {traurig}, und die Arbeit ist {langweilig}.", en: "Oh, bad. I'm sad, and work is boring." },
    { who: "Anna", de: "Oh nein! Hast du {Lust} auf eine {Party}? Heute, um acht!", en: "Oh no! Do you feel like a party? Today, at eight!" },
    { who: "Tom", de: "{Vielleicht} ...", en: "Maybe ..." },
    { who: "Anna", de: "Komm! Das macht {Spaß}!", en: "Come on! It'll be fun!" },
    { who: "Leo", de: "Tom! Ich {spiele|spielen} Fußball. Das ist mein {Hobby}!", en: "Tom! I play football. That's my hobby!" },
    { who: "Oma", de: "Und ich {schwimme|schwimmen}. Jeden Tag! {Sport} ist mein Leben.", en: "And I swim. Every day! Sport is my life." },
    { who: "Tom", de: "{Toll}!", en: "Great!" },
    { who: "Lisa", de: "Tom? Du hier? Ich kenne Anna! Ich {treffe|treffen} Anna oft im Park.", en: "Tom? You're here? I know Anna! I often meet Anna in the park." },
    { who: "Lisa", de: "Was machst du in der {Freizeit}, Tom?", en: "What do you do in your free time, Tom?" },
    { who: "Tom", de: "Ich {lese|lesen} gern. Ein {Buch} am Abend ...", en: "I like reading. A book in the evening ..." },
    { who: "Lisa", de: "Ich {sehe|sehen} {lieber|lieber / am liebsten} {Filme|Film}. Gehen wir morgen ins {Kino}? Oder ins {Konzert}?", en: "I'd rather watch films. Shall we go to the cinema tomorrow? Or to a concert?" },
    { who: "Tom", de: "{Leider} habe ich morgen keine Zeit. Ich putze die Treppe.", en: "Unfortunately I don't have time tomorrow. I'm cleaning the stairs." },
    { who: "Mama", de: "Tom! Ich {höre|hören} {Musik}! {Tanzen|tanzen} wir!", en: "Tom! I can hear music! Let's dance!" },
    { who: "Tom", de: "Mama, nein!", en: "Mum, no!" },
    { who: "Anna", de: "{Magst|mögen} du die Party, Tom?", en: "Do you like the party, Tom?" },
    { who: "Tom", de: "Ja! Ich bin {glücklich}. Das ist {interessant}: am Montag traurig, am Samstag glücklich.", en: "Yes! I'm happy. Funny, that: sad on Monday, happy on Saturday." },
    { who: "Anna", de: "Und im {Urlaub}? Wo bist du am liebsten? In Rom?", en: "And on holiday? Where would you most like to be? In Rome?" },
    { who: "Tom", de: "Nein. Am liebsten hier, in Berlin.", en: "No. Most of all, here in Berlin." }
  ]
};
