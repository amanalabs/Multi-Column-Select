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
exports.mutiColumnSelect = undefined;

var _mutiColumnSelect = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (true) {
    //load styles via webpack sass loader
    __webpack_require__(3);
}

var mutiColumnSelect = exports.mutiColumnSelect = function (_Mcs) {
    _inherits(mutiColumnSelect, _Mcs);

    function mutiColumnSelect() {
        _classCallCheck(this, mutiColumnSelect);

        return _possibleConstructorReturn(this, (mutiColumnSelect.__proto__ || Object.getPrototypeOf(mutiColumnSelect)).apply(this, arguments));
    }

    return mutiColumnSelect;
}(_mutiColumnSelect.Mcs);

module.exports = mutiColumnSelect;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports._createContainer = _createContainer;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createContainer() {
    var container = document.createElement('div');
    container.className = 'mcs-container';
    return container;
}

function createSingleItem(item, index) {

    var name = item.innerHTML;
    var value = item.value;

    var link = document.createElement('a');
    link.innerHTML = name;
    link.setAttribute('href', value);
    link.setAttribute('data-value', value);
    link.setAttribute('data-index', index);
    link.addEventListener('click', function (e) {
        e.preventDefault();

        var links = link.parentNode.querySelectorAll('a');
        [].forEach.call(links, function (lnk) {
            if (lnk === link) {
                link.className = 'active';
            } else {
                lnk.removeAttribute('class');
            }
        });

        var options = link.parentNode.parentNode.querySelectorAll('option');
        [].forEach.call(options, function (item, itemIndex) {
            item.removeAttribute('selected');
        });
        options[index].setAttribute('selected', 'selected');
    });

    return link;
}

function _createContainer(select, items) {

    var links = [];
    var container = createContainer();
    [].forEach.call(items, function (item, itemIndex) {
        if (select.children[0].multiple === true) {} else {
            links.push(createSingleItem(item, itemIndex));
            container.appendChild(links[links.length - 1]);
        }
    });

    select.children[0].onchange = function () {
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
}

var Mcs = exports.Mcs = function () {
    function Mcs() {
        _classCallCheck(this, Mcs);
    }

    _createClass(Mcs, [{
        key: 'init',
        value: function init() {
            var selects = document.querySelectorAll('.mcs');
            [].forEach.call(selects, function (select) {
                var items = select.querySelectorAll('option');
                _createContainer(select, items);
            });
        }
    }]);

    return Mcs;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});