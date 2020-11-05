/**
 * quiz.js
 * Et interaktivt spill
 */

let sporsmal_label = document.getElementById("sporsmal_label"); // Spørsmålet

let input_alternativ_1 = document.getElementById("input_alternativ_1"); // Inneholder alternativ 1
let input_alternativ_2 = document.getElementById("input_alternativ_2"); // Inneholder alternativ 2
let input_alternativ_3 = document.getElementById("input_alternativ_3"); // Inneholder alternativ 3

let label_alternativ_1 = document.getElementById("label_alternativ_1"); // Viser inpuinput_alternativ_1v_1
let label_alternativ_2 = document.getElementById("label_alternativ_2"); // Viser inpuinput_t_alternat_iv_2
let label_alternativ_3 = document.getElementById("label_alternativ_3"); // Viser inpuinput_t_alternat_iv_3

let button_next_question = document.getElementById("button_next_question"); // Bru over til knappen

let form = document.getElementById("form");

let exit = false; // Viser når spillet er over

// Liste over spørsmål
let liste_med_sporsmal = [
    "Hvis Erling Braut Haaland scorer et landslagsmål, hvordan reagerer du?",
    "Hvor skråsikker er du på dine egne meninger?",
    "Hvor aktiv er du på sosiale medier?",
    "Hvem ville du hatt på laget ditt?",
    "Hvilket forhold har du til trøndere?",
];

// 2D-Liste over alternativ til spørsmål
let liste_med_alternativ = [
    [
        "Vet ikke hvem Haaland er",
        "Blir glad, men har betta på at han scorer to mål og Norge vinner, så tar ikke helt av enda.",
        "Blir utrolig glad og roper så stemmebåndet sprekker",
    ],
    [
        "Litt usikker og bruker en del mellomord når du skal argumentere for din sak",
        "Ikke veldig sikker, men later som jeg er skråsikker",
        "Veldig sikker og har ingen problemer med å stå for det",
    ],
    [
        "Bruker nesten ikke sosiale medier",
        "Er en liten luring på snapchat og instagram",
        "Jeg tweeter mange ganger daglig",
    ],
    ["Zlatan Ibrahimovic", "Cristiano Ronaldo", "Nicklas Bendtner"],
    [
        "Kan ikke fordra dem",
        "Nøytralt forhold",
        "Jeg er trønder selv og trives med det",
    ],
];

// Score til de forskjellige gutta
let score_board = [
    { navn: "Kjetil Rekdal", score: 0 },
    { navn: "Øyvind Alsaker", score: 0 },
    { navn: "Kåre Ingebrigtsen", score: 0 },
    { navn: "Morten Langli", score: 0 },
    { navn: "Bernt Hulsker", score: 0 },
];

// ID til bildene
let images_ID = [
    "bilde-kjetil",
    "bilde-oyvind",
    "bilde-kare",
    "bilde-morten",
    "bilde-bernt",
];

// ID til lydklipp
let sound_ID = [
    "lyd-kjetil",
    "lyd-oyvind",
    "lyd-kare",
    "lyd-morten",
    "lyd-bernt",
];

// Teller for hvilket spørsmål vi er på
let sporsmals_index = 0;

// Viser neste spørsmål, eller viser vinneren
function show_question() {
    input_alternativ_1.checked = false;
    input_alternativ_2.checked = false;
    input_alternativ_3.checked = false;

    if (exit == false) {
        sporsmal_label.innerHTML =
            "Spørsmål " +
            (sporsmals_index + 1) +
            ": " +
            liste_med_sporsmal[sporsmals_index];
        label_alternativ_1.innerHTML = liste_med_alternativ[sporsmals_index][0];
        label_alternativ_2.innerHTML = liste_med_alternativ[sporsmals_index][1];
        label_alternativ_3.innerHTML = liste_med_alternativ[sporsmals_index][2];
    } else {
        let winner_index = 0;
        for (
            let score_index = 0;
            score_index < score_board.length;
            score_index++
        ) {
            if (
                score_board[score_index].score >=
                score_board[winner_index].score
            ) {
                winner_index = score_index;
            }
        }
        sporsmal_label.innerHTML =
            "Du er " + score_board[winner_index].navn + "!";
        let winner_image = document.getElementById(images_ID[winner_index]);
        winner_image.style.display = "inline-block";

        let winner_sound = document.getElementById(sound_ID[winner_index]);
        winner_sound.play();
    }
}

