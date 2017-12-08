let defaults = {
    selector: '.mcs',
    container: 'mcs-container',
    init: false,
    hideSelect: false,
    onClick: function(index, value) {},
};

/**
 * I.E Object.Assign
 */
let objectAssignPoly = () => {

    if (typeof Object.assign !== 'function') {
        Object.assign = function(target) {
            'use strict';
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
            return target;
        };
    }

};

/**
 * MCS Base Class.
 */
export class MCS {
    /**
     * Settings with defaults if not provided.
     * @param {array} options
     */
    constructor(options) {
        objectAssignPoly();
        this.settings = Object.assign(defaults, options);
        this.containers = [];
        if (true === this.settings.init) {
            this.init();
        }
    }
    /**
     * Initialise Multi Column Select.
     */
    init() {
        let self = this;
        let selects = document.querySelectorAll(self.settings.selector);
        [].forEach.call(selects, function(select) {
            self.build(self.settings.container, select);
        });
    }

    /**
     * Build Multi Column Select Component
     * @param {string} className
     * @param {HTMLDivElement} container
     */
    build(className, container) {
        let self = this;
        let input = container.children[0];
        let links = [];
        let options = container.querySelectorAll('option');

        if (self.settings.hideSelect !== false){
            input.classList.add(self.settings.hideSelect);
        }

        if (input.hasAttribute('multiple')) {
            className += ' multiple';
        }

        let msc = self.createContainer(className);

        [].forEach.call(options, function(option, itemIndex) {
            links.push(self.createOptionReplacement(option, itemIndex, option.hasAttribute('selected')));
            msc.appendChild(links[links.length -1]);
        });

        input.onchange = function() {
            let selected = this.value;
            [].forEach.call(links, function(link) {
                if (selected === link.getAttribute('data-value')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };

        container.appendChild(msc);
        self.containers.push(msc);
    }


    /**
     * Create Option replacement link.
     * @param {HTMLOptionElement} option
     * @param {int} index
     * @param {bool} active
     * @return {HTMLAnchorElement}
     */
    createOptionReplacement(option, index, active = false) {
        let self = this;
        let name = option.innerHTML;
        let value = option.value;
        let link = self.createItem(value, index, name);

        if (active) {
            link.classList.add('active');
        }

        link.addEventListener('click', function(e) {
            e.preventDefault();
            self.toggleLink(link);
            self.updateSelect(
                link.parentNode.parentNode.querySelectorAll('option'), link
            );
            self.settings.onClick(index, value);
        });

        return link;
    }

    /**
     *
     * @param options
     * @param link
     */
    updateSelect(options, link) {
        let links = link.parentNode.querySelectorAll('a');

        [].forEach.call(options, function(option, index) {
            if (links[index].classList.contains('active')) {
                options[index].setAttribute('selected', 'selected');
            } else {
                options[index].removeAttribute('selected');
            }
        });
    }

    /**
     * Create Container Fragment.
     * @param className
     * @returns {HTMLDivElement}
     */
    createContainer(className) {
        let container = document.createElement('div');
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
    createItem(value, index, name) {
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
    toggleLink(link) {
        let self = this;
        if (link.parentNode.classList.contains('multiple')) {
            self.toggleLinkMulti(link);
        } else {
            self.toggleLinkSingle(link);
        }
    }

    /**
     * Toggle Links for Multi Select.
     * @param link
     */
    toggleLinkMulti(link) {
        let links = link.parentNode.querySelectorAll('a');
        [].forEach.call(links, function(lnk) {
            let classList = lnk.classList;
            if (lnk === link) {
                if (classList.contains('active')) {
                    classList.remove('active');
                } else {
                    classList.add('active');
                }
            }
        });
    }

    /**
     * Toggle Links for Single Select.
     * @param link
     */
    toggleLinkSingle(link) {
        let links = link.parentNode.querySelectorAll('a');
        [].forEach.call(links, function(lnk) {
            if (lnk === link) {
                lnk.classList.add('active');
            } else {
                lnk.classList.remove('active');
            }
        });
    }
}
