package townnamegen.demo;
import js.Browser;
import js.html.Event;
import js.html.InputElement;
import js.html.SelectElement;
import js.html.TextAreaElement;

@:expose
class DemoForm {
    
    private static var FORM_NAME = 'demoForm';
    
    public var localeKey : String;
    
    public var numberToGenerate : Int;
    
    public var seed : Int;
    
    public function new() {
    }
    
    public function submit() : Void {
        var localeKey = getSelectValue("localeKey");
        var numberToGenerate = getIntValue("numberToGenerate");
        var seed = getIntValue("seed");
        if (Math.isNaN(seed)) {
            seed = null;
        }
        var results = TownNameGen.generate(localeKey, numberToGenerate, seed);
        writeToOutput(results);
    }
    
    private function getSelectValue(id : String) : String {
        var element = cast(Browser.document.getElementById(id), SelectElement);
        return element.value;
    }
        
    private function getIntValue(id : String) : Null<Int> {
        var element : InputElement = cast(Browser.document.getElementById(id), InputElement);
        return Math.floor(element.valueAsNumber);
    }
    
    private function writeToOutput(results : Array<String>) : Void {
        var element = cast(Browser.document.getElementById("output"), TextAreaElement);
        element.value = results.join('\n');
    }
    
    public static function bind() : Void {
        // TODO: macrofy this!
        js.Browser.document.getElementById(FORM_NAME).onsubmit = function (event : Event) {
            event.preventDefault();
            var form = new DemoForm();
            form.submit();
        };
    }
}