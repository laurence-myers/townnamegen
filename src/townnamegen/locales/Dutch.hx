package townnamegen.locales;
using StringTools;

class Dutch extends BaseLocale implements ILocale {

    private static var _name_dutch_1 = [
        "Nieuw ",
        "Oud ",
        "Groot ",
        "Zuid ",
        "Noord ",
        "Oost ",
        "West ",
        "Klein ",
    ];

    private static var _name_dutch_2 = [
        "Hoog",
        "Laag",
        "Zuider",
        "Zuid",
        "Ooster",
        "Oost",
        "Wester",
        "West",
        "Hoofd",
        "Midden",
        "Eind",
        "Amster",
        "Amstel",
        "Dord",
        "Rotter",
        "Haar",
        "Til",
        "Enk",
        "Dok",
        "Veen",
        "Leidsch",
        "Lely",
        "En",
        "Kaats",
        "U",
        "Maas",
        "Mar",
        "Bla",
        "Al",
        "Alk",
        "Eer",
        "Drie",
        "Ter",
        "Groes",
        "Goes",
        "Soest",
        "Coe",
        "Uit",
        "Zwaag",
        "Hellen",
        "Slie",
        "IJ",
        "Grubben",
        "Groen",
        "Lek",
        "Ridder",
        "Schie",
        "Olde",
        "Roose",
        "Haar",
        "Til",
        "Loos",
        "Hil",
    ];

    private static var _name_dutch_3 = [
        "Drog",
        "Nat",
        "Valk",
        "Bob",
        "Dedem",
        "Kollum",
        "Best",
        "Hoend",
        "Leeuw",
        "Graaf",
        "Uithuis",
        "Purm",
        "Hard",
        "Hell",
        "Werk",
        "Spijk",
        "Vink",
        "Wams",
        "Heerhug",
        "Koning",
    ];

    private static var _name_dutch_4 = [
        "e",
        "er",
        "el",
        "en",
        "o",
        "s",
    ];

    private static var _name_dutch_5 = [
        "stad",
        "vorst",
        "dorp",
        "dam",
        "beek",
        "doorn",
        "zijl",
        "zijlen",
        "lo",
        "muiden",
        "meden",
        "vliet",
        "nisse",
        "daal",
        "vorden",
        "vaart",
        "mond",
        "zaal",
        "water",
        "duinen",
        "heuvel",
        "geest",
        "kerk",
        "meer",
        "maar",
        "hoorn",
        "rade",
        "wijk",
        "berg",
        "heim",
        "sum",
        "richt",
        "burg",
        "recht",
        "drecht",
        "trecht",
        "tricht",
        "dricht",
        "lum",
        "rum",
        "halen",
        "oever",
        "wolde",
        "veen",
        "hoven",
        "gast",
        "kum",
        "hage",
        "dijk",
        "zwaag",
        "pomp",
        "huizen",
        "bergen",
        "schede",
        "mere",
        "end",
    ];
    
    public function new() {
        super();
    }
        
    public function generateName(seed : Int) : String {
        var buf = new StringBuf();
        
        appendBias(buf, _name_dutch_1, 0, seed, 50);
        if (SeedChance(6, 9, seed) > 4) {
            append(buf, _name_dutch_2, 9, seed);
        } else {
            append(buf, _name_dutch_3, 9, seed);
            append(buf, _name_dutch_4, 12, seed);
        }
        append(buf, _name_dutch_5, 15, seed);
        
        return buf.toString();
    }
}