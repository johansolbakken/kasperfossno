
// LinkNavCss()
// - Denne funksjonen linker navigasjon.css til siden
function linkNavCss() {
    // Get HTML head element
    var head = document.getElementsByTagName("HEAD")[0];

    // Create new link Element
    var link = document.createElement("link");

    // set the attributes for link element
    link.rel = "stylesheet";

    link.type = "text/css";

    link.href = "../css/navigasjon.css";

    // Append link element to HTML head
    head.appendChild(link);
}

function lagNavigasjon() {
    

    let filer = ["index", "event", "om", "media", "kontakt"];

    // Lager nav
    let nav = document.getElementById("nav");

    // Lager logo
    let logo = document.createElement("div");
    logo.classList.toggle("logo");

    let h4 = document.createElement("h4");
    h4.innerHTML = "Kasper Foss";

    logo.appendChild(h4);
    nav.appendChild(logo);

    // Lager nav-links
    let ul = document.createElement("ul");
    ul.classList.toggle("nav-links");

    for (let i = 0; i < filer.length; i++) {
        let li = document.createElement("li");

        let a = document.createElement("a");
        let title =
            filer[i][0].toUpperCase() + filer[i].slice(1, filer[i].length);
        if (title == "Index") {
            title = "Hjem";
        }
        a.innerHTML = title;

        a.setAttribute("href", filer[i] + ".html");

        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);

    // Burger meny
    let burger = document.createElement("div");
    burger.classList.toggle("burger");
    burger.addEventListener("click", () => {
        ul.classList.toggle("nav-active");
    });

    for (let i = 0; i < 3; i++) {
        let line = document.createElement("div");
        line.classList.toggle("line" + String(i + 1));
        burger.appendChild(line);
    }

    nav.appendChild(burger);
}


const app = () => {
    linkNavCss();
    lagNavigasjon();
}

app();