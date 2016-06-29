package townnamegen;

import js.Lib;
import townnamegen.locales.OriginalEnglish;

/**
 * ...
 * @author Laurence Dougal Myers
 */
class Main {
	
	static function main() {
		var gen = new OriginalEnglish();
        var name = gen.generateName(Std.random(2147483647));
        trace(name);
	}
	
}