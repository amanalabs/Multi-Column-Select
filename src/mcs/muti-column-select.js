

function createContainer(){
    return document.createElement('div');
}

function createItem(item, index){

    let name = item.innerHTML;
    let value =item.value;

    var link = document.createElement('a');
    link.innerHTML = name;
    link.setAttribute('href', value);
    link.setAttribute('data-index', index);
    link.addEventListener('click',function(e){
        e.preventDefault();
        var options = link.parentNode.parentNode.querySelectorAll('option');
        [].forEach.call(options, function(item, itemIndex){
            item.removeAttribute('selected');
        });
        options[index].setAttribute('selected','selected');
    });

    return link;
}

class Mcs {
    init() {
        //find all selects.
        var selects = document.querySelectorAll('.mcs');

        [].forEach.call(selects, function(obj,i){
            var container = createContainer();
            var items = obj.querySelectorAll('option');
            [].forEach.call(items, function(item, itemIndex){
                container.appendChild(createItem(item, itemIndex))
            });
            obj.appendChild(container);
        });
    }
}
export {Mcs as default};
