import * as mF from "./functions";

export class Mcs {
    init() {
        var selects = document.querySelectorAll('.mcs');
        [].forEach.call(selects, function(select){
            var items = select.querySelectorAll('option');
            mF._createContainer(select,items);
        });
    }
    bar() {
        return 'barbax';
    }
}