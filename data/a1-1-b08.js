// A1.1 Batch 8. Examples only use words from Batches 1-8, plus names, digits and obvious look-alikes (Bus, Auto, Taxi, Park, Hamburg, Alexanderplatz).
A1.batches["a1-1-b8"] = {
  lead: "30 words to ride the U-Bahn, catch a tram, ask the way and survive a train delay. Builds on Batches 4 and 7: times, links / rechts and Verspätung-proof patience go out into the city.",
  groups: [
    { id: "move", t: "Ways to get around", s: "You fahren in anything with wheels. You gehen on foot. mit + vehicle: mit der U-Bahn, mit dem Bus." },
    { id: "place", t: "Places in the city", s: "Haltestelle and Straße follow the usual pattern: many words ending in -e are die." },
    { id: "trip", t: "On the way", s: "Verspätung is die, like every -ung word. You'll meet it more than you'd like." },
    { id: "verb", t: "Four verbs for travelling", s: "umsteigen, einsteigen and aussteigen split in two: Ich steige hier um. The small part jumps to the end." },
    { id: "dir", t: "Asking and giving directions", s: "zum and zur are zu plus the article: zu dem = zum (der / das words), zu der = zur (die words)." }
  ],
  words: [
    { g: "move", w: "U-Bahn", a: "die", pl: "die U-Bahnen", ty: "noun", m: "Underground, subway. Lines are called U1, U2 and so on.", de: "Ich fahre mit der *U-Bahn*.", en: "I'm taking the underground.", tip: "Berlin also has the S-Bahn (overground trains). One ticket covers U-Bahn, S-Bahn, bus and tram.", sc: "The <b>Queen</b> takes the U-Bahn at rush hour. Her crown scrapes the ceiling the whole way, throwing sparks from Kreuzberg to Alexanderplatz. A busker plays a royal march for her." },
    { g: "move", w: "Bus", a: "der", pl: "die Busse", ty: "noun", m: "Bus.", de: "Der *Bus* hat Verspätung.", en: "The bus is late.", sc: "The <b>Superhero</b> misses his bus, flies after it at full speed and catches up at the next stop. The driver looks at him and closes the door anyway." },
    { g: "move", w: "Straßenbahn", a: "die", pl: "die Straßenbahnen", ty: "noun", m: "Tram. Also just called Tram.", de: "Die *Straßenbahn* fährt bis Alexanderplatz.", en: "The tram goes to Alexanderplatz.", tip: "Die Straße + die Bahn = die Straßenbahn. Berlin's trams run mostly in the east of the city.", sc: "The <b>Queen</b> takes over the tram and drives it herself, ringing the bell non-stop. Every passenger gets off at the wrong stop just to escape." },
    { g: "move", w: "Zug", a: "der", pl: "die Züge", ty: "noun", m: "Train.", de: "Der *Zug* fährt um acht Uhr.", en: "The train leaves at eight.", sc: "The <b>Superhero</b> waits two hours for a late train, then gives up and pushes it himself, all the way from Hamburg to Berlin." },
    { g: "move", w: "Fahrrad", a: "das", pl: "die Fahrräder", ty: "noun", m: "Bicycle, bike. Short form: das Rad.", de: "Ich fahre mit dem *Fahrrad*.", en: "I go by bike.", sc: "The <b>Big Fat Baby</b> rides a tiny tricycle onto the Autobahn and overtakes every car, giggling, with its dummy flapping in the wind." },
    { g: "move", w: "Auto", a: "das", pl: "die Autos", ty: "noun", m: "Car.", de: "Ich habe kein *Auto*.", en: "I don't have a car.", sc: "The <b>Big Fat Baby</b> drives a car with a dummy in its mouth. It can't reach the horn, so it honks by bouncing its belly on the steering wheel." },
    { g: "move", w: "Fahrkarte", a: "die", pl: "die Fahrkarten", ty: "noun", m: "Ticket for a bus, train or tram.", de: "Eine *Fahrkarte*, bitte.", en: "A ticket, please.", tip: "Paper tickets must be stamped in the small machine before you ride. Ticket checks are frequent and fines are steep.", sc: "The <b>Queen</b> shows the ticket inspector a ticket written on a three-metre royal scroll. He reads all of it, then fines her anyway." },
    { g: "place", w: "Straße", a: "die", pl: "die Straßen", ty: "noun", m: "Street, road.", de: "Die *Straße* ist laut.", en: "The street is noisy.", tip: "ß sounds like ss. In addresses, the number comes after the street name: Lindenstraße 5.", sc: "The <b>Queen</b> has her whole street painted gold. It looks magnificent until it rains, and the neighbours slide to work on their bottoms." },
    { g: "place", w: "Bahnhof", a: "der", pl: "die Bahnhöfe", ty: "noun", m: "Train station.", de: "Wo ist der *Bahnhof*?", en: "Where is the station?", tip: "Hauptbahnhof (main station) is shortened to Hbf on signs.", sc: "The <b>Superhero</b> moves into the main station and makes the delay announcements himself, in a deep heroic voice. Somehow the trains are still late." },
    { g: "place", w: "Haltestelle", a: "die", pl: "die Haltestellen", ty: "noun", m: "Stop, for a bus or tram.", de: "Die *Haltestelle* ist da.", en: "The stop is over there.", sc: "The <b>Queen</b> waits at the bus stop sitting on a golden throne. When the bus comes, it's too narrow for the throne, so she waits for the next one." },
    { g: "place", w: "Platz", a: "der", pl: "die Plätze", ty: "noun", m: "Square (Alexanderplatz). Also a seat or a space.", de: "Ist der *Platz* frei?", en: "Is this seat free?", sc: "The <b>Superhero</b> lands in the middle of a big square. Five hundred pigeons take it personally and chase him all the way back into the sky." },
    { g: "place", w: "Park", a: "der", pl: "die Parks", ty: "noun", m: "Park.", de: "Am Sonntag sind wir im *Park*.", en: "On Sunday we're in the park.", sc: "The <b>Superhero</b> naps in the park. When he wakes up, a dog is asleep on his cape and he's too polite to move it. He stays there until evening." },
    { g: "place", w: "Flughafen", a: "der", pl: "die Flughäfen", ty: "noun", m: "Airport. Berlin's is BER.", de: "Der *Flughafen* ist weit.", en: "The airport is far away.", tip: "der Flug (flight) + der Hafen (harbour) = der Flughafen.", sc: "The <b>Superhero</b> can fly, so he doesn't need the airport. He goes anyway, every week, just to complain about the queues." },
    { g: "place", w: "Ecke", a: "die", pl: "die Ecken", ty: "noun", m: "Corner.", de: "Der Späti ist an der *Ecke*.", en: "The Späti is on the corner.", sc: "The <b>Queen</b> gets lost and walks around the same corner 47 times. Each time, she greets the same Späti guy as if they've never met." },
    { g: "trip", w: "Linie", a: "die", pl: "die Linien", ty: "noun", m: "Line, as in a bus, tram or U-Bahn line.", de: "Nehmen Sie die *Linie* U8.", en: "Take line U8.", sc: "The <b>Queen</b> draws her own U-Bahn line on the city map, straight through the middle of her palace. It has one stop: her bedroom." },
    { g: "trip", w: "Fahrplan", a: "der", pl: "die Fahrpläne", ty: "noun", m: "Timetable.", de: "Wo ist der *Fahrplan*?", en: "Where is the timetable?", sc: "The train is late again, so the <b>Superhero</b> tears the timetable off the wall and eats it. It tastes like broken promises." },
    { g: "trip", w: "Verspätung", a: "die", pl: "die Verspätungen", ty: "noun", m: "Delay.", de: "Der Zug hat zehn Minuten *Verspätung*.", en: "The train is ten minutes late.", tip: "Germans say a train \"has\" a delay: Der Zug hat Verspätung.", sc: "The <b>Queen</b> arrives three hours late to everything and always blames the Verspätung. She hasn't taken a train in her life." },
    { g: "trip", w: "Ampel", a: "die", pl: "die Ampeln", ty: "noun", m: "Traffic light.", de: "Warten Sie an der *Ampel*!", en: "Wait at the traffic light!", tip: "Germans wait for the green man, even on an empty street at 3 a.m. In east Berlin the little man wears a hat: the Ampelmännchen.", sc: "The <b>Queen</b> waits at a red light at 3 a.m. on a completely empty street. A fox walks across. She glares at it, deeply offended." },
    { g: "verb", w: "gehen", ty: "verb", m: "To go on foot, to walk. Also \"to work\" or \"to be possible\".", f: "ich <b>gehe</b>, du <b>gehst</b>, er/sie <b>geht</b>", de: "Ich *gehe* nach Hause.", en: "I'm going home.", tip: "Wie geht's? = How's it going? Das geht nicht = That doesn't work." },
    { g: "verb", w: "fahren", ty: "verb, irregular", m: "To go by vehicle, to drive, to ride.", f: "ich <b>fahre</b>, du <b>fährst</b>, er/sie <b>fährt</b>", de: "Ich *fahre* mit dem Bus.", en: "I'm going by bus.", tip: "a becomes ä for du and er/sie, the same pattern as schlafen." },
    { g: "verb", w: "umsteigen", ty: "verb, separable", m: "To change (trains, buses).", f: "ich <b>steige</b> ... <b>um</b>, du <b>steigst</b> ... <b>um</b>", de: "Sie *steigen* am Alexanderplatz *um*.", en: "You change at Alexanderplatz." },
    { g: "verb", w: "einsteigen / aussteigen", ty: "verbs, separable", m: "To get on / to get off.", f: "ich <b>steige</b> ... <b>ein</b>, ich <b>steige</b> ... <b>aus</b>", de: "Ich *steige* hier *aus*.", en: "I'm getting off here.", tip: "You'll hear \"Bitte einsteigen!\" and \"Alle aussteigen!\" on every platform." },
    { g: "dir", w: "geradeaus", ty: "adverb", m: "Straight ahead.", de: "Gehen Sie *geradeaus*.", en: "Go straight ahead." },
    { g: "dir", w: "dann", ty: "adverb", m: "Then, after that.", de: "Gehen Sie links, *dann* geradeaus.", en: "Go left, then straight on." },
    { g: "dir", w: "weit / nah", ty: "adjectives", m: "Far / near, close.", de: "Ist es *weit*?", en: "Is it far?" },
    { g: "dir", w: "nach", ty: "preposition", m: "To, for cities and countries. Also in nach Hause.", de: "Wir fahren *nach* Hamburg.", en: "We're going to Hamburg.", tip: "nach for cities, countries and home. zum / zur for places and people." },
    { g: "dir", w: "zum / zur", ty: "prepositions", m: "To the. zum for der and das words, zur for die words.", f: "<b>zum</b> Bahnhof (der), <b>zum</b> Café (das), <b>zur</b> Haltestelle (die)", de: "Ich fahre *zum* Bahnhof.", en: "I'm going to the station.", tip: "Your articles pay off here: you can only pick zum or zur if you know der, die or das." },
    { g: "dir", w: "zu Fuß", ty: "phrase", m: "On foot.", de: "Ich gehe *zu Fuß*.", en: "I'm walking." },
    { g: "dir", w: "schnell / langsam", ty: "adjectives", m: "Fast / slow.", de: "Die U-Bahn ist *schnell*.", en: "The underground is fast.", tip: "Langsam, bitte! = Slowly, please! Use it when someone speaks German too fast for you." },
    { g: "dir", w: "Wie komme ich zum ...?", ty: "phrase", m: "How do I get to ...? Use zur for die words.", de: "*Wie komme ich zum* Bahnhof?", en: "How do I get to the station?" }
  ]
};

