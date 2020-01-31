webpackHotUpdate("static/development/pages/project/cash-register.js",{

/***/ "./pages/project/cash-register.jsx":
/*!*****************************************!*\
  !*** ./pages/project/cash-register.jsx ***!
  \*****************************************/
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


var _jsxFileName = "/Users/tymick/Documents/tywmick.github.io/pages/project/cash-register.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  function checkCashRegister(price, cash, cid) {
    var changeLeft = cash - price;
    var drawerTotal = cid.reduce(function (acc, cur) {
      return acc + cur[1];
    }, 0);

    if (changeLeft == drawerTotal) {
      return {
        status: "CLOSED",
        change: cid
      };
    } else {
      var processUnit = function processUnit(name, amt) {
        var unitTotal = cid.filter(function (item) {
          return item[0] == name;
        })[0][1];
        var unitChange = Math.min(unitTotal, Math.floor(changeLeft / amt) * amt);
        unitChange = Math.round(unitChange * 100) / 100;

        if (unitChange > 0) {
          changeUnits.push([name, unitChange]);
          changeLeft -= unitChange;
          changeLeft = Math.round(changeLeft * 100) / 100; //fixes flooring issues
        }
      };

      var changeUnits = [];
      processUnit("ONE HUNDRED", 100);
      processUnit("TWENTY", 20);
      processUnit("TEN", 10);
      processUnit("FIVE", 5);
      processUnit("ONE", 1);
      processUnit("QUARTER", 0.25);
      processUnit("DIME", 0.1);
      processUnit("NICKEL", 0.05);
      processUnit("PENNY", 0.01);

      if (changeLeft == 0) {
        return {
          status: "OPEN",
          change: changeUnits
        };
      } else {
        return {
          status: "INSUFFICIENT_FUNDS",
          change: []
        };
      }
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Cash register \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("h1", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Cash register function"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "price",
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Purchase price (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "price"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dollarSign1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    "aria-describedby": "dollarSign1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "cash",
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Payment amount (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "cash"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "col lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Cash in drawer (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "cid"), ")"))), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "24cdeb02eb5f4e3e2cd14f91f5bbe5cb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "I created this function as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ".")));
});

/***/ })

})
//# sourceMappingURL=cash-register.js.32e7e4341dc8d0d9bec9.hot-update.js.map