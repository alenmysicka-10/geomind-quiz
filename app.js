// ── Constants ──────────────────────────────────────────────────────────────
const Q_TIME = 30;
const LETTERS = ['A','B','C','D'];
const STREAK_MIN = 3;

// ── Continents ─────────────────────────────────────────────────────────────
const CONTINENTS = {
  all:     { cs:"Napříč kontinenty",      en:"Across Continents",      dark:"#1e3a5f", light:"#60a5fa", accent:"#2563eb" },
  europe:  { cs:"Evropa",                en:"Europe",                  dark:"#1e3a5f", light:"#93c5fd", accent:"#1d4ed8" },
  asia:    { cs:"Asie",                  en:"Asia",                    dark:"#7c1d1d", light:"#fca5a5", accent:"#dc2626" },
  africa:  { cs:"Afrika",               en:"Africa",                   dark:"#78350f", light:"#fcd34d", accent:"#d97706" },
  america: { cs:"Severní a Jižní Amerika", en:"North & South America", dark:"#14532d", light:"#86efac", accent:"#16a34a" },
  oceania: { cs:"Austrálie a Oceánie",   en:"Australia & Oceania",     dark:"#4c1d95", light:"#c4b5fd", accent:"#7c3aed" }
};

// ── Category Labels ────────────────────────────────────────────────────────
const CATS = {
  flag:          { cs:"Vlajka",       en:"Flag",         icon:"🌍" },
  capital:       { cs:"Hlavní město", en:"Capital",      icon:"🏙️" },
  population:    { cs:"Obyvatelstvo", en:"Population",   icon:"👥" },
  sport:         { cs:"Sport",        en:"Sport",        icon:"🏆" },
  language:      { cs:"Jazyk",        en:"Language",     icon:"🗣️" },
  government:    { cs:"Vládnutí",     en:"Government",   icon:"🏛️" },
  currency:      { cs:"Měna",         en:"Currency",     icon:"💱" },
  resources:     { cs:"Zdroje",       en:"Resources",    icon:"⛏️" },
  personalities: { cs:"Osobnosti",    en:"Personalities",icon:"👤" },
  geography:     { cs:"Tvar země",    en:"Shape",        icon:"🗺️" },
  history:       { cs:"Historie",     en:"History",      icon:"📅" },
  landmark:      { cs:"Slavná památka", en:"Landmark",   icon:"🏛️" }
};

// ── UI Translations ─────────────────────────────────────────────────────────
const UI = {
  cs: {
    langFlag:"🇬🇧", langLabel:"EN",
    score:"Skóre", round:"Kolo", country:"Hraje se:",
    timeEnd:"konec",
    startTitle:"GeoMind", startSub:"Otestuj své zeměpisné znalosti o světě",
    continentLabel:"Vyber světadíl",
    featuresLabel:"Co tě čeká",
    startBtn:"Zahájit expedici",
    resultTitle:"Výsledek expedice", restartBtn:"Nová expedice",
    nextQ:"Další otázka", showResult:"Zobrazit výsledek",
    correct:"Správně!", wrong:"Bohužel ne.", timeout:"Čas vypršel.",
    yourAns:"Tvoje odpověď", correctAns:"Správná odpověď", timeoutNote:"Čas vypršel",
    q1Title:"Země podle vlajky a faktu", q1Text:"Která země odpovídá vlajce a popisu?",
    q2Title:"Hlavní město",
    q2Text: n => `Jaké je hlavní město ${n}?`,
    q3Title:"Obyvatelé země",
    q3Text: n => `Kolik obyvatel má přibližně ${n}?`,
    q4Title:"Obyvatelé hlavního města",
    q4Text: (cap,n) => `Kolik obyvatel má přibližně ${cap}, hlavní město ${n}?`,
    q5Title:"Sport a tým",
    q5Text: n => `Jaká kombinace nejlépe odpovídá zemi ${n}?`,
    q5Hint:"Vyber sport typický pro tuto zemi a tým s nejsilnější historií.",
    q6Title:"Jazyk", q6Text: n => `Jakým jazykem se mluví v ${n}?`,
    q6Hint:"Vyber nejběžnější oficiální jazyk nebo hlavní jazykovou kombinaci.",
    q7Title:"Typ vládnutí", q7Text: n => `Jaký typ vládnutí má ${n}?`,
    q7Hint:"Republika, monarchie nebo kombinace?",
    q8Title:"Měna", q8Text: n => `Čím se platí v ${n}?`,
    q8Hint:"Vyber správnou měnu pro tuto zemi.",
    q9Title:"Hlavní zdroje", q9Text: n => `Která trojice nejlépe popisuje zdroje ${n}?`,
    q9Hint:"Vyber správnou trojici přírodních a ekonomických zdrojů.",
    q10Title:"Osobnosti", q10Text: n => `Která osobnost je pro ${n} nejhistoricky významná?`,
    q11Title:"Historie a vznik státu", q11Text: n => `Ve kterém roce vznikl moderní stát ${n}?`,
    q11Hint:"Vyber správný rok vzniku nebo osamostatnění tohoto státu.",
    qLmTitle:"Slavná památka", qLmText:"Jak se jmenuje tato světoznámá památka?",
    qLmHint: (built, finished) => `Stavba zahájena: ${built} · Dokončena: ${finished}`,
    expLm:(name, built, finished, country) => `${name} (${country}) — stavba ${built}–${finished}.`,
    exp1:(n,f) => `${n}: ${f}`,
    exp2: c => `Hlavním městem je ${c}.`,
    exp3:(n,p) => `${n} má přibližně ${p} obyvatel.`,
    exp4:(c,p) => `${c} má přibližně ${p} obyvatel.`,
    exp5:(s,t) => `Typický sport: ${s}. Úspěšný tým: ${t}.`,
    exp6: l => `V zemi se mluví: ${l}.`,
    exp7: g => `Politický systém: ${g}.`,
    exp8: c => `Měna: ${c}.`,
    exp9: r => `Hlavní zdroje: ${r}.`,
    exp10:(n,ctx,oth) => `Nejvýznamnější: ${n} (${ctx}). Další: ${oth}.`,
    exp11:(n,y,ctx) => `${n} vznikl(a) v roce ${y} — ${ctx}.`,
    scoreResult:(s,t,p) => `Získal(a) jsi ${s} z ${t} bodů (${p}%).`,
    medals:{ perfect:"🏆 Perfektní výsledek!", great:"🥇 Výborně!", good:"🥈 Dobrá práce!", ok:"🥉 Ještě trénuj!", poor:"💪 Nevzdávej to!" },
    features:[
      {icon:"🌍",text:"Identifikace vlajky a faktu o zemi"},
      {icon:"🏙️",text:"Hádej hlavní město z nápovědy"},
      {icon:"👥",text:"Odhadni počet obyvatel (4 možnosti)"},
      {icon:"🏆",text:"Sport a historicky úspěšný tým"},
      {icon:"🗣️",text:"Jazyk nebo jazyková kombinace"},
      {icon:"🏛️",text:"Typ vládnutí a politický systém"},
      {icon:"💱",text:"Měna dané země"},
      {icon:"🏛️",text:"Poznej slavnou památku podle fotky"},
      {icon:"👤",text:"Slavné osobnosti"},
      {icon:"📅",text:"Historie — kdy stát vznikl?"}
    ]
  },
  en: {
    langFlag:"🇨🇿", langLabel:"CZ",
    score:"Score", round:"Round", country:"Playing:",
    timeEnd:"end",
    startTitle:"GeoMind", startSub:"Test your geographical knowledge of the world",
    continentLabel:"Select continent",
    featuresLabel:"What awaits you",
    startBtn:"Begin Expedition",
    resultTitle:"Expedition Results", restartBtn:"New Expedition",
    nextQ:"Next question", showResult:"Show results",
    correct:"Correct!", wrong:"Not quite.", timeout:"Time's up!",
    yourAns:"Your answer", correctAns:"Correct answer", timeoutNote:"Time's up",
    q1Title:"Country by Flag & Fact", q1Text:"Which country matches the flag and description?",
    q2Title:"Capital City",
    q2Text: n => `What is the capital city of ${n}?`,
    q3Title:"Country Population",
    q3Text: n => `Approximately how many people live in ${n}?`,
    q4Title:"Capital Population",
    q4Text: (cap,n) => `Approximately how many people live in ${cap}, capital of ${n}?`,
    q5Title:"Sport & Team",
    q5Text: n => `Which combination best matches ${n}?`,
    q5Hint:"Choose the sport most typical for this country and the team with the strongest history.",
    q6Title:"Language", q6Text: n => `What language(s) are spoken in ${n}?`,
    q6Hint:"Choose the most common official language or main language combination.",
    q7Title:"Government", q7Text: n => `What type of government does ${n} have?`,
    q7Hint:"Republic, monarchy, or a combination?",
    q8Title:"Currency", q8Text: n => `What currency is used in ${n}?`,
    q8Hint:"Choose the correct currency for this country.",
    q9Title:"Main Resources", q9Text: n => `Which trio best describes the main resources of ${n}?`,
    q9Hint:"Choose the correct trio of natural and economic resources.",
    q10Title:"Personalities", q10Text: n => `Which person is the most historically significant figure of ${n}?`,
    q11Title:"History & Foundation", q11Text: n => `In which year was the modern state of ${n} founded?`,
    q11Hint:"Choose the correct year of founding or independence of this state.",
    qLmTitle:"Famous Landmark", qLmText:"What is the name of this world-famous landmark?",
    qLmHint: (built, finished) => `Construction started: ${built} · Completed: ${finished}`,
    expLm:(name, built, finished, country) => `${name} (${country}) — built ${built}–${finished}.`,
    exp1:(n,f) => `${n}: ${f}`,
    exp2: c => `The capital city is ${c}.`,
    exp3:(n,p) => `${n} has approximately ${p} inhabitants.`,
    exp4:(c,p) => `${c} has approximately ${p} inhabitants.`,
    exp5:(s,t) => `Typical sport: ${s}. Successful team: ${t}.`,
    exp6: l => `The language spoken is: ${l}.`,
    exp7: g => `Political system: ${g}.`,
    exp8: c => `Currency: ${c}.`,
    exp9: r => `Main resources: ${r}.`,
    exp10:(n,ctx,oth) => `Most significant: ${n} (${ctx}). Others: ${oth}.`,
    exp11:(n,y,ctx) => `${n} was founded in ${y} — ${ctx}.`,
    scoreResult:(s,t,p) => `You scored ${s} out of ${t} points (${p}%).`,
    medals:{ perfect:"🏆 Perfect score!", great:"🥇 Excellent!", good:"🥈 Good job!", ok:"🥉 Keep practising!", poor:"💪 Don't give up!" },
    features:[
      {icon:"🌍",text:"Identify a country by its flag and fact"},
      {icon:"🏙️",text:"Guess the capital city from hints"},
      {icon:"👥",text:"Estimate the population (4 choices)"},
      {icon:"🏆",text:"Main sport and historically successful team"},
      {icon:"🗣️",text:"Language or language combination"},
      {icon:"🏛️",text:"Type of government and political system"},
      {icon:"💱",text:"Currency of the country"},
      {icon:"⛏️",text:"Natural and economic resources"},
      {icon:"👤",text:"Famous personalities"},
      {icon:"📅",text:"History — when was the state founded?"}
    ]
  }
};

