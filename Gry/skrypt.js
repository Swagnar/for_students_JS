// Jeżeli jeszcze żadnych danych nie zapisaliśmy w pamięci przeglądarki za pomocą
// funkcji localStorage.setItem(), zmienna 'zapisaneDaneWioska' będzie miała wartość
//      null
// lub
//      undefined
//
var zapisaneDaneWioska  = odczytaj_z_przegladarki("localStorageVillage");
var WIOSKA_JSON;
// I. wypełnijmy dane na samym początku nowej gry
//
// Jeżeli zmienna jest równa null LUB jest równa undefined
//
if(zapisaneDaneWioska == null || zapisaneDaneWioska == undefined) {
    let nazwaWioski = prompt("Podaj nazwę osady");

    village.name = nazwaWioski;
    zapisz_w_przegladarce_jako_tekst("localStorageVillage", village);
    console.log(village)
} else {

    // Znajdujemy się wewnątrz ciała instrukcji 'else', tzn. że w przeglądarce
    // jest zapisany nasz obiekt.
    //
    // Jednakże jest on zapisany jako tekst. Używając metody 'typeof()' możemy sprawdzić
    // jaki typ danych przechowuje nasza zmienna. Uruchamiając linijkę kodu poniżej
    // zobaczymy w konsoli napis 'string', czyli zwykły tekst a nie żaden obiekt czy tablicę
    //
    console.log("%czapisaneDaneWioska: ", "color: blue;")
    console.log(zapisaneDaneWioska)
    console.log("zapisaneDaneWioska ma typ danych %c" + typeof(zapisaneDaneWioska), "color: red; background-color: black; font-weight: bold")

    // Musimy więc zamienić nasz tekst na obiekt JSON aby wprowadzać jakieś zmiany np.
    // dodawać/zabierać zasoby.
    //
    WIOSKA_JSON = JSON.parse(zapisaneDaneWioska);

    // Czasem możecie napotkać bug (tak jak ja) w którym jedno użycie metody JSON.parse() to za mało
    // i musimy upewnić się że nasza zmienna napewno będzie obiektem JSON
    // Poniżej sprawdzam czy zmienna nadal jest zwykłym tekstem i jeśli tak, to
    // znów próbuje zamienić ją w obiekt JSON
    //
    if(typeof(WIOSKA_JSON) === 'string') {
        WIOSKA_JSON = JSON.parse(WIOSKA_JSON)
    }

    // Teraz możemy wypisać w konsoli jak wygląda nasz obiekt JSON
    //
    console.log("%cWIOSKA_JSON:", "color: blue;")
    console.log(WIOSKA_JSON)

    // Również za pomocą metody 'typeof()' możemy potwierdzić że nasza zmienna 
    // WIOSKA_JSON jest teraz prawidłowym obiektem a nie tekstem
    // W konsoli zobaczymy napis 'object' a nie 'string'
    //
    console.log("WIOSKA_JSON ma typ danych %c" + typeof(WIOSKA_JSON), "color: red; background-color: black; font-weight: bold")
    
    // Skoro już mamy wszystko sprawdzone, mamy nasz obiekt JSON który będziemy edytować,
    // możemy 'uruchomić' naszą grę
    //
    // Większość gier posiada coś co nazywamy 'pętlą gry', jest to pewnego rodzaju
    // funkcja która wykonuje się cały czas i aktualizuje to co się dzieje w grze
    //
    // Narazie będzie to prosta funkcja która sprawdzi czy mamy wybu
    WIOSKA_JSON = gameplay(WIOSKA_JSON)
    WIOSKA_JSON = JSON.stringify(WIOSKA_JSON);
    zapisz_w_przegladarce_jako_tekst("localStorageVillage", "");
    zapisz_w_przegladarce_jako_tekst("localStorageVillage", WIOSKA_JSON)
}

// if(zapisaneDaneBohater == null || zapisaneDaneBohater == undefined) {
//     let nazwaBohatera = prompt("Podaj nazwę bohatera");

//     hero.name = nazwaBohatera;
//     wypisz_do_konsoli(hero);
// }

function gameplay(wioska) {
    console.log("%cObiekt którego używamy wewnątrz funkcji gameplay(): ", "color: green;")
    console.log(wioska);
    console.log("%cObiekt którego używamy wewnątrz funkcji gameplay() ma typ danych: %c" + typeof(wioska), "color: green;" ,"color: red; background-color: black; font-weight: bold;")
    
    // Skoro wiemy że parametr 'wioska' jest obiektem JSON, możemy używać jego pól oraz
    // je edytować
    
    //                                      id_budynku
    //                                          |
    let poziomBudynkuDrwala = wioska["budynki"][0]["value"]
    console.log("%cBudynek drwala znajduje się na poziomie: %c" + poziomBudynkuDrwala,
        "color: green;",
        "background-color: black; color: orange; font-weight: bold;"
    )   
    
    // Ulepszmy budynek na następny poziom
    ulepsz_budynek(wioska, 0);
    poziomBudynkuDrwala = wioska["budynki"][0]["value"]
    console.log("%cBudynek drwala znajduje się na poziomie: %c" + poziomBudynkuDrwala,
        "color: green;",
        "background-color: black; color: orange; font-weight: bold;"
    )  

    ulepsz_budynek(wioska, 1);
    
    
    //console.log(JSON.stringify(wioska));
    //zapisz_w_przegladarce_jako_tekst("localStorageVillage" ,JSON.stringify(wioska));
    return wioska;
}

function przygotuj_interfejs() {
    let wioska = odczytaj_z_przegladarki("localStorageVillage");
    
    let poziomDrwalaHTML = document.querySelector(".woodcutter");
    let poziomKamieniolomuHTML = document.querySelector(".quary");

    if(wioska != null) {
        wioska = JSON.parse(wioska);
        if(typeof(wioska) == 'string') {
            wioska = JSON.parse(wioska)
        }
        poziomDrwalaHTML.innerHTML = wioska["budynki"][0]["value"];
        poziomKamieniolomuHTML.innerHTML = wioska["budynki"][1]["value"];
    }
    
    
}