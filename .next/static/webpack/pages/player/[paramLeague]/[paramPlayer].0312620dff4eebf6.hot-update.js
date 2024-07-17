"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[paramLeague]/[paramPlayer]",{

/***/ "./src/components/Valorant/Row.tsx":
/*!*****************************************!*\
  !*** ./src/components/Valorant/Row.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Row: function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\nvar formatDate = function(dateString) {\n    var _dateString_split = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)(dateString.split(\"/\"), 3), year = _dateString_split[0], month = _dateString_split[1], day = _dateString_split[2];\n    var formattedDay = parseInt(day, 10); // Convert to integer to remove leading zeros\n    var formattedMonth = parseInt(month, 10); // Convert to integer to remove leading zeros\n    return \"\".concat(year, \"-\").concat(formattedMonth, \"-\").concat(formattedDay);\n};\nvar Row = function(param) {\n    var game = param.game;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n        style: {\n            display: \"flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n            style: {\n                width: \"200px\",\n                display: \"flex\",\n                justifyContent: \"space-evenly\",\n                alignItems: \"center\",\n                background: \"red\"\n            },\n            children: [\n                formatDate(game.date),\n                \" @\",\n                game.oppTeam\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/Row.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/Row.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = Row;\nvar Square = function(param) {\n    var amount = param.amount, compareAmount = param.compareAmount;\n    var bgColor = \"#D9D9D9\";\n    var amountParsed = amount % 1 !== 0 ? amount.toFixed(1) : amount;\n    if (amount > compareAmount) bgColor = \"#B1DEA3\";\n    if (amount === compareAmount) bgColor = \"#f7f259\";\n    if (amount < compareAmount) bgColor = \"#f94352\";\n    else if (compareAmount < 0) bgColor = \"#D9D9D9\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"50px\",\n                height: \"35px\",\n                background: bgColor,\n                borderRadius: 5,\n                overflow: \"hidden\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    margin: 0,\n                    padding: 0,\n                    lineHeight: \"35px\",\n                    height: \"35px\",\n                    overflow: \"hidden\"\n                },\n                children: amountParsed\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/Row.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/Row.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/Row.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Square;\nvar _c, _c1;\n$RefreshReg$(_c, \"Row\");\n$RefreshReg$(_c1, \"Square\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WYWxvcmFudC9Sb3cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QjtBQU96QixJQUFNQyxhQUFhLFNBQUNDO0lBQ2xCLElBQTJCQSxvQkFBQUEsK0RBQUFBLENBQUFBLFdBQVdDLEtBQUssQ0FBQyxVQUFyQ0MsT0FBb0JGLHNCQUFkRyxRQUFjSCxzQkFBUEksTUFBT0o7SUFDM0IsSUFBTUssZUFBZUMsU0FBU0YsS0FBSyxLQUFLLDZDQUE2QztJQUNyRixJQUFNRyxpQkFBaUJELFNBQVNILE9BQU8sS0FBSyw2Q0FBNkM7SUFDekYsT0FBTyxHQUFXSSxPQUFSTCxNQUFLLEtBQXFCRyxPQUFsQkUsZ0JBQWUsS0FBZ0IsT0FBYkY7QUFDdEM7QUFFTyxJQUFNRyxNQUFzQjtRQUFFQyxhQUFBQTtJQUNuQyxxQkFDRSw4REFBQ0M7UUFBR0MsT0FBTztZQUFDQyxTQUFRO1FBQU07a0JBQ3RCLDRFQUFDQztZQUFHRixPQUFPO2dCQUFDRyxPQUFNO2dCQUFTRixTQUFRO2dCQUFRRyxnQkFBZTtnQkFBZ0JDLFlBQVc7Z0JBQVVDLFlBQVc7WUFBSzs7Z0JBQzVHbEIsV0FBV1UsS0FBS1MsSUFBSTtnQkFBRTtnQkFBR1QsS0FBS1UsT0FBTzs7Ozs7Ozs7Ozs7O0FBV2hELEVBQUM7S0FmWVg7QUFzQmIsSUFBTVksU0FBNkI7UUFBRUMsZUFBQUEsUUFBUUMsc0JBQUFBO0lBQzNDLElBQUlDLFVBQVU7SUFDZCxJQUFJQyxlQUFlSCxTQUFTLE1BQU0sSUFBSUEsT0FBT0ksT0FBTyxDQUFDLEtBQUtKO0lBRTFELElBQUdBLFNBQVNDLGVBQWVDLFVBQVU7SUFDckMsSUFBR0YsV0FBV0MsZUFBZUMsVUFBVTtJQUN2QyxJQUFHRixTQUFTQyxlQUFlQyxVQUFVO1NBQ2hDLElBQUdELGdCQUFnQixHQUFHQyxVQUFVO0lBRXJDLHFCQUNFLDhEQUFDVjtRQUFHRixPQUFPO1lBQUNDLFNBQVE7WUFBUUcsZ0JBQWU7UUFBUTtrQkFDakQsNEVBQUNXO1lBQUlmLE9BQU87Z0JBQ1ZHLE9BQU87Z0JBQ1BhLFFBQVE7Z0JBQ1JWLFlBQVlNO2dCQUNaSyxjQUFjO2dCQUNkQyxVQUFVO1lBQ1o7c0JBQ0UsNEVBQUNDO2dCQUFFbkIsT0FBTztvQkFDTm9CLFFBQVE7b0JBQ1JDLFNBQVM7b0JBQ1RDLFlBQVk7b0JBQ1pOLFFBQVE7b0JBQ1JFLFVBQVU7Z0JBQ2Q7MEJBQUlMOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVo7TUE1Qk1KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZhbG9yYW50L1Jvdy50c3g/ZGEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWxvcmFudEdhbWUgfSBmcm9tICcuLi8uLi9Db250ZXh0L1BsYXllclR5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBnYW1lOiBWYWxvcmFudEdhbWUsXG4gICAgLy8gY2hhcnRDb21wYXJlVG86IFN0YXRzXG59XG5jb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGVTdHJpbmcuc3BsaXQoJy8nKTtcbiAgY29uc3QgZm9ybWF0dGVkRGF5ID0gcGFyc2VJbnQoZGF5LCAxMCk7IC8vIENvbnZlcnQgdG8gaW50ZWdlciB0byByZW1vdmUgbGVhZGluZyB6ZXJvc1xuICBjb25zdCBmb3JtYXR0ZWRNb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7IC8vIENvbnZlcnQgdG8gaW50ZWdlciB0byByZW1vdmUgbGVhZGluZyB6ZXJvc1xuICByZXR1cm4gYCR7eWVhcn0tJHtmb3JtYXR0ZWRNb250aH0tJHtmb3JtYXR0ZWREYXl9YDtcbn1cblxuZXhwb3J0IGNvbnN0IFJvdzpSZWFjdC5GQzxQcm9wcz4gPSAoe2dhbWV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRyIHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fT5cbiAgICAgICAgPHRoIHN0eWxlPXt7d2lkdGg6JzIwMHB4JywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidzcGFjZS1ldmVubHknLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBiYWNrZ3JvdW5kOidyZWQnfX0+XG4gICAgICAgICAge2Zvcm1hdERhdGUoZ2FtZS5kYXRlKX0gQHtnYW1lLm9wcFRlYW19XG4gICAgICAgIDwvdGg+XG4gICAgICAgIHsvKiB7T2JqZWN0LmVudHJpZXMoZ2FtZS5zdGF0cykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICA8U3F1YXJlIFxuICAgICAgICAgICAgYW1vdW50PXt2YWx1ZX0gXG4gICAgICAgICAgICBjb21wYXJlQW1vdW50PXtjaGFydENvbXBhcmVUb1trZXkgYXMga2V5b2YgU3RhdHNdfSBcbiAgICAgICAgICAgIGtleT17a2V5fSBcbiAgICAgICAgICAvPlxuICAgICAgICApKX0gKi99XG4gICAgPC90cj5cbiAgKVxufVxuXG5pbnRlcmZhY2UgUHJvcHNUd28ge1xuICBhbW91bnQ6IG51bWJlcixcbiAgY29tcGFyZUFtb3VudDogbnVtYmVyXG59XG5cbmNvbnN0IFNxdWFyZTogUmVhY3QuRkM8UHJvcHNUd28+ID0gKHthbW91bnQsIGNvbXBhcmVBbW91bnR9KSA9PiB7XG4gIGxldCBiZ0NvbG9yID0gJyNEOUQ5RDknO1xuICBsZXQgYW1vdW50UGFyc2VkID0gYW1vdW50ICUgMSAhPT0gMCA/IGFtb3VudC50b0ZpeGVkKDEpIDogYW1vdW50O1xuXG4gIGlmKGFtb3VudCA+IGNvbXBhcmVBbW91bnQpIGJnQ29sb3IgPSAnI0IxREVBMyc7XG4gIGlmKGFtb3VudCA9PT0gY29tcGFyZUFtb3VudCkgYmdDb2xvciA9ICcjZjdmMjU5JztcbiAgaWYoYW1vdW50IDwgY29tcGFyZUFtb3VudCkgYmdDb2xvciA9ICcjZjk0MzUyJztcbiAgZWxzZSBpZihjb21wYXJlQW1vdW50IDwgMCkgYmdDb2xvciA9ICcjRDlEOUQ5JztcblxuICByZXR1cm4oXG4gICAgPHRoIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0+XG4gICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjM1cHhcIixcbiAgICAgICAgYmFja2dyb3VuZDogYmdDb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB9fT5cbiAgICAgICAgPHAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMzVweCcsXG4gICAgICAgICAgICBoZWlnaHQ6ICczNXB4JyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICB9fT57YW1vdW50UGFyc2VkfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGg+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwic3BsaXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJmb3JtYXR0ZWREYXkiLCJwYXJzZUludCIsImZvcm1hdHRlZE1vbnRoIiwiUm93IiwiZ2FtZSIsInRyIiwic3R5bGUiLCJkaXNwbGF5IiwidGgiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJkYXRlIiwib3BwVGVhbSIsIlNxdWFyZSIsImFtb3VudCIsImNvbXBhcmVBbW91bnQiLCJiZ0NvbG9yIiwiYW1vdW50UGFyc2VkIiwidG9GaXhlZCIsImRpdiIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwicCIsIm1hcmdpbiIsInBhZGRpbmciLCJsaW5lSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Valorant/Row.tsx\n"));

/***/ })

});