// Når knappen trykkes, går telleren opp, regnskap over poeng føres og det vises neste spørsmål
button_next_question.addEventListener("click", () => {
    if (exit == false) {
        // Passer på at det er gitt et svar
        if (
            !input_alternativ_1.checked &&
            !input_alternativ_2.checked &&
            !input_alternativ_3.checked
        ) {
            return;
        }

        // Samler poeng
        // Spørsmål 1
        if (sporsmals_index == 0) {
            if (input_alternativ_1.checked) {
                score_board[0].score += 0;
                score_board[1].score += 0;
                score_board[2].score += 1;
                score_board[3].score += 0;
                score_board[4].score += 0;
            } else if (input_alternativ_2.checked) {
                score_board[0].score += 1;
                score_board[1].score += 0;
                score_board[2].score += 0;
                score_board[3].score += 2;
                score_board[4].score += 0;
            } else if (input_alternativ_3.checked) {
                score_board[0].score += 1;
                score_board[1].score += 2;
                score_board[2].score += 0;
                score_board[3].score += 0;
                score_board[4].score += 2;
            } else {
                return;
            }
        }
        // Spørsmål 2
        if (sporsmals_index == 1) {
            if (input_alternativ_1.checked) {
                score_board[0].score += 0;
                score_board[1].score += 1;
                score_board[2].score += 2;
                score_board[3].score += 0;
                score_board[4].score += 0;
            } else if (input_alternativ_2.checked) {
                score_board[0].score += 1;
                score_board[1].score += 1;
                score_board[2].score += 1;
                score_board[3].score += 0;
                score_board[4].score += 2;
            } else if (input_alternativ_3.checked) {
                score_board[0].score += 2;
                score_board[1].score += 1;
                score_board[2].score += 0;
                score_board[3].score += 2;
                score_board[4].score += 0;
            } else {
                return;
            }
        }
        // Spørsmål 3
        if (sporsmals_index == 2) {
            if (input_alternativ_1.checked) {
                score_board[0].score += 0;
                score_board[1].score += 0;
                score_board[2].score += 2;
                score_board[3].score += 0;
                score_board[4].score += 0;
            } else if (input_alternativ_2.checked) {
                score_board[0].score += 0;
                score_board[1].score += 0;
                score_board[2].score += 0;
                score_board[3].score += 0;
                score_board[4].score += 2;
            } else if (input_alternativ_3.checked) {
                score_board[0].score += 1;
                score_board[1].score += 1;
                score_board[2].score += 0;
                score_board[3].score += 2;
                score_board[4].score += 1;
            } else {
                return;
            }
        }
        // Spørsmål 4
        if (sporsmals_index == 3) {
            if (input_alternativ_1.checked) {
                score_board[0].score += 0;
                score_board[1].score += 1;
                score_board[2].score += 0;
                score_board[3].score += 1;
                score_board[4].score += 1;
            } else if (input_alternativ_2.checked) {
                score_board[0].score += 2;
                score_board[1].score += 1;
                score_board[2].score += 0;
                score_board[3].score += 2;
                score_board[4].score += 0;
            } else if (input_alternativ_3.checked) {
                score_board[0].score += 0;
                score_board[1].score += 0;
                score_board[2].score += 2;
                score_board[3].score += 0;
                score_board[4].score += 1;
            } else {
                return;
            }
        }
        // Spørsmål 5
        if (sporsmals_index == 4) {
            if (input_alternativ_1.checked) {
                score_board[0].score += 2;
                score_board[1].score += 2;
                score_board[2].score += 0;
                score_board[3].score += 0;
                score_board[4].score += 0;
            } else if (input_alternativ_2.checked) {
                score_board[0].score += 0;
                score_board[1].score += 0;
                score_board[2].score += 0;
                score_board[3].score += 1;
                score_board[4].score += 1;
            } else if (input_alternativ_3.checked) {
                score_board[0].score += 0;
                score_board[1].score += 0;
                score_board[2].score += 2;
                score_board[3].score += 0;
                score_board[4].score += 0;
            } else {
                return;
            }

            // Etter spørsmål 5, slutter spillet
            form.style.display = "none";
            exit = true;
        }

        // Telleren for neste spørsmål
        sporsmals_index++;
        // Viser neste spørsmål
        show_question();
    }
});

// Viser første spørsmål
show_question();
