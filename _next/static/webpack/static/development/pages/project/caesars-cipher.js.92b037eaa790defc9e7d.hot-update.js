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
      if (inRange(str.charCodeAt(i), [65, 77], [97, 109])) {
        decoded += String.fromCharCode(str.charCodeAt(i) + 13);
      } else if (inRange(str.charCodeAt(i), [78, 90], [110, 122])) {
        decoded += String.fromCharCode(str.charCodeAt(i) - 13);
      } else {
        decoded += str[i];
      }
    }

    return decoded;

    function inRange(target) {
      var inAnyRange = false;

      for (var _len = arguments.length, ranges = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        ranges[_key - 1] = arguments[_key];
      }

      ranges.forEach(function (range) {
        if (range[0] <= target && target <= range[1]) {
          inAnyRange = true;
        }
      });
      return inAnyRange;
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
  }, "Caesar's cipher \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
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
  }, "Caesar's cipher algorithm"), __jsx(_components_algorithm_test__WEBPACK_IMPORTED_MODULE_4__["default"], {
    algorithm: rot13,
    argumentName: "str",
    inputType: "text",
    inputPattern: "[^a-z]{1,}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "1a7997c7d07b7e6375f773963df36946",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "I created this algorithm as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ". It converts the number given into a Roman numeral.")));
});

/***/ })

})
//# sourceMappingURL=caesars-cipher.js.92b037eaa790defc9e7d.hot-update.js.map