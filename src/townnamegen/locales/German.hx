package townnamegen.locales;
using StringTools;

class German extends BaseLocale implements ILocale {
    private static var _name_german_pre = [
        "Bad ",
        "Klein ",
        "Neu ",
    ];

    private static var _name_german_1 = [
        "Alb",
        "Als",
        "Ander",
        "Arns",
        "Bruns",
        "Bam",
        "Biele",
        "Cloppen",
        "Co",
        "Duis",
        "D\xC3\xBCssel",
        "Dannen",
        "Elb",
        "Els",
        "Elster",
        "Eichen",
        "Ems",
        "Fahr",
        "Falken",
        "Flens",
        "Frank",
        "Frei",
        "Freuden",
        "Fried",
        "F\xC3\xBCrsten",
        "Hahn",
        "Ham",
        "Harz",
        "Heidel",
        "Hers",
        "Herz",
        "Holz",
        "Hildes",
        "Inns",
        "Ilsen",
        "Ingols",
        "Kel",
        "Kies",
        "Korn",
        "Kor",
        "Kreuz",
        "Kulm",
        "Langen",
        "Lim",
        "Lohr",
        "L\xC3\xBCne",
        "Mel",
        "Michels",
        "M\xC3\xBChl",
        "Naum",
        "Nest",
        "Nord",
        "Nort",
        "Nien",
        "Nidda",
        "Nieder",
        "N\xC3\xBCrn",
        "Ober",
        "Offen",
        "Osna",
        "Olden",
        "Ols",
        "Oranien",
        "Pader",
        "Quedlin",
        "Quer",
        "Ravens",
        "Regens",
        "Rott",
        "Ros",
        "R\xC3\xBCssels",
        "Saal",
        "Saar",
        "Salz",
        "Sch\xC3\xB6ne",
        "Schwein",
        "Sonder",
        "Sonnen",
        "Stein",
        "Strals",
        "Straus",
        "S\xC3\xBCd", // "S\xC3\xBC""d"
        "Ton",
        "Unter",
        "Ur",
        "Vor",
        "Wald",
        "War",
        "Wert",
        "Wester",
        "Witten",
        "Wolfs",
        "W\xC3\xBCrz",
    ];

    private static var _name_german_2 = [
        "bach",
        "berg",
        "br\xC3\xBCck", // "br\xC3\xBC""ck"
        "br\xC3\xBCcken", // "br\xC3\xBC""cken"
        "burg",
        "dorf",
        "feld",
        "furt",
        "hausen",
        "haven",
        "heim",
        "horst",
        "mund",
        "m\xC3\xBCnster",
        "stadt",
        "wald",
    ];

    private static var _name_german_3_an_der = [
        " an der ",
    ];

    private static var _name_german_3_am = [
        " am ",
    ];

    private static var _name_german_4_an_der = [
        "Oder",
        "Spree",
        "Donau",
        "Saale",
        "Elbe",
    ];

    private static var _name_german_4_am = [
        "Main",
    ];

    public function new() {
        super();
    }
        
    public function generateName(seed : Int) : String {
        var buf = new StringBuf();
        
        /* optional prefix */
        var seed_derivative = SeedChance(7, 28, seed);
        if (seed_derivative == 12 || seed_derivative == 19) {
            append(buf, _name_german_pre, 2, seed);
        }
        
        /* mandatory middle segments including option of hardcoded name */
        // NOTE: slightly different here, I chose not to use any real town names.
        append(buf, _name_german_1, 3, seed);
        append(buf, _name_german_2, 5, seed);
        
        /* optional suffix */
        if (seed_derivative == 24) {
            var i = SeedChance(9, _name_german_4_an_der.length + _name_german_4_am.length, seed);
            if (i < _name_german_4_an_der.length) {
                buf.add(_name_german_3_an_der[0]);
                buf.add(_name_german_4_an_der[i]);
            } else {
                buf.add(_name_german_3_am[0]);
                buf.add(_name_german_4_am[i - _name_german_4_an_der.length]);
            }
        }
        
        return buf.toString();
    }
}