A1.batches["a1-1-b8"].story = {
  title: "Tom goes to the airport",
  intro: "Sunday morning. Tom's mother is flying in from Rome. Tom has no car, and Berlin's trains have other plans.",
  lines: [
    { who: "Tom", de: "Entschuldigung! {Wie komme ich zum|Wie komme ich zum ...?} {Flughafen}?", en: "Excuse me! How do I get to the airport?" },
    { who: "Woman", de: "Zum Flughafen? Das ist {weit|weit / nah}! Nicht {zu Fuß}!", en: "To the airport? That's far! Not on foot!" },
    { who: "Woman", de: "{Gehen|gehen} Sie die {Straße} {geradeaus} bis {zur|zum / zur} {Ampel}, {dann} links. Da ist die {Haltestelle}.", en: "Go straight down the street to the traffic light, then left. The stop is there." },
    { who: "Tom", de: "Mit dem {Bus}?", en: "By bus?" },
    { who: "Woman", de: "Nein, die {Straßenbahn}. Sie {fahren|fahren} zum {Bahnhof}. Da {steigen Sie um|umsteigen} in den {Zug}. Er ist {schnell|schnell / langsam}.", en: "No, the tram. You go to the station. There you change to the train. It's fast." },
    { who: "Tom", de: "Danke! ... Wo ist der {Fahrplan}? Ah, {Linie} M10.", en: "Thanks! ... Where's the timetable? Ah, line M10." },
    { who: "Tram", de: "Bitte {einsteigen|einsteigen / aussteigen}!", en: "All aboard, please!" },
    { who: "Tom", de: "Ist der {Platz} frei?", en: "Is this seat free?" },
    { who: "Man", de: "Nein.", en: "No." },
    { who: "Inspector", de: "Ihre {Fahrkarte}, bitte!", en: "Your ticket, please!" },
    { who: "Tom", de: "Hier, bitte. ... So, Bahnhof. Der Zug hat dreißig Minuten {Verspätung}?!", en: "Here you go. ... Right, the station. The train is thirty minutes late?!" },
    { who: "Tom", de: "Ein Taxi? Zu teuer. Ein {Fahrrad}? Zu weit. Die {U-Bahn}!", en: "A taxi? Too expensive. A bike? Too far. The underground!" },
    { who: "Mama", de: "Tom! Wo bist du?", en: "Tom! Where are you?" },
    { who: "Tom", de: "In der U-Bahn, Mama. Sie ist so langsam! Und du?", en: "On the underground, Mum. It's so slow! And you?" },
    { who: "Mama", de: "Ich bin nicht am Flughafen. Anna hat ein {Auto}! Wir sind in Kreuzberg, im {Park}.", en: "I'm not at the airport. Anna has a car! We're in Kreuzberg, in the park." },
    { who: "Tom", de: "Was?! Wo im Park?", en: "What?! Where in the park?" },
    { who: "Mama", de: "An der {Ecke}. Da ist ein Späti.", en: "On the corner. There's a Späti." },
    { who: "Tom", de: "OK ... Ich {steige|einsteigen / aussteigen} hier aus und fahre {nach} Kreuzberg.", en: "OK ... I'm getting off here and going to Kreuzberg." }
  ]
};