// ── Country Database ───────────────────────────────────────────────────────
const COUNTRIES = [
  // ── EUROPE ────────────────────────────────────────────────────────────────
  {
    code:"CZ", flag:"🇨🇿", continent:"europe",
    population:10900000, capitalPop:1330000,
    cs:{
      name:"Česko",
      knownFor:"má mimořádně vysokou hustotu hradů a zámků a silnou průmyslovou tradici.",
      capital:{name:"Praha", icons:"🏰 ⏰ 🌉", clue:"Město s Orlojem, Karlovým mostem a historickým centrem UNESCO."},
      sport:{name:"Lední hokej",team:"HC Dukla Jihlava"},
      language:"Čeština",
      government:"Parlamentní republika",
      currency:"Česká koruna (CZK)",
      resources:["hnědé uhlí","kaolin","sklářský písek"],
      personalities:[
        {name:"Karel IV.",hint:"Vládce 14. stol., český král a římský císař.",context:"zakladatel Univerzity Karlovy"},
        {name:"Antonín Dvořák",hint:"Skladatel Novosvětské symfonie.",context:"světově proslulý skladatel"},
        {name:"Václav Havel",hint:"Dramatik a první prezident ČR.",context:"první prezident ČR"}
      ],
      cities:["Praha","Brno","Ostrava","Plzeň"]
    },
    en:{
      name:"Czech Republic",
      knownFor:"has an extraordinarily high density of castles with a strong industrial tradition.",
      capital:{name:"Prague", icons:"🏰 ⏰ 🌉", clue:"City of the Astronomical Clock, Charles Bridge and a UNESCO heritage site."},
      sport:{name:"Ice Hockey",team:"HC Dukla Jihlava"},
      language:"Czech",
      government:"Parliamentary Republic",
      currency:"Czech Koruna (CZK)",
      resources:["brown coal","kaolin","glass sand"],
      personalities:[
        {name:"Charles IV",hint:"14th-century King of Bohemia and Holy Roman Emperor.",context:"founder of Charles University"},
        {name:"Antonín Dvořák",hint:"Composer of the New World Symphony.",context:"world-renowned composer"},
        {name:"Václav Havel",hint:"Playwright and first president after 1989.",context:"first President of Czech Republic"}
      ],
      cities:["Prague","Brno","Ostrava","Plzeň"]
    }
  },
  {
    code:"DE", flag:"🇩🇪", continent:"europe",
    population:84400000, capitalPop:3700000,
    cs:{
      name:"Německo",
      knownFor:"je největší ekonomikou Evropy se silným automobilovým a chemickým průmyslem.",
      capital:{name:"Berlín", icons:"🌉 🐻 🏛️", clue:"Město Braniborské brány, Berlínské zdi a světoznámé muzejní čtvrti."},
      sport:{name:"Fotbal",team:"Bayern Mnichov"},
      language:"Němčina",
      government:"Spolková parlamentní republika",
      currency:"Euro (EUR)",
      resources:["uhlí","potaš","ocel"],
      personalities:[
        {name:"Ludwig van Beethoven",hint:"Skladatel 9. symfonie, světový génius hudby.",context:"legendární skladatel"},
        {name:"Albert Einstein",hint:"Fyzik, který formuloval teorii relativity.",context:"nositel Nobelovy ceny za fyziku"},
        {name:"Johann Wolfgang von Goethe",hint:"Básník a spisovatel, autor Fausta.",context:"literární génius"}
      ],
      cities:["Berlín","Hamburk","Mnichov","Kolín nad Rýnem"]
    },
    en:{
      name:"Germany",
      knownFor:"is Europe's largest economy with a strong automotive and chemical industry.",
      capital:{name:"Berlin", icons:"🌉 🐻 🏛️", clue:"City of the Brandenburg Gate, the Berlin Wall and world-famous museum island."},
      sport:{name:"Football",team:"Bayern Munich"},
      language:"German",
      government:"Federal Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["coal","potash","steel"],
      personalities:[
        {name:"Ludwig van Beethoven",hint:"Composer of the 9th Symphony.",context:"legendary composer"},
        {name:"Albert Einstein",hint:"Physicist who formulated the theory of relativity.",context:"Nobel Prize winner in Physics"},
        {name:"Johann Wolfgang von Goethe",hint:"Poet and writer, author of Faust.",context:"literary genius"}
      ],
      cities:["Berlin","Hamburg","Munich","Cologne"]
    }
  },
  {
    code:"FR", flag:"🇫🇷", continent:"europe",
    population:68400000, capitalPop:2100000,
    cs:{
      name:"Francie",
      knownFor:"je světovým centrem módy, gastronomie a turistiky s ikonickými památkami.",
      capital:{name:"Paříž", icons:"🗼 🎨 🥐", clue:"Město Eiffelovy věže, Louvru a Notre-Dame."},
      sport:{name:"Fotbal",team:"Paris Saint-Germain"},
      language:"Francouzština",
      government:"Poloprezidentská republika",
      currency:"Euro (EUR)",
      resources:["zemní plyn","bauxit","jaderná energie"],
      personalities:[
        {name:"Napoleon Bonaparte",hint:"Vojevůdce a císař, který ovládl velkou část Evropy.",context:"francouzský císař"},
        {name:"Marie Curie",hint:"Vědkyně polského původu, dvakrát laureátka Nobelovy ceny.",context:"průkopnice radioaktivity"},
        {name:"Louis Pasteur",hint:"Vynálezce pasteurizace a průkopník mikrobiologie.",context:"vědec a biolog"}
      ],
      cities:["Paříž","Marseille","Lyon","Toulouse"]
    },
    en:{
      name:"France",
      knownFor:"is a world center of fashion, gastronomy and tourism with iconic landmarks.",
      capital:{name:"Paris", icons:"🗼 🎨 🥐", clue:"City of the Eiffel Tower, the Louvre and Notre-Dame."},
      sport:{name:"Football",team:"Paris Saint-Germain"},
      language:"French",
      government:"Semi-Presidential Republic",
      currency:"Euro (EUR)",
      resources:["natural gas","bauxite","nuclear energy"],
      personalities:[
        {name:"Napoleon Bonaparte",hint:"General and emperor who dominated much of Europe.",context:"French emperor"},
        {name:"Marie Curie",hint:"Polish-born scientist, twice a Nobel laureate.",context:"pioneer of radioactivity"},
        {name:"Louis Pasteur",hint:"Inventor of pasteurisation and pioneer of microbiology.",context:"scientist and biologist"}
      ],
      cities:["Paris","Marseille","Lyon","Toulouse"]
    }
  },
  {
    code:"IT", flag:"🇮🇹", continent:"europe",
    population:59000000, capitalPop:2870000,
    cs:{
      name:"Itálie",
      knownFor:"je domovem největšího počtu lokalit světového dědictví UNESCO a má silné módní odvětví.",
      capital:{name:"Řím", icons:"🏛️ ⛪ 🍕", clue:"Věčné město s Koloseem, Vatikánem a Pantheonem."},
      sport:{name:"Fotbal",team:"Juventus FC"},
      language:"Italština",
      government:"Parlamentní republika",
      currency:"Euro (EUR)",
      resources:["mramor","zemní plyn","olivový olej"],
      personalities:[
        {name:"Leonardo da Vinci",hint:"Renesanční génius — malíř, vynálezce a vědec.",context:"renesanční polyhistor"},
        {name:"Galileo Galilei",hint:"Astronom, který potvrdil heliocentrický model sluneční soustavy.",context:"otec moderní vědy"},
        {name:"Julius Caesar",hint:"Římský vojevůdce a diktátor starověkého Říma.",context:"starořímský vůdce"}
      ],
      cities:["Řím","Milán","Neapol","Turín"]
    },
    en:{
      name:"Italy",
      knownFor:"has the most UNESCO World Heritage Sites and a powerful fashion industry.",
      capital:{name:"Rome", icons:"🏛️ ⛪ 🍕", clue:"The Eternal City with the Colosseum, Vatican, and Pantheon."},
      sport:{name:"Football",team:"Juventus FC"},
      language:"Italian",
      government:"Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["marble","natural gas","olive oil"],
      personalities:[
        {name:"Leonardo da Vinci",hint:"Renaissance genius — painter, inventor and scientist.",context:"Renaissance polymath"},
        {name:"Galileo Galilei",hint:"Astronomer who confirmed the heliocentric model.",context:"father of modern science"},
        {name:"Julius Caesar",hint:"Roman general and dictator of ancient Rome.",context:"ancient Roman leader"}
      ],
      cities:["Rome","Milan","Naples","Turin"]
    }
  },
  {
    code:"ES", flag:"🇪🇸", continent:"europe",
    population:48600000, capitalPop:3300000,
    cs:{
      name:"Španělsko",
      knownFor:"má silný cestovní ruch, zemědělství a dlouhodobě úspěšné sportovní kluby.",
      capital:{name:"Madrid", icons:"🎨 🏟️ 👑", clue:"Město Prada, královského paláce a Bernabéu."},
      sport:{name:"Fotbal",team:"Real Madrid CF"},
      language:"Španělština",
      government:"Parlamentní monarchie",
      currency:"Euro (EUR)",
      resources:["olivový olej","citrusy","měď"],
      personalities:[
        {name:"Miguel de Cervantes",hint:"Autor Dona Quijota, jednoho ze základních děl literatury.",context:"klíčový spisovatel"},
        {name:"Pablo Picasso",hint:"Malíř kubismu a autor Guerniky.",context:"významný výtvarník"},
        {name:"Rafael Nadal",hint:"Tenista s dominancí na antukových kurtech.",context:"sportovní legenda"}
      ],
      cities:["Madrid","Barcelona","Sevilla","Valencia"]
    },
    en:{
      name:"Spain",
      knownFor:"has strong tourism, agriculture, and long-term highly successful sports clubs.",
      capital:{name:"Madrid", icons:"🎨 🏟️ 👑", clue:"City of the Prado Museum, Royal Palace and Bernabéu stadium."},
      sport:{name:"Football",team:"Real Madrid CF"},
      language:"Spanish",
      government:"Parliamentary Monarchy",
      currency:"Euro (EUR)",
      resources:["olive oil","citrus fruits","copper"],
      personalities:[
        {name:"Miguel de Cervantes",hint:"Author of Don Quixote, one of the foundational works of world literature.",context:"key literary figure"},
        {name:"Pablo Picasso",hint:"Cubist painter and creator of the iconic Guernica.",context:"major visual artist"},
        {name:"Rafael Nadal",hint:"Tennis player with extraordinary dominance on clay courts.",context:"sports legend"}
      ],
      cities:["Madrid","Barcelona","Seville","Valencia"]
    }
  },
  {
    code:"UA", flag:"🇺🇦", continent:"europe",
    population:37000000, capitalPop:2950000,
    cs:{
      name:"Ukrajina",
      knownFor:"patří mezi největší vývozce pšenice a slunečnicového oleje.",
      capital:{name:"Kyjev", icons:"⛪ 🌉 🌾", clue:"Město na Dněpru se Zlatou branou a chrámem sv. Sofie."},
      sport:{name:"Fotbal",team:"Dynamo Kyjev"},
      language:"Ukrajinština",
      government:"Poloprezidentská republika",
      currency:"Hřivna (UAH)",
      resources:["pšenice","železná ruda","slunečnicový olej"],
      personalities:[
        {name:"Taras Ševčenko",hint:"Básník 19. stol., klíčová osobnost národní kultury.",context:"národní básník"},
        {name:"Lesja Ukrajinka",hint:"Dramatická autorka, jedna z literárních osobností.",context:"významná autorka"},
        {name:"Igor Sikorskij",hint:"Letecký konstruktér moderních vrtulníků.",context:"inovátor v letectví"}
      ],
      cities:["Kyjev","Lvov","Oděsa","Charkov"]
    },
    en:{
      name:"Ukraine",
      knownFor:"is among the largest exporters of wheat and sunflower oil.",
      capital:{name:"Kyiv", icons:"⛪ 🌉 🌾", clue:"City on the Dnieper River with the Golden Gate and Saint Sophia Cathedral."},
      sport:{name:"Football",team:"Dynamo Kyiv"},
      language:"Ukrainian",
      government:"Semi-Presidential Republic",
      currency:"Hryvnia (UAH)",
      resources:["wheat","iron ore","sunflower oil"],
      personalities:[
        {name:"Taras Shevchenko",hint:"19th-century poet, key figure of national culture.",context:"national poet"},
        {name:"Lesya Ukrainka",hint:"Dramatist and leading literary figure.",context:"prominent author"},
        {name:"Igor Sikorsky",hint:"Aviation engineer who developed modern helicopters.",context:"aviation innovator"}
      ],
      cities:["Kyiv","Lviv","Odessa","Kharkiv"]
    }
  },
  {
    code:"PL", flag:"🇵🇱", continent:"europe",
    population:38200000, capitalPop:1800000,
    cs:{
      name:"Polsko",
      knownFor:"je největší zemí střední Evropy s rychle rostoucí ekonomikou.",
      capital:{name:"Varšava", icons:"🏰 🌊 🎵", clue:"Město obnovené z ruin, s Královským hradem a muzeem Chopina."},
      sport:{name:"Fotbal",team:"Legia Varšava"},
      language:"Polština",
      government:"Parlamentní republika",
      currency:"Polský zlotý (PLN)",
      resources:["uhlí","měď","stříbro"],
      personalities:[
        {name:"Frédéric Chopin",hint:"Klavírní skladatel, symbol polské romantické hudby.",context:"romantický skladatel"},
        {name:"Marie Curie",hint:"Fyzička a chemička, první žena s Nobelovou cenou.",context:"nositelka Nobelovy ceny"},
        {name:"Jan Paweł II.",hint:"Polský papež, symbol boje za svobodu.",context:"papež a světec"}
      ],
      cities:["Varšava","Krakov","Lodž","Wrocław"]
    },
    en:{
      name:"Poland",
      knownFor:"is the largest country in Central Europe with a fast-growing economy.",
      capital:{name:"Warsaw", icons:"🏰 🌊 🎵", clue:"City rebuilt from ruins, with the Royal Castle and Chopin museum."},
      sport:{name:"Football",team:"Legia Warsaw"},
      language:"Polish",
      government:"Parliamentary Republic",
      currency:"Polish Zloty (PLN)",
      resources:["coal","copper","silver"],
      personalities:[
        {name:"Frédéric Chopin",hint:"Piano composer and symbol of Polish romantic music.",context:"Romantic composer"},
        {name:"Marie Curie",hint:"Physicist and chemist, first woman to win a Nobel Prize.",context:"Nobel Prize laureate"},
        {name:"John Paul II",hint:"Polish Pope, symbol of the fight for freedom.",context:"Pope and saint"}
      ],
      cities:["Warsaw","Kraków","Łódź","Wrocław"]
    }
  },

  // ── ASIA ──────────────────────────────────────────────────────────────────
  {
    code:"JP", flag:"🇯🇵", continent:"asia",
    population:123900000, capitalPop:13900000,
    cs:{
      name:"Japonsko",
      knownFor:"vyniká technologiemi, rychlovlaky a dlouhodobě silnou výrobní ekonomikou.",
      capital:{name:"Tokio", icons:"🗼 ⛩️ 🌸", clue:"Megaměsto se slavnou věží, čtvrtí Shibuya a kulturou sakur."},
      sport:{name:"Baseball",team:"Yomiuri Giants"},
      language:"Japonština",
      government:"Konstituční monarchie",
      currency:"Japonský jen (JPY)",
      resources:["rybolov","dřevo","geotermální energie"],
      personalities:[
        {name:"Tokugawa Iejasu",hint:"Šógun, který sjednotil Japonsko v šógunátu Edo.",context:"zakladatel šógunátu Tokugawa"},
        {name:"Akira Kurosawa",hint:"Režisér Sedmi samurajů.",context:"legendární filmový režisér"},
        {name:"Hayao Miyazaki",hint:"Spoluzakladatel studia Ghibli.",context:"mistr animovaného filmu"}
      ],
      cities:["Tokio","Ósaka","Kjóto","Jokohama"]
    },
    en:{
      name:"Japan",
      knownFor:"excels in technology, bullet trains, and has a long tradition of strong manufacturing.",
      capital:{name:"Tokyo", icons:"🗼 ⛩️ 🌸", clue:"Megacity with the famous tower, Shibuya district, and cherry blossom culture."},
      sport:{name:"Baseball",team:"Yomiuri Giants"},
      language:"Japanese",
      government:"Constitutional Monarchy",
      currency:"Japanese Yen (JPY)",
      resources:["fishing","timber","geothermal energy"],
      personalities:[
        {name:"Tokugawa Ieyasu",hint:"Shogun who unified Japan under the Edo shogunate.",context:"founder of Tokugawa shogunate"},
        {name:"Akira Kurosawa",hint:"Director of Seven Samurai.",context:"legendary film director"},
        {name:"Hayao Miyazaki",hint:"Co-founder of Studio Ghibli.",context:"master of animated film"}
      ],
      cities:["Tokyo","Osaka","Kyoto","Yokohama"]
    }
  },
  {
    code:"IN", flag:"🇮🇳", continent:"asia",
    population:1428600000, capitalPop:33800000,
    cs:{
      name:"Indie",
      knownFor:"je jednou z nejlidnatějších zemí světa a rychle rostoucí technologickou ekonomikou.",
      capital:{name:"Nové Dillí", icons:"🕌 🏛️ 🇮🇳", clue:"Správní centrum s India Gate a sídly státních institucí."},
      sport:{name:"Kriket",team:"Mumbai Indians"},
      language:"Hindština a angličtina",
      government:"Federativní parlamentní republika",
      currency:"Indická rupie (INR)",
      resources:["uhlí","železná ruda","bauxit"],
      personalities:[
        {name:"Mahátma Gándhí",hint:"Vůdce nenásilného hnutí za nezávislost.",context:"otec indické nezávislosti"},
        {name:"Rabíndranáth Thákur",hint:"Nositel Nobelovy ceny za literaturu 1913.",context:"básník a myslitel"},
        {name:"A. P. J. Abdul Kalam",hint:"Prezident a vědec spojený s kosmickým programem.",context:"vědec a prezident"}
      ],
      cities:["Nové Dillí","Bombaj","Bengalúru","Kalkata"]
    },
    en:{
      name:"India",
      knownFor:"is one of the world's most populous countries and a rapidly growing technology economy.",
      capital:{name:"New Delhi", icons:"🕌 🏛️ 🇮🇳", clue:"Administrative center featuring India Gate and major government institutions."},
      sport:{name:"Cricket",team:"Mumbai Indians"},
      language:"Hindi and English",
      government:"Federal Parliamentary Republic",
      currency:"Indian Rupee (INR)",
      resources:["coal","iron ore","bauxite"],
      personalities:[
        {name:"Mahatma Gandhi",hint:"Leader of the nonviolent independence movement.",context:"father of Indian independence"},
        {name:"Rabindranath Tagore",hint:"Nobel Prize in Literature laureate in 1913.",context:"poet and philosopher"},
        {name:"A. P. J. Abdul Kalam",hint:"President and scientist linked to the space program.",context:"scientist and president"}
      ],
      cities:["New Delhi","Mumbai","Bengaluru","Kolkata"]
    }
  },
  {
    code:"CN", flag:"🇨🇳", continent:"asia",
    population:1412600000, capitalPop:21900000,
    cs:{
      name:"Čína",
      knownFor:"je největší vývozní ekonomikou světa a domovem nejdelší zdi na světě.",
      capital:{name:"Peking", icons:"🐼 🏯 🐉", clue:"Město Zakázaného města, náměstí Tiananmen a Velké čínské zdi."},
      sport:{name:"Stolní tenis",team:"Čínská národní reprezentace"},
      language:"Čínština (Mandarínština)",
      government:"Jednostranná lidová republika",
      currency:"Čínský jüan (CNY)",
      resources:["vzácné kovy","uhlí","ropa"],
      personalities:[
        {name:"Konfucius",hint:"Filozof 5. stol. př. n. l., zakladatel konfucianismu.",context:"starověký filozof"},
        {name:"Mao Ce-tung",hint:"Zakladatel Čínské lidové republiky v roce 1949.",context:"zakladatel ČLR"},
        {name:"Čeng He",hint:"Mořeplavec 15. stol., vedl flotily po celém světě.",context:"velký námořní průzkumník"}
      ],
      cities:["Peking","Šanghaj","Kanton","Šen-čen"]
    },
    en:{
      name:"China",
      knownFor:"is the world's largest export economy and home to the longest wall in the world.",
      capital:{name:"Beijing", icons:"🐼 🏯 🐉", clue:"City of the Forbidden City, Tiananmen Square and the Great Wall."},
      sport:{name:"Table Tennis",team:"Chinese National Team"},
      language:"Chinese (Mandarin)",
      government:"Single-party People's Republic",
      currency:"Chinese Yuan (CNY)",
      resources:["rare earth metals","coal","oil"],
      personalities:[
        {name:"Confucius",hint:"5th-century BC philosopher, founder of Confucianism.",context:"ancient philosopher"},
        {name:"Mao Zedong",hint:"Founder of the People's Republic of China in 1949.",context:"founder of PRC"},
        {name:"Zheng He",hint:"15th-century navigator who led fleets around the world.",context:"great maritime explorer"}
      ],
      cities:["Beijing","Shanghai","Guangzhou","Shenzhen"]
    }
  },
  {
    code:"SA", flag:"🇸🇦", continent:"asia",
    population:36400000, capitalPop:7700000,
    cs:{
      name:"Saúdská Arábie",
      knownFor:"je největším světovým vývozcem ropy a domovem islámských posvátných míst.",
      capital:{name:"Rijád", icons:"🕌 🌴 🛢️", clue:"Moderní město na arabské poušti, finanční centrum Blízkého východu."},
      sport:{name:"Fotbal",team:"Al-Hilal FC"},
      language:"Arabština",
      government:"Absolutní monarchie",
      currency:"Saúdský rijál (SAR)",
      resources:["ropa","zemní plyn","zlato"],
      personalities:[
        {name:"Ibn Saud",hint:"Zakladatel moderního saúdského státu v roce 1932.",context:"zakladatel království"},
        {name:"Král Abdalláh",hint:"Král, který modernizoval vzdělání a zahraniční politiku.",context:"reformní král"},
        {name:"Muhammad ibn Abd al-Wahhab",hint:"Islámský teolog 18. stol., zakladatel wahhabismu — reformního hnutí.",context:"islámský teolog"}
      ],
      cities:["Rijád","Džidda","Mekka","Medina"]
    },
    en:{
      name:"Saudi Arabia",
      knownFor:"is the world's largest oil exporter and home to Islam's holiest sites.",
      capital:{name:"Riyadh", icons:"🕌 🌴 🛢️", clue:"Modern city in the Arabian desert, financial center of the Middle East."},
      sport:{name:"Football",team:"Al-Hilal FC"},
      language:"Arabic",
      government:"Absolute Monarchy",
      currency:"Saudi Riyal (SAR)",
      resources:["oil","natural gas","gold"],
      personalities:[
        {name:"Ibn Saud",hint:"Founder of the modern Saudi state in 1932.",context:"founder of the kingdom"},
        {name:"King Abdullah",hint:"King who modernised education and foreign policy.",context:"reformist king"},
        {name:"Muhammad ibn Abd al-Wahhab",hint:"18th-century Islamic theologian and founder of Wahhabism.",context:"Islamic theologian"}
      ],
      cities:["Riyadh","Jeddah","Mecca","Medina"]
    }
  },

  // ── AFRICA ────────────────────────────────────────────────────────────────
  {
    code:"EG", flag:"🇪🇬", continent:"africa",
    population:112700000, capitalPop:10100000,
    cs:{
      name:"Egypt",
      knownFor:"má strategickou polohu u Suezského průplavu a bohaté starověké dědictví.",
      capital:{name:"Káhira", icons:"🕌 🏺 🌊", clue:"Město na Nilu poblíž Gízy, centrum starověké civilizace."},
      sport:{name:"Fotbal",team:"Al Ahly SC"},
      language:"Arabština",
      government:"Prezidentská republika",
      currency:"Egyptská libra (EGP)",
      resources:["zemní plyn","ropa","fosfáty"],
      personalities:[
        {name:"Kleopatra VII.",hint:"Poslední panovnice ptolemaiovského Egypta.",context:"slavná královna starověku"},
        {name:"Gamál Násir",hint:"Prezident, který znárodnil Suezský průplav.",context:"klíčový politik 20. stol."},
        {name:"Mohamed Salah",hint:"Fotbalová hvězda světového formátu.",context:"fotbalová hvězda"}
      ],
      cities:["Káhira","Alexandrie","Gíza","Assuán"]
    },
    en:{
      name:"Egypt",
      knownFor:"has a strategic location at the Suez Canal and rich ancient heritage.",
      capital:{name:"Cairo", icons:"🕌 🏺 🌊", clue:"City on the Nile near Giza, a center of ancient civilization."},
      sport:{name:"Football",team:"Al Ahly SC"},
      language:"Arabic",
      government:"Presidential Republic",
      currency:"Egyptian Pound (EGP)",
      resources:["natural gas","oil","phosphates"],
      personalities:[
        {name:"Cleopatra VII",hint:"Last pharaoh of Ptolemaic Egypt.",context:"famous ancient queen"},
        {name:"Gamal Nasser",hint:"President who nationalised the Suez Canal.",context:"key 20th-century statesman"},
        {name:"Mohamed Salah",hint:"Modern football superstar with worldwide impact.",context:"current football star"}
      ],
      cities:["Cairo","Alexandria","Giza","Aswan"]
    }
  },
  {
    code:"ZA", flag:"🇿🇦", continent:"africa",
    population:60600000, capitalPop:4600000,
    cs:{
      name:"Jižní Afrika",
      knownFor:"je největším producentem zlata a platiny a má tři hlavní města.",
      capital:{name:"Pretoria", icons:"🌿 🦁 🏛️", clue:"Administrativní centrum země nazývané 'Město jakarand'."},
      sport:{name:"Rugby",team:"Springboks"},
      language:"Angličtina (a 10 dalších)","government":"Prezidentská republika",
      currency:"Jihoafrický rand (ZAR)",
      resources:["zlato","platina","diamanty"],
      personalities:[
        {name:"Nelson Mandela",hint:"Bojovník proti apartheidu, první demokraticky zvolený prezident.",context:"otec národa"},
        {name:"Desmond Tutu",hint:"Arcibiskup a bojovník za lidská práva, nositel Nobelovy ceny.",context:"nositel Nobelovy ceny míru"},
        {name:"Christiaan Barnard",hint:"Chirurg, který provedl první transplantaci srdce.",context:"průkopník transplantací"}
      ],
      cities:["Pretoria","Johannesburg","Kapské Město","Durban"]
    },
    en:{
      name:"South Africa",
      knownFor:"is the world's largest producer of gold and platinum and has three capitals.",
      capital:{name:"Pretoria", icons:"🌿 🦁 🏛️", clue:"Administrative center known as the 'Jacaranda City'."},
      sport:{name:"Rugby",team:"Springboks"},
      language:"English (and 10 others)",
      government:"Presidential Republic",
      currency:"South African Rand (ZAR)",
      resources:["gold","platinum","diamonds"],
      personalities:[
        {name:"Nelson Mandela",hint:"Anti-apartheid activist, first democratically elected president.",context:"father of the nation"},
        {name:"Desmond Tutu",hint:"Archbishop and human rights activist, Nobel laureate.",context:"Nobel Peace Prize winner"},
        {name:"Christiaan Barnard",hint:"Surgeon who performed the first heart transplant.",context:"transplant pioneer"}
      ],
      cities:["Pretoria","Johannesburg","Cape Town","Durban"]
    }
  },
  {
    code:"NG", flag:"🇳🇬", continent:"africa",
    population:223800000, capitalPop:3600000,
    cs:{
      name:"Nigérie",
      knownFor:"je nejlidnatější zemí Afriky a největším africkým producentem ropy.",
      capital:{name:"Abuja", icons:"🏙️ 🛢️ 🌍", clue:"Plánované federální hlavní město vybudované v 80. letech 20. stol."},
      sport:{name:"Fotbal",team:"Super Eagles"},
      language:"Angličtina",
      government:"Federativní prezidentská republika",
      currency:"Nigerská naira (NGN)",
      resources:["ropa","zemní plyn","cín"],
      personalities:[
        {name:"Wole Soyinka",hint:"Spisovatel, první Afričan s Nobelovou cenou za literaturu.",context:"literární velikán"},
        {name:"Chinua Achebe",hint:"Autor románu 'Svět se rozpadá', zásadní africká literatura.",context:"klíčový spisovatel"},
        {name:"Fela Kuti",hint:"Hudebník, zakladatel afrobeatu a bojovník za práva.",context:"hudební ikona"}
      ],
      cities:["Abuja","Lagos","Kano","Port Harcourt"]
    },
    en:{
      name:"Nigeria",
      knownFor:"is Africa's most populous country and its largest oil producer.",
      capital:{name:"Abuja", icons:"🏙️ 🛢️ 🌍", clue:"Planned federal capital built in the 1980s."},
      sport:{name:"Football",team:"Super Eagles"},
      language:"English",
      government:"Federal Presidential Republic",
      currency:"Nigerian Naira (NGN)",
      resources:["oil","natural gas","tin"],
      personalities:[
        {name:"Wole Soyinka",hint:"Writer, first African to win the Nobel Prize in Literature.",context:"literary giant"},
        {name:"Chinua Achebe",hint:"Author of 'Things Fall Apart', a cornerstone of African literature.",context:"key author"},
        {name:"Fela Kuti",hint:"Musician, founder of Afrobeat and rights activist.",context:"music icon"}
      ],
      cities:["Abuja","Lagos","Kano","Port Harcourt"]
    }
  },

  // ── AMERICAS ──────────────────────────────────────────────────────────────
  {
    code:"CA", flag:"🇨🇦", continent:"america",
    population:40500000, capitalPop:1100000,
    cs:{
      name:"Kanada",
      knownFor:"disponuje velkými zásobami ropy, dřeva a patří mezi přední exportéry surovin.",
      capital:{name:"Ottawa", icons:"🍁 🏛️ 🌉", clue:"Město slavné parlamentem na kopci a kanálem Rideau."},
      sport:{name:"Lední hokej",team:"Montreal Canadiens"},
      language:"Angličtina a francouzština",
      government:"Konstituční monarchie a parlamentní demokracie",
      currency:"Kanadský dolar (CAD)",
      resources:["ropa","zemní plyn","dřevo"],
      personalities:[
        {name:"Wayne Gretzky",hint:"Nejproduktivnější hráč v historii NHL.",context:"legendární hokejista"},
        {name:"Terry Fox",hint:"Běžec a aktivista, jehož Maraton naděje inspiroval miliony.",context:"symbol odvahy"},
        {name:"Pierre Trudeau",hint:"Premiér, který výrazně ovlivnil moderní federální politiku.",context:"významný státník"}
      ],
      cities:["Ottawa","Toronto","Vancouver","Montréal"]
    },
    en:{
      name:"Canada",
      knownFor:"has vast reserves of oil and timber, ranking among the top raw material exporters.",
      capital:{name:"Ottawa", icons:"🍁 🏛️ 🌉", clue:"City famous for Parliament Hill and the Rideau Canal."},
      sport:{name:"Ice Hockey",team:"Montreal Canadiens"},
      language:"English and French",
      government:"Constitutional Monarchy and Parliamentary Democracy",
      currency:"Canadian Dollar (CAD)",
      resources:["oil","natural gas","timber"],
      personalities:[
        {name:"Wayne Gretzky",hint:"The most productive player in NHL history.",context:"legendary ice hockey player"},
        {name:"Terry Fox",hint:"Runner and activist whose Marathon of Hope inspired millions.",context:"symbol of courage"},
        {name:"Pierre Trudeau",hint:"Prime Minister who profoundly shaped modern federal policy.",context:"influential statesman"}
      ],
      cities:["Ottawa","Toronto","Vancouver","Montreal"]
    }
  },
  {
    code:"BR", flag:"🇧🇷", continent:"america",
    population:203100000, capitalPop:3100000,
    cs:{
      name:"Brazílie",
      knownFor:"patří mezi velmoci v produkci kávy, sóji a má silný těžební sektor.",
      capital:{name:"Brasília", icons:"🏛️ ✈️ 🌆", clue:"Plánované město moderní architektury navržené přímo pro roli hlavního města."},
      sport:{name:"Fotbal",team:"CR Flamengo"},
      language:"Portugalština",
      government:"Federativní republika",
      currency:"Brazilský real (BRL)",
      resources:["železná ruda","káva","sója"],
      personalities:[
        {name:"Pelé",hint:"Trojnásobný mistr světa, jedna z největších fotbalových legend.",context:"fotbalová ikona"},
        {name:"Oscar Niemeyer",hint:"Architekt modernistických staveb Brasílie.",context:"architekt Brasílie"},
        {name:"Ayrton Senna",hint:"Pilot F1, jehož kariéra ovlivnila historii motorsportu.",context:"trojnásobný mistr F1"}
      ],
      cities:["Brasília","São Paulo","Rio de Janeiro","Belo Horizonte"]
    },
    en:{
      name:"Brazil",
      knownFor:"is a powerhouse in coffee and soybean production with a strong mining sector.",
      capital:{name:"Brasília", icons:"🏛️ ✈️ 🌆", clue:"A planned city of modern architecture designed to serve as the capital."},
      sport:{name:"Football (Soccer)",team:"CR Flamengo"},
      language:"Portuguese",
      government:"Federal Republic",
      currency:"Brazilian Real (BRL)",
      resources:["iron ore","coffee","soybeans"],
      personalities:[
        {name:"Pelé",hint:"Three-time World Cup winner, one of the greatest football legends.",context:"football icon"},
        {name:"Oscar Niemeyer",hint:"Modernist architect and symbol of Brasília's skyline.",context:"architect of Brasília"},
        {name:"Ayrton Senna",hint:"Formula 1 driver whose career fundamentally shaped motorsport.",context:"three-time F1 champion"}
      ],
      cities:["Brasília","São Paulo","Rio de Janeiro","Belo Horizonte"]
    }
  },
  {
    code:"US", flag:"🇺🇸", continent:"america",
    population:335000000, capitalPop:700000,
    cs:{
      name:"USA",
      knownFor:"je největší světovou ekonomikou a domovem Hollywoodu, Silikonového údolí a NASA.",
      capital:{name:"Washington D.C.", icons:"🗽 🏛️ 🦅", clue:"Federální hlavní město s Kapitolem, Bílým domem a Lincolnovým memoriálem."},
      sport:{name:"Americký fotbal",team:"Dallas Cowboys"},
      language:"Angličtina",
      government:"Federativní prezidentská republika",
      currency:"Americký dolar (USD)",
      resources:["ropa","zemní plyn","uhlí"],
      personalities:[
        {name:"Abraham Lincoln",hint:"16. prezident, zrušil otroctví a zachoval unii.",context:"16. prezident USA"},
        {name:"Martin Luther King Jr.",hint:"Vůdce hnutí za občanská práva.",context:"bojovník za rovná práva"},
        {name:"Neil Armstrong",hint:"První člověk na Měsíci, mise Apollo 11.",context:"astronaut"}
      ],
      cities:["Washington D.C.","New York","Los Angeles","Chicago"]
    },
    en:{
      name:"USA",
      knownFor:"is the world's largest economy and home to Hollywood, Silicon Valley and NASA.",
      capital:{name:"Washington D.C.", icons:"🗽 🏛️ 🦅", clue:"Federal capital with the Capitol, White House and Lincoln Memorial."},
      sport:{name:"American Football",team:"Dallas Cowboys"},
      language:"English",
      government:"Federal Presidential Republic",
      currency:"US Dollar (USD)",
      resources:["oil","natural gas","coal"],
      personalities:[
        {name:"Abraham Lincoln",hint:"16th President, abolished slavery and preserved the union.",context:"16th US President"},
        {name:"Martin Luther King Jr.",hint:"Leader of the civil rights movement.",context:"civil rights activist"},
        {name:"Neil Armstrong",hint:"First human on the Moon, Apollo 11 mission.",context:"astronaut"}
      ],
      cities:["Washington D.C.","New York","Los Angeles","Chicago"]
    }
  },
  {
    code:"MX", flag:"🇲🇽", continent:"america",
    population:128500000, capitalPop:9200000,
    cs:{
      name:"Mexiko",
      knownFor:"je největší španělsky mluvící zemí světa s bohatou mayskou a aztéckou kulturou.",
      capital:{name:"Mexiko City", icons:"🌮 🏔️ 🇲🇽", clue:"Jedno z největších měst světa, postavené na troskách aztéckého Tenochtitlánu."},
      sport:{name:"Fotbal",team:"Club América"},
      language:"Španělština",
      government:"Federativní prezidentská republika",
      currency:"Mexické peso (MXN)",
      resources:["ropa","stříbro","zemní plyn"],
      personalities:[
        {name:"Frida Kahlo",hint:"Malířka surrealistických autoportrétů, symbol mexické kultury.",context:"ikonická malířka"},
        {name:"Octavio Paz",hint:"Básník a esejista, nositel Nobelovy ceny za literaturu.",context:"nositel Nobelovy ceny"},
        {name:"Benito Juárez",hint:"První prezident indiánského původu, modernizátor země.",context:"národní hrdina"}
      ],
      cities:["Mexiko City","Guadalajara","Monterrey","Puebla"]
    },
    en:{
      name:"Mexico",
      knownFor:"is the largest Spanish-speaking country with a rich Maya and Aztec cultural heritage.",
      capital:{name:"Mexico City", icons:"🌮 🏔️ 🇲🇽", clue:"One of the world's largest cities, built on the ruins of Aztec Tenochtitlán."},
      sport:{name:"Football",team:"Club América"},
      language:"Spanish",
      government:"Federal Presidential Republic",
      currency:"Mexican Peso (MXN)",
      resources:["oil","silver","natural gas"],
      personalities:[
        {name:"Frida Kahlo",hint:"Painter of surrealist self-portraits, symbol of Mexican culture.",context:"iconic painter"},
        {name:"Octavio Paz",hint:"Poet and essayist, Nobel Prize in Literature laureate.",context:"Nobel laureate"},
        {name:"Benito Juárez",hint:"First president of indigenous origin, moderniser of the country.",context:"national hero"}
      ],
      cities:["Mexico City","Guadalajara","Monterrey","Puebla"]
    }
  },

  // ── OCEANIA ───────────────────────────────────────────────────────────────
  {
    code:"AU", flag:"🇦🇺", continent:"oceania",
    population:26800000, capitalPop:470000,
    cs:{
      name:"Austrálie",
      knownFor:"patří k největším vývozcům železné rudy, uhlí a zemního plynu.",
      capital:{name:"Canberra", icons:"🏛️ 🦘 🌿", clue:"Plánované hlavní město vzniklé jako kompromis mezi Sydney a Melbourne."},
      sport:{name:"Kriket",team:"Australská kriketová reprezentace"},
      language:"Angličtina",
      government:"Federální parlamentní konstituční monarchie",
      currency:"Australský dolar (AUD)",
      resources:["železná ruda","uhlí","zemní plyn"],
      personalities:[
        {name:"Don Bradman",hint:"Považován za nejlepšího pálkaře v historii kriketu.",context:"ikona kriketu"},
        {name:"Cathy Freeman",hint:"Olympijská vítězka na 400 m.",context:"olympijská šampionka"},
        {name:"Steve Irwin",hint:"Popularizátor ochrany přírody, znám jako Croc Hunter.",context:"přírodovědec a moderátor"}
      ],
      cities:["Canberra","Sydney","Melbourne","Brisbane"]
    },
    en:{
      name:"Australia",
      knownFor:"is among the largest exporters of iron ore, coal, and natural gas.",
      capital:{name:"Canberra", icons:"🏛️ 🦘 🌿", clue:"A planned capital built as a compromise between Sydney and Melbourne."},
      sport:{name:"Cricket",team:"Australian Cricket Team"},
      language:"English",
      government:"Federal Parliamentary Constitutional Monarchy",
      currency:"Australian Dollar (AUD)",
      resources:["iron ore","coal","natural gas"],
      personalities:[
        {name:"Don Bradman",hint:"Widely considered the greatest batsman in cricket history.",context:"cricket icon"},
        {name:"Cathy Freeman",hint:"Olympic gold medallist in the 400m.",context:"Olympic champion"},
        {name:"Steve Irwin",hint:"Wildlife conservationist known worldwide as the Crocodile Hunter.",context:"naturalist and presenter"}
      ],
      cities:["Canberra","Sydney","Melbourne","Brisbane"]
    }
  },
  {
    code:"NZ", flag:"🇳🇿", continent:"oceania",
    population:5100000, capitalPop:440000,
    cs:{
      name:"Nový Zéland",
      knownFor:"je znám neuvěřitelnou přírodní krajinou, filmem Pán prstenů a ragby.",
      capital:{name:"Wellington", icons:"🏔️ 🐑 🎬", clue:"Větrné hlavní město na jižním cípu Severního ostrova."},
      sport:{name:"Rugby",team:"All Blacks"},
      language:"Angličtina a māorština",
      government:"Konstituční monarchie a parlamentní demokracie",
      currency:"Novozélandský dolar (NZD)",
      resources:["dřevo","vlna","zemní plyn"],
      personalities:[
        {name:"Sir Edmund Hillary",hint:"První člověk, který zdolal Mount Everest spolu se Šerpou Tenzingem.",context:"horolezecký průkopník"},
        {name:"Ernest Rutherford",hint:"Fyzik, otec jaderné fyziky, nositel Nobelovy ceny.",context:"jaderný fyzik"},
        {name:"Kate Sheppard",hint:"Průkopnice volebního práva žen v roce 1893.",context:"sufražetka"}
      ],
      cities:["Wellington","Auckland","Christchurch","Hamilton"]
    },
    en:{
      name:"New Zealand",
      knownFor:"is known for stunning natural landscapes, the Lord of the Rings films and rugby.",
      capital:{name:"Wellington", icons:"🏔️ 🐑 🎬", clue:"Windy capital at the southern tip of the North Island."},
      sport:{name:"Rugby",team:"All Blacks"},
      language:"English and Māori",
      government:"Constitutional Monarchy and Parliamentary Democracy",
      currency:"New Zealand Dollar (NZD)",
      resources:["timber","wool","natural gas"],
      personalities:[
        {name:"Sir Edmund Hillary",hint:"First person to summit Mount Everest with Sherpa Tenzing.",context:"mountaineering pioneer"},
        {name:"Ernest Rutherford",hint:"Physicist, father of nuclear physics, Nobel laureate.",context:"nuclear physicist"},
        {name:"Kate Sheppard",hint:"Pioneer of women's suffrage, achieved in 1893.",context:"suffragette"}
      ],
      cities:["Wellington","Auckland","Christchurch","Hamilton"]
    }
  }

,
  // ══ EXTRA COUNTRIES ══
// ══════════════════════════════════════════════════════════════════════════
  // EUROPE — remaining EU members + key non-EU
  // ══════════════════════════════════════════════════════════════════════════
  {
    code:"AT", flag:"🇦🇹", continent:"europe",
    population:9100000, capitalPop:1900000,
    cs:{
      name:"Rakousko",
      knownFor:"je světovým centrem klasické hudby a domovem Mozarta, Beethovena a Freuda.",
      capital:{name:"Vídeň", icons:"🎵 🏰 ☕", clue:"Město Mozarta, Schönbrunnu a slavných kaváren."},
      sport:{name:"Lyžování",team:"Rakouská lyžařská reprezentace"},
      language:"Němčina",
      government:"Spolková parlamentní republika",
      currency:"Euro (EUR)",
      resources:["dřevo","železo","magnezit"],
      personalities:[
        {name:"Wolfgang Amadeus Mozart",hint:"Génius klasické hudby, skladatel od dětství.",context:"hudební zázrak"},
        {name:"Sigmund Freud",hint:"Zakladatel psychoanalýzy.",context:"otec psychoanalýzy"},
        {name:"Arnold Schwarzenegger",hint:"Herec a guvernér Kalifornie.",context:"herec a politik"}
      ],
      cities:["Vídeň","Graz","Linz","Salzburg"]
    },
    en:{
      name:"Austria",
      knownFor:"is a world center of classical music and home of Mozart, Beethoven and Freud.",
      capital:{name:"Vienna", icons:"🎵 🏰 ☕", clue:"City of Mozart, Schönbrunn Palace and famous coffee houses."},
      sport:{name:"Skiing",team:"Austrian Ski Team"},
      language:"German",
      government:"Federal Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["timber","iron","magnesite"],
      personalities:[
        {name:"Wolfgang Amadeus Mozart",hint:"Classical music genius, composer from childhood.",context:"musical prodigy"},
        {name:"Sigmund Freud",hint:"Founder of psychoanalysis.",context:"father of psychoanalysis"},
        {name:"Arnold Schwarzenegger",hint:"Actor and Governor of California.",context:"actor and politician"}
      ],
      cities:["Vienna","Graz","Linz","Salzburg"]
    }
  },
  {
    code:"BE", flag:"🇧🇪", continent:"europe",
    population:11600000, capitalPop:1200000,
    cs:{
      name:"Belgie",
      knownFor:"je sídlem EU a NATO a je světoznámá čokoládou, pivem a wafflemi.",
      capital:{name:"Brusel", icons:"🍫 🏛️ 🍺", clue:"Sídlo EU a NATO, město Atomia a čokoládových pralinek."},
      sport:{name:"Fotbal",team:"Club Brugge"},
      language:"Nizozemština, francouzština a němčina",
      government:"Federální parlamentní konstituční monarchie",
      currency:"Euro (EUR)",
      resources:["uhlí","ocel","diamanty"],
      personalities:[
        {name:"René Magritte",hint:"Surrealista, autor obrazu Toto není dýmka.",context:"surrealistický malíř"},
        {name:"Eddy Merckx",hint:"Nejúspěšnější cyklista v historii Tour de France.",context:"legendární cyklista"},
        {name:"Hergé",hint:"Kreslíř Tintina, symbol belgického komiksu.",context:"tvůrce Tintina"}
      ],
      cities:["Brusel","Antverpy","Gent","Liège"]
    },
    en:{
      name:"Belgium",
      knownFor:"is the seat of the EU and NATO and world-famous for chocolate, beer and waffles.",
      capital:{name:"Brussels", icons:"🍫 🏛️ 🍺", clue:"Seat of the EU and NATO, city of the Atomium and chocolate pralines."},
      sport:{name:"Football",team:"Club Brugge"},
      language:"Dutch, French and German",
      government:"Federal Parliamentary Constitutional Monarchy",
      currency:"Euro (EUR)",
      resources:["coal","steel","diamonds"],
      personalities:[
        {name:"René Magritte",hint:"Surrealist, author of 'This is not a pipe'.",context:"Surrealist painter"},
        {name:"Eddy Merckx",hint:"Most successful cyclist in Tour de France history.",context:"legendary cyclist"},
        {name:"Hergé",hint:"Creator of Tintin, symbol of Belgian comics.",context:"creator of Tintin"}
      ],
      cities:["Brussels","Antwerp","Ghent","Liège"]
    }
  },
  {
    code:"NL", flag:"🇳🇱", continent:"europe",
    population:17900000, capitalPop:920000,
    cs:{
      name:"Nizozemsko",
      knownFor:"je světovým lídrem v zásobování zemědělskými produkty a má největší evropský přístav.",
      capital:{name:"Amsterdam", icons:"🚲 🌷 🏗️", clue:"Město kanálů, Rembrandta a Rijksmusea."},
      sport:{name:"Fotbal",team:"Ajax Amsterdam"},
      language:"Nizozemština",
      government:"Konstituční monarchie",
      currency:"Euro (EUR)",
      resources:["zemní plyn","ropa","tulipány"],
      personalities:[
        {name:"Rembrandt van Rijn",hint:"Barokní malíř, autor Noční hlídky.",context:"barokní malíř"},
        {name:"Anne Franková",hint:"Dívka, jejíž deník se stal symbolem holokaustu.",context:"symbol holokaustu"},
        {name:"Vincent van Gogh",hint:"Postimpresionista, autor Hvězdné noci.",context:"postimpresionistický malíř"}
      ],
      cities:["Amsterdam","Rotterdam","Haag","Utrecht"]
    },
    en:{
      name:"Netherlands",
      knownFor:"is a world leader in agricultural exports and has Europe's largest port.",
      capital:{name:"Amsterdam", icons:"🚲 🌷 🏗️", clue:"City of canals, Rembrandt and the Rijksmuseum."},
      sport:{name:"Football",team:"Ajax Amsterdam"},
      language:"Dutch",
      government:"Constitutional Monarchy",
      currency:"Euro (EUR)",
      resources:["natural gas","oil","tulips"],
      personalities:[
        {name:"Rembrandt van Rijn",hint:"Baroque painter, author of The Night Watch.",context:"Baroque painter"},
        {name:"Anne Frank",hint:"Girl whose diary became a symbol of the Holocaust.",context:"Holocaust symbol"},
        {name:"Vincent van Gogh",hint:"Post-Impressionist, author of The Starry Night.",context:"Post-Impressionist painter"}
      ],
      cities:["Amsterdam","Rotterdam","The Hague","Utrecht"]
    }
  },
  {
    code:"PT", flag:"🇵🇹", continent:"europe",
    population:10300000, capitalPop:550000,
    cs:{
      name:"Portugalsko",
      knownFor:"bylo průkopníkem mořských průzkumných expedic a dodnes je světoznámé fado hudbou.",
      capital:{name:"Lisabon", icons:"🌊 🎵 🚃", clue:"Město na sedmi pahorcích, slavné tramvajemi a Věží Belém."},
      sport:{name:"Fotbal",team:"Sport Lisboa e Benfica"},
      language:"Portugalština",
      government:"Poloprezidentská republika",
      currency:"Euro (EUR)",
      resources:["korek","víno","mořské plody"],
      personalities:[
        {name:"Vasco da Gama",hint:"Mořeplavec, první Evropan, který dosáhl Indie po moři.",context:"mořeplavec"},
        {name:"Fernando Pessoa",hint:"Básník a spisovatel, symbol portugalské moderní literatury.",context:"básník"},
        {name:"Cristiano Ronaldo",hint:"Jeden z nejlepších fotbalistů v historii.",context:"fotbalová hvězda"}
      ],
      cities:["Lisabon","Porto","Braga","Coimbra"]
    },
    en:{
      name:"Portugal",
      knownFor:"pioneered maritime exploration and is still world-famous for fado music.",
      capital:{name:"Lisbon", icons:"🌊 🎵 🚃", clue:"City of seven hills, famous for trams and the Tower of Belém."},
      sport:{name:"Football",team:"Sport Lisboa e Benfica"},
      language:"Portuguese",
      government:"Semi-Presidential Republic",
      currency:"Euro (EUR)",
      resources:["cork","wine","seafood"],
      personalities:[
        {name:"Vasco da Gama",hint:"Navigator, the first European to reach India by sea.",context:"navigator"},
        {name:"Fernando Pessoa",hint:"Poet and writer, symbol of Portuguese modern literature.",context:"poet"},
        {name:"Cristiano Ronaldo",hint:"One of the greatest footballers in history.",context:"football star"}
      ],
      cities:["Lisbon","Porto","Braga","Coimbra"]
    }
  },
  {
    code:"SE", flag:"🇸🇪", continent:"europe",
    population:10500000, capitalPop:980000,
    cs:{
      name:"Švédsko",
      knownFor:"je domovem IKEA, Volvo, Spotify a silného státu blahobytu.",
      capital:{name:"Stockholm", icons:"👑 🏝️ 🎸", clue:"Město na 14 ostrovech, domov Nobelovy ceny a muzea Vasy."},
      sport:{name:"Lední hokej",team:"Djurgårdens IF"},
      language:"Švédština",
      government:"Konstituční monarchie",
      currency:"Švédská koruna (SEK)",
      resources:["železná ruda","dřevo","vodní energie"],
      personalities:[
        {name:"Alfred Nobel",hint:"Vynálezce dynamitu, zakladatel Nobelovy ceny.",context:"vynálezce a filantrop"},
        {name:"ABBA",hint:"Hudební skupina, jeden z nejúspěšnějších exportních artiklů Švédska.",context:"hudební skupina"},
        {name:"Astrid Lindgrenová",hint:"Autorka Pipi Dlouhé punčochy.",context:"dětská autorka"}
      ],
      cities:["Stockholm","Göteborg","Malmö","Uppsala"]
    },
    en:{
      name:"Sweden",
      knownFor:"is home to IKEA, Volvo, Spotify and a strong welfare state.",
      capital:{name:"Stockholm", icons:"👑 🏝️ 🎸", clue:"City on 14 islands, home of the Nobel Prize and the Vasa museum."},
      sport:{name:"Ice Hockey",team:"Djurgårdens IF"},
      language:"Swedish",
      government:"Constitutional Monarchy",
      currency:"Swedish Krona (SEK)",
      resources:["iron ore","timber","hydropower"],
      personalities:[
        {name:"Alfred Nobel",hint:"Inventor of dynamite, founder of the Nobel Prize.",context:"inventor and philanthropist"},
        {name:"ABBA",hint:"Music group, one of Sweden's most successful exports.",context:"music group"},
        {name:"Astrid Lindgren",hint:"Author of Pippi Longstocking.",context:"children's author"}
      ],
      cities:["Stockholm","Gothenburg","Malmö","Uppsala"]
    }
  },
  {
    code:"DK", flag:"🇩🇰", continent:"europe",
    population:5900000, capitalPop:800000,
    cs:{
      name:"Dánsko",
      knownFor:"je pravidelně hodnoceno jako jedna z nejšťastnějších zemí světa.",
      capital:{name:"Kodaň", icons:"🧜 🏰 🚲", clue:"Město Malé mořské víly, hradu Tivoli a světoznámé architektury."},
      sport:{name:"Fotbal",team:"FC Copenhagen"},
      language:"Dánština",
      government:"Konstituční monarchie",
      currency:"Dánská koruna (DKK)",
      resources:["ropa","zemní plyn","vítr"],
      personalities:[
        {name:"Hans Christian Andersen",hint:"Autor pohádek jako Malá mořská víla a Ošklivé káčátko.",context:"pohádkář"},
        {name:"Søren Kierkegaard",hint:"Filozof, zakladatel existencialismu.",context:"existencialistický filosof"},
        {name:"Tycho Brahe",hint:"Astronom, jehož měření umožnila Keplerovi odvodit zákony pohybu planet.",context:"astronom"}
      ],
      cities:["Kodaň","Aarhus","Odense","Aalborg"]
    },
    en:{
      name:"Denmark",
      knownFor:"is regularly ranked as one of the happiest countries in the world.",
      capital:{name:"Copenhagen", icons:"🧜 🏰 🚲", clue:"City of the Little Mermaid, Tivoli Gardens and world-famous architecture."},
      sport:{name:"Football",team:"FC Copenhagen"},
      language:"Danish",
      government:"Constitutional Monarchy",
      currency:"Danish Krone (DKK)",
      resources:["oil","natural gas","wind energy"],
      personalities:[
        {name:"Hans Christian Andersen",hint:"Author of fairy tales like The Little Mermaid and The Ugly Duckling.",context:"fairy-tale author"},
        {name:"Søren Kierkegaard",hint:"Philosopher, founder of existentialism.",context:"existentialist philosopher"},
        {name:"Tycho Brahe",hint:"Astronomer whose measurements allowed Kepler to derive planetary laws.",context:"astronomer"}
      ],
      cities:["Copenhagen","Aarhus","Odense","Aalborg"]
    }
  },
  {
    code:"FI", flag:"🇫🇮", continent:"europe",
    population:5600000, capitalPop:660000,
    cs:{
      name:"Finsko",
      knownFor:"je domovem sauny, polární záře a jednoho z nejlepších vzdělávacích systémů světa.",
      capital:{name:"Helsinky", icons:"🌲 ❄️ 🎅", clue:"Severské hlavní město na pobřeží Baltského moře."},
      sport:{name:"Lední hokej",team:"HIFK Helsinki"},
      language:"Finština a švédština",
      government:"Parlamentní republika",
      currency:"Euro (EUR)",
      resources:["dřevo","papír","mobilní technologie"],
      personalities:[
        {name:"Jean Sibelius",hint:"Skladatel Finlandie, symbol finské národní identity.",context:"národní skladatel"},
        {name:"Linus Torvalds",hint:"Tvůrce operačního systému Linux.",context:"tvůrce Linuxu"},
        {name:"Carl Gustaf Mannerheim",hint:"Vojevůdce a prezident, symbol finské nezávislosti.",context:"vojevůdce a prezident"}
      ],
      cities:["Helsinky","Espoo","Tampere","Turku"]
    },
    en:{
      name:"Finland",
      knownFor:"is home to the sauna, the Northern Lights and one of the best education systems in the world.",
      capital:{name:"Helsinki", icons:"🌲 ❄️ 🎅", clue:"Nordic capital city on the Baltic Sea coast."},
      sport:{name:"Ice Hockey",team:"HIFK Helsinki"},
      language:"Finnish and Swedish",
      government:"Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["timber","paper","mobile technology"],
      personalities:[
        {name:"Jean Sibelius",hint:"Composer of Finlandia, symbol of Finnish national identity.",context:"national composer"},
        {name:"Linus Torvalds",hint:"Creator of the Linux operating system.",context:"creator of Linux"},
        {name:"Carl Gustaf Mannerheim",hint:"Military leader and president, symbol of Finnish independence.",context:"military leader and president"}
      ],
      cities:["Helsinki","Espoo","Tampere","Turku"]
    }
  },
  {
    code:"GR", flag:"🇬🇷", continent:"europe",
    population:10400000, capitalPop:3200000,
    cs:{
      name:"Řecko",
      knownFor:"je kolébkou demokracie a západní civilizace s bohatým antickým dědictvím.",
      capital:{name:"Atény", icons:"🏛️ 🫒 🌊", clue:"Město Akropole, Parthenonu a kolébky olympijských her."},
      sport:{name:"Fotbal",team:"Olympiakos FC"},
      language:"Řečtina",
      government:"Parlamentní republika",
      currency:"Euro (EUR)",
      resources:["olivový olej","mramor","mořské plody"],
      personalities:[
        {name:"Sokrates",hint:"Filozof, zakladatel etiky a metody otázek a odpovědí.",context:"antický filosof"},
        {name:"Alexander Veliký",hint:"Makedonský král, dobyl perskou říši a dosáhl Indie.",context:"starověký dobyvatel"},
        {name:"Aristoteles",hint:"Filozof a vědec, žák Platóna a učitel Alexandra Velikého.",context:"antický filosof"}
      ],
      cities:["Atény","Soluň","Patras","Iraklion"]
    },
    en:{
      name:"Greece",
      knownFor:"is the cradle of democracy and Western civilization with a rich ancient heritage.",
      capital:{name:"Athens", icons:"🏛️ 🫒 🌊", clue:"City of the Acropolis, the Parthenon and the birthplace of the Olympic Games."},
      sport:{name:"Football",team:"Olympiakos FC"},
      language:"Greek",
      government:"Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["olive oil","marble","seafood"],
      personalities:[
        {name:"Socrates",hint:"Philosopher, founder of ethics and the question-and-answer method.",context:"ancient philosopher"},
        {name:"Alexander the Great",hint:"Macedonian king who conquered the Persian Empire and reached India.",context:"ancient conqueror"},
        {name:"Aristotle",hint:"Philosopher and scientist, pupil of Plato and teacher of Alexander.",context:"ancient philosopher"}
      ],
      cities:["Athens","Thessaloniki","Patras","Heraklion"]
    }
  },
  {
    code:"RO", flag:"🇷🇴", continent:"europe",
    population:19000000, capitalPop:2000000,
    cs:{
      name:"Rumunsko",
      knownFor:"je domovem hradu Bran a legendy o Drákulovi a má bohaté ropné zásoby.",
      capital:{name:"Bukurešť", icons:"🏰 🛢️ 🌺", clue:"Město nazývané Malá Paříž, s Arc de Triomphe a Parlamentním palácem."},
      sport:{name:"Fotbal",team:"Steaua Bukurešť"},
      language:"Rumunština",
      government:"Poloprezidentská republika",
      currency:"Rumunský leu (RON)",
      resources:["ropa","zemní plyn","uhlí"],
      personalities:[
        {name:"Nicolae Ceaușescu",hint:"Komunistický diktátor, svržen revolucí 1989.",context:"komunistický diktátor"},
        {name:"Nadia Comăneci",hint:"Gymnasta, první sportovec s dokonalým 10 na olympiádě.",context:"olympijská šampionka"},
        {name:"Mihai Eminescu",hint:"Básník, symbol rumunské národní literatury.",context:"národní básník"}
      ],
      cities:["Bukurešť","Cluj-Napoca","Timișoara","Iași"]
    },
    en:{
      name:"Romania",
      knownFor:"is home to Bran Castle and the Dracula legend and has substantial oil reserves.",
      capital:{name:"Bucharest", icons:"🏰 🛢️ 🌺", clue:"City called 'Little Paris', with its Arc de Triomphe and Palace of Parliament."},
      sport:{name:"Football",team:"Steaua Bucharest"},
      language:"Romanian",
      government:"Semi-Presidential Republic",
      currency:"Romanian Leu (RON)",
      resources:["oil","natural gas","coal"],
      personalities:[
        {name:"Nicolae Ceaușescu",hint:"Communist dictator, overthrown in the 1989 revolution.",context:"communist dictator"},
        {name:"Nadia Comăneci",hint:"Gymnast, first athlete to score a perfect 10 at the Olympics.",context:"Olympic champion"},
        {name:"Mihai Eminescu",hint:"Poet, symbol of Romanian national literature.",context:"national poet"}
      ],
      cities:["Bucharest","Cluj-Napoca","Timișoara","Iași"]
    }
  },
  {
    code:"HU", flag:"🇭🇺", continent:"europe",
    population:9700000, capitalPop:1700000,
    cs:{
      name:"Maďarsko",
      knownFor:"je domovem unikátního jazyka, termálních lázní a silné paprikové kuchyně.",
      capital:{name:"Budapešť", icons:"🌊 🏛️ 🌉", clue:"Perla Dunaje — město Rybářského bastiónu, Parlamentu a Řetězového mostu."},
      sport:{name:"Vodní pólo",team:"Maďarská reprezentace"},
      language:"Maďarština",
      government:"Parlamentní republika",
      currency:"Forint (HUF)",
      resources:["bauxit","uhlí","zemní plyn"],
      personalities:[
        {name:"Franz Liszt",hint:"Pianista a skladatel, jeden z největších virtuosů 19. století.",context:"klavírní virtuos"},
        {name:"Béla Bartók",hint:"Skladatel moderní klasické hudby, sběratel lidových písní.",context:"skladatel"},
        {name:"Ernő Rubik",hint:"Vynálezce Rubikovy kostky.",context:"vynálezce"}
      ],
      cities:["Budapešť","Debrecen","Miskolc","Pécs"]
    },
    en:{
      name:"Hungary",
      knownFor:"is home to a unique language, thermal baths and a strong paprika cuisine.",
      capital:{name:"Budapest", icons:"🌊 🏛️ 🌉", clue:"Pearl of the Danube — city of Fisherman's Bastion, Parliament and Chain Bridge."},
      sport:{name:"Water Polo",team:"Hungarian National Team"},
      language:"Hungarian",
      government:"Parliamentary Republic",
      currency:"Forint (HUF)",
      resources:["bauxite","coal","natural gas"],
      personalities:[
        {name:"Franz Liszt",hint:"Pianist and composer, one of the greatest virtuosos of the 19th century.",context:"piano virtuoso"},
        {name:"Béla Bartók",hint:"Composer of modern classical music, folk song collector.",context:"composer"},
        {name:"Ernő Rubik",hint:"Inventor of the Rubik's Cube.",context:"inventor"}
      ],
      cities:["Budapest","Debrecen","Miskolc","Pécs"]
    }
  },
  {
    code:"SK", flag:"🇸🇰", continent:"europe",
    population:5500000, capitalPop:480000,
    cs:{
      name:"Slovensko",
      knownFor:"má nejvyšší hustotu hradů na světě a leží v srdci Karpat.",
      capital:{name:"Bratislava", icons:"🏰 🍺 🌊", clue:"Malé hlavní město na Dunaji, s hraem a starým městem."},
      sport:{name:"Lední hokej",team:"HC Slovan Bratislava"},
      language:"Slovenština",
      government:"Parlamentní republika",
      currency:"Euro (EUR)",
      resources:["dřevo","magnezit","hnědé uhlí"],
      personalities:[
        {name:"Ľudovít Štúr",hint:"Jazykovědec, který kodifikoval slovenský jazyk — otec slovenské národní identity.",context:"otec slovenského jazyka"},
        {name:"Milan Rastislav Štefánik",hint:"Astronom, generál a diplomat, spoluzakladatel Československa.",context:"spoluzakladatel ČSR"},
        {name:"Andy Warhol",hint:"Ikona pop-artu — jeho rodiče pocházeli ze Slovenska, on sám byl Američan.",context:"světoznámý umělec slovenského původu"}
      ],
      cities:["Bratislava","Košice","Prešov","Žilina"]
    },
    en:{
      name:"Slovakia",
      knownFor:"has the highest density of castles in the world and lies in the heart of the Carpathians.",
      capital:{name:"Bratislava", icons:"🏰 🍺 🌊", clue:"Small capital on the Danube, with a castle and old town."},
      sport:{name:"Ice Hockey",team:"HC Slovan Bratislava"},
      language:"Slovak",
      government:"Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["timber","magnesite","brown coal"],
      personalities:[
        {name:"Ľudovít Štúr",hint:"Linguist who codified the Slovak language — father of Slovak national identity.",context:"father of the Slovak language"},
        {name:"Milan Rastislav Štefánik",hint:"Astronomer, general and diplomat, co-founder of Czechoslovakia.",context:"co-founder of Czechoslovakia"},
        {name:"Andy Warhol",hint:"Pop art icon — his parents were from Slovakia, but he himself was American.",context:"world-famous artist of Slovak origin"}
      ],
      cities:["Bratislava","Košice","Prešov","Žilina"]
    }
  },
  {
    code:"HR", flag:"🇭🇷", continent:"europe",
    population:3900000, capitalPop:800000,
    cs:{
      name:"Chorvatsko",
      knownFor:"má jednu z nejkrásnějších jadranských pobřeží s tisíci ostrovy.",
      capital:{name:"Záhřeb", icons:"🌊 🏖️ ⚽", clue:"Středoevropské hlavní město s katedrálou a tržnicí Dolac."},
      sport:{name:"Fotbal",team:"GNK Dinamo Zagreb"},
      language:"Chorvatština",
      government:"Parlamentní republika",
      currency:"Euro (EUR)",
      resources:["ropa","zemní plyn","bauxit"],
      personalities:[
        {name:"Nikola Tesla",hint:"Vynálezce střídavého proudu, jeho kořeny jsou v Chorvatsku.",context:"elektrický průkopník"},
        {name:"Ruđer Bošković",hint:"Chorvatský fyzik a astronom 18. stol., průkopník atomové teorie.",context:"fyzik a astronom"},
        {name:"Ivan Meštrović",hint:"Nejvýznamnější chorvatský sochař 20. století.",context:"sochař"}
      ],
      cities:["Záhřeb","Split","Rijeka","Osijek"]
    },
    en:{
      name:"Croatia",
      knownFor:"has one of the most beautiful Adriatic coastlines with thousands of islands.",
      capital:{name:"Zagreb", icons:"🌊 🏖️ ⚽", clue:"Central European capital with a cathedral and the Dolac market."},
      sport:{name:"Football",team:"GNK Dinamo Zagreb"},
      language:"Croatian",
      government:"Parliamentary Republic",
      currency:"Euro (EUR)",
      resources:["oil","natural gas","bauxite"],
      personalities:[
        {name:"Nikola Tesla",hint:"Inventor of alternating current, his roots are in Croatia.",context:"electrical pioneer"},
        {name:"Ruđer Bošković",hint:"Croatian physicist and astronomer, 18th-century pioneer of atomic theory.",context:"physicist and astronomer"},
        {name:"Ivan Meštrović",hint:"The most significant Croatian sculptor of the 20th century.",context:"sculptor"}
      ],
      cities:["Zagreb","Split","Rijeka","Osijek"]
    }
  },
  {
    code:"BG", flag:"🇧🇬", continent:"europe",
    population:6500000, capitalPop:1300000,
    cs:{
      name:"Bulharsko",
      knownFor:"je jednou z nejstarších zemí Evropy s bohatou historií Thráků a Byzantinců.",
      capital:{name:"Sofie", icons:"🏔️ ⛪ 🌹", clue:"Jedno z nejstarších měst Evropy u úpatí hory Vitoša."},
      sport:{name:"Vzpírání",team:"Bulharská vzpěračská reprezentace"},
      language:"Bulharština",
      government:"Parlamentní republika",
      currency:"Bulharský lev (BGN)",
      resources:["hnědé uhlí","měď","zinková ruda"],
      personalities:[
        {name:"Christo Javašev",hint:"Umělec, který zabalil berlínský Reichstag i pařížský Pont Neuf.",context:"konceptuální umělec"},
        {name:"John Atanasoff",hint:"Průkopník počítačové vědy bulharského původu.",context:"počítačový průkopník"},
        {name:"Spartakus",hint:"Thrácký otrok, vůdce největšího povstání otroků v Římě.",context:"vůdce otrokářského povstání"}
      ],
      cities:["Sofie","Plovdiv","Varna","Burgas"]
    },
    en:{
      name:"Bulgaria",
      knownFor:"is one of Europe's oldest countries with a rich Thracian and Byzantine history.",
      capital:{name:"Sofia", icons:"🏔️ ⛪ 🌹", clue:"One of Europe's oldest cities at the foot of Mount Vitosha."},
      sport:{name:"Weightlifting",team:"Bulgarian Weightlifting Team"},
      language:"Bulgarian",
      government:"Parliamentary Republic",
      currency:"Bulgarian Lev (BGN)",
      resources:["brown coal","copper","zinc ore"],
      personalities:[
        {name:"Christo Javacheff",hint:"Artist who wrapped the Berlin Reichstag and Paris's Pont Neuf.",context:"conceptual artist"},
        {name:"John Atanasoff",hint:"Pioneer of computer science of Bulgarian descent.",context:"computing pioneer"},
        {name:"Spartacus",hint:"Thracian slave, leader of the largest slave revolt in Rome.",context:"slave revolt leader"}
      ],
      cities:["Sofia","Plovdiv","Varna","Burgas"]
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AFRICA — all major countries
  // ══════════════════════════════════════════════════════════════════════════
  {
    code:"MA", flag:"🇲🇦", continent:"africa",
    population:37500000, capitalPop:580000,
    cs:{
      name:"Maroko",
      knownFor:"je severoafrická monarchie s bohatou arabskou a berberspou kulturou a ikonickými medínami.",
      capital:{name:"Rabat", icons:"🕌 🌴 🐪", clue:"Královské hlavní město na Atlantickém pobřeží."},
      sport:{name:"Fotbal",team:"Raja Club Athletic"},
      language:"Arabština a berberština",
      government:"Konstituční monarchie",
      currency:"Marocký dirham (MAD)",
      resources:["fosfáty","rybolov","zemní plyn"],
      personalities:[
        {name:"Ibn Battuta",hint:"Středověký cestovatel původem z Maroka, procestoval přes 120 000 km.",context:"největší středověký cestovatel"},
        {name:"král Mohamed VI.",hint:"Soudobý král, který modernizuje zemi.",context:"současný král"},
        {name:"Tarik ibn Zijád",hint:"Berberský vojevůdce, který v roce 711 vedl dobytí Pyrenejského poloostrova.",context:"vojevůdce a dobyvatel"}
      ],
      cities:["Rabat","Casablanca","Fés","Marrákeš"]
    },
    en:{
      name:"Morocco",
      knownFor:"is a North African monarchy with a rich Arab-Berber culture and iconic medinas.",
      capital:{name:"Rabat", icons:"🕌 🌴 🐪", clue:"Royal capital on the Atlantic coast."},
      sport:{name:"Football",team:"Raja Club Athletic"},
      language:"Arabic and Berber",
      government:"Constitutional Monarchy",
      currency:"Moroccan Dirham (MAD)",
      resources:["phosphates","fishing","natural gas"],
      personalities:[
        {name:"Ibn Battuta",hint:"Medieval traveller from Morocco who covered over 120,000 km.",context:"greatest medieval traveller"},
        {name:"King Mohammed VI",hint:"Current king modernising the country.",context:"current king"},
        {name:"Tariq ibn Ziyad",hint:"Berber commander who led the conquest of the Iberian Peninsula in 711.",context:"commander and conqueror"}
      ],
      cities:["Rabat","Casablanca","Fez","Marrakech"]
    }
  },
  {
    code:"ET", flag:"🇪🇹", continent:"africa",
    population:126500000, capitalPop:5200000,
    cs:{
      name:"Etiopie",
      knownFor:"je jedinou africkou zemí, která nikdy nebyla kolonizována, a domovem kávovníku.",
      capital:{name:"Addis Abeba", icons:"☕ 🦁 ✈️", clue:"Nejvýše položené hlavní město Afriky, sídlo Africké unie."},
      sport:{name:"Atletika",team:"Etiopská atletická reprezentace"},
      language:"Amharština",
      government:"Federativní parlamentní republika",
      currency:"Etiopský birr (ETB)",
      resources:["káva","zlato","vodní energie"],
      personalities:[
        {name:"Haile Gebrselassie",hint:"Maratonec, dvojnásobný olympijský vítěz.",context:"běžecká legenda"},
        {name:"Haile Selassie",hint:"Císař, symbol panafrikanismu a rastafariánství.",context:"etiopský císař"},
        {name:"Lucy (Australopithecus)",hint:"Nejslavnější fosilní nález prehistorického člověka, nalezena v Etiopii.",context:"prehistorická nálezy"}
      ],
      cities:["Addis Abeba","Dire Dawa","Gondar","Mekelle"]
    },
    en:{
      name:"Ethiopia",
      knownFor:"is the only African country never colonised and the birthplace of coffee.",
      capital:{name:"Addis Ababa", icons:"☕ 🦁 ✈️", clue:"Africa's highest capital city, seat of the African Union."},
      sport:{name:"Athletics",team:"Ethiopian Athletics Team"},
      language:"Amharic",
      government:"Federal Parliamentary Republic",
      currency:"Ethiopian Birr (ETB)",
      resources:["coffee","gold","hydropower"],
      personalities:[
        {name:"Haile Gebrselassie",hint:"Marathon runner, two-time Olympic champion.",context:"running legend"},
        {name:"Haile Selassie",hint:"Emperor, symbol of Pan-Africanism and Rastafarianism.",context:"Ethiopian emperor"},
        {name:"Lucy (Australopithecus)",hint:"Most famous prehistoric human fossil, found in Ethiopia.",context:"prehistoric discovery"}
      ],
      cities:["Addis Ababa","Dire Dawa","Gondar","Mekelle"]
    }
  },
  {
    code:"KE", flag:"🇰🇪", continent:"africa",
    population:55100000, capitalPop:4400000,
    cs:{
      name:"Keňa",
      knownFor:"je domovem světoznámých safari parků, Masai Mara a nejlepších maratonců světa.",
      capital:{name:"Nairobi", icons:"🦁 🌿 🏙️", clue:"Jedno z největších měst subsaharské Afriky, brána k safari."},
      sport:{name:"Atletika",team:"Keňská reprezentace"},
      language:"Svahilština a angličtina",
      government:"Prezidentská republika",
      currency:"Keňský šilink (KES)",
      resources:["čaj","káva","turistický ruch"],
      personalities:[
        {name:"Eliud Kipchoge",hint:"Maratonec, první člověk pod 2 hodiny.",context:"největší maratonec"},
        {name:"Wangari Maathai",hint:"Ekologická aktivistka, první africká žena s Nobelovou cenou míru.",context:"nositelka Nobelovy ceny"},
        {name:"Jomo Kenyatta",hint:"První prezident Keni po nezávislosti v roce 1963, otec keňského národa.",context:"otec národa"}
      ],
      cities:["Nairobi","Mombasa","Kisumu","Nakuru"]
    },
    en:{
      name:"Kenya",
      knownFor:"is home to world-famous safari parks, the Masai Mara and the world's best marathon runners.",
      capital:{name:"Nairobi", icons:"🦁 🌿 🏙️", clue:"One of the largest cities in sub-Saharan Africa, gateway to safari."},
      sport:{name:"Athletics",team:"Kenyan Team"},
      language:"Swahili and English",
      government:"Presidential Republic",
      currency:"Kenyan Shilling (KES)",
      resources:["tea","coffee","tourism"],
      personalities:[
        {name:"Eliud Kipchoge",hint:"Marathon runner, first person to run under 2 hours.",context:"greatest marathon runner"},
        {name:"Wangari Maathai",hint:"Environmental activist, first African woman to win the Nobel Peace Prize.",context:"Nobel Peace Prize winner"},
        {name:"Jomo Kenyatta",hint:"First president of Kenya after independence in 1963, father of the nation.",context:"father of the nation"}
      ],
      cities:["Nairobi","Mombasa","Kisumu","Nakuru"]
    }
  },
  {
    code:"TZ", flag:"🇹🇿", continent:"africa",
    population:63800000, capitalPop:5400000,
    cs:{
      name:"Tanzanie",
      knownFor:"je domovem Kilimandžára a Serengeti a je největší zemí ve východní Africe.",
      capital:{name:"Dodoma", icons:"🏔️ 🦒 🌍", clue:"Vnitrozemské administrativní hlavní město, přestože větší je Dar es Salaam."},
      sport:{name:"Fotbal",team:"Young Africans SC"},
      language:"Svahilština a angličtina",
      government:"Unitární prezidentská republika",
      currency:"Tanzanský šilink (TZS)",
      resources:["zlato","tanzanit","zemní plyn"],
      personalities:[
        {name:"Julius Nyerere",hint:"Otec tanzanijského národa, první prezident.",context:"zakladatel státu"},
        {name:"Freddie Mercury",hint:"Zpěvák skupiny Queen, narozen v Zanzibaru.",context:"rockový zpěvák"},
        {name:"John Magufuli",hint:"Prezident přezdívaný Buldozer za rozhodný styl řízení.",context:"nedávný prezident"}
      ],
      cities:["Dodoma","Dar es Salaam","Mwanza","Zanzibar"]
    },
    en:{
      name:"Tanzania",
      knownFor:"is home to Kilimanjaro and the Serengeti and is the largest country in East Africa.",
      capital:{name:"Dodoma", icons:"🏔️ 🦒 🌍", clue:"Inland administrative capital, although Dar es Salaam is larger."},
      sport:{name:"Football",team:"Young Africans SC"},
      language:"Swahili and English",
      government:"Unitary Presidential Republic",
      currency:"Tanzanian Shilling (TZS)",
      resources:["gold","tanzanite","natural gas"],
      personalities:[
        {name:"Julius Nyerere",hint:"Father of the Tanzanian nation, first president.",context:"founding father"},
        {name:"Freddie Mercury",hint:"Lead singer of Queen, born in Zanzibar.",context:"rock singer"},
        {name:"John Magufuli",hint:"President nicknamed 'the Bulldozer' for his decisive leadership.",context:"recent president"}
      ],
      cities:["Dodoma","Dar es Salaam","Mwanza","Zanzibar City"]
    }
  },
  {
    code:"GH", flag:"🇬🇭", continent:"africa",
    population:33500000, capitalPop:2500000,
    cs:{
      name:"Ghana",
      knownFor:"byl první subsaharskou africkou zemí, která získala nezávislost.",
      capital:{name:"Accra", icons:"🌍 🌴 ⚽", clue:"Pobřežní hlavní město s historickými pevnostmi na pobřeží otroctví."},
      sport:{name:"Fotbal",team:"Accra Hearts of Oak"},
      language:"Angličtina",
      government:"Prezidentská republika",
      currency:"Ghanský cedi (GHS)",
      resources:["zlato","kakao","ropa"],
      personalities:[
        {name:"Kwame Nkrumah",hint:"První prezident a bojovník za africkou nezávislost.",context:"zakladatel státu"},
        {name:"Kofi Annan",hint:"Generální tajemník OSN, nositel Nobelovy ceny míru.",context:"nositel Nobelovy ceny"},
        {name:"Asamoah Gyan",hint:"Nejlepší střelec Ghany na FIFA mistrovstvích světa všech dob.",context:"fotbalová hvězda"}
      ],
      cities:["Accra","Kumasi","Tamale","Sekondi-Takoradi"]
    },
    en:{
      name:"Ghana",
      knownFor:"was the first sub-Saharan African country to gain independence.",
      capital:{name:"Accra", icons:"🌍 🌴 ⚽", clue:"Coastal capital with historic forts along the Slave Coast."},
      sport:{name:"Football",team:"Accra Hearts of Oak"},
      language:"English",
      government:"Presidential Republic",
      currency:"Ghanaian Cedi (GHS)",
      resources:["gold","cocoa","oil"],
      personalities:[
        {name:"Kwame Nkrumah",hint:"First president and champion of African independence.",context:"founding father"},
        {name:"Kofi Annan",hint:"UN Secretary-General, Nobel Peace Prize laureate.",context:"Nobel laureate"},
        {name:"Asamoah Gyan",hint:"Ghana's all-time top scorer at the FIFA World Cup.",context:"football star"}
      ],
      cities:["Accra","Kumasi","Tamale","Sekondi-Takoradi"]
    }
  },
  {
    code:"CM", flag:"🇨🇲", continent:"africa",
    population:28600000, capitalPop:3600000,
    cs:{
      name:"Kamerun",
      knownFor:'je přezdíváno "Afrika v miniaturě" pro svou extrémní přírodní a kulturní rozmanitost.',
      capital:{name:"Yaoundé", icons:"🌿 ⚽ 🦍", clue:"Vnitrozemské hlavní město obklopené zeleným kopci."},
      sport:{name:"Fotbal",team:"Canon Yaoundé"},
      language:"Francouzština a angličtina",
      government:"Prezidentská republika",
      currency:"Středoafrický frank CFA (XAF)",
      resources:["ropa","kakao","hliník"],
      personalities:[
        {name:"Roger Milla",hint:"Fotbalista, hvězda MS 1990, tancoval u rohového praporku.",context:"fotbalová legenda"},
        {name:"Samuel Eto'o",hint:"Jeden z nejlepších afrických fotbalistů vůbec.",context:"fotbalista"},
        {name:"Paul Biya",hint:"Prezident od roku 1982, jeden z nejdéle sloužících vůdců světa.",context:"dlouhodobý prezident"}
      ],
      cities:["Yaoundé","Douala","Bamenda","Garoua"]
    },
    en:{
      name:"Cameroon",
      knownFor:'is nicknamed "Africa in miniature" for its extreme natural and cultural diversity.',
      capital:{name:"Yaoundé", icons:"🌿 ⚽ 🦍", clue:"Inland capital surrounded by green hills."},
      sport:{name:"Football",team:"Canon Yaoundé"},
      language:"French and English",
      government:"Presidential Republic",
      currency:"Central African CFA franc (XAF)",
      resources:["oil","cocoa","aluminium"],
      personalities:[
        {name:"Roger Milla",hint:"Footballer, star of the 1990 World Cup, danced at the corner flag.",context:"football legend"},
        {name:"Samuel Eto'o",hint:"One of the greatest African footballers ever.",context:"footballer"},
        {name:"Paul Biya",hint:"President since 1982, one of the world's longest-serving leaders.",context:"long-serving president"}
      ],
      cities:["Yaoundé","Douala","Bamenda","Garoua"]
    }
  },
  {
    code:"AO", flag:"🇦🇴", continent:"africa",
    population:36700000, capitalPop:9000000,
    cs:{
      name:"Angola",
      knownFor:"je jedním z největších producentů ropy v Africe s bohatými zásobami diamantů.",
      capital:{name:"Luanda", icons:"🛢️ 💎 🌊", clue:"Jedno z nejdražších měst Afriky na atlantickém pobřeží."},
      sport:{name:"Basketbal",team:"Petro de Luanda"},
      language:"Portugalština",
      government:"Prezidentská republika",
      currency:"Angolská kwanza (AOA)",
      resources:["ropa","diamanty","zemní plyn"],
      personalities:[
        {name:"Agostinho Neto",hint:"Básník a první prezident Angoly po nezávislosti.",context:"zakladatel státu"},
        {name:"Jonas Savimbi",hint:"Vůdce povstaleckého hnutí UNITA během občanské války.",context:"vůdce rebelie"},
        {name:"José Eduardo dos Santos",hint:"Prezident po dobu 38 let, jeden z nejdéle sloužících v Africe.",context:"dlouhodobý prezident"}
      ],
      cities:["Luanda","Huambo","Lobito","Benguela"]
    },
    en:{
      name:"Angola",
      knownFor:"is one of Africa's largest oil producers with abundant diamond reserves.",
      capital:{name:"Luanda", icons:"🛢️ 💎 🌊", clue:"One of Africa's most expensive cities on the Atlantic coast."},
      sport:{name:"Basketball",team:"Petro de Luanda"},
      language:"Portuguese",
      government:"Presidential Republic",
      currency:"Angolan Kwanza (AOA)",
      resources:["oil","diamonds","natural gas"],
      personalities:[
        {name:"Agostinho Neto",hint:"Poet and first president of Angola after independence.",context:"founding father"},
        {name:"Jonas Savimbi",hint:"Leader of the UNITA rebel movement during the civil war.",context:"rebel leader"},
        {name:"José Eduardo dos Santos",hint:"President for 38 years, one of Africa's longest-serving leaders.",context:"long-serving president"}
      ],
      cities:["Luanda","Huambo","Lobito","Benguela"]
    }
  },
  {
    code:"MZ", flag:"🇲🇿", continent:"africa",
    population:33900000, capitalPop:1100000,
    cs:{
      name:"Mosambik",
      knownFor:"má jednu z nejdelších pobřežních linií Afriky a rozvíjející se zásoby zemního plynu.",
      capital:{name:"Maputo", icons:"🌊 🦛 🎵", clue:"Jižní přímořské hlavní město sousedící s JAR a Eswatini."},
      sport:{name:"Fotbal",team:"Costa do Sol FC"},
      language:"Portugalština",
      government:"Prezidentská republika",
      currency:"Mosambický metical (MZN)",
      resources:["zemní plyn","uhlí","rubíny"],
      personalities:[
        {name:"Samora Machel",hint:"Zakladatel nezávislého Mosambiku, první prezident.",context:"zakladatel státu"},
        {name:"Maria Mutola",hint:"Atletka, olympijská šampionka v běhu na 800 m.",context:"olympijská šampionka"},
        {name:"Eduardo Mondlane",hint:"Zakladatel FRELIMO, hnutí za nezávislost.",context:"bojovník za nezávislost"}
      ],
      cities:["Maputo","Matola","Nampula","Beira"]
    },
    en:{
      name:"Mozambique",
      knownFor:"has one of Africa's longest coastlines and growing natural gas reserves.",
      capital:{name:"Maputo", icons:"🌊 🦛 🎵", clue:"Southern coastal capital bordering South Africa and Eswatini."},
      sport:{name:"Football",team:"Costa do Sol FC"},
      language:"Portuguese",
      government:"Presidential Republic",
      currency:"Mozambican Metical (MZN)",
      resources:["natural gas","coal","rubies"],
      personalities:[
        {name:"Samora Machel",hint:"Founder of independent Mozambique, first president.",context:"founding father"},
        {name:"Maria Mutola",hint:"Athlete, Olympic champion in the 800m run.",context:"Olympic champion"},
        {name:"Eduardo Mondlane",hint:"Founder of FRELIMO, the independence movement.",context:"independence fighter"}
      ],
      cities:["Maputo","Matola","Nampula","Beira"]
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  // AMERICAS — additional countries
  // ══════════════════════════════════════════════════════════════════════════
  {
    code:"AR", flag:"🇦🇷", continent:"america",
    population:45800000, capitalPop:3100000,
    cs:{
      name:"Argentina",
      knownFor:"je druhá největší ekonomika Jižní Ameriky, domov tanga a nejúspěšnějšího fotbalového národa.",
      capital:{name:"Buenos Aires", icons:"💃 ⚽ 🥩", clue:"Pařížský duch Jižní Ameriky — město tanga, Obelisku a asado."},
      sport:{name:"Fotbal",team:"Club Atlético Boca Juniors"},
      language:"Španělština",
      government:"Federativní prezidentská republika",
      currency:"Argentinské peso (ARS)",
      resources:["sója","hovězí maso","lithium"],
      personalities:[
        {name:"Lionel Messi",hint:"Nejlepší fotbalista všech dob, mistr světa 2022.",context:"fotbalová legenda"},
        {name:"Jorge Luis Borges",hint:"Spisovatel a básník, světová literární ikona.",context:"literární génius"},
        {name:"Che Guevara",hint:"Revoluční ikona z doby kubánské revoluce.",context:"revoluční symbol"}
      ],
      cities:["Buenos Aires","Córdoba","Rosario","Mendoza"]
    },
    en:{
      name:"Argentina",
      knownFor:"is South America's second largest economy, home to tango and the most successful football nation.",
      capital:{name:"Buenos Aires", icons:"💃 ⚽ 🥩", clue:"The Paris of South America — city of tango, the Obelisk and asado."},
      sport:{name:"Football",team:"Club Atlético Boca Juniors"},
      language:"Spanish",
      government:"Federal Presidential Republic",
      currency:"Argentine Peso (ARS)",
      resources:["soybeans","beef","lithium"],
      personalities:[
        {name:"Lionel Messi",hint:"Greatest footballer of all time, 2022 World Cup winner.",context:"football legend"},
        {name:"Jorge Luis Borges",hint:"Writer and poet, global literary icon.",context:"literary genius"},
        {name:"Che Guevara",hint:"Revolutionary icon from the era of the Cuban Revolution.",context:"revolutionary symbol"}
      ],
      cities:["Buenos Aires","Córdoba","Rosario","Mendoza"]
    }
  },
  {
    code:"CO", flag:"🇨🇴", continent:"america",
    population:51900000, capitalPop:7400000,
    cs:{
      name:"Kolumbie",
      knownFor:"je největším světovým producentem prémiové kávy a domovem Magické Kolumbie.",
      capital:{name:"Bogotá", icons:"☕ 💐 🌿", clue:"Andské hlavní město ve výšce 2600 m n.m. s bohatou uměleckou scénou."},
      sport:{name:"Fotbal",team:"Club Los Millonarios"},
      language:"Španělština",
      government:"Prezidentská republika",
      currency:"Kolumbijské peso (COP)",
      resources:["káva","ropa","uhlí"],
      personalities:[
        {name:"Gabriel García Márquez",hint:"Autor Sto let samoty, nositel Nobelovy ceny za literaturu.",context:"nositel Nobelovy ceny"},
        {name:"Shakira",hint:"Celosvětově úspěšná popová zpěvačka.",context:"hudební hvězda"},
        {name:"Fernando Botero",hint:"Malíř a sochař, světoznámý stylem objemných figur.",context:"umělec"}
      ],
      cities:["Bogotá","Medellín","Cali","Barranquilla"]
    },
    en:{
      name:"Colombia",
      knownFor:"is the world's largest producer of premium coffee and the home of Magical Realism.",
      capital:{name:"Bogotá", icons:"☕ 💐 🌿", clue:"Andean capital at 2,600m above sea level with a rich arts scene."},
      sport:{name:"Football",team:"Club Los Millonarios"},
      language:"Spanish",
      government:"Presidential Republic",
      currency:"Colombian Peso (COP)",
      resources:["coffee","oil","coal"],
      personalities:[
        {name:"Gabriel García Márquez",hint:"Author of One Hundred Years of Solitude, Nobel Prize in Literature.",context:"Nobel laureate"},
        {name:"Shakira",hint:"Globally successful pop singer.",context:"music star"},
        {name:"Fernando Botero",hint:"Painter and sculptor, world-famous for his volumetric figures.",context:"artist"}
      ],
      cities:["Bogotá","Medellín","Cali","Barranquilla"]
    }
  },
  {
    code:"CL", flag:"🇨🇱", continent:"america",
    population:19600000, capitalPop:6300000,
    cs:{
      name:"Chile",
      knownFor:"je nejdelší zemí světa a největším světovým producentem mědi.",
      capital:{name:"Santiago", icons:"🏔️ 🍷 🌶️", clue:"Andské hlavní město s výhledem na zasněžené vrcholky Cordillery."},
      sport:{name:"Fotbal",team:"Club Universidad de Chile"},
      language:"Španělština",
      government:"Prezidentská republika",
      currency:"Chilské peso (CLP)",
      resources:["měď","lithium","víno"],
      personalities:[
        {name:"Pablo Neruda",hint:"Básník a diplomat, nositel Nobelovy ceny za literaturu.",context:"nositel Nobelovy ceny"},
        {name:"Salvador Allende",hint:"První demokraticky zvolený marxistický prezident, svržen pučem 1973.",context:"demokratický prezident"},
        {name:"Gabriela Mistral",hint:"Básnířka, první latinskoamerická nositelka Nobelovy ceny.",context:"nobelistka"}
      ],
      cities:["Santiago","Valparaíso","Concepción","La Serena"]
    },
    en:{
      name:"Chile",
      knownFor:"is the world's longest country and the largest producer of copper.",
      capital:{name:"Santiago", icons:"🏔️ 🍷 🌶️", clue:"Andean capital with views of the snow-capped Cordillera."},
      sport:{name:"Football",team:"Club Universidad de Chile"},
      language:"Spanish",
      government:"Presidential Republic",
      currency:"Chilean Peso (CLP)",
      resources:["copper","lithium","wine"],
      personalities:[
        {name:"Pablo Neruda",hint:"Poet and diplomat, Nobel Prize in Literature laureate.",context:"Nobel laureate"},
        {name:"Salvador Allende",hint:"First democratically elected Marxist president, overthrown in 1973 coup.",context:"democratic president"},
        {name:"Gabriela Mistral",hint:"Poet, first Latin American Nobel Prize laureate.",context:"Nobel laureate"}
      ],
      cities:["Santiago","Valparaíso","Concepción","La Serena"]
    }
  },
  {
    code:"PE", flag:"🇵🇪", continent:"america",
    population:33400000, capitalPop:10500000,
    cs:{
      name:"Peru",
      knownFor:"je domovem Machu Picchu a říše Inků a je třetí největší zemí Jižní Ameriky.",
      capital:{name:"Lima", icons:"🏔️ 🦙 🍋", clue:"Tichooceánské hlavní město s koloniální architekturou a světoznámou gastronomií."},
      sport:{name:"Fotbal",team:"Club Universitario de Deportes"},
      language:"Španělština a kečuánština",
      government:"Prezidentská republika",
      currency:"Peruánský sol (PEN)",
      resources:["měď","zlato","rybolov"],
      personalities:[
        {name:"Atahualpa",hint:"Poslední inkový císař, zabit španělskými dobyvately.",context:"poslední inkový císař"},
        {name:"Mario Vargas Llosa",hint:"Spisovatel a politik, nositel Nobelovy ceny za literaturu.",context:"nositel Nobelovy ceny"},
        {name:"José de San Martín",hint:"Generál, který v roce 1821 vyhlásil peruánskou nezávislost.",context:"vyhlasovatel nezávislosti"}
      ],
      cities:["Lima","Arequipa","Trujillo","Cusco"]
    },
    en:{
      name:"Peru",
      knownFor:"is home to Machu Picchu and the Inca Empire and is the third largest country in South America.",
      capital:{name:"Lima", icons:"🏔️ 🦙 🍋", clue:"Pacific capital with colonial architecture and world-famous gastronomy."},
      sport:{name:"Football",team:"Club Universitario de Deportes"},
      language:"Spanish and Quechua",
      government:"Presidential Republic",
      currency:"Peruvian Sol (PEN)",
      resources:["copper","gold","fishing"],
      personalities:[
        {name:"Atahualpa",hint:"Last Inca emperor, killed by Spanish conquistadors.",context:"last Inca emperor"},
        {name:"Mario Vargas Llosa",hint:"Writer and politician, Nobel Prize in Literature laureate.",context:"Nobel laureate"},
        {name:"José de San Martín",hint:"General who declared Peruvian independence in 1821.",context:"proclaimer of independence"}
      ],
      cities:["Lima","Arequipa","Trujillo","Cusco"]
    }
  },
  {
    code:"VE", flag:"🇻🇪", continent:"america",
    population:28300000, capitalPop:2900000,
    cs:{
      name:"Venezuela",
      knownFor:"má největší ropné zásoby na světě a domov vodopádu Ángel, nejvyššího na světě.",
      capital:{name:"Caracas", icons:"🛢️ 💧 🌺", clue:"Karibské hlavní město u úpatí hory El Ávila."},
      sport:{name:"Baseball",team:"Leones del Caracas"},
      language:"Španělština",
      government:"Federativní prezidentská republika",
      currency:"Venezuelský bolívar (VES)",
      resources:["ropa","zemní plyn","bauxid"],
      personalities:[
        {name:"Simón Bolívar",hint:"Osvobozenec, který osvobodil šest jihoamerických zemí od Španělska.",context:"Osvoboditel Ameriky"},
        {name:"Rómulo Gallegos",hint:"Spisovatel a první demokraticky zvolený prezident.",context:"spisovatel a prezident"},
        {name:"Hugo Chávez",hint:"Socialistický prezident 1999–2013, budovatel bolivarské revoluce.",context:"socialistický vůdce"}
      ],
      cities:["Caracas","Maracaibo","Valencia","Barquisimeto"]
    },
    en:{
      name:"Venezuela",
      knownFor:"has the world's largest oil reserves and is home to Angel Falls, the world's highest waterfall.",
      capital:{name:"Caracas", icons:"🛢️ 💧 🌺", clue:"Caribbean capital at the foot of Mount El Ávila."},
      sport:{name:"Baseball",team:"Leones del Caracas"},
      language:"Spanish",
      government:"Federal Presidential Republic",
      currency:"Venezuelan Bolívar (VES)",
      resources:["oil","natural gas","bauxite"],
      personalities:[
        {name:"Simón Bolívar",hint:"Liberator who freed six South American countries from Spain.",context:"Liberator of the Americas"},
        {name:"Rómulo Gallegos",hint:"Writer and first democratically elected president.",context:"writer and president"},
        {name:"Hugo Chávez",hint:"Socialist president 1999–2013, builder of the Bolivarian revolution.",context:"socialist leader"}
      ],
      cities:["Caracas","Maracaibo","Valencia","Barquisimeto"]
    }
  },
  {
    code:"CU", flag:"🇨🇺", continent:"america",
    population:11200000, capitalPop:2100000,
    cs:{
      name:"Kuba",
      knownFor:"je domovem kubánské revoluce, klasických amerických automobilů a světoznámých doutníků.",
      capital:{name:"Havana", icons:"🚗 🎺 🌴", clue:"Barevné karibské město s oldtimery, salsou a Malecónem."},
      sport:{name:"Baseball",team:"Industriales"},
      language:"Španělština",
      government:"Socialistická republika",
      currency:"Kubánské peso (CUP)",
      resources:["cukrová třtina","nikl","tabák"],
      personalities:[
        {name:"Fidel Castro",hint:"Vůdce kubánské revoluce a premier/prezident 1959–2008.",context:"revoluční vůdce"},
        {name:"Che Guevara",hint:"Revoluční symbol argentinsko-kubánské revoluce.",context:"revoluční ikona"},
        {name:"José Martí",hint:"Básník a národní hrdina, otec kubánské nezávislosti.",context:"národní hrdina"}
      ],
      cities:["Havana","Santiago de Cuba","Camagüey","Holguín"]
    },
    en:{
      name:"Cuba",
      knownFor:"is home to the Cuban Revolution, classic American cars and world-famous cigars.",
      capital:{name:"Havana", icons:"🚗 🎺 🌴", clue:"Colourful Caribbean city of vintage cars, salsa and the Malecón."},
      sport:{name:"Baseball",team:"Industriales"},
      language:"Spanish",
      government:"Socialist Republic",
      currency:"Cuban Peso (CUP)",
      resources:["sugarcane","nickel","tobacco"],
      personalities:[
        {name:"Fidel Castro",hint:"Leader of the Cuban Revolution, premier/president 1959–2008.",context:"revolutionary leader"},
        {name:"Che Guevara",hint:"Revolutionary symbol of the Argentine-Cuban revolution.",context:"revolutionary icon"},
        {name:"José Martí",hint:"Poet and national hero, father of Cuban independence.",context:"national hero"}
      ],
      cities:["Havana","Santiago de Cuba","Camagüey","Holguín"]
    }
  },
  {
    code:"EC", flag:"🇪🇨", continent:"america",
    population:18000000, capitalPop:1800000,
    cs:{
      name:"Ekvádor",
      knownFor:"byl pojmenován podle rovníku, má Galapágy a je největším vývozcem banánů na světě.",
      capital:{name:"Quito", icons:"🏔️ 🍌 🐢", clue:"Nejvýše položené hlavní město Jižní Ameriky v nadmořské výšce 2850 m."},
      sport:{name:"Fotbal",team:"Barcelona SC"},
      language:"Španělština",
      government:"Prezidentská republika",
      currency:"Americký dolar (USD)",
      resources:["ropa","banány","kakao"],
      personalities:[
        {name:"Simón Bolívar",hint:"Osvoboditel sdílený s Venezuelou a Kolumbií.",context:"osvoboditel"},
        {name:"Oswaldo Guayasamín",hint:"Malíř indigenistického umění, symbol latinskoamerické kultury.",context:"malíř"},
        {name:"Antonio José de Sucre",hint:"Vojevůdce, který zvítězil v bitvě u Pichincha a osvobodil Ekvádor.",context:"vojenský hrdina"}
      ],
      cities:["Quito","Guayaquil","Cuenca","Santo Domingo"]
    },
    en:{
      name:"Ecuador",
      knownFor:"is named after the equator, has the Galápagos Islands and is the world's largest banana exporter.",
      capital:{name:"Quito", icons:"🏔️ 🍌 🐢", clue:"South America's highest capital at 2,850m above sea level."},
      sport:{name:"Football",team:"Barcelona SC"},
      language:"Spanish",
      government:"Presidential Republic",
      currency:"US Dollar (USD)",
      resources:["oil","bananas","cocoa"],
      personalities:[
        {name:"Simón Bolívar",hint:"Liberator shared with Venezuela and Colombia.",context:"liberator"},
        {name:"Oswaldo Guayasamín",hint:"Indigenist art painter, symbol of Latin American culture.",context:"painter"},
        {name:"Antonio José de Sucre",hint:"Military leader who won the Battle of Pichincha and liberated Ecuador.",context:"military hero"}
      ],
      cities:["Quito","Guayaquil","Cuenca","Santo Domingo"]
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OCEANIA — additional countries
  // ══════════════════════════════════════════════════════════════════════════
  {
    code:"PG", flag:"🇵🇬", continent:"oceania",
    population:10300000, capitalPop:400000,
    cs:{
      name:"Papua Nová Guinea",
      knownFor:"je jednou z nejrůznorodějších zemí světa s více než 800 jazyky.",
      capital:{name:"Port Moresby", icons:"🌿 🦜 ⛏️", clue:"Pacifické pobřežní hlavní město na jihovýchodním cípu ostrova."},
      sport:{name:"Rugby League",team:"Papua New Guinea Hunters"},
      language:"Tok Pisin, angličtina a hiri motu",
      government:"Parlamentní konstituční monarchie",
      currency:"Kina (PGK)",
      resources:["zlato","měď","zemní plyn"],
      personalities:[
        {name:"Michael Somare",hint:"Otec národa, první premiér po nezávislosti 1975.",context:"zakladatel státu"},
        {name:"Peter O'Neill",hint:"Dlouhodobý premiér a ekonomický reformátor.",context:"premiér"},
        {name:"Kina Uranò",hint:"Symbol domorodé kultury a umění papuánských kmenů.",context:"kulturní symbol"}
      ],
      cities:["Port Moresby","Lae","Mount Hagen","Madang"]
    },
    en:{
      name:"Papua New Guinea",
      knownFor:"is one of the world's most diverse countries with over 800 languages.",
      capital:{name:"Port Moresby", icons:"🌿 🦜 ⛏️", clue:"Pacific coastal capital on the southeastern tip of the island."},
      sport:{name:"Rugby League",team:"Papua New Guinea Hunters"},
      language:"Tok Pisin, English and Hiri Motu",
      government:"Parliamentary Constitutional Monarchy",
      currency:"Kina (PGK)",
      resources:["gold","copper","natural gas"],
      personalities:[
        {name:"Michael Somare",hint:"Father of the nation, first Prime Minister after independence in 1975.",context:"founding father"},
        {name:"Peter O'Neill",hint:"Long-serving Prime Minister and economic reformer.",context:"prime minister"},
        {name:"Grand Chief Sir Michael Somare",hint:"Most revered national figure in PNG history.",context:"national hero"}
      ],
      cities:["Port Moresby","Lae","Mount Hagen","Madang"]
    }
  },
  {
    code:"FJ", flag:"🇫🇯", continent:"oceania",
    population:930000, capitalPop:88000,
    cs:{
      name:"Fidži",
      knownFor:"je souostroví 330 ostrovů, turistický ráj v Tichém oceánu.",
      capital:{name:"Suva", icons:"🏝️ 🌊 🌺", clue:"Největší město Fidži na jihozápadním pobřeží ostrova Viti Levu."},
      sport:{name:"Rugby sevens",team:"Fidži reprezentace"},
      language:"Angličtina, fidžijština a hindština",
      government:"Parlamentní republika",
      currency:"Fidžijský dolar (FJD)",
      resources:["cukrová třtina","cestovní ruch","rybolov"],
      personalities:[
        {name:"Sitiveni Rabuka",hint:"Vojenský vůdce, který dvakrát provedl převrat v 1987.",context:"vojenský vůdce"},
        {name:"Ratu Sir Lala Sukuna",hint:"Koloniální šlechtický vůdce, klíčová postava moderní fidžijské společnosti.",context:"tradičnní vůdce"},
        {name:"Nemani Nadolo",hint:"Ragbyový hráč, jeden z nejznámějších fidžijských sportovců.",context:"ragbista"}
      ],
      cities:["Suva","Nadi","Lautoka","Labasa"]
    },
    en:{
      name:"Fiji",
      knownFor:"is an archipelago of 330 islands, a tourist paradise in the Pacific Ocean.",
      capital:{name:"Suva", icons:"🏝️ 🌊 🌺", clue:"Fiji's largest city on the southwestern coast of Viti Levu."},
      sport:{name:"Rugby Sevens",team:"Fiji National Team"},
      language:"English, Fijian and Hindi",
      government:"Parliamentary Republic",
      currency:"Fijian Dollar (FJD)",
      resources:["sugarcane","tourism","fishing"],
      personalities:[
        {name:"Sitiveni Rabuka",hint:"Military leader who staged two coups in 1987.",context:"military leader"},
        {name:"Ratu Sir Lala Sukuna",hint:"Colonial noble leader, key figure of modern Fijian society.",context:"traditional leader"},
        {name:"Nemani Nadolo",hint:"Rugby player, one of Fiji's most recognised athletes.",context:"rugby player"}
      ],
      cities:["Suva","Nadi","Lautoka","Labasa"]
    }
  },
  {
    code:"WS", flag:"🇼🇸", continent:"oceania",
    population:220000, capitalPop:36000,
    cs:{
      name:"Samoa",
      knownFor:"bylo prvním tichomořským ostrovním státem, který získal nezávislost.",
      capital:{name:"Apia", icons:"🌺 🌊 🌴", clue:"Malé hlavní město na severním pobřeží ostrova Upolu."},
      sport:{name:"Rugby union",team:"Samoa representace"},
      language:"Samojština a angličtina",
      government:"Parlamentní republika",
      currency:"Samojský tala (WST)",
      resources:["kokos","rybolov","cestovní ruch"],
      personalities:[
        {name:"Robert Louis Stevenson",hint:"Skotský spisovatel, autor Ostrova pokladů, zemřel v Samoa.",context:"spisovatel"},
        {name:"Va'aiga Tuigamala",hint:"Ragbyový hráč a americký fotbalista.",context:"sportovce"},
        {name:"Fiamē Naomi Mataʻafa",hint:"Premiérka, první žena v čele státu Samoa.",context:"první premiérka"}
      ],
      cities:["Apia","Salelologa","Mulifanua","Faleasiu"]
    },
    en:{
      name:"Samoa",
      knownFor:"was the first Pacific island state to gain independence.",
      capital:{name:"Apia", icons:"🌺 🌊 🌴", clue:"Small capital on the northern coast of the island of Upolu."},
      sport:{name:"Rugby Union",team:"Samoa National Team"},
      language:"Samoan and English",
      government:"Parliamentary Republic",
      currency:"Samoan Tālā (WST)",
      resources:["coconut","fishing","tourism"],
      personalities:[
        {name:"Robert Louis Stevenson",hint:"Scottish author of Treasure Island, who died in Samoa.",context:"author"},
        {name:"Va'aiga Tuigamala",hint:"Rugby player and American football player.",context:"sportsperson"},
        {name:"Fiamē Naomi Mataʻafa",hint:"Prime Minister, first woman to lead the state of Samoa.",context:"first female PM"}
      ],
      cities:["Apia","Salelologa","Mulifanua","Faleasiu"]
    }
  }
];

// ── Landmarks — 10 per country ──────────────────────────────────────────────
// img: Wikimedia Commons direct URL (public domain / CC)
// built: year construction started, finished: year completed
const LANDMARKS = {
  CZ:[
    {name:"Pražský hrad",              en:"Prague Castle",built:870,finished:1929,pxq:"Prague Castle hradcany",wiki:"Prague_Castle",img:"https://images.unsplash.com/photo-1541849546-216549ae216d?w=480&q=80&auto=format&fit=crop"},
    {name:"Karlův most",               en:"Charles Bridge",built:1357,finished:1402,pxq:"Charles Bridge Prague",wiki:"Charles_Bridge",img:"https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Staroměstský orloj",        en:"Prague Astronomical Clock",built:1410,finished:1490,pxq:"Prague astronomical clock orloj",wiki:"Prague_astronomical_clock",img:"https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=480&q=80&auto=format&fit=crop"},
    {name:"Katedrála sv. Víta",        en:"St. Vitus Cathedral",built:1344,finished:1929,pxq:"St Vitus Cathedral Prague",wiki:"St._Vitus_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Lednicko-valtický areál",   en:"Lednice–Valtice Cultural Landscape",built:1219,finished:1858,pxq:"Lednice chateau garden Czech",wiki:"Lednice%E2%80%93Valtice_Cultural_Landscape",img:"https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=480&q=80&auto=format&fit=crop"},
    {name:"Kutná Hora — kostel sv. Barbory", en:"St. Barbara's Church Kutná Hora",built:1388,finished:1905,pxq:"Kutna Hora cathedral Czech Republic Gothic",wiki:"Cathedral_of_Saint_Barbara,_Kutná_Hora",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Hrad Karlštejn",            en:"Karlštejn Castle",built:1348,finished:1365,pxq:"Karlstejn Castle czech",wiki:"Karlštejn_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Telč — historické centrum", en:"Historic Centre of Telč",built:1530,finished:1560,pxq:"Telc Czech Republic Renaissance square",wiki:"Telč",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Třebíčská bazilika",        en:"Třebíč Basilica",built:1101,finished:1240,pxq:"Trebic basilica Czech Republic UNESCO",wiki:"Třebíč_Basilica",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Kroměřížský zámek",         en:"Kroměříž Chateau",built:1686,finished:1752,pxq:"Kromeriz chateau garden Czech Republic",wiki:"Kroměříž_Castle",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  DE:[
    {name:"Braniborská brána",         en:"Brandenburg Gate",built:1788,finished:1791,pxq:"Brandenburg Gate Berlin",wiki:"Brandenburg_Gate",img:"https://images.unsplash.com/photo-1560969184-10fe8719e047?w=480&q=80&auto=format&fit=crop"},
    {name:"Norimberský hrad",          en:"Nuremberg Castle",built:1050,finished:1571,pxq:"Nuremberg castle Germany medieval",wiki:"Nuremberg_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Kolínský dóm",              en:"Cologne Cathedral",built:1248,finished:1880,pxq:"Cologne Cathedral Germany",wiki:"Cologne_Cathedral",img:"https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=480&q=80&auto=format&fit=crop"},
    {name:"Neuschwanstein",            en:"Neuschwanstein Castle",built:1869,finished:1892,pxq:"Neuschwanstein Castle Bavaria",wiki:"Neuschwanstein_Castle",img:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=480&q=80&auto=format&fit=crop"},
    {name:"Berlínská zeď — Memorial", en:"Berlin Wall Memorial",built:1961,finished:1961,pxq:"Berlin Wall memorial Germany",wiki:"Berlin_Wall_Memorial",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Říšský sněm (Reichstag)",   en:"Reichstag Building",built:1884,finished:1999,pxq:"Reichstag Berlin parliament",wiki:"Reichstag_building",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Heidelberský zámek",        en:"Heidelberg Castle",built:1214,finished:1764,pxq:"Heidelberg castle Germany ruin",wiki:"Heidelberg_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Sanssouci",                 en:"Sanssouci Palace",built:1745,finished:1747,pxq:"Sanssouci palace Potsdam Germany rococo",wiki:"Sanssouci",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Wartburg",                  en:"Wartburg Castle",built:1067,finished:1080,pxq:"Wartburg castle Germany Thuringia",wiki:"Wartburg_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Drážďanská opera",          en:"Dresden Semperoper",built:1838,finished:1878,pxq:"Dresden Semperoper opera house Germany baroque",wiki:"Semperoper",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  FR:[
    {name:"Eiffelova věž",             en:"Eiffel Tower",built:1887,finished:1889,pxq:"Eiffel Tower Paris",wiki:"Eiffel_Tower",img:"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=480&q=80&auto=format&fit=crop"},
    {name:"Louvre",                    en:"Louvre Museum",built:1190,finished:1989,pxq:"Louvre Museum Paris",wiki:"Louvre",img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=480&q=80&auto=format&fit=crop"},
    {name:"Notre-Dame de Paris",       en:"Notre-Dame de Paris",built:1163,finished:1345,pxq:"Notre Dame Cathedral Paris",wiki:"Notre-Dame_de_Paris",img:"https://images.unsplash.com/photo-1530097811955-fca5cee4d246?w=480&q=80&auto=format&fit=crop"},
    {name:"Versailleský palác",        en:"Palace of Versailles",built:1661,finished:1710,pxq:"Palace Versailles France",wiki:"Palace_of_Versailles",img:"https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=480&q=80&auto=format&fit=crop"},
    {name:"Mont Saint-Michel",         en:"Mont Saint-Michel",built:709,finished:1523,pxq:"Mont Saint Michel France",wiki:"Mont-Saint-Michel",img:"https://images.unsplash.com/photo-1568438350562-2cae6d394ad0?w=480&q=80&auto=format&fit=crop"},
    {name:"Sacré-Cœur",               en:"Sacré-Cœur Basilica",built:1875,finished:1914,pxq:"Sacre Coeur basilica Paris Montmartre",wiki:"Sacré-Cœur,_Paris",img:"https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=480&q=80&auto=format&fit=crop"},
    {name:"Pont du Gard",              en:"Pont du Gard",built:40,finished:60,pxq:"Pont du Gard aqueduct Roman France",wiki:"Pont_du_Gard",img:"https://images.unsplash.com/photo-1559181567-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
    {name:"Carcassonne",               en:"Carcassonne Citadel",built:100,finished:1285,pxq:"Carcassonne medieval citadel France walls",wiki:"Carcassonne",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Palais des Papes",          en:"Palace of the Popes",built:1335,finished:1364,pxq:"Palace of Popes Avignon France medieval",wiki:"Palace_of_the_Popes",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Triomfální oblouk",         en:"Arc de Triomphe",built:1806,finished:1836,pxq:"Arc de Triomphe Paris",wiki:"Arc_de_Triomphe",img:"https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=480&q=80&auto=format&fit=crop"},
  ],
  IT:[
    {name:"Koloseum",                  en:"Colosseum",built:70,finished:80,pxq:"Colosseum Rome Italy",wiki:"Colosseum",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Šikmá věž v Pise",          en:"Leaning Tower of Pisa",built:1173,finished:1372,pxq:"Leaning Tower Pisa Italy",wiki:"Leaning_Tower_of_Pisa",img:"https://images.unsplash.com/photo-1541370976299-4d24be63e9d7?w=480&q=80&auto=format&fit=crop"},
    {name:"Benátky — Grand Canal",     en:"Venice Grand Canal",built:421,finished:1500,pxq:"Venice Grand Canal gondola",wiki:"Grand_Canal_(Venice)",img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=480&q=80&auto=format&fit=crop"},
    {name:"Pantheon",                  en:"Pantheon Rome",built:27,finished:125,pxq:"Pantheon Rome ancient temple Italy",wiki:"Pantheon,_Rome",img:"https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=480&q=80&auto=format&fit=crop"},
    {name:"Sixtinská kaple",           en:"Sistine Chapel",built:1473,finished:1481,pxq:"Vatican Rome church ceiling",wiki:"Sistine_Chapel",img:"https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=480&q=80&auto=format&fit=crop"},
    {name:"Bazilika sv. Petra",        en:"St. Peter's Basilica",built:1506,finished:1626,pxq:"St Peters Basilica Vatican Rome",wiki:"St._Peter%27s_Basilica",img:"https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=480&q=80&auto=format&fit=crop"},
    {name:"Trevi fontána",             en:"Trevi Fountain",built:1732,finished:1762,pxq:"Trevi Fountain Rome",wiki:"Trevi_Fountain",img:"https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=480&q=80&auto=format&fit=crop"},
    {name:"Pompeje",                   en:"Pompeii",built:-600,finished:-79,pxq:"Pompeii ruins Italy",wiki:"Pompeii",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Palác Dóžat",               en:"Doge's Palace",built:810,finished:1424,pxq:"Doge Palace Venice Italy Gothic",wiki:"Doge%27s_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Matera — Sassi",            en:"Sassi di Matera",built:-7000,finished:700,pxq:"Sassi Matera cave dwellings Italy",wiki:"Sassi_di_Matera",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  ES:[
    {name:"Sagrada Família",           en:"Sagrada Família",built:1882,finished:2026,pxq:"Sagrada Familia Barcelona",wiki:"Sagrada_Família",img:"https://images.unsplash.com/photo-1583779457090-9f8b67ade4d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Alhambra",                  en:"Alhambra",built:889,finished:1354,pxq:"Alhambra Granada Spain",wiki:"Alhambra",img:"https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=480&q=80&auto=format&fit=crop"},
    {name:"Královský palác Madrid",    en:"Royal Palace of Madrid",built:1738,finished:1764,pxq:"Royal Palace Madrid Spain baroque",wiki:"Royal_Palace_of_Madrid",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Park Güell",                en:"Park Güell",built:1900,finished:1914,pxq:"Park Guell Barcelona",wiki:"Park_Güell",img:"https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=480&q=80&auto=format&fit=crop"},
    {name:"Katedrála v Seville",       en:"Seville Cathedral",built:1402,finished:1506,pxq:"Seville Cathedral Spain Gothic Giralda",wiki:"Seville_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Mesquita de Córdoba",       en:"Mosque-Cathedral of Córdoba",built:784,finished:987,pxq:"Mezquita Cordoba Spain",wiki:"Mosque%E2%80%93Cathedral_of_Córdoba",img:"https://images.unsplash.com/photo-1564769625905-50e93615e769?w=480&q=80&auto=format&fit=crop"},
    {name:"Guggenheim Bilbao",         en:"Guggenheim Museum Bilbao",built:1993,finished:1997,pxq:"Guggenheim Museum Bilbao",wiki:"Guggenheim_Museum_Bilbao",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Aqueduct of Segovia",       en:"Aqueduct of Segovia",built:50,finished:98,pxq:"Aqueduct Segovia Roman Spain",wiki:"Aqueduct_of_Segovia",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"El Escorial",               en:"El Escorial",built:1563,finished:1584,pxq:"El Escorial monastery Spain royal",wiki:"El_Escorial",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Montserrat klášter",        en:"Montserrat Monastery",built:1025,finished:1592,pxq:"Montserrat monastery Catalonia Spain mountain",wiki:"Montserrat_monastery",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  JP:[
    {name:"Chrám Fushimi Inari",       en:"Fushimi Inari Shrine",built:711,finished:816,pxq:"Fushimi Inari torii gates Kyoto",wiki:"Fushimi_Inari-taisha",img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&q=80&auto=format&fit=crop"},
    {name:"Hora Fudži",                en:"Mount Fuji",built:-999,finished:-999,pxq:"Mount Fuji Japan",wiki:"Mount_Fuji",img:"https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=480&q=80&auto=format&fit=crop"},
    {name:"Chrám Kinkaku-ji",          en:"Kinkaku-ji Temple",built:1397,finished:1955,pxq:"Kinkakuji golden pavilion Kyoto",wiki:"Kinkaku-ji",img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&q=80&auto=format&fit=crop"},
    {name:"Hirošima — Genbaku Dome",   en:"Hiroshima Peace Memorial",built:1915,finished:1915,pxq:"Hiroshima Peace Memorial atomic bomb dome Japan",wiki:"Hiroshima_Peace_Memorial",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tokio — Skytree",           en:"Tokyo Skytree",built:2008,finished:2012,pxq:"Tokyo Skytree tower Japan",wiki:"Tokyo_Skytree",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
    {name:"Chrám Senso-ji",            en:"Senso-ji Temple",built:645,finished:645,pxq:"Senso-ji temple Asakusa Tokyo",wiki:"Senso-ji",img:"https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=480&q=80&auto=format&fit=crop"},
    {name:"Hrad Himeji",               en:"Himeji Castle",built:1333,finished:1609,pxq:"Himeji Castle Japan",wiki:"Himeji_Castle",img:"https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?w=480&q=80&auto=format&fit=crop"},
    {name:"Itsukushima — torii",       en:"Itsukushima Shrine Torii",built:593,finished:1168,pxq:"Itsukushima shrine torii gate water",wiki:"Itsukushima_Shrine",img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&q=80&auto=format&fit=crop"},
    {name:"Nara — Tōdai-ji",           en:"Tōdai-ji Temple Nara",built:728,finished:752,pxq:"Todaiji temple Nara Japan Great Buddha deer",wiki:"Tōdai-ji",img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&q=80&auto=format&fit=crop"},
    {name:"Tokijský palác",            en:"Tokyo Imperial Palace",built:1457,finished:1968,pxq:"Tokyo Imperial Palace Japan garden moat",wiki:"Tokyo_Imperial_Palace",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
  ],
  IN:[
    {name:"Tádž Mahal",               en:"Taj Mahal",built:1632,finished:1653,pxq:"Taj Mahal Agra India",wiki:"Taj_Mahal",img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=480&q=80&auto=format&fit=crop"},
    {name:"Qutb Minar",               en:"Qutb Minar",built:1193,finished:1386,pxq:"Qutb Minar Delhi Islamic tower India",wiki:"Qutb_Minar",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Amritsar — Zlatý chrám",   en:"Golden Temple Amritsar",built:1581,finished:1604,pxq:"Golden Temple Amritsar Sikh",wiki:"Golden_Temple",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Hrad Červená pevnost",     en:"Red Fort Delhi",built:1638,finished:1648,pxq:"Red Fort Delhi India",wiki:"Red_Fort",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Chrám Slunce Konárak",     en:"Konark Sun Temple",built:1250,finished:1264,pxq:"Konark Sun Temple India chariot stone",wiki:"Konark_Sun_Temple",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Jaipur — Hawa Mahal",      en:"Hawa Mahal Jaipur",built:1799,finished:1799,pxq:"Hawa Mahal Jaipur pink palace",wiki:"Hawa_Mahal",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Hampi — ruiny",            en:"Hampi Ruins",built:1336,finished:1565,pxq:"Hampi ruins Karnataka India Vijayanagara",wiki:"Hampi",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Jeskynní chrámy Ajanta",   en:"Ajanta Caves",built:-200,finished:480,pxq:"Ajanta caves India Buddhist murals",wiki:"Ajanta_Caves",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Mysuru — palác Amba Vilas",en:"Mysore Palace",built:1897,finished:1912,pxq:"Mysore Palace India",wiki:"Mysore_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"India Gate",               en:"India Gate",built:1921,finished:1931,pxq:"India Gate New Delhi war memorial",wiki:"India_Gate",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  CN:[
    {name:"Velká čínská zeď",          en:"Great Wall of China",built:-700,finished:1644,pxq:"Great Wall China mountains",wiki:"Great_Wall_of_China",img:"https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=480&q=80&auto=format&fit=crop"},
    {name:"Zakázané město",            en:"Forbidden City",built:1406,finished:1420,pxq:"Forbidden City Beijing palace",wiki:"Forbidden_City",img:"https://images.unsplash.com/photo-1584450150050-b15a7a4e5b9c?w=480&q=80&auto=format&fit=crop"},
    {name:"Terakotová armáda",         en:"Terracotta Army",built:-246,finished:-208,pxq:"Terracotta warriors Xian China",wiki:"Terracotta_Army",img:"https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=480&q=80&auto=format&fit=crop"},
    {name:"Letní palác Peking",        en:"Summer Palace Beijing",built:1750,finished:1764,pxq:"Summer Palace Beijing China lake pavilion",wiki:"Summer_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Pekinský olimpijský stadion",en:"Beijing National Stadium",built:2003,finished:2008,pxq:"Beijing Birds Nest stadium Olympic",wiki:"Beijing_National_Stadium",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Potala palác Lhasa",        en:"Potala Palace Lhasa",built:637,finished:1694,pxq:"Potala Palace Lhasa Tibet",wiki:"Potala_Palace",img:"https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=480&q=80&auto=format&fit=crop"},
    {name:"Machu Picchu — obdoba Huangshan", en:"Yellow Mountain Huangshan",built:-999,finished:-999,pxq:"Huangshan yellow mountain China pine mist",wiki:"Huangshan",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Šanghajská věž",            en:"Shanghai Tower",built:2008,finished:2015,pxq:"Shanghai Tower",wiki:"Shanghai_Tower",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
    {name:"Jeskynní chrámy Yungang",   en:"Yungang Grottoes",built:460,finished:525,pxq:"Yungang Grottoes Buddha China stone carving",wiki:"Yungang_Grottoes",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tianmen — náměstí Peking",  en:"Tiananmen Square",built:1415,finished:1420,pxq:"Tiananmen Square Beijing China gate",wiki:"Tiananmen_Square",img:"https://images.unsplash.com/photo-1584450150050-b15a7a4e5b9c?w=480&q=80&auto=format&fit=crop"},
  ],
  US:[
    {name:"Socha Svobody",             en:"Statue of Liberty",built:1875,finished:1886,pxq:"Statue of Liberty New York",wiki:"Statue_of_Liberty",img:"https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=480&q=80&auto=format&fit=crop"},
    {name:"Golden Gate Bridge",        en:"Golden Gate Bridge",built:1933,finished:1937,pxq:"Golden Gate Bridge San Francisco",wiki:"Golden_Gate_Bridge",img:"https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=480&q=80&auto=format&fit=crop"},
    {name:"Mount Rushmore",            en:"Mount Rushmore",built:1927,finished:1941,pxq:"Mount Rushmore presidents",wiki:"Mount_Rushmore",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80&auto=format&fit=crop"},
    {name:"Capitol Washington",        en:"United States Capitol",built:1793,finished:1800,pxq:"US Capitol Washington DC",wiki:"United_States_Capitol",img:"https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=480&q=80&auto=format&fit=crop"},
    {name:"Empire State Building",     en:"Empire State Building",built:1930,finished:1931,pxq:"Empire State Building New York",wiki:"Empire_State_Building",img:"https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=480&q=80&auto=format&fit=crop"},
    {name:"Bílý dům",                  en:"The White House",built:1792,finished:1800,pxq:"White House Washington DC",wiki:"White_House",img:"https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=480&q=80&auto=format&fit=crop"},
    {name:"Grand Canyon",              en:"Grand Canyon",built:-999,finished:-999,pxq:"Grand Canyon Arizona USA",wiki:"Grand_Canyon",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=480&q=80&auto=format&fit=crop"},
    {name:"Lincoln Memorial",          en:"Lincoln Memorial",built:1914,finished:1922,pxq:"Lincoln Memorial Washington DC USA reflecting pool",wiki:"Lincoln_Memorial",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Chrysler Building",         en:"Chrysler Building",built:1928,finished:1930,pxq:"Chrysler Building New York Art Deco skyscraper",wiki:"Chrysler_Building",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"One World Trade Center",    en:"One World Trade Center",built:2006,finished:2014,pxq:"One World Trade Center New York Freedom Tower",wiki:"One_World_Trade_Center",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  BR:[
    {name:"Kristus Vykupitel",         en:"Christ the Redeemer",built:1922,finished:1931,pxq:"Christ Redeemer Rio de Janeiro",wiki:"Christ_the_Redeemer_(statue)",img:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=480&q=80&auto=format&fit=crop"},
    {name:"Iguazú — vodopády",         en:"Iguazu Falls",built:-999,finished:-999,pxq:"Iguazu Falls waterfall Brazil",wiki:"Iguazu_Falls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Stadión Maracanã",          en:"Maracanã Stadium",built:1948,finished:1950,pxq:"Maracana stadium Rio de Janeiro Brazil football",wiki:"Estádio_do_Maracanã",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Pelourinho Salvador",       en:"Pelourinho Salvador",       built:1549, finished:1700, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Teatro Amazonas Manaus",    en:"Amazon Theatre Manaus",     built:1884, finished:1896, img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Pão de Açúcar — hora",      en:"Sugarloaf Mountain",built:-999,finished:-999,pxq:"Sugarloaf Mountain Rio",wiki:"Sugarloaf_Mountain",img:"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=480&q=80&auto=format&fit=crop"},
    {name:"Kongresový palác Brasília", en:"Brazilian National Congress",built:1958,finished:1960,pxq:"National Congress Brasilia Brazil Niemeyer", img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Catedral Brasília",         en:"Brasília Cathedral",        built:1958, finished:1970, img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Inhotim muzeum",            en:"Inhotim Museum",            built:2006, finished:2006, img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Mosteiro São Bento",        en:"São Bento Monastery",       built:1598, finished:1641, img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  AU:[
    {name:"Opera v Sydney",            en:"Sydney Opera House",built:1959,finished:1973,pxq:"Sydney Opera House harbour",wiki:"Sydney_Opera_House",img:"https://images.unsplash.com/photo-1523059623039-a9ed027b7fad?w=480&q=80&auto=format&fit=crop"},
    {name:"Uluru (Ayers Rock)",        en:"Uluru (Ayers Rock)",built:-999,finished:-999,pxq:"Uluru Ayers Rock outback",wiki:"Uluru",img:"https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=480&q=80&auto=format&fit=crop"},
    {name:"Harbour Bridge Sydney",     en:"Sydney Harbour Bridge",built:1923,finished:1932,pxq:"Sydney Harbour Bridge Australia arch",wiki:"Sydney_Harbour_Bridge",img:"https://images.unsplash.com/photo-1523059623039-a9ed027b7fad?w=480&q=80&auto=format&fit=crop"},
    {name:"Velký bariérový útes",      en:"Great Barrier Reef",built:-999,finished:-999,pxq:"Great Barrier Reef coral underwater",wiki:"Great_Barrier_Reef",img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=480&q=80&auto=format&fit=crop"},
    {name:"Parliament House Canberra", en:"Parliament House Canberra", built:1981, finished:1988, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Twelve Apostles Victoria",  en:"Twelve Apostles",           built:-999, finished:-999, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Melbourne Federation Square",en:"Federation Square Melbourne",built:1997,finished:2002,pxq:"Federation Square Melbourne Australia",wiki:"Federation_Square",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Kakadu National Park",      en:"Kakadu National Park",      built:-999, finished:-999, img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Royal Exhibition Building", en:"Royal Exhibition Building", built:1879, finished:1880, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Fremantle Prison",          en:"Fremantle Prison",          built:1851, finished:1859, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  EG:[
    {name:"Pyramidy v Gíze",           en:"Pyramids of Giza",built:-2580,finished:-2560,pxq:"Pyramids Giza Egypt desert",wiki:"Giza_pyramid_complex",img:"https://images.unsplash.com/photo-1539650116574-75f0f07c8b17?w=480&q=80&auto=format&fit=crop"},
    {name:"Sfinga v Gíze",             en:"Great Sphinx of Giza",built:-2558,finished:-2532,pxq:"Sphinx Giza Egypt",wiki:"Great_Sphinx_of_Giza",img:"https://images.unsplash.com/photo-1539650116574-75f0f07c8b17?w=480&q=80&auto=format&fit=crop"},
    {name:"Chrám Abu Simbel",          en:"Abu Simbel Temples",built:-1264,finished:-1244,pxq:"Abu Simbel temple Egypt",wiki:"Abu_Simbel_temples",img:"https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=480&q=80&auto=format&fit=crop"},
    {name:"Mešita Ibn Tuluna Káhira",  en:"Ibn Tulun Mosque Cairo",    built:876,  finished:879,  img:"https://images.unsplash.com/photo-1564769625905-50e93615e769?w=480&q=80&auto=format&fit=crop"},
    {name:"Karnak — chrámový komplex", en:"Karnak Temple Complex",built:-2055,finished:-30,pxq:"Karnak temple Luxor Egypt",wiki:"Karnak",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Alexandrijský maják (Citadela Qaitbay)",en:"Citadel of Qaitbay",built:1477,finished:1479,pxq:"Citadel of Qaitbay",wiki:"Citadel_of_Qaitbay",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Chrám Philae",              en:"Philae Temple",             built:-370, finished:-47,  img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Egyptské muzeum Káhira",    en:"Egyptian Museum Cairo",     built:1897, finished:1902, img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Asuánská přehrada",         en:"Aswan High Dam",            built:1960, finished:1970, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Suezský průplav — Canal",   en:"Suez Canal",                built:1859, finished:1869, img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=480&q=80&auto=format&fit=crop"},
  ],
  ZA:[
    {name:"Stolová hora Kapské Město",  en:"Table Mountain Cape Town",built:-999,finished:-999,pxq:"Table Mountain Cape Town",wiki:"Table_Mountain",img:"https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=480&q=80&auto=format&fit=crop"},
    {name:"Robben Island",              en:"Robben Island",built:1652,finished:1996,pxq:"Robben Island South Africa Mandela prison",wiki:"Robben_Island",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Johannesburg — Sandton City",en:"Sandton City Johannesburg",  built:1973, finished:1973, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Hrad Dobré naděje",          en:"Castle of Good Hope",        built:1666, finished:1679, img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Kruger National Park",       en:"Kruger National Park",built:1898,finished:1926,pxq:"Kruger National Park safari lion",wiki:"Kruger_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Bloubergstrand — pohled",    en:"Boulders Beach Penguins",    built:-999, finished:-999, img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Apartheid muzeum",           en:"Apartheid Museum",           built:1999, finished:2001, img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Drakensberg",                en:"Drakensberg Mountains",      built:-999, finished:-999, img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Stellenbosch vinařství",     en:"Stellenbosch Vineyards",     built:1679, finished:1679, img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Voortrekker Monument",       en:"Voortrekker Monument",       built:1938, finished:1949, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  AR:[
    {name:"Iguazú — vodopády",         en:"Iguazu Falls Argentina",built:-999,finished:-999,pxq:"Iguazu Falls Argentina waterfall",wiki:"Iguazu_Falls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Obelisco Buenos Aires",     en:"Obelisco Buenos Aires",built:1936,finished:1936,pxq:"Obelisco Buenos Aires Argentina",wiki:"Obelisco_de_Buenos_Aires",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Perito Moreno ledovec",     en:"Perito Moreno Glacier",built:-999,finished:-999,pxq:"Perito Moreno glacier Argentina",wiki:"Perito_Moreno_Glacier",img:"https://images.unsplash.com/photo-1589307360545-a5a0dd60e3ee?w=480&q=80&auto=format&fit=crop"},
    {name:"Teatro Colón Buenos Aires", en:"Teatro Colón",built:1889,finished:1908,pxq:"Teatro Colón",wiki:"Teatro_Colón",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"La Boca — El Caminito",     en:"El Caminito Buenos Aires",  built:1959, finished:1959, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Aconcagua",                 en:"Aconcagua",                 built:-999, finished:-999, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Ushuaia — konec světa",     en:"Ushuaia End of the World",  built:1884, finished:1884, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Salta Cathedral",           en:"Salta Cathedral",           built:1582, finished:1882, img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Puerto Madryn — velryby",   en:"Puerto Madryn Peninsula Valdés",built:-999,finished:-999,pxq:"Puerto Madryn Peninsula Valdés",wiki:"Valdés_Peninsula",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Quebrada de Humahuaca",     en:"Quebrada de Humahuaca",     built:-999, finished:-999, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  CA:[
    {name:"Niagarské vodopády",        en:"Niagara Falls",built:-999,finished:-999,pxq:"Niagara Falls",wiki:"Niagara_Falls",img:"https://images.unsplash.com/photo-1489447068241-b3490214e879?w=480&q=80&auto=format&fit=crop"},
    {name:"CN Tower Toronto",          en:"CN Tower Toronto",built:1973,finished:1976,pxq:"CN Tower Toronto",wiki:"CN_Tower",img:"https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=480&q=80&auto=format&fit=crop"},
    {name:"Parlamentní budova Ottawa", en:"Parliament Hill Ottawa",    built:1859, finished:1866, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Banff National Park",       en:"Banff National Park",built:1885,finished:1885,pxq:"Banff National Park",wiki:"Banff_National_Park",img:"https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=480&q=80&auto=format&fit=crop"},
    {name:"Old Quebec City",           en:"Old Quebec City",           built:1608, finished:1759, img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Chateau Frontenac",         en:"Château Frontenac",built:1892,finished:1924,pxq:"Château Frontenac",wiki:"Château_Frontenac",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Vancouver — Stanley Park",  en:"Stanley Park Vancouver",    built:1888, finished:1888, img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Bay of Fundy",              en:"Bay of Fundy",              built:-999, finished:-999, img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Whistler — lyžařský resort",en:"Whistler Mountain Resort",  built:1914, finished:1965, img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Butchart Gardens",en:"Butchart Gardens",built:1904,finished:1929,pxq:"Butchart Gardens",wiki:"Butchart_Gardens",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
  ],
  UA:[
    {name:"Kyjevsko-pečerská lávra",en:"Kyiv Pechersk Lavra",built:1051,finished:1073,pxq:"Kyiv Pechersk Lavra monastery",wiki:"Kiev_Pechersk_Lavra",img:"https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?w=480&q=80&auto=format&fit=crop"},
    {name:"Katedrála sv. Sofie Kyjev",en:"Saint Sophia Cathedral Kyiv",built:1011,finished:1018,pxq:"Saint Sophia Cathedral Kyiv Ukraine",wiki:"Saint_Sophia_Cathedral,_Kyiv",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Hrad Kamenec-Podilskij",en:"Kamianets-Podilskyi Castle",built:1362,finished:1434,pxq:"Kamianets Podilskyi castle Ukraine canyon",wiki:"Kamianets-Podilskyi_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Chersonesos Taurika",en:"Chersonesus Taurica",built:-421,finished:-400,pxq:"Chersonesus Taurica Ukraine ancient Greek ruins",wiki:"Chersonesus_Taurica",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Hrad Sudak",en:"Sudak Fortress",built:212,finished:1423,pxq:"Sudak Genoese Fortress Crimea Ukraine",wiki:"Genoese_Fortress_(Sudak)",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Zamek Korets",en:"Korets Castle Ukraine",built:1386,finished:1600,pxq:"Korets Castle Ukraine Renaissance ruins",wiki:"Korets_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Lviv — staré město",en:"Lviv Old Town",built:1256,finished:1700,pxq:"Lviv old town Ukraine",wiki:"Lviv",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Sofijivka park Uman",en:"Sofiyivka Park Uman",built:1796,finished:1800,pxq:"Sofiyivka park Uman Ukraine garden",wiki:"Sofiyivka_National_Nature_Park",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Olvia — antické město",en:"Olbia Ancient City",built:-647,finished:-400,pxq:"Olbia ancient city Ukraine Greek colony",wiki:"Olbia,_Sardinia",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Chreschtatyk bulvár Kyjev",en:"Khreshchatyk Boulevard Kyiv",built:1797,finished:1954,pxq:"Khreshchatyk boulevard Kyiv Ukraine main street",wiki:"Khreshchatyk",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  PL:[
    {name:"Wawel — hrad Krakov",en:"Wawel Royal Castle Krakow",built:1038,finished:1618,pxq:"Wawel Castle Krakow Poland",wiki:"Wawel_Castle",img:"https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=480&q=80&auto=format&fit=crop"},
    {name:"Varšavské staré město",en:"Warsaw Old Town",built:1300,finished:1596,pxq:"Warsaw old town Poland reconstructed market",wiki:"Old_Town,_Warsaw",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Auschwitz-Birkenau",en:"Auschwitz-Birkenau Memorial",built:1940,finished:1945,pxq:"Auschwitz memorial Poland historic",wiki:"Auschwitz_concentration_camp",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Malbork — hrad řádu",en:"Malbork Castle",built:1274,finished:1406,pxq:"Malbork Castle Poland medieval",wiki:"Malbork_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Wieliczka — solné doly",en:"Wieliczka Salt Mine",built:1280,finished:1964,pxq:"Wieliczka salt mine underground",wiki:"Wieliczka_Salt_Mine",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Belověžský prales",en:"Białowieża Forest",built:-999,finished:-999,pxq:"Bialowieza forest bison Poland primeval",wiki:"Białowieża_Forest",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Zamość — renesanční město",en:"Zamość Old Town",built:1580,finished:1618,pxq:"Zamosc old town Poland renaissance",wiki:"Zamość",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Toruň — staré město",en:"Toruń Old Town",built:1233,finished:1264,pxq:"Torun old town Poland gothic",wiki:"Toruń",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Varšavský palác kultury",en:"Palace of Culture Warsaw",built:1952,finished:1955,pxq:"Palace of Culture Warsaw skyscraper",wiki:"Palace_of_Culture_and_Science",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Gniezno — katedrála",en:"Gniezno Cathedral",built:970,finished:1064,pxq:"Gniezno cathedral Poland medieval",wiki:"Gniezno_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  SA:[
    {name:"Mešita al-Harám Mekka",en:"Al-Masjid al-Haram Mecca",built:638,finished:1955,pxq:"Mecca Grand Mosque Kaaba Islam",wiki:"Masjid_al-Haram",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Mešita Proroka Medina",en:"Al-Masjid an-Nabawi Medina",built:622,finished:1994,pxq:"Al-Madinah Nabawi mosque Medina",wiki:"Al-Masjid_an-Nabawi",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Hegra — Mada'in Salih",en:"Hegra Mada'in Salih",built:-100,finished:100,pxq:"Hegra Madain Salih Nabataean tombs desert",wiki:"Hegra",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Diriyah — Turaif čtvrť",en:"Diriyah At-Turaif",built:1446,finished:1818,pxq:"Diriyah old town Riyadh Saudi heritage",wiki:"Diriyah",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Jeddah — historické město",en:"Historic Jeddah",built:700,finished:1300,pxq:"Historic Jeddah",wiki:"Al-Balad,_Jeddah",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Al-Ula — skalní město",en:"AlUla Rock City",built:-500,finished:700,pxq:"AlUla rock formations desert Saudi Arabia",wiki:"AlUla",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Rijád — věž Kingdom Centre",en:"Kingdom Centre Tower Riyadh",built:1999,finished:2002,pxq:"Kingdom Centre tower Riyadh Saudi Arabia sky bridge",wiki:"Kingdom_Centre",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
    {name:"Zamek Masmak Rijád",en:"Masmak Fortress Riyadh",built:1865,finished:1865,pxq:"Masmak fortress Riyadh Saudi Arabia mud brick",wiki:"Masmak",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Rijád — King Fahd Fountain",en:"King Fahd Fountain Jeddah",built:1983,finished:1983,pxq:"King Fahd Fountain Jeddah Saudi Arabia tallest",wiki:"King_Fahd_Fountain",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Al-Ahsa Oasis",en:"Al-Ahsa Oasis",built:-3500,finished:-999,pxq:"Al-Ahsa oasis Saudi Arabia palm trees date",wiki:"Al-Ahsa_Oasis",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  NG:[
    {name:"Olumo skála Abeokuta",en:"Olumo Rock Abeokuta",built:-999,finished:-999,pxq:"Olumo Rock Abeokuta Nigeria",wiki:"Olumo_Rock",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Yankari National Park",en:"Yankari National Park",built:1956,finished:1962,pxq:"Yankari game reserve Nigeria savanna wildlife",wiki:"Yankari_Game_Reserve",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Abuja — National Mosque",en:"Nigerian National Mosque Abuja",built:1984,finished:1984,pxq:"Abuja National Mosque Nigeria dome",wiki:"Nigerian_National_Mosque",img:"https://images.unsplash.com/photo-1564769625905-50e93615e769?w=480&q=80&auto=format&fit=crop"},
    {name:"Osun-Osogbo posvátný háj",en:"Osun-Osogbo Sacred Grove",built:1600,finished:1800,pxq:"Osun Osogbo sacred grove Nigeria river",wiki:"Osun-Osogbo",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Abuja — Aso Rock",en:"Aso Rock Abuja",built:-999,finished:-999,pxq:"Aso Rock Abuja Nigeria monolith government",wiki:"Aso_Rock",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Lagos — Tafawa Balewa Square",en:"Tafawa Balewa Square Lagos",built:1961,finished:1961,pxq:"Tafawa Balewa Square Lagos Nigeria",wiki:"Tafawa_Balewa_Square",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Sukur kulturní krajina",en:"Sukur Cultural Landscape",built:-999,finished:-999,pxq:"Sukur Nigeria mountain village terraces",wiki:"Sukur",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Zuma Rock",en:"Zuma Rock Nigeria",built:-999,finished:-999,pxq:"Zuma Rock Nigeria massive granite monolith",wiki:"Zuma_Rock",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Oba's Palace Benin City",en:"Oba's Palace Benin City",built:900,finished:1500,pxq:"Benin City Nigeria Oba palace bronze",wiki:"Royal_Palace_of_Benin",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Victoria Island Lagos",en:"Victoria Island Lagos",built:-999,finished:-999,pxq:"Victoria Island Lagos Nigeria skyline business",wiki:"Victoria_Island,_Lagos",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
  ],
  MX:[
    {name:"Teotihuacán — Pyramidy",en:"Teotihuacan Pyramids",built:-200,finished:250,pxq:"Teotihuacan pyramids Mexico",wiki:"Teotihuacan",img:"https://images.unsplash.com/photo-1518638150340-f706e86654de?w=480&q=80&auto=format&fit=crop"},
    {name:"Chichén Itzá",en:"Chichen Itza",built:600,finished:900,pxq:"Chichen Itza pyramid Mexico",wiki:"Chichen_Itza",img:"https://images.unsplash.com/photo-1518638150340-f706e86654de?w=480&q=80&auto=format&fit=crop"},
    {name:"Palacio de Bellas Artes",en:"Palacio de Bellas Artes Mexico City",built:1904,finished:1934,pxq:"Palacio de Bellas Artes Mexico City",wiki:"Palace_of_Fine_Arts_(Mexico_City)",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Guanajuato — město",en:"Guanajuato City",built:1559,finished:1700,pxq:"Guanajuato Mexico colorful",wiki:"Guanajuato",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Monte Albán",en:"Monte Albán",built:-500,finished:700,pxq:"Monte Albán",wiki:"Monte_Albán",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Palenque — mayské město",en:"Palenque Maya City",built:100,finished:800,pxq:"Palenque Maya City",wiki:"Palenque",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Mexiko — katedrála",en:"Mexico City Cathedral",built:1573,finished:1813,pxq:"Mexico City Cathedral",wiki:"Mexico_City_Metropolitan_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Tulum — pobřežní ruiny",en:"Tulum Ruins",built:564,finished:1400,pxq:"Tulum Maya ruins beach Mexico",wiki:"Tulum",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Uxmal — mayské město",en:"Uxmal Maya City",built:700,finished:1000,pxq:"Uxmal Maya City",wiki:"Uxmal",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Zócalo Mexico City",en:"Zócalo Mexico City",built:1325,finished:1524,pxq:"Zócalo Mexico City",wiki:"Zócalo",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  NZ:[
    {name:"Sky Tower Auckland",en:"Sky Tower Auckland",built:1994,finished:1997,pxq:"Sky Tower Auckland New Zealand",wiki:"Sky_Tower,_Auckland",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
    {name:"Milford Sound Fiordland",en:"Milford Sound Fiordland",built:-999,finished:-999,pxq:"Milford Sound fiord New Zealand",wiki:"Milford_Sound",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Hobbiton — Matamata",en:"Hobbiton Movie Set",built:1999,finished:2012,pxq:"Hobbiton movie set New Zealand",wiki:"Hobbiton_Movie_Set",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Rotorua — gejzíry",en:"Rotorua Geysers",built:-999,finished:-999,pxq:"Rotorua geysers New Zealand",wiki:"Rotorua",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tongariro National Park",en:"Tongariro National Park",built:1887,finished:1887,pxq:"Tongariro National Park",wiki:"Tongariro_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Te Papa muzeum Wellington",en:"Te Papa Museum Wellington",built:1998,finished:1998,pxq:"Te Papa Museum Wellington",wiki:"Museum_of_New_Zealand_Te_Papa_Tongarewa",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Waitomo Caves",en:"Waitomo Glowworm Caves",built:-999,finished:-999,pxq:"Waitomo glowworm cave New Zealand",wiki:"Waitomo_Caves",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Queenstown — jezero Wakatipu",en:"Lake Wakatipu Queenstown",built:-999,finished:-999,pxq:"Lake Wakatipu Queenstown",wiki:"Lake_Wakatipu",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Abel Tasman National Park",en:"Abel Tasman National Park",built:1942,finished:1942,pxq:"Abel Tasman coast New Zealand golden beach",wiki:"Abel_Tasman_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Christchurch — katedrála",en:"Christchurch Cathedral",built:1864,finished:1904,pxq:"Christchurch cathedral New Zealand",wiki:"Christchurch_Cathedral,_New_Zealand",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  AT:[
    {name:"Schönbrunnský palác",en:"Schönbrunn Palace Vienna",built:1696,finished:1730,pxq:"Schonbrunn Palace Vienna",wiki:"Schönbrunn_Palace",img:"https://images.unsplash.com/photo-1609340278459-6f1a87f32b60?w=480&q=80&auto=format&fit=crop"},
    {name:"Vídeňská opera",en:"Vienna State Opera",built:1861,finished:1869,pxq:"Vienna State Opera",wiki:"Vienna_State_Opera",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Stephansdom Vídeň",en:"St. Stephen's Cathedral Vienna",built:1137,finished:1433,pxq:"St. Stephen's Cathedral Vienna",wiki:"St._Stephen%27s_Cathedral,_Vienna",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Hallstatt — jezero a město",en:"Hallstatt Village",built:800,finished:1300,pxq:"Hallstatt village lake Austria",wiki:"Hallstatt",img:"https://images.unsplash.com/photo-1485872862337-20be5fde7c59?w=480&q=80&auto=format&fit=crop"},
    {name:"Melk — benediktinský klášter",en:"Melk Abbey",built:1702,finished:1736,pxq:"Melk Abbey",wiki:"Melk_Abbey",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Pevnost Hohensalzburg",en:"Hohensalzburg Fortress",built:1077,finished:1519,pxq:"Hohensalzburg Fortress Salzburg",wiki:"Hohensalzburg_Fortress",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Hofburg Vídeň",en:"Hofburg Palace Vienna",built:1279,finished:1913,pxq:"Hofburg Palace Vienna",wiki:"Hofburg_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Belvedere palác Vídeň",en:"Belvedere Palace Vienna",built:1714,finished:1723,pxq:"Belvedere Palace Vienna",wiki:"Belvedere,_Vienna",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Grossglockner — hora",en:"Grossglockner Mountain",built:-999,finished:-999,pxq:"Grossglockner Mountain",wiki:"Grossglockner",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Vídeň Prater — Riesenrad",en:"Vienna Prater Giant Wheel",built:1896,finished:1897,pxq:"Vienna Prater Giant Wheel",wiki:"Wiener_Riesenrad",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  BE:[
    {name:"Grand Place Brusel",en:"Grand Place Brussels",built:1401,finished:1455,pxq:"Grand Place Brussels Belgium",wiki:"Grand_Place",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Atomium Brusel",en:"Atomium Brussels",built:1956,finished:1958,pxq:"Atomium Brussels Belgium",wiki:"Atomium",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Bruggy — kanály",en:"Bruges Canals",built:1127,finished:1300,pxq:"Bruges canal Belgium medieval",wiki:"Bruges",img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=480&q=80&auto=format&fit=crop"},
    {name:"Manneken Pis",en:"Manneken Pis Brussels",built:1388,finished:1619,pxq:"Manneken Pis Brussels",wiki:"Manneken_Pis",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Gent — Gravensteen hrad",en:"Gravensteen Castle Ghent",built:1180,finished:1180,pxq:"Gravensteen castle Ghent Belgium medieval",wiki:"Gravensteen",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Antverpy — katedrála",en:"Antwerp Cathedral",built:1352,finished:1521,pxq:"Antwerp Cathedral",wiki:"Cathedral_of_Our_Lady,_Antwerp",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Waterloo — bojiště",en:"Waterloo Battlefield",built:1815,finished:1815,pxq:"Waterloo battlefield Belgium memorial Lion mound",wiki:"Battle_of_Waterloo",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Dinant — citadela",en:"Dinant Citadel",built:1051,finished:1050,pxq:"Dinant citadel Belgium river cliff",wiki:"Citadel_of_Dinant",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Laeken — královský palác",en:"Laeken Royal Palace",built:1782,finished:1784,pxq:"Laeken Royal Palace",wiki:"Royal_Palace_of_Laeken",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Gent — Belfort věž",en:"Ghent Belfry",built:1313,finished:1380,pxq:"Ghent belfry Belgium medieval tower",wiki:"Belfry_of_Ghent",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  NL:[
    {name:"Rijksmuseum Amsterdam",en:"Rijksmuseum Amsterdam",built:1876,finished:1885,pxq:"Rijksmuseum Amsterdam museum",wiki:"Rijksmuseum",img:"https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=480&q=80&auto=format&fit=crop"},
    {name:"Větrné mlýny Kinderdijk",en:"Kinderdijk Windmills",built:1738,finished:1740,pxq:"Kinderdijk windmills Netherlands",wiki:"Kinderdijk",img:"https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=480&q=80&auto=format&fit=crop"},
    {name:"Anne Frankův dům Amsterdam",en:"Anne Frank House Amsterdam",built:1635,finished:1635,pxq:"Amsterdam canal house Netherlands",wiki:"Anne_Frank_House",img:"https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=480&q=80&auto=format&fit=crop"},
    {name:"Keukenhof — tulipány",en:"Keukenhof Gardens",built:1949,finished:1950,pxq:"Keukenhof Gardens",wiki:"Keukenhof",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Rotterdam — Erasmusbrug",en:"Erasmus Bridge Rotterdam",built:1990,finished:1996,pxq:"Erasmus Bridge Rotterdam Netherlands",wiki:"Erasmus_Bridge",img:"https://images.unsplash.com/photo-1559181567-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
    {name:"Utrecht — Dom Tower",en:"Dom Tower Utrecht",built:1321,finished:1382,pxq:"Dom Tower Utrecht Netherlands",wiki:"Dom_Tower_of_Utrecht",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
    {name:"Delft — staré město",en:"Delft Old Town",built:1246,finished:1400,pxq:"Delft old town Netherlands canal blue pottery",wiki:"Delft",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Haarlem — katedrála",en:"Haarlem Cathedral",built:1390,finished:1520,pxq:"Haarlem Cathedral",wiki:"St._Bavo_Church,_Haarlem",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Maastricht — basilika",en:"St. Servatius Basilica Maastricht",built:560,finished:1200,pxq:"St. Servatius Basilica Maastricht",wiki:"Basilica_of_Saint_Servatius",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Gouda — radnice",en:"Gouda City Hall",built:1448,finished:1459,pxq:"Gouda city hall Netherlands cheese market",wiki:"Gouda_City_Hall",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  PT:[
    {name:"Torre de Belém",en:"Tower of Belém Lisbon",built:1516,finished:1521,pxq:"Belem Tower Lisbon Portugal",wiki:"Tower_of_Belém",img:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=480&q=80&auto=format&fit=crop"},
    {name:"Mosteiro dos Jerónimos",en:"Jerónimos Monastery Lisbon",built:1501,finished:1601,pxq:"Jeronimos Monastery Lisbon Manueline",wiki:"Jerónimos_Monastery",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Palác Pena Sintra",en:"Pena Palace Sintra",built:1838,finished:1854,pxq:"Pena Palace Sintra colorful",wiki:"Palace_of_Pena",img:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=480&q=80&auto=format&fit=crop"},
    {name:"Porto — Dom Luís most",en:"Dom Luís I Bridge Porto",built:1881,finished:1886,pxq:"Dom Luis Bridge Porto Portugal",wiki:"Dom_Luís_I_Bridge",img:"https://images.unsplash.com/photo-1559181567-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
    {name:"Évora — Dianin chrám",en:"Temple of Diana Évora",built:100,finished:200,pxq:"Temple of Diana Évora",wiki:"Roman_temple_of_Évora",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Quinta da Regaleira Sintra",en:"Quinta da Regaleira",built:1904,finished:1910,pxq:"Quinta da Regaleira Sintra garden well",wiki:"Quinta_da_Regaleira",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Klášter Batalha",en:"Batalha Monastery",built:1386,finished:1517,pxq:"Batalha Monastery Portugal Gothic",wiki:"Batalha_Monastery",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Obidos — hradní město",en:"Óbidos Walled Town",built:308,finished:1200,pxq:"Obidos walled town Portugal medieval",wiki:"Óbidos",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Coimbra — univerzita",en:"University of Coimbra",built:1290,finished:1537,pxq:"University of Coimbra",wiki:"University_of_Coimbra",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Algarve — Ponta da Piedade",en:"Ponta da Piedade Algarve",built:-999,finished:-999,pxq:"Ponta da Piedade Algarve sea cliffs Portugal",wiki:"Ponta_da_Piedade",img:"https://images.unsplash.com/photo-1559181567-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
  ],
  SE:[
    {name:"Stockholmská radnice",en:"Stockholm City Hall",built:1911,finished:1923,pxq:"Stockholm City Hall Sweden",wiki:"Stockholm_City_Hall",img:"https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=480&q=80&auto=format&fit=crop"},
    {name:"Vasa muzeum Stockholm",en:"Vasa Museum Stockholm",built:1987,finished:1990,pxq:"Vasa Museum Stockholm warship",wiki:"Vasa_Museum",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Gamla Stan Stockholm",en:"Gamla Stan Stockholm",built:1250,finished:1600,pxq:"Gamla Stan Stockholm old town",wiki:"Gamla_stan",img:"https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=480&q=80&auto=format&fit=crop"},
    {name:"Drottningholm palác",en:"Drottningholm Palace",built:1662,finished:1756,pxq:"Drottningholm Palace Sweden royal",wiki:"Drottningholm_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Visby — středověké město",en:"Visby Medieval Town",built:1150,finished:1400,pxq:"Visby medieval walls Sweden Gotland",wiki:"Visby",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Icehotel Jukkasjärvi",en:"Icehotel Jukkasjärvi",built:1989,finished:1989,pxq:"Icehotel Jukkasjarvi Sweden ice snow",wiki:"Icehotel",img:"https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=480&q=80&auto=format&fit=crop"},
    {name:"Riksdag Stockholm",en:"Swedish Parliament Building",built:1897,finished:1905,pxq:"Swedish Parliament Building",wiki:"Riksdag_building",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Abba Museum Stockholm",en:"ABBA Museum Stockholm",built:2013,finished:2013,pxq:"ABBA Museum Stockholm pop music",wiki:"ABBA_Museum",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Göteborský přístav",en:"Gothenburg Harbour",built:1621,finished:1700,pxq:"Gothenburg harbor Sweden port Poseidon",wiki:"Gothenburg",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Husaby kyrka",en:"Husaby Church Sweden",built:1000,finished:1150,pxq:"Husaby church Sweden Romanesque baptism font",wiki:"Husaby_Church",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  DK:[
    {name:"Malá mořská víla Kodaň",en:"Little Mermaid Copenhagen",built:1912,finished:1913,pxq:"Little Mermaid statue Copenhagen",wiki:"The_Little_Mermaid_(statue)",img:"https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=480&q=80&auto=format&fit=crop"},
    {name:"Tivoli Kodaň",en:"Tivoli Gardens Copenhagen",built:1843,finished:1843,pxq:"Tivoli Gardens Copenhagen amusement park",wiki:"Tivoli_Gardens",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Kronborg hrad Helsingør",en:"Kronborg Castle Helsingør",built:1420,finished:1585,pxq:"Kronborg Castle Denmark Hamlet",wiki:"Kronborg",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Roskilde katedrála",en:"Roskilde Cathedral",built:1170,finished:1280,pxq:"Roskilde Cathedral Denmark UNESCO",wiki:"Roskilde_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Frederiksborg palác",en:"Frederiksborg Palace",built:1600,finished:1625,pxq:"Frederiksborg Palace Denmark Renaissance lake",wiki:"Frederiksborg_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Nyhavn Kodaň",en:"Nyhavn Copenhagen",built:1671,finished:1673,pxq:"Nyhavn Copenhagen colorful harbor",wiki:"Nyhavn",img:"https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=480&q=80&auto=format&fit=crop"},
    {name:"Jelling runy",en:"Jelling Runic Stones",built:958,finished:965,pxq:"Jelling Runic Stones",wiki:"Jelling_stones",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Legoland Billund",en:"Legoland Billund",built:1968,finished:1968,pxq:"Legoland Billund Denmark amusement park",wiki:"Legoland_Billund",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Kodaňská opera",en:"Copenhagen Opera House",built:2001,finished:2004,pxq:"Copenhagen Opera House Denmark modern",wiki:"Copenhagen_Opera_House",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Aarhus — ARoS muzeum",en:"ARoS Aarhus Art Museum",built:2002,finished:2004,pxq:"ARoS Aarhus Art Museum rainbow panorama Denmark",wiki:"ARoS_Aarhus_Art_Museum",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
  ],
  FI:[
    {name:"Helsinky — katedrála",en:"Helsinki Cathedral",built:1830,finished:1852,pxq:"Helsinki Cathedral Senate Square",wiki:"Helsinki_Cathedral",img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=480&q=80&auto=format&fit=crop"},
    {name:"Suomenlinna — pevnost",en:"Suomenlinna Fortress",built:1748,finished:1772,pxq:"Suomenlinna sea fortress Helsinki Finland",wiki:"Suomenlinna",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Turku hrad",en:"Turku Castle",built:1280,finished:1290,pxq:"Turku Castle Finland medieval",wiki:"Turku_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Olavinlinna hrad",en:"Olavinlinna Castle Savonlinna",built:1475,finished:1475,pxq:"Olavinlinna Castle Savonlinna Finland lake",wiki:"Olavinlinna",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Santa Claus Village Rovaniemi",en:"Santa Claus Village Rovaniemi",built:1985,finished:1985,pxq:"Santa Claus village Lapland snow",wiki:"Santa_Claus_Village",img:"https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=480&q=80&auto=format&fit=crop"},
    {name:"Koli National Park",en:"Koli National Park Finland",built:1991,finished:1991,pxq:"Koli national park Finland lake view",wiki:"Koli_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Porvoo — staré město",en:"Porvoo Old Town",built:1346,finished:1400,pxq:"Porvoo old town Finland red wooden houses",wiki:"Porvoo",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Finlandia-talo Helsinki",en:"Finlandia Hall Helsinki",built:1967,finished:1971,pxq:"Finlandia Hall Helsinki Aalto concert hall",wiki:"Finlandia_Hall",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tampere — katedrála",en:"Tampere Cathedral",built:1902,finished:1907,pxq:"Tampere Cathedral Finland national romantic",wiki:"Tampere_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Siida muzeum Inari",en:"Siida Museum Inari",built:1998,finished:1998,pxq:"Inari Sami museum Lapland Finland",wiki:"Siida",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
  ],
  GR:[
    {name:"Akropolis Atény",en:"Acropolis of Athens",built:-447,finished:-432,pxq:"Acropolis Athens Parthenon",wiki:"Acropolis_of_Athens",img:"https://images.unsplash.com/photo-1555993539-1732b0258235?w=480&q=80&auto=format&fit=crop"},
    {name:"Meteorá — kláštery",en:"Meteora Monasteries",built:1356,finished:1483,pxq:"Meteora monasteries rocks Greece",wiki:"Meteora",img:"https://images.unsplash.com/photo-1549893072-4bc678117f45?w=480&q=80&auto=format&fit=crop"},
    {name:"Santorini — Oia",en:"Santorini Oia",built:1600,finished:1800,pxq:"Santorini Oia white blue",wiki:"Oia,_Santorini",img:"https://images.unsplash.com/photo-1533105079780-92b9be482077?w=480&q=80&auto=format&fit=crop"},
    {name:"Delfská věštírna",en:"Delphi Oracle",built:-800,finished:-390,pxq:"Delphi archaeological site Greece temple",wiki:"Delphi",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Olympia — antická",en:"Ancient Olympia",built:-776,finished:-393,pxq:"Ancient Olympia Greece temple columns ruins",wiki:"Olympia,_Greece",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Knóssos Kréta",en:"Knossos Palace Crete",built:-1900,finished:-1400,pxq:"Knossos palace Crete Minoan ruins",wiki:"Knossos",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Epidauros — divadlo",en:"Theatre of Epidaurus",built:-340,finished:-330,pxq:"Epidaurus ancient theatre Greece",wiki:"Epidaurus",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Soluň — Bílá věž",en:"White Tower Thessaloniki",built:1535,finished:1536,pxq:"White Tower Thessaloniki Greece Byzantine",wiki:"White_Tower_of_Thessaloniki",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=480&q=80&auto=format&fit=crop"},
    {name:"Mykonos — větrné mlýny",en:"Mykonos Windmills",built:1500,finished:1600,pxq:"Mykonos windmills Greece",wiki:"Mykonos",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Rhodos — staré město",en:"Rhodes Old Town",built:408,finished:1523,pxq:"Rhodes old town medieval walls Greece",wiki:"Rhodes",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  RO:[
    {name:"Hrad Bran — Drakula",en:"Bran Castle Romania",built:1377,finished:1388,pxq:"Bran Castle Dracula Romania",wiki:"Bran_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Parlamentní palác Bukurešť",en:"Palace of Parliament Bucharest",built:1984,finished:1997,pxq:"Palace Parliament Bucharest Romania",wiki:"Palace_of_the_Parliament",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Peles hrad Sinaia",en:"Peleș Castle Sinaia",built:1873,finished:1914,pxq:"Peles Castle Romania Neo-Renaissance Sinaia",wiki:"Peleș_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Sighișoara — staré město",en:"Sighișoara Historic Centre",built:1191,finished:1400,pxq:"Sighisoara medieval town Romania",wiki:"Sighișoara",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Bukurešť — Arc de Triomphe",en:"Bucharest Arc de Triomphe",built:1922,finished:1936,pxq:"Bucharest Arc de Triomphe Romania",wiki:"Arcul_de_Triumf",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Klášter Voroneț",en:"Voroneț Monastery Romania",built:1488,finished:1496,pxq:"Voronet painted monastery Romania blue",wiki:"Voroneț_Monastery",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Timișoara — náměstí",en:"Timișoara Union Square",built:1728,finished:1800,pxq:"Timisoara Union Square Romania revolution",wiki:"Union_Square,_Timișoara",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Dunajská delta",en:"Danube Delta Romania",built:-999,finished:-999,pxq:"Danube Delta Romania pelicans nature",wiki:"Danube_Delta",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Corvin Castle Hunedoara",en:"Corvin Castle Hunedoara",built:1440,finished:1480,pxq:"Corvin Castle Hunedoara Romania gothic",wiki:"Corvin_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Cluj-Napoca — katedrála",en:"Cluj-Napoca Cathedral",built:1349,finished:1442,pxq:"Cluj Napoca Saint Michael church Romania Gothic",wiki:"Saint_Michael%27s_Church,_Cluj-Napoca",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  HU:[
    {name:"Budapešť — parlament",en:"Hungarian Parliament Building",built:1885,finished:1904,pxq:"Budapest Parliament building Danube",wiki:"Hungarian_Parliament_Building",img:"https://images.unsplash.com/photo-1555990793-4bed8455dbd0?w=480&q=80&auto=format&fit=crop"},
    {name:"Budínský hrad",en:"Buda Castle Budapest",built:1265,finished:1749,pxq:"Buda Castle Budapest hill",wiki:"Buda_Castle",img:"https://images.unsplash.com/photo-1565426873118-a17ed65d74b9?w=480&q=80&auto=format&fit=crop"},
    {name:"Řetězový most Budapešť",en:"Chain Bridge Budapest",built:1840,finished:1849,pxq:"Chain Bridge Budapest night",wiki:"Chain_Bridge_(Budapest)",img:"https://images.unsplash.com/photo-1559181567-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
    {name:"Fisherman's Bastion Budapešť",en:"Fisherman's Bastion Budapest",built:1895,finished:1902,pxq:"Fishermans Bastion Budapest Hungary towers",wiki:"Fisherman%27s_Bastion",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Széchenyi lázně Budapešť",en:"Széchenyi Thermal Bath Budapest",built:1909,finished:1913,pxq:"Szechenyi thermal bath Budapest",wiki:"Széchenyi_thermal_bath",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Balaton — jezero",en:"Lake Balaton Hungary",built:-999,finished:-999,pxq:"Lake Balaton Hungary summer",wiki:"Lake_Balaton",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Eger — hrad",en:"Eger Castle Hungary",built:1248,finished:1568,pxq:"Eger Castle Hungary baroque",wiki:"Eger_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Pécsi katedrála",en:"Pécs Cathedral Hungary",built:1009,finished:1891,pxq:"Pecs Cathedral Hungary early Christian",wiki:"Pécs_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Tokajská vinařská oblast",en:"Tokaj Wine Region Hungary",built:1700,finished:1737,pxq:"Tokaj vineyard wine Hungary",wiki:"Tokaj",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Hévíz — termální jezero",en:"Lake Hévíz Thermal Bath",built:-999,finished:-999,pxq:"Heviz thermal lake Hungary",wiki:"Hévíz",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
  ],
  SK:[
    {name:"Bratislavský hrad",en:"Bratislava Castle",built:907,finished:1562,pxq:"Bratislava Castle Slovakia",wiki:"Bratislava_Castle",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Spišský hrad",en:"Spiš Castle Slovakia",built:1209,finished:1780,pxq:"Spis Castle Slovakia ruins",wiki:"Spiš_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Bojnický zámek",en:"Bojnice Castle Slovakia",built:1113,finished:1910,pxq:"Bojnice Castle Slovakia",wiki:"Bojnice_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Vysoké Tatry",en:"High Tatras Mountains Slovakia",built:-999,finished:-999,pxq:"High Tatras mountains Slovakia",wiki:"High_Tatras",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Banská Štiavnica",en:"Banská Štiavnica Mining Town",built:1156,finished:1747,pxq:"Banska Stiavnica mining town Slovakia",wiki:"Banská_Štiavnica",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Vlkolinec — lidové stavby",en:"Vlkolínec Folk Architecture",built:1300,finished:1400,pxq:"Vlkolinec folk architecture Slovakia village",wiki:"Vlkolínec",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Košice — katedrála",en:"St. Elisabeth Cathedral Košice",built:1320,finished:1508,pxq:"St. Elisabeth Cathedral Košice",wiki:"St._Elisabeth_Cathedral,_Košice",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Slovenský kras — jeskyně",en:"Slovak Karst Caves",built:-999,finished:-999,pxq:"Slovak karst cave stalactites",wiki:"Slovak_Karst",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Červený Kláštor",en:"Red Monastery Slovakia",built:1319,finished:1338,pxq:"Red Monastery Slovakia",wiki:"Red_Monastery",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Čičmany — lidové vzory",en:"Čičmany Folk Village",built:1600,finished:1800,pxq:"Cicmany folk village Slovakia patterns",wiki:"Čičmany",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  HR:[
    {name:"Dubrovník — staré město",en:"Dubrovnik Old Town",built:614,finished:1667,pxq:"Dubrovnik old town walls Croatia",wiki:"Dubrovnik",img:"https://images.unsplash.com/photo-1555990793-da11153b6207?w=480&q=80&auto=format&fit=crop"},
    {name:"Diokleciánův palác Split",en:"Diocletian's Palace Split",built:295,finished:305,pxq:"Split Croatia Diocletian Palace",wiki:"Diocletian%27s_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Plitvická jezera",en:"Plitvice Lakes Croatia",built:-999,finished:-999,pxq:"Plitvice Lakes waterfalls Croatia",wiki:"Plitvice_Lakes_National_Park",img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=480&q=80&auto=format&fit=crop"},
    {name:"Šibenik — katedrála",en:"Šibenik Cathedral",built:1431,finished:1536,pxq:"Sibenik Cathedral Croatia Renaissance",wiki:"Cathedral_of_St._James,_Šibenik",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Eufrazijská bazilika Poreč",en:"Euphrasian Basilica Poreč",built:553,finished:559,pxq:"Euphrasian Basilica Porec Croatia mosaic Byzantine",wiki:"Euphrasian_Basilica",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Záhřeb — katedrála",en:"Zagreb Cathedral",built:1093,finished:1899,pxq:"Zagreb Cathedral Croatia twin spires",wiki:"Zagreb_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Zlatni Rat pláž Brač",en:"Zlatni Rat Beach Brač",built:-999,finished:-999,pxq:"Zlatni Rat beach Croatia",wiki:"Zlatni_Rat",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Trogir — historické město",en:"Trogir Historic Town",built:-380,finished:1420,pxq:"Trogir historic town Croatia Adriatic",wiki:"Trogir",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Knin — hrad",en:"Knin Fortress Croatia",built:895,finished:1000,pxq:"Knin fortress Croatia medieval",wiki:"Knin_Fortress",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Stari Grad Hvar",en:"Stari Grad Plain Hvar",built:-384,finished:-350,pxq:"Hvar island Croatia lavender sea",wiki:"Stari_Grad_plain",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  BG:[
    {name:"Rila — klášter",en:"Rila Monastery Bulgaria",built:927,finished:1335,pxq:"Rila Monastery Bulgaria",wiki:"Rila_Monastery",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Alexander Nevský Sofie",en:"Alexander Nevsky Cathedral Sofia",built:1882,finished:1912,pxq:"Alexander Nevsky Cathedral Sofia",wiki:"Alexander_Nevsky_Cathedral,_Sofia",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Nesebăr — staré město",en:"Nesebăr Old Town Bulgaria",built:-700,finished:1000,pxq:"Nessebar old town Bulgaria Black Sea churches",wiki:"Nesebar",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tsarevets — hrad Turnovo",en:"Tsarevets Fortress Turnovo",built:1185,finished:1393,pxq:"Tsarevets fortress Turnovo Bulgaria hilltop",wiki:"Tsarevets,_Tarnovgrad",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Plovdiv — staré město",en:"Plovdiv Old Town Bulgaria",built:-400,finished:1800,pxq:"Plovdiv old town Bulgaria colorful houses",wiki:"Plovdiv",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Madara — jezdec",en:"Madara Rider Rock Relief",built:710,finished:710,pxq:"Madara rider Bulgaria rock carving",wiki:"Madara_Rider",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Boyana Church Sofie",en:"Boyana Church Sofia",built:1000,finished:1259,pxq:"Boyana Church Sofia Bulgaria medieval frescoes",wiki:"Boyana_Church",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Thracké mohyly Kazanlak",en:"Thracian Tomb of Kazanlak",built:-325,finished:-300,pxq:"Kazanlak Thracian tomb Bulgaria frescoes",wiki:"Thracian_Tomb_of_Kazanlak",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Pirin National Park",en:"Pirin National Park Bulgaria",built:1962,finished:1962,pxq:"Pirin mountains Bulgaria alpine lake",wiki:"Pirin_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Srebarna — přírodní rezervace",en:"Srebarna Nature Reserve",built:-999,finished:-999,pxq:"Srebarna lake Bulgaria pelican",wiki:"Srebarna_Nature_Reserve",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
  ],
  MA:[
    {name:"Medína Fés",en:"Medina of Fez Morocco",built:789,finished:900,pxq:"Fez medina Morocco old city",wiki:"Fes_el_Bali",img:"https://images.unsplash.com/photo-1597212720455-a10c38636025?w=480&q=80&auto=format&fit=crop"},
    {name:"Hassan II mešita Casablanca",en:"Hassan II Mosque Casablanca",built:1986,finished:1993,pxq:"Hassan II Mosque Casablanca ocean",wiki:"Hassan_II_Mosque",img:"https://images.unsplash.com/photo-1561022882-9a3c9efe8f04?w=480&q=80&auto=format&fit=crop"},
    {name:"Ait Benhaddou kasbah",en:"Aït Benhaddou Kasbah",built:1100,finished:1300,pxq:"Ait Benhaddou kasbah Morocco clay",wiki:"Aït_Benhaddou",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Chefchaouen — modré město",en:"Chefchaouen Blue City",built:1471,finished:1471,pxq:"Chefchaouen blue streets Morocco",wiki:"Chefchaouen",img:"https://images.unsplash.com/photo-1553789168-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
    {name:"Džamá el-Fná Marrákeš",en:"Jemaa el-Fna Marrakech",built:1050,finished:1100,pxq:"Marrakech Jemaa el Fna square",wiki:"Jemaa_el-Fna",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Volubilis — antické město",en:"Volubilis Roman Ruins",built:-300,finished:285,pxq:"Volubilis Roman ruins Morocco ancient",wiki:"Volubilis",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Saharské duny Merzouga",en:"Sahara Desert Dunes Merzouga",built:-999,finished:-999,pxq:"Sahara desert dunes camel",wiki:"Erg_Chebbi",img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=480&q=80&auto=format&fit=crop"},
    {name:"Essaouira — pobřežní město",en:"Essaouira Medina Morocco",built:1760,finished:1770,pxq:"Essaouira medina blue white Morocco coast",wiki:"Essaouira",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Bab Mansour Meknes",en:"Bab Mansour Gate Meknes",built:1672,finished:1732,pxq:"Bab Mansour gate Meknes Morocco",wiki:"Bab_Mansour",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Medína Marrákeš",en:"Medina of Marrakech",built:1070,finished:1147,pxq:"Marrakech medina souk Morocco traditional",wiki:"Marrakesh",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  ET:[
    {name:"Lalibela — skalní kostely",en:"Lalibela Rock-Hewn Churches",built:1150,finished:1250,pxq:"Lalibela rock church Ethiopia",wiki:"Lalibela",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Obelisk z Aksumu",en:"Obelisk of Axum Ethiopia",built:300,finished:350,pxq:"Axum obelisk Ethiopia ancient",wiki:"Obelisk_of_Axum",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Fasil Ghebbi Gondar",en:"Fasil Ghebbi Fortress Gondar",built:1636,finished:1667,pxq:"Gondar castle Ethiopia Royal Enclosure",wiki:"Fasil_Ghebbi",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Simien Mountains",en:"Simien Mountains Ethiopia",built:-999,finished:-999,pxq:"Simien Mountains Ethiopia",wiki:"Simien_Mountains",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Harar — walled city",en:"Walled City of Harar",built:1520,finished:1800,pxq:"Harar walled city Ethiopia street",wiki:"Harar",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tiya — prehistorické stély",en:"Tiya Megalithic Stelae",built:1000,finished:1300,pxq:"Tiya Megalithic Stelae",wiki:"Tiya",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Erta Ale — sopka",en:"Erta Ale Volcano Ethiopia",built:-999,finished:-999,pxq:"Erta Ale lava lake volcano Ethiopia",wiki:"Erta_Ale",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Ethiopian Rift Valley",en:"Ethiopian Rift Valley",built:-999,finished:-999,pxq:"Ethiopian Rift Valley",wiki:"East_African_Rift",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=480&q=80&auto=format&fit=crop"},
    {name:"Holy Trinity Cathedral Addis",en:"Holy Trinity Cathedral Addis Ababa",built:1931,finished:1941,pxq:"Holy Trinity Cathedral Addis Ababa",wiki:"Holy_Trinity_Cathedral,_Addis_Ababa",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Yeha — starověký chrám",en:"Yeha Ancient Temple Ethiopia",built:-700,finished:-500,pxq:"Yeha Ancient Temple Ethiopia",wiki:"Yeha",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  KE:[
    {name:"Masai Mara — savana",en:"Maasai Mara Reserve Kenya",built:1961,finished:1961,pxq:"Masai Mara savanna elephant",wiki:"Maasai_Mara",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Hora Keňa",en:"Mount Kenya",built:-999,finished:-999,pxq:"Mount Kenya peak Africa",wiki:"Mount_Kenya",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Fort Jesus Mombasa",en:"Fort Jesus Mombasa Kenya",built:1593,finished:1596,pxq:"Fort Jesus Mombasa Kenya Portuguese",wiki:"Fort_Jesus",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Lamu — staré město",en:"Lamu Old Town Kenya",built:1370,finished:1400,pxq:"Lamu old town Kenya Swahili",wiki:"Lamu_Old_Town",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Amboseli National Park",en:"Amboseli National Park Kenya",built:1974,finished:1974,pxq:"Amboseli elephants Kilimanjaro",wiki:"Amboseli_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Nairobi National Park",en:"Nairobi National Park",built:1946,finished:1946,pxq:"Nairobi National Park Kenya giraffe city",wiki:"Nairobi_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Tsavo National Park",en:"Tsavo National Park Kenya",built:1948,finished:1948,pxq:"Tsavo red elephants Kenya savanna",wiki:"Tsavo_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Lake Nakuru flamingos",en:"Lake Nakuru National Park",built:1961,finished:1968,pxq:"Lake Nakuru flamingo Kenya",wiki:"Lake_Nakuru_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Gede ruins Malindi",en:"Gede Ruins Malindi Kenya",built:1100,finished:1400,pxq:"Gede ruins Kenya ancient Swahili",wiki:"Gede_ruins",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Ngong Hills Nairobi",en:"Ngong Hills Nairobi",built:-999,finished:-999,pxq:"Ngong Hills Kenya green savanna",wiki:"Ngong_Hills",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  TZ:[
    {name:"Kilimandžáro",en:"Mount Kilimanjaro Tanzania",built:-999,finished:-999,pxq:"Kilimanjaro mountain Tanzania",wiki:"Mount_Kilimanjaro",img:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=480&q=80&auto=format&fit=crop"},
    {name:"Serengeti National Park",en:"Serengeti National Park Tanzania",built:1951,finished:1951,pxq:"Serengeti wildebeest migration",wiki:"Serengeti_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Zanzibar — Stone Town",en:"Stone Town Zanzibar",built:1830,finished:1870,pxq:"Zanzibar Stone Town historic",wiki:"Stone_Town",img:"https://images.unsplash.com/photo-1597212720455-a10c38636025?w=480&q=80&auto=format&fit=crop"},
    {name:"Ngorongoro kráter",en:"Ngorongoro Crater Tanzania",built:-999,finished:-999,pxq:"Ngorongoro Crater wildlife",wiki:"Ngorongoro_Conservation_Area",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Kilwa Kisiwani — ruiny",en:"Kilwa Kisiwani Ruins",built:960,finished:1498,pxq:"Kilwa Kisiwani ruins Tanzania Swahili coast",wiki:"Kilwa_Kisiwani",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
    {name:"Zanzibar — pláže",en:"Zanzibar Beaches",built:-999,finished:-999,pxq:"Zanzibar beach Tanzania turquoise water",wiki:"Zanzibar_Archipelago",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Olduvai Gorge",en:"Olduvai Gorge Tanzania",built:-1800000,finished:-1800000,pxq:"Olduvai Gorge Tanzania prehistoric",wiki:"Olduvai_Gorge",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=480&q=80&auto=format&fit=crop"},
    {name:"Selous Game Reserve",en:"Selous Game Reserve Tanzania",built:1905,finished:1922,pxq:"Selous Tanzania safari elephant",wiki:"Selous_Game_Reserve",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Tarangire National Park",en:"Tarangire National Park",built:1970,finished:1970,pxq:"Tarangire baobab Tanzania elephant",wiki:"Tarangire_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Mahale Mountains",en:"Mahale Mountains National Park",built:1985,finished:1985,pxq:"Mahale Mountains chimpanzee Tanzania lake",wiki:"Mahale_Mountains_National_Park",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
  ],
  GH:[
    {name:"Cape Coast Castle Ghana",en:"Cape Coast Castle Ghana",built:1653,finished:1665,pxq:"Cape Coast Castle Ghana slave fort",wiki:"Cape_Coast_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Elmina Castle Ghana",en:"Elmina Castle Ghana",built:1482,finished:1486,pxq:"Elmina Castle Ghana",wiki:"Elmina_Castle",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Black Star Square Accra",en:"Black Star Square Accra",built:1961,finished:1961,pxq:"Accra Ghana Black Star Square independence",wiki:"Black_Star_Square",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Kakum National Park Ghana",en:"Kakum National Park Ghana",built:1931,finished:1992,pxq:"Kakum canopy walk Ghana forest",wiki:"Kakum_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Kumasi Ashanti Palace",en:"Kumasi Ashanti Palace",built:1700,finished:1700,pxq:"Kumasi Ghana Ashanti palace museum",wiki:"Manhyia_Palace",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Mole National Park Ghana",en:"Mole National Park Ghana",built:1958,finished:1971,pxq:"Mole national park Ghana elephant",wiki:"Mole_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Larabanga mešita",en:"Larabanga Mosque Ghana",built:1421,finished:1421,pxq:"Larabanga mosque Ghana mud architecture",wiki:"Larabanga_Mosque",img:"https://images.unsplash.com/photo-1564769625905-50e93615e769?w=480&q=80&auto=format&fit=crop"},
    {name:"Wli — vodopády",en:"Wli Waterfalls Ghana",built:-999,finished:-999,pxq:"Wli waterfalls Ghana Africa",wiki:"Wli_Waterfalls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Jezero Volta Ghana",en:"Lake Volta Ghana",built:1964,finished:1965,pxq:"Lake Volta Ghana",wiki:"Lake_Volta",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Paga — krokodýlí jezero",en:"Paga Crocodile Pond",built:-999,finished:-999,pxq:"Paga crocodile pond Ghana sacred",wiki:"Paga",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  CM:[
    {name:"Mont Cameroun — sopka",en:"Mount Cameroon Volcano",built:-999,finished:-999,pxq:"Mount Cameroon volcano Africa",wiki:"Mount_Cameroon",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Waza National Park Cameroon",en:"Waza National Park",built:1934,finished:1968,pxq:"Waza national park Cameroon wildlife",wiki:"Waza_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Foumban — palác sultána",en:"Foumban Sultan Palace",built:1394,finished:1400,pxq:"Foumban palace Cameroon Bamoun kingdom",wiki:"Palace_of_the_Sultans_of_Bamoun",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Dja Faunal Reserve",en:"Dja Faunal Reserve Cameroon",built:1950,finished:1987,pxq:"Dja rainforest Cameroon gorilla",wiki:"Dja_Faunal_Reserve",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Yaoundé — Basilika",en:"Yaoundé Basilica Cameroon",built:1962,finished:1965,pxq:"Yaoundé Basilica Cameroon",wiki:"Basilica_of_the_Immaculate_Conception,_Yaoundé",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Rhumsiki — hora",en:"Rhumsiki Peak Cameroon",built:-999,finished:-999,pxq:"Rhumsiki peak Cameroon landscape",wiki:"Rhumsiki",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Kribi — pláže",en:"Kribi Beach Cameroon",built:-999,finished:-999,pxq:"Kribi beach Cameroon waterfall sea",wiki:"Kribi",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Limbe Botanical Garden",en:"Limbe Botanical Garden Cameroon",built:1892,finished:1892,pxq:"Limbe botanical garden Cameroon",wiki:"Limbe_Botanic_Garden",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Bamenda — ring road",en:"Bamenda Ring Road Cameroon",built:-999,finished:-999,pxq:"Cameroon highlands ring road",wiki:"Ring_Road_(Cameroon)",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Maroua — trh",en:"Maroua Market Cameroon",built:-999,finished:-999,pxq:"Maroua market Cameroon North Africa",wiki:"Maroua",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
  ],
  AO:[
    {name:"Kalandula — vodopády",en:"Kalandula Falls Angola",built:-999,finished:-999,pxq:"Kalandula waterfall Africa",wiki:"Kalandula_Falls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Fortaleza São Miguel Luanda",en:"Fortaleza de São Miguel Luanda",built:1576,finished:1634,pxq:"Fort Sao Miguel Luanda Angola Portuguese",wiki:"Fortaleza_de_São_Miguel",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tundavala Gap Angola",en:"Tundavala Gap Angola",built:-999,finished:-999,pxq:"Tundavala gap Angola Huila canyon",wiki:"Tundavala_gap",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=480&q=80&auto=format&fit=crop"},
    {name:"Kissama National Park",en:"Kissama National Park Angola",built:1938,finished:1957,pxq:"Kissama Quicama national park Angola",wiki:"Quiçama_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Mbanza Kongo",en:"Mbanza Kongo Angola",built:1390,finished:1491,pxq:"Mbanza Kongo Angola historic capital",wiki:"Mbanza_Kongo",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Luanda katedrála",en:"Luanda Cathedral Angola",built:1628,finished:1628,pxq:"Luanda cathedral Angola Portuguese colonial",wiki:"Cathedral_of_the_Holy_Savior,_Luanda",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Pungo Andongo — skály",en:"Pungo Andongo Rocks",built:-999,finished:-999,pxq:"Pungo Andongo rocks Angola volcanic",wiki:"Pungo_Andongo",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Namibe poušť",en:"Namibe Desert Angola",built:-999,finished:-999,pxq:"Namib desert Angola dunes",wiki:"Namib",img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=480&q=80&auto=format&fit=crop"},
    {name:"Luanda Bay",en:"Luanda Bay Angola",built:-999,finished:-999,pxq:"Luanda Bay Angola waterfront skyline",wiki:"Luanda_Bay",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Dilolo jezero",en:"Dilolo Lake Angola",built:-999,finished:-999,pxq:"Dilolo Lake Angola",wiki:"Lake_Dilolo",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
  ],
  MZ:[
    {name:"Ilha de Moçambique",en:"Island of Mozambique",built:1507,finished:1600,pxq:"Mozambique island historic",wiki:"Island_of_Mozambique",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Gorongosa National Park",en:"Gorongosa National Park Mozambique",built:1920,finished:1960,pxq:"Gorongosa park Mozambique wildlife safari",wiki:"Gorongosa_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Maputo — železniční stanice",en:"Maputo Railway Station",built:1910,finished:1916,pxq:"Maputo railway station Mozambique historic",wiki:"Maputo_railway_station",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Quirimbas Archipelago",en:"Quirimbas Archipelago Mozambique",built:-999,finished:-999,pxq:"Quirimbas archipelago Mozambique coral sea",wiki:"Quirimbas_Archipelago",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Bazaruto Archipelago",en:"Bazaruto Archipelago Mozambique",built:-999,finished:-999,pxq:"Bazaruto Archipelago beach Mozambique",wiki:"Bazaruto_Archipelago",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Cahora Bassa přehrada",en:"Cahora Bassa Dam Mozambique",built:1969,finished:1974,pxq:"Cahora Bassa dam Mozambique Zambezi",wiki:"Cahora_Bassa",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Maputo katedrála",en:"Maputo Cathedral Mozambique",built:1936,finished:1944,pxq:"Maputo cathedral Our Lady Mozambique",wiki:"Our_Lady_of_the_Immaculate_Conception_Cathedral,_Maputo",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Inhambane katedrála",en:"Inhambane Cathedral Mozambique",built:1535,finished:1885,pxq:"Inhambane cathedral Mozambique colonial",wiki:"Inhambane",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Tofo Beach Mozambique",en:"Tofo Beach Mozambique",built:-999,finished:-999,pxq:"Tofo beach Mozambique whale shark",wiki:"Tofo_Beach",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Niassa Reserve",en:"Niassa Reserve Mozambique",built:1954,finished:1960,pxq:"Niassa reserve Mozambique wild Africa",wiki:"Niassa_National_Reserve",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
  ],
  CO:[
    {name:"Cartagena — pevnostní město",en:"Cartagena Walled City Colombia",built:1533,finished:1796,pxq:"Cartagena walled city Colombia",wiki:"Cartagena,_Colombia",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Ciudad Perdida — ztracené město",en:"Ciudad Perdida Lost City Colombia",built:800,finished:900,pxq:"Ciudad Perdida Lost City jungle Colombia",wiki:"Ciudad_Perdida",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Salt Cathedral Zipaquirá",en:"Salt Cathedral Zipaquirá Colombia",built:1954,finished:1995,pxq:"Salt Cathedral Colombia underground",wiki:"Salt_Cathedral_of_Zipaquirá",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Caño Cristales — řeka barev",en:"Caño Cristales River Colombia",built:-999,finished:-999,pxq:"Cano Cristales river colorful Colombia",wiki:"Caño_Cristales",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"San Agustín — sochy",en:"San Agustín Archaeological Park",built:200,finished:900,pxq:"San Agustin statues Colombia archaeological",wiki:"San_Agustín_Archaeological_Park",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Bogotá — katedrála",en:"Bogotá Cathedral Colombia",built:1807,finished:1823,pxq:"Bogota cathedral Colombia Plaza Bolivar",wiki:"Bogotá_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Cocora Valley — palmy",en:"Cocora Valley Wax Palms Colombia",built:-999,finished:-999,pxq:"Cocora valley wax palm trees Colombia",wiki:"Cocora_Valley",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Tayrona National Park",en:"Tayrona National Park Colombia",built:1964,finished:1969,pxq:"Tayrona beach Colombia jungle",wiki:"Tayrona_National_Natural_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Medellín — lanovky",en:"Medellín Cable Cars Colombia",built:2004,finished:2004,pxq:"Medellin metro cable car Colombia city",wiki:"Medellín_Metro_Cable",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Providencia Island",en:"Providencia Island Colombia",built:-999,finished:-999,pxq:"Providencia island Caribbean sea Colombia",wiki:"Providencia_Island",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
  ],
  CL:[
    {name:"Ahu Tongariki — Velikonoční ostrov",en:"Ahu Tongariki Easter Island Chile",built:1400,finished:1500,pxq:"Easter Island moai statues",wiki:"Ahu_Tongariki",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Torres del Paine",en:"Torres del Paine Chile",built:1959,finished:1959,pxq:"Torres del Paine Patagonia",wiki:"Torres_del_Paine",img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=480&q=80&auto=format&fit=crop"},
    {name:"Valparaíso — barevné domy",en:"Valparaíso Historic Quarter Chile",built:1536,finished:1800,pxq:"Valparaiso colorful houses hill Chile",wiki:"Valparaíso",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Atacamská poušť",en:"Atacama Desert Chile",built:-999,finished:-999,pxq:"Atacama Desert Chile",wiki:"Atacama_Desert",img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=480&q=80&auto=format&fit=crop"},
    {name:"Chiloe — dřevěné kostely",en:"Chiloé Wooden Churches",built:1600,finished:1900,pxq:"Chiloe wooden church island Chile",wiki:"Chiloé_churches",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Santiago — Cerro Santa Lucía",en:"Cerro Santa Lucía Santiago Chile",built:1872,finished:1874,pxq:"Santa Lucia hill Santiago Chile",wiki:"Cerro_Santa_Lucía",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Lauca National Park",en:"Lauca National Park Chile",built:1970,finished:1970,pxq:"Lauca altiplano flamingo Chile Andes",wiki:"Lauca_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Atacama Giant Geoglyph",en:"Atacama Giant Geoglyph",built:-999,finished:-999,pxq:"Atacama desert Chile geoglyph lines",wiki:"Atacama_Large_Millimeter_Array",img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=480&q=80&auto=format&fit=crop"},
    {name:"Punta Arenas — přístav",en:"Punta Arenas Port Chile",built:1848,finished:1900,pxq:"Punta Arenas Patagonia Chile port",wiki:"Punta_Arenas",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"La Serena katedrála",en:"La Serena Cathedral Chile",built:1844,finished:1956,pxq:"La Serena cathedral Chile coast",wiki:"Iglesia_Catedral_de_La_Serena",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  PE:[
    {name:"Machu Picchu",en:"Machu Picchu Peru",built:1450,finished:1460,pxq:"Machu Picchu Inca Peru",wiki:"Machu_Picchu",img:"https://images.unsplash.com/photo-1526392060635-9d6019884377?w=480&q=80&auto=format&fit=crop"},
    {name:"Nazca — záhadné linie",en:"Nazca Lines Peru",built:-500,finished:-500,pxq:"Nazca lines aerial Peru",wiki:"Nazca_lines",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Cusco — historické centrum",en:"Cusco Historic Centre Peru",built:1100,finished:1400,pxq:"Cusco Peru Inca colonial center",wiki:"Cusco",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Uros — plovoucí ostrovy Titicaca",en:"Uros Floating Islands Titicaca",built:1400,finished:1400,pxq:"Uros floating islands Lake Titicaca reed",wiki:"Uros",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Chan Chan — hliněné město",en:"Chan Chan Adobe City Peru",built:850,finished:1470,pxq:"Chan Chan adobe ruins Peru coast",wiki:"Chan_Chan",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Arequipa — katedrála",en:"Arequipa Cathedral Peru",built:1544,finished:1656,pxq:"Arequipa cathedral white stone Peru",wiki:"Arequipa_Cathedral",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Colca Canyon Peru",en:"Colca Canyon Peru",built:-999,finished:-999,pxq:"Colca Canyon Peru condor",wiki:"Colca_Canyon",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=480&q=80&auto=format&fit=crop"},
    {name:"Kuélap — pevnost",en:"Kuélap Fortress Peru",built:500,finished:900,pxq:"Kuelap cloud fortress Peru ruins",wiki:"Kuélap",img:"https://images.unsplash.com/photo-1534430480872-2b5a9f6a4b3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Paracas National Reserve",en:"Paracas National Reserve Peru",built:1975,finished:1975,pxq:"Paracas reserve Peru coast desert",wiki:"Paracas_National_Reserve",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Chavín de Huántar",en:"Chavín de Huántar Peru",built:-900,finished:-200,pxq:"Chavin ruins Peru ancient stone",wiki:"Chavín_de_Huántar",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
  ],
  VE:[
    {name:"Angel Falls — Salto Ángel",en:"Angel Falls Venezuela",built:-999,finished:-999,pxq:"Angel Falls world highest waterfall",wiki:"Angel_Falls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Roraima — stolová hora",en:"Mount Roraima Venezuela",built:-999,finished:-999,pxq:"Mount Roraima tepui Venezuela",wiki:"Mount_Roraima",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Canaima National Park",en:"Canaima National Park Venezuela",built:1962,finished:1962,pxq:"Canaima lagoon Venezuela",wiki:"Canaima_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Los Roques archipelago",en:"Los Roques Archipelago Venezuela",built:-999,finished:-999,pxq:"Los Roques coral beach Venezuela",wiki:"Los_Roques_Archipelago",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Caracas katedrála",en:"Caracas Cathedral Venezuela",built:1614,finished:1713,pxq:"Caracas cathedral Venezuela colonial",wiki:"Cathedral_of_Caracas",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Angostura Bridge",en:"Angostura Bridge Venezuela",built:1958,finished:1967,pxq:"Angostura bridge Venezuela Orinoco river",wiki:"Angostura_Bridge",img:"https://images.unsplash.com/photo-1559181567-c3fd75c7e0bd?w=480&q=80&auto=format&fit=crop"},
    {name:"Morrocoy National Park",en:"Morrocoy National Park Venezuela",built:1974,finished:1974,pxq:"Morrocoy coral reef Venezuela",wiki:"Morrocoy_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Mochima National Park",en:"Mochima National Park Venezuela",built:1973,finished:1973,pxq:"Mochima coast Venezuela Caribbean",wiki:"Mochima_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Mérida lanovka",en:"Mérida Cable Car Venezuela",built:1957,finished:1960,pxq:"Merida cable car Venezuela Andes mountains",wiki:"Mérida_cable_car",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Karibské pobřeží Venezuely",en:"Venezuelan Caribbean Coast",built:-999,finished:-999,pxq:"Venezuela Caribbean sea beach",wiki:"Venezuela",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
  ],
  CU:[
    {name:"Staré Havana — centro histórico",en:"Old Havana Historic Centre Cuba",built:1519,finished:1600,pxq:"Havana Cuba colonial buildings",wiki:"Old_Havana",img:"https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=480&q=80&auto=format&fit=crop"},
    {name:"El Capitolio Havana",en:"El Capitolio Havana Cuba",built:1926,finished:1929,pxq:"El Capitolio Havana Cuba",wiki:"El_Capitolio",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Trinidad — kolonialní město",en:"Trinidad Colonial Town Cuba",built:1514,finished:1800,pxq:"Trinidad Cuba colonial colorful street",wiki:"Trinidad,_Cuba",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Valle de Viñales",en:"Viñales Valley Cuba",built:-999,finished:-999,pxq:"Vinales valley Cuba tobacco",wiki:"Viñales_Valley",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Castillo del Morro Havana",en:"Castillo del Morro Havana Cuba",built:1589,finished:1630,pxq:"El Morro fortress Havana Cuba",wiki:"El_Morro_(Havana)",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Cienfuegos — urbanistika",en:"Cienfuegos Urban Heritage Cuba",built:1819,finished:1900,pxq:"Cienfuegos Cuba colonial architecture",wiki:"Cienfuegos",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Baracoa — první město",en:"Baracoa First Town Cuba",built:1511,finished:1511,pxq:"Baracoa Cuba oldest town mountains",wiki:"Baracoa",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Havana Malecón",en:"Havana Malecón Cuba",built:1901,finished:1952,pxq:"Havana Malecon Cuba sea promenade",wiki:"Malecón,_Havana",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Cayo Coco — pláže",en:"Cayo Coco Beaches Cuba",built:-999,finished:-999,pxq:"Cayo Coco Cuba white beach turquoise",wiki:"Cayo_Coco",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Santiago de Cuba katedrála",en:"Santiago de Cuba Cathedral",built:1528,finished:1818,pxq:"Santiago Cuba cathedral colonial",wiki:"Cathedral_of_Our_Lady_of_the_Assumption_(Santiago_de_Cuba)",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
  ],
  EC:[
    {name:"Galápágy — ostrovy",en:"Galápagos Islands Ecuador",built:-999,finished:-999,pxq:"Galapagos Islands iguana Ecuador",wiki:"Galápagos_Islands",img:"https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=480&q=80&auto=format&fit=crop"},
    {name:"Quito — historické centrum",en:"Quito Historic Centre Ecuador",built:1534,finished:1700,pxq:"Quito Ecuador historic center mountains",wiki:"Quito",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Cotopaxi — sopka",en:"Cotopaxi Volcano Ecuador",built:-999,finished:-999,pxq:"Cotopaxi volcano Ecuador",wiki:"Cotopaxi",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Mitad del Mundo — rovník",en:"Mitad del Mundo Monument Ecuador",built:1979,finished:1982,pxq:"Mitad del Mundo equator monument Ecuador",wiki:"Ciudad_Mitad_del_Mundo",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Cuenca — historické město",en:"Cuenca Historic Centre Ecuador",built:1557,finished:1800,pxq:"Cuenca Ecuador colonial cathedral",wiki:"Cuenca,_Ecuador",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Yasuní National Park",en:"Yasuní National Park Ecuador",built:1979,finished:1979,pxq:"Yasuni Amazon Ecuador rainforest",wiki:"Yasuní_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"La Compañía Church Quito",en:"La Compañía Church Quito",built:1605,finished:1765,pxq:"La Compania church Quito baroque",wiki:"La_Compañía",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Ingapirca — inkské ruiny",en:"Ingapirca Inca Ruins Ecuador",built:1400,finished:1532,pxq:"Ingapirca Inca ruins Ecuador",wiki:"Ingapirca",img:"https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=480&q=80&auto=format&fit=crop"},
    {name:"Baños — dobrodružné sporty",en:"Baños Adventure Town Ecuador",built:1861,finished:1861,pxq:"Banos Ecuador waterfall bridge adventure",wiki:"Baños,_Ecuador",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Mindo — cloud forest",en:"Mindo Cloud Forest Ecuador",built:-999,finished:-999,pxq:"Mindo cloud forest Ecuador birds",wiki:"Mindo",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
  ],
  PG:[
    {name:"Kokoda Track Papua",en:"Kokoda Track Papua New Guinea",built:1942,finished:1942,pxq:"Kokoda track jungle Papua New Guinea WWII",wiki:"Kokoda_Track",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Mount Wilhelm Papua",en:"Mount Wilhelm Papua New Guinea",built:-999,finished:-999,pxq:"Mount Wilhelm peak Papua New Guinea",wiki:"Mount_Wilhelm",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Rabaul — sopka Papua",en:"Rabaul Volcano Papua New Guinea",built:-999,finished:-999,pxq:"Rabaul volcano Papua New Guinea",wiki:"Rabaul",img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=480&q=80&auto=format&fit=crop"},
    {name:"Sepik řeka Papua",en:"Sepik River Papua New Guinea",built:-999,finished:-999,pxq:"Sepik river Papua New Guinea canoe",wiki:"Sepik_River",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Huli Wigmen Tari",en:"Tari Huli Wigmen Papua",built:-999,finished:-999,pxq:"Huli wigmen Papua New Guinea traditional",wiki:"Huli_people",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Port Moresby parlament",en:"Port Moresby Parliament Papua",built:1984,finished:1984,pxq:"Parliament Papua New Guinea government",wiki:"Parliament_of_Papua_New_Guinea",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Madang pobřeží Papua",en:"Madang Coast Papua New Guinea",built:-999,finished:-999,pxq:"Madang Papua New Guinea coast tropical",wiki:"Madang",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Tufi fjordy Papua",en:"Tufi Fjords Papua New Guinea",built:-999,finished:-999,pxq:"Tufi fjords Papua New Guinea diving",wiki:"Tufi,_Papua_New_Guinea",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Varirata National Park",en:"Varirata National Park Papua",built:1968,finished:1968,pxq:"Varirata national park Papua New Guinea bird",wiki:"Varirata_National_Park",img:"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=480&q=80&auto=format&fit=crop"},
    {name:"Loloata Island Papua",en:"Loloata Island Papua New Guinea",built:-999,finished:-999,pxq:"Loloata island Papua New Guinea coral",wiki:"Loloata_Island",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
  ],
  FJ:[
    {name:"Levuka — historické město",en:"Levuka Historical Port Town Fiji",built:1820,finished:1850,pxq:"Levuka Fiji historic colonial town",wiki:"Levuka",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Sigatoka Sand Dunes Fiji",en:"Sigatoka Sand Dunes Fiji",built:-999,finished:-999,pxq:"Sigatoka sand dunes Fiji beach",wiki:"Sigatoka_Sand_Dunes_National_Park",img:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=480&q=80&auto=format&fit=crop"},
    {name:"Yasawa Islands Fiji",en:"Yasawa Islands Fiji",built:-999,finished:-999,pxq:"Yasawa Islands Fiji tropical",wiki:"Yasawa_Islands",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Tavoro Waterfalls Fiji",en:"Tavoro Waterfalls Fiji",built:-999,finished:-999,pxq:"Fiji waterfall tropical",wiki:"Bouma_National_Heritage_Park",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Suva katedrála Fiji",en:"Suva Cathedral Fiji",built:1895,finished:1902,pxq:"Suva Cathedral Fiji",wiki:"Sacred_Heart_Cathedral,_Suva",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Sri Siva Subramaniya Nadi",en:"Sri Siva Subramaniya Temple Nadi",built:1926,finished:1926,pxq:"Sri Siva Subramaniya temple Fiji Hindu",wiki:"Sri_Siva_Subramaniya",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Mamanuca Islands Fiji",en:"Mamanuca Islands Fiji",built:-999,finished:-999,pxq:"Mamanuca islands Fiji tropical sea",wiki:"Mamanuca_Islands",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Taveuni Island Fiji",en:"Taveuni Island Fiji",built:-999,finished:-999,pxq:"Taveuni island Fiji rainforest",wiki:"Taveuni",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Garden of the Sleeping Giant",en:"Garden of the Sleeping Giant Fiji",built:1977,finished:1977,pxq:"orchid garden Fiji tropical flowers",wiki:"Garden_of_the_Sleeping_Giant",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Denarau Island Fiji",en:"Denarau Island Fiji",built:1998,finished:2000,pxq:"Denarau Island Fiji",wiki:"Denarau_Island",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
  ],
  WS:[
    {name:"To Sua Ocean Trench Samoa",en:"To Sua Ocean Trench Samoa",built:-999,finished:-999,pxq:"To Sua ocean trench Samoa swimming",wiki:"To_Sua_Ocean_Trench",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Piula Cave Pool Samoa",en:"Piula Cave Pool Samoa",built:-999,finished:-999,pxq:"Piula cave pool Samoa freshwater swim",wiki:"Piula",img:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=480&q=80&auto=format&fit=crop"},
    {name:"Lalomanu Beach Samoa",en:"Lalomanu Beach Samoa",built:-999,finished:-999,pxq:"Samoa beach tropical",wiki:"Lalomanu",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"Robert Louis Stevenson Museum",en:"Robert Louis Stevenson Museum Samoa",built:1891,finished:1894,pxq:"Vailima Samoa colonial house museum",wiki:"Stevenson%27s_villa_Vailima",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Apia Cathedral Samoa",en:"Immaculate Conception Cathedral Apia",built:1885,finished:1905,pxq:"Immaculate Conception Cathedral Apia",wiki:"Cathedral_of_the_Immaculate_Conception,_Apia",img:"https://images.unsplash.com/photo-1548625149-720754874de6?w=480&q=80&auto=format&fit=crop"},
    {name:"Papapapaitai Falls Samoa",en:"Papapapaitai Falls Samoa",built:-999,finished:-999,pxq:"Samoa waterfall jungle tropical",wiki:"Papapapaitai_Falls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
    {name:"Savai'i Island Samoa",en:"Savai'i Island Samoa",built:-999,finished:-999,pxq:"Savaii island Samoa Pacific volcanic",wiki:"Savai%27i",img:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=480&q=80&auto=format&fit=crop"},
    {name:"National Museum of Samoa",en:"National Museum of Samoa",built:1984,finished:1984,pxq:"Samoa museum Apia Pacific culture",wiki:"Museum_of_Samoa",img:"https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?w=480&q=80&auto=format&fit=crop"},
    {name:"Falealupo Rainforest Samoa",en:"Falealupo Rainforest Samoa",built:-999,finished:-999,pxq:"Falealupo rainforest Samoa ancient trees",wiki:"Falealupo",img:"https://images.unsplash.com/photo-1448375240586-882707db888b?w=480&q=80&auto=format&fit=crop"},
    {name:"Afu Aau Waterfall Samoa",en:"Afu Aau Waterfall Samoa",built:-999,finished:-999,pxq:"Samoa waterfall lush tropical",wiki:"Afu_Aau_Falls",img:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=480&q=80&auto=format&fit=crop"},
  ],
};
// Fallback (should rarely be needed now)

const LANDMARK_FALLBACK = [
  {name:"Machu Picchu",en:"Machu Picchu",built:1450,finished:1460,pxq:"Machu Picchu",wiki:"Machu_Picchu",img:"https://images.unsplash.com/photo-1526392060635-9d6019884377?w=480&q=80&auto=format&fit=crop"},
  {name:"Koloseum",en:"Colosseum",built:70,finished:80,pxq:"Colosseum Rome Italy",wiki:"Colosseum",img:"https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=480&q=80&auto=format&fit=crop"},
  {name:"Eiffelova věž",en:"Eiffel Tower",built:1887,finished:1889,pxq:"Eiffel Tower Paris",wiki:"Eiffel_Tower",img:"https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=480&q=80&auto=format&fit=crop"},
  {name:"Chrám Angkor Vat",en:"Angkor Wat",built:1113,finished:1150,pxq:"Angkor Wat",wiki:"Angkor_Wat",img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=480&q=80&auto=format&fit=crop"},
  {name:"Tádž Mahal",en:"Taj Mahal",built:1632,finished:1653,pxq:"Taj Mahal Agra India",wiki:"Taj_Mahal",img:"https://images.unsplash.com/photo-1564507592333-c60657eea523?w=480&q=80&auto=format&fit=crop"},
  {name:"Big Ben",en:"Big Ben",built:1844,finished:1859,pxq:"Big Ben",wiki:"Big_Ben",img:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=480&q=80&auto=format&fit=crop"},
  {name:"Socha Svobody",en:"Statue of Liberty",built:1875,finished:1886,pxq:"Statue of Liberty New York",wiki:"Statue_of_Liberty",img:"https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=480&q=80&auto=format&fit=crop"},
  {name:"Velká čínská zeď",en:"Great Wall of China",built:-700,finished:1644,pxq:"Great Wall China mountains",wiki:"Great_Wall_of_China",img:"https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=480&q=80&auto=format&fit=crop"},
  {name:"Pyramidy v Gíze",en:"Pyramids of Giza",built:-2580,finished:-2560,pxq:"Pyramids Giza Egypt desert",wiki:"Giza_pyramid_complex",img:"https://images.unsplash.com/photo-1539650116574-75f0f07c8b17?w=480&q=80&auto=format&fit=crop"},
  {name:"Opera v Sydney",en:"Sydney Opera House",built:1959,finished:1973,pxq:"Sydney Opera House harbour",wiki:"Sydney_Opera_House",img:"https://images.unsplash.com/photo-1523059623039-a9ed027b7fad?w=480&q=80&auto=format&fit=crop"},
];

// ── Country founding years & context ────────────────────────────────────────
const FOUNDED = {
  CZ:{ year:1993, cs:"vznik samostatné České republiky po rozdělení Československa",                en:"establishment of the independent Czech Republic after the dissolution of Czechoslovakia" },
  DE:{ year:1990, cs:"znovusjednocení Německa po pádu Berlínské zdi",                               en:"reunification of Germany after the fall of the Berlin Wall" },
  FR:{ year:1792, cs:"vyhlášení Francouzské republiky po revoluci",                                  en:"proclamation of the French Republic after the Revolution" },
  IT:{ year:1861, cs:"sjednocení Itálie pod králem Viktorem Emanuelem II.",                         en:"unification of Italy under King Victor Emmanuel II" },
  ES:{ year:1978, cs:"přijetí demokratické ústavy po Frankově diktatuře",                           en:"adoption of the democratic constitution after Franco's dictatorship" },
  UA:{ year:1991, cs:"vyhlášení nezávislosti po rozpadu Sovětského svazu",                           en:"declaration of independence following the dissolution of the Soviet Union" },
  PL:{ year:1918, cs:"obnovení nezávislého polského státu po 123 letech dělení",                     en:"restoration of independent Poland after 123 years of partition" },
  AT:{ year:1955, cs:"obnovení plné suverenity Rakouska po spojenecké okupaci",                      en:"restoration of full Austrian sovereignty after Allied occupation" },
  BE:{ year:1830, cs:"belgická revoluce a vyhlášení nezávislosti na Nizozemsku",                     en:"Belgian Revolution and declaration of independence from the Netherlands" },
  NL:{ year:1648, cs:"uznání nezávislosti Nizozemska Vestfálským mírem",                             en:"recognition of Dutch independence by the Peace of Westphalia" },
  PT:{ year:1143, cs:"první uznání Portugalska jako království papežem",                             en:"first papal recognition of Portugal as a kingdom" },
  SE:{ year:1523, cs:"švédská nezávislost na Kalmarské unii pod Gustavem Vasou",                    en:"Swedish independence from the Kalmar Union under Gustav Vasa" },
  DK:{ year:980,  cs:"sjednocení Dánska pod králem Haraldem Modrozubým",                            en:"unification of Denmark under King Harald Bluetooth" },
  FI:{ year:1917, cs:"vyhlášení finské nezávislosti na Rusku",                                       en:"declaration of Finnish independence from Russia" },
  GR:{ year:1821, cs:"řecká válka za nezávislost na Osmanské říši",                                  en:"Greek War of Independence from the Ottoman Empire" },
  RO:{ year:1881, cs:"vyhlášení Rumunského království po válce za nezávislost",                      en:"proclamation of the Kingdom of Romania after the War of Independence" },
  HU:{ year:1000, cs:"korunování Štěpána I. a vznik Uherského království",                          en:"coronation of Stephen I and establishment of the Kingdom of Hungary" },
  SK:{ year:1993, cs:"vznik samostatného Slovenska po mírovém rozdělení Československa",             en:"establishment of independent Slovakia after the peaceful dissolution of Czechoslovakia" },
  HR:{ year:1991, cs:"vyhlášení chorvatské nezávislosti na Jugoslávii",                              en:"declaration of Croatian independence from Yugoslavia" },
  BG:{ year:1878, cs:"obnovení Bulharského knížectví po rusko-turecké válce",                        en:"restoration of the Bulgarian principality after the Russo-Turkish War" },
  JP:{ year:660,  cs:"tradiční datum vzniku japonského císařství",                                   en:"traditional date of the establishment of the Japanese imperial state" },
  IN:{ year:1947, cs:"vyhlášení indické nezávislosti na Británii",                                   en:"declaration of Indian independence from Britain" },
  CN:{ year:1949, cs:"vyhlášení Čínské lidové republiky Mao Ce-tungem",                             en:"proclamation of the People's Republic of China by Mao Zedong" },
  SA:{ year:1932, cs:"sjednocení Arabského poloostrova a vznik Saúdského království",               en:"unification of the Arabian Peninsula and establishment of the Saudi Kingdom" },
  EG:{ year:1953, cs:"vyhlášení egyptské republiky po pádu monarchie",                              en:"proclamation of the Egyptian Republic after the fall of the monarchy" },
  ZA:{ year:1994, cs:"první demokratické volby po skončení apartheidu",                             en:"first democratic elections after the end of apartheid" },
  NG:{ year:1960, cs:"nigérijská nezávislost na Velké Británii",                                     en:"Nigerian independence from Great Britain" },
  CA:{ year:1867, cs:"vznik kanadské konfederace zákonem British North America Act",                 en:"establishment of the Canadian Confederation by the British North America Act" },
  BR:{ year:1822, cs:"vyhlášení brazilské nezávislosti na Portugalsku korunním princem Petrem",     en:"declaration of Brazilian independence from Portugal by Crown Prince Pedro" },
  US:{ year:1776, cs:"podpis Deklarace nezávislosti třinácti amerických kolonií",                   en:"signing of the Declaration of Independence by thirteen American colonies" },
  MX:{ year:1821, cs:"mexická nezávislost na Španělsku po jedenáctileté válce",                     en:"Mexican independence from Spain after an eleven-year war" },
  AU:{ year:1901, cs:"vznik Australského společenství spojením šesti kolonií",                      en:"establishment of the Commonwealth of Australia by federation of six colonies" },
  NZ:{ year:1907, cs:"získání statusu dominia v rámci Britského impéria",                           en:"attainment of Dominion status within the British Empire" },
  MA:{ year:1956, cs:"marockí nezávislost na Francii a Španělsku",                                  en:"Moroccan independence from France and Spain" },
  ET:{ year:1941, cs:"obnovení etiopské suverenity po italské okupaci",                             en:"restoration of Ethiopian sovereignty after Italian occupation" },
  KE:{ year:1963, cs:"keňská nezávislost na Velké Británii",                                         en:"Kenyan independence from Great Britain" },
  TZ:{ year:1964, cs:"sjednocení Tanganiky a Zanzibaru ve Sjednocenou republiku Tanzanii",          en:"union of Tanganyika and Zanzibar to form the United Republic of Tanzania" },
  GH:{ year:1957, cs:"ghanská nezávislost — první subsaharský stát bez koloniální vlády",           en:"Ghanaian independence — the first sub-Saharan state free of colonial rule" },
  CM:{ year:1960, cs:"kamerunská nezávislost na Francii",                                            en:"Cameroonian independence from France" },
  AO:{ year:1975, cs:"angolská nezávislost na Portugalsku po dlouhé válce",                         en:"Angolan independence from Portugal after a long war" },
  MZ:{ year:1975, cs:"mozambická nezávislost na Portugalsku",                                        en:"Mozambican independence from Portugal" },
  AR:{ year:1816, cs:"vyhlášení argentinské nezávislosti na Španělsku v Tucumánu",                 en:"declaration of Argentine independence from Spain in Tucumán" },
  CO:{ year:1819, cs:"osvobození Gran Colombie Simónem Bolívarem",                                  en:"liberation of Gran Colombia by Simón Bolívar" },
  CL:{ year:1818, cs:"vyhlášení chilské nezávislosti po vítězství u Chacabuca",                    en:"declaration of Chilean independence after the victory at Chacabuco" },
  PE:{ year:1821, cs:"vyhlášení peruánské nezávislosti generálem San Martínem",                     en:"declaration of Peruvian independence by General San Martín" },
  VE:{ year:1811, cs:"venezuelská deklarace nezávislosti — první v Jižní Americe",                 en:"Venezuelan declaration of independence — the first in South America" },
  CU:{ year:1902, cs:"vyhlášení Kubánské republiky po španělsko-americké válce",                    en:"proclamation of the Cuban Republic after the Spanish-American War" },
  EC:{ year:1830, cs:"odtržení Ekvádoru od Gran Colombie",                                           en:"secession of Ecuador from Gran Colombia" },
  PG:{ year:1975, cs:"nezávislost Papuy Nové Guineje na Austrálii",                                 en:"independence of Papua New Guinea from Australia" },
  FJ:{ year:1970, cs:"fidžijská nezávislost na Velké Británii",                                      en:"Fijian independence from Great Britain" },
  WS:{ year:1962, cs:"samojská nezávislost — první tichomořský ostrovní stát",                      en:"Samoan independence — the first Pacific island state" }
};

// ── SVG Shapes ─────────────────────────────────────────────────────────────
const SHAPES = {
  CZ:{ paths:["M 22,74 L 45,60 L 75,54 L 112,52 L 145,50 L 168,59 L 178,79 L 172,97 L 155,106 L 120,113 L 88,118 L 62,112 L 38,104 L 20,90 Z"], hint_cs:"Střední Evropa — širší západ, užší východ", hint_en:"Central Europe — wider west, narrower east" },
  DE:{ paths:["M 60,18 L 110,18 L 148,32 L 158,55 L 150,85 L 162,108 L 148,128 L 118,138 L 82,132 L 58,118 L 45,92 L 42,65 L 50,40 Z"], hint_cs:"Mírně nepravidelný tvar v srdci Evropy", hint_en:"Slightly irregular shape in the heart of Europe" },
  FR:{ paths:["M 42,32 L 95,20 L 148,35 L 168,72 L 162,118 L 132,152 L 82,155 L 42,138 L 22,98 L 28,60 Z"], hint_cs:"Téměř šestihranný tvar — hexagon Evropy", hint_en:"Almost hexagonal shape — the hexagon of Europe" },
  IT:{ paths:["M 72,10 L 108,10 L 132,28 L 142,62 L 148,90 L 138,118 L 122,150 L 98,180 L 80,178 L 68,158 L 58,128 L 52,95 L 58,65 L 62,38 Z"], hint_cs:"Bota — dlouhý poloostrov kopající do moře", hint_en:"The Boot — long peninsula kicking into the sea" },
  ES:{ paths:["M 33,50 L 76,40 L 116,38 L 162,52 L 177,82 L 167,122 L 126,138 L 66,130 L 30,112 L 20,82 Z"], hint_cs:"Pětiúhelníkový tvar Iberského poloostrova", hint_en:"Roughly pentagonal Iberian Peninsula shape" },
  UA:{ paths:["M 24,72 L 64,54 L 108,50 L 149,52 L 175,62 L 182,83 L 174,108 L 148,118 L 104,122 L 61,118 L 26,108 L 16,88 Z"], hint_cs:"Plochý horizontální tvar — výrazně širší než vyšší", hint_en:"Flat horizontal shape — significantly wider than tall" },
  PL:{ paths:["M 42,48 L 98,40 L 148,44 L 170,62 L 168,95 L 158,118 L 118,128 L 68,126 L 38,108 L 28,80 Z"], hint_cs:"Přibližně čtvercový — symetrický tvar", hint_en:"Roughly square — symmetric shape" },
  JP:{ paths:["M 138,24 L 158,40 L 167,60 L 164,80 L 154,100 L 140,120 L 126,140 L 110,154 L 93,153 L 80,140 L 78,120 L 87,102 L 98,82 L 110,62 L 122,42 Z","M 66,28 L 96,22 L 113,32 L 107,48 L 87,52 L 66,44 Z"], hint_cs:"Archipelag — hlavní ostrov diagonálně, menší nahoře", hint_en:"Archipelago — main island diagonal, smaller island above" },
  IN:{ paths:["M 54,32 L 94,24 L 145,34 L 168,62 L 162,90 L 148,118 L 128,148 L 108,172 L 90,168 L 68,148 L 50,118 L 38,84 L 38,58 Z"], hint_cs:"Trojúhelníkový poloostrov zužující se na jihu", hint_en:"Triangular subcontinent tapering to a point in the south" },
  CN:{ paths:["M 32,50 L 80,28 L 132,30 L 170,48 L 180,80 L 172,118 L 145,145 L 105,155 L 60,148 L 28,122 L 18,88 Z"], hint_cs:"Velký nepravidelný tvar — jeden z největších států světa", hint_en:"Large irregular shape — one of the world's largest countries" },
  SA:{ paths:["M 55,38 L 130,35 L 165,55 L 170,80 L 162,118 L 140,145 L 105,155 L 72,148 L 42,128 L 32,95 L 40,65 Z"], hint_cs:"Velký blok — Arabský poloostrov s členitým pobřežím", hint_en:"Large block — Arabian Peninsula with rugged coastline" },
  EG:{ paths:["M 36,40 L 122,38 L 128,52 L 148,52 L 158,67 L 150,82 L 163,90 L 158,123 L 148,130 L 36,130 L 28,88 Z"], hint_cs:"Čtvercový tvar s trojúhelníkovým poloostrovem vpravo nahoře", hint_en:"Square shape with a triangular peninsula jutting upper right" },
  ZA:{ paths:["M 45,45 L 118,38 L 162,55 L 172,88 L 160,125 L 128,158 L 95,165 L 62,155 L 38,125 L 28,90 Z"], hint_cs:"Nepravidelný tvar na jihu Afrického kontinentu", hint_en:"Irregular shape at the southern tip of the African continent" },
  NG:{ paths:["M 48,42 L 115,38 L 155,50 L 165,78 L 158,108 L 138,130 L 98,135 L 58,128 L 38,105 L 35,75 Z"], hint_cs:"Trapézový tvar v západní Africe", hint_en:"Trapezoidal shape in West Africa" },
  CA:{ paths:["M 18,88 L 33,67 L 54,54 L 80,44 L 105,37 L 136,31 L 158,40 L 173,57 L 175,77 L 162,84 L 147,72 L 131,78 L 113,68 L 97,78 L 79,80 L 61,75 L 47,88 L 33,94 Z"], hint_cs:"Velmi široký — zubaté severní pobřeží", hint_en:"Very wide — jagged northern coastline, straight southern border" },
  BR:{ paths:["M 62,22 L 108,17 L 148,27 L 172,48 L 178,76 L 172,106 L 158,133 L 132,158 L 105,168 L 78,158 L 55,138 L 42,108 L 45,78 L 52,52 Z"], hint_cs:"Velký blob — jedna z největších zemí světa", hint_en:"Large blob — one of the world's biggest countries" },
  US:{ paths:["M 20,65 L 58,45 L 108,40 L 155,42 L 180,60 L 183,88 L 170,110 L 138,118 L 92,118 L 50,115 L 20,100 L 15,80 Z","M 22,130 L 55,125 L 62,145 L 35,152 Z"], hint_cs:"Velký nepravidelný blok s Aljaškou odděleně vlevo", hint_en:"Large irregular block with Alaska shown separately on left" },
  MX:{ paths:["M 28,45 L 95,38 L 148,40 L 165,58 L 158,80 L 128,105 L 95,128 L 58,135 L 35,118 L 22,95 Z"], hint_cs:"Nepravidelný tvar — na severu široký, na jihu zužující se", hint_en:"Irregular shape — wide in north, narrowing southward" },
  AU:{ paths:["M 48,70 L 84,48 L 130,42 L 168,56 L 185,80 L 182,113 L 160,143 L 124,158 L 83,152 L 50,132 L 33,105 L 36,79 Z"], hint_cs:"Oválný kontinent se zálivem na severu", hint_en:"Oval continent — distinctive gulf indent on the north" },
  NZ:{ paths:["M 105,28 L 128,42 L 138,70 L 125,100 L 105,108 L 90,95 L 82,68 L 88,42 Z","M 75,122 L 108,112 L 125,130 L 118,165 L 88,178 L 68,168 L 60,148 L 65,130 Z"], hint_cs:"Dva ostrovy — úzký severní a širší jižní", hint_en:"Two islands — narrow North Island and wider South Island" },
  AT:{ paths:["M 38,55 L 88,42 L 142,45 L 170,62 L 165,92 L 148,112 L 105,118 L 58,115 L 32,95 L 30,72 Z"], hint_cs:"Relativně úzký pruh — táhne se od západu na východ střední Evropy", hint_en:"Relatively narrow strip — stretching west to east through Central Europe" },
  BE:{ paths:["M 55,38 L 122,35 L 145,55 L 148,88 L 128,115 L 85,118 L 48,105 L 38,75 Z"], hint_cs:"Malý kompaktní tvar v srdci severozápadní Evropy", hint_en:"Small compact shape in the heart of northwestern Europe" },
  NL:{ paths:["M 55,30 L 118,28 L 140,48 L 138,80 L 122,108 L 85,118 L 52,112 L 35,85 L 38,55 Z"], hint_cs:"Malý trojúhelníkovitý tvar s pobřežím na severozápadě", hint_en:"Small triangular shape with coastline to the northwest" },
  PT:{ paths:["M 55,20 L 92,18 L 108,35 L 110,75 L 108,118 L 102,155 L 80,162 L 58,155 L 48,118 L 45,72 L 48,38 Z"], hint_cs:"Úzký svislý pruh na krajním západ Iberského poloostrova", hint_en:"Narrow vertical strip at the far western edge of the Iberian Peninsula" },
  SE:{ paths:["M 88,15 L 132,12 L 158,32 L 165,65 L 158,105 L 148,140 L 128,165 L 95,168 L 72,148 L 62,108 L 65,68 L 72,35 Z"], hint_cs:"Dlouhý úzký tvar táhnoucí se od jihu na sever Skandinávie", hint_en:"Long narrow shape stretching south to north across Scandinavia" },
  DK:{ paths:["M 75,35 L 108,30 L 122,50 L 118,80 L 100,95 L 75,92 L 62,72 L 65,48 Z","M 118,18 L 148,15 L 155,32 L 138,42 L 118,38 Z"], hint_cs:"Malý poloostrov s ostrovy — Jylland a Dánské ostrovy", hint_en:"Small peninsula with islands — Jutland and the Danish islands" },
  FI:{ paths:["M 82,18 L 128,15 L 158,35 L 162,68 L 155,105 L 138,138 L 108,158 L 78,155 L 55,135 L 48,98 L 52,62 L 62,35 Z"], hint_cs:"Nepravidelný tvar s výrazným rukávem na jihu (Finský záliv)", hint_en:"Irregular shape with a prominent arm in the south (Gulf of Finland)" },
  GR:{ paths:["M 52,28 L 102,22 L 148,30 L 162,55 L 158,85 L 135,105 L 98,118 L 65,112 L 45,88 L 42,58 Z","M 70,132 L 95,128 L 102,148 L 85,155 L 68,148 Z"], hint_cs:"Nepravidelný tvar s poloostrovy a ostrovy — Peloponés a Kréta", hint_en:"Irregular shape with peninsulas and islands — Peloponnese and Crete" },
  RO:{ paths:["M 38,45 L 95,38 L 148,42 L 172,62 L 168,95 L 155,118 L 118,128 L 72,125 L 38,108 L 28,80 Z"], hint_cs:"Přibližně kruhový tvar v jihovýchodní Evropě", hint_en:"Roughly circular shape in southeastern Europe" },
  HU:{ paths:["M 30,62 L 82,48 L 132,50 L 162,65 L 168,90 L 155,112 L 112,122 L 65,118 L 30,102 L 22,82 Z"], hint_cs:"Nízký horizontální tvar — Panonská nížina", hint_en:"Low horizontal shape — the Pannonian Plain" },
  SK:{ paths:["M 28,68 L 72,55 L 118,52 L 155,58 L 170,75 L 162,95 L 128,105 L 82,108 L 38,102 L 22,85 Z"], hint_cs:"Velmi plochý horizontální tvar — hornatý západ, nížiny na východě", hint_en:"Very flat horizontal shape — mountainous west, plains to the east" },
  HR:{ paths:["M 45,38 L 88,30 L 122,35 L 145,52 L 140,75 L 115,90 L 78,95 L 48,82 Z","M 55,108 L 88,100 L 108,118 L 102,148 L 72,158 L 48,148 L 42,128 Z"], hint_cs:"Dva díly — severní kontinent a pobřežní pruh podél Jadranu", hint_en:"Two parts — northern mainland and a coastal strip along the Adriatic" },
  BG:{ paths:["M 38,42 L 98,38 L 148,42 L 172,62 L 168,92 L 145,112 L 98,118 L 48,115 L 25,95 L 28,65 Z"], hint_cs:"Přibližně obdélníkový tvar v jihovýchodní Evropě na pobřeží Černého moře", hint_en:"Roughly rectangular shape in southeastern Europe on the Black Sea coast" },
  MA:{ paths:["M 35,30 L 105,22 L 148,35 L 162,62 L 155,92 L 135,118 L 98,132 L 55,128 L 28,108 L 22,75 Z"], hint_cs:"Přibližně pětiúhelníkový tvar na severozápadě Afriky", hint_en:"Roughly pentagonal shape in northwestern Africa" },
  ET:{ paths:["M 45,35 L 105,28 L 158,38 L 175,65 L 168,98 L 148,125 L 115,138 L 72,132 L 38,112 L 28,82 L 32,55 Z"], hint_cs:"Nepravidelný tvar s výběžkem na východě (Africký roh)", hint_en:"Irregular shape with a protrusion to the east (Horn of Africa)" },
  KE:{ paths:["M 55,28 L 115,22 L 158,35 L 170,65 L 155,98 L 128,122 L 88,128 L 52,118 L 35,90 L 38,58 Z"], hint_cs:"Přibližně čtvercový tvar v rovníkové Africe", hint_en:"Roughly square shape in equatorial Africa" },
  TZ:{ paths:["M 38,30 L 102,22 L 155,32 L 172,62 L 165,98 L 145,128 L 108,142 L 65,138 L 30,118 L 18,85 L 22,52 Z"], hint_cs:"Velký nepravidelný tvar ve východní Africe", hint_en:"Large irregular shape in East Africa" },
  GH:{ paths:["M 55,30 L 115,25 L 145,45 L 148,78 L 138,108 L 108,122 L 72,118 L 45,100 L 38,70 L 45,42 Z"], hint_cs:"Malý čtvercový tvar na pobřeží Guinejského zálivu", hint_en:"Small square shape on the Gulf of Guinea coast" },
  CM:{ paths:["M 50,22 L 118,18 L 155,38 L 162,68 L 148,100 L 122,128 L 85,138 L 50,132 L 28,108 L 25,72 L 35,42 Z"], hint_cs:"Nepravidelný tvar s výběžkem na severu (jezero Čad)", hint_en:"Irregular shape with a protrusion to the north (Lake Chad)" },
  AO:{ paths:["M 35,30 L 108,22 L 162,32 L 178,62 L 172,100 L 148,132 L 108,148 L 62,142 L 28,118 L 18,82 L 22,52 Z"], hint_cs:"Velký obdélníkový tvar na jihozápadním atlantickém pobřeží Afriky", hint_en:"Large rectangular shape on the southwestern Atlantic coast of Africa" },
  MZ:{ paths:["M 55,20 L 102,15 L 148,22 L 168,48 L 162,85 L 145,125 L 118,158 L 85,168 L 55,162 L 35,138 L 28,102 L 35,62 Z"], hint_cs:"Dlouhý svislý tvar podél jihozápadního pobřeží Indického oceánu", hint_en:"Long vertical shape along the southwestern Indian Ocean coast" },
  AR:{ paths:["M 55,18 L 102,15 L 138,22 L 155,48 L 148,82 L 135,118 L 115,148 L 88,172 L 65,168 L 45,148 L 35,112 L 38,78 L 45,45 Z"], hint_cs:"Trojúhelníkový tvar zužující se na jihu — Patagonie", hint_en:"Triangular shape narrowing southward — Patagonia" },
  CO:{ paths:["M 42,25 L 98,18 L 148,22 L 165,48 L 158,80 L 135,105 L 98,118 L 58,112 L 30,88 L 28,58 Z"], hint_cs:"Nepravidelný tvar v severozápadní části Jižní Ameriky", hint_en:"Irregular shape in the northwestern part of South America" },
  CL:{ paths:["M 68,15 L 95,12 L 108,28 L 105,65 L 100,105 L 92,145 L 82,175 L 68,178 L 55,162 L 52,125 L 55,85 L 58,48 Z"], hint_cs:"Extrémně úzký a dlouhý pruh — nejdelší země světa", hint_en:"Extremely narrow and long strip — the world's longest country" },
  PE:{ paths:["M 38,25 L 98,18 L 152,28 L 168,58 L 162,92 L 145,122 L 112,145 L 72,142 L 38,118 L 22,85 L 25,52 Z"], hint_cs:"Nepravidelný tvar na pacifickém pobřeží Jižní Ameriky", hint_en:"Irregular shape on the Pacific coast of South America" },
  VE:{ paths:["M 32,32 L 95,22 L 148,28 L 168,50 L 162,80 L 138,102 L 95,112 L 52,108 L 25,85 L 22,58 Z"], hint_cs:"Nepravidelný tvar v severní části Jižní Ameriky", hint_en:"Irregular shape in the northern part of South America" },
  CU:{ paths:["M 22,68 L 58,52 L 105,45 L 148,48 L 172,62 L 168,85 L 145,98 L 102,102 L 58,98 L 25,88 Z"], hint_cs:"Dlouhý úzký ostrov — připomíná krokodýla", hint_en:"Long narrow island — resembles a crocodile" },
  EC:{ paths:["M 48,35 L 105,28 L 148,38 L 158,68 L 148,98 L 122,115 L 85,118 L 55,105 L 38,80 L 40,52 Z"], hint_cs:"Malý čtvercový tvar na Pacifickém pobřeží u rovníku", hint_en:"Small square shape on the Pacific coast at the equator" },
  PG:{ paths:["M 22,45 L 85,32 L 145,38 L 175,62 L 170,95 L 148,118 L 108,128 L 62,122 L 28,102 L 15,72 Z","M 155,25 L 178,22 L 182,42 L 162,48 L 148,38 Z"], hint_cs:"Velký nepravidelný ostrov s malým výběžkem — Nová Guinea", hint_en:"Large irregular island with small appendage — New Guinea" },
  FJ:{ paths:["M 58,42 L 102,35 L 135,45 L 142,72 L 128,98 L 95,108 L 62,102 L 42,80 L 45,55 Z","M 118,22 L 148,18 L 158,35 L 142,42 L 122,38 Z"], hint_cs:"Dva hlavní ostrovy v Tichém oceánu", hint_en:"Two main islands in the Pacific Ocean" },
  WS:{ paths:["M 52,48 L 108,40 L 138,55 L 140,85 L 122,108 L 85,115 L 52,108 L 35,85 L 38,62 Z","M 120,30 L 148,25 L 155,42 L 135,48 L 118,42 Z"], hint_cs:"Dva ostrovy v jižním Pacifiku", hint_en:"Two islands in the South Pacific" }
};

function buildShapeVisual(code) {
  const s = SHAPES[code];
  if (!s) return "<span style='font-size:3rem'>🗺️</span>";
  const pathsHtml = s.paths.map(d => `<path d="${d}" class="shape-path"/>`).join("");
  return `<div class="shape-canvas">
    <svg class="shape-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6EE7F7" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#A78BFA" stop-opacity="0.7"/>
        </linearGradient>
        <filter id="gf" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <g filter="url(#gf)">${pathsHtml}</g>
    </svg>
  </div>`;
}

// ── State ───────────────────────────────────────────────────────────────────
const state = {
  lang: "cs",
  continent: "all",
  country: null,
  lastCode: null,
  questions: [],
  index: 0,
  score: 0,
  streak: 0,
  answers: [],
  timeLeft: Q_TIME,
  timerId: null,
  answered: false
};
let countryPool = [];

// ── DOM ─────────────────────────────────────────────────────────────────────
const el = {
  langBtn:        document.getElementById("lang-btn"),
  langFlag:       document.getElementById("lang-flag"),
  langLabel:      document.getElementById("lang-label"),
  scoreVal:       document.getElementById("score-val"),
  roundVal:       document.getElementById("round-val"),
  timerPill:      document.getElementById("timer-pill"),
  timerVal:       document.getElementById("timer-val"),
  countryBanner:  document.getElementById("country-banner"),
  countryFlagB:   document.getElementById("country-flag-banner"),
  countryNameB:   document.getElementById("country-name-banner"),
  startScreen:    document.getElementById("start-screen"),
  quizScreen:     document.getElementById("quiz-screen"),
  resultScreen:   document.getElementById("result-screen"),
  continentGrid:  document.getElementById("continent-grid"),
  continentLabel: document.getElementById("continent-label"),
  featuresLabel:  document.getElementById("features-label"),
  featuresList:   document.getElementById("features-list"),
  startBtn:       document.getElementById("start-btn"),
  startBtnText:   document.getElementById("start-btn-text"),
  progressFill:   document.getElementById("progress-fill"),
  progressLabel:  document.getElementById("progress-label"),
  catBadge:       document.getElementById("cat-badge"),
  streakBadge:    document.getElementById("streak-badge"),
  streakNum:      document.getElementById("streak-num"),
  qTitle:         document.getElementById("q-title"),
  qText:          document.getElementById("q-text"),
  visualZone:     document.getElementById("visual-zone"),
  hintCard:       document.getElementById("hint-card"),
  hintText:       document.getElementById("hint-text"),
  optionsWrap:    document.getElementById("options-wrap"),
  feedbackBar:    document.getElementById("feedback-bar"),
  fbIcon:         document.getElementById("fb-icon"),
  fbText:         document.getElementById("fb-text"),
  nextBtn:        document.getElementById("next-btn"),
  nextBtnText:    document.getElementById("next-btn-text"),
  medalWrap:      document.getElementById("medal-wrap"),
  resultTitle:    document.getElementById("result-title"),
  bigScore:       document.getElementById("big-score"),
  bigDenom:       document.getElementById("big-denom"),
  resultMsg:      document.getElementById("result-msg"),
  summaryGrid:    document.getElementById("summary-grid"),
  restartBtn:     document.getElementById("restart-btn"),
  restartBtnText: document.getElementById("restart-btn-text")
};

// ── Helpers ─────────────────────────────────────────────────────────────────
const t  = () => UI[state.lang];
const cd = (c) => c[state.lang];
const fmt = () => new Intl.NumberFormat(state.lang === "cs" ? "cs-CZ" : "en-US");

function showScreen(name) {
  ["start-screen","quiz-screen","result-screen"].forEach(id => {
    const s = document.getElementById(id);
    s.classList.remove("active");
  });
  const target = document.getElementById(name);
  requestAnimationFrame(() => target.classList.add("active"));
}

// ── Language ────────────────────────────────────────────────────────────────
function toggleLang() {
  state.lang = state.lang === "cs" ? "en" : "cs";
  document.documentElement.lang = state.lang;
  applyI18n();
}

function applyI18n() {
  const ui = t();
  el.langFlag.textContent  = ui.langFlag;
  el.langLabel.textContent = ui.langLabel;
  el.startBtnText.textContent   = ui.startBtn;
  el.resultTitle.textContent    = ui.resultTitle;
  el.restartBtnText.textContent = ui.restartBtn;
  el.continentLabel.textContent = ui.continentLabel;
  el.featuresLabel.textContent  = ui.featuresLabel;
  document.title = ui.startTitle;
  renderContinents();
  renderFeatures();
  updateTopbar();
}

// ── SVG continent outlines ───────────────────────────────────────────────────
const CONTINENT_SVG = {
  all: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M88,18 L102,15 L112,22 L108,32 L98,36 L88,32 Z" fill="currentColor" opacity="0.9"/>
    <path d="M110,14 L148,12 L162,20 L168,35 L155,48 L138,52 L118,48 L108,38 L112,24 Z" fill="currentColor" opacity="0.9"/>
    <path d="M94,42 L108,40 L116,48 L114,68 L104,80 L92,78 L84,64 L86,48 Z" fill="currentColor" opacity="0.9"/>
    <path d="M22,18 L48,14 L58,22 L60,38 L48,50 L32,52 L18,42 L16,28 Z" fill="currentColor" opacity="0.9"/>
    <path d="M38,56 L54,52 L62,62 L58,82 L46,92 L34,88 L28,74 L30,60 Z" fill="currentColor" opacity="0.9"/>
    <path d="M138,68 L158,64 L168,72 L166,86 L150,92 L136,86 L132,76 Z" fill="currentColor" opacity="0.9"/>
  </svg>`,
  europe: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35,25 L52,18 L72,20 L88,28 L95,40 L90,55 L80,65 L65,72 L48,70 L32,62 L22,48 L24,34 Z" fill="currentColor" opacity="0.9"/>
    <path d="M55,72 L62,68 L70,75 L65,85 L55,88 L48,82 L50,74 Z" fill="currentColor" opacity="0.7"/>
    <path d="M28,60 L35,58 L38,66 L30,70 L24,66 Z" fill="currentColor" opacity="0.6"/>
  </svg>`,
  asia: `<svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18,22 L55,15 L95,18 L125,28 L140,42 L138,62 L122,75 L95,80 L68,78 L42,68 L22,52 L12,38 Z" fill="currentColor" opacity="0.9"/>
    <path d="M95,80 L108,78 L118,88 L112,100 L98,102 L88,94 L90,82 Z" fill="currentColor" opacity="0.7"/>
    <path d="M130,65 L142,62 L148,72 L138,80 L128,75 Z" fill="currentColor" opacity="0.65"/>
  </svg>`,
  africa: `<svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,18 L55,12 L80,18 L88,32 L85,55 L78,75 L65,95 L50,108 L35,100 L22,82 L14,60 L12,38 Z" fill="currentColor" opacity="0.9"/>
    <path d="M55,108 L62,102 L68,112 L58,122 L48,118 L50,108 Z" fill="currentColor" opacity="0.7"/>
  </svg>`,
  america: `<svg viewBox="0 0 100 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15,12 L55,8 L75,15 L80,30 L72,48 L55,58 L35,60 L18,52 L10,35 Z" fill="currentColor" opacity="0.9"/>
    <path d="M42,60 L52,58 L55,68 L48,72 L40,68 Z" fill="currentColor" opacity="0.7"/>
    <path d="M28,75 L58,70 L70,80 L72,105 L62,128 L45,138 L28,130 L18,112 L16,90 Z" fill="currentColor" opacity="0.9"/>
  </svg>`,
  oceania: `<svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18,28 L58,18 L95,22 L115,35 L118,55 L105,70 L75,78 L42,72 L18,58 L12,42 Z" fill="currentColor" opacity="0.9"/>
    <path d="M120,35 L132,30 L138,40 L128,50 L118,46 Z" fill="currentColor" opacity="0.7"/>
    <path d="M122,52 L134,48 L138,60 L125,68 L115,62 Z" fill="currentColor" opacity="0.7"/>
    <path d="M95,15 L112,10 L118,18 L108,24 L96,20 Z" fill="currentColor" opacity="0.6"/>
  </svg>`
};

function renderContinents() {
  el.continentGrid.innerHTML = Object.entries(CONTINENTS).map(([key, c]) => {
    const sel = state.continent === key ? " selected" : "";
    const svg = CONTINENT_SVG[key] || CONTINENT_SVG.all;
    return `<button class="continent-btn${sel}" data-key="${key}"
        style="--c-dark:${c.dark};--c-light:${c.light};background:${c.dark}">
      <div class="c-map" style="color:${c.light}">${svg}</div>
      <div class="c-label">${c[state.lang]}</div>
    </button>`;
  }).join("");
  el.continentGrid.querySelectorAll(".continent-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.continent = btn.dataset.key;
      el.continentGrid.querySelectorAll(".continent-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      // Always enable — all continents have enough countries
      el.startBtn.disabled = false;
    });
  });
}

function renderFeatures() {
  el.featuresList.innerHTML = t().features.map(f =>
    `<div class="feat-item"><span class="feat-icon">${f.icon}</span><span>${f.text}</span></div>`
  ).join("");
}

// ── Country Pool ────────────────────────────────────────────────────────────
function getCountryPool() {
  if (state.continent === "all") return COUNTRIES;
  return COUNTRIES.filter(c => c.continent === state.continent);
}

function pickCountry() {
  const pool = getCountryPool();
  if (countryPool.length === 0) countryPool = shuffle(pool.map(c => c.code));
  // Avoid repeat
  const last = countryPool.length - 1;
  if (pool.length > 1 && state.lastCode && countryPool[last] === state.lastCode) {
    const swap = countryPool.findIndex(c => c !== state.lastCode);
    if (swap >= 0) [countryPool[last], countryPool[swap]] = [countryPool[swap], countryPool[last]];
  }
  const code = countryPool.pop();
  return pool.find(c => c.code === code) || pool[0];
}

// ── Quiz Start ──────────────────────────────────────────────────────────────
function startQuiz() {
  clearTimer();
  state.country   = pickCountry();
  state.lastCode  = state.country.code;
  state.questions = buildQuestions(state.country);
  state.index     = 0;
  state.score     = 0;
  state.streak    = 0;
  state.answers   = [];
  state.answered  = false;
  el.langBtn.disabled     = true;
  el.langBtn.style.opacity= "0.4";
  el.countryBanner.classList.add("hidden");

  // Apply continent colour theme
  const cont = CONTINENTS[state.continent] || CONTINENTS.all;
  const card = document.getElementById("quiz-card");
  if (card) {
    card.style.setProperty("--cont-accent", cont.accent);
    card.style.borderLeftColor = cont.accent;
  }
  el.progressFill.style.background = cont.accent;

  showScreen("quiz-screen");
  updateTopbar();
  renderQuestion();
}

// ── Build Questions ─────────────────────────────────────────────────────────
// ── Question set rotation tracker ───────────────────────────────────────────
// For each country code, tracks which sets have been used recently
const usedSets = {};

function getNextSetIndex(code) {
  if (!usedSets[code]) usedSets[code] = [];
  const used = usedSets[code];
  // Pick a set not recently used (10 sets total: 0-9)
  const available = [0,1,2,3,4,5,6,7,8,9].filter(i => !used.includes(i));
  const pick = available.length > 0 ? randItem(available) : Math.floor(Math.random()*10);
  usedSets[code] = [...used.slice(-5), pick]; // remember last 5
  return pick;
}

function buildQuestions(country) {
  const setIdx = getNextSetIndex(country.code);
  return buildSet(country, setIdx);
}

// ── Landmark category icons & labels ─────────────────────────────────────────
const LM_TYPES = {
  tower:     { icon:"🗼", cs:"Věž",               en:"Tower"           },
  pyramid:   { icon:"🔺", cs:"Pyramida",           en:"Pyramid"         },
  colosseum: { icon:"🏟️", cs:"Amfiteátr / Aréna",  en:"Amphitheatre"    },
  opera:     { icon:"🎭", cs:"Opera / Divadlo",    en:"Opera House"     },
  bridge:    { icon:"🌉", cs:"Most / Průplav",     en:"Bridge / Canal"  },
  mosque:    { icon:"🕌", cs:"Mešita / Pevnost",   en:"Mosque / Citadel"},
  palace:    { icon:"🏛️", cs:"Palác / Parlament",  en:"Palace / Parliament"},
  castle:    { icon:"🏰", cs:"Hrad / Pevnost",     en:"Castle / Fortress"},
  cathedral: { icon:"⛪", cs:"Katedrála / Klášter", en:"Cathedral / Monastery"},
  mountain:  { icon:"🏔️", cs:"Hora / Příroda",     en:"Mountain / Nature"},
  statue:    { icon:"🗽", cs:"Socha / Pomník",     en:"Statue / Monument"},
  waterfall: { icon:"💧", cs:"Vodopád / Voda",     en:"Waterfall / Water"},
  ruins:     { icon:"🏺", cs:"Antické ruiny",      en:"Ancient Ruins"   },
  reef:      { icon:"🪸", cs:"Útes / Pobřeží",    en:"Reef / Coast"    },
  park:      { icon:"🌿", cs:"Park / Příroda",     en:"Park / Nature"   },
  museum:    { icon:"🎨", cs:"Muzeum / Galerie",   en:"Museum / Gallery" },
  harbor:    { icon:"⚓", cs:"Přístav / Náměstí",  en:"Harbor / Square"  },
  generic:   { icon:"🏛️", cs:"Slavná Památka",     en:"Famous Landmark"  },
};

function getLandmarkType(name) {
  const n = (name || "").toLowerCase();
  // Museums & entertainment
  if (/muzeum|museum|galeri|gallery|vasa|abba|apartheid|rijksmuseum|te papa|legoland|tivoli|butchart|inhotim|siida|guggenheim|bilbao/.test(n)) return "museum";
  // Salt / mine / cave attractions
  if (/salt cathedral|solné doly|wieliczka|jeskyně|cave|waitomo|slovenský kras|červený kláštor/.test(n)) return "museum";
  // Towers — Eiffel style + standalone towers
  if (/eiffel|cn tower|skytree|empire state|kingdom centre|chrysler|one world|obelisk|televizní věž|tv tower|šikmá věž|leaning tower|torre de belém|qutb minar|bílá věž|white tower/.test(n)) return "tower";
  // Pyramids
  if (/pyramid|pyramidy|giza|teotihuac|monte alb|uxmal|chichén|chichen/.test(n)) return "pyramid";
  // Stadium / arena
  if (/colosseum|koloseum|kolosseum|amphitheat|maracana|stadion/.test(n)) return "colosseum";
  // Opera / theatre
  if (/opera|divadlo|semperoper|teatro amazonas|teatro colón/.test(n)) return "opera";
  // Bridge / canal / aqueduct
  if (/bridge|most|pont du|erasmus|dom luís|harbour bridge|průplav|canal|suezský|suez|aqueduct/.test(n)) return "bridge";
  // Mosque / islamic
  if (/mosque|mešita|masjid|hassan ii|al-masjid|al-harám|mešita proroka|mesquita|córdoba/.test(n)) return "mosque";
  // Palace / government
  if (/palace|palác|zámek|chateau|château|palacio|palazzo|hofburg|versailles|schönbrunn|potala|doge|parliament|parlament|capitol|congress|bílý dům|white house|belvedere|drottningholm|laeken|sanssouci|escorial|riksdag|reichstag|říšský sněm|finlandia|sněmovn|budínský|budapeš.*parlament/.test(n)) return "palace";
  // Castle / fortress (before fort check)
  if (/castle|hrad|pevnost|fort(?!ain)|burg|wawel|spišský|bojnic|karlštejn|malbork|bran|kronborg|frederiksborg|kronborg|masmak|citadel|citadela|knin|sudak|korets/.test(n)) return "castle";
  // Cathedral / religious
  if (/cathedral|katedrála|basilica|bazilika|church|kostel|chrám|sagrada|notre-dame|sacré|lavra|klášter|monastery|abbey|temple|stephansdom|kolínský dóm|minster|synagogue|sixtinská|pantheon|torii|tōdai|senso|fushimi|golden temple|amritsar/.test(n)) return "cathedral";
  // Great Wall, fortifications, ancient walls
  if (/velká čínská zeď|great wall|čínská zeď|walled city|hradby|medína|medina|carcassonne|dubrovník.*staré|old.*town|staré město|historic.*centre|historické centrum|zanzibar.*stone|stone town|pelourinho|lamu|harar|jelling|visby|porvoo|telč|toruň|zamość|sighișoara|trogir|stari grad|havana.*centro|trinidad.*kolo|cienfuegos|baracoa|quito.*hist|cuenca.*hist/.test(n)) return "palace";
  // Reef / coral
  if (/barrier reef|velký bariérový|great barrier|reef|útes/.test(n)) return "reef";
  // Park / nature reserve / jungle
  if (/national park|reserve|rezervace|jungle|forest|prales|safari|mara|serengeti|kruger|kakadu|tayrona|mole|waza|dja|gorongosa|tsavo|amboseli|mochima|morrocoy|tongariro|lauca|pirin|koli|kakum|kissama|niassa|varirata|banff|stanley park|abel tasman|whis/.test(n)) return "park";
  // Harbor / city square / viewpoint
  if (/harbor|harbour|přístav|bay|záliv|luanda bay|göteborský|victoria island|sandton|náměstí|square|malecón|zócalo|nyhavn|caminito|blackstar|tafawa|grand place|ushuaia|quebrada/.test(n)) return "harbor";
  // Mountain / volcano / glacier
  if (/mountain|hora|mount|kilimandž|fuji|aconcagua|grossglockner|roraima|cotopaxi|tatry|tatras|ayers rock|uluru|rhumsiki|tundavala|pungo|erta ale|simien|drakensberg|cerro|ngong|mont.*camer|rabaul|sopka/.test(n)) return "mountain";
  // Statue / monument
  if (/statue|socha|liberty|svobody|manneken|mořská víla|little mermaid|voortrekker|india gate|kristus vykupitel|christ.*redeemer|obelisco|arc de triomphe|triomfální|lincoln|madara.*jezdec|hawa mahal|angkor/.test(n)) return "statue";
  // Waterfall / water
  if (/falls|vodopád|waterfall|iguaz|angel falls|kalandula|niagara|wli|papapapaitai|afu aau|tavoro|to sua|piula|perito moreno|ledovec|glacier/.test(n)) return "waterfall";
  // Ancient ruins
  if (/ruin|ruiny|ancient|antick|pompej|karnak|olympia|delphi|machu picchu|stonehenge|chan chan|gede|kilwa|hampi|volubilis|chavin|tiya|yeha|olbia|chersonesos|ingapirca|hegra|mada.in|diriyah|al-ula|mbanza|nazca|olduvai|terakotová|terracotta/.test(n)) return "ruins";
  // Beach / island / natural landscape
  if (/beach|pláž|coast|pobřeží|island|ostrov|fjord|canyon|údolí|valley|desert|poušť|savai|lalomanu|cayo|taveuni|yasawa|mamanuca|denarau|sigatoka|quirimbas|bazaruto|tofo|providencia|galápágy|galapagos|cocora|mindo|colca|aconcagua|torres del|atacama|milford sound|rotorua|gejzír|geysir|hot spring|viñales|punta arenas|kokoda|sepik|huli|baños/.test(n)) return "park";
  // Windmill / unique structures
  if (/windmill|větrný mlýn|kinderdijk|atomium|riesenrad|millennium|ferris/.test(n)) return "tower";
  // Historic buildings / landmarks (catch-all for named buildings)
  if (/neuschwanstein|sanssouci|trevi|fontána|fountain|palais|berlínská zeď|berlin wall|icehotel|ice hotel|legoland|louvre|mont saint|mont-saint|pena|regaleira|quinta|batalha|alhambra|park güell|güell|catadrála.*brasília|catedral|konárak|ajanta|hampi|boyana|madara|keukenhof|anne frank|göteborský|stockholmská radnice|fisherman.*bastion|ribeira|ribeiro/.test(n)) return "palace";
  // Final specific catches
  if (/taj mahal|tádž mahal|golden temple|amritsar|hawa mahal|jaipur/.test(n)) return "cathedral";
  if (/forbidden city|zakázané město|velká čínská zeď|great wall|terakotová|terracotta|šanghajská věž|shanghai tower/.test(n)) return "palace";
  if (/acropolis|akropolis|parthenon|santorini|delphi|delfská|knóssos|epidauros|mykonos|rhodos/.test(n)) return "ruins";
  if (/auschwitz|birkenau|genbaku|peace memorial|hirošima/.test(n)) return "ruins";
  if (/taj mahal|tádž mahal/.test(n)) return "cathedral";
  if (/orloj|astronomical clock|clock tower/.test(n)) return "tower";
  if (/lavra|kyjevsko-pečer|pečerská/.test(n)) return "cathedral";
  if (/sfinga|sphinx/.test(n)) return "statue";
  if (/twelve apostles|rocky coast|skalnaté pobřeží|ponta da piedade|hallstatt|bruggy.*kanály|canals|kanály.*bruggy/.test(n)) return "reef";
  if (/stellenbosch|vinařství|winery|vineyard|tokaj|tokajská/.test(n)) return "park";
  if (/olumo|zuma rock|aso rock|uluru|ayers/.test(n)) return "mountain";
  if (/osun.*osogbo|sukur|ancient grove|sacred grove/.test(n)) return "ruins";
  if (/hobbiton|icehotel|ice hotel|santa claus|père noël/.test(n)) return "museum";
  if (/waterloo.*bojiště|battlefield/.test(n)) return "ruins";
  if (/széchenyi|lázně|thermal bath|hot spring|hévíz|thermae/.test(n)) return "harbor";
  if (/rotterdam.*kanály|canale|bruggy|amsterdam.*canal|gracht/.test(n)) return "bridge";
  if (/gouda|gamla stan|old town(?! wall)|staré město|historické centrum(?!.*centrum)/.test(n)) return "harbor";
  if (/matera|sassi|cave dwelling|cliff dwelling/.test(n)) return "ruins";
  if (/lednicko|lednice|château de|country landscape/.test(n)) return "palace";
  if (/plitvická jezera|plitvice|lake.*waterfalls|jezerní vodopády/.test(n)) return "waterfall";
  if (/széchenyi|parlament.*budapest|fisherman.*bastion|chain bridge|řetězový most/.test(n)) return "palace";
  if (/alexander nev|nevský|sofia.*cathedral|sofijská|church.*sofia/.test(n)) return "cathedral";
  if (/thracké mohyly|thracian tomb|burial mound|mohyla/.test(n)) return "ruins";
  if (/ait benhaddou|kasbah|medina.*fes|džamá.*fná|jemaa.*fna|chefchaouen|essaouira|bab mansour/.test(n)) return "palace";
  if (/saharské duny|sahara.*dunes|sand dunes/.test(n)) return "park";
  if (/ile de mozambique|ilha de|ilha.*ilha/.test(n)) return "harbor";
  if (/fasil ghebbi|gondar.*castle|ilha de|caño cristales|ciudad perdida|san agustín.*sochy|chavín/.test(n)) return "ruins";
  if (/medellín.*lanovky|mérida.*lanovka|cable car/.test(n)) return "tower";
  if (/valparaíso|valparaiso|colorful houses|barevné domy/.test(n)) return "harbor";
  if (/los roques|archipelago|guanajuato|old.*quebec|quebrada|puerto madryn/.test(n)) return "harbor";
  if (/mitad del mundo|equator monument/.test(n)) return "statue";
  if (/levuka|historical port|port town|maputo.*stanice|railway station|nádraží/.test(n)) return "harbor";
  if (/sri siva|hindu temple|temple.*nadi/.test(n)) return "cathedral";
  if (/garden.*sleeping|botanical garden|limbe|butchart|keukenhof/.test(n)) return "park";
  if (/bamenda|maroua|trh|market|ring road/.test(n)) return "harbor";
  if (/dilolo|nakuru.*flaming|paga.*krokodýl|lake volta/.test(n)) return "waterfall";
  if (/banská štiavnica|čičmany|folk.*village|lidové vzory|mining town/.test(n)) return "museum";
  if (/sofijivka|parc|park uman|jelling/.test(n)) return "park";
  if (/chreschtatyk|khreshchatyk|boulevard|bulvár/.test(n)) return "harbor";
  if (/husaby|stave church|wooden church/.test(n)) return "cathedral";
  if (/palenque|maya.*city|tulum|uxmal/.test(n)) return "ruins";
  if (/sky tower auckland|skytower/.test(n)) return "tower";
  if (/neuschwanstein|royal exhibition|fremantle prison/.test(n)) return "palace";
  if (/bloubergstrand|pohled|panorama|scenic view/.test(n)) return "park";
  return "generic";
}

function buildLandmarkVisual(lm, lmName, countryCode) {
  const country = COUNTRIES.find(c => c.code === countryCode);
  const cKey = country?.continent || "all";
  const lmType = getLandmarkType(lmName);
  const typeInfo = LM_TYPES[lmType] || LM_TYPES.generic;

  const colors = {
    europe:  { bg:"#eff6ff", border:"#bfdbfe", accent:"#1d4ed8", text:"#1e3a8a", light:"#dbeafe" },
    asia:    { bg:"#fff1f2", border:"#fecdd3", accent:"#be123c", text:"#881337", light:"#ffe4e6" },
    africa:  { bg:"#fffbeb", border:"#fde68a", accent:"#b45309", text:"#78350f", light:"#fef3c7" },
    america: { bg:"#f0fdf4", border:"#bbf7d0", accent:"#15803d", text:"#14532d", light:"#dcfce7" },
    oceania: { bg:"#faf5ff", border:"#e9d5ff", accent:"#7c3aed", text:"#4c1d95", light:"#f3e8ff" },
    all:     { bg:"#f0f9ff", border:"#bae6fd", accent:"#0369a1", text:"#0c4a6e", light:"#e0f2fe" },
  };
  const col = colors[cKey] || colors.all;

  const yr = lm.built;
  const builtTxt = yr === -999 ? "—" : yr < 0 ? `${Math.abs(yr)} př. n. l.` : String(yr);
  const finTxt = lm.finished === -999 ? "—" : lm.finished < 0 ? `${Math.abs(lm.finished)} př. n. l.` : String(lm.finished);
  const yearLine = (yr === -999 && lm.finished === -999) ? "Přírodní památka" : `${builtTxt}${lm.finished !== -999 && lm.finished !== yr ? " – " + finTxt : ""}`;

  return `<div style="width:100%;max-width:460px;border-radius:16px;overflow:hidden;border:2px solid ${col.border};box-shadow:0 4px 20px rgba(0,0,0,0.10);background:${col.bg};">
    <div style="position:relative;width:100%;height:210px;background:${col.light};">
      <div class="lm-fallback" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;">
        <div style="font-size:3.5rem">${typeInfo.icon}</div>
        <div style="background:${col.accent};color:#fff;padding:3px 14px;border-radius:20px;font-family:'Cinzel',serif;font-size:0.58rem;letter-spacing:1.5px;text-transform:uppercase">${typeInfo.cs}</div>
      </div>
      <img class="lm-photo" alt="${lmName}" crossorigin="anonymous" referrerpolicy="no-referrer"
        style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity 0.4s"
        onload="this.style.opacity='1';var f=this.closest('div').querySelector('.lm-fallback');if(f)f.style.display='none';"
        onerror="this.style.display='none';">
    </div>
    <div style="padding:10px 16px;border-top:2px solid ${col.border};display:flex;align-items:center;justify-content:space-between;">
      <div style="font-size:0.78rem;color:${col.text};font-weight:600;">${country?.flag || "🌍"} ${country ? (country.cs?.name || country.code) : ""}</div>
      <div style="font-size:0.72rem;color:${col.text};opacity:0.7">📅 ${yearLine}</div>
    </div>
  </div>`;
}


function buildSet(country, setIdx) {
  const ui  = t();
  const d   = cd(country);
  const all = getCountryPool();
  const others = all.filter(c => c.code !== country.code);
  const od  = others.map(c => c[state.lang]);

  // ── Always-present building blocks ────────────────────────────────────────
  const qFlag = {
    category:"flag",
    title:ui.q1Title, text:ui.q1Text,
    visual:`<img class="flag-img" src="${flagUrl(country.code)}" alt="${d.name}" onerror="this.style.display='none';this.nextSibling.style.fontSize='3.5rem'"><span style="font-size:2.2rem">${country.flag}</span>`,
    hint: d.knownFor,
    ...makeOptions(d.name, od.map(o => o.name)),
    explanation: ui.exp1(d.name, d.knownFor)
  };

  const qCapital = {
    category:"capital",
    title:ui.q2Title, text:ui.q2Text(d.name),
    visual:`<span style="font-size:2rem">${d.capital.icons}</span>`,
    hint: d.capital.clue,
    ...buildCapOpts(country),
    explanation: ui.exp2(d.capital.name)
  };

  const p3 = makeNumOpts(country.population);
  const qPopCountry = {
    category:"population",
    title:ui.q3Title, text:ui.q3Text(d.name),
    visual:`<span style="font-size:2rem">👥 📈 🌍</span>`, hint:null,
    options:p3.options, correctAnswer:p3.correctAnswer,
    explanation: ui.exp3(d.name, fmt().format(country.population))
  };

  const p4 = makeNumOpts(country.capitalPop);
  const qPopCapital = {
    category:"population",
    title:ui.q4Title, text:ui.q4Text(d.capital.name, d.name),
    visual:`<span style="font-size:2rem">🏙️ 👤 📊</span>`, hint:null,
    options:p4.options, correctAnswer:p4.correctAnswer,
    explanation: ui.exp4(d.capital.name, fmt().format(country.capitalPop))
  };

  const sStr = `${d.sport.name} — ${d.sport.team}`;
  const qSport = {
    category:"sport",
    title:ui.q5Title, text:ui.q5Text(d.name),
    visual:`<span style="font-size:2rem">🏆 ⚽ 🥅</span>`, hint:ui.q5Hint,
    ...makeOptions(sStr, od.map(o => `${o.sport.name} — ${o.sport.team}`)),
    explanation: ui.exp5(d.sport.name, d.sport.team)
  };

  const qLang = {
    category:"language",
    title:ui.q6Title, text:ui.q6Text(d.name),
    visual:`<span style="font-size:2rem">🗣️ 📚 🌐</span>`, hint:ui.q6Hint,
    ...makeOptions(d.language, od.map(o => o.language)),
    explanation: ui.exp6(d.language)
  };

  const qGov = {
    category:"government",
    title:ui.q7Title, text:ui.q7Text(d.name),
    visual:`<span style="font-size:2rem">🏛️ ⚖️ 👑</span>`, hint:ui.q7Hint,
    ...makeOptions(d.government, od.map(o => o.government)),
    explanation: ui.exp7(d.government)
  };

  const qCurrency = {
    category:"currency",
    title:ui.q8Title, text:ui.q8Text(d.name),
    visual:`<span style="font-size:2rem">💱 💵 💳</span>`, hint:ui.q8Hint,
    ...makeOptions(d.currency, od.map(o => o.currency)),
    explanation: ui.exp8(d.currency)
  };

  const rStr = d.resources.join(", ");
  const qResources = {
    category:"resources",
    title:ui.q9Title, text:ui.q9Text(d.name),
    visual:`<span style="font-size:2rem">⛏️ 🌾 ⚡</span>`, hint:ui.q9Hint,
    ...makeOptions(rStr, od.map(o => o.resources.join(", "))),
    explanation: ui.exp9(rStr)
  };

  const main  = d.personalities[0];
  const main2 = d.personalities[1] || d.personalities[0];
  const main3 = d.personalities[2] || d.personalities[0];

  const qPerson1 = {
    category:"personalities",
    title:ui.q10Title, text:ui.q10Text(d.name),
    visual:`<span style="font-size:2rem">📜 👤 ⭐</span>`, hint:main.hint,
    options: shuffle(d.personalities.map(p => p.name)),
    correctAnswer: main.name,
    explanation: ui.exp10(main.name, main.context, d.personalities.slice(1).map(p=>`${p.name} (${p.context})`).join(", "))
  };

  const qPerson2 = {
    category:"personalities",
    title:ui.q10Title, text:ui.q10Text(d.name),
    visual:`<span style="font-size:2rem">🏅 🌟 📖</span>`, hint:main2.hint,
    options: shuffle(d.personalities.map(p => p.name)),
    correctAnswer: main2.name,
    explanation: ui.exp10(main2.name, main2.context, d.personalities.filter(p=>p.name!==main2.name).map(p=>`${p.name}`).join(", "))
  };

  const qPerson3 = {
    category:"personalities",
    title:ui.q10Title, text:ui.q10Text(d.name),
    visual:`<span style="font-size:2rem">🎖️ ✍️ 🔬</span>`, hint:main3.hint,
    options: shuffle(d.personalities.map(p => p.name)),
    correctAnswer: main3.name,
    explanation: ui.exp10(main3.name, main3.context, d.personalities.filter(p=>p.name!==main3.name).map(p=>`${p.name}`).join(", "))
  };

  // ── History / founding year question ──────────────────────────────────────
  const fd = FOUNDED[country.code] || { year:1900, cs:"vznik moderního státu", en:"establishment of the modern state" };
  const fdCtx = fd[state.lang];
  const fdYear = String(fd.year);
  const yearPool = Object.values(FOUNDED).map(f => String(f.year)).filter(y => y !== fdYear);
  const qHistory = {
    category:"history",
    title:ui.q11Title, text:ui.q11Text(d.name),
    visual:`<span style="font-size:2.5rem">📅 🏛️ ⚔️</span>`,
    hint:ui.q11Hint,
    ...makeOptions(fdYear, yearPool),
    explanation: ui.exp11(d.name, fdYear, fdCtx)
  };

  // ── Landmark question — different landmark per set ────────────────────────
  const lmPool = LANDMARKS[country.code] || LANDMARK_FALLBACK;
  // Get landmark for this set index (cycles through pool)
  const lm = lmPool[setIdx % lmPool.length];
  const lmName = state.lang === "cs" ? lm.name : (lm.en || lm.name);
  // Collect wrong landmark names from other countries for options
  const wrongLm = [];
  for (const pool of Object.values(LANDMARKS)) {
    for (const l of pool) {
      const n = state.lang === "cs" ? l.name : (l.en || l.name);
      if (n !== lmName && !wrongLm.includes(n)) wrongLm.push(n);
    }
  }
  const builtStr = lm.built < 0 ? `${Math.abs(lm.built)} př. n. l.` : String(lm.built);
  const finStr   = lm.finished < 0 ? `${Math.abs(lm.finished)} př. n. l.` : String(lm.finished);

  // Build reliable visual: try image first, show styled card with SVG silhouette as fallback
  const lmVisual = buildLandmarkVisual(lm, lmName, country.code);

  const qLandmark = {
    category:"landmark",
    title:ui.qLmTitle, text:ui.qLmText,
    visual: lmVisual,
    wikiTitle: lm.wiki || "",
    fallbackImg: lm.img || "",
    searchQuery: lm.pxq || (lm.en || lmName).replace(/[()]/g, "").trim(),
    hint: ui.qLmHint(builtStr, lm.finished === -999 ? "—" : finStr),
    ...makeOptions(lmName, wrongLm),
    explanation: ui.expLm(lmName, builtStr, lm.finished === -999 ? "—" : finStr, d.name)
  };

  // ── 10 different 8-question sets (Q8 = landmark, Q8 varies by set) ─────────
  const sets = [
    [qFlag, qCapital, qPopCountry, qSport,    qLang,    qCurrency,  qLandmark, qHistory],
    [qFlag, qCapital, qPopCapital, qGov,      qResources,qPerson1,  qLandmark, qHistory],
    [qFlag, qCapital, qPopCountry, qLang,     qCurrency, qPerson2,  qLandmark, qHistory],
    [qFlag, qCapital, qSport,     qGov,       qResources,qPerson1,  qLandmark, qHistory],
    [qFlag, qCapital, qPopCountry, qPopCapital,qLang,   qPerson3,   qLandmark, qHistory],
    [qFlag, qCapital, qSport,     qCurrency,  qResources,qPerson2,  qLandmark, qHistory],
    [qFlag, qCapital, qPopCountry, qGov,      qLang,    qPerson1,   qLandmark, qHistory],
    [qFlag, qCapital, qPopCapital, qSport,    qCurrency, qPerson3,  qLandmark, qHistory],
    [qFlag, qCapital, qPopCountry, qResources,qPerson2,  qGov,      qLandmark, qHistory],
    [qFlag, qCapital, qSport,     qLang,      qGov,     qPerson3,   qLandmark, qHistory],
  ];

  const chosenSet = sets[setIdx % sets.length];
  return chosenSet.map((q, i) => ({ ...q, step: i+1, title: `${i+1}) ${q.title}` }));
}

// ── Render Question ─────────────────────────────────────────────────────────
// ── Load landmark photo via Pixabay API ─────────────────────────────────────
var PIXABAY_KEY = "55668458-7cd9c0f58880ef106e49d712c";
var _pixabayCache = {};

function loadLandmarkPhoto(wikiTitle, fallbackImg, searchQuery) {
  var img = document.querySelector(".lm-photo");
  if (!img) return;

  var query = searchQuery || wikiTitle.replace(/_/g, " ");
  if (!query) { if (fallbackImg) img.src = fallbackImg; return; }

  // Check cache first
  if (_pixabayCache[query]) {
    img.src = _pixabayCache[query];
    return;
  }

  var apiUrl = "https://pixabay.com/api/?key=" + PIXABAY_KEY
    + "&q=" + encodeURIComponent(query)
    + "&image_type=photo&orientation=horizontal&per_page=3&safesearch=true";

  fetch(apiUrl)
    .then(function(r) { return r.json(); })
    .then(function(d) {
      var hits = d && d.hits;
      if (hits && hits.length > 0) {
        // Use webformatURL - Pixabay CDN allows hotlinking
        var src = hits[0].webformatURL;
        _pixabayCache[query] = src;
        img.src = src;
      } else if (fallbackImg) {
        img.src = fallbackImg;
      }
    })
    .catch(function() {
      if (fallbackImg) img.src = fallbackImg;
    });
}


function renderQuestion() {
  const q = state.questions[state.index];
  state.answered = false;

  const cat = CATS[q.category] || {};
  el.catBadge.className = `cat-tag cat-${q.category}`;
  el.catBadge.textContent = `${cat.icon || ""} ${cat[state.lang] || q.category}`;

  if (state.streak >= STREAK_MIN) {
    el.streakBadge.classList.remove("hidden");
    el.streakNum.textContent = state.streak;
  } else {
    el.streakBadge.classList.add("hidden");
  }

  el.qTitle.textContent  = q.title;
  el.qText.textContent   = q.text;
  el.visualZone.innerHTML = q.visual;
  fixFlagFallbacks();
  // Load landmark photo via Wikipedia API (works from GitHub Pages - proper CORS)
  // Use setTimeout to ensure DOM is ready after innerHTML update
  if (q.category === "landmark") {
    setTimeout(function() {
      loadLandmarkPhoto(q.wikiTitle || "", q.fallbackImg || "", q.searchQuery || "");
    }, 50);
  }

  if (q.hint) {
    el.hintCard.classList.remove("hidden");
    el.hintText.textContent = q.hint;
  } else {
    el.hintCard.classList.add("hidden");
  }

  el.feedbackBar.className = "feedback hidden";
  el.nextBtn.classList.add("hidden");

  // Options
  el.optionsWrap.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    btn.dataset.option = opt;
    const letter = document.createElement("span");
    letter.className = "opt-letter";
    letter.textContent = LETTERS[i];
    const label = document.createElement("span");
    label.textContent = opt;
    btn.appendChild(letter);
    btn.appendChild(label);
    btn.addEventListener("click", () => handleAnswer(btn, opt));
    el.optionsWrap.appendChild(btn);
  });

  // Show country banner from Q2 onward
  if (state.index >= 1 && state.country) {
    const d = cd(state.country);
    el.countryFlagB.textContent = state.country.flag;
    el.countryNameB.textContent = `${t().country} ${d.name}`;
    el.countryBanner.classList.remove("hidden");
    const cont = CONTINENTS[state.country.continent] || CONTINENTS.all;
    el.countryBanner.style.setProperty("--banner-accent", cont.accent);
  }

  state.timeLeft = Q_TIME;
  updateTimerPill();
  startTimer();
  updateTopbar();
}

// ── Answer Handling ─────────────────────────────────────────────────────────
function handleAnswer(clickedBtn, selected) {
  if (state.answered) return;
  state.answered = true;
  clearTimer();

  const q = state.questions[state.index];
  const ui = t();
  const isCorrect = selected === q.correctAnswer;

  if (isCorrect) { state.score++; state.streak++; }
  else           { state.streak = 0; }

  state.answers.push({
    step:q.step, title:q.title, category:q.category,
    isCorrect, selectedOption:selected,
    correctAnswer:q.correctAnswer, explanation:q.explanation
  });

  Array.from(el.optionsWrap.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.option === q.correctAnswer) btn.classList.add("correct");
  });
  if (!isCorrect) clickedBtn.classList.add("incorrect");

  showFeedback(isCorrect, isCorrect ? ui.correct : ui.wrong, q.explanation);
  setNextBtn();
  updateTopbar();
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.index];
  const ui = t();
  state.streak = 0;

  state.answers.push({
    step:q.step, title:q.title, category:q.category,
    isCorrect:false, selectedOption:ui.timeoutNote,
    correctAnswer:q.correctAnswer, explanation:q.explanation
  });

  Array.from(el.optionsWrap.children).forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.option === q.correctAnswer) btn.classList.add("correct");
  });

  showFeedback(false, ui.timeout, q.explanation);
  setNextBtn();
}

function showFeedback(ok, label, explanation) {
  el.feedbackBar.className = `feedback ${ok ? "ok" : "bad"}`;
  el.fbIcon.textContent = ok ? "✓" : "✗";
  el.fbText.innerHTML = `<strong>${label}</strong> ${explanation}`;
}

function setNextBtn() {
  const isLast = state.index === state.questions.length - 1;
  el.nextBtnText.textContent = isLast ? t().showResult : t().nextQ;
  el.nextBtn.classList.remove("hidden");
}

function goNext() {
  if (!state.answered) return;
  state.index++;
  if (state.index >= state.questions.length) showResults();
  else renderQuestion();
}

// ── Results ─────────────────────────────────────────────────────────────────
function showResults() {
  clearTimer();
  el.langBtn.disabled     = false;
  el.langBtn.style.opacity = "";
  el.countryBanner.classList.add("hidden");
  showScreen("result-screen");

  const ui    = t();
  const total = state.questions.length;
  const pct   = Math.round((state.score / total) * 100);

  el.bigScore.textContent = state.score;
  el.bigDenom.textContent = `/${total}`;
  el.resultTitle.textContent = ui.resultTitle;

  const ratio = state.score / total;
  let medal, icon;
  if (ratio === 1)        { medal = ui.medals.perfect; icon = "🏆"; }
  else if (ratio >= 0.8)  { medal = ui.medals.great;   icon = "🥇"; }
  else if (ratio >= 0.6)  { medal = ui.medals.good;    icon = "🥈"; }
  else if (ratio >= 0.4)  { medal = ui.medals.ok;      icon = "🥉"; }
  else                    { medal = ui.medals.poor;     icon = "💪"; }

  el.medalWrap.textContent = icon;
  el.medalWrap.style.animation = "none";
  requestAnimationFrame(() => { el.medalWrap.style.animation = ""; });
  el.resultMsg.textContent = `${medal}  ${ui.scoreResult(state.score, total, pct)}`;

  el.summaryGrid.innerHTML = "";
  state.answers.forEach(ans => {
    const item = document.createElement("article");
    item.className = `sum-item ${ans.isCorrect ? "ok" : "bad"}`;
    const catObj = CATS[ans.category] || {};
    item.innerHTML = `
      <div class="sum-icon">${ans.isCorrect ? "✅" : "❌"}</div>
      <div>
        <div class="sum-title">${catObj.icon||""} ${ans.title}</div>
        <div class="sum-your ${ans.isCorrect ? "sum-correct" : "sum-wrong"}">${ui.yourAns}: ${ans.selectedOption}</div>
        ${!ans.isCorrect ? `<div class="sum-correct">${ui.correctAns}: ${ans.correctAnswer}</div>` : ""}
      </div>`;
    el.summaryGrid.appendChild(item);
  });

  el.restartBtnText.textContent = ui.restartBtn;
  updateTopbar(true);
  updateTimerPill(true);
}

// ── Topbar & Timer ──────────────────────────────────────────────────────────
function updateTopbar(done=false) {
  const ui = t();
  const total = state.questions.length || 11;
  const round = done ? total : Math.min(state.index + 1, total);
  el.scoreVal.textContent = `${state.score}`;
  el.roundVal.textContent = `${round}/${total}`;

  const answered = state.answers.length > state.index ? 1 : 0;
  const pct = done ? 100 : ((state.index + answered) / total) * 100;
  el.progressFill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  el.progressLabel.textContent = `${Math.min(state.index + answered, total)}/${total}`;
}

function startTimer() {
  clearTimer();
  state.timerId = setInterval(() => {
    state.timeLeft = Math.max(0, state.timeLeft - 1);
    updateTimerPill();
    if (state.timeLeft <= 0) { clearTimer(); handleTimeout(); }
  }, 1000);
}

function clearTimer() {
  if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
}

function updateTimerPill(done=false) {
  if (done) {
    el.timerPill.className = "stat-chip timer-chip";
    el.timerVal.textContent = t().timeEnd;
    return;
  }
  el.timerVal.textContent = `${state.timeLeft}s`;
  el.timerPill.classList.remove("warn","danger");
  if      (state.timeLeft <= 10) el.timerPill.classList.add("danger");
  else if (state.timeLeft <= 20) el.timerPill.classList.add("warn");
}

// ── Option Builders ─────────────────────────────────────────────────────────
function makeOptions(correct, pool) {
  const unique = [...new Set(pool)].filter(v => v !== correct);
  const dist   = sampleArr(unique, 3);
  return { options: shuffle([correct, ...dist]), correctAnswer: correct };
}

function makeNumOpts(value) {
  const mults = [0.55,0.68,0.79,0.88,1.12,1.22,1.38,1.6];
  const vals = new Set([value]);
  while (vals.size < 4) {
    const m = randItem(mults);
    const v = roundMag(value * m);
    if (v > 0 && v !== value) vals.add(v);
  }
  const f = fmt();
  const opts = shuffle([...vals].map(v => f.format(v)));
  return { options: opts, correctAnswer: f.format(value) };
}

function buildCapOpts(country) {
  const d   = cd(country);
  const cap = d.capital.name;
  const dist = sampleArr((d.cities || []).filter(c => c !== cap), 3);
  // Pad with random capitals from other countries if needed
  if (dist.length < 3) {
    const extra = getCountryPool().filter(c => c.code !== country.code)
      .map(c => c[state.lang].capital.name)
      .filter(n => n !== cap && !dist.includes(n));
    while (dist.length < 3 && extra.length > 0) dist.push(extra.splice(Math.floor(Math.random()*extra.length),1)[0]);
  }
  return { options: shuffle([cap, ...dist.slice(0,3)]), correctAnswer: cap };
}

// ── Utils ────────────────────────────────────────────────────────────────────
function roundMag(v) {
  if (v >= 1e9)  return Math.round(v/1e7)*1e7;
  if (v >= 1e8)  return Math.round(v/1e6)*1e6;
  if (v >= 1e7)  return Math.round(v/1e5)*1e5;
  if (v >= 1e6)  return Math.round(v/1e4)*1e4;
  return Math.max(1000, Math.round(v/1000)*1000);
}

function flagUrl(code) {
  return `https://flagcdn.com/w160/${code.toLowerCase()}.png`;
}

function flagUrlFallback(code) {
  return `https://flagpedia.net/data/flags/w580/${code.toLowerCase()}.png`;
}

// Inject into rendered flag imgs after DOM is ready
function fixFlagFallbacks() {
  document.querySelectorAll('.flag-img').forEach(img => {
    img.onerror = function() {
      if (!this.dataset.fallback) {
        this.dataset.fallback = '1';
        const code = this.src.match(/\/([a-z]{2})\.png/)?.[1];
        if (code) this.src = flagUrlFallback(code.toUpperCase());
        else { this.style.display='none'; if(this.nextSibling) this.nextSibling.style.fontSize='3.5rem'; }
      } else {
        this.style.display='none';
        if(this.nextSibling) this.nextSibling.style.fontSize='3.5rem';
      }
    };
  });
}

function randItem(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
function sampleArr(arr, n) { return shuffle([...arr]).slice(0,n); }
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// ── Keyboard ─────────────────────────────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (el.quizScreen.classList.contains("hidden") || !el.quizScreen.classList.contains("active")) return;
  const map = {"1":0,"2":1,"3":2,"4":3,"a":0,"b":1,"c":2,"d":3};
  const idx = map[e.key.toLowerCase()];
  if (idx !== undefined && !state.answered) {
    const btns = Array.from(el.optionsWrap.children);
    if (btns[idx]) btns[idx].click();
  }
  if ((e.key==="Enter"||e.key===" ") && state.answered && !el.nextBtn.classList.contains("hidden")) {
    e.preventDefault();
    goNext();
  }
});

// ── Events ────────────────────────────────────────────────────────────────────
el.langBtn.addEventListener("click",    toggleLang);
el.startBtn.addEventListener("click",   startQuiz);
el.nextBtn.addEventListener("click",    goNext);
el.restartBtn.addEventListener("click", () => { showScreen("start-screen"); countryPool = []; });

// ── Init ──────────────────────────────────────────────────────────────────────
applyI18n();
showScreen("start-screen");
// Enable start button — "all" is selected by default with plenty of countries
el.startBtn.disabled = false;
