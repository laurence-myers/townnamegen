package townnamegen.locales;
using StringTools;

class Swedish extends BaseLocale implements ILocale {
        
    private static var _name_swedish_1 = [
        "Gamla ",
        "Lilla ",
        "Nya ",
        "Stora ",
    ];

    private static var _name_swedish_2 = [
        "Boll",
        "Bor",
        "Ed",
        "En",
        "Erik",
        "Es",
        "Fin",
        "Fisk",
        "Gr\xC3\xB6n",
        "Hag",
        "Halm",
        "Karl",
        "Kram",
        "Kung",
        "Land",
        "Lid",
        "Lin",
        "Mal",
        "Malm",
        "Marie",
        "Ner",
        "Norr",
        "Oskar",
        "Sand",
        "Skog",
        "Stock",
        "Stor",
        "Str\xC3\xB6m",
        "Sund",
        "S\xC3\xB6der", // "S\xC3\xB6""der"
        "Tall",
        "Tratt",
        "Troll",
        "Upp",
        "Var",
        "V\xC3\xA4ster",
        "\xC3\x84ngel",
        "\xC3\x96ster",
    ];

    private static var _name_swedish_2a = [
        "B",
        "Br",
        "D",
        "Dr",
        "Dv",
        "F",
        "Fj",
        "Fl",
        "Fr",
        "G",
        "Gl",
        "Gn",
        "Gr",
        "H",
        "J",
        "K",
        "Kl",
        "Kn",
        "Kr",
        "Kv",
        "L",
        "M",
        "N",
        "P",
        "Pl",
        "Pr",
        "R",
        "S",
        "Sk",
        "Skr",
        "Sl",
        "Sn",
        "Sp",
        "Spr",
        "St",
        "Str",
        "Sv",
        "T",
        "Tr",
        "Tv",
        "V",
        "Vr",
    ];

    private static var _name_swedish_2b = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "y",
        "\xC3\xA5",
        "\xC3\xA4",
        "\xC3\xB6",
    ];

    private static var _name_swedish_2c = [
        "ck",
        "d",
        "dd",
        "g",
        "gg",
        "l",
        "ld",
        "m",
        "n",
        "nd",
        "ng",
        "nn",
        "p",
        "pp",
        "r",
        "rd",
        "rk",
        "rp",
        "rr",
        "rt",
        "s",
        "sk",
        "st",
        "t",
        "tt",
        "v",
    ];

    private static var _name_swedish_3 = [
        "arp",
        "berg",
        "boda",
        "borg",
        "bro",
        "bukten",
        "by",
        "byn",
        "fors",
        "hammar",
        "hamn",
        "holm",
        "hus",
        "h\xC3\xA4ttan",
        "kulle",
        "k\xC3\xB6ping",
        "lund",
        "l\xC3\xB6v",
        "sala",
        "skrona",
        "sl\xC3\xA4tt",
        "sp\xC3\xA5ng",
        "stad",
        "sund",
        "svall",
        "svik",
        "s\xC3\xA5ker",
        "udde",
        "valla",
        "viken",
        "\xC3\xA4lv",
        "\xC3\xA5s",
    ];
    
    public function new() {
        super();
    }
        
    public function generateName(seed : Int) : String {
        var buf = new StringBuf();
        
        appendBias(buf, _name_swedish_1, 0, seed, 50);
        if (SeedChance(4, 5, seed) >= 3) {
            append(buf, _name_swedish_2, 7, seed);
        } else {
            append(buf, _name_swedish_2a, 7, seed);
            append(buf, _name_swedish_2b, 10, seed);
            append(buf, _name_swedish_2c, 13, seed);
        }
        append(buf, _name_swedish_3, 16, seed);
        
        return buf.toString();
    }
}