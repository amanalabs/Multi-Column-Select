

function createContainer(){
    var container = document.createElement('div');
    container.className = 'mcs-container';
    return container;
}

function createSingleItem(item, index){

    let name = item.innerHTML;
    let value =item.value;

    var link = document.createElement('a');
    link.innerHTML = name;
    link.setAttribute('href', value);
    link.setAttribute('data-value', value);
    link.setAttribute('data-index', index);
    link.addEventListener('click',function(e){
        e.preventDefault();

        let links = link.parentNode.querySelectorAll('a');
        [].forEach.call(links, function(lnk){
            if (lnk === link){
                link.className ='active';
            }else{
                lnk.removeAttribute('class');
            }
        });

        var options = link.parentNode.parentNode.querySelectorAll('option');
        [].forEach.call(options, function(item, itemIndex){
            item.removeAttribute('selected');

        });
        options[index].setAttribute('selected','selected');
    });

    return link;
}

export function _createContainer(select, items){

    let links = [];
    var container = createContainer();
    [].forEach.call(items, function(item, itemIndex){
        if (select.children[0].multiple === true){
        }else{
            links.push(createSingleItem(item, itemIndex));
            container.appendChild(links[links.length -1])
        }
    });

    select.children[0].onchange = function(){
        var selected = this.value;
        [].forEach.call(links, function(link){
            if (selected === link.getAttribute('data-value')){
                link.className ='active';
            }else{
                link.removeAttribute('class');
            }
        });
    };
    select.appendChild(container);
}