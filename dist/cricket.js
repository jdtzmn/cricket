(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cricket.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive":
/*!******************!*\
  !*** ./src sync ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive";

/***/ }),

/***/ "./src/cricket.ts":
/*!************************!*\
  !*** ./src/cricket.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(__webpack_require__("./src sync recursive"), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./utils */ "./src/utils.ts")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const utils_1 = require("./utils");
    utils_1.calculateMultiplier(100, 100, 100);
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(__webpack_require__("./src sync recursive"), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.calculateMultiplier = (sampleRate, handshakeEnd, baseFrequency) => {
        const defaultMultiplier = sampleRate / Math.pow(2, Math.ceil(Math.log(sampleRate) / Math.log(2)));
        const factor = Math.floor((handshakeEnd - baseFrequency) / 256 / defaultMultiplier);
        return defaultMultiplier * Math.pow(2, Math.floor(Math.log(factor) / Math.log(2)));
    };
    exports.roundFrequency = (frequency, multiplier) => (Math.round(frequency / multiplier) * multiplier - multiplier / 2);
    exports.getFreqIndex = (frequency, multiplier) => (Math.floor(frequency / multiplier));
    exports.relativeFrequencyIsDominant = (index, array) => {
        const current = array[index];
        const next = array[index + 1];
        const prev = array[index - 1];
        if (prev < current && next < current) {
            return current;
        }
        return false;
    };
    exports.byteToBit = (byte) => {
        const buckets = new Array(8).fill(0);
        return buckets.map((_e, i) => {
            if (byte - Math.pow(2, 7 - i) >= 0) {
                return Math.min((byte -= Math.pow(2, 7 - i)) + 1, 1);
            }
            return 0;
        });
    };
    exports.bitToByte = (bit) => {
        return bit.reduce((sum, bitValue, index) => {
            return sum + bitValue * Math.pow(2, 7 - index);
        }, 0);
    };
    exports.getGroupsOf = (arr, num) => {
        const size = Math.ceil(arr.length / num);
        return new Array(size).fill(undefined).reduce((arr, _element, i) => {
            const start = i * num;
            const end = (i + 1) * num;
            const slice = arr.slice(start, end);
            arr.concat([slice]);
        }, []);
    };
    exports.combine = (arr) => {
        return arr.reduce((sum, e) => sum.concat(e), []);
    };
    const indexIsEqual = (indexA, indexB) => indexA[0] === indexB[0] && indexA[1] === indexB[1];
    exports.reduce = (data) => {
        if (!indexIsEqual(exports.byteToBit(data[0]).slice(0, 2), [0, 0])) {
            return exports.reduce(data.slice(1));
        }
        let lastIndex = [];
        return data.filter(e => {
            let indexData = exports.byteToBit(e).slice(0, 2);
            let duplicate = indexIsEqual(indexData, lastIndex);
            lastIndex = indexData;
            return !duplicate;
        });
    };
});


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMgc3luYyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JpY2tldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBLGdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUkEsbUNBQTZDO0lBRTdDLDJCQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNTckIsMkJBQW1CLEdBQUcsQ0FBQyxVQUFrQixFQUFFLFlBQW9CLEVBQUUsYUFBcUIsRUFBRSxFQUFFO1FBRXJHLE1BQU0saUJBQWlCLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsaUJBQWlCLENBQUM7UUFDbkYsT0FBTyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFRWSxzQkFBYyxHQUFHLENBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FDakU7SUFRWSxvQkFBWSxHQUFHLENBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUNyRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FDbkM7SUFRWSxtQ0FBMkIsR0FBRyxDQUFDLEtBQWEsRUFBRSxLQUFlLEVBQUUsRUFBRTtRQUM1RSxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sT0FBTztTQUNmO1FBQ0QsT0FBTyxLQUFLO0lBQ2QsQ0FBQztJQVdZLGlCQUFTLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNyRDtZQUNELE9BQU8sQ0FBQztRQUNWLENBQUMsQ0FBQztJQUNKLENBQUM7SUFPWSxpQkFBUyxHQUFHLENBQUMsR0FBYSxFQUFFLEVBQUU7UUFDekMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBVyxFQUFFLFFBQWdCLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDakUsT0FBTyxHQUFHLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDaEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNQLENBQUM7SUFXWSxtQkFBVyxHQUFHLENBQUMsR0FBVSxFQUFFLEdBQVcsRUFBRSxFQUFFO1FBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDeEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRSxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRztZQUNyQixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQztZQUNuQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNSLENBQUM7SUFNWSxlQUFPLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRTtRQUNwQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBTUQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFhLEVBQUUsTUFBYSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBTTVGLGNBQU0sR0FBRyxDQUFDLElBQWMsRUFBWSxFQUFFO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekQsT0FBTyxjQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksU0FBUyxHQUFhLEVBQUU7UUFFNUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JCLElBQUksU0FBUyxHQUFHLGlCQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEMsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUM7WUFDbEQsU0FBUyxHQUFHLFNBQVM7WUFDckIsT0FBTyxDQUFDLFNBQVM7UUFDbkIsQ0FBQyxDQUFDO0lBQ0osQ0FBQyIsImZpbGUiOiJjcmlja2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY3JpY2tldC50c1wiKTtcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZVwiOyIsImltcG9ydCB7IGNhbGN1bGF0ZU11bHRpcGxpZXIgfSBmcm9tICcuL3V0aWxzJ1xuXG5jYWxjdWxhdGVNdWx0aXBsaWVyKDEwMCwgMTAwLCAxMDApXG4iLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT09PSBGUkVRVUVOQ0lFUyA9PT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBtdWx0aXBsaWVyIGJhc2VkIG9uIHRoZSBkZXZpY2UncyBzYW1wbGUgcmF0ZVxuICogQHBhcmFtIHNhbXBsZVJhdGUgVGhlIHNhcG1sZSByYXRlIG9mIHRoZSBtaWNyb3Bob25lXG4gKiBAcGFyYW0gaGFuZHNoYWtlRW5kIFRoZSBoYW5kc2hha2UgZW5kIGZyZXF1ZW5jeVxuICogQHBhcmFtIGJhc2VGcmVxdWVuY3kgVGhlIGJhc2UgZm9yIHdoaWNoIG90aGVyIGZyZXF1ZW5jaWVzIGFyZSBiYXNlZCBvblxuICogQHJldHVybnMgVGhlIG11bHRpcGxpZXIgYmFzZWQgb24gZ2l2ZW4gcGFyYW1ldGVyc1xuICovXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTXVsdGlwbGllciA9IChzYW1wbGVSYXRlOiBudW1iZXIsIGhhbmRzaGFrZUVuZDogbnVtYmVyLCBiYXNlRnJlcXVlbmN5OiBudW1iZXIpID0+IHtcbiAgLy8gZmluZCB0aGUgYmlnZ2VzdCBtdWx0aXBsaWVyIGluIG9yZGVyIHRvIGRlY3JlYXNlIGZmdCBzaXplXG4gIGNvbnN0IGRlZmF1bHRNdWx0aXBsaWVyID0gc2FtcGxlUmF0ZSAvIE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZyhzYW1wbGVSYXRlKSAvIE1hdGgubG9nKDIpKSlcbiAgY29uc3QgZmFjdG9yID0gTWF0aC5mbG9vcigoaGFuZHNoYWtlRW5kIC0gYmFzZUZyZXF1ZW5jeSkgLyAyNTYgLyBkZWZhdWx0TXVsdGlwbGllcilcbiAgcmV0dXJuIGRlZmF1bHRNdWx0aXBsaWVyICogTWF0aC5wb3coMiwgTWF0aC5mbG9vcihNYXRoLmxvZyhmYWN0b3IpIC8gTWF0aC5sb2coMikpKVxufVxuXG4vKipcbiAqIFJvdW5kIGEgZ2l2ZW4gZnJlcXVlbmN5IHRvIHRoZSBuZWFyZXN0IGZyZXF1ZW5jeSBtdWx0aXBsaWVyXG4gKiBAcGFyYW0gZnJlcXVlbmN5IFRoZSBub3RlJ3MgZnJlcXVlbmN5XG4gKiBAcGFyYW0gbXVsdGlwbGllciBUaGUgY2FsY3VsYXRlZCBtdWx0aXBsaWVyXG4gKiBAcmV0dXJucyBUaGUgbm90ZSdzIHJvdW5kZWQgZnJlcXVlbmN5XG4gKi9cbmV4cG9ydCBjb25zdCByb3VuZEZyZXF1ZW5jeSA9IChmcmVxdWVuY3k6IG51bWJlciwgbXVsdGlwbGllcjogbnVtYmVyKSA9PiAoXG4gIE1hdGgucm91bmQoZnJlcXVlbmN5IC8gbXVsdGlwbGllcikgKiBtdWx0aXBsaWVyIC0gbXVsdGlwbGllciAvIDJcbilcblxuLyoqXG4gKiBHZXRzIHRoZSBmcmVxdWVuY3kgaW5kZXggb2YgYSBnaXZlbiBmcmVxdWVuY3kgYW5kIG11bHRpcGxpZXJcbiAqIEBwYXJhbSBmcmVxdWVuY3kgVGhlIG5vdGUncyBmcmVxdWVuY3lcbiAqIEBwYXJhbSBtdWx0aXBsaWVyIFRoZSBjYWxjdWxhdGVkIG11bHRpcGxpZXJcbiAqIEByZXR1cm5zIFRoZSBmcmVxdWVuY3kgaW5kZXhcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEZyZXFJbmRleCA9IChmcmVxdWVuY3k6IG51bWJlciwgbXVsdGlwbGllcjogbnVtYmVyKSA9PiAoXG4gIE1hdGguZmxvb3IoZnJlcXVlbmN5IC8gbXVsdGlwbGllcilcbilcblxuLyoqXG4gKiBEZXRlcm1pbmVzIGlmIGEgZnJlcXVlbmN5IGlzIGRvbWluYW50IHJlbGF0aXZlIHRvIGl0cyBuZWlnaGJvcnNcbiAqIEBwYXJhbSBpbmRleCBUaGUgZnJlcXVlbmN5J3MgaW5kZXhcbiAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgb2YgZnJlcXVlbmNpZXNcbiAqIEByZXR1cm5zIFRoZSBnaXZlbiBmcmVxdWVuY3kge251bWJlcn0gaWYgaXQgaXMgZG9taW5hbnQgb3RoZXJ3aXNlIHtmYWxzZX1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlbGF0aXZlRnJlcXVlbmN5SXNEb21pbmFudCA9IChpbmRleDogbnVtYmVyLCBhcnJheTogbnVtYmVyW10pID0+IHtcbiAgY29uc3QgY3VycmVudCA9IGFycmF5W2luZGV4XVxuICBjb25zdCBuZXh0ID0gYXJyYXlbaW5kZXggKyAxXVxuICBjb25zdCBwcmV2ID0gYXJyYXlbaW5kZXggLSAxXVxuICBpZiAocHJldiA8IGN1cnJlbnQgJiYgbmV4dCA8IGN1cnJlbnQpIHtcbiAgICByZXR1cm4gY3VycmVudFxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09IEJJTkFSWSBDT05WRVJTSU9OUyA9PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQ29udmVydCBhIGJ5dGUgbnVtYmVyIHRvIGEgYml0IGFycmF5XG4gKiBAcGFyYW0gYnl0ZSBBIG51bWJlciByZXByZXNlbnRhdGlvbiBvZiBhIGJ5dGUgKDAtMjU1KVxuICogQHJldHVybnMgQSBiaXQgYXJyYXlcbiAqL1xuZXhwb3J0IGNvbnN0IGJ5dGVUb0JpdCA9IChieXRlOiBudW1iZXIpID0+IHtcbiAgY29uc3QgYnVja2V0cyA9IG5ldyBBcnJheSg4KS5maWxsKDApXG4gIHJldHVybiBidWNrZXRzLm1hcCgoX2UsIGkpID0+IHtcbiAgICBpZiAoYnl0ZSAtIE1hdGgucG93KDIsIDcgLSBpKSA+PSAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4oKGJ5dGUgLT0gTWF0aC5wb3coMiwgNyAtIGkpKSArIDEsIDEpXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH0pXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBiaXQgYXJyYXkgdG8gYSBieXRlIG51bWJlclxuICogQHBhcmFtIGJpdCBBIGJpdCBhcnJheVxuICogQHJldHVybnMgQSBieXRlIG51bWJlclxuICovXG5leHBvcnQgY29uc3QgYml0VG9CeXRlID0gKGJpdDogbnVtYmVyW10pID0+IHtcbiAgcmV0dXJuIGJpdC5yZWR1Y2UoKHN1bTogbnVtYmVyLCBiaXRWYWx1ZTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHN1bSArIGJpdFZhbHVlICogTWF0aC5wb3coMiwgNyAtIGluZGV4KVxuICB9LCAwKVxufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qID09PT09PT0gREUvU1RSVUNURVJJTkcgPT09PT09PSAqL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogR2V0IGdyb3VwcyBvZiBgbnVtYCBzaXplXG4gKiBAcGFyYW0gYXJyIEEgZ2VuZXJpYyBhcnJheVxuICogQHBhcmFtIG51bSBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIGJlIGluIGVhY2ggZ3JvdXBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEdyb3Vwc09mID0gKGFycjogYW55W10sIG51bTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHNpemUgPSBNYXRoLmNlaWwoYXJyLmxlbmd0aCAvIG51bSlcbiAgcmV0dXJuIG5ldyBBcnJheShzaXplKS5maWxsKHVuZGVmaW5lZCkucmVkdWNlKChhcnIsIF9lbGVtZW50LCBpKSA9PiB7XG4gICAgY29uc3Qgc3RhcnQgPSBpICogbnVtXG4gICAgY29uc3QgZW5kID0gKGkgKyAxKSAqIG51bVxuICAgIGNvbnN0IHNsaWNlID0gYXJyLnNsaWNlKHN0YXJ0LCBlbmQpXG4gICAgYXJyLmNvbmNhdChbc2xpY2VdKVxuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBDb21iaW5lIGFycmF5cyBvZiBhcnJheXMgaW50byBvbmUgYXJyYXlcbiAqIEBwYXJhbSBhcnIgQW4gYXJyYXkgb2YgYXJyYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBjb21iaW5lID0gKGFycjogYW55W10pID0+IHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKHN1bSwgZSkgPT4gc3VtLmNvbmNhdChlKSwgW10pXG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogPT09PT09PT09PSBGSUxURVJJTkcgPT09PT09PT09ICovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuY29uc3QgaW5kZXhJc0VxdWFsID0gKGluZGV4QTogYW55W10sIGluZGV4QjogYW55W10pID0+IGluZGV4QVswXSA9PT0gaW5kZXhCWzBdICYmIGluZGV4QVsxXSA9PT0gaW5kZXhCWzFdXG5cbi8qKlxuICogUmVtb3ZlIHJlcGVhdGVkIGRhdGEvZ2VuZXJhbCBjbGVhbnVwIG9mIGRhdGFcbiAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHJlY2VpdmVkIGZyb20gdGhlIGxpc3RlbmVyXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2UgPSAoZGF0YTogbnVtYmVyW10pOiBudW1iZXJbXSA9PiB7XG4gIGlmICghaW5kZXhJc0VxdWFsKGJ5dGVUb0JpdChkYXRhWzBdKS5zbGljZSgwLCAyKSwgWzAsIDBdKSkge1xuICAgIHJldHVybiByZWR1Y2UoZGF0YS5zbGljZSgxKSlcbiAgfVxuXG4gIGxldCBsYXN0SW5kZXg6IG51bWJlcltdID0gW11cblxuICByZXR1cm4gZGF0YS5maWx0ZXIoZSA9PiB7XG4gICAgbGV0IGluZGV4RGF0YSA9IGJ5dGVUb0JpdChlKS5zbGljZSgwLCAyKVxuICAgIGxldCBkdXBsaWNhdGUgPSBpbmRleElzRXF1YWwoaW5kZXhEYXRhLCBsYXN0SW5kZXgpXG4gICAgbGFzdEluZGV4ID0gaW5kZXhEYXRhXG4gICAgcmV0dXJuICFkdXBsaWNhdGVcbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=