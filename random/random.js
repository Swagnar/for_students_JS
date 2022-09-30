var KLASA;
var UCZNIOWIE;

function Uczen(id, imie, nazwisko) {
    this.id = id;
    this.imie = imie;
    this.nazwisko = nazwisko;
}
function wylosuj() {
    let liczba = Math.floor(Math.random() * UCZNIOWIE.length + 1);
    console.log(liczba);

    let miejsce = document.getElementById("wylosowana-liczba");
    miejsce.innerHTML = "Wylosowano: " + liczba;
}
function stworz_obiekty(klasa) {
    let uczniowie = [];

    if(klasa=="klasa1") {
        klasa1.forEach(function( element, i ) {
            let imieNazwisko = element.split(' ');
            uczniowie.push(new Uczen(i, imieNazwisko[0], imieNazwisko[1]))
        })
    }

    return uczniowie;
}
function zmien_klase() {
    let select = document.getElementById("wybor-klasy");
    let klasa = select.options[select.selectedIndex].value;

    KLASA = klasa;
    UCZNIOWIE = stworz_obiekty(KLASA);
    console.log(UCZNIOWIE);
}