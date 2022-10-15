// Obiekt JavaScript
var hero = {
    "name": "",
    "level": 1,
    "hp": 100,
    "stamina": 100,
    "exp": 0,
    "stats": [
        { "name": "Siła", "value": 3, },
        { "name": "Kondycja", "value": 3 },
    ],
    "eq": [
        { "name": "Sztylet", "stats": [
            { "name": "Siła", "value": 1 }
        ]},
        { "name": "Zniszczona szata", "stats": [
            { "name": "Kondycja", "value": -1 }
        ]},
    ],
}

var village = {
    "name": "Neisse",
    "zasoby": [
        { "name": "Drewno", "value": 0 },
        { "name": "Kamień", "value": 50 }
    ],
    "budynki": [
        { "name": "Drwal", "value": 1 },
        { "name": "Kamieniołom", "value": 1 },
    ]
}