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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    players: [],\n    setPlayers: function() {\n        return [];\n    },\n    games: [],\n    setGames: function() {\n        return [];\n    },\n    valorantPlayers: [],\n    setValorantPlayers: function() {\n        return [];\n    },\n    fetchValorantPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    lolPlayers: [],\n    setLolPlayers: function() {\n        return [];\n    },\n    fetchLolPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    csPlayers: [],\n    setCSPlayers: function() {\n        return [];\n    },\n    fetchCSPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    })\n});\nvar GlobalContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), players = _useState[0], setPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), valorantPlayers = _useState1[0], setValorantPlayers = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), lolPlayers = _useState2[0], setLolPlayers = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), csPlayers = _useState3[0], setCSPlayers = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), games = _useState4[0], setGames = _useState4[1];\n    // const fetchPlayers = async () => {\n    //   try {\n    //     const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_ROUTE}/allPlayers`);\n    //     if (!response.ok) {\n    //       throw new Error('Failed to fetch players');\n    //     }\n    //     const data = await response.json();\n    //     setPlayers(data);\n    //   } catch (error) {\n    //     console.error('Error fetching players:', error);\n    //   }\n    // };\n    var fetchPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(league) {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            10,\n                            ,\n                            11\n                        ]);\n                        response = null;\n                        if (!(league === \"lol\")) return [\n                            3,\n                            2\n                        ];\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/lol/allPlayers\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            3,\n                            8\n                        ];\n                    case 2:\n                        if (!(league === \"cs\")) return [\n                            3,\n                            4\n                        ];\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/cs/players\"))\n                        ];\n                    case 3:\n                        response = _state.sent();\n                        return [\n                            3,\n                            8\n                        ];\n                    case 4:\n                        if (!(league === \"valorant\")) return [\n                            3,\n                            6\n                        ];\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/valorant/getAllPlayers\"))\n                        ];\n                    case 5:\n                        response = _state.sent();\n                        return [\n                            3,\n                            8\n                        ];\n                    case 6:\n                        if (!(league === \"wnba\")) return [\n                            3,\n                            8\n                        ];\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/players\"))\n                        ];\n                    case 7:\n                        response = _state.sent();\n                        _state.label = 8;\n                    case 8:\n                        if (!response.ok) {\n                            throw new Error(\"Failed to fetch players\");\n                        }\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 9:\n                        data = _state.sent();\n                        setPlayers(data);\n                        return [\n                            3,\n                            11\n                        ];\n                    case 10:\n                        error = _state.sent();\n                        console.error(\"Error fetching players:\", error);\n                        return [\n                            3,\n                            11\n                        ];\n                    case 11:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchPlayers(league) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchValorantPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(valorantPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Valorant\");\n                        return [\n                            2,\n                            valorantPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Valorant\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/valorant/getAllPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Valorant players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setValorantPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Valorant players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchValorantPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchLolPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(lolPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Lol\");\n                        return [\n                            2,\n                            lolPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Lol\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/lol/allPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Lol players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setLolPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchLolPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchCSPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(csPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        return [\n                            2,\n                            csPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/cs/players\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch CS players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setCSPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchCSPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchPlayers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            players: players,\n            setPlayers: setPlayers,\n            valorantPlayers: valorantPlayers,\n            setValorantPlayers: setValorantPlayers,\n            fetchValorantPlayers: fetchValorantPlayers,\n            lolPlayers: lolPlayers,\n            setLolPlayers: setLolPlayers,\n            fetchLolPlayers: fetchLolPlayers,\n            csPlayers: csPlayers,\n            setCSPlayers: setCSPlayers,\n            fetchCSPlayers: fetchCSPlayers,\n            games: games,\n            setGames: setGames\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/Context/store.tsx\",\n        lineNumber: 147,\n        columnNumber: 5\n    }, _this);\n};\n_s(GlobalContextProvider, \"1O+vaDPxqoHJqi98NiIUt0QbT0U=\");\n_c = GlobalContextProvider;\nvar useGlobalContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPQTs7O3dCQUNBQzt3QkFDUFEsUUFBUVIsS0FBSyxDQUFDLCtCQUErQkE7d0JBQzdDOzs7Ozs7Ozs7O1FBR047d0JBaEJNUDs7OztJQWtCTmQsZ0RBQVNBLENBQUM7UUFDUmlCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNoQixjQUFjK0IsUUFBUTtRQUFDQyxPQUFPO1lBQzdCL0IsU0FBQUE7WUFBU0MsWUFBQUE7WUFDVEcsaUJBQUFBO1lBQWlCQyxvQkFBQUE7WUFBb0JDLHNCQUFBQTtZQUNyQ0MsWUFBQUE7WUFBWUMsZUFBQUE7WUFBZUMsaUJBQUFBO1lBQzNCQyxXQUFBQTtZQUFXQyxjQUFBQTtZQUFjQyxnQkFBQUE7WUFDekJWLE9BQUFBO1lBQU9DLFVBQUFBO1FBQ1Q7a0JBQ0dXOzs7Ozs7QUFHUCxFQUFFO0dBdEhXRDtLQUFBQTtBQXdITixJQUFNbUIsbUJBQW1COztJQUFNcEMsT0FBQUEsaURBQVVBLENBQUNHO0FBQWEsRUFBRTtJQUFuRGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db250ZXh0L3N0b3JlLnRzeD84MDVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdhbWUyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3BsYXllcnMnO1xuaW1wb3J0IHsgQ1NQbGF5ZXIsIExvbFBsYXllciwgVmFsb3JhbnRQbGF5ZXIsIFdOQkFQbGF5ZXIgfSBmcm9tICcuL1BsYXllclR5cGVzJztcbmltcG9ydCB7YXBpVXJsfSBmcm9tICcuLi9kYXRhL2RhdGEnO1xuXG5pbnRlcmZhY2UgQ29udGV4dFByb3BzIHtcbiAgcGxheWVyczogV05CQVBsYXllcltdO1xuICBzZXRQbGF5ZXJzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxXTkJBUGxheWVyW10+PjtcbiAgZ2FtZXM6IEdhbWUyW10sXG4gIHNldEdhbWVzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxHYW1lMltdPj47XG4gIHZhbG9yYW50UGxheWVyczogVmFsb3JhbnRQbGF5ZXJbXTtcbiAgc2V0VmFsb3JhbnRQbGF5ZXJzOiAgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VmFsb3JhbnRQbGF5ZXJbXT4+O1xuICBmZXRjaFZhbG9yYW50UGxheWVyczogKCkgPT4gUHJvbWlzZTxWYWxvcmFudFBsYXllcltdPjtcbiAgbG9sUGxheWVyczogTG9sUGxheWVyW10sXG4gIHNldExvbFBsYXllcnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPExvbFBsYXllcltdPj4sXG4gIGZldGNoTG9sUGxheWVyczogKCkgPT4gUHJvbWlzZTxMb2xQbGF5ZXJbXT4sXG4gIGNzUGxheWVyczogQ1NQbGF5ZXJbXSxcbiAgc2V0Q1NQbGF5ZXJzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxDU1BsYXllcltdPj4sXG4gIGZldGNoQ1NQbGF5ZXJzOiAoKSA9PiBQcm9taXNlPENTUGxheWVyW10+XG59XG5cbmNvbnN0IEdsb2JhbENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHRQcm9wcz4oe1xuICBwbGF5ZXJzOiBbXSxcbiAgc2V0UGxheWVyczogKCk6IFdOQkFQbGF5ZXJbXSA9PiBbXSxcbiAgZ2FtZXM6IFtdLFxuICBzZXRHYW1lczogKCk6IEdhbWUyW10gPT4gW10sXG4gIHZhbG9yYW50UGxheWVyczogW10sXG4gIHNldFZhbG9yYW50UGxheWVyczogICgpOiBWYWxvcmFudFBsYXllcltdID0+IFtdLFxuICBmZXRjaFZhbG9yYW50UGxheWVyczogYXN5bmMgKCk6IFByb21pc2U8VmFsb3JhbnRQbGF5ZXJbXT4gPT4gW10sXG4gIGxvbFBsYXllcnM6IFtdLFxuICBzZXRMb2xQbGF5ZXJzOiAgKCk6IExvbFBsYXllcltdID0+IFtdLFxuICBmZXRjaExvbFBsYXllcnM6IGFzeW5jICgpOiBQcm9taXNlPExvbFBsYXllcltdPiA9PiBbXSAsXG4gIGNzUGxheWVyczogW10sXG4gIHNldENTUGxheWVyczogKCk6IENTUGxheWVyW10gPT4gW10sXG4gIGZldGNoQ1NQbGF5ZXJzOiBhc3luYyAoKTogUHJvbWlzZTxDU1BsYXllcltdPiA9PiBbXSAsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IFtwbGF5ZXJzLCBzZXRQbGF5ZXJzXSA9IHVzZVN0YXRlPFdOQkFQbGF5ZXJbXT4oW10pO1xuICBjb25zdCBbdmFsb3JhbnRQbGF5ZXJzLCBzZXRWYWxvcmFudFBsYXllcnNdID0gdXNlU3RhdGU8VmFsb3JhbnRQbGF5ZXJbXT4oW10pO1xuICBjb25zdCBbbG9sUGxheWVycywgc2V0TG9sUGxheWVyc10gPSB1c2VTdGF0ZTxMb2xQbGF5ZXJbXT4oW10pO1xuICBjb25zdCBbY3NQbGF5ZXJzLCBzZXRDU1BsYXllcnNdID0gdXNlU3RhdGU8Q1NQbGF5ZXJbXT4oW10pO1xuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlPEdhbWUyW10+KFtdKTtcblxuICAvLyBjb25zdCBmZXRjaFBsYXllcnMgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L2FsbFBsYXllcnNgKTtcbiAgLy8gICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcGxheWVycycpO1xuICAvLyAgICAgfVxuICAvLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gICAgIHNldFBsYXllcnMoZGF0YSk7XG4gIC8vICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBsYXllcnM6JywgZXJyb3IpO1xuICAvLyAgIH1cbiAgLy8gfTtcblxuICBjb25zdCBmZXRjaFBsYXllcnMgPSBhc3luYyAobGVhZ3VlOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gbnVsbDtcblxuICAgICAgaWYobGVhZ3VlID09PSBcImxvbFwiKXtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vbG9sL2FsbFBsYXllcnNgKTtcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmKGxlYWd1ZSA9PT0gXCJjc1wiKXtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vY3MvcGxheWVyc2ApO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihsZWFndWUgPT09IFwidmFsb3JhbnRcIil7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L3ZhbG9yYW50L2dldEFsbFBsYXllcnNgKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYobGVhZ3VlID09PSBcInduYmFcIil7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L3BsYXllcnNgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXNwb25zZSEub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcGxheWVycycpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlIS5qc29uKCk7XG4gICAgICBzZXRQbGF5ZXJzKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwbGF5ZXJzOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hWYWxvcmFudFBsYXllcnMgPSBhc3luYyAoKTogUHJvbWlzZTxWYWxvcmFudFBsYXllcltdPiA9PiB7XG4gICAgaWYodmFsb3JhbnRQbGF5ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgY29uc29sZS5sb2coXCJDYWNoZWQgVmFsb3JhbnRcIik7XG4gICAgICByZXR1cm4gdmFsb3JhbnRQbGF5ZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBDYWNoZWQgVmFsb3JhbnRcIik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L3ZhbG9yYW50L2dldEFsbFBsYXllcnNgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggVmFsb3JhbnQgcGxheWVycycpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFZhbG9yYW50UGxheWVycyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBWYWxvcmFudCBwbGF5ZXJzOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgZmV0Y2hMb2xQbGF5ZXJzID0gYXN5bmMgKCk6IFByb21pc2U8TG9sUGxheWVyW10+ID0+IHtcbiAgICBpZihsb2xQbGF5ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgY29uc29sZS5sb2coXCJDYWNoZWQgTG9sXCIpO1xuICAgICAgcmV0dXJuIGxvbFBsYXllcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IENhY2hlZCBMb2xcIik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L2xvbC9hbGxQbGF5ZXJzYCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExvbCBwbGF5ZXJzJyk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0TG9sUGxheWVycyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBMb2wgcGxheWVyczonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGZldGNoQ1NQbGF5ZXJzID0gYXN5bmMgKCk6IFByb21pc2U8Q1NQbGF5ZXJbXT4gPT4ge1xuICAgIGlmKGNzUGxheWVycy5sZW5ndGggPiAwKXtcbiAgICAgIHJldHVybiBjc1BsYXllcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L2NzL3BsYXllcnNgKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggQ1MgcGxheWVycycpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldENTUGxheWVycyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBMb2wgcGxheWVyczonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBsYXllcnMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgXG4gICAgICBwbGF5ZXJzLCBzZXRQbGF5ZXJzLCBcbiAgICAgIHZhbG9yYW50UGxheWVycywgc2V0VmFsb3JhbnRQbGF5ZXJzLCBmZXRjaFZhbG9yYW50UGxheWVycyxcbiAgICAgIGxvbFBsYXllcnMsIHNldExvbFBsYXllcnMsIGZldGNoTG9sUGxheWVycyxcbiAgICAgIGNzUGxheWVycywgc2V0Q1NQbGF5ZXJzLCBmZXRjaENTUGxheWVycyxcbiAgICAgIGdhbWVzLCBzZXRHYW1lcywgXG4gICAgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdsb2JhbENvbnRleHQgPSAoKSA9PiB1c2VDb250ZXh0KEdsb2JhbENvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkdsb2JhbENvbnRleHQiLCJwbGF5ZXJzIiwic2V0UGxheWVycyIsImdhbWVzIiwic2V0R2FtZXMiLCJ2YWxvcmFudFBsYXllcnMiLCJzZXRWYWxvcmFudFBsYXllcnMiLCJmZXRjaFZhbG9yYW50UGxheWVycyIsImxvbFBsYXllcnMiLCJzZXRMb2xQbGF5ZXJzIiwiZmV0Y2hMb2xQbGF5ZXJzIiwiY3NQbGF5ZXJzIiwic2V0Q1NQbGF5ZXJzIiwiZmV0Y2hDU1BsYXllcnMiLCJHbG9iYWxDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImZldGNoUGxheWVycyIsImxlYWd1ZSIsInJlc3BvbnNlIiwiZGF0YSIsImVycm9yIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEUiLCJvayIsIkVycm9yIiwianNvbiIsImNvbnNvbGUiLCJsZW5ndGgiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2xvYmFsQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Context/store.tsx\n"));

/***/ })

});