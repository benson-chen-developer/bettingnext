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

/***/ "./src/components/Nav/SearchBar.tsx":
/*!******************************************!*\
  !*** ./src/components/Nav/SearchBar.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchBar: function() { return /* binding */ SearchBar; },\n/* harmony export */   searchPlayer: function() { return /* binding */ searchPlayer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InputField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputField */ \"./src/components/Nav/InputField.tsx\");\n/* harmony import */ var _NamesDropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NamesDropDown */ \"./src/components/Nav/NamesDropDown.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n/* Navigates to new page while appending the new player name to the end */ var searchPlayer = function(input, league, correctName) {\n    /* Esports Players Only have firstname so remove the _ (name will be sent as faker_) */ if (input.charAt(input.length - 1) === \"_\") {\n        input = input.slice(0, -1);\n    }\n    /* Correct Name means the name is already parsed so we can just navigate\n     Name must be in jonquel_jones format\n  */ if (correctName) {\n        window.open(\"/player/\".concat(league, \"/\").concat(input.trim()), \"_blank\", \"noopener,noreferrer\");\n    } else {\n        var parsedName = input.trim(); // Remove whitespace\n        parsedName = parsedName.toLowerCase(); // Convert to lowercase\n        var nameParts = parsedName.split(\" \"); // Split the name\n        if (nameParts.length >= 2) {\n            var firstName = nameParts[0];\n            var lastName = nameParts[1];\n            parsedName = \"\".concat(firstName.charAt(0), \"_\").concat(lastName);\n        }\n        if (input.trim()) {\n            window.open(\"/player/\".concat(league, \"/\").concat(parsedName.trim()), \"_blank\", \"noopener,noreferrer\");\n        }\n    }\n};\nvar SearchBar = function(param) {\n    var widthSpacing = param.widthSpacing, marginLeftSpacing = param.marginLeftSpacing;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var _router_query = router.query, paramPlayer = _router_query.paramPlayer, paramLeague = _router_query.paramLeague;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), playerName = _useState[0], setPlayerName = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"WNBA\"), 2), sport = _useState1[0], setSport = _useState1[1];\n    var handleInputChange = function(e) {\n        setPlayerName(e.target.value);\n    };\n    var handleSubmit = function(event) {\n        event.preventDefault();\n        searchPlayer(playerName, sport);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (paramLeague) {\n            setSport(paramLeague);\n        }\n    }, [\n        paramLeague,\n        paramPlayer\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            width: widthSpacing ? widthSpacing : \"30%\",\n            marginLeft: marginLeftSpacing ? marginLeftSpacing : 30,\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                style: {\n                    display: \"flex\",\n                    background: \"#fff\",\n                    width: \"100%\",\n                    borderRadius: 10,\n                    border: \"2px solid #000\",\n                    alignItems: \"center\",\n                    justifyContent: \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"70%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                style: {\n                                    border: \"none\",\n                                    background: \"none\",\n                                    cursor: \"pointer\",\n                                    display: \"flex\",\n                                    alignItems: \"center\",\n                                    justifyContent: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    width: \"30px\",\n                                    height: \"30px\",\n                                    viewBox: \"0 0 24 24\",\n                                    fill: \"#000\",\n                                    style: {\n                                        pointerEvents: \"none\",\n                                        color: \"#888484\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputField__WEBPACK_IMPORTED_MODULE_2__.InputField, {\n                                value: playerName,\n                                handleInputChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SportBtn, {\n                        sport: sport,\n                        setSport: setSport\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NamesDropDown__WEBPACK_IMPORTED_MODULE_3__.NamesDropDown, {\n                input: playerName,\n                sport: sport\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(SearchBar, \"XXR5v0rpybRjSzN5lnGUpfxibck=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SearchBar;\nvar SportBtn = function(param) {\n    var sport = param.sport, setSport = param.setSport;\n    _s1();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isDropdownOpen = _useState[0], setIsDropdownOpen = _useState[1];\n    var allSports = [\n        \"WNBA\",\n        \"Valorant\"\n    ];\n    var toggleDropdown = function() {\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    var handleSportSelect = function(sport) {\n        setSport(sport);\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"relative\",\n            width: \"20%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleDropdown,\n                style: {\n                    width: \"95%\",\n                    height: \"90%\",\n                    borderRadius: 10,\n                    background: \"#000\",\n                    border: \"none\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    margin: 3,\n                    cursor: \"pointer\"\n                },\n                type: \"button\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        color: \"#fff\",\n                        fontSize: 12,\n                        fontWeight: \"bold\"\n                    },\n                    children: sport\n                }, void 0, false, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, _this),\n            isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"100%\",\n                    left: 0,\n                    backgroundColor: \"#fff\",\n                    border: \"1px solid #ddd\",\n                    borderRadius: 5,\n                    width: \"100%\",\n                    boxShadow: \"0 8px 16px rgba(0, 0, 0, 0.2)\",\n                    zIndex: 1\n                },\n                children: allSports.map(function(sportName, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return handleSportSelect(sportName);\n                        },\n                        style: {\n                            padding: 10,\n                            cursor: \"pointer\",\n                            backgroundColor: sport === sportName ? \"#f0f0f0\" : \"#fff\"\n                        },\n                        children: sportName\n                    }, index, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                        lineNumber: 160,\n                        columnNumber: 57\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n                lineNumber: 149,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar.tsx\",\n        lineNumber: 129,\n        columnNumber: 5\n    }, _this);\n};\n_s1(SportBtn, \"V8e9uWL0aZcxWbWsGpr6VZQUTDg=\");\n_c1 = SportBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"SearchBar\");\n$RefreshReg$(_c1, \"SportBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztZQUtKb0MsZ0NBQ0MsOERBQUMzQjtnQkFBSUMsT0FBTztvQkFDVkssVUFBVTtvQkFDVitCLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLGlCQUFpQjtvQkFDakI1QixRQUFRO29CQUNSRCxjQUFjO29CQUNkTixPQUFPO29CQUNQb0MsV0FBVztvQkFDWEMsUUFBUTtnQkFDVjswQkFDR1osVUFBVWEsR0FBRyxDQUFDLFNBQUNDLFdBQVdDO29CQUFZLHFCQUFPLDhEQUFDNUM7d0JBQzNDZ0MsU0FBUzttQ0FBTUQsa0JBQWtCWTs7d0JBQ2pDMUMsT0FBTzs0QkFBRTRDLFNBQVM7NEJBQUk3QixRQUFROzRCQUFXdUIsaUJBQWlCaEQsVUFBVW9ELFlBQVksWUFBWTt3QkFBTztrQ0FFbEdBO3VCQUptREM7Ozs7O2dCQU14RDs7Ozs7Ozs7Ozs7O0FBS1Y7SUF6RE1sQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyLnRzeD80ZWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50LCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL0lucHV0RmllbGQnO1xuaW1wb3J0IHsgTmFtZXNEcm9wRG93biB9IGZyb20gJy4vTmFtZXNEcm9wRG93bic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHdpZHRoU3BhY2luZz86IHN0cmluZyxcbiAgbWFyZ2luTGVmdFNwYWNpbmc/OiBzdHJpbmdcbn1cblxuLyogTmF2aWdhdGVzIHRvIG5ldyBwYWdlIHdoaWxlIGFwcGVuZGluZyB0aGUgbmV3IHBsYXllciBuYW1lIHRvIHRoZSBlbmQgKi9cbmV4cG9ydCBjb25zdCBzZWFyY2hQbGF5ZXIgPSAoaW5wdXQ6IHN0cmluZywgbGVhZ3VlOiBzdHJpbmcsIGNvcnJlY3ROYW1lPzogYm9vbGVhbikgPT4ge1xuICAvKiBFc3BvcnRzIFBsYXllcnMgT25seSBoYXZlIGZpcnN0bmFtZSBzbyByZW1vdmUgdGhlIF8gKG5hbWUgd2lsbCBiZSBzZW50IGFzIGZha2VyXykgKi9cbiAgaWYgKGlucHV0LmNoYXJBdChpbnB1dC5sZW5ndGggLSAxKSA9PT0gJ18nKSB7XG4gICAgaW5wdXQgPSBpbnB1dC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICAvKiBDb3JyZWN0IE5hbWUgbWVhbnMgdGhlIG5hbWUgaXMgYWxyZWFkeSBwYXJzZWQgc28gd2UgY2FuIGp1c3QgbmF2aWdhdGVcbiAgICAgTmFtZSBtdXN0IGJlIGluIGpvbnF1ZWxfam9uZXMgZm9ybWF0XG4gICovXG4gIGlmKGNvcnJlY3ROYW1lKXtcbiAgICB3aW5kb3cub3BlbihgL3BsYXllci8ke2xlYWd1ZX0vJHtpbnB1dC50cmltKCl9YCwgJ19ibGFuaycsICdub29wZW5lcixub3JlZmVycmVyJyk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHBhcnNlZE5hbWUgPSBpbnB1dC50cmltKCk7IC8vIFJlbW92ZSB3aGl0ZXNwYWNlXG4gICAgcGFyc2VkTmFtZSA9IHBhcnNlZE5hbWUudG9Mb3dlckNhc2UoKTsgLy8gQ29udmVydCB0byBsb3dlcmNhc2VcbiAgICBsZXQgbmFtZVBhcnRzID0gcGFyc2VkTmFtZS5zcGxpdCgnICcpOyAvLyBTcGxpdCB0aGUgbmFtZVxuXG4gICAgaWYgKG5hbWVQYXJ0cy5sZW5ndGggPj0gMikgeyAvLyBCYXNpY2FsbHkgdHVybiBDYWl0IENsYXJrIHRvIENfQ2xhcmtcbiAgICAgIGxldCBmaXJzdE5hbWUgPSBuYW1lUGFydHNbMF07XG4gICAgICBsZXQgbGFzdE5hbWUgPSBuYW1lUGFydHNbMV07XG4gICAgICBwYXJzZWROYW1lID0gYCR7Zmlyc3ROYW1lLmNoYXJBdCgwKX1fJHtsYXN0TmFtZX1gO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC50cmltKCkpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGAvcGxheWVyLyR7bGVhZ3VlfS8ke3BhcnNlZE5hbWUudHJpbSgpfWAsICdfYmxhbmsnLCAnbm9vcGVuZXIsbm9yZWZlcnJlcicpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHt3aWR0aFNwYWNpbmcsIG1hcmdpbkxlZnRTcGFjaW5nfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwYXJhbVBsYXllciwgcGFyYW1MZWFndWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3BsYXllck5hbWUsIHNldFBsYXllck5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtzcG9ydCwgc2V0U3BvcnRdID0gdXNlU3RhdGU8c3RyaW5nPignV05CQScpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UGxheWVyTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlYXJjaFBsYXllcihwbGF5ZXJOYW1lLCBzcG9ydCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGFyYW1MZWFndWUpIHtcbiAgICAgIHNldFNwb3J0KHBhcmFtTGVhZ3VlIGFzIHN0cmluZyk7XG4gICAgfVxuICB9LCBbcGFyYW1MZWFndWUsIHBhcmFtUGxheWVyXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCBcbiAgICAgIHdpZHRoOiB3aWR0aFNwYWNpbmcgPyB3aWR0aFNwYWNpbmcgOiAnMzAlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnRTcGFjaW5nID8gbWFyZ2luTGVmdFNwYWNpbmcgOiAzMCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfX0+XG4gICAgICBcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7IFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGJhY2tncm91bmQ6JyNmZmYnLCBcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJywgYWxpZ25JdGVtczonY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nXG4gICAgICB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCB3aWR0aDonNzAlJ319PlxuXG4gICAgICAgICAgey8qIFRoZSBNYWduaWZ5aW5nIEdsYXNzIGljb24gKi99XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsIGJhY2tncm91bmQ6ICdub25lJywgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICAgIH19PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICBmaWxsPVwiIzAwMFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ25vbmUnLCBjb2xvcjogJyM4ODg0ODQnfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIm0xOS42IDIxbC02LjMtNi4zcS0uNzUuNi0xLjcyNS45NVQ5LjUgMTZxLTIuNzI1IDAtNC42MTItMS44ODhUMyA5LjV0MS44ODgtNC42MTJUOS41IDN0NC42MTMgMS44ODhUMTYgOS41cTAgMS4xLS4zNSAyLjA3NVQxNC43IDEzLjNsNi4zIDYuM3pNOS41IDE0cTEuODc1IDAgMy4xODgtMS4zMTJUMTQgOS41dC0xLjMxMi0zLjE4N1Q5LjUgNVQ2LjMxMyA2LjMxM1Q1IDkuNXQxLjMxMyAzLjE4OFQ5LjUgMTRcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8SW5wdXRGaWVsZCB2YWx1ZT17cGxheWVyTmFtZX0gaGFuZGxlSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBMZWFndWUgRHJvcCBEb3duICovfVxuICAgICAgICA8U3BvcnRCdG4gc3BvcnQ9e3Nwb3J0fSBzZXRTcG9ydD17c2V0U3BvcnR9Lz5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPE5hbWVzRHJvcERvd24gXG4gICAgICAgIGlucHV0PXtwbGF5ZXJOYW1lfSBzcG9ydD17c3BvcnR9XG4gICAgICAvPlxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmludGVyZmFjZSBTcG9ydEJ0blByb3BzIHtcbiAgc3BvcnQ6IHN0cmluZywgXG4gIHNldFNwb3J0OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxzdHJpbmc+PlxufVxuY29uc3QgU3BvcnRCdG46IFJlYWN0LkZDPFNwb3J0QnRuUHJvcHM+ID0gKHsgc3BvcnQsIHNldFNwb3J0IH0pID0+IHtcbiAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IGFsbFNwb3J0cyA9IFtcbiAgICBcIldOQkFcIiwgXCJWYWxvcmFudFwiXG4gIF1cblxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICBzZXRJc0Ryb3Bkb3duT3BlbighaXNEcm9wZG93bk9wZW4pO1xuICB9O1xuICBjb25zdCBoYW5kbGVTcG9ydFNlbGVjdCA9IChzcG9ydDogc3RyaW5nKSA9PiB7XG4gICAgc2V0U3BvcnQoc3BvcnQpO1xuICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOicyMCUnIH19PlxuICAgICAgXG4gICAgICB7LyogICovfVxuICAgICAgPGJ1dHRvbiBcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRHJvcGRvd259IFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiAnOTUlJywgaGVpZ2h0OiBcIjkwJVwiLCBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgbWFyZ2luOiAzLCBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICB9fSB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjZmZmJywgZm9udFNpemU6IDEyLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAge3Nwb3J0fVxuICAgICAgICA8L3A+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIFRoZSBMZWFndWUgRHJvcCBEb3duICovfVxuICAgICAge2lzRHJvcGRvd25PcGVuICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogJzEwMCUnLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGJveFNoYWRvdzogJzAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgICAgICAgICB6SW5kZXg6IDFcbiAgICAgICAgfX0+XG4gICAgICAgICAge2FsbFNwb3J0cy5tYXAoKHNwb3J0TmFtZSwgaW5kZXgpID0+IHsgcmV0dXJuIDxkaXYga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3BvcnRTZWxlY3Qoc3BvcnROYW1lKX0gXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IDEwLCBjdXJzb3I6ICdwb2ludGVyJywgYmFja2dyb3VuZENvbG9yOiBzcG9ydCA9PT0gc3BvcnROYW1lID8gJyNmMGYwZjAnIDogJyNmZmYnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzcG9ydE5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW5wdXRGaWVsZCIsIk5hbWVzRHJvcERvd24iLCJ1c2VSb3V0ZXIiLCJzZWFyY2hQbGF5ZXIiLCJpbnB1dCIsImxlYWd1ZSIsImNvcnJlY3ROYW1lIiwiY2hhckF0IiwibGVuZ3RoIiwic2xpY2UiLCJ3aW5kb3ciLCJvcGVuIiwidHJpbSIsInBhcnNlZE5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVQYXJ0cyIsInNwbGl0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJTZWFyY2hCYXIiLCJ3aWR0aFNwYWNpbmciLCJtYXJnaW5MZWZ0U3BhY2luZyIsInJvdXRlciIsInF1ZXJ5IiwicGFyYW1QbGF5ZXIiLCJwYXJhbUxlYWd1ZSIsInBsYXllck5hbWUiLCJzZXRQbGF5ZXJOYW1lIiwic3BvcnQiLCJzZXRTcG9ydCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b24iLCJ0eXBlIiwiY3Vyc29yIiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInBvaW50ZXJFdmVudHMiLCJjb2xvciIsInBhdGgiLCJkIiwiU3BvcnRCdG4iLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiYWxsU3BvcnRzIiwidG9nZ2xlRHJvcGRvd24iLCJoYW5kbGVTcG9ydFNlbGVjdCIsIm9uQ2xpY2siLCJtYXJnaW4iLCJwIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidG9wIiwibGVmdCIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInpJbmRleCIsIm1hcCIsInNwb3J0TmFtZSIsImluZGV4IiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav/SearchBar.tsx\n"));

/***/ })

});