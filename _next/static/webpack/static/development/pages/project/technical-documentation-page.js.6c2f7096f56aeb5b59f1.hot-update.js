webpackHotUpdate("static/development/pages/project/technical-documentation-page.js",{

/***/ "./pages/project/technical-documentation-page.jsx":
/*!********************************************************!*\
  !*** ./pages/project/technical-documentation-page.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_codepen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/codepen */ "./components/codepen.jsx");


var _jsxFileName = "/Users/tymick/Documents/tywmick.github.io/pages/project/technical-documentation-page.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  // Just capture the window height once
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      windowHeight = _useState[0],
      setWindowHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setWindowHeight(window.innerHeight);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Technical documentation page \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    fluid: true,
    className: "mt-n3 mb-4 mb-lg-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_codepen__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Technical documentation page",
    slug: "EJrmvx",
    height: windowHeight * 0.6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("p", {
    className: "lead font-italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "View this app", " ", __jsx("a", {
    href: "https://codepen.io/tywmick/full/EJrmvx",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "in its own window"), ", or view the source on", " ", __jsx("a", {
    href: "https://github.com/tywmick/technical-documentation-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "GitHub"), " ", "or ", __jsx("a", {
    href: "https://codepen.io/tywmick/pen/EJrmvx",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "CodePen"), "."), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Technical documentation page"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "I created this app in fulfillment of", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "freeCodeCamp"), "'s Responsive Web Design Project", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-projects/build-a-technical-documentation-page/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Build a Technical Documentation Page"), ", using", " ", __jsx("a", {
    href: "https://www.w3schools.com/w3css/default.asp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "W3.CSS"), ". I modeled it some after", " ", __jsx("a", {
    href: "https://codepen.io/freeCodeCamp/pen/RKRbwL",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "their example"), ", but I was more inspired more by", " ", __jsx("a", {
    href: "https://www.w3schools.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "W3School"), "'s", " ", __jsx("a", {
    href: "https://www.w3schools.com/w3css/w3css_sidebar.asp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "sidebar tutorials"), ". It fulfills the following user stories:"), __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "I can see a ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "main"), " element with a corresponding", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "id=\"main-doc\""), ", which contains the page's main content (technical documentation)."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Within the ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "#main-doc"), " element, I can see several", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "section"), " elements, each with a class of", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "main-section"), ". There should be a minimum of 5."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "The first element within each ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, ".main-section"), " should be a", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "header"), " element which contains text that describes the topic of that section."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Each ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "section"), " element with the class of", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "main-section"), " should also have an id that corresponds with the text of each ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "header"), " contained within it. Any spaces should be replaced with underscores (e.g. The", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "section"), " that contains the header \"JavaScript and Java\" should have a corresponding ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "id=\"JavaScript_and_Java\""), ")."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "The ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, ".main-section"), " elements should contain at least 10", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "p"), " elements total (not each)."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "The ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, ".main-section"), " elements should contain at least 5", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "code"), " elements total (not each)."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "The ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, ".main-section"), " elements should contain at least 5", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "li"), " items total (not each)."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "I can see a ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "nav"), " element with a corresponding", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "id=\"navbar\""), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "The navbar element should contain one ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "header"), " element which contains text that describes the topic of the technical documentation."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Additionally, the navbar should contain link (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "a"), ") elements with the class of ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "nav-link"), ". There should be one for every element with the class ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "main-section"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "The ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "header"), " element in the navbar must come before any link (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "a"), ") elements in the navbar."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Each element with the class of ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "nav-link"), " should contain text that corresponds to the ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "header"), " text within each", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "section"), " (e.g. if you have a \"Hello world\" section/header, your navbar should have an element which contains the text \"Hello world\")."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "When I click on a navbar element, the page should navigate to the corresponding section of the ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "main-doc"), " element (e.g. If I click on a ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "nav-link"), " element that contains the text \"Hello world\", the page navigates to a ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "section"), " element that has that id and contains the corresponding ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "header"), "."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "On regular sized devices (laptops, desktops), the element with", " ", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "id=\"navbar\""), " should be shown on the left side of the screen and should always be visible to the user."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "My Technical Documentation page should use at least one media query."))));
});

/***/ })

})
//# sourceMappingURL=technical-documentation-page.js.6c2f7096f56aeb5b59f1.hot-update.js.map