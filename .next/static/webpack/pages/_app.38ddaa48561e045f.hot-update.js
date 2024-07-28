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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerDropDown: function() { return /* binding */ PlayerDropDown; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var _Player_NotFound__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Player/NotFound */ \"./src/components/Player/NotFound.tsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchBar */ \"./src/components/Nav/SearchBar/SearchBar.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar PlayerDropDown = function(param) {\n    var input = param.input, sport = param.sport, dropDown = param.dropDown, setDropDown = param.setDropDown;\n    _s();\n    var _useGlobalContext = (0,_Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)(), players = _useGlobalContext.players, fetchValorantPlayers = _useGlobalContext.fetchValorantPlayers, fetchLolPlayers = _useGlobalContext.fetchLolPlayers;\n    /*\n        Only need \n            -firstname\n            -lastname\n            -picId\n    */ var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), similarPlayers = _useState[0], setSimilarPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), loading = _useState1[0], setLoading = _useState1[1];\n    /*\n        Make the getAllPlayer calls to the respective league\n    */ var getSimilarPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n            var sportLower, similarPlayers, players1, players2;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        sportLower = sport.toLowerCase();\n                        similarPlayers = [];\n                        if (!(sportLower === \"wnba\")) return [\n                            3,\n                            1\n                        ];\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_4__.findSimilarLastNames)(players, input, 2);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 1:\n                        if (!(sportLower === \"valorant\")) return [\n                            3,\n                            3\n                        ];\n                        return [\n                            4,\n                            fetchValorantPlayers()\n                        ];\n                    case 2:\n                        players1 = _state.sent();\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_4__.findSimilarLastNames)(players1, input, 2);\n                        return [\n                            3,\n                            5\n                        ];\n                    case 3:\n                        if (!(sportLower === \"lol\")) return [\n                            3,\n                            5\n                        ];\n                        return [\n                            4,\n                            fetchLolPlayers()\n                        ];\n                    case 4:\n                        players2 = _state.sent();\n                        similarPlayers = (0,_Player_NotFound__WEBPACK_IMPORTED_MODULE_4__.findSimilarLastNames)(players2, input, 2);\n                        _state.label = 5;\n                    case 5:\n                        console.log(similarPlayers);\n                        setLoading(false);\n                        setSimilarPlayers(similarPlayers);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getSimilarPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        getSimilarPlayers();\n    }, [\n        input\n    ]);\n    /* To handle closing the drop down when clicking somewhere on the screen */ var handleClickOutside = function(event) {\n        var target = event.target;\n        if (!target.closest(\".inputFieldSearchBar\") && dropDown === \"players\") {\n            setDropDown(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.addEventListener(\"click\", handleClickOutside);\n        return function() {\n            document.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, [\n        dropDown\n    ]);\n    if (input.trim().length === 0) return null;\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            display: \"flex\",\n            alignItems: \"center\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_9__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 25,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n            lineNumber: 82,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, _this);\n    if (!loading && similarPlayers.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"50px\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"100%\",\n                height: \"50px\",\n                display: \"flex\",\n                alignItems: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    marginLeft: \"15px\"\n                },\n                children: [\n                    \"Can't Find \",\n                    input\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                lineNumber: 103,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n            lineNumber: 100,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            background: \"#eaeaea\",\n            position: \"absolute\",\n            top: \"100%\",\n            left: 0,\n            borderBottomLeftRadius: 10,\n            borderBottomRightRadius: 10,\n            borderLeft: \"2px solid black\",\n            borderRight: \"2px solid black\",\n            borderBottom: \"2px solid black\"\n        },\n        children: similarPlayers.map(function(player, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"100%\",\n                    height: \"50px\",\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    return (0,_SearchBar__WEBPACK_IMPORTED_MODULE_5__.searchPlayer)(\"\".concat(player.firstName, \"_\").concat(player.lastName), sport, true);\n                },\n                children: [\n                    player.picId === \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        width: \"25\",\n                        height: \"25\",\n                        viewBox: \"0 0 8 8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            fill: \"#1D1D1D\",\n                            d: \"M4 0C2.9 0 2 1.12 2 2.5S2.9 5 4 5s2-1.12 2-2.5S5.1 0 4 0M1.91 5C.85 5.05 0 5.92 0 7v1h8V7c0-1.08-.84-1.95-1.91-2c-.54.61-1.28 1-2.09 1c-.81 0-1.55-.39-2.09-1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 25\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                        alt: \"Headshot of \".concat(player.firstName, \" \").concat(player.lastName),\n                        width: 50,\n                        height: 35,\n                        style: {\n                            marginLeft: \"10px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            marginLeft: \"15px\"\n                        },\n                        children: [\n                            player.firstName,\n                            \" \",\n                            player.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                        lineNumber: 132,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n                lineNumber: 117,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\",\n        lineNumber: 109,\n        columnNumber: 9\n    }, _this);\n};\n_s(PlayerDropDown, \"Yr4lk6aR403zfLr6681hRXaumQc=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = PlayerDropDown;\nvar _c;\n$RefreshReg$(_c, \"PlayerDropDown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXYvU2VhcmNoQmFyL0Ryb3BEb3duL1BsYXllckRyb3BEb3duLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RTtBQUM3QztBQUNhO0FBQ2lCO0FBRUc7QUFDcEI7QUFTckMsSUFBTVEsaUJBQWtDO1FBQUVDLGNBQUFBLE9BQU9DLGNBQUFBLE9BQU9DLGlCQUFBQSxVQUFVQyxvQkFBQUE7O0lBQ3JFLElBQXlEUCxvQkFBQUEsZ0VBQWdCQSxJQUFsRVEsVUFBa0RSLGtCQUFsRFEsU0FBU0MsdUJBQXlDVCxrQkFBekNTLHNCQUFzQkMsa0JBQW1CVixrQkFBbkJVO0lBRXRDOzs7OztJQUtBLEdBQ0EsSUFBNENiLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUSxFQUFFLE9BQXZEYyxpQkFBcUNkLGNBQXJCZSxvQkFBcUJmO0lBQzVDLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsV0FBekNnQixVQUF1QmhCLGVBQWRpQixhQUFjakI7SUFFOUI7O0lBRUEsR0FDQSxJQUFNa0I7bUJBQW9CO2dCQUdoQkMsWUFDRkwsZ0JBTU1ILFVBSUFBOzs7O3dCQWJWTSxXQUFXO3dCQUVMRSxhQUFhWCxNQUFNWSxXQUFXO3dCQUNoQ047NkJBRURLLENBQUFBLGVBQWUsTUFBSyxHQUFwQkE7Ozs7d0JBQ0NMLGlCQUFpQlYsc0VBQW9CQSxDQUFDTyxTQUFTSixPQUFPOzs7Ozs7NkJBRWxEWSxDQUFBQSxlQUFlLFVBQVMsR0FBeEJBOzs7O3dCQUNZOzs0QkFBTVA7Ozt3QkFBaEJELFdBQVU7d0JBQ2hCRyxpQkFBaUJWLHNFQUFvQkEsQ0FBQ08sVUFBU0osT0FBTzs7Ozs7OzZCQUVsRFksQ0FBQUEsZUFBZSxLQUFJLEdBQW5CQTs7Ozt3QkFDWTs7NEJBQU1OOzs7d0JBQWhCRixXQUFVO3dCQUNoQkcsaUJBQWlCVixzRUFBb0JBLENBQUNPLFVBQVNKLE9BQU87Ozt3QkFHMURjLFFBQVFDLEdBQUcs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T0FBTzs0QkFBQ29CLFlBQVk7d0JBQU07OzRCQUFJRSxPQUFPSSxTQUFTOzRCQUFDOzRCQUFFSixPQUFPSyxRQUFROzs7Ozs7OztlQWY3REo7Ozs7Ozs7Ozs7O0FBb0IxQixFQUFDO0dBekhZbEQ7O1FBQ2dESCw0REFBZ0JBOzs7S0FEaEVHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdi9TZWFyY2hCYXIvRHJvcERvd24vUGxheWVyRHJvcERvd24udHN4PzRmZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9Db250ZXh0L3N0b3JlJztcbmltcG9ydCB7IFBsYXllclR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9Db250ZXh0L1BsYXllclR5cGVzJztcbmltcG9ydCB7IGZpbmRTaW1pbGFyTGFzdE5hbWVzIH0gZnJvbSAnLi4vLi4vLi4vUGxheWVyL05vdEZvdW5kJztcbmltcG9ydCB7IHNlYXJjaFBsYXllciB9IGZyb20gJy4uL1NlYXJjaEJhcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaW5wdXQ6IHN0cmluZ1xuICAgIHNwb3J0OiBzdHJpbmcsXG4gICAgZHJvcERvd246IHN0cmluZyxcbiAgICBzZXREcm9wRG93bjogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248c3RyaW5nPj4sXG59XG5cbmV4cG9ydCBjb25zdCBQbGF5ZXJEcm9wRG93bjogUmVhY3QuRkM8UHJvcHM+ID0gKHtpbnB1dCwgc3BvcnQsIGRyb3BEb3duLCBzZXREcm9wRG93bn0pID0+IHtcbiAgICBjb25zdCB7cGxheWVycywgZmV0Y2hWYWxvcmFudFBsYXllcnMsIGZldGNoTG9sUGxheWVyc30gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG5cbiAgICAvKlxuICAgICAgICBPbmx5IG5lZWQgXG4gICAgICAgICAgICAtZmlyc3RuYW1lXG4gICAgICAgICAgICAtbGFzdG5hbWVcbiAgICAgICAgICAgIC1waWNJZFxuICAgICovXG4gICAgY29uc3QgW3NpbWlsYXJQbGF5ZXJzLCBzZXRTaW1pbGFyUGxheWVyc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuXG4gICAgLypcbiAgICAgICAgTWFrZSB0aGUgZ2V0QWxsUGxheWVyIGNhbGxzIHRvIHRoZSByZXNwZWN0aXZlIGxlYWd1ZVxuICAgICovXG4gICAgY29uc3QgZ2V0U2ltaWxhclBsYXllcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNwb3J0TG93ZXIgPSBzcG9ydC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgc2ltaWxhclBsYXllcnM6IFBsYXllclR5cGVbXSA9IFtdO1xuXG4gICAgICAgIGlmKHNwb3J0TG93ZXIgPT09IFwid25iYVwiKXtcbiAgICAgICAgICAgIHNpbWlsYXJQbGF5ZXJzID0gZmluZFNpbWlsYXJMYXN0TmFtZXMocGxheWVycywgaW5wdXQsIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoc3BvcnRMb3dlciA9PT0gXCJ2YWxvcmFudFwiKXtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBmZXRjaFZhbG9yYW50UGxheWVycygpO1xuICAgICAgICAgICAgc2ltaWxhclBsYXllcnMgPSBmaW5kU2ltaWxhckxhc3ROYW1lcyhwbGF5ZXJzLCBpbnB1dCwgMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzcG9ydExvd2VyID09PSBcImxvbFwiKXtcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcnMgPSBhd2FpdCBmZXRjaExvbFBsYXllcnMoKTtcbiAgICAgICAgICAgIHNpbWlsYXJQbGF5ZXJzID0gZmluZFNpbWlsYXJMYXN0TmFtZXMocGxheWVycywgaW5wdXQsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coc2ltaWxhclBsYXllcnMpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRTaW1pbGFyUGxheWVycyhzaW1pbGFyUGxheWVycyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0U2ltaWxhclBsYXllcnMoKTtcbiAgICB9LCBbaW5wdXRdKVxuXG4gICAgLyogVG8gaGFuZGxlIGNsb3NpbmcgdGhlIGRyb3AgZG93biB3aGVuIGNsaWNraW5nIHNvbWV3aGVyZSBvbiB0aGUgc2NyZWVuICovXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdCgnLmlucHV0RmllbGRTZWFyY2hCYXInKSAmJiBkcm9wRG93biA9PT0gJ3BsYXllcnMnKSB7XG4gICAgICAgICAgICBzZXREcm9wRG93bignJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbZHJvcERvd25dKTtcblxuICAgIGlmKGlucHV0LnRyaW0oKS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIFxuICAgIGlmKGxvYWRpbmcpIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIG1pbkhlaWdodDonNTBweCcsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxDbGlwTG9hZGVyXG4gICAgICAgICAgICAgICAgY29sb3I9eycjMDAwJ31cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgIHNpemU9ezI1fVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGlmKCFsb2FkaW5nICYmIHNpbWlsYXJQbGF5ZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWluSGVpZ2h0Oic1MHB4JywgYmFja2dyb3VuZDonI2VhZWFlYScsIHBvc2l0aW9uOidhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6ICcxMDAlJywgbGVmdDogMCwgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMTAsIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAxMCxcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgYmxhY2snLCBcbiAgICAgICAgICAgIGJvcmRlclJpZ2h0OiAnMnB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJywgaGVpZ2h0Oic1MHB4JywgZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcidcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luTGVmdDogJzE1cHgnfX0+Q2FuJ3QgRmluZCB7aW5wdXR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmQ6JyNlYWVhZWEnLCBwb3NpdGlvbjonYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAnMTAwJScsIGxlZnQ6IDAsIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IDEwLCBib3JkZXJCb3R0b21SaWdodFJhZGl1czogMTAsXG4gICAgICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkIGJsYWNrJywgXG4gICAgICAgICAgICBib3JkZXJSaWdodDogJzJweCBzb2xpZCBibGFjaycsXG4gICAgICAgICAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgYmxhY2snLFxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtzaW1pbGFyUGxheWVycy5tYXAoKHBsYXllciwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBoZWlnaHQ6JzUwcHgnLCBkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgY3Vyc29yOidwb2ludGVyJ1xuICAgICAgICAgICAgICAgIH19IG9uQ2xpY2s9eygpID0+IHNlYXJjaFBsYXllcihgJHtwbGF5ZXIuZmlyc3ROYW1lfV8ke3BsYXllci5sYXN0TmFtZX1gLCBzcG9ydCwgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICB7cGxheWVyLnBpY0lkID09PSBcIlwiID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNVwiIHZpZXdCb3g9XCIwIDAgOCA4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiMxRDFEMURcIiBkPVwiTTQgMEMyLjkgMCAyIDEuMTIgMiAyLjVTMi45IDUgNCA1czItMS4xMiAyLTIuNVM1LjEgMCA0IDBNMS45MSA1Qy44NSA1LjA1IDAgNS45MiAwIDd2MWg4VjdjMC0xLjA4LS44NC0xLjk1LTEuOTEtMmMtLjU0LjYxLTEuMjggMS0yLjA5IDFjLS44MSAwLTEuNTUtLjM5LTIuMDktMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2Nkbi53bmJhLmNvbS9oZWFkc2hvdHMvd25iYS9sYXRlc3QvMTA0MHg3NjAvJHtwbGF5ZXIucGljSWR9LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgSGVhZHNob3Qgb2YgJHtwbGF5ZXIuZmlyc3ROYW1lfSAke3BsYXllci5sYXN0TmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH0gaGVpZ2h0PXszNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6JzEwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMTVweCd9fT57cGxheWVyLmZpcnN0TmFtZX0ge3BsYXllci5sYXN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkNsaXBMb2FkZXIiLCJ1c2VHbG9iYWxDb250ZXh0IiwiZmluZFNpbWlsYXJMYXN0TmFtZXMiLCJzZWFyY2hQbGF5ZXIiLCJQbGF5ZXJEcm9wRG93biIsImlucHV0Iiwic3BvcnQiLCJkcm9wRG93biIsInNldERyb3BEb3duIiwicGxheWVycyIsImZldGNoVmFsb3JhbnRQbGF5ZXJzIiwiZmV0Y2hMb2xQbGF5ZXJzIiwic2ltaWxhclBsYXllcnMiLCJzZXRTaW1pbGFyUGxheWVycyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZ2V0U2ltaWxhclBsYXllcnMiLCJzcG9ydExvd2VyIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyaW0iLCJsZW5ndGgiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsImJvcmRlckxlZnQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiY29sb3IiLCJzaXplIiwiYXJpYS1sYWJlbCIsImRhdGEtdGVzdGlkIiwiaGVpZ2h0IiwicCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJwbGF5ZXIiLCJpbmRleCIsImN1cnNvciIsIm9uQ2xpY2siLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBpY0lkIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Nav/SearchBar/DropDown/PlayerDropDown.tsx\n"));

/***/ })

});