/**
 * form_validasjon.js
 * Sier ifra at siden er under utvikling
 */

let form = document.getElementById("kontaktskjema")

form.addEventListener("submit", () => {
    alert("Meldingen ble ikke sendt da siden er under konstruksjon")
})