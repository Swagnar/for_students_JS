// Metody JSON używane w aplikacji:
//
//  JSON.stringify(obiektJS) - funkcja ta zamienia obiekt JavaScript na zwykły, czarno-biały tekst,
//                             ponieważ nie możemy bezpośrednio zamienić obiektu JS na obiekt JSON.
//                             Załóżmy że mamy obiekt:
//
//                             var Uczen = {
//                              "imie": "Adam",
//                              "nazwisko": "Kowalski",
//                              "oceny": [
//                                  {"przedmiot": "Fizyka", "oceny": [3, 3, 4, 1]},
//                                  {"przedmiot": "Matematyka", "oceny": [1, 1, 2, 1]}
//                              ],
//                              "klasa": "2TP"
//                             }

//                             Jeżeli użyjemy tego obiektu jako parametr funkcji JSON.stringify() otrzymamy:
//                             '{"imie":"Adam","nazwisko":"Kowalski","oceny":[{"przedmiot":"Fizyka","oceny":[3,3,4,1]},{"przedmiot":"Matematyka","oceny":[1,1,2,1]}],"klasa":"2TP"}'
//
//  JSON.parse(tekst)        - ta funkcja zamieni tekst stworzony za pomocą funkcji wyżej na obiekt JSON


// ###### Algorytm gry ######
//  0. Sprawdź czy w pamięci przeglądarki (localStorage) istnieją
//      już zapisane dane
//
//      if(localStorage.getItem("nazwaNaszychDanych") != undefined) {
//          Jeżeli funkcja warunkowa jest równa TRUE, oznacza to że
//          w pamięci przeglądarki istnieją już takie dane
//
//          Teraz należy owe dane pobrać i wypełnić nimi naszą gre    
//      } else {
//          Jeżeli funkcja warunkowa jest równa FALSE, oznacza to że
//          w pamięci przeglądarki nie istnieją żadne zapisane dane
//      
//          Teraz należy kontynuuować i wypełnić dane po raz pierwszy
//          oraz je zapisać
//}
//
//  I. Gracz uzupełnia puste pola np. nazwa gracza, nazwa osady
//      robi to używając obiektu JavaScript np. var village
//
//      var nazwa = prompt("Podaj nazwe gracza")
//      village.name = nazwa
//
//
//  II. Gameplay
//
//  III. Zapisz dane gry
//      Najpierw użyjemy metody JSON.stringify(NASZ_OBIEKT_JS)
//      aby zamienić dane obiektu na tekst np.
//
//      var VILLAGE = JSON.stringify(NASZ_OBIEKT_JS)
//
//      Następnie zapiszemy nasz tekst w pamięci przeglądarki
//
//      localStorage.setItem("nazwaPodJakąChcemyZapisać", VILLAGE)