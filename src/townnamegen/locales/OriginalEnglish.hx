package townnamegen.locales;
using StringTools;

/**
 * ...
 * @author Laurence Dougal Myers
 */
class OriginalEnglish extends BaseLocale implements ILocale {
    private static var _name_original_english_1 = [
        "Great ",
        "Little ",
        "New ",
        "Fort ",
    ];

    private static var _name_original_english_2 = [
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

    private static var _name_original_english_3 = [
        "ar",
        "a",
        "e",
        "in",
        "on",
        "u",
        "un",
        "en",
    ];

    private static var _name_original_english_4 = [
        "n",
        "ning",
        "ding",
        "d",
        "",
        "t",
        "fing",
    ];

    private static var _name_original_english_5 = [
        "ville",
        "ham",
        "field",
        "ton",
        "town",
        "bridge",
        "bury",
        "wood",
        "ford",
        "hall",
        "ston",
        "way",
        "stone",
        "borough",
        "ley",
        "head",
        "bourne",
        "pool",
        "worth",
        "hill",
        "well",
        "hattan",
        "burg",
    ];

    private static var _name_original_english_6 = [
        "-on-sea",
        " Bay",
        " Market",
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
        appendBias(buf, _name_original_english_1, 0, seed, 50);
        append(buf, _name_original_english_2, 4, seed);
        append(buf, _name_original_english_3, 7, seed);
        append(buf, _name_original_english_4, 10, seed);
        append(buf, _name_original_english_5, 13, seed);
        appendBias(buf, _name_original_english_6, 15, seed, 60);
        
        var name = buf.toString();
        if (name.lastIndexOf('C', 0) == 0 && (name.lastIndexOf('e', 1) == 1 || name.lastIndexOf('i', 1) == 1)) {
            name = 'K' + name.substr(1);
        }
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