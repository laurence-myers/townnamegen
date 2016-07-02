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
        var i = SeedChanceBias(0, _name_original_english_1.length, seed, 50);
        if (i >= 0) {
            buf.add(_name_original_english_1[i]);
        }
        buf.add(_name_original_english_2[SeedChance(4, _name_original_english_2.length, seed)]);
        buf.add(_name_original_english_3[SeedChance(7, _name_original_english_3.length, seed)]);
        buf.add(_name_original_english_4[SeedChance(10, _name_original_english_4.length, seed)]);
        buf.add(_name_original_english_5[SeedChance(13, _name_original_english_5.length, seed)]);
        i = SeedChanceBias(15, _name_original_english_6.length, seed, 60);
        if (i >= 0) {
            buf.add(_name_original_english_6[i]);
        }
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