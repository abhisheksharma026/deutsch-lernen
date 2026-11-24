// A1.1 Batch 4. Examples only use words from Batches 1-4, plus names, digits and obvious look-alikes (Bus, Bahn, Kurs, Pizza).
A1.batches["a1-1-b4"] = {
  lead: "30 words to tell the time, name the days, and book (and survive) a Termin. Builds on Batch 3: the numbers you just learned now become clock times.",
  groups: [
    { id: "clock", t: "Telling the time", s: "Two traps live here: halb looks forward to the next hour, and Uhr is not the same as Stunde." },
    { id: "days", t: "Days and parts of the day", s: "All days of the week are der. Compound words take the article of their last part." },
    { id: "when", t: "When?", s: "Small time words. They often go first in the sentence, and then the verb comes right after." },
    { id: "appt", t: "Making a Termin", s: "Germany runs on appointments. These words get you one, and get you there on time." },
    { id: "verb", t: "Three verbs for waiting around", s: "warten adds an extra e for du and er/sie, because \"wartst\" is unsayable." },
    { id: "little", t: "Question words and tiny time words", s: "um for clock times, am for days, von ... bis for ranges." }
  ],
  words: [
    { g: "clock", w: "Uhr", a: "die", pl: "die Uhren", ty: "noun", m: "Clock or watch. Also \"o'clock\".", de: "Es ist drei *Uhr*.", en: "It's three o'clock.", tip: "es ist = it is. Official times use 24 hours: 17 Uhr = 5 pm.", sc: "The <b>Queen</b>'s crown has a cuckoo clock built in. Every hour a little bird bursts out of the top of her head and screams the time at her guests." },
    { g: "clock", w: "Stunde", a: "die", pl: "die Stunden", ty: "noun", m: "Hour, as a length of time.", de: "Ich warte eine *Stunde*.", en: "I'm waiting for an hour.", tip: "Uhr = what time it is (drei Uhr). Stunde = how long something takes (drei Stunden).", sc: "The <b>Queen</b>'s bath lasts exactly one hour. She times it with an hourglass the size of a fridge, filled with glitter instead of sand." },
    { g: "clock", w: "Minute", a: "die", pl: "die Minuten", ty: "noun", m: "Minute.", de: "Der Bus kommt in fünf *Minuten*.", en: "The bus comes in five minutes.", sc: "The <b>Queen</b> wants her egg boiled for exactly one minute. At 61 seconds she screams so loud the chef faints into the soup." },
    { g: "clock", w: "halb", ty: "time word", m: "Half. In time it means half an hour BEFORE the hour you say.", de: "Es ist *halb* drei.", en: "It's half past two. (2:30)", tip: "Big trap: halb drei = halfway to three = 2:30, not 3:30." },
    { g: "clock", w: "Viertel", a: "das", pl: "die Viertel", ty: "noun", m: "Quarter. Also a neighbourhood of a city.", de: "Es ist *Viertel* nach acht.", en: "It's quarter past eight.", tip: "nach = past / after, vor = to / before. Viertel vor acht = 7:45.", sc: "The <b>Big Fat Baby</b> cuts a pizza into four quarters, eats one, and sits on the other three. They stay warm for hours." },
    { g: "clock", w: "spät", ty: "adjective", m: "Late. In a question: what time is it?", de: "Wie *spät* ist es?", en: "What time is it? (literally: how late is it?)", tip: "Answer: Es ist drei Uhr. Also: Es ist spät = it's late." },
    { g: "days", w: "Tag", a: "der", pl: "die Tage", ty: "noun", m: "Day.", de: "Guten *Tag*!", en: "Good day! / Hello! (formal)", tip: "gut becomes guten here. Ending rules come later, just learn Guten Tag as one block.", sc: "The <b>Superhero</b> only works during the day. At sunset his cape falls asleep, and he drops out of the sky straight onto a Currywurst stand." },
    { g: "days", w: "Woche", a: "die", pl: "die Wochen", ty: "noun", m: "Week.", de: "Eine *Woche* hat sieben Tage.", en: "A week has seven days.", sc: "The <b>Queen</b> has a different crown for each day of the week. On Sunday she can't decide, so she wears all seven stacked on top of each other and can't fit through the door." },
    { g: "days", w: "Wochenende", a: "das", pl: "die Wochenenden", ty: "noun", m: "Weekend.", de: "Am *Wochenende* habe ich Zeit.", en: "I have time at the weekend.", tip: "die Woche + das Ende = das Wochenende. The last part always decides the article.", sc: "The <b>Big Fat Baby</b> spends the whole weekend in a bathtub of warm milk, from Friday night to Monday morning, snoring bubbles." },
    { g: "days", w: "Montag ... Sonntag", a: "der", ty: "nouns, the days of the week", m: "Monday to Sunday. Every one of them is der.", f: "<b>Montag</b>, <b>Dienstag</b>, <b>Mittwoch</b>, <b>Donnerstag</b>, <b>Freitag</b>, <b>Samstag</b>, <b>Sonntag</b>", de: "*Mittwoch* passt gut.", en: "Wednesday works well.", tip: "Mittwoch = mid-week, the only day not ending in -tag.", sc: "Each day of the week is its own <b>Superhero</b>. Mr Montag is grumpy and flies slowly. Mr Freitag throws pizza from the sky. Mr Sonntag refuses to get out of bed." },
    { g: "days", w: "Abend", a: "der", pl: "die Abende", ty: "noun", m: "Evening.", de: "Heute *Abend* habe ich Zeit.", en: "I have time tonight. (this evening)", tip: "Guten Abend = good evening. heute Abend = tonight.", sc: "Every evening the <b>Superhero</b> hangs his cape on the balcony to dry. Every evening a Berlin fox steals it and wears it around the Hasenheide." },
    { g: "days", w: "Nacht", a: "die", pl: "die Nächte", ty: "noun", m: "Night.", de: "Gute *Nacht*!", en: "Good night!", sc: "The <b>Queen</b>'s crown glows in the dark like a night light, so she can't sleep. Every night she puts it in the fridge. The milk is now royal." },
    { g: "when", w: "heute", ty: "adverb", m: "Today.", de: "*Heute* ist Montag.", en: "Today is Monday." },
    { g: "when", w: "morgen", ty: "adverb", m: "Tomorrow. Lowercase.", de: "Bis *morgen*!", en: "See you tomorrow!", tip: "der Morgen (capital M) = the morning. morgen früh = tomorrow morning." },
    { g: "when", w: "jetzt", ty: "adverb", m: "Now.", de: "Ich habe *jetzt* keine Zeit.", en: "I don't have time now." },
    { g: "when", w: "später", ty: "adverb", m: "Later.", de: "Bis *später*!", en: "See you later!" },
    { g: "when", w: "früh", ty: "adjective / adverb", m: "Early.", de: "Morgen *früh* habe ich einen Termin.", en: "Tomorrow morning I have an appointment." },
    { g: "appt", w: "Termin", a: "der", pl: "die Termine", ty: "noun", m: "Appointment. Doctor, office, hairdresser, anything booked.", de: "Ich brauche einen *Termin*.", en: "I need an appointment.", tip: "Without a Termin, many German offices won't see you at all.", sc: "The <b>Superhero</b> tries to book a Termin at the Bürgeramt. The next free one is in 2031. He flies around the Earth backwards to travel there faster." },
    { g: "appt", w: "Zeit", a: "die", pl: "die Zeiten", ty: "noun", m: "Time, as in free time or how much time.", de: "Hast du *Zeit*?", en: "Do you have time?", tip: "For clock time use Uhr. Zeit is time you have or don't have.", sc: "The <b>Queen</b> orders time to stop so it can be teatime forever. Every clock in the palace freezes. The tea goes cold anyway, and she is furious." },
    { g: "appt", w: "frei", ty: "adjective", m: "Free, available. Also free of charge.", de: "Am Freitag bin ich *frei*.", en: "I'm free on Friday." },
    { g: "appt", w: "pünktlich", ty: "adjective", m: "On time. A very German virtue.", de: "Die Bahn ist nicht *pünktlich*.", en: "The train isn't on time.", tip: "Five minutes late for a Termin is late. For a party, come 10 to 15 minutes after the time." },
    { g: "appt", w: "Moment", a: "der", pl: "die Momente", ty: "noun", m: "Moment. \"Moment!\" alone means \"wait a sec\".", de: "Einen *Moment*, bitte.", en: "One moment, please.", sc: "The <b>Superhero</b> freezes mid-air for a moment to take a selfie. A pigeon lands on his head and stays for the whole photo." },
    { g: "verb", w: "dauern", ty: "verb", m: "To last, to take (time).", f: "es <b>dauert</b>, sie <b>dauern</b>", de: "Das *dauert* zehn Minuten.", en: "That takes ten minutes." },
    { g: "verb", w: "passen", ty: "verb", m: "To suit, to work for someone. Also to fit (clothes).", f: "es <b>passt</b>, sie <b>passen</b>", de: "*Passt* Montag?", en: "Does Monday work?", tip: "The scheduling word. Answer: Ja, Montag passt gut. or: Nein, Montag passt nicht." },
    { g: "verb", w: "warten", ty: "verb", m: "To wait.", f: "ich <b>warte</b>, du <b>wartest</b>, er/sie <b>wartet</b>", de: "*Warten* Sie, bitte!", en: "Please wait!" },
    { g: "little", w: "wann", ty: "question word", m: "When.", de: "*Wann* hast du Zeit?", en: "When do you have time?", tip: "Trap: wann = when, wenn = if. Not the English \"when\" spelling." },
    { g: "little", w: "wie lange", ty: "question words", m: "How long (time).", de: "*Wie lange* dauert der Termin?", en: "How long does the appointment take?" },
    { g: "little", w: "um", ty: "preposition", m: "At, for clock times.", de: "Der Termin ist *um* zehn Uhr.", en: "The appointment is at ten o'clock." },
    { g: "little", w: "am", ty: "preposition", m: "On, for days and parts of the day.", de: "*Am* Montag habe ich einen Termin.", en: "On Monday I have an appointment.", tip: "am Montag, am Wochenende, am Abend. But: in der Nacht." },
    { g: "little", w: "von ... bis", ty: "prepositions", m: "From ... to / until.", de: "Der Deutschkurs ist *von* Montag *bis* Donnerstag.", en: "The German course is from Monday to Thursday.", tip: "bis alone works too: Bis morgen! = until tomorrow, see you tomorrow." }
  ]
};

