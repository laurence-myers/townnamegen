package townnamegen.cli;

/**
 * Generate town names.
 * Based on the town name generator algorithms from OpenTTD.
 * 
 * Usage:
 *  $ neko townnamegen.n
 *  $ neko townnamegen.n --locale Silly --num 200 --seed 1234567
 */
class Main extends mcli.CommandLine {
    
    private var localeKey : String = "AdditionalEnglish";

    private var numberToGenerate : Int = 1;
    
    /**
     * Show this message.
     */
    public function help() {
        Sys.println(this.showUsage());
        Sys.exit(0);
    }
    
    /**
     * Lists the available options for the "locale" setting.
     */
    public function listLocales() {
        Sys.println("Locales:");
        Sys.println(getLocalesListString());
        Sys.exit(0);
    }
    
    /** 
     * (Optional) The town name locale. Defaults to "AdditionalEnglish".
     */
    public function locale(localeKey : String) {
        if (localeKey == null) {
            return;
        }
        for (key in TownNameGen.LOCALE_MAP.keys()) {
            if (key == localeKey) {
                this.localeKey = localeKey;
                return;
            }
        }
        var localeStrings = getLocalesListString();
        var msg = 'No locale found with name "$localeKey". Supported options:\n$localeStrings';
        Sys.println(msg);
        Sys.exit(2);
    }
    
    private function getLocalesListString() : String {
        var localeKeys = [for (locale in TownNameGen.LOCALE_MAP.keys()) ' - $locale'];
        localeKeys.sort(function (entryA, entryB) {
            var a = entryA.toUpperCase();
            var b = entryB.toUpperCase();
                        
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        var localeStrings = localeKeys.join('\n');
        return localeStrings;
    }
    
    /**
     * (Optional) The number of names to generate. Must be between 1 and 10,000. Defaults to 1.
     */
    public function num(inNum : Int) {
        if (inNum == null) {
            this.numberToGenerate = 1;
            return;
        } else if (Math.isNaN(inNum)) {
            var msg = '$inNum is not a number.';
            Sys.println(msg);
            Sys.exit(3);
        } else if (inNum < 1 || inNum > 10000) {
            var msg = 'Number to generate must be between 1 and 10,000. (Got: $inNum)';
            Sys.println(msg);
            Sys.exit(4);
        } else {
            this.numberToGenerate = inNum;
        }
    }
    
    /**
     * (Optional) The seed for the random number generator. Defaults to the current timestamp.
     */
    public var seed : Int = null;
    
    public function runDefault() {
        var code = 1;
        try {
            var results = TownNameGen.generate(this.localeKey, this.numberToGenerate, this.seed);
            Sys.println(results.join('\n'));
            code = 0;
        } catch (err : Dynamic) {
            trace(err);
            Sys.println("Unexpected error.");
            code = 1;
        }
        Sys.exit(code);
    }
    
    public static function main() {
        new mcli.Dispatch(Sys.args()).dispatch(new Main());
    }
    
}