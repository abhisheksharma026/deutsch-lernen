// A1.1 Batch 5. Examples only use words from Batches 1-5, plus names, digits and obvious look-alikes (Orangensaft, Currywurst, Pizza, Gas).
A1.batches["a1-1-b5"] = {
  lead: "30 words to order, eat and talk about food without pointing at the menu. Builds on Batches 3 and 4: prices, zahlen and meal times come back on the table.",
  groups: [
    { id: "drink", t: "Drinks", s: "Ordering a der-drink? Say einen: einen Kaffee, einen Tee. Same pattern as einen Bruder in Batch 2." },
    { id: "food", t: "Food", s: "Mostly das and der here. -chen words like Brötchen are always das, no exceptions." },
    { id: "meal", t: "Meals", s: "All three are das, because they all end in a das-word: das Stück, das Essen." },
    { id: "verb", t: "Four verbs for the table", s: "essen is irregular (du isst). möchten is the polite way to order anything." },
    { id: "taste", t: "Hungry, thirsty, tasty", s: "German says \"I have hunger\", not \"I am hungry\"." },
    { id: "order", t: "Ordering helpers", s: "Tiny words that make your order sound natural." }
  ],
  words: [
    { g: "drink", w: "Kaffee", a: "der", pl: "die Kaffees", ty: "noun", m: "Coffee.", de: "Einen *Kaffee*, bitte.", en: "A coffee, please.", sc: "The <b>Superhero</b> drinks twelve espressos in a row. He vibrates so fast he passes straight through the wall and lands in the neighbour's shower." },
    { g: "drink", w: "Tee", a: "der", pl: "die Tees", ty: "noun", m: "Tea.", de: "Möchtest du einen *Tee*?", en: "Would you like a tea?", sc: "The <b>Superhero</b>'s tea bag is the size of a sleeping bag. He dunks it in the Spree, and the whole river turns brown and smells of peppermint." },
    { g: "drink", w: "Wasser", a: "das", ty: "noun", m: "Water.", de: "Ich trinke viel *Wasser*.", en: "I drink a lot of water.", tip: "In restaurants, tap water isn't brought automatically. You order a bottle, and they ask: mit oder ohne Gas? (sparkling or still)", sc: "The <b>Big Fat Baby</b> slaps a bowl of water with both hands. The whole restaurant is soaked, and the waiters quietly hand out umbrellas." },
    { g: "drink", w: "Milch", a: "die", ty: "noun", m: "Milk.", de: "Hast du *Milch*?", en: "Do you have milk?", sc: "The <b>Queen</b> only drinks milk from one cow, which also wears a tiny crown. When the Queen bows to it, the cow moos \"Majestät\"." },
    { g: "drink", w: "Saft", a: "der", pl: "die Säfte", ty: "noun", m: "Juice.", de: "Ein Orangen*saft*, bitte.", en: "An orange juice, please.", tip: "The last part decides again: die Orange + der Saft = der Orangensaft.", sc: "The <b>Superhero</b> squeezes oranges with his bare fists. Juice sprays into his eyes, and he flies blind, straight into a Späti window." },
    { g: "drink", w: "Bier", a: "das", pl: "die Biere", ty: "noun", m: "Beer.", de: "Trinkst du *Bier*?", en: "Do you drink beer?", sc: "The <b>Big Fat Baby</b> uses a giant beer glass as a bathtub. It climbs out with a foam beard and refuses to wipe it off." },
    { g: "food", w: "Brot", a: "das", pl: "die Brote", ty: "noun", m: "Bread.", de: "Das *Brot* ist gut!", en: "The bread is good!", tip: "Germany has over 3,000 kinds of bread, and people are proud of it.", sc: "The <b>Big Fat Baby</b> uses a loaf of bread as a pillow. In the morning, the pillow is gone and the baby is suspiciously full." },
    { g: "food", w: "Brötchen", a: "das", pl: "die Brötchen", ty: "noun", m: "Bread roll. The classic breakfast bread.", de: "Zwei *Brötchen*, bitte.", en: "Two rolls, please.", tip: "-chen means small, and makes any word das: das Brot, das Brötchen. In Berlin they are often called Schrippen.", sc: "The <b>Big Fat Baby</b> builds a fortress out of 100 Brötchen, then eats its way out through the wall." },
    { g: "food", w: "Käse", a: "der", pl: "die Käse", ty: "noun", m: "Cheese.", de: "Ich esse keinen *Käse*.", en: "I don't eat cheese.", sc: "The <b>Superhero</b>'s only weakness is stinky cheese. One sniff of a mature Limburger and he collapses on the floor, cape over his face." },
    { g: "food", w: "Wurst", a: "die", pl: "die Würste", ty: "noun", m: "Sausage. Also cold cuts on bread.", de: "Eine Curry*wurst*, bitte!", en: "A currywurst, please!", sc: "The <b>Queen</b> carries a giant Wurst instead of a sceptre. Every dog in Berlin follows her in a long, drooling parade." },
    { g: "food", w: "Ei", a: "das", pl: "die Eier", ty: "noun", m: "Egg.", de: "Ich möchte ein *Ei*.", en: "I'd like an egg.", sc: "The <b>Big Fat Baby</b> sits on an egg for three weeks to hatch it. Out comes an even smaller baby, which immediately burps." },
    { g: "food", w: "Fleisch", a: "das", ty: "noun", m: "Meat.", de: "Ich esse kein *Fleisch*.", en: "I don't eat meat.", sc: "The <b>Big Fat Baby</b> uses a huge steak as a teething toy. It chews for an hour and then throws it at the dog." },
    { g: "food", w: "Fisch", a: "der", pl: "die Fische", ty: "noun", m: "Fish.", de: "Der *Fisch* ist lecker.", en: "The fish is tasty.", sc: "The <b>Superhero</b> rescues a fishing boat. As thanks, a fish jumps out of the net and slaps him across the face." },
    { g: "food", w: "Gemüse", a: "das", ty: "noun, no plural", m: "Vegetables. One word for all of them.", de: "Leo isst kein *Gemüse*.", en: "Leo doesn't eat vegetables.", sc: "The <b>Big Fat Baby</b> hides all its broccoli in its nappy. Nobody wants to check." },
    { g: "food", w: "Obst", a: "das", ty: "noun, no plural", m: "Fruit. One word for all of it.", de: "Ich esse viel *Obst*.", en: "I eat a lot of fruit.", sc: "The <b>Big Fat Baby</b> juggles apples, bananas and oranges. Every single one lands in its open mouth." },
    { g: "food", w: "Kuchen", a: "der", pl: "die Kuchen", ty: "noun", m: "Cake.", de: "Kaffee und *Kuchen* um drei Uhr?", en: "Coffee and cake at three?", tip: "Kaffee und Kuchen in the afternoon is a real weekend tradition, especially with Oma.", sc: "The <b>Superhero</b> lands on a birthday cake by mistake. The cream never comes out of his cape, and now he smells of vanilla forever." },
    { g: "meal", w: "Frühstück", a: "das", pl: "die Frühstücke", ty: "noun", m: "Breakfast.", de: "Das *Frühstück* ist um acht Uhr.", en: "Breakfast is at eight.", tip: "früh (early) + das Stück (piece) = an early piece. Hence das.", sc: "The <b>Big Fat Baby</b> gets breakfast in bed. The bed is made of pancakes. By noon there is no bed." },
    { g: "meal", w: "Mittagessen", a: "das", pl: "die Mittagessen", ty: "noun", m: "Lunch. Mittag = midday, Essen = food.", de: "Das *Mittagessen* ist um zwölf.", en: "Lunch is at twelve.", sc: "The <b>Big Fat Baby</b> falls asleep face first into its lunch. It wakes up wearing a mashed potato mask." },
    { g: "meal", w: "Abendessen", a: "das", pl: "die Abendessen", ty: "noun", m: "Dinner. Abend = evening, Essen = food.", de: "Wann ist das *Abendessen*?", en: "When is dinner?", tip: "Many Germans eat a cold dinner of bread, cheese and Wurst. That's called Abendbrot.", sc: "At dinner, the <b>Big Fat Baby</b> throws spaghetti at the ceiling. It sticks and spells the word DAS." },
    { g: "verb", w: "essen", ty: "verb, irregular", m: "To eat.", f: "ich <b>esse</b>, du <b>isst</b>, er/sie <b>isst</b>", de: "Was *isst* du gern?", en: "What do you like to eat?", tip: "Same e-to-i flip as sprechen (du sprichst). das Essen with a capital E = the food / the meal." },
    { g: "verb", w: "trinken", ty: "verb", m: "To drink.", f: "ich <b>trinke</b>, du <b>trinkst</b>, er/sie <b>trinkt</b>", de: "Was *trinkst* du?", en: "What are you drinking?" },
    { g: "verb", w: "möchten", ty: "verb", m: "Would like. The polite way to order or ask for anything.", f: "ich <b>möchte</b>, du <b>möchtest</b>, er/sie <b>möchte</b>, Sie <b>möchten</b>", de: "Ich *möchte* einen Kaffee.", en: "I'd like a coffee.", tip: "Use möchte, not will. \"Ich will\" sounds like a toddler demanding things." },
    { g: "verb", w: "schmecken", ty: "verb", m: "To taste (good).", f: "es <b>schmeckt</b>, sie <b>schmecken</b>", de: "*Schmeckt* es?", en: "Do you like it? / Is it good?", tip: "Waiters ask \"Schmeckt's?\" during the meal. Answer: Ja, sehr gut!" },
    { g: "taste", w: "lecker", ty: "adjective", m: "Tasty, delicious. Everyday word.", de: "Der Kuchen ist *lecker*!", en: "The cake is delicious!" },
    { g: "taste", w: "Hunger", a: "der", ty: "noun", m: "Hunger.", de: "Ich habe *Hunger*.", en: "I'm hungry. (literally: I have hunger)", sc: "The <b>Superhero</b>'s stomach growls so loudly that every car alarm on the street goes off at once." },
    { g: "taste", w: "Durst", a: "der", ty: "noun", m: "Thirst.", de: "Hast du *Durst*?", en: "Are you thirsty?", sc: "The <b>Superhero</b> is so thirsty he drinks an entire swimming pool. He swells up like a balloon and floats away over Tempelhof." },
    { g: "taste", w: "vegetarisch", ty: "adjective", m: "Vegetarian.", de: "Ist das *vegetarisch*?", en: "Is that vegetarian?", tip: "vegan is also just vegan. Berlin is one of the easiest cities in Europe for both." },
    { g: "order", w: "gern", ty: "adverb", m: "Gladly. After a verb it means you like doing it.", de: "Ich trinke *gern* Tee.", en: "I like drinking tea.", tip: "\"Gern!\" alone = \"Sure! / With pleasure!\"" },
    { g: "order", w: "noch", ty: "adverb", m: "Another / more. Also \"still\".", de: "*Noch* ein Bier, bitte!", en: "Another beer, please!" },
    { g: "order", w: "mit / ohne", v: ["mit", "ohne"], ty: "prepositions", m: "With / without.", de: "Einen Tee *ohne* Milch, bitte.", en: "A tea without milk, please." }
  ]
};

