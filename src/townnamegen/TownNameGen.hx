package townnamegen;
import de.polygonal.core.math.random.Mersenne;
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
        var randomizer = new Mersenne(seed);
        var names : Map<String, Bool> = new Map<String, Bool>();
        for (i in 0...num) {
            var newSeed = Math.floor(randomizer.random());
            var name = locale.generateName(newSeed);
            var j = 1000;
            while (names.get(name) && j > 0) {
                trace('Discarding $name');
                newSeed = Math.floor(randomizer.random());
                name = locale.generateName(newSeed);
                j--;
            }
            if (j == 0) {
                trace("Too many names, can't generate any more unique ones!");
                break;
            } else {
                names[name] = true;
            }
        }
        return [for (k in names.keys()) k];
    }
    
    public static function test() {
        var result = generate(Type.getClassName(OriginalEnglish), 1);
        trace(result);
    }
}