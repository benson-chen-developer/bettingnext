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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    wnbaPlayers: [],\n    setWnbaPlayers: function() {\n        return [];\n    },\n    fetchWnbaPlayer: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    games: [],\n    setGames: function() {\n        return [];\n    },\n    valorantPlayers: [],\n    setValorantPlayers: function() {\n        return [];\n    },\n    fetchValorantPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    lolPlayers: [],\n    setLolPlayers: function() {\n        return [];\n    },\n    fetchLolPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    csPlayers: [],\n    setCSPlayers: function() {\n        return [];\n    },\n    fetchCSPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    })\n});\nvar GlobalContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), wnbaPlayers = _useState[0], setWnbaPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), valorantPlayers = _useState1[0], setValorantPlayers = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), lolPlayers = _useState2[0], setLolPlayers = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), csPlayers = _useState3[0], setCSPlayers = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), games = _useState4[0], setGames = _useState4[1];\n    var fetchWnbaPlayer = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(wnbaPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached wnbaPlayers\");\n                        return [\n                            2,\n                            wnbaPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached wnbaPlayers\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/wnba/players\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch wnbaPlayers players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setWnbaPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching wnbaPlayers players:\", error);\n                        return [\n                            2,\n                            [\n                                \"s\"\n                            ]\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchWnbaPlayer() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchValorantPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(valorantPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Valorant\");\n                        return [\n                            2,\n                            valorantPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Valorant\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/valorant/getAllPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Valorant players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setValorantPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Valorant players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchValorantPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchLolPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(lolPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Lol\");\n                        return [\n                            2,\n                            lolPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Lol\");\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/lol/allPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Lol players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setLolPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchLolPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchCSPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(csPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        return [\n                            2,\n                            csPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(\"http://localhost:3001\", \"/cs/players\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch CS players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setCSPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchCSPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            wnbaPlayers: wnbaPlayers,\n            setWnbaPlayers: setWnbaPlayers,\n            fetchWnbaPlayer: fetchWnbaPlayer,\n            valorantPlayers: valorantPlayers,\n            setValorantPlayers: setValorantPlayers,\n            fetchValorantPlayers: fetchValorantPlayers,\n            lolPlayers: lolPlayers,\n            setLolPlayers: setLolPlayers,\n            fetchLolPlayers: fetchLolPlayers,\n            csPlayers: csPlayers,\n            setCSPlayers: setCSPlayers,\n            fetchCSPlayers: fetchCSPlayers,\n            games: games,\n            setGames: setGames\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\Context\\\\store.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, _this);\n};\n_s(GlobalContextProvider, \"IfjdcfcnVGcO1UBT4CWQLc3UUgU=\");\n_c = GlobalContextProvider;\nvar useGlobalContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW1COztJQUFNbEMsT0FBQUEsaURBQVVBLENBQUNFO0FBQWEsRUFBRTtJQUFuRGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db250ZXh0L3N0b3JlLnRzeD84MDVlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHYW1lMiB9IGZyb20gJy4uL2Z1bmN0aW9ucy9wbGF5ZXJzJztcclxuaW1wb3J0IHsgQ1NQbGF5ZXIsIExvbFBsYXllciwgVmFsb3JhbnRQbGF5ZXIsIFdOQkFQbGF5ZXIgfSBmcm9tICcuL1BsYXllclR5cGVzJztcclxuaW1wb3J0IHthcGlVcmx9IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcblxyXG5pbnRlcmZhY2UgQ29udGV4dFByb3BzIHtcclxuICB3bmJhUGxheWVyczogV05CQVBsYXllcltdO1xyXG4gIHNldFduYmFQbGF5ZXJzOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxXTkJBUGxheWVyW10+PjtcclxuICBmZXRjaFduYmFQbGF5ZXI6ICgpID0+IFByb21pc2U8V05CQVBsYXllcltdPjtcclxuICBnYW1lczogR2FtZTJbXSxcclxuICBzZXRHYW1lczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248R2FtZTJbXT4+O1xyXG4gIHZhbG9yYW50UGxheWVyczogVmFsb3JhbnRQbGF5ZXJbXTtcclxuICBzZXRWYWxvcmFudFBsYXllcnM6ICBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxWYWxvcmFudFBsYXllcltdPj47XHJcbiAgZmV0Y2hWYWxvcmFudFBsYXllcnM6ICgpID0+IFByb21pc2U8VmFsb3JhbnRQbGF5ZXJbXT47XHJcbiAgbG9sUGxheWVyczogTG9sUGxheWVyW10sXHJcbiAgc2V0TG9sUGxheWVyczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248TG9sUGxheWVyW10+PixcclxuICBmZXRjaExvbFBsYXllcnM6ICgpID0+IFByb21pc2U8TG9sUGxheWVyW10+LFxyXG4gIGNzUGxheWVyczogQ1NQbGF5ZXJbXSxcclxuICBzZXRDU1BsYXllcnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPENTUGxheWVyW10+PixcclxuICBmZXRjaENTUGxheWVyczogKCkgPT4gUHJvbWlzZTxDU1BsYXllcltdPlxyXG59XHJcblxyXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxDb250ZXh0UHJvcHM+KHtcclxuICB3bmJhUGxheWVyczogW10sXHJcbiAgc2V0V25iYVBsYXllcnM6ICgpOiBXTkJBUGxheWVyW10gPT4gW10sXHJcbiAgZmV0Y2hXbmJhUGxheWVyOiBhc3luYyAoKTogUHJvbWlzZTxXTkJBUGxheWVyW10+ID0+IFtdLFxyXG4gIGdhbWVzOiBbXSxcclxuICBzZXRHYW1lczogKCk6IEdhbWUyW10gPT4gW10sXHJcbiAgdmFsb3JhbnRQbGF5ZXJzOiBbXSxcclxuICBzZXRWYWxvcmFudFBsYXllcnM6ICAoKTogVmFsb3JhbnRQbGF5ZXJbXSA9PiBbXSxcclxuICBmZXRjaFZhbG9yYW50UGxheWVyczogYXN5bmMgKCk6IFByb21pc2U8VmFsb3JhbnRQbGF5ZXJbXT4gPT4gW10sXHJcbiAgbG9sUGxheWVyczogW10sXHJcbiAgc2V0TG9sUGxheWVyczogICgpOiBMb2xQbGF5ZXJbXSA9PiBbXSxcclxuICBmZXRjaExvbFBsYXllcnM6IGFzeW5jICgpOiBQcm9taXNlPExvbFBsYXllcltdPiA9PiBbXSAsXHJcbiAgY3NQbGF5ZXJzOiBbXSxcclxuICBzZXRDU1BsYXllcnM6ICgpOiBDU1BsYXllcltdID0+IFtdLFxyXG4gIGZldGNoQ1NQbGF5ZXJzOiBhc3luYyAoKTogUHJvbWlzZTxDU1BsYXllcltdPiA9PiBbXSAsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3duYmFQbGF5ZXJzLCBzZXRXbmJhUGxheWVyc10gPSB1c2VTdGF0ZTxXTkJBUGxheWVyW10+KFtdKTtcclxuICBjb25zdCBbdmFsb3JhbnRQbGF5ZXJzLCBzZXRWYWxvcmFudFBsYXllcnNdID0gdXNlU3RhdGU8VmFsb3JhbnRQbGF5ZXJbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2xQbGF5ZXJzLCBzZXRMb2xQbGF5ZXJzXSA9IHVzZVN0YXRlPExvbFBsYXllcltdPihbXSk7XHJcbiAgY29uc3QgW2NzUGxheWVycywgc2V0Q1NQbGF5ZXJzXSA9IHVzZVN0YXRlPENTUGxheWVyW10+KFtdKTtcclxuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlPEdhbWUyW10+KFtdKTtcclxuXHJcblxyXG4gIGNvbnN0IGZldGNoV25iYVBsYXllciA9IGFzeW5jICgpOiBQcm9taXNlPFdOQkFQbGF5ZXJbXT4gPT4ge1xyXG4gICAgaWYod25iYVBsYXllcnMubGVuZ3RoID4gMCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGVkIHduYmFQbGF5ZXJzXCIpO1xyXG4gICAgICByZXR1cm4gd25iYVBsYXllcnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IENhY2hlZCB3bmJhUGxheWVyc1wiKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFfS93bmJhL3BsYXllcnNgKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB3bmJhUGxheWVycyBwbGF5ZXJzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0V25iYVBsYXllcnMoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgd25iYVBsYXllcnMgcGxheWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFsncyddO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaFZhbG9yYW50UGxheWVycyA9IGFzeW5jICgpOiBQcm9taXNlPFZhbG9yYW50UGxheWVyW10+ID0+IHtcclxuICAgIGlmKHZhbG9yYW50UGxheWVycy5sZW5ndGggPiAwKXtcclxuICAgICAgY29uc29sZS5sb2coXCJDYWNoZWQgVmFsb3JhbnRcIik7XHJcbiAgICAgIHJldHVybiB2YWxvcmFudFBsYXllcnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IENhY2hlZCBWYWxvcmFudFwiKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFfS92YWxvcmFudC9nZXRBbGxQbGF5ZXJzYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggVmFsb3JhbnQgcGxheWVycycpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldFZhbG9yYW50UGxheWVycyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBWYWxvcmFudCBwbGF5ZXJzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGZldGNoTG9sUGxheWVycyA9IGFzeW5jICgpOiBQcm9taXNlPExvbFBsYXllcltdPiA9PiB7XHJcbiAgICBpZihsb2xQbGF5ZXJzLmxlbmd0aCA+IDApe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhY2hlZCBMb2xcIik7XHJcbiAgICAgIHJldHVybiBsb2xQbGF5ZXJzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBDYWNoZWQgTG9sXCIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L2xvbC9hbGxQbGF5ZXJzYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggTG9sIHBsYXllcnMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRMb2xQbGF5ZXJzKGRhdGEpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIExvbCBwbGF5ZXJzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGZldGNoQ1NQbGF5ZXJzID0gYXN5bmMgKCk6IFByb21pc2U8Q1NQbGF5ZXJbXT4gPT4ge1xyXG4gICAgaWYoY3NQbGF5ZXJzLmxlbmd0aCA+IDApe1xyXG4gICAgICByZXR1cm4gY3NQbGF5ZXJzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFfS9jcy9wbGF5ZXJzYCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggQ1MgcGxheWVycycpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHNldENTUGxheWVycyhkYXRhKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBMb2wgcGxheWVyczonLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IFxyXG4gICAgICB3bmJhUGxheWVycywgc2V0V25iYVBsYXllcnMsIGZldGNoV25iYVBsYXllcixcclxuICAgICAgdmFsb3JhbnRQbGF5ZXJzLCBzZXRWYWxvcmFudFBsYXllcnMsIGZldGNoVmFsb3JhbnRQbGF5ZXJzLFxyXG4gICAgICBsb2xQbGF5ZXJzLCBzZXRMb2xQbGF5ZXJzLCBmZXRjaExvbFBsYXllcnMsXHJcbiAgICAgIGNzUGxheWVycywgc2V0Q1NQbGF5ZXJzLCBmZXRjaENTUGxheWVycyxcclxuICAgICAgZ2FtZXMsIHNldEdhbWVzLCBcclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkdsb2JhbENvbnRleHQiLCJ3bmJhUGxheWVycyIsInNldFduYmFQbGF5ZXJzIiwiZmV0Y2hXbmJhUGxheWVyIiwiZ2FtZXMiLCJzZXRHYW1lcyIsInZhbG9yYW50UGxheWVycyIsInNldFZhbG9yYW50UGxheWVycyIsImZldGNoVmFsb3JhbnRQbGF5ZXJzIiwibG9sUGxheWVycyIsInNldExvbFBsYXllcnMiLCJmZXRjaExvbFBsYXllcnMiLCJjc1BsYXllcnMiLCJzZXRDU1BsYXllcnMiLCJmZXRjaENTUGxheWVycyIsIkdsb2JhbENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEUiLCJvayIsIkVycm9yIiwianNvbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VHbG9iYWxDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Context/store.tsx\n"));

/***/ })

});