package townnamegen;
import haxe.Int32;
import haxe.Int64;

class Randomizer {

    private static var _random : Randomizer = new Randomizer();
    
    private var state : Array<Int> = [Std.random(2147483647), Std.random(2147483647)];
    
    public function new() {
        
    }
    
    private static inline function ROR(x : Int, n : Int) {
        var sizeofX = 8 * 8; // doesn't really work, assumes 64-bit
        return (x >> n | x << (sizeofX - n));
    }
    
    public function Next(?limit : Int) : Int {
        if (limit == null) {
            var s : Int = this.state[0];
            var t : Int = this.state[1];
            state[0] = s + ROR(t ^ 0x1234567F, 7) + 1;
            state[1] = ROR(s, 3) - 1;
            return state[1];
        } else {
            var val : Int64 = Next();
            var lim : Int64 = limit;
            var result : Int = ((val * limit) >> 32).low;
            return result;
        }
    }
    
    public function SetSeed(seed : Int) {
        state[0] = seed;
        state[1] = seed;
    }
    
    public static function SetRandomSeed(seed : Int) {
        _random.SetSeed(seed);
    }
    
    public static inline function Random() : Int {
        return _random.Next();
    }
    
    public static inline function RandomRange(limit : Int) : Int {
        return _random.Next(limit);
    }
}