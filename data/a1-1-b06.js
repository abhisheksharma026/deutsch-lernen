// A1.1 Batch 6. Examples only use words from Batches 1-6, plus names, digits and obvious look-alikes (Tomaten, Cola, Wein, Super).
A1.batches["a1-1-b6"] = {
  lead: "30 words for supermarkets, bakeries and the most Berlin shop of all: the Späti. Builds on Batches 3 and 5: prices, Karte / bar and all your food words go shopping.",
  groups: [
    { id: "shop", t: "Where to shop", s: "-ei words like Bäckerei are always die. Supermarkt is der because der Markt is the last part." },
    { id: "stuff", t: "Bottles, bags and amounts", s: "No \"of\" in German: eine Flasche Wasser = a bottle of water. Kilo, Liter and Stück stay the same after numbers: zwei Kilo." },
    { id: "till", t: "At the till", s: "German cashiers are fast. Know these three words and you won't panic." },
    { id: "verb", t: "Five shopping verbs", s: "nehmen and geben change their vowel for du and er/sie, like sprechen and essen." },
    { id: "adj", t: "Open, closed, big, small", s: "Shops in Germany close on Sundays. Plan around it, or find a Späti." },
    { id: "small", t: "Little shop words", s: "Point, ask, and say you're done." }
  ],
  words: [
    { g: "shop", w: "Supermarkt", a: "der", pl: "die Supermärkte", ty: "noun", m: "Supermarket.", de: "Der *Supermarkt* ist am Sonntag zu.", en: "The supermarket is closed on Sunday.", sc: "The <b>Superhero</b> pushes a shopping trolley so fast it takes off. He rides it like a rocket over Kreuzberg, with tomatoes falling like rain." },
    { g: "shop", w: "Bäckerei", a: "die", pl: "die Bäckereien", ty: "noun", m: "Bakery.", de: "Ist die *Bäckerei* offen?", en: "Is the bakery open?", tip: "Every word ending in -ei is die: die Bäckerei, die Metzgerei (butcher), die Polizei.", sc: "The <b>Queen</b> runs a bakery. Every Brötchen has a tiny gold crown baked inside. Half of Berlin now has a chipped tooth." },
    { g: "shop", w: "Späti", a: "der", pl: "die Spätis", ty: "noun", m: "Late-night corner shop. Short for Spätkauf. Very Berlin.", de: "Der *Späti* ist auch am Sonntag offen.", en: "The Späti is open on Sunday too.", tip: "Drinks, snacks, cigarettes, often a bench outside. Your rescue when everything else is closed.", sc: "The <b>Superhero</b>'s secret base is behind the Späti fridge. The password is buying one warm beer and saying \"Danke, tschüss\" without eye contact." },
    { g: "shop", w: "Laden", a: "der", pl: "die Läden", ty: "noun", m: "Shop, store. The general word.", de: "Der *Laden* ist zu.", en: "The shop is closed.", sc: "The <b>Superhero</b> flies into a tiny shop. His cape knocks over every shelf like dominoes. He pays with an autograph. The owner is not happy." },
    { g: "shop", w: "Markt", a: "der", pl: "die Märkte", ty: "noun", m: "Market. Weekly farmers' markets are everywhere.", de: "Am Samstag kaufe ich Obst auf dem *Markt*.", en: "On Saturday I buy fruit at the market.", sc: "The <b>Superhero</b> argues with a market lady about the price of one potato. Twenty minutes later, he loses, pays double, and thanks her." },
    { g: "stuff", w: "Flasche", a: "die", pl: "die Flaschen", ty: "noun", m: "Bottle.", de: "Eine *Flasche* Wasser, bitte.", en: "A bottle of water, please.", sc: "The <b>Queen</b> only drinks from a bottle shaped like herself. When it's empty she blows across the top, and a royal fanfare wakes the whole street." },
    { g: "stuff", w: "Dose", a: "die", pl: "die Dosen", ty: "noun", m: "Can, tin.", de: "Hast du eine *Dose* Cola?", en: "Do you have a can of cola?", sc: "The <b>Queen</b> can't open a can. Ten royal guards try and fail. She bites it open herself, crown wobbling, and sprays cola over everyone." },
    { g: "stuff", w: "Tüte", a: "die", pl: "die Tüten", ty: "noun", m: "Bag (shopping bag, paper or plastic).", de: "Brauchen Sie eine *Tüte*?", en: "Do you need a bag?", tip: "Bags cost money in German shops. Bring your own, or say \"Ja, eine Tüte, bitte\".", sc: "The <b>Queen</b> wears a plastic bag over her crown in the rain. It looks so good that it becomes the hottest look in Paris fashion week." },
    { g: "stuff", w: "Pfand", a: "das", ty: "noun", m: "Bottle deposit. You pay it with the drink and get it back when you return the bottle.", de: "Das *Pfand* ist fünfundzwanzig Cent.", en: "The deposit is 25 cents.", tip: "Put empty bottles and cans in the machine at the supermarket. It prints a Bon you swap for cash at the till.", sc: "The <b>Big Fat Baby</b> crawls through Berlin collecting every empty bottle. It returns them all and becomes the richest baby in Germany." },
    { g: "stuff", w: "Stück", a: "das", pl: "die Stücke", ty: "noun", m: "Piece. Also used to count things: drei Stück = three of them.", de: "Ein *Stück* Kuchen, bitte.", en: "A piece of cake, please.", tip: "After numbers it stays Stück: Ich nehme zwei Stück.", sc: "The <b>Big Fat Baby</b> asks for one piece of cake. It picks up the whole cake and says: one piece. Nobody argues." },
    { g: "stuff", w: "Kilo", a: "das", pl: "die Kilos", ty: "noun", m: "Kilo. Short for das Kilogramm.", de: "Ein *Kilo* Tomaten, bitte.", en: "A kilo of tomatoes, please.", tip: "Half a kilo is ein halbes Kilo, or 500 Gramm.", sc: "The <b>Big Fat Baby</b> climbs onto the market scale. The needle spins round twice and the scale explodes. The baby looks innocent." },
    { g: "stuff", w: "Liter", a: "der", pl: "die Liter", ty: "noun", m: "Litre.", de: "Ein *Liter* Milch kostet einen Euro.", en: "A litre of milk costs one euro.", sc: "The <b>Superhero</b> drinks a litre of milk in one second. His milk moustache is so big that nobody recognises him. It's the perfect disguise." },
    { g: "stuff", w: "Zucker", a: "der", ty: "noun", m: "Sugar.", de: "Einen Kaffee ohne *Zucker*, bitte.", en: "A coffee without sugar, please.", sc: "The <b>Superhero</b> eats a whole bag of sugar. For the next hour he can only fly in zigzags, screaming happily." },
    { g: "till", w: "Kasse", a: "die", pl: "die Kassen", ty: "noun", m: "Till, checkout. Also the place you pay at an office.", de: "Wo ist die *Kasse*?", en: "Where is the checkout?", tip: "The cashier scans very fast. Have your bag open and your card ready, and pack as you go.", sc: "The <b>Queen</b> works the Kasse. She scans so fast that the shopping flies off the belt and hits the customers in the face." },
    { g: "till", w: "Bon", a: "der", pl: "die Bons", ty: "noun", m: "Receipt. Full word: der Kassenbon.", de: "Möchten Sie den *Bon*?", en: "Would you like the receipt?", tip: "der becomes den here, just like ein became einen in \"einen Kaffee\".", sc: "The <b>Superhero</b> buys one apple. The receipt is three metres long and wraps him up like a mummy." },
    { g: "till", w: "Angebot", a: "das", pl: "die Angebote", ty: "noun", m: "Special offer, deal.", de: "Das Bier ist im *Angebot*.", en: "The beer is on special offer.", tip: "im Angebot = on sale. Look for the yellow and red signs.", sc: "The <b>Big Fat Baby</b> sees an Angebot sign, climbs into a shopping trolley, and puts a sticker on its forehead: Baby, 50% off." },
    { g: "verb", w: "kaufen", ty: "verb", m: "To buy.", f: "ich <b>kaufe</b>, du <b>kaufst</b>, er/sie <b>kauft</b>", de: "Ich *kaufe* Brot.", en: "I'm buying bread." },
    { g: "verb", w: "nehmen", ty: "verb, irregular", m: "To take. When choosing: \"I'll have\".", f: "ich <b>nehme</b>, du <b>nimmst</b>, er/sie <b>nimmt</b>", de: "Ich *nehme* zwei Brötchen.", en: "I'll take two rolls." },
    { g: "verb", w: "geben", ty: "verb, irregular", m: "To give. \"es gibt\" means \"there is / there are\".", f: "ich <b>gebe</b>, du <b>gibst</b>, er/sie <b>gibt</b>, <b>es gibt</b>", de: "*Gibt* es hier einen Späti?", en: "Is there a Späti here?", tip: "es gibt is one of the most used phrases in German. Gibt es ...? = Is there ...?" },
    { g: "verb", w: "suchen", ty: "verb", m: "To look for.", f: "ich <b>suche</b>, du <b>suchst</b>, er/sie <b>sucht</b>", de: "Ich *suche* Zucker.", en: "I'm looking for sugar." },
    { g: "verb", w: "finden", ty: "verb", m: "To find. Also \"to think\" (an opinion).", f: "ich <b>finde</b>, du <b>findest</b>, er/sie <b>findet</b>", de: "Ich *finde* die Milch nicht.", en: "I can't find the milk.", tip: "Ich finde das gut = I think that's good. Same extra e as warten (du findest)." },
    { g: "adj", w: "offen", ty: "adjective", m: "Open.", de: "Ist der Späti noch *offen*?", en: "Is the Späti still open?" },
    { g: "adj", w: "zu", ty: "adjective / adverb", m: "Closed. Also \"too\" (too much).", de: "Am Sonntag ist alles *zu*.", en: "On Sunday everything is closed.", tip: "zu teuer = too expensive. zu klein = too small." },
    { g: "adj", w: "groß / klein", ty: "adjectives", m: "Big / small.", de: "Der Laden ist *klein*, aber gut.", en: "The shop is small, but good.", tip: "Before a noun they get an ending: eine große Tüte, eine kleine Tüte." },
    { g: "small", w: "hier", ty: "adverb", m: "Here.", de: "*Hier* ist der Bon.", en: "Here's the receipt." },
    { g: "small", w: "da", ty: "adverb", m: "There. Point and say it.", de: "*Da* ist die Kasse!", en: "There's the checkout!", tip: "dort also means there, a bit more formal. In speech, da is everywhere." },
    { g: "small", w: "alles", ty: "pronoun", m: "Everything, all.", de: "Das ist *alles*, danke.", en: "That's everything, thanks." },
    { g: "small", w: "etwas", ty: "pronoun", m: "Something. Also \"some\" or \"a bit\".", de: "Ich möchte *etwas* trinken.", en: "I'd like something to drink." },
    { g: "small", w: "nur", ty: "adverb", m: "Only, just.", de: "Hier *nur* bar!", en: "Cash only here!" },
    { g: "small", w: "Sonst noch etwas?", ty: "phrase", m: "Anything else? The cashier and the baker ask it every time.", de: "*Sonst noch etwas?*", en: "Anything else?", tip: "Answer: Nein, das ist alles. Or just: Nein, danke." }
  ]
};

