package townnamegen.locales;
using StringTools;

/**
 * ...
 * @author Laurence Dougal Myers
 */
class AdditionalEnglish extends BaseLocale implements ILocale {
    private var _name_additional_english_prefix = [
        "Great ",
        "Little ",
        "New ",
        "Fort ",
        "St. ",
        "Old ",
    ];

    private var _name_additional_english_1a = [
        "Pen",
        "Lough",
        "Stam",
        "Aber",
        "Acc",
        "Ex",
        "Ax",
        "Bre",
        "Cum",
        "Dun",
        "Fin",
        "Inver",
        "Kin",
        "Mon",
        "Nan",
        "Nant",
        "Pit",
        "Pol",
        "Pont",
        "Strath",
        "Tre",
        "Tilly",
        "Beck",
        "Canter",
        "Bath",
        "Liver",
        "Mal",
        "Ox",
        "Bletch",
        "Maccles",
        "Grim",
        "Wind",
        "Sher",
        "Gates",
        "Orp",
        "Brom",
        "Lewis",
        "Whit",
        "White",
        "Worm",
        "Tyne",
        "Avon",
        "Stan",
    ];

    private var _name_additional_english_1b1 = [
        "Wr",
        "B",
        "C",
        "Ch",
        "Br",
        "D",
        "Dr",
        "F",
        "Fr",
        "Fl",
        "G",
        "Gr",
        "H",
        "L",
        "M",
        "N",
        "P",
        "Pr",
        "Pl",
        "R",
        "S",
        "S",
        "Sl",
        "T",
        "Tr",
        "W",
    ];

    private var _name_additional_english_1b2 = [
        "ar",
        "a",
        "e",
        "in",
        "on",
        "u",
        "o",
        "ee",
        "es",
        "ea",
        "un",
        "en",
    ];

    private var _name_additional_english_1b3a = [
        "n",
        "d",
        "",
        "t",
        "",
        "",
    ];

    private var _name_additional_english_1b3b = [
        "ning",
        "ding",
        "fing",
    ];

    private var _name_additional_english_2 = [
        "ville",
        "ham",
        "field",
        "ton",
        "town",
        "borough",
        "bridge",
        "bury",
        "wood",
        "ditch",
        "ford",
        "hall",
        "dean",
        "leigh",
        "dore",
        "ston",
        "stow",
        "church",
        "wich",
        "low",
        "way",
        "stone",
        "minster",
        "ley",
        "head",
        "bourne",
        "pool",
        "worth",
        "hill",
        "well",
        "hattan",
        "burg",
        "berg",
        "burgh",
        "port",
        "stoke",
        "haven",
        "stable",
        "stock",
        "side",
        "brook",
        "don",
        "den",
        "down",
        "nor",
        "grove",
        "combe",
        "by",
        "say",
        "ney",
        "chester",
        "dale",
        "ness",
        "shaw",
        "thwaite",
    ];

    private var _name_additional_english_3 = [
        "-on-sea",
        " Bay",
        " Market",
        " Beeches",
        " Common",
        " Park",
        " Heath",
        " Marsh",
        " Green",
        " Castle",
        " End",
        " Rivers",
        " Cross",
        " Bridge",
        " Falls",
        " City",
        " Ridge",
        " Springs",
    ];

    public function new() {
        super();
    }
        
    public function generateName(seed : Int) : String {
        var buf = new StringBuf();
        
        appendBias(buf, _name_additional_english_prefix, 0, seed, 50);
        if (SeedChance(3, 20, seed) >= 14) {
            append(buf, _name_additional_english_1a, 6, seed);
        } else {
            append(buf, _name_additional_english_1b1, 6, seed);
            append(buf, _name_additional_english_1b2, 9, seed);
            if (SeedChance(11, 20, seed) >= 4) {
                append(buf, _name_additional_english_1b3a, 12, seed);
            } else {
                append(buf, _name_additional_english_1b3b, 12, seed);
            }
        }
        append(buf, _name_additional_english_2, 14, seed);
        appendBias(buf, _name_additional_english_3, 15, seed, 60);
        
        var name = buf.toString();
        return ReplaceEnglishWords(name);
    }
    
    private function ReplaceEnglishWords(name : String) {
        // TODO: make this more efficient, if possible
        name = name.replace("Cunt", "East");
        name = name.replace("Slag", "Pits");
        name = name.replace("Slut", "Edin");
        name = name.replace("Fart", "Boot"); // not in original
        name = name.replace("Drar", "Quar");
        name = name.replace("Dreh", "Bash");
        name = name.replace("Frar", "Shor");
        name = name.replace("Grar", "Aber");
        name = name.replace("Brar", "Over");
        name = name.replace("Wrar", "Inve"); // or "Stan"
        return name;
    }
    
}