require ('../sass/mcs.scss');
import {_createContainer}  from "./mcs/muti-column-select";

class Mcs {
    init() {
        var selects = document.querySelectorAll('.mcs');
        [].forEach.call(selects, function(select){
            var items = select.querySelectorAll('option');
            _createContainer(select,items);
        });
    }
}

module.exports = Mcs;