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

/***/ "./src/components/Nav/NamesDropDown.tsx":
/*!**********************************************!*\
  !*** ./src/components/Nav/NamesDropDown.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NamesDropDown: function() { return /* binding */ NamesDropDown; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Player_NotFound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Player/NotFound */ \"./src/components/Player/NotFound.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchBar */ \"./src/components/Nav/SearchBar.tsx\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar NamesDropDown = function(param) {\n    var input = param.input, sport = param.sport;\n    _s();\n    var players = (0,_Context_store__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext)().players;\n    /*\n        Only need \n            -firstname\n            -lastname\n            -url\n    */ var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), similarPlayers = _useState[0], setSimilarPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_2__.findSimilarLastNames)(players, input, 2);\n        setSimilarPlayers(similarPlayers);\n    }, [\n        input\n    ]);\n    if (input.trim() === \"\") return null;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            display: \"flex\",\n            alignItems: \"center\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_7__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 25,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, _this);\n    if (similarPlayers.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"50px\",\n                display: \"flex\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginLeft: \"15px\"\n                },\n                children: [\n                    \"Can't Find \",\n                    input\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: similarPlayers.map(function(player, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    height: \"50px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    return (0,_SearchBar__WEBPACK_IMPORTED_MODULE_5__.searchPlayer)(\"\".concat(player.firstName, \"_\").concat(player.lastName), \"WNBA\", true);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                        alt: \"Headshot of \".concat(player.firstName, \" \").concat(player.lastName),\n                        width: 50,\n                        height: 35,\n                        style: {\n                            marginLeft: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"15px\"\n                        },\n                        children: [\n                            player.firstName,\n                            \" \",\n                            player.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n                lineNumber: 76,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/NamesDropDown.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, _this);\n};\n_s(NamesDropDown, \"h9L0hBKT2ICG1hSTzlD8Z3blr3Q=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_4__.useGlobalContext\n    ];\n});\n_c = NamesDropDown;\nvar _c;\n$RefreshReg$(_c, \"NamesDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVE7Ozs7Ozs7O2VBVDdESjs7Ozs7Ozs7Ozs7QUFjMUIsRUFBQztHQTVFWWxDOztRQUNTSCw0REFBZ0JBOzs7S0FEekJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdi9OYW1lc0Ryb3BEb3duLnRzeD9iZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmaW5kU2ltaWxhckxhc3ROYW1lcyB9IGZyb20gJy4uL1BsYXllci9Ob3RGb3VuZCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vQ29udGV4dC9zdG9yZSc7XG5pbXBvcnQgeyBzZWFyY2hQbGF5ZXIgfSBmcm9tICcuL1NlYXJjaEJhcic7XG5pbXBvcnQgeyBXTkJBUGxheWVyIH0gZnJvbSAnLi4vLi4vQ29udGV4dC9QbGF5ZXJUeXBlcyc7XG5pbXBvcnQgeyBDbGlwTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGlucHV0OiBzdHJpbmdcbiAgICBzcG9ydDogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBOYW1lc0Ryb3BEb3duOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2lucHV0LCBzcG9ydH0pID0+IHtcbiAgICBjb25zdCB7cGxheWVyc30gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgICAvKlxuICAgICAgICBPbmx5IG5lZWQgXG4gICAgICAgICAgICAtZmlyc3RuYW1lXG4gICAgICAgICAgICAtbGFzdG5hbWVcbiAgICAgICAgICAgIC11cmxcbiAgICAqL1xuICAgIGNvbnN0IFtzaW1pbGFyUGxheWVycywgc2V0U2ltaWxhclBsYXllcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBzaW1pbGFyUGxheWVycyA9IGZpbmRTaW1pbGFyTGFzdE5hbWVzKHBsYXllcnMsIGlucHV0LCAyKTtcbiAgICAgICAgc2V0U2ltaWxhclBsYXllcnMoc2ltaWxhclBsYXllcnMpXG4gICAgfSwgW2lucHV0XSlcblxuICAgIGlmKGlucHV0LnRyaW0oKSA9PT0gJycpIHJldHVybiBudWxsO1xuICAgIFxuICAgIGlmKGxvYWRpbmcpIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDonNTBweCcsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDbGlwTG9hZGVyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjMDAwJ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNpemU9ezI1fVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGlmKHNpbWlsYXJQbGF5ZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWluSGVpZ2h0Oic1MHB4JywgYmFja2dyb3VuZDonI2VhZWFlYScsIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICcxMDAlJywgbGVmdDogMCwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTAsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgYmxhY2snLCBcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0Oic1MHB4JywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+Q2FuJ3QgRmluZCB7aW5wdXR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtzaW1pbGFyUGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwcHgnLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgY3Vyc29yOidwb2ludGVyJ1xuICAgICAgICAgICAgICAgIH19IG9uQ2xpY2s9eygpID0+IHNlYXJjaFBsYXllcihgJHtwbGF5ZXIuZmlyc3ROYW1lfV8ke3BsYXllci5sYXN0TmFtZX1gLCAnV05CQScsIHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2Nkbi53bmJhLmNvbS9oZWFkc2hvdHMvd25iYS9sYXRlc3QvMTA0MHg3NjAvJHtwbGF5ZXIucGljSWR9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BIZWFkc2hvdCBvZiAke3BsYXllci5maXJzdE5hbWV9ICR7cGxheWVyLmxhc3ROYW1lfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9IGhlaWdodD17MzV9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6JzEwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT57cGxheWVyLmZpcnN0TmFtZX0ge3BsYXllci5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZpbmRTaW1pbGFyTGFzdE5hbWVzIiwiSW1hZ2UiLCJ1c2VHbG9iYWxDb250ZXh0Iiwic2VhcmNoUGxheWVyIiwiQ2xpcExvYWRlciIsIk5hbWVzRHJvcERvd24iLCJpbnB1dCIsInNwb3J0IiwicGxheWVycyIsInNpbWlsYXJQbGF5ZXJzIiwic2V0U2ltaWxhclBsYXllcnMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInRyaW0iLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiY29sb3IiLCJzaXplIiwiYXJpYS1sYWJlbCIsImRhdGEtdGVzdGlkIiwibGVuZ3RoIiwiaGVpZ2h0IiwicCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImN1cnNvciIsIm9uQ2xpY2siLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNyYyIsInBpY0lkIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Nav/NamesDropDown.tsx\n"));

/***/ })

});