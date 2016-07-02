package townnamegen.locales;

/**
 * @author Laurence Dougal Myers
 */
interface ILocale {
  public function generateName(seed : Int) : String;
}