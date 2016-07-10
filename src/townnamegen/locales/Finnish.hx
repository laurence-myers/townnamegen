package townnamegen.locales;
using StringTools;

class Finnish extends BaseLocale implements ILocale {

    private static var _name_finnish_1 = [
        "Hiekka",
        "Haapa",
        "Mylly",
        "Sauna",
        "Uusi",
        "Vanha",
        "Kes\xC3\xA4",
        "Kuusi",
        "Pelto",
        "Tuomi",
        "Terva",
        "Olki",
        "Hein\xC3\xA4",
        "Sein\xC3\xA4",
        "Rova",
        "Koivu",
        "Kokko",
        "M\xC3\xA4nty",
        "Pihlaja",
        "Pet\xC3\xA4j\xC3\xA4",
        "Kielo",
        "Kauha",
        "Viita",
        "Kivi",
        "Riihi",
        "\xC3\x84\xC3\xA4ne",
        "Niini",
    ];

    private static var _name_finnish_2 = [
        "Lappeen",
        "Lohjan",
        "Savon",
        "Lapin",
        "Pit\xC3\xA4j\xC3\xA4n",
        "Martin",
        "Kuusan",
        "Kemi",
        "Keri",
        "H\xC3\xA4meen",
        "Kangas",
    ];

    private static var _name_finnish_3 = [
        "harju",
        "linna",
        "j\xC3\xA4rvi",
        "kallio",
        "m\xC3\xA4ki",
        "nummi",
        "joki",
        "kyl\xC3\xA4",
        "lampi",
        "lahti",
        "mets\xC3\xA4",
        "suo",
        "laakso",
        "niitty",
        "luoto",
        "hovi",
        "ranta",
        "koski",
        "salo",
    ];
    
    public function new() {
        super();
    }
        
    public function generateName(seed : Int) : String {
        var buf = new StringBuf();
        
        // Adds "la" on the end
        if (SeedChance(0, 15, seed) >= 5) {
            var sel = SeedChance(0, _name_finnish_1.length, seed);
            var part = _name_finnish_1[sel];
            if (part.endsWith('i')) {
                part = part.substr(0, part.length - 1) + 'e';
            }
            buf.add(part);
            var tmp = buf.toString();
            var regex = new EReg('[aou]', 'i');
            if (regex.match(tmp)) {
                buf.add('la');
            } else {
                buf.add('l\xC3\xA4');
            }
            return buf.toString();
        }
        
        // A two-part name
        var sel = SeedChance(2, _name_finnish_1.length + _name_finnish_2.length, seed);
        if (sel >= _name_finnish_1.length) {
            buf.add(_name_finnish_2[sel - _name_finnish_1.length]);
        } else {
            buf.add(_name_finnish_1[sel]);
        }
        append(buf, _name_finnish_3, 10, seed);
        
        return buf.toString();
    }
}