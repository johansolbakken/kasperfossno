function createHeader() {
    let head = document.getElementsByTagName("HEAD")[0];
    
    let site_title = document.createElement("title");
    site_title.innerHTML = "Kasper Foss";

    let meta1 = document.createElement("meta");
    meta1.charset = "UTF-8";

    let meta2 = document.createElement("meta");
    meta2.name="viewport";
    meta2.content = "width=device-width, initial-scale=1.0";
    
    head.appendChild(meta1);
    head.appendChild(meat2);
    head.appendChild(site_title);

    let title = document.getElementsByTagName("h1")[0].innerHTML;

    styles = ["main", "navigasjon", String(title).toLowerCase()]; //TODO: Add footer

    for (let i = 0; i < styles.length; i++) {
        let link = document.createElement("link");

        // set the attributes for link element
        link.rel = "stylesheet";

        link.href = "/KasperFossNo/css/" + styles[i] + ".css";

        // Append link element to HTML head
        head.appendChild(link);
    }
}

createHeader();
