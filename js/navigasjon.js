/**
 * navigasjon.js
 * Lager navigasjonen dynamisk
 */

function lagNavigasjon() {
    // Liste over filene som skal i navigasjonen
    let filer = ["index", "event", "om", "media", "kontakt"];

    // Lager nav
    let nav = document.getElementById("nav");

    // Lager logo
    let logo = document.createElement("div");
    logo.classList.toggle("logo");
    let a = document.createElement("a");
    a.href = "index.html";
    let h4 = document.createElement("h4");
    h4.innerHTML = "Kasper Foss";
    a.appendChild(h4);
    logo.appendChild(a);
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


lagNavigasjon();