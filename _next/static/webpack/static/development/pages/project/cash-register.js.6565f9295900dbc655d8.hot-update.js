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
    id: "dsPrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    "aria-describedby": "dsPrice",
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
  }, "cash"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsCash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    "aria-describedby": "dsCash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    id: "cid",
    className: "col lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Cash in drawer (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "cid"), ")")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "penny",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Value in pennies"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsPenny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsPenny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "nickel",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Value in nickels"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsNickel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.05",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsNickel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "dime",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Value in dimes"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsDime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.1",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsDime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "quarter",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Value in quarters"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsQuarter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "0.25",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsQuarter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "dollar",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Value in one-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsDollar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "1",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsDollar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "five",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Value in five-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsFive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "5",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsFive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "ten",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Value in ten-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsTen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "10",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsTen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "twenty",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Value in twenty-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsTwenty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "20",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsTwenty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
    controlId: "hundred",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, "Value in hundred-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
    id: "dsHundred",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Control, {
    type: "number",
    step: "100",
    min: "0",
    "aria-labelledby": "cid",
    "aria-describedby": "dsHundred",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Check the cash register")), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "24cdeb02eb5f4e3e2cd14f91f5bbe5cb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "I created this function as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ".")));
});

/***/ })

})
//# sourceMappingURL=cash-register.js.6565f9295900dbc655d8.hot-update.js.map