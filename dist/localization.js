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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/translate.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mocks/localized.ts":
/*!****************************!*\
  !*** ./mocks/localized.ts ***!
  \****************************/
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

/***/ "./src/entity/Termset.ts":
/*!*******************************!*\
  !*** ./src/entity/Termset.ts ***!
  \*******************************/
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

/***/ "./src/lib/transform.ts":
/*!******************************!*\
  !*** ./src/lib/transform.ts ***!
  \******************************/
/*! exports provided: configPromise, headerPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configPromise", function() { return configPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerPromise", function() { return headerPromise; });
/* harmony import */ var _entity_Termset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity/Termset */ "./src/entity/Termset.ts");
/* harmony import */ var _mocks_localized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mocks/localized */ "./mocks/localized.ts");


const configPromise = new Promise((resolve, reject) => {
    var localeConfig = [];
    _mocks_localized__WEBPACK_IMPORTED_MODULE_1__["config"].then(r => {
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
    _mocks_localized__WEBPACK_IMPORTED_MODULE_1__["headers"].then((result) => {
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

/***/ "./src/lib/translate.ts":
/*!******************************!*\
  !*** ./src/lib/translate.ts ***!
  \******************************/
/*! exports provided: translate, translateHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateHeaders", function() { return translateHeaders; });
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./src/lib/transform.ts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2NhbGl6YXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbG9jYWxpemF0aW9uLy4vbW9ja3MvbG9jYWxpemVkLnRzIiwid2VicGFjazovL2xvY2FsaXphdGlvbi8uL3NyYy9lbnRpdHkvVGVybXNldC50cyIsIndlYnBhY2s6Ly9sb2NhbGl6YXRpb24vLi9zcmMvbGliL3RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9sb2NhbGl6YXRpb24vLi9zcmMvbGliL3RyYW5zbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBTyxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNuRCxNQUFNLFFBQVEsR0FBRyw4RUFBOEU7SUFDL0YsTUFBTSxjQUFjLEdB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YSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQWEsRUFBRSxFQUFFO1lBQ3BDLElBQUksTUFBTSxHQUFTLE1BQU0sQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztZQUM5RixJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUNwRDtnQkFDQyxJQUFJLEtBQUssR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDL0UsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNkO1FBQ0YsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztJQUVGLE9BQU8sdUJBQXVCO0FBRS9CLENBQUMiLCJmaWxlIjoibG9jYWxpemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGliL3RyYW5zbGF0ZS50c1wiKTtcbiIsIlxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IFwiL3NpdGVzL3Rlc3QtbXlrL1N0eWxlJTIwTGlicmFyeS9LZXNrby9Bc3NldHMvTG9jYWxpemF0aW9uL1Rlcm1TZXRzTGFiZWxzLnR4dFwiXHJcbiAgICBjb25zdCB3ZWJBYnNvbHV0ZVVybCA9IFwiaHR0cHM6Ly9rZXNrb2dyb3VwLnNoYXJlcG9pbnQuY29tL3NpdGVzL3Rlc3QtbXlrXCJcclxuICAgIGZldGNoKCBgJHt3ZWJBYnNvbHV0ZVVybH0vX2FwaS93ZWIvR2V0RmlsZUJ5U2VydmVyUmVsYXRpdmVVcmwoJyR7ZmlsZW5hbWV9JykvJHZhbHVlYCApLnRoZW4oXHJcbiAgICBhcHAgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGFwcC5qc29uKCkpXHJcbiAgICB9KS5jYXRjaCggZSA9PiByZWplY3QoZSkpXHJcbn0gKVxyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSAgbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IFwiL3NpdGVzL3Rlc3QtbXlrL1N0eWxlJTIwTGlicmFyeS9LZXNrby9Bc3NldHMvTG9jYWxpemF0aW9uL1JlZmluZW1lbnRIZWFkZXJMYWJlbHMudHh0XCJcclxuICAgIGNvbnN0IHdlYkFic29sdXRlVXJsID0gXCJodHRwczovL2tlc2tvZ3JvdXAuc2hhcmVwb2ludC5jb20vc2l0ZXMvdGVzdC1teWtcIlxyXG4gICAgZmV0Y2goIGAke3dlYkFic29sdXRlVXJsfS9fYXBpL3dlYi9HZXRGaWxlQnlTZXJ2ZXJSZWxhdGl2ZVVybCgnJHtmaWxlbmFtZX0nKS8kdmFsdWVgICkudGhlbihcclxuICAgIGFwcCA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSAoYXBwLmpzb24oKSlcclxuICAgIH0pLmNhdGNoKCBlID0+IHJlamVjdChlKSlcclxuXHJcbn0pXHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIExvY2FsZSB7XHJcbiAgICBsb2NhbGU6IG51bWJlclxyXG4gICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgY29uc3RydWN0b3IobG9jYWxlOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVybSB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGxvY2FsZXM6IExvY2FsZVtdXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxvY2FsZXM6IExvY2FsZVtdKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlcm1zZXQge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICB0ZXJtczogVGVybVtdXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHRlcm1zOiBUZXJtW10pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICAgICAgdGhpcy50ZXJtcyA9IHRlcm1zXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5pbXBvcnQgeyBUZXJtLCBMb2NhbGUsIFRlcm1zZXQgfSBmcm9tICcuLi9lbnRpdHkvVGVybXNldCdcclxuaW1wb3J0IHsgY29uZmlnLCBoZWFkZXJzIH0gZnJvbSAnLi8uLi8uLi9tb2Nrcy9sb2NhbGl6ZWQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZ1Byb21pc2UgPSBuZXcgUHJvbWlzZSAoKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcbiAgICB2YXIgbG9jYWxlQ29uZmlnOiBUZXJtc2V0W10gPSBbXVxyXG4gICAgdHlwZSBjb25maWd1cmF0aW9uID17W2luZGV4OiBzdHJpbmddOiB7W2luZGV4OiBzdHJpbmddOiB7W2luZGV4OiBzdHJpbmddOiBzdHJpbmd9fX0gXHJcblxyXG4gICAgY29uZmlnLnRoZW4oIHIgPT4geyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZnVsbENvbmZpZyA9IHIgYXMgY29uZmlndXJhdGlvblxyXG4gICAgICAgIGNvbnN0IFRlcm1TZXROYW1lczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyggZnVsbENvbmZpZyApICAgICAgICBcclxuICAgICAgICBUZXJtU2V0TmFtZXMuZm9yRWFjaCggKHRzbjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlcm1zZXRzID0gZnVsbENvbmZpZ1t0c25dXHJcbiAgICAgICAgICAgIGNvbnN0IHRlcm1zZXRMaXN0OiBUZXJtW10gPSBbXVxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0ZXJtc2V0cykuZm9yRWFjaCggdHMgID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsb2NhbGVzID0gdGVybXNldHNbdHNdXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVMaXN0OiBMb2NhbGVbXSA9IFtdXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsb2NhbGVzKS5mb3JFYWNoKCBsID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVMaXN0LnB1c2gobmV3IExvY2FsZShwYXJzZUludChsKSwgbG9jYWxlc1tsXSkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0ZXJtc2V0TGlzdC5wdXNoKCBuZXcgVGVybSh0cywgbG9jYWxlTGlzdCkgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBsb2NhbGVDb25maWcucHVzaCggbmV3IFRlcm1zZXQodHNuLCB0ZXJtc2V0TGlzdCkgKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlc29sdmUobG9jYWxlQ29uZmlnKVxyXG5cclxuICAgIH0gKS5jYXRjaCggZSA9PiAgcmVqZWN0KGUpKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBoZWFkZXJQcm9taXNlICA9IG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuICAgIGxldCBoZWFkZXJDb25maWcgOiBUZXJtW10gPSBbXVxyXG4gICAgdHlwZSBoZWFkZXIgPSB7W2luZGV4OiBzdHJpbmddOiB7W2luZGV4OiBzdHJpbmddOiBzdHJpbmd9fSBcclxuXHJcbiAgICBoZWFkZXJzLnRoZW4oIChyZXN1bHQ6IGhlYWRlcikgPT4ge1xyXG4gICAgICAgIGxldCBzZXQgPSByZXN1bHRbIE9iamVjdC5rZXlzKHJlc3VsdClbMF0gXSBcclxuICAgICAgICBsZXQgaGVhZE5hbWVzID0gT2JqZWN0LmtleXMoIHNldCApIFxyXG4gICAgICAgXHJcbiAgICAgICAgaGVhZE5hbWVzLmZvckVhY2goIG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaGVhZExvY2FsZVZhbHVlcyA9IHNldFtuYW1lXVxyXG5cclxuICAgICAgICAgICAgbGV0IGxvY2FsZUlEcyA9IE9iamVjdC5rZXlzKGhlYWRMb2NhbGVWYWx1ZXMpXHJcbiAgICAgICAgICAgIGxldCBsb2NhbGVzOiBMb2NhbGVbXSA9IFtdXHJcbiAgICAgICAgICAgIGxvY2FsZUlEcy5mb3JFYWNoKCAobG9jYWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbGVzLnB1c2goIG5ldyBMb2NhbGUocGFyc2VJbnQobG9jYWxlKSwgaGVhZExvY2FsZVZhbHVlc1tsb2NhbGUgYXMgYW55XSkpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBoZWFkZXJDb25maWcucHVzaCggbmV3IFRlcm0obmFtZSwgbG9jYWxlcykpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVzb2x2ZShoZWFkZXJDb25maWcpXHJcbiAgICB9KS5jYXRjaCggZSA9PiByZWplY3QoZSkpXHJcblxyXG4gICAgXHJcbn0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiXHJcbmltcG9ydCB7IGNvbmZpZ1Byb21pc2UsIGhlYWRlclByb21pc2UgfSBmcm9tICcuL3RyYW5zZm9ybSc7XHJcbmltcG9ydCB7IFRlcm1zZXQsIFRlcm0sIExvY2FsZSB9IGZyb20gJy4uL2VudGl0eS9UZXJtc2V0JztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUodGV4dDogc3RyaW5nLCBsaWQ6IG51bWJlcilcclxue1xyXG5cclxuXHRjb25zdCB0cmFuc2xhdGVQcm9taXNlID0gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdGNvbmZpZ1Byb21pc2UudGhlbihcclxuXHRcdFx0KGxvY2FsZUNvbmZpZzogVGVybXNldFtdICk9PiB7XHJcblx0XHRcdFx0bGV0IHR1cGxlOiBMb2NhbGUgPSBudWxsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bG9jYWxlQ29uZmlnLnNvbWUoKHRlcm1zZXQ6IFRlcm1zZXQpID0+IHtcclxuXHRcdFx0XHRcdGxldCB0ZXJtOiBUZXJtW10gPSB0ZXJtc2V0LnRlcm1zLmZpbHRlcigodDogVGVybSkgPT4gdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCkpXHJcblx0XHRcdFx0XHRpZih0ZXJtLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0XHRcdFx0dHVwbGUgPSB0ZXJtWzBdLmxvY2FsZXMuZmlsdGVyKCBsID0+IGwubG9jYWxlID09PSBsaWQgKVswXVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRyZXNvbHZlKHR1cGxlKVxyXG5cdFx0XHR9XHJcblx0XHQpLmNhdGNoKCBlID0+IHJlamVjdChlKSlcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gdHJhbnNsYXRlUHJvbWlzZVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZUhlYWRlcnMgPSAoIG5hbWU6IHN0cmluZyAsIGxvY2FsZUlEOiBudW1iZXIpID0+IHtcclxuXHJcblx0Y29uc3QgdHJhbnNsYXRlSGVhZGVyc1Byb21pc2UgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0aGVhZGVyUHJvbWlzZS50aGVuKChyZXN1bHQ6VGVybVtdKSA9PiB7XHJcblx0XHRcdGxldCBoZWFkZXI6IFRlcm0gPSByZXN1bHQuZmlsdGVyKCByID0+IHIubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpIClbMF1cclxuXHRcdFx0aWYoIGhlYWRlciAhPT0gbnVsbCAmJiB0eXBlb2YgaGVhZGVyICE9PSBcInVuZGVmaW5lZFwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgPSBoZWFkZXIubG9jYWxlcy5maWx0ZXIoIGwgPT4gbC5sb2NhbGUgPT09IGxvY2FsZUlEKVswXS52YWx1ZVxyXG5cdFx0XHRcdHJlc29sdmUodmFsdWUpXHJcblx0XHRcdH1cclxuXHRcdH0pLmNhdGNoKCBlID0+IHJlamVjdChlKSlcclxuXHR9KVxyXG5cclxuXHRyZXR1cm4gdHJhbnNsYXRlSGVhZGVyc1Byb21pc2VcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==