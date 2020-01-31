webpackHotUpdate("static/development/pages/project/caesars-cipher.js",{

/***/ "./pages/project/caesars-cipher.jsx":
/*!******************************************!*\
  !*** ./pages/project/caesars-cipher.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gist */ "./node_modules/react-gist/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_algorithm_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/algorithm-test */ "./components/algorithm-test.jsx");


var _jsxFileName = "/Users/tymick/Documents/tywmick.github.io/pages/project/caesars-cipher.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  function rot13(str) {
    var decoded = "";

    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65) {
        decoded += str[i];
      } else if (str.charCodeAt(i) <= 77) {
        decoded += String.fromCharCode(str.charCodeAt(i) + 13);
      } else if (str.charCodeAt(i) <= 90) {
        decoded += String.fromCharCode(str.charCodeAt(i) - 13);
      } else {
        decoded += str[i];
      }
    }

    return decoded;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Caesar's cipher \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h1", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Caesar's cipher algorithm"), __jsx(_components_algorithm_test__WEBPACK_IMPORTED_MODULE_4__["default"], {
    algorithm: rot13,
    argumentName: "str",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "1a7997c7d07b7e6375f773963df36946",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "I created this algorithm as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ". It converts the number given into a Roman numeral.")));
});

/***/ })

})
//# sourceMappingURL=caesars-cipher.js.095a129985224a645fd5.hot-update.js.map