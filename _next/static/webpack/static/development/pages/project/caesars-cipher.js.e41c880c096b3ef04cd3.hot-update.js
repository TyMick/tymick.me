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
  function convertToRoman(num) {
    var roman = "";
    var thousands = Math.floor(num / 1000);
    roman += "M".repeat(thousands);
    var hundreds = Math.floor(num % 1000 / 100);

    if (hundreds == 9) {
      roman += "CM";
    } else if (hundreds >= 5) {
      roman += "D" + "C".repeat(hundreds - 5);
    } else if (hundreds == 4) {
      roman += "CD";
    } else {
      roman += "C".repeat(hundreds);
    }

    var tens = Math.floor(num % 100 / 10);

    if (tens == 9) {
      roman += "XC";
    } else if (tens >= 5) {
      roman += "L" + "X".repeat(tens - 5);
    } else if (tens == 4) {
      roman += "XL";
    } else {
      roman += "X".repeat(tens);
    }

    var ones = Math.floor(num % 10);

    if (ones == 9) {
      roman += "IX";
    } else if (ones >= 5) {
      roman += "V" + "I".repeat(ones - 5);
    } else if (ones == 4) {
      roman += "IV";
    } else {
      roman += "I".repeat(ones);
    }

    return roman;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Roman numeral converter \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("h1", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Roman numeral converter algorithm"), __jsx(_components_algorithm_test__WEBPACK_IMPORTED_MODULE_4__["default"], {
    algorithm: convertToRoman,
    argumentName: "num",
    inputType: "number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "1a7997c7d07b7e6375f773963df36946",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "I created this algorithm as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ". It converts the number given into a Roman numeral.")));
});

/***/ })

})
//# sourceMappingURL=caesars-cipher.js.e41c880c096b3ef04cd3.hot-update.js.map