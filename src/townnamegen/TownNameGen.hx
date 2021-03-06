package townnamegen;
import de.polygonal.core.math.random.Mersenne;
import townnamegen.locales.ILocale;

@:expose
class TownNameGen {

    public static var LOCALE_MAP : Map<String, ILocale> = {
        var map = new Map<String, ILocale>();
        for (clz in CompileTime.getAllClasses(ILocale)) {
            var instance = Type.createInstance(clz, []);
            map.set(instance.getLocaleKey(), instance);
        }
        map;
    };
    
    private function new() {
        
    }
    
    public static function addLocale(localeKey : String, locale : ILocale) {
        LOCALE_MAP[localeKey] = locale;
    }
    
    public static function generate(localeKey : String, num : Int, ?seed : Int) : Array<String> {
        var locale : ILocale = LOCALE_MAP.get(localeKey);
        if (locale == null) {
            throw 'Locale not found: $locale';
        }
        if (seed == null) {
            seed = Math.floor(Date.now().getTime());
        }
        var randomizer = new Mersenne(seed);
        var names : Map<String, Bool> = new Map<String, Bool>();
        for (i in 0...num) {
            var newSeed = Math.floor(randomizer.random());
            var name = locale.generateName(newSeed);
            var j = 1000;
            while (names.get(name) && j > 0) {
                //trace('Discarding $name');
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
}