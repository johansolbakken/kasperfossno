function createHeader() {
    var head = document.getElementsByTagName("HEAD")[0];
    var title = document.getElementsByTagName("h1")[0].innerHTML;

    styles = ["main", "navigasjon", String(title).toLowerCase()]; //TODO: Add footer

    for (let i = 0; i < styles.length; i++) {
        var link = document.createElement("link");

        // set the attributes for link element
        link.rel = "stylesheet";

        link.href = "./css/" + styles[i] + ".css";

        // Append link element to HTML head
        head.appendChild(link);
    }
}

createHeader();