A1.batches["a1-1-b6"].story = {
  title: "Tom goes shopping",
  intro: "Saturday, 6 p.m. Tom promised Anna fish for dinner at seven. He has no fish. He has one hour.",
  lines: [
    { who: "Tom", de: "Entschuldigung! Ich {suche|suchen} Fisch. {Gibt|geben} es {hier} einen {Supermarkt}?", en: "Excuse me! I'm looking for fish. Is there a supermarket here?" },
    { who: "Woman", de: "Der {Markt} ist jetzt {zu}. Aber {da} ist ein Supermarkt. Er ist {nur} bis acht {offen}.", en: "The market is closed now. But there's a supermarket over there. It's only open until eight." },
    { who: "Tom", de: "Danke! ... Wo ist der Fisch? Ich {finde|finden} den Fisch nicht!", en: "Thanks! ... Where's the fish? I can't find the fish!" },
    { who: "Shop assistant", de: "Fisch? Heute nicht. Aber das Fleisch ist im {Angebot}.", en: "Fish? Not today. But the meat is on offer." },
    { who: "Tom", de: "Anna isst kein Fleisch! OK ... ich {kaufe|kaufen} ein {Kilo} Tomaten.", en: "Anna doesn't eat meat! OK ... I'll buy a kilo of tomatoes." },
    { who: "Tom", de: "Und eine {Flasche} Wein, einen {Liter} Milch und {Zucker}. Wo ist die {Kasse}?", en: "And a bottle of wine, a litre of milk and sugar. Where's the checkout?" },
    { who: "Cashier", de: "{Sonst noch etwas?|Sonst noch etwas?}", en: "Anything else?" },
    { who: "Tom", de: "Nein, das ist {alles}.", en: "No, that's everything." },
    { who: "Cashier", de: "Zwölf Euro neunzig. Brauchen Sie eine {Tüte}?", en: "Twelve ninety. Do you need a bag?" },
    { who: "Cashier", de: "Und möchten Sie den {Bon}?", en: "And would you like the receipt?" },
    { who: "Tom", de: "Ja, eine Tüte. Nein, keinen Bon. Danke!", en: "Yes, a bag. No receipt. Thanks!" },
    { who: "Tom", de: "Oh nein! Kein Brot! Und die {Bäckerei} ist zu!", en: "Oh no! No bread! And the bakery is closed!" },
    { who: "Tom", de: "Der {Späti}! Der Späti ist am Abend offen!", en: "The Späti! The Späti is open in the evening!" },
    { who: "Späti guy", de: "Brot? Nein. Aber ich habe {etwas} Kuchen. Ein {Stück}?", en: "Bread? No. But I have some cake. A piece?" },
    { who: "Tom", de: "Ja! Ich {nehme|nehmen} vier Stück. Und eine {Dose} Bier.", en: "Yes! I'll take four pieces. And a can of beer." },
    { who: "Späti guy", de: "Plus {Pfand}, fünfundzwanzig Cent. Nur bar.", en: "Plus the deposit, 25 cents. Cash only." },
    { who: "Tom", de: "Der {Laden} ist {klein|groß / klein}, aber super!", en: "The shop is small, but great!" },
    { who: "Anna", de: "Hallo, Tom! Sieben Uhr, pünktlich! Und? Fisch?", en: "Hi Tom! Seven o'clock, on time! So? Fish?" },
    { who: "Tom", de: "Ähm ... Tomaten, Kuchen und Bier.", en: "Um ... tomatoes, cake and beer." },
    { who: "Anna", de: "Lecker!", en: "Delicious!" }
  ]
};
