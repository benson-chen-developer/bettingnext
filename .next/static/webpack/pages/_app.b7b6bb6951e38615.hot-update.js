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

/***/ "./src/Context/store.tsx":
/*!*******************************!*\
  !*** ./src/Context/store.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    wnbaPlayers: [],\n    setWnbaPlayers: function() {\n        return [];\n    },\n    fetchWnbaPlayer: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    games: [],\n    setGames: function() {\n        return [];\n    },\n    valorantPlayers: [],\n    setValorantPlayers: function() {\n        return [];\n    },\n    fetchValorantPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    lolPlayers: [],\n    setLolPlayers: function() {\n        return [];\n    },\n    fetchLolPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    csPlayers: [],\n    setCSPlayers: function() {\n        return [];\n    },\n    fetchCSPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    })\n});\nvar GlobalContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), wnbaPlayers = _useState[0], setWnbaPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), valorantPlayers = _useState1[0], setValorantPlayers = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), lolPlayers = _useState2[0], setLolPlayers = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), csPlayers = _useState3[0], setCSPlayers = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), games = _useState4[0], setGames = _useState4[1];\n    var fetchWnbaPlayer = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(wnbaPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached wnbaPlayers\");\n                        return [\n                            2,\n                            wnbaPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached wnbaPlayers\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/wnba/players\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch wnbaPlayers players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setWnbaPlayers(data);\n                        console.log(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching wnbaPlayers players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchWnbaPlayer() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchValorantPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(valorantPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Valorant\");\n                        return [\n                            2,\n                            valorantPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Valorant\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/valorant/getAllPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Valorant players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setValorantPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Valorant players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchValorantPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchLolPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(lolPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Lol\");\n                        return [\n                            2,\n                            lolPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Lol\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/lol/allPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Lol players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setLolPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchLolPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchCSPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(csPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        return [\n                            2,\n                            csPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/cs/players\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch CS players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setCSPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchCSPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            wnbaPlayers: wnbaPlayers,\n            setWnbaPlayers: setWnbaPlayers,\n            fetchWnbaPlayer: fetchWnbaPlayer,\n            valorantPlayers: valorantPlayers,\n            setValorantPlayers: setValorantPlayers,\n            fetchValorantPlayers: fetchValorantPlayers,\n            lolPlayers: lolPlayers,\n            setLolPlayers: setLolPlayers,\n            fetchLolPlayers: fetchLolPlayers,\n            csPlayers: csPlayers,\n            setCSPlayers: setCSPlayers,\n            fetchCSPlayers: fetchCSPlayers,\n            games: games,\n            setGames: setGames\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\Context\\\\store.tsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, _this);\n};\n_s(GlobalContextProvider, \"IfjdcfcnVGcO1UBT4CWQLc3UUgU=\");\n_c = GlobalContextProvider;\nvar useGlobalContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGV4dC9zdG9yZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ21IO0FBc0JuSCxJQUFNSSw4QkFBZ0JILG9EQUFhQSxDQUFlO0lBQ2hESSxhQUFhLEVBQUU7SUFDZkMsZ0JBQWdCO2VBQW9CLEVBQUU7O0lBQ3RDQywrQkFBaUI7O1lBQW1DOzs7Ozs7SUFDcERDLE9BQU8sRUFBRTtJQUNUQyxVQUFVO2VBQWUsRUFBRTs7SUFDM0JDLGlCQUFpQixFQUFFO0lBQ25CQyxvQkFBcUI7ZUFBd0IsRUFBRTs7SUFDL0NDLG9DQUFzQjs7WUFBdUM7Ozs7OztJQUM3REMsWUFBWSxFQUFFO0lBQ2RDLGVBQWdCO2VBQW1CLEVBQUU7O0lBQ3JDQywrQkFBaUI7O1lBQWtDOzs7Ozs7SUFDbkRDLFdBQVcsRUFBRTtJQUNiQyxjQUFjO2VBQWtCLEVBQUU7O0lBQ2xDQyw4QkFBZ0I7O1lBQWlDOzs7Ozs7QUFDbkQ7QUFFTyxJQUFNQyx3QkFBd0I7UUFBR0MsaUJBQUFBOztJQUN0QyxJQUFzQ2pCLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBZSxFQUFFLE9BQXhERSxjQUErQkYsY0FBbEJHLGlCQUFrQkg7SUFDdEMsSUFBOENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBbUIsRUFBRSxPQUFwRU8sa0JBQXVDUCxlQUF0QlEscUJBQXNCUjtJQUM5QyxJQUFvQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFjLEVBQUUsT0FBckRVLGFBQTZCVixlQUFqQlcsZ0JBQWlCWDtJQUNwQyxJQUFrQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFhLEVBQUUsT0FBbERhLFlBQTJCYixlQUFoQmMsZUFBZ0JkO0lBQ2xDLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsRUFBRSxPQUF2Q0ssUUFBbUJMLGVBQVpNLFdBQVlOO0lBRzFCLElBQU1JO21CQUFrQjtnQkFPWmMsVUFHQUMsTUFJQ0M7Ozs7NkJBYlJsQixDQUFBQSxZQUFZbUIsTUFBTSxHQUFHLElBQXJCbkI7Ozs7d0JBQ0RvQixRQUFRQyxHQUFHLENBQUM7d0JBQ1o7OzRCQUFPckI7Ozs7Ozs7Ozt3QkFHTG9CLFFBQVFDLEdBQUcsQ0FBQzt3QkFDSzs7NEJBQU1DLE1BQU0sR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDOzs7d0JBQTlEUCxXQUFXO3dCQUNqQixJQUFJLENBQUNBLFNBQVNVLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07d0JBRXJCOzs0QkFBTVgsU0FBU1ksSUFBSTs7O3dCQUExQlgsT0FBTzt3QkFDYmhCLGVBQWVnQjt3QkFDZkcsUUFBUUMsR0FBRyxDQUFDSjt3QkFDWjs7NEJBQU9BOzs7d0JBQ0FDO3dCQUNQRSxRQUFRRixLQUFLLENBQUMsdUNBQXVDQTt3QkFDckQ7Ozs7Ozs7Ozs7UUFHTjt3QkFuQk1oQjs7OztJQW9CTixJQUFNSzttQkFBdUI7Z0JBT2pCUyxVQUdBQyxNQUdDQzs7Ozs2QkFaUmIsQ0FBQUEsZ0JBQWdCYyxNQUFNLEdBQUcsSUFBekJkOzs7O3dCQUNEZSxRQUFRQyxHQUFHLENBQUM7d0JBQ1o7OzRCQUFPaEI7Ozs7Ozs7Ozt3QkFHTGUsUUFBUUMsR0FBRyxDQUFDO3dCQUNLOzs0QkFBTUMsTUFBTSxHQUF1QyxPQUFwQ0MsdUJBQW1DLEVBQUM7Ozt3QkFBOURQLFdBQVc7d0JBQ2pCLElBQUksQ0FBQ0EsU0FBU1UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTTt3QkFFckI7OzRCQUFNWCxTQUFTWSxJQUFJOzs7d0JBQTFCWCxPQUFPO3dCQUNiWCxtQkFBbUJXO3dCQUNuQjs7NEJBQU9BOzs7d0JBQ0FDO3dCQUNQRSxRQUFRRixLQUFLLENBQUMsb0NBQW9DQTt3QkFDbEQ7Ozs7Ozs7Ozs7UUFHTjt3QkFsQk1YOzs7O0lBbUJOLElBQU1HO21CQUFrQjtnQkFPWk0sVUFHQUMsTUFHQ0M7Ozs7NkJBWlJWLENBQUFBLFdBQVdXLE1BQU0sR0FBRyxJQUFwQlg7Ozs7d0JBQ0RZLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWjs7NEJBQU9iOzs7Ozs7Ozs7d0JBR0xZLFFBQVFDLEdBQUcsQ0FBQzt3QkFDSzs7NEJBQU1DLE1BQU0sR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDOzs7d0JBQTlEUCxXQUFXO3dCQUNqQixJQUFJLENBQUNBLFNBQVNVLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07d0JBRXJCOzs0QkFBTVgsU0FBU1ksSUFBSTs7O3dCQUExQlgsT0FBTzt3QkFDYlIsY0FBY1E7d0JBQ2Q7OzRCQUFPQTs7O3dCQUNBQzt3QkFDUEUsUUFBUUYsS0FBSyxDQUFDLCtCQUErQkE7d0JBQzdDOzs7Ozs7Ozs7O1FBR047d0JBbEJNUjs7OztJQW1CTixJQUFNRzttQkFBaUI7Z0JBS1hHLFVBR0FDLE1BR0NDOzs7OzZCQVZSUCxDQUFBQSxVQUFVUSxNQUFNLEdBQUcsSUFBbkJSOzs7O3dCQUNEOzs0QkFBT0E7Ozs7Ozs7Ozt3QkFHWTs7NEJBQU1XLE1BQU0sR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDOzs7d0JBQTlEUCxXQUFXO3dCQUNqQixJQUFJLENBQUNBLFNBQVNVLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07d0JBRXJCOzs0QkFBTVgsU0FBU1ksSUFBSTs7O3dCQUExQlgsT0FBTzt3QkFDYkwsYUFBYUs7d0JBQ2I7OzRCQUFPQTs7O3dCQUNBQzt3QkFDUEUsUUFBUUYsS0FBSyxDQUFDLCtCQUErQkE7d0JBQzdDOzs7Ozs7Ozs7O1FBR047d0JBaEJNTDs7OztJQWtCTixxQkFDRSw4REFBQ2QsY0FBYzhCLFFBQVE7UUFBQ0MsT0FBTztZQUM3QjlCLGFBQUFBO1lBQWFDLGdCQUFBQTtZQUFnQkMsaUJBQUFBO1lBQzdCRyxpQkFBQUE7WUFBaUJDLG9CQUFBQTtZQUFvQkMsc0JBQUFBO1lBQ3JDQyxZQUFBQTtZQUFZQyxlQUFBQTtZQUFlQyxpQkFBQUE7WUFDM0JDLFdBQUFBO1lBQVdDLGNBQUFBO1lBQWNDLGdCQUFBQTtZQUN6QlYsT0FBQUE7WUFBT0MsVUFBQUE7UUFDVDtrQkFDR1c7Ozs7OztBQUdQLEVBQUU7R0EvRldEO0tBQUFBO0FBaUdOLElBQU1pQixtQkFBbUI7O0lBQU1sQyxPQUFBQSxpREFBVUEsQ0FBQ0U7QUFBYSxFQUFFO0lBQW5EZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbnRleHQvc3RvcmUudHN4PzgwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEdhbWUyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BsYXllcnMnO1xyXG5pbXBvcnQgeyBDU1BsYXllciwgTG9sUGxheWVyLCBWYWxvcmFudFBsYXllciwgV05CQVBsYXllciB9IGZyb20gJy4vUGxheWVyVHlwZXMnO1xyXG5pbXBvcnQge2FwaVVybH0gZnJvbSAnLi4vZGF0YS9kYXRhJztcclxuXHJcbmludGVyZmFjZSBDb250ZXh0UHJvcHMge1xyXG4gIHduYmFQbGF5ZXJzOiBXTkJBUGxheWVyW107XHJcbiAgc2V0V25iYVBsYXllcnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFdOQkFQbGF5ZXJbXT4+O1xyXG4gIGZldGNoV25iYVBsYXllcjogKCkgPT4gUHJvbWlzZTxXTkJBUGxheWVyW10+O1xyXG4gIGdhbWVzOiBHYW1lMltdLFxyXG4gIHNldEdhbWVzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxHYW1lMltdPj47XHJcbiAgdmFsb3JhbnRQbGF5ZXJzOiBWYWxvcmFudFBsYXllcltdO1xyXG4gIHNldFZhbG9yYW50UGxheWVyczogIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFZhbG9yYW50UGxheWVyW10+PjtcclxuICBmZXRjaFZhbG9yYW50UGxheWVyczogKCkgPT4gUHJvbWlzZTxWYWxvcmFudFBsYXllcltdPjtcclxuICBsb2xQbGF5ZXJzOiBMb2xQbGF5ZXJbXSxcclxuICBzZXRMb2xQbGF5ZXJzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxMb2xQbGF5ZXJbXT4+LFxyXG4gIGZldGNoTG9sUGxheWVyczogKCkgPT4gUHJvbWlzZTxMb2xQbGF5ZXJbXT4sXHJcbiAgY3NQbGF5ZXJzOiBDU1BsYXllcltdLFxyXG4gIHNldENTUGxheWVyczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Q1NQbGF5ZXJbXT4+LFxyXG4gIGZldGNoQ1NQbGF5ZXJzOiAoKSA9PiBQcm9taXNlPENTUGxheWVyW10+XHJcbn1cclxuXHJcbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRQcm9wcz4oe1xyXG4gIHduYmFQbGF5ZXJzOiBbXSxcclxuICBzZXRXbmJhUGxheWVyczogKCk6IFdOQkFQbGF5ZXJbXSA9PiBbXSxcclxuICBmZXRjaFduYmFQbGF5ZXI6IGFzeW5jICgpOiBQcm9taXNlPFdOQkFQbGF5ZXJbXT4gPT4gW10sXHJcbiAgZ2FtZXM6IFtdLFxyXG4gIHNldEdhbWVzOiAoKTogR2FtZTJbXSA9PiBbXSxcclxuICB2YWxvcmFudFBsYXllcnM6IFtdLFxyXG4gIHNldFZhbG9yYW50UGxheWVyczogICgpOiBWYWxvcmFudFBsYXllcltdID0+IFtdLFxyXG4gIGZldGNoVmFsb3JhbnRQbGF5ZXJzOiBhc3luYyAoKTogUHJvbWlzZTxWYWxvcmFudFBsYXllcltdPiA9PiBbXSxcclxuICBsb2xQbGF5ZXJzOiBbXSxcclxuICBzZXRMb2xQbGF5ZXJzOiAgKCk6IExvbFBsYXllcltdID0+IFtdLFxyXG4gIGZldGNoTG9sUGxheWVyczogYXN5bmMgKCk6IFByb21pc2U8TG9sUGxheWVyW10+ID0+IFtdICxcclxuICBjc1BsYXllcnM6IFtdLFxyXG4gIHNldENTUGxheWVyczogKCk6IENTUGxheWVyW10gPT4gW10sXHJcbiAgZmV0Y2hDU1BsYXllcnM6IGFzeW5jICgpOiBQcm9taXNlPENTUGxheWVyW10+ID0+IFtdICxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcclxuICBjb25zdCBbd25iYVBsYXllcnMsIHNldFduYmFQbGF5ZXJzXSA9IHVzZVN0YXRlPFdOQkFQbGF5ZXJbXT4oW10pO1xyXG4gIGNvbnN0IFt2YWxvcmFudFBsYXllcnMsIHNldFZhbG9yYW50UGxheWVyc10gPSB1c2VTdGF0ZTxWYWxvcmFudFBsYXllcltdPihbXSk7XHJcbiAgY29uc3QgW2xvbFBsYXllcnMsIHNldExvbFBsYXllcnNdID0gdXNlU3RhdGU8TG9sUGxheWVyW10+KFtdKTtcclxuICBjb25zdCBbY3NQbGF5ZXJzLCBzZXRDU1BsYXllcnNdID0gdXNlU3RhdGU8Q1NQbGF5ZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGU8R2FtZTJbXT4oW10pO1xyXG5cclxuXHJcbiAgY29uc3QgZmV0Y2hXbmJhUGxheWVyID0gYXN5bmMgKCk6IFByb21pc2U8V05CQVBsYXllcltdPiA9PiB7XHJcbiAgICBpZih3bmJhUGxheWVycy5sZW5ndGggPiAwKXtcclxuICAgICAgY29uc29sZS5sb2coXCJDYWNoZWQgd25iYVBsYXllcnNcIik7XHJcbiAgICAgIHJldHVybiB3bmJhUGxheWVycztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgQ2FjaGVkIHduYmFQbGF5ZXJzXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L3duYmEvcGxheWVyc2ApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHduYmFQbGF5ZXJzIHBsYXllcnMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRXbmJhUGxheWVycyhkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHduYmFQbGF5ZXJzIHBsYXllcnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgZmV0Y2hWYWxvcmFudFBsYXllcnMgPSBhc3luYyAoKTogUHJvbWlzZTxWYWxvcmFudFBsYXllcltdPiA9PiB7XHJcbiAgICBpZih2YWxvcmFudFBsYXllcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGVkIFZhbG9yYW50XCIpO1xyXG4gICAgICByZXR1cm4gdmFsb3JhbnRQbGF5ZXJzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBDYWNoZWQgVmFsb3JhbnRcIik7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vdmFsb3JhbnQvZ2V0QWxsUGxheWVyc2ApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIFZhbG9yYW50IHBsYXllcnMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRWYWxvcmFudFBsYXllcnMoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgVmFsb3JhbnQgcGxheWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaExvbFBsYXllcnMgPSBhc3luYyAoKTogUHJvbWlzZTxMb2xQbGF5ZXJbXT4gPT4ge1xyXG4gICAgaWYobG9sUGxheWVycy5sZW5ndGggPiAwKXtcclxuICAgICAgY29uc29sZS5sb2coXCJDYWNoZWQgTG9sXCIpO1xyXG4gICAgICByZXR1cm4gbG9sUGxheWVycztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgQ2FjaGVkIExvbFwiKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFfS9sb2wvYWxsUGxheWVyc2ApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExvbCBwbGF5ZXJzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0TG9sUGxheWVycyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBMb2wgcGxheWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaENTUGxheWVycyA9IGFzeW5jICgpOiBQcm9taXNlPENTUGxheWVyW10+ID0+IHtcclxuICAgIGlmKGNzUGxheWVycy5sZW5ndGggPiAwKXtcclxuICAgICAgcmV0dXJuIGNzUGxheWVycztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vY3MvcGxheWVyc2ApO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIENTIHBsYXllcnMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRDU1BsYXllcnMoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgTG9sIHBsYXllcnM6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBcclxuICAgICAgd25iYVBsYXllcnMsIHNldFduYmFQbGF5ZXJzLCBmZXRjaFduYmFQbGF5ZXIsXHJcbiAgICAgIHZhbG9yYW50UGxheWVycywgc2V0VmFsb3JhbnRQbGF5ZXJzLCBmZXRjaFZhbG9yYW50UGxheWVycyxcclxuICAgICAgbG9sUGxheWVycywgc2V0TG9sUGxheWVycywgZmV0Y2hMb2xQbGF5ZXJzLFxyXG4gICAgICBjc1BsYXllcnMsIHNldENTUGxheWVycywgZmV0Y2hDU1BsYXllcnMsXHJcbiAgICAgIGdhbWVzLCBzZXRHYW1lcywgXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlR2xvYmFsQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoR2xvYmFsQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJHbG9iYWxDb250ZXh0Iiwid25iYVBsYXllcnMiLCJzZXRXbmJhUGxheWVycyIsImZldGNoV25iYVBsYXllciIsImdhbWVzIiwic2V0R2FtZXMiLCJ2YWxvcmFudFBsYXllcnMiLCJzZXRWYWxvcmFudFBsYXllcnMiLCJmZXRjaFZhbG9yYW50UGxheWVycyIsImxvbFBsYXllcnMiLCJzZXRMb2xQbGF5ZXJzIiwiZmV0Y2hMb2xQbGF5ZXJzIiwiY3NQbGF5ZXJzIiwic2V0Q1NQbGF5ZXJzIiwiZmV0Y2hDU1BsYXllcnMiLCJHbG9iYWxDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFIiwib2siLCJFcnJvciIsImpzb24iLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Context/store.tsx\n"));

/***/ })

});