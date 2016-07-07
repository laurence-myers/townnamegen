package townnamegen.demo;
import sys.io.File;

class Build {
    public static function main() {
        var entries : Array<LocaleEntry> = [];
        for (locale in TownNameGen.LOCALE_MAP.iterator()) {
            entries.push({
                localeKey: locale.getLocaleKey(),
                displayName: locale.getDisplayName()
            });
        }
        entries.sort(function (entryA, entryB) {
            var a = entryA.displayName.toUpperCase();
            var b = entryB.displayName.toUpperCase();
                        
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        var html = Views.index(entries);
        File.saveContent('bin/index.html', html); // dodgy, assumes running in project root
    }
}