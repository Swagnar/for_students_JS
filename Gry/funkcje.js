function zapisz_w_przegladarce_jako_tekst(nazwa, obiekt) {
    let obiektZamienionyNaTekst = JSON.stringify(obiekt);
    localStorage.setItem(nazwa, obiektZamienionyNaTekst);
}

function odczytaj_z_przegladarki(nazwa) {
    return localStorage.getItem(nazwa);
}

function ulepsz_budynek(wioska, id_budynku) {
    let aktualnyPoziom = wioska["budynki"][id_budynku]["value"];
    wioska["budynki"][id_budynku]["value"] = aktualnyPoziom + 1;
}

function usun_dane() {
    localStorage.clear();
}