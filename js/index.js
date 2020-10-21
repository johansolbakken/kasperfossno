let klokka = document.getElementById("klokka");
let setning = document.getElementById("klokke-setning");
let ord = document.getElementById("ord");
let mann = document.getElementById("mann");

visdomsord = [
    ["Lær av i går, lev for i dag, prøve litt i morgen", "Albert Einstein"],
    [
        "Livet er som å sykle, du komma deg på jobb for å holde balansen",
        "Albert Einstein",
    ],
    [
        "I det øyeblikket vi aksepterer våre begrensinger, begynner vi å kødde med dialekten til andre",
        "Albert Einstein",
    ],
    [
        "Det går ikke an å skylde på tyngdekraften når folk faller for dårlig humor",
        "Albert Einstein",
    ],
    [
        "Fred kan ikke bevares med makt. Den kan bare oppnås ved at folk er på jobb",
        "Albert Einstein",
    ],
    [
        "Det finnes viktigere ting i livet enn å kunne skarre på r-en",
        "Mahatma Gandhi",
    ],
    [
        "Lær som om du skulle leve evig. Øv deg på trønderdialket som om du skulle dø i morgen",
        "Mahatma Gandhi",
    ],
    [
        "I virkeligheten finnes det like mange religioner som det finnes Påler og Nicklaser",
        "Albert Einstein",
    ],
    [
        "De som aldri har gjort en feil, har aldri brukt snap-filter på en fellessnap",
        "Albert Einstein",
    ],
    [
        "Verden er et farlig sted å leve. Ikke på grunn av de med elendige Roar Stokke-parodier, men på grunn av de som ikke gjør noe med dem",
        "Albert Einstein",
    ],
];

var today1 = new Date();

ord.innerHTML =
    '"' +
    visdomsord[today1.getDay() % 10][0] +
    '"';
mann.innerHTML = " - " + visdomsord[today1.getDay() % 10][1];

setInterval(function () {
    var today = new Date();

    let minutes = 0;
    if (today.getMinutes() < 10) {
        minutes = "0" + today.getMinutes();
    } else {
        minutes = today.getMinutes();
    }
    klokka.innerHTML = "Klokka er " + today.getHours() + ":" + minutes;

    if (today.getHours() >= 8 && today.getHours() <= 16) {
        setning.innerHTML = "Du må komma deg på jobb!";
    } else if (today.getHours() > 16) {
        setning.innerHTML =
            "Det er " +
            (16 + 8 + 8 - today.getHours()) +
            " timer til du må komma deg på jobb!";
    } else {
        setning.innerHTML =
            "Det er " +
            (8 - today.getHours() - 1) +
            " timer og " +
            (60 - today.getMinutes()) +
            " minutter til du må komma deg på jobb!";
    }
}, 1000);