A1.batches["a1-1-b5"].story = {
  title: "Breakfast at the café",
  intro: "Saturday, 10 a.m. Tom, Anna and Leo are back at the same café, with the same waiter. Tom has big plans.",
  lines: [
    { who: "Waiter", de: "Guten Morgen. Drei, ja?", en: "Good morning. Three, right?" },
    { who: "Anna", de: "Ja. Wir {möchten} {Frühstück}.", en: "Yes. We'd like breakfast." },
    { who: "Waiter", de: "Was {trinken} Sie?", en: "What would you like to drink?" },
    { who: "Tom", de: "Einen {Kaffee}, bitte. {Mit|mit / ohne} {Milch}.", en: "A coffee, please. With milk." },
    { who: "Anna", de: "Und einen {Tee} {ohne|mit / ohne} Milch, bitte.", en: "And a tea without milk, please." },
    { who: "Leo", de: "Ich habe {Durst}! Einen {Orangensaft|Saft}!", en: "I'm thirsty! An orange juice!" },
    { who: "Waiter", de: "Und was {essen} Sie?", en: "And what will you eat?" },
    { who: "Tom", de: "Ich habe {Hunger}! Zwei {Brötchen} mit {Käse} und {Wurst}, und ein {Ei}.", en: "I'm hungry! Two rolls with cheese and sausage, and an egg." },
    { who: "Anna", de: "Ich esse kein {Fleisch}. Was ist {vegetarisch}?", en: "I don't eat meat. What's vegetarian?" },
    { who: "Waiter", de: "Wir haben {Brot} mit {Gemüse}.", en: "We have bread with vegetables." },
    { who: "Anna", de: "Gut. Und {Obst}, bitte.", en: "Good. And fruit, please." },
    { who: "Leo", de: "Ich möchte {Kuchen}!", en: "I want cake!" },
    { who: "Anna", de: "Leo, Kuchen ist nicht Frühstück!", en: "Leo, cake is not breakfast!" },
    { who: "Leo", de: "Kuchen ist mein Frühstück!", en: "Cake is my breakfast!" },
    { who: "Waiter", de: "{Schmeckt|schmecken} es?", en: "Is everything good?" },
    { who: "Tom", de: "Ja! Das ist {lecker}! {Noch} einen Kaffee, bitte.", en: "Yes! It's delicious! Another coffee, please." },
    { who: "Waiter", de: "Noch einen? Das ist Kaffee Nummer fünf.", en: "Another one? That's coffee number five." },
    { who: "Tom", de: "Ja ... und ein {Bier}?", en: "Yes ... and a beer?" },
    { who: "Anna", de: "Ein Bier? Jetzt? Tom, es ist zehn Uhr! Du trinkst jetzt {Wasser}.", en: "A beer? Now? Tom, it's ten o'clock! You're drinking water now." },
    { who: "Tom", de: "OK, OK. Anna, hast du heute Abend Zeit? {Abendessen} um sieben?", en: "OK, OK. Anna, are you free tonight? Dinner at seven?" },
    { who: "Anna", de: "{Gern}! Was essen wir?", en: "Sure! What are we eating?" },
    { who: "Tom", de: "{Fisch}!", en: "Fish!" },
    { who: "Leo", de: "Fisch? Bäh! Und das {Mittagessen}? Ich habe noch Hunger!", en: "Fish? Yuck! And what about lunch? I'm still hungry!" }
  ]
};
