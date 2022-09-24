let eventer = [
    {
        lenke: "#",
        tittel: "Klikk for mer...",
        bilde_lenke:
            "",
    },
    {
        lenke: "https://www.facebook.com/events/2858523821139868/",
        tittel: "En kveld med Kasper Foss",
        bilde_lenke: "../img/event_1.png",
    },
    {
        lenke:
            "https://www.heroyfjerdingen.no/?id=6147386&fbclid=IwAR3paxs2TGxrdWJZa4BWrKEnDfzy1K56Jk3wX3eMYZ45vZ2pQSJj0AqvX5k",
        tittel: "Herøyfjorden idrettslag fyller 75!",
        bilde_lenke:
            "https://img6.custompublish.com/getfile.php/4256940.2126.wawikqzmztwjus/800560/6147386_4256940.jpeg",
    },
    {
        lenke: "https://www.dplay.no/programmer/camp-71",
        tittel: "Se Kasper på Camp 71!",
        bilde_lenke:
            "https://eu1-prod-images.disco-api.com/2020/03/17/show-11433-131320913136013.jpg?f=jpg&p=true&w=540",
    },

    
];

let event_container = document.getElementById("event_container");

for (let i = 0; i < eventer.length; i++) {
    let event = document.createElement("div");
    event.classList.toggle("event");

    let lenke = document.createElement("a");
    lenke.href = eventer[i].lenke;

    let img = document.createElement("img");
    img.classList.toggle("event-bilde");
    img.src = eventer[i].bilde_lenke;

    let title = document.createElement("h4");
    title.innerHTML = eventer[i].tittel;
    title.classList.toggle("event-title");

    lenke.appendChild(img);
    lenke.appendChild(title);
    event.appendChild(lenke);
    event_container.insertBefore(event, event_container.firstChild);
}
