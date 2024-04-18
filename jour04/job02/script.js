
function jsonValueKey(json, key) {
    console.log(json[key])
}

let json = {
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
};

key1 = "name"
key2 = "city"

jsonValueKey(json, key1);
jsonValueKey(json, key2);