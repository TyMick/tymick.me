webpackHotUpdate("static/development/pages/project/telephone-number-validator.js",{

/***/ "./components/algorithm-test.jsx":
/*!***************************************!*\
  !*** ./components/algorithm-test.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/tymick/Documents/tywmick.github.io/components/algorithm-test.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var algorithm = _ref.algorithm,
      argumentName = _ref.argumentName,
      inputType = _ref.inputType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      argValue = _useState[0],
      setArgValue = _useState[1];

  return __jsx("div", {
    className: "mx-2 mx-sm-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    inline: true,
    className: "mb-3 text-monospace",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Text, {
    id: "functionName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, algorithm.name, "(", inputType === "text" && argValue && '"')), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: inputType,
    placeholder: argumentName,
    "aria-label": argumentName,
    "aria-describedby": "functionName",
    onChange: function onChange(e) {
      setArgValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Append, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, inputType === "text" && argValue && '"', ")")))), __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("h5", {
    className: "mb-0 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Returns:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "h5 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, argValue ? __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_3__["githubGist"],
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, typeof algorithm(argValue) === "string" ? '"' + algorithm(argValue) + '"' : algorithm(argValue).toString()) : __jsx("pre", {
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\xA0"))));
});

/***/ })

})
//# sourceMappingURL=telephone-number-validator.js.ffbf922ac32fc0d2100b.hot-update.js.map