package townnamegen;
import townnamegen.locales.ILocale;
import townnamegen.locales.OriginalEnglish;

@:expose
class TownNameGen {

    static var LOCALE_MAP = [
        "OriginalEnglish" => new OriginalEnglish()
    ];
    
    private function new() {
        
    }
    
    public static function generate(localeKey : String, num : Int, ?seed : Int) : Array<String> {
        trace(Type.getClassName(OriginalEnglish));
        var locale : ILocale = LOCALE_MAP.get(localeKey);
        if (locale == null) {
            throw 'Locale not found: $locale';
        }
        if (seed == null) {
            seed = Std.random(2147483647);
        }
        Randomizer.SetRandomSeed(seed);
        var names = [];
        for (i in 0...num) {
            names.push(locale.generateName(seed));
            seed = Randomizer.Random();
        }
        return names;
    }
    
    public static function test() {
        var result = generate(Type.getClassName(OriginalEnglish), 1);
        trace(result);
    }
}