A1.batches["a1-1-b4"].story = {
  title: "Tom needs a Termin",
  intro: "Tom's registration isn't finished. He calls the Bürgeramt and, of course, gets Frau Schmidt. Later, Anna knocks on his door.",
  lines: [
    { who: "Frau Schmidt", de: "Bürgeramt Kreuzberg, Schmidt. Guten {Tag}!", en: "Bürgeramt Kreuzberg, Schmidt speaking. Hello!" },
    { who: "Tom", de: "Guten Tag! Hier ist Tom Rossi. Ich brauche einen {Termin}.", en: "Hello! This is Tom Rossi. I need an appointment." },
    { who: "Frau Schmidt", de: "Ah. Rom. {Moment}, bitte ... {Wann} haben Sie {Zeit}?", en: "Ah. Rome. One moment, please ... When do you have time?" },
    { who: "Tom", de: "{Heute}?", en: "Today?" },
    { who: "Frau Schmidt", de: "Heute? Ha! Nein.", en: "Today? Ha! No." },
    { who: "Tom", de: "{Morgen}?", en: "Tomorrow?" },
    { who: "Frau Schmidt", de: "Nein. Die {Woche} ist nicht {frei}.", en: "No. The week isn't free." },
    { who: "Tom", de: "Und am {Wochenende}?", en: "And at the weekend?" },
    { who: "Frau Schmidt", de: "Am Wochenende? Nein! Wir sind {von|von ... bis} {Montag|Montag ... Sonntag} {bis|von ... bis} Freitag hier.", en: "At the weekend? No! We're here from Monday to Friday." },
    { who: "Frau Schmidt", de: "{Passt|passen} {am} Mittwoch, {halb} neun?", en: "Does Wednesday at half past eight work?" },
    { who: "Tom", de: "Halb neun? Das ist {früh}!", en: "Half past eight? That's early!" },
    { who: "Frau Schmidt", de: "{Später}? Mittwoch {um} siebzehn {Uhr}.", en: "Later? Wednesday at 5 pm." },
    { who: "Tom", de: "Gut! Und {wie lange} {dauert|dauern} der Termin?", en: "Good! And how long does the appointment take?" },
    { who: "Frau Schmidt", de: "Zehn {Minuten|Minute}. Aber Sie {warten} eine {Stunde}. Und bitte {pünktlich}!", en: "Ten minutes. But you'll wait an hour. And please be on time!" },
    { who: "Tom", de: "Ja! Danke, tschüss!", en: "Yes! Thanks, bye!" },
    { who: "Anna", de: "Tom! Hast du {jetzt} Zeit? Pizza?", en: "Tom! Do you have time now? Pizza?" },
    { who: "Tom", de: "Jetzt? Wie {spät} ist es?", en: "Now? What time is it?" },
    { who: "Anna", de: "{Viertel} nach acht.", en: "Quarter past eight." },
    { who: "Tom", de: "Viertel nach acht am {Abend}? Das ist nicht spät. Ja!", en: "Quarter past eight in the evening? That's not late. Yes!" },
    { who: "Leo", de: "Gute {Nacht}, Tom!", en: "Good night, Tom!" },
    { who: "Anna", de: "Leo! Es ist nicht Nacht. Es ist Abend!", en: "Leo! It's not night. It's evening!" }
  ]
};
