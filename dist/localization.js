var localization =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/localization/lib/translate.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/localization/entity/Termset.ts":
/*!********************************************!*\
  !*** ./src/localization/entity/Termset.ts ***!
  \********************************************/
/*! exports provided: Locale, Term, Termset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Term", function() { return Term; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Termset", function() { return Termset; });
class Locale {
    constructor(locale, value) {
        this.locale = locale;
        this.value = value;
    }
}
class Term {
    constructor(name, locales) {
        this.name = name;
        this.locales = locales;
    }
}
class Termset {
    constructor(name, terms) {
        this.name = name;
        this.terms = terms;
    }
}


/***/ }),

/***/ "./src/localization/lib/localized.ts":
/*!*******************************************!*\
  !*** ./src/localization/lib/localized.ts ***!
  \*******************************************/
/*! exports provided: config, headers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headers", function() { return headers; });
const config = new Promise((resolve, reject) => {
    const filename = "/sites/test-myk/Style%20Library/Kesko/Assets/Localization/TermSetsLabels.txt";
    const webAbsoluteUrl = "https://keskogroup.sharepoint.com/sites/test-myk";
    fetch(`${webAbsoluteUrl}/_api/web/GetFileByServerRelativeUrl('${filename}')/$value`).then(app => {
        resolve(app.json());
    }).catch(e => reject(e));
});
const headers = new Promise((resolve, reject) => {
    const filename = "/sites/test-myk/Style%20Library/Kesko/Assets/Localization/RefinementHeaderLabels.txt";
    const webAbsoluteUrl = "https://keskogroup.sharepoint.com/sites/test-myk";
    fetch(`${webAbsoluteUrl}/_api/web/GetFileByServerRelativeUrl('${filename}')/$value`).then(app => {
        resolve(app.json());
    }).catch(e => reject(e));
});


/***/ }),

/***/ "./src/localization/lib/transform.ts":
/*!*******************************************!*\
  !*** ./src/localization/lib/transform.ts ***!
  \*******************************************/
/*! exports provided: configPromise, headerPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configPromise", function() { return configPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPromise", function() { return headerPromise; });
/* harmony import */ var _entity_Termset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/Termset */ "./src/localization/entity/Termset.ts");
/* harmony import */ var _localized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localized */ "./src/localization/lib/localized.ts");


const configPromise = new Promise((resolve, reject) => {
    var localeConfig = [];
    _localized__WEBPACK_IMPORTED_MODULE_1__["config"].then(r => {
        const fullConfig = r;
        const TermSetNames = Object.keys(fullConfig);
        TermSetNames.forEach((tsn) => {
            const termsets = fullConfig[tsn];
            const termsetList = [];
            Object.keys(termsets).forEach(ts => {
                let locales = termsets[ts];
                const localeList = [];
                Object.keys(locales).forEach(l => localeList.push(new _entity_Termset__WEBPACK_IMPORTED_MODULE_0__["Locale"](parseInt(l), locales[l])));
                termsetList.push(new _entity_Termset__WEBPACK_IMPORTED_MODULE_0__["Term"](ts, localeList));
            });
            localeConfig.push(new _entity_Termset__WEBPACK_IMPORTED_MODULE_0__["Termset"](tsn, termsetList));
        });
        resolve(localeConfig);
    }).catch(e => reject(e));
});
const headerPromise = new Promise((resolve, reject) => {
    let headerConfig = [];
    _localized__WEBPACK_IMPORTED_MODULE_1__["headers"].then((result) => {
        let set = result[Object.keys(result)[0]];
        let headNames = Object.keys(set);
        headNames.forEach(name => {
            let headLocaleValues = set[name];
            let localeIDs = Object.keys(headLocaleValues);
            let locales = [];
            localeIDs.forEach((locale) => {
                locales.push(new _entity_Termset__WEBPACK_IMPORTED_MODULE_0__["Locale"](parseInt(locale), headLocaleValues[locale]));
            });
            headerConfig.push(new _entity_Termset__WEBPACK_IMPORTED_MODULE_0__["Term"](name, locales));
        });
        resolve(headerConfig);
    }).catch(e => reject(e));
});


/***/ }),

/***/ "./src/localization/lib/translate.ts":
/*!*******************************************!*\
  !*** ./src/localization/lib/translate.ts ***!
  \*******************************************/
