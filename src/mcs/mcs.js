let defaults = {
    selector: '.mcs',
    container :    'mcs-container',
    init: false,
    onClick: function(index, value){}
};

/**
 * MCS Base Class.
 */
export class MCS {

    /**
     * Settings with defaults if not provided.
     * @param options
     */
    constructor(options){
        this.settings = Object.assign(defaults, options);
        this.containers = [];
        if (true === this.settings.init){
            this.init();
        }
    }

    /**
     * Initialise Multi Column Select.
     */
    init(){
        let self = this;
        let selects = document.querySelectorAll(self.settings.selector);
        [].forEach.call(selects, function(select){
            let items = select.querySelectorAll('option');
            self.build(self.settings.container,select,items);
        });
    }

    /**
     * Build Multi Column Select Component
     * @param className
     * @param select
     * @param items
     */
    build(className, select, items){

        let self = this;
        let links = [];
        let container = self.createContainer(className);
        let input = select.children[0];

        [].forEach.call(items, function(item, itemIndex){
            if (input.multiple === true){
                //todo handle multiple
            }else{
                links.push(self.createSingleItem(item, itemIndex));
                container.appendChild(links[links.length -1])
            }
        });

        input.onchange = function(){
            let selected = this.value;
            [].forEach.call(links, function(link){
                if (selected === link.getAttribute('data-value')){
                    link.className ='active';
                }else{
                    link.removeAttribute('class');
                }
            });
        };
        select.appendChild(container);
        self.containers.push(container);
    }

    /**
     * Create Single Selection Item with events.
     * @param item
     * @param index
     */
    createSingleItem(item, index){

        let self = this;
        let name =  item.innerHTML;
        let value = item.value;
        var link = self.createItem(value, index, name);
        link.addEventListener('click',function(e){
            e.preventDefault();
            self.toggleLink(link);
            self.updateSelect(
                this.parentNode
                    .parentNode.querySelectorAll('option'),
                link, index);
            self.settings.onClick(index, value);
        });
        return link;
    }

    /**
     * Update Select Control.
     * @param {array} options
     * @param link
     * @param index
     */
    updateSelect(options, link, index){
        [].forEach.call(options, function(item){
            item.removeAttribute('selected');
        });
        options[index].setAttribute('selected','selected');
    }

    /**
     * Create Container Fragment.
     * @param className
     * @returns {HTMLDivElement}
     */
    createContainer(className){
        var container = document.createElement('div');
        container.className = className;
        return container;
    }

    /**
     * Create Item Fragment.
     * @param value
     * @param index
     * @param name
     * @returns {HTMLAnchorElement}
     */
    createItem(value, index, name){
        let link = document.createElement('a');
        link.innerHTML = name;
        link.setAttribute('href', value);
        link.setAttribute('data-value', value);
        link.setAttribute('data-index', index);
        return link;
    }

    /**
     * Toggle links.
     * @param link
     */
    toggleLink(link){
        let links = link.parentNode.querySelectorAll('a');
        [].forEach.call(links, function(lnk){
            if (lnk === link){
                link.className ='active';
            }else{
                lnk.removeAttribute('class');
            }
        });
    }
}