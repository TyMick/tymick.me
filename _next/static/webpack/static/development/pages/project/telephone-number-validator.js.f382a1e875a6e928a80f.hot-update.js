webpackHotUpdate("static/development/pages/project/telephone-number-validator.js",{

/***/ "./pages/project/telephone-number-validator.jsx":
/*!******************************************************!*\
  !*** ./pages/project/telephone-number-validator.jsx ***!
  \******************************************************/
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


var _jsxFileName = "/Users/tymick/Documents/tywmick.github.io/pages/project/telephone-number-validator.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (function () {
  function telephoneCheck(str) {
    var numDigits = str.match(/\d/g).length || 0;

    if (numDigits == 10) {
      if (!!str.match(/^\(\d{3}\) {0,1}\d{3}-\d{4}$/) || !!str.match(/^\d{3}([ \-]{0,1})\d{3}\1\d{4}$/)) {
        return true;
      } else {
        return false;
      }
    } else if (numDigits == 11) {
      if (!!str.match(/^1 {0,1}\(\d{3}\) {0,1}\d{3}-\d{4}$/) || !!str.match(/^1 \d{3}([ \-]{0,1})\d{3}\1\d{4}$/)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Telephone number validator \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("h1", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Telephone number validator algorithm"), __jsx(_components_algorithm_test__WEBPACK_IMPORTED_MODULE_4__["default"], {
    algorithm: telephoneCheck,
    argumentName: "str",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "1e5b0900551a40b2bf22bad0455837aa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "I created this algorithm as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ". It checks an entered string of text to see if it looks like a valid United States phone number (according to", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "freeCodeCamp's parameters"), ", at least).")));
});

/***/ })

})
//# sourceMappingURL=telephone-number-validator.js.f382a1e875a6e928a80f.hot-update.js.map