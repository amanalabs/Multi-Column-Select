
//find all selects.
var selects = document.querySelectorAll('select.multi-select');

//loop through selects and bind events.
[].forEach.call(selects, function(obj,i){
    console.log(obj);

    //get each item form the obj
    var items = obj.querySelectorAll('option');
    [].forEach.call(items, function(item){
        console.log(item);
    });

    console.log(items);
    console.log(i);
});



//return wrapper div.
function createDropdown(){
    var wrapper = document.createElement('div');
    var items = document.createElement('a');
    wrapper.className = 'mcs-wrapper';
}

//return item
function createDropdownItem(){}


//outline
//for each select.classname:
//create dropdown wrapper and items from select.
//populate div with items and add click handler to update select box on click.