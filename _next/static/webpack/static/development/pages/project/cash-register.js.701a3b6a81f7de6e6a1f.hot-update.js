webpackHotUpdate("static/development/pages/project/cash-register.js",{

/***/ "./pages/project/cash-register.jsx":
/*!*****************************************!*\
  !*** ./pages/project/cash-register.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_gist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-gist */ "./node_modules/react-gist/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "/Users/tymick/Documents/tywmick.github.io/pages/project/cash-register.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      price = _useState[0],
      setPrice = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      cash = _useState2[0],
      setCash = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      penny = _useState3[0],
      setPenny = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      nickel = _useState4[0],
      setNickel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      dime = _useState5[0],
      setDime = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      quarter = _useState6[0],
      setQuarter = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      dollar = _useState7[0],
      setDollar = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      five = _useState8[0],
      setFive = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      ten = _useState9[0],
      setTen = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      twenty = _useState10[0],
      setTwenty = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      hundred = _useState11[0],
      setHundred = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      functionCall = _useState12[0],
      setFunctionCall = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      functionReturn = _useState13[0],
      setFunctionReturn = _useState13[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setFunctionCall("checkCashRegister(" + price + ", " + cash + ', [["PENNY", ' + penny + '], ["NICKEL", ' + nickel + '], ["DIME", ' + dime + '], ["QUARTER", ' + quarter + '], ["DOLLAR", ' + dollar + '], ["FIVE", ' + five + '], ["TEN", ' + ten + '], ["TWENTY", ' + twenty + '], ["ONE HUNDRED", ' + hundred + "]]");
    setFunctionReturn(checkCashRegister);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Cash register \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("h1", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Cash register function"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    className: "mb-3",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "price",
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Purchase price (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "price"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsPrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    value: price,
    onChange: function onChange(e) {
      setPrice(e.target.value);
    },
    "aria-describedby": "dsPrice",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "cash",
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Payment amount (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "cash"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsCash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    value: cash,
    onChange: function onChange(e) {
      setCash(e.target.value);
    },
    "aria-describedby": "dsCash",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    id: "cid",
    className: "col lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Cash in drawer (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "cid"), ")")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "penny",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Value in pennies"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsPenny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "0.01",
    min: "0",
    value: penny,
    onChange: function onChange(e) {
      setPenny(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsPenny",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "nickel",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Value in nickels"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsNickel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "0.05",
    min: "0",
    value: nickel,
    onChange: function onChange(e) {
      setNickel(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsNickel",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "dime",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Value in dimes"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsDime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "0.1",
    min: "0",
    value: dime,
    onChange: function onChange(e) {
      setDime(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsDime",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "quarter",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Value in quarters"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsQuarter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "0.25",
    min: "0",
    value: quarter,
    onChange: function onChange(e) {
      setQuarter(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsQuarter",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "dollar",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "Value in one-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsDollar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "1",
    min: "0",
    value: dollar,
    onChange: function onChange(e) {
      setDollar(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsDollar",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "five",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Value in five-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsFive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "5",
    min: "0",
    value: five,
    onChange: function onChange(e) {
      setFive(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsFive",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "ten",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "Value in ten-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsTen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "10",
    min: "0",
    value: ten,
    onChange: function onChange(e) {
      setTen(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsTen",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "twenty",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Value in twenty-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsTwenty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "20",
    min: "0",
    value: twenty,
    onChange: function onChange(e) {
      setTwenty(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsTwenty",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "hundred",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "Value in hundred-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsHundred",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, "$")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "number",
    step: "100",
    min: "0",
    value: hundred,
    onChange: function onChange(e) {
      setHundred(e.target.value);
    },
    "aria-labelledby": "cid",
    "aria-describedby": "dsHundred",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "Check the cash register")), __jsx("div", {
    className: "mx-2 mx-sm-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, __jsx("h5", {
    className: "mb-0 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, "Function call:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "h5 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, functionCall ? __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6__["githubGist"],
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, functionCall) : __jsx("pre", {
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "\xA0"))), __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx("h5", {
    className: "mb-0 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "Returns:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "h5 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, functionReturn ? __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    language: "json",
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6__["githubGist"],
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(functionReturn, null, 2)) : __jsx("pre", {
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, "\xA0")))), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "24cdeb02eb5f4e3e2cd14f91f5bbe5cb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "I created this function as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ".")));
});

/***/ })

})
//# sourceMappingURL=cash-register.js.701a3b6a81f7de6e6a1f.hot-update.js.map