/*! exports provided: translate, translateHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateHeaders", function() { return translateHeaders; });
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./src/localization/lib/transform.ts");

function translate(text, lid) {
    const translatePromise = new Promise((resolve, reject) => {
        _transform__WEBPACK_IMPORTED_MODULE_0__["configPromise"].then((localeConfig) => {
            let tuple = null;
            localeConfig.some((termset) => {
                let term = termset.terms.filter((t) => t.name.toLowerCase() === text.trim().toLowerCase());
                if (term.length > 0) {
                    tuple = term[0].locales.filter(l => l.locale === lid)[0];
                    return true;
                }
            });
            resolve(tuple);
        }).catch(e => reject(e));
    });
    return translatePromise;
}
const translateHeaders = (name, localeID) => {
    const translateHeadersPromise = new Promise((resolve, reject) => {
        _transform__WEBPACK_IMPORTED_MODULE_0__["headerPromise"].then((result) => {
            let header = result.filter(r => r.name.toLowerCase() === name.toLowerCase().trim())[0];
            if (header !== null && typeof header !== "undefined") {
                let value = header.locales.filter(l => l.locale === localeID)[0].value;
                resolve(value);
            }
        }).catch(e => reject(e));
    });
    return translateHeadersPromise;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2NhbGl6YXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9jYWxpemF0aW9uLy4vc3JjL2xvY2FsaXphdGlvbi9lbnRpdHkvVGVybXNldC50cyIsIndlYnBhY2s6Ly9sb2NhbGl6YXRpb24vLi9zcmMvbG9jYWxpemF0aW9uL2xpYi9sb2NhbGl6ZWQudHMiLCJ3ZWJwYWNrOi8vbG9jYWxpemF0aW9uLy4vc3JjL2xvY2FsaXphdGlvbi9saWIvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL2xvY2FsaXphdGlvbi8uL3NyYy9sb2NhbGl6YXRpb24vbGliL3RyYW5zbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU0sTUFBTTtJQUdmLFlBQVksTUFBYyxFQUFFLEtBQWE7UUFDckMsSUFBSSxD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QUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNoRSx3REFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWEsRUFBRSxFQUFFO1lBQ3BDLElBQUksTUFBTSxHQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUM5RixJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUNwRDtnQkFDQyxJQUFJLEtBQUssR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDL0UsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLE9BQU8sdUJBQXVCO0FBRS9CLENBQUMiLCJmaWxlIjoibG9jYWxpemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbG9jYWxpemF0aW9uL2xpYi90cmFuc2xhdGUudHNcIik7XG4iLCJleHBvcnQgY2xhc3MgTG9jYWxlIHtcclxuICAgIGxvY2FsZTogbnVtYmVyXHJcbiAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGU6IG51bWJlciwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXJtIHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgbG9jYWxlczogTG9jYWxlW11cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgbG9jYWxlczogTG9jYWxlW10pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVybXNldCB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIHRlcm1zOiBUZXJtW11cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdGVybXM6IFRlcm1bXSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLnRlcm1zID0gdGVybXNcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gXCIvc2l0ZXMvdGVzdC1teWsvU3R5bGUlMjBMaWJyYXJ5L0tlc2tvL0Fzc2V0cy9Mb2NhbGl6YXRpb24vVGVybVNldHNMYWJlbHMudHh0XCJcclxuICAgIGNvbnN0IHdlYkFic29sdXRlVXJsID0gXCJodHRwczovL2tlc2tvZ3JvdXAuc2hhcmVwb2ludC5jb20vc2l0ZXMvdGVzdC1teWtcIlxyXG4gICAgZmV0Y2goIGAke3dlYkFic29sdXRlVXJsfS9fYXBpL3dlYi9HZXRGaWxlQnlTZXJ2ZXJSZWxhdGl2ZVVybCgnJHtmaWxlbmFtZX0nKS8kdmFsdWVgICkudGhlbihcclxuICAgIGFwcCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoYXBwLmpzb24oKSlcclxuICAgIH0pLmNhdGNoKCBlID0+IHJlamVjdChlKSlcclxufSApXHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVycyA9ICBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICBcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gXCIvc2l0ZXMvdGVzdC1teWsvU3R5bGUlMjBMaWJyYXJ5L0tlc2tvL0Fzc2V0cy9Mb2NhbGl6YXRpb24vUmVmaW5lbWVudEhlYWRlckxhYmVscy50eHRcIlxyXG4gICAgY29uc3Qgd2ViQWJzb2x1dGVVcmwgPSBcImh0dHBzOi8va2Vza29ncm91cC5zaGFyZXBvaW50LmNvbS9zaXRlcy90ZXN0LW15a1wiXHJcbiAgICBmZXRjaCggYCR7d2ViQWJzb2x1dGVVcmx9L19hcGkvd2ViL0dldEZpbGVCeVNlcnZlclJlbGF0aXZlVXJsKCcke2ZpbGVuYW1lfScpLyR2YWx1ZWAgKS50aGVuKFxyXG4gICAgYXBwID0+IHtcclxuICAgICAgICByZXNvbHZlIChhcHAuanNvbigpKVxyXG4gICAgfSkuY2F0Y2goIGUgPT4gcmVqZWN0KGUpKVxyXG5cclxufSlcclxuXHJcblxyXG4iLCJcclxuaW1wb3J0IHsgVGVybSwgTG9jYWxlLCBUZXJtc2V0IH0gZnJvbSAnLi4vZW50aXR5L1Rlcm1zZXQnXHJcbmltcG9ydCB7IGNvbmZpZywgaGVhZGVycyB9IGZyb20gJy4vbG9jYWxpemVkJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWdQcm9taXNlID0gbmV3IFByb21pc2UgKCggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG4gICAgdmFyIGxvY2FsZUNvbmZpZzogVGVybXNldFtdID0gW11cclxuICAgIHR5cGUgY29uZmlndXJhdGlvbiA9e1tpbmRleDogc3RyaW5nXToge1tpbmRleDogc3RyaW5nXToge1tpbmRleDogc3RyaW5nXTogc3RyaW5nfX19IFxyXG5cclxuICAgIGNvbmZpZy50aGVuKCByID0+IHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZ1bGxDb25maWcgPSByIGFzIGNvbmZpZ3VyYXRpb25cclxuICAgICAgICBjb25zdCBUZXJtU2V0TmFtZXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoIGZ1bGxDb25maWcgKSAgICAgICAgXHJcbiAgICAgICAgVGVybVNldE5hbWVzLmZvckVhY2goICh0c246IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXJtc2V0cyA9IGZ1bGxDb25maWdbdHNuXVxyXG4gICAgICAgICAgICBjb25zdCB0ZXJtc2V0TGlzdDogVGVybVtdID0gW11cclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGVybXNldHMpLmZvckVhY2goIHRzICA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbG9jYWxlcyA9IHRlcm1zZXRzW3RzXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlTGlzdDogTG9jYWxlW10gPSBbXVxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobG9jYWxlcykuZm9yRWFjaCggbCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlTGlzdC5wdXNoKG5ldyBMb2NhbGUocGFyc2VJbnQobCksIGxvY2FsZXNbbF0pKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgdGVybXNldExpc3QucHVzaCggbmV3IFRlcm0odHMsIGxvY2FsZUxpc3QpIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbG9jYWxlQ29uZmlnLnB1c2goIG5ldyBUZXJtc2V0KHRzbiwgdGVybXNldExpc3QpIClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXNvbHZlKGxvY2FsZUNvbmZpZylcclxuXHJcbiAgICB9ICkuY2F0Y2goIGUgPT4gIHJlamVjdChlKSlcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaGVhZGVyUHJvbWlzZSAgPSBuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcbiAgICBsZXQgaGVhZGVyQ29uZmlnIDogVGVybVtdID0gW11cclxuICAgIHR5cGUgaGVhZGVyID0ge1tpbmRleDogc3RyaW5nXToge1tpbmRleDogc3RyaW5nXTogc3RyaW5nfX0gXHJcblxyXG4gICAgaGVhZGVycy50aGVuKCAocmVzdWx0OiBoZWFkZXIpID0+IHtcclxuICAgICAgICBsZXQgc2V0ID0gcmVzdWx0WyBPYmplY3Qua2V5cyhyZXN1bHQpWzBdIF0gXHJcbiAgICAgICAgbGV0IGhlYWROYW1lcyA9IE9iamVjdC5rZXlzKCBzZXQgKSBcclxuICAgICAgIFxyXG4gICAgICAgIGhlYWROYW1lcy5mb3JFYWNoKCBuYW1lID0+IHtcclxuICAgICAgICAgICAgbGV0IGhlYWRMb2NhbGVWYWx1ZXMgPSBzZXRbbmFtZV1cclxuXHJcbiAgICAgICAgICAgIGxldCBsb2NhbGVJRHMgPSBPYmplY3Qua2V5cyhoZWFkTG9jYWxlVmFsdWVzKVxyXG4gICAgICAgICAgICBsZXQgbG9jYWxlczogTG9jYWxlW10gPSBbXVxyXG4gICAgICAgICAgICBsb2NhbGVJRHMuZm9yRWFjaCggKGxvY2FsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlcy5wdXNoKCBuZXcgTG9jYWxlKHBhcnNlSW50KGxvY2FsZSksIGhlYWRMb2NhbGVWYWx1ZXNbbG9jYWxlIGFzIGFueV0pKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaGVhZGVyQ29uZmlnLnB1c2goIG5ldyBUZXJtKG5hbWUsIGxvY2FsZXMpKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlc29sdmUoaGVhZGVyQ29uZmlnKVxyXG4gICAgfSkuY2F0Y2goIGUgPT4gcmVqZWN0KGUpKVxyXG5cclxuICAgIFxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBjb25maWdQcm9taXNlLCBoZWFkZXJQcm9taXNlIH0gZnJvbSAnLi90cmFuc2Zvcm0nO1xyXG5pbXBvcnQgeyBUZXJtc2V0LCBUZXJtLCBMb2NhbGUgfSBmcm9tICcuLi9lbnRpdHkvVGVybXNldCc7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKHRleHQ6IHN0cmluZywgbGlkOiBudW1iZXIpXHJcbntcclxuXHJcblx0Y29uc3QgdHJhbnNsYXRlUHJvbWlzZSA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRjb25maWdQcm9taXNlLnRoZW4oXHJcblx0XHRcdChsb2NhbGVDb25maWc6IFRlcm1zZXRbXSApPT4ge1xyXG5cdFx0XHRcdGxldCB0dXBsZTogTG9jYWxlID0gbnVsbFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxvY2FsZUNvbmZpZy5zb21lKCh0ZXJtc2V0OiBUZXJtc2V0KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgdGVybTogVGVybVtdID0gdGVybXNldC50ZXJtcy5maWx0ZXIoKHQ6IFRlcm0pID0+IHQubmFtZS50b0xvd2VyQ2FzZSgpID09PSB0ZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpKVxyXG5cdFx0XHRcdFx0aWYodGVybS5sZW5ndGggPiAwICl7XHJcblx0XHRcdFx0XHRcdHR1cGxlID0gdGVybVswXS5sb2NhbGVzLmZpbHRlciggbCA9PiBsLmxvY2FsZSA9PT0gbGlkIClbMF1cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmVzb2x2ZSh0dXBsZSlcclxuXHRcdFx0fVxyXG5cdFx0KS5jYXRjaCggZSA9PiByZWplY3QoZSkpXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIHRyYW5zbGF0ZVByb21pc2VcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB0cmFuc2xhdGVIZWFkZXJzID0gKCBuYW1lOiBzdHJpbmcgLCBsb2NhbGVJRDogbnVtYmVyKSA9PiB7XHJcblxyXG5cdGNvbnN0IHRyYW5zbGF0ZUhlYWRlcnNQcm9taXNlID0gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGhlYWRlclByb21pc2UudGhlbigocmVzdWx0OlRlcm1bXSkgPT4ge1xyXG5cdFx0XHRsZXQgaGVhZGVyOiBUZXJtID0gcmVzdWx0LmZpbHRlciggciA9PiByLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSApWzBdXHJcblx0XHRcdGlmKCBoZWFkZXIgIT09IG51bGwgJiYgdHlwZW9mIGhlYWRlciAhPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCB2YWx1ZTogc3RyaW5nID0gaGVhZGVyLmxvY2FsZXMuZmlsdGVyKCBsID0+IGwubG9jYWxlID09PSBsb2NhbGVJRClbMF0udmFsdWVcclxuXHRcdFx0XHRyZXNvbHZlKHZhbHVlKVxyXG5cdFx0XHR9XHJcblx0XHR9KS5jYXRjaCggZSA9PiByZWplY3QoZSkpXHJcblx0fSlcclxuXHJcblx0cmV0dXJuIHRyYW5zbGF0ZUhlYWRlcnNQcm9taXNlXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=