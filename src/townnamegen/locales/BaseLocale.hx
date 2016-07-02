package townnamegen.locales;

/**
 * ...
 * @author Laurence Dougal Myers
 */
class BaseLocale {

    private function new() {
        
    }
    
    /**
     * Generates a number from given seed.
     * @param shift_by number of bits seed is shifted to the right
     * @param max generated number is in interval -bias...max-1
     * @param seed seed
     * @param bias minimum value that can be returned
     * @return seed transformed to a number from given range
     */
    private inline function SeedChanceBias(shiftBy : Int /* byte */, max : Int /* max */, seed : Int /* uint32 */, bias : Int /* int */) : Int /* uint32 */ {
        return SeedChance(shiftBy, max + bias, seed) - bias;
    }
    
    /**
     * Generates a number from given seed.
     * @param shift_by number of bits seed is shifted to the right
     * @param max generated number is in interval 0...max-1
     * @param seed seed
     * @return seed transformed to a number from given range
     */
    private inline function SeedChance(shiftBy : Int, max : Int, seed : Int) : Int {
        return (GB(seed, shiftBy, 16) * max) >> 16;
    }
    
    /**
     * Fetch \a n bits from \a x, started at bit \a s.
     *
     * This function can be used to fetch \a n bits from the value \a x. The
     * \a s value set the start position to read. The start position is
     * count from the LSB and starts at \c 0. The result starts at a
     * LSB, as this isn't just an and-bitmask but also some
     * bit-shifting operations. GB(0xFF, 2, 1) will so
     * return 0x01 (0000 0001) instead of
     * 0x04 (0000 0100).
     *
     * @param x The value to read some bits.
     * @param s The start position to read some bits.
     * @param n The number of bits to read.
     * @pre n < sizeof(T) * 8
     * @pre s + n <= sizeof(T) * 8
     * @return The selected bits, aligned to a LSB.
     */
    private static inline function GB(x : Int, s : Int /* uint8 */, n : Int /* uint8 */) {
        return (x >> s) & ((1 << n) - 1);
    }
    
    private inline function append(buf : StringBuf, table : Array<String>, chance : Int, seed : Int) {
        buf.add(table[SeedChance(chance, table.length, seed)]);
    }
    
    private inline function appendBias(buf : StringBuf, table : Array<String>, chance : Int, seed : Int, bias : Int) {
        var i = SeedChanceBias(chance, table.length, seed, bias);
        if (i >= 0) {
            buf.add(table[i]);
        }
    }
    
    public function getLocaleKey() : String {
        var clz = Type.getClass(this);
        var clzName = Type.getClassName(clz);
        var clzNameSplit = clzName.split('.');
        return clzNameSplit[clzNameSplit.length - 1];
    }
}