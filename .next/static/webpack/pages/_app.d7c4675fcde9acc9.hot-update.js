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

/***/ "./src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerDropDown: function() { return /* binding */ PlayerDropDown; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var _Player_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Player/NotFound */ \"./src/components/Player/NotFound.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchBar */ \"./src/components/Nav/SearchBar/SearchBar.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar PlayerDropDown = function(param) {\n    var input = param.input, sport = param.sport, dropDown = param.dropDown, setDropDown = param.setDropDown;\n    _s();\n    var _useGlobalContext = (0,_Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)(), players = _useGlobalContext.players, fetchValorantPlayers = _useGlobalContext.fetchValorantPlayers, fetchLolPlayers = _useGlobalContext.fetchLolPlayers;\n    /*\n        Only need \n            -firstname\n            -lastname\n            -picId\n    */ var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), similarPlayers = _useState[0], setSimilarPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isDropdownOpen = _useState2[0], setIsDropdownOpen = _useState2[1];\n    /*\n        Make the getAllPlayer calls to the respective league\n    */ var getSimilarPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n            var sportLower, similarPlayers, players1, players2;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        sportLower = sport.toLowerCase();\n                        similarPlayers = [];\n                        if (!(sportLower === \"wnba\")) return [\n                            3,\n                            1\n                        ];\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_4__.findSimilarLastNames)(players, input, 2);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 1:\n                        if (!(sportLower === \"valorant\")) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            fetchValorantPlayers()\n                        ];\n                    case 2:\n                        players1 = _state.sent();\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_4__.findSimilarLastNames)(players1, input, 2);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        if (!(sportLower === \"lol\")) return [\n                            3,\n                            5\n                        ];\n                        return [\n                            4,\n                            fetchLolPlayers()\n                        ];\n                    case 4:\n                        players2 = _state.sent();\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_4__.findSimilarLastNames)(players2, input, 2);\n                        _state.label = 5;\n                    case 5:\n                        setSimilarPlayers(similarPlayers);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getSimilarPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setLoading(true);\n        setIsDropdownOpen(true);\n        getSimilarPlayers();\n        setLoading(false);\n    }, [\n        input,\n        sport\n    ]);\n    /* To handle closing the drop down when clicking somewhere on the screen */ var handleClickOutside = function(event) {\n        var target = event.target;\n        if (!target.closest(\".inputFieldSearchBar\") && dropDown === \"players\") {\n            console.log(\"im here\");\n            setDropDown(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.addEventListener(\"click\", handleClickOutside);\n        return function() {\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, [\n        dropDown\n    ]);\n    if (input.trim().length === 0) return null;\n    if (loading && isDropdownOpen) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            display: \"flex\",\n            alignItems: \"center\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_9__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 25,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n            lineNumber: 84,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, _this);\n    if (loading && isDropdownOpen && similarPlayers.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"50px\",\n                display: \"flex\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginLeft: \"15px\"\n                },\n                children: [\n                    \"Can't Find \",\n                    input\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                lineNumber: 105,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n            lineNumber: 102,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: similarPlayers.map(function(player, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    height: \"50px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    return (0,_SearchBar__WEBPACK_IMPORTED_MODULE_5__.searchPlayer)(\"\".concat(player.firstName, \"_\").concat(player.lastName), sport, true);\n                },\n                children: [\n                    player.picId === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        width: \"25\",\n                        height: \"25\",\n                        viewBox: \"0 0 8 8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#1D1D1D\",\n                            d: \"M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1c-.81 0-1.55-.39-2.09-1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 25\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                        alt: \"Headshot of \".concat(player.firstName, \" \").concat(player.lastName),\n                        width: 50,\n                        height: 35,\n                        style: {\n                            marginLeft: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"15px\"\n                        },\n                        children: [\n                            player.firstName,\n                            \" \",\n                            player.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                lineNumber: 119,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n        lineNumber: 111,\n        columnNumber: 9\n    }, _this);\n};\n_s(PlayerDropDown, \"KWstuMzn7vfSxFU+McnbU5de8t4=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = PlayerDropDown;\nvar _c;\n$RefreshReg$(_c, \"PlayerDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1BsYXllckRyb3BEb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUM3QztBQUNhO0FBQ2lCO0FBRUc7QUFDcEI7QUFTckMsSUFBTVEsaUJBQWtDO1FBQUVDLGNBQUFBLE9BQU9DLGNBQUFBLE9BQU9DLGlCQUFBQSxVQUFVQyxvQkFBQUE7O0lBQ3JFLElBQXlEUCxvQkFBQUEsZ0VBQWdCQSxJQUFsRVEsVUFBa0RSLGtCQUFsRFEsU0FBU0MsdUJBQXlDVCxrQkFBekNTLHNCQUFzQkMsa0JBQW1CVixrQkFBbkJVO0lBRXRDOzs7OztJQUtBLEdBQ0EsSUFBNENiLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUSxFQUFFLE9BQXZEYyxpQkFBcUNkLGNBQXJCZSxvQkFBcUJmO0lBQzVDLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsV0FBekNnQixVQUF1QmhCLGVBQWRpQixhQUFjakI7SUFDOUIsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBVSxZQUF2RGtCLGlCQUFxQ2xCLGVBQXJCbUIsb0JBQXFCbkI7SUFFNUM7O0lBRUEsR0FDQSxJQUFNb0I7bUJBQW9CO2dCQUNoQkMsWUFDRlAsZ0JBTU1ILFVBSUFBOzs7O3dCQVhKVSxhQUFhYixNQUFNYyxXQUFXO3dCQUNoQ1I7NkJBRURPLENBQUFBLGVBQWUsTUFBSyxHQUFwQkE7Ozs7d0JBQ0NQLGlCQUFpQlYsc0VBQW9CQSxDQUFDTyxTQUFTSixPQUFPOzs7Ozs7NkJBRWxEYyxDQUFBQSxlQUFlLFVBQVMsR0FBeEJBOzs7O3dCQUNZOzs0QkFBTVQ7Ozt3QkFBaEJELFdBQVU7d0JBQ2hCRyxpQkFBaUJWLHNFQUFvQkEsQ0FBQ08sVUFBU0osT0FBTzs7Ozs7OzZCQUVsRGMsQ0FBQUEsZUFBZSxLQUFJLEdBQW5CQTs7Ozt3QkFDWTs7NEJBQU1SOzs7d0JBQWhCRixX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QW1CLE9BQWhCSixPQUFPSyxRQUFRO3dCQUN2RDFCLE9BQU87d0JBQUlpQixRQUFRO3dCQUNuQmxCLE9BQU87NEJBQUNvQixZQUFXO3dCQUFNOzs7Ozs7a0NBR2pDLDhEQUFDRDt3QkFBRW5CLE9BQU87NEJBQUNvQixZQUFZO3dCQUFNOzs0QkFBSUUsT0FBT0ksU0FBUzs0QkFBQzs0QkFBRUosT0FBT0ssUUFBUTs7Ozs7Ozs7ZUFmN0RKOzs7Ozs7Ozs7OztBQW9CMUIsRUFBQztHQTNIWXBEOztRQUNnREgsNERBQWdCQTs7O0tBRGhFRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1BsYXllckRyb3BEb3duLnRzeD80ZmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vQ29udGV4dC9zdG9yZSc7XG5pbXBvcnQgeyBQbGF5ZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vQ29udGV4dC9QbGF5ZXJUeXBlcyc7XG5pbXBvcnQgeyBmaW5kU2ltaWxhckxhc3ROYW1lcyB9IGZyb20gJy4uLy4uLy4uL1BsYXllci9Ob3RGb3VuZCc7XG5pbXBvcnQgeyBzZWFyY2hQbGF5ZXIgfSBmcm9tICcuLi9TZWFyY2hCYXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGlucHV0OiBzdHJpbmdcbiAgICBzcG9ydDogc3RyaW5nLFxuICAgIGRyb3BEb3duOiBzdHJpbmcsXG4gICAgc2V0RHJvcERvd246IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPHN0cmluZz4+LFxufVxuXG5leHBvcnQgY29uc3QgUGxheWVyRHJvcERvd246IFJlYWN0LkZDPFByb3BzPiA9ICh7aW5wdXQsIHNwb3J0LCBkcm9wRG93biwgc2V0RHJvcERvd259KSA9PiB7XG4gICAgY29uc3Qge3BsYXllcnMsIGZldGNoVmFsb3JhbnRQbGF5ZXJzLCBmZXRjaExvbFBsYXllcnN9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuXG4gICAgLypcbiAgICAgICAgT25seSBuZWVkIFxuICAgICAgICAgICAgLWZpcnN0bmFtZVxuICAgICAgICAgICAgLWxhc3RuYW1lXG4gICAgICAgICAgICAtcGljSWRcbiAgICAqL1xuICAgIGNvbnN0IFtzaW1pbGFyUGxheWVycywgc2V0U2ltaWxhclBsYXllcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIC8qXG4gICAgICAgIE1ha2UgdGhlIGdldEFsbFBsYXllciBjYWxscyB0byB0aGUgcmVzcGVjdGl2ZSBsZWFndWVcbiAgICAqL1xuICAgIGNvbnN0IGdldFNpbWlsYXJQbGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBzcG9ydExvd2VyID0gc3BvcnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHNpbWlsYXJQbGF5ZXJzOiBQbGF5ZXJUeXBlW10gPSBbXTtcblxuICAgICAgICBpZihzcG9ydExvd2VyID09PSBcInduYmFcIil7XG4gICAgICAgICAgICBzaW1pbGFyUGxheWVycyA9IGZpbmRTaW1pbGFyTGFzdE5hbWVzKHBsYXllcnMsIGlucHV0LCAyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHNwb3J0TG93ZXIgPT09IFwidmFsb3JhbnRcIil7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgZmV0Y2hWYWxvcmFudFBsYXllcnMoKTtcbiAgICAgICAgICAgIHNpbWlsYXJQbGF5ZXJzID0gZmluZFNpbWlsYXJMYXN0TmFtZXMocGxheWVycywgaW5wdXQsIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc3BvcnRMb3dlciA9PT0gXCJsb2xcIil7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgZmV0Y2hMb2xQbGF5ZXJzKCk7XG4gICAgICAgICAgICBzaW1pbGFyUGxheWVycyA9IGZpbmRTaW1pbGFyTGFzdE5hbWVzKHBsYXllcnMsIGlucHV0LCAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNpbWlsYXJQbGF5ZXJzKHNpbWlsYXJQbGF5ZXJzKTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKHRydWUpO1xuICAgICAgICBcbiAgICAgICAgZ2V0U2ltaWxhclBsYXllcnMoKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgW2lucHV0LCBzcG9ydF0pXG5cbiAgICAvKiBUbyBoYW5kbGUgY2xvc2luZyB0aGUgZHJvcCBkb3duIHdoZW4gY2xpY2tpbmcgc29tZXdoZXJlIG9uIHRoZSBzY3JlZW4gKi9cbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KCcuaW5wdXRGaWVsZFNlYXJjaEJhcicpICYmIGRyb3BEb3duID09PSAncGxheWVycycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW0gaGVyZVwiKVxuICAgICAgICAgICAgc2V0RHJvcERvd24oJycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH07XG4gICAgfSwgW2Ryb3BEb3duXSk7XG5cbiAgICBpZihpbnB1dC50cmltKCkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBcbiAgICBpZihsb2FkaW5nICYmIGlzRHJvcGRvd25PcGVuKSByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtaW5IZWlnaHQ6JzUwcHgnLCBiYWNrZ3JvdW5kOicjZWFlYWVhJywgcG9zaXRpb246J2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogJzEwMCUnLCBsZWZ0OiAwLCBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAxMCwgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDEwLFxuICAgICAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCBibGFjaycsIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLFxuICAgICAgICAgICAgYm9yZGVyUmlnaHQ6ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICAgICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgfX0+XG4gICAgICAgICAgICA8Q2xpcExvYWRlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsnIzAwMCd9XG4gICAgICAgICAgICAgICAgbG9hZGluZz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzaXplPXsyNX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTG9hZGluZyBTcGlubmVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImxvYWRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBpZihsb2FkaW5nICYmIGlzRHJvcGRvd25PcGVuICYmIHNpbWlsYXJQbGF5ZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWluSGVpZ2h0Oic1MHB4JywgYmFja2dyb3VuZDonI2VhZWFlYScsIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICcxMDAlJywgbGVmdDogMCwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTAsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgYmxhY2snLCBcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0Oic1MHB4JywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+Q2FuJ3QgRmluZCB7aW5wdXR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtzaW1pbGFyUGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwcHgnLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgY3Vyc29yOidwb2ludGVyJ1xuICAgICAgICAgICAgICAgIH19IG9uQ2xpY2s9eygpID0+IHNlYXJjaFBsYXllcihgJHtwbGF5ZXIuZmlyc3ROYW1lfV8ke3BsYXllci5sYXN0TmFtZX1gLCBzcG9ydCwgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICB7cGxheWVyLnBpY0lkID09PSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgOCA4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMxRDFEMURcIiBkPVwiTTQgMEMyLjkgMCAyIDEuMTIgMiAyLjVTMi45IDUgNCA1czItMS4xMiAyLTIuNVM1LjEgMCA0IDBNMS45MSA1Qy44NSA1LjA1IDAgNS45MiAwIDd2MWg4VjdjMC0xLjA4LS44NC0xLjk1LTEuOTEtMmMtLjU0LjYxLTEuMjggMS0yLjA5IDFjLS44MSAwLTEuNTUtLjM5LTIuMDktMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2Nkbi53bmJhLmNvbS9oZWFkc2hvdHMvd25iYS9sYXRlc3QvMTA0MHg3NjAvJHtwbGF5ZXIucGljSWR9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSGVhZHNob3Qgb2YgJHtwbGF5ZXIuZmlyc3ROYW1lfSAke3BsYXllci5sYXN0TmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0gaGVpZ2h0PXszNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6JzEwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT57cGxheWVyLmZpcnN0TmFtZX0ge3BsYXllci5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkNsaXBMb2FkZXIiLCJ1c2VHbG9iYWxDb250ZXh0IiwiZmluZFNpbWlsYXJMYXN0TmFtZXMiLCJzZWFyY2hQbGF5ZXIiLCJQbGF5ZXJEcm9wRG93biIsImlucHV0Iiwic3BvcnQiLCJkcm9wRG93biIsInNldERyb3BEb3duIiwicGxheWVycyIsImZldGNoVmFsb3JhbnRQbGF5ZXJzIiwiZmV0Y2hMb2xQbGF5ZXJzIiwic2ltaWxhclBsYXllcnMiLCJzZXRTaW1pbGFyUGxheWVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsImdldFNpbWlsYXJQbGF5ZXJzIiwic3BvcnRMb3dlciIsInRvTG93ZXJDYXNlIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmltIiwibGVuZ3RoIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsIm1pbkhlaWdodCIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJib3JkZXJMZWZ0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwic2l6ZSIsImFyaWEtbGFiZWwiLCJkYXRhLXRlc3RpZCIsImhlaWdodCIsInAiLCJtYXJnaW5MZWZ0IiwibWFwIiwicGxheWVyIiwiaW5kZXgiLCJjdXJzb3IiLCJvbkNsaWNrIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwaWNJZCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJmaWxsIiwiZCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\n"));

/***/ })

});