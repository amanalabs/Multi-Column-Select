(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("multiColumnSelect", [], factory);
	else if(typeof exports === 'object')
		exports["multiColumnSelect"] = factory();
	else
		root["multiColumnSelect"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _mutiColumnSelect = __webpack_require__(2);

if (true) {
    __webpack_require__(4);
}

exports.default = _mutiColumnSelect.multiColumnSelect;


if (true) {
    module.exports = _mutiColumnSelect.multiColumnSelect;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiColumnSelect = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mcs = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Multi Column Select
 */
var multiColumnSelect = exports.multiColumnSelect = function (_MCS) {
    _inherits(multiColumnSelect, _MCS);

    /**
     * Settings with defaults if not provided.
     * @param options
     */
    function multiColumnSelect(options) {
        _classCallCheck(this, multiColumnSelect);

        return _possibleConstructorReturn(this, (multiColumnSelect.__proto__ || Object.getPrototypeOf(multiColumnSelect)).call(this, options));
    }

    /**
     * Destroy Multi-Column-Select.
     */


    _createClass(multiColumnSelect, [{
        key: "destroy",
        value: function destroy() {
            [].forEach.call(this.containers, function (container) {
                container.remove();
            });
        }
    }]);

    return multiColumnSelect;
}(_mcs.MCS);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = {
    selector: '.mcs',
    container: 'mcs-container',
    init: false,
    onClick: function onClick(index, value) {}
};

/**
 * MCS Base Class.
 */

var MCS = exports.MCS = function () {

    /**
     * Settings with defaults if not provided.
     * @param options
     */
    function MCS(options) {
        _classCallCheck(this, MCS);

        this.settings = Object.assign(defaults, options);
        this.containers = [];
        if (true === this.settings.init) {
            this.init();
        }
    }

    /**
     * Initialise Multi Column Select.
     */


    _createClass(MCS, [{
        key: 'init',
        value: function init() {
            var self = this;
            var selects = document.querySelectorAll(self.settings.selector);
            [].forEach.call(selects, function (select) {
                var items = select.querySelectorAll('option');
                self.build(self.settings.container, select, items);
            });
        }

        /**
         * Build Multi Column Select Component
         * @param className
         * @param select
         * @param items
         */

    }, {
        key: 'build',
        value: function build(className, select, items) {

            var self = this;
            var links = [];
            var container = self.createContainer(className);
            var input = select.children[0];

            [].forEach.call(items, function (item, itemIndex) {
                if (input.multiple === true) {
                    //todo handle multiple
                } else {
                    links.push(self.createSingleItem(item, itemIndex));
                    container.appendChild(links[links.length - 1]);
                }
            });

            input.onchange = function () {
                var selected = this.value;
                [].forEach.call(links, function (link) {
                    if (selected === link.getAttribute('data-value')) {
                        link.className = 'active';
                    } else {
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

    }, {
        key: 'createSingleItem',
        value: function createSingleItem(item, index) {

            var self = this;
            var name = item.innerHTML;
            var value = item.value;
            var link = self.createItem(value, index, name);
            link.addEventListener('click', function (e) {
                e.preventDefault();
                self.toggleLink(link);
                self.updateSelect(this.parentNode.parentNode.querySelectorAll('option'), link, index);
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

    }, {
        key: 'updateSelect',
        value: function updateSelect(options, link, index) {
            [].forEach.call(options, function (item) {
                item.removeAttribute('selected');
            });
            options[index].setAttribute('selected', 'selected');
        }

        /**
         * Create Container Fragment.
         * @param className
         * @returns {HTMLDivElement}
         */

    }, {
        key: 'createContainer',
        value: function createContainer(className) {
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

    }, {
        key: 'createItem',
        value: function createItem(value, index, name) {
            var link = document.createElement('a');
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

    }, {
        key: 'toggleLink',
        value: function toggleLink(link) {
            var links = link.parentNode.querySelectorAll('a');
            [].forEach.call(links, function (lnk) {
                if (lnk === link) {
                    link.className = 'active';
                } else {
                    lnk.removeAttribute('class');
                }
            });
        }
    }]);

    return MCS;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});