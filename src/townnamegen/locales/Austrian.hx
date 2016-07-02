package townnamegen.locales;
using StringTools;

/**
 * ...
 * @author Laurence Dougal Myers
 */
class Austrian extends BaseLocale implements ILocale {
    private static var _name_austrian_a1 = [
        "Bad ",
        "Deutsch ",
        "Gross ",
        "Klein ",
        "Markt ",
        "Maria ",
    ];

    private static var _name_austrian_a2 = [
        "Aus",
        "Alten",
        "Braun",
        "V\xC3\xB6sl",
        "Mittern",
        "Nuss",
        "Neu",
        "Walters",
        "Breiten",
        "Eisen",
        "Feld",
        "Mittern",
        "Gall",
        "Obern",
        "Grat",
        "Heiligen",
        "Hof",
        "Holla",
        "Stein",
        "Eber",
        "Eggen",
        "Enzers",
        "Frauen",
        "Herren",
        "Hof",
        "H\xC3\xBCtt",
        "Kaisers",
        "K\xC3\xB6nigs",
        "Knittel",
        "Lang",
        "Ober",
        "Ollers",
        "Pfaffen",
        "Potten",
        "Salz",
        "Schwarz",
        "Stocker",
        "Unter",
        "Utten",
        "V\xC3\xB6sen",
        "Vill",
        "Weissen",
    ];

    private static var _name_austrian_a3 = [
        "see",
        "bach",
        "dorf",
        "ach",
        "stein",
        "hofen",
        "au",
        "ach",
        "kirch",
        "kirchen",
        "kreuz",
        "brunn",
        "siedl",
        "markt",
        "wang",
        "haag",
    ];

    private static var _name_austrian_a4 = [
        "Bruck",
        "Brunn",
        "Gams",
        "Grein",
        "Ried",
        "Faak",
        "Zell",
        "Spital",
        "Kirchberg",
        "Saal",
        "Taferl",
        "Wald",
    ];

    private static var _name_austrian_a5 = [
        "St. ",
        "Sankt ",
    ];

    private static var _name_austrian_a6 = [
        "Aegyd",
        "Andr\xC3\xA4",
        "Georgen",
        "Jakob",
        "Johann",
        "Leonhard",
        "Marein",
        "Lorenzen",
        "Margarethen",
        "Martin",
        "Michael",
        "Nikolai",
        "Oswald",
        "Peter",
        "P\xC3\xB6lten",
        "Stefan",
        "Stephan",
        "Thomas",
        "Veit",
        "Wolfgang",
    ];

    private static var _name_austrian_f1 = [
        " an der ",
        " ob der ",
    ];

    private static var _name_austrian_f2 = [
        "Donau",
        "Steyr",
        "Lafnitz",
        "Leitha",
        "Thaya",
        "Gail",
        "Drau",
        "Salzach",
        "Ybbs",
        "Traisen",
        "Enns",
        "Mur",
        "Ill",
    ];

    private static var _name_austrian_b1 = [
        " am ",
    ];

    private static var _name_austrian_b2 = [
        "Brenner",
        "Dachstein",
        "Gebirge",
        "Grossglockner",
        "Hausruck",
        "Semmering",
        "Wagram",
        "Wechsel",
        "Wilden Kaiser",
        "Ziller",
    ];

    public function new() {
        super();
    }
        
    public function generateName(seed : Int) : String {
        var buf = new StringBuf();
        
        appendBias(buf, _name_austrian_a1, 0, seed, 15);
        var j = 0;
        var i = SeedChance(4, 6, seed);
        if (i >= 4) {
            /* Kaisers-kirchen */
            append(buf, _name_austrian_a2, 7, seed);
            append(buf, _name_austrian_a3, 13, seed);
        } else if (i >= 2) {
            /* St. Johann */
            append(buf, _name_austrian_a5, 7, seed);
            append(buf, _name_austrian_a6, 9, seed);
            j = 1; // More likely to have a " an der " or " am "
        } else {
            /* Zell */
            append(buf, _name_austrian_a4, 7, seed);
        }
        
        i = SeedChance(1, 6, seed);
        if (i >= 4 - j) {
            /* an der Donau (rivers) */
            append(buf, _name_austrian_f1, 4, seed);
            append(buf, _name_austrian_f2, 5, seed);
        } else if (i >= 2 - j) {
            /* am Dachstein (mountains) */
            append(buf, _name_austrian_b1, 4, seed);
            append(buf, _name_austrian_b2, 5, seed);
        }
        
        return buf.toString();
    }
}