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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      price = _useState[0],
      setPrice = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      cash = _useState2[0],
      setCash = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      penny = _useState3[0],
      setPenny = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      nickel = _useState4[0],
      setNickel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      dime = _useState5[0],
      setDime = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      quarter = _useState6[0],
      setQuarter = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      dollar = _useState7[0],
      setDollar = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      five = _useState8[0],
      setFive = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      ten = _useState9[0],
      setTen = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      twenty = _useState10[0],
      setTwenty = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
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
    setFunctionReturn(checkCashRegister(price, cash, [["PENNY", penny], ["NICKEL", nickel], ["DIME", dime], ["QUARTER", quarter], ["DOLLAR", dollar], ["FIVE", dollar], ["TEN", ten], ["TWENTY", twenty], ["ONE HUNDRED", hundred]]));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Cash register \u2013 Ty Mick")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("h1", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Cash register function"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    className: "mb-3",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "price",
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Purchase price (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "price"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsPrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
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
      lineNumber: 129
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "cash",
    className: "col-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Payment amount (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "cash"), ")"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsCash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
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
      lineNumber: 151
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    id: "cid",
    className: "col lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Cash in drawer (", __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "cid"), ")")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "penny",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Value in pennies"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsPenny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
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
      lineNumber: 182
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "nickel",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Value in nickels"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsNickel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
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
      lineNumber: 206
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "dime",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "Value in dimes"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsDime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
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
      lineNumber: 227
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "quarter",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Value in quarters"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsQuarter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
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
      lineNumber: 251
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "dollar",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "Value in one-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsDollar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
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
      lineNumber: 275
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "five",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "Value in five-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsFive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
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
      lineNumber: 296
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "ten",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  }, "Value in ten-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsTen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
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
      lineNumber: 317
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "twenty",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "Value in twenty-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsTwenty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
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
      lineNumber: 341
    },
    __self: this
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "hundred",
    className: "col-sm-6 col-md-4 col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "Value in hundred-dollar bills"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Prepend, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"].Text, {
    id: "dsHundred",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
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
      lineNumber: 365
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "Check the cash register")), __jsx("div", {
    className: "mx-2 mx-sm-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, __jsx("h5", {
    className: "mb-0 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "Function\xA0call:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, functionCall ? __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6__["githubGist"],
    className: "text-wrap px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, functionCall) : __jsx("pre", {
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "\xA0"))), __jsx("div", {
    className: "d-flex align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, __jsx("h5", {
    className: "mb-0 mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "Returns:"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, functionReturn ? __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    language: "json",
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_6__["githubGist"],
    className: "text-wrap px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(functionReturn)) : __jsx("pre", {
    className: "px-2 py-1 m-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "\xA0")))), __jsx("div", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, __jsx(react_gist__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "24cdeb02eb5f4e3e2cd14f91f5bbe5cb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "I created this function as a requirement for", " ", __jsx("a", {
    href: "https://www.freecodecamp.org/certification/tywmick/javascript-algorithms-and-data-structures",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, "my freeCodeCamp JavaScript Algorithms and Data Structures Certification"), ".")));
});

/***/ })

})
//# sourceMappingURL=cash-register.js.f18f752e2a0bbb69ed04.hot-update.js.map