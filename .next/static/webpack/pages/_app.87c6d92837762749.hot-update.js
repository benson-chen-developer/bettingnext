"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Nav/NavBar.tsx":
/*!***************************************!*\
  !*** ./src/components/Nav/NavBar.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NavBar: function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_destructuring_empty */ \"./node_modules/@swc/helpers/esm/_object_destructuring_empty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Promo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Promo */ \"./src/components/Nav/Promo.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/Nav/SearchBar.tsx\");\n\nvar _this = undefined;\n\n\n\n\n\nvar NavBar = function(param) {\n    var ref = (0,_swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_5__._)(param);\n    var promoCodes = [\n        {\n            name: \"PrizePicks\",\n            url: \"https://app.prizepicks.com/sign-up?invite_code=PR-9LWKBZ1\",\n            promo: \"PR-9LWKBZ1\",\n            picName: \"prizepicks.png\",\n            text: \"$100 Bonus\"\n        },\n        {\n            name: \"UnderDog\",\n            url: \"https://play.underdogfantasy.com/goodluck255\",\n            promo: \"GOODLUCK255\",\n            picName: \"underdog.jpeg\",\n            text: \"$250 Bonus!\"\n        },\n        {\n            name: \"Sleeper\",\n            url: \"https://sleeper.com/promo/RF-BENSON456\",\n            promo: \"BENSON456\",\n            picName: \"sleeper.jpeg\",\n            text: \"$100 Bonus!\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        style: {\n            width: \"100%\",\n            height: \"70px\",\n            background: \"#F33479\",\n            display: \"flex\",\n            alignItems: \"center\",\n            position: \"fixed\",\n            top: 0,\n            zIndex: 1000 // Ensure it stays above other content\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        fontWeight: \"bold\",\n                        marginLeft: \"30px\",\n                        cursor: \"pointer\",\n                        textDecoration: \"none\",\n                        color: \"#fff\"\n                    },\n                    children: \"Sports Stats\"\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NavBar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NavBar.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NavBar.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginRight: \"10px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NavBar.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, _this),\n            promoCodes.map(function(promo, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Promo__WEBPACK_IMPORTED_MODULE_3__.Promo, {\n                    picName: promo.picName,\n                    name: promo.name,\n                    text: promo.text,\n                    promo: promo.promo,\n                    url: promo.url\n                }, index, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NavBar.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NavBar.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ3BDO0FBRUU7QUFDUTtBQU1oQyxJQUFNSSxTQUEwQjtRQUFDO0lBR3BDLElBQU1DLGFBQWE7UUFDZjtZQUNJQyxNQUFLO1lBQ0xDLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU07UUFDVjtRQUNBO1lBQ0lKLE1BQUs7WUFDTEMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTTtRQUNWO1FBQ0E7WUFDSUosTUFBTTtZQUNOQyxLQUFLO1lBQ0xDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNO1FBQ1Y7S0FDSDtJQUNELHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQ1JDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsUUFBUSxLQUFLLHNDQUFzQztRQUN2RDs7MEJBQ0ksOERBQUNuQixrREFBSUE7Z0JBQUNvQixNQUFLOzBCQUNQLDRFQUFDQztvQkFBR1YsT0FBTzt3QkFBRVcsWUFBWTt3QkFBUUMsWUFBWTt3QkFBUUMsUUFBUTt3QkFBV0MsZ0JBQWU7d0JBQVFDLE9BQU07b0JBQU87OEJBQUc7Ozs7Ozs7Ozs7OzBCQUtuSCw4REFBQ3hCLGlEQUFTQTs7Ozs7MEJBRVYsOERBQUN5QjtnQkFBSWhCLE9BQU87b0JBQUNpQixhQUFZO2dCQUFNOzs7Ozs7WUFDOUJ4QixXQUFXeUIsR0FBRyxDQUFDLFNBQUN0QixPQUFPdUI7cUNBQ3BCLDhEQUFDN0IseUNBQUtBO29CQUNGTyxTQUFTRCxNQUFNQyxPQUFPO29CQUFFSCxNQUFNRSxNQUFNRixJQUFJO29CQUN4Q0ksTUFBTUYsTUFBTUUsSUFBSTtvQkFBRUYsT0FBT0EsTUFBTUEsS0FBSztvQkFDcENELEtBQUtDLE1BQU1ELEdBQUc7bUJBQU93Qjs7Ozs7Ozs7Ozs7O0FBS3pDLEVBQUM7S0F2RFkzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2QmFyLnRzeD9iOTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayAgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgZ3JlZW4sIHBpbmsgfSBmcm9tICcuLi8uLi9kYXRhL2NvbG9ycydcbmltcG9ydCB7IFByb21vIH0gZnJvbSAnLi9Qcm9tbydcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJy4vU2VhcmNoQmFyJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIFxufVxuXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICAgIFxufSkgPT4ge1xuICAgIGNvbnN0IHByb21vQ29kZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6J1ByaXplUGlja3MnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcHAucHJpemVwaWNrcy5jb20vc2lnbi11cD9pbnZpdGVfY29kZT1QUi05TFdLQloxJyxcbiAgICAgICAgICAgIHByb21vOiAnUFItOUxXS0JaMScsIFxuICAgICAgICAgICAgcGljTmFtZTogXCJwcml6ZXBpY2tzLnBuZ1wiLFxuICAgICAgICAgICAgdGV4dDogJyQxMDAgQm9udXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6J1VuZGVyRG9nJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vcGxheS51bmRlcmRvZ2ZhbnRhc3kuY29tL2dvb2RsdWNrMjU1JyxcbiAgICAgICAgICAgIHByb21vOiAnR09PRExVQ0syNTUnLFxuICAgICAgICAgICAgcGljTmFtZTogXCJ1bmRlcmRvZy5qcGVnXCIsXG4gICAgICAgICAgICB0ZXh0OiAnJDI1MCBCb251cyEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiU2xlZXBlclwiLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9zbGVlcGVyLmNvbS9wcm9tby9SRi1CRU5TT040NTYnLFxuICAgICAgICAgICAgcHJvbW86ICdCRU5TT040NTYnLFxuICAgICAgICAgICAgcGljTmFtZTogXCJzbGVlcGVyLmpwZWdcIixcbiAgICAgICAgICAgIHRleHQ6ICckMTAwIEJvbnVzISdcbiAgICAgICAgfVxuICAgIF1cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBcbiAgICAgICAgICAgIGhlaWdodDogJzcwcHgnLCBcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI0YzMzQ3OVwiLCBcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsIC8vIE1ha2UgdGhlIG5hdmJhciBmaXhlZFxuICAgICAgICAgICAgdG9wOiAwLCAvLyBTdGljayBpdCB0byB0aGUgdG9wXG4gICAgICAgICAgICB6SW5kZXg6IDEwMDAgLy8gRW5zdXJlIGl0IHN0YXlzIGFib3ZlIG90aGVyIGNvbnRlbnRcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbkxlZnQ6ICczMHB4JywgY3Vyc29yOiAncG9pbnRlcicsIHRleHREZWNvcmF0aW9uOidub25lJywgY29sb3I6XCIjZmZmXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgIFNwb3J0cyBTdGF0c1xuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgLz5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblJpZ2h0OicxMHB4J319Lz5cbiAgICAgICAgICAgIHtwcm9tb0NvZGVzLm1hcCgocHJvbW8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIDxQcm9tb1xuICAgICAgICAgICAgICAgICAgICBwaWNOYW1lPXtwcm9tby5waWNOYW1lfSBuYW1lPXtwcm9tby5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgdGV4dD17cHJvbW8udGV4dH0gcHJvbW89e3Byb21vLnByb21vfVxuICAgICAgICAgICAgICAgICAgICB1cmw9e3Byb21vLnVybH0ga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJQcm9tbyIsIlNlYXJjaEJhciIsIk5hdkJhciIsInByb21vQ29kZXMiLCJuYW1lIiwidXJsIiwicHJvbW8iLCJwaWNOYW1lIiwidGV4dCIsIm5hdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsInRvcCIsInpJbmRleCIsImhyZWYiLCJoMSIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwiY3Vyc29yIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImRpdiIsIm1hcmdpblJpZ2h0IiwibWFwIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Nav/NavBar.tsx\n"));

/***/ })

});