/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/toast.js":
/*!*************************!*\
  !*** ./src/js/toast.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showError: () => (/* binding */ showError)
/* harmony export */ });
function showError(message) {
    const container = document.getElementById("error-container");

    const toast = document.createElement("div");
    toast.className = "error-toast";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

/***/ }),

/***/ "./src/js/validations.js":
/*!*******************************!*\
  !*** ./src/js/validations.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkEmail: () => (/* binding */ checkEmail),
/* harmony export */   checkPass: () => (/* binding */ checkPass)
/* harmony export */ });
/* harmony import */ var _toast_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast.js */ "./src/js/toast.js");



const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkEmail() {
    const emailField = document.getElementById("email");
    const email = emailField.value.trim();

    if (email === "") {
        (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.showError)("Email je povinný.");
        return false;
    }

    if (!emailRegex.test(email)) {
        (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.showError)("Neplatný formát emailu.");
        return false;
    }

    return true;
}

function checkPass() {
    const passwordField = document.getElementById("password");
    const password = passwordField.value.trim();

    if (password === "") {
        (0,_toast_js__WEBPACK_IMPORTED_MODULE_0__.showError)("Heslo je povinné.");
        return false;
    }

    return true;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validations.js */ "./src/js/validations.js");


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".login-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const validEmail = (0,_validations_js__WEBPACK_IMPORTED_MODULE_0__.checkEmail)();
        const validPass = (0,_validations_js__WEBPACK_IMPORTED_MODULE_0__.checkPass)();

        if (validEmail && validPass) {
            alert("Přihlášení proběhlo úspěšně.");
            // sem případně přidáš AJAX fetch()
        }
    });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map