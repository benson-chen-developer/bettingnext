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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalContextProvider: function() { return /* binding */ GlobalContextProvider; },\n/* harmony export */   useGlobalContext: function() { return /* binding */ useGlobalContext; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ GlobalContextProvider,useGlobalContext auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nvar GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    players: [],\n    setPlayers: function() {\n        return [];\n    },\n    games: [],\n    setGames: function() {\n        return [];\n    },\n    valorantPlayers: [],\n    setValorantPlayers: function() {\n        return [];\n    },\n    fetchValorantPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    lolPlayers: [],\n    setLolPlayers: function() {\n        return [];\n    },\n    fetchLolPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    }),\n    csPlayers: [],\n    setCSPlayers: function() {\n        return [];\n    },\n    fetchCSPlayers: /*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            return [\n                2,\n                []\n            ];\n        });\n    })\n});\nvar GlobalContextProvider = function(param) {\n    var children = param.children;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), players = _useState[0], setPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), valorantPlayers = _useState1[0], setValorantPlayers = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), lolPlayers = _useState2[0], setLolPlayers = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), games = _useState3[0], setGames = _useState3[1];\n    var fetchPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"\".concat(process.env.NEXT_PUBLIC_LOCAL_ROUTE, \"/allPlayers\"))\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (!response.ok) {\n                            throw new Error(\"Failed to fetch players\");\n                        }\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        setPlayers(data);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Error fetching players:\", error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchValorantPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(valorantPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Valorant\");\n                        return [\n                            2,\n                            valorantPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Valorant\");\n                        return [\n                            4,\n                            fetch(\"\".concat(process.env.NEXT_PUBLIC_LOCAL_ROUTE, \"/valorant/getAllPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Valorant players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setValorantPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Valorant players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchValorantPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchLolPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(lolPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Lol\");\n                        return [\n                            2,\n                            lolPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Lol\");\n                        return [\n                            4,\n                            fetch(\"\".concat(process.env.NEXT_PUBLIC_LOCAL_ROUTE, \"/lol/allPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Lol players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setLolPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchLolPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var fetchCSPlayers = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function() {\n            var response, data, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        if (!(lolPlayers.length > 0)) return [\n                            3,\n                            1\n                        ];\n                        console.log(\"Cached Lol\");\n                        return [\n                            2,\n                            lolPlayers\n                        ];\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            4,\n                            ,\n                            5\n                        ]);\n                        console.log(\"Not Cached Lol\");\n                        return [\n                            4,\n                            fetch(\"\".concat(process.env.NEXT_PUBLIC_LOCAL_ROUTE, \"/lol/allPlayers\"))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        if (!response.ok) throw new Error(\"Failed to fetch Lol players\");\n                        return [\n                            4,\n                            response.json()\n                        ];\n                    case 3:\n                        data = _state.sent();\n                        setLolPlayers(data);\n                        return [\n                            2,\n                            data\n                        ];\n                    case 4:\n                        error = _state.sent();\n                        console.error(\"Error fetching Lol players:\", error);\n                        return [\n                            2,\n                            []\n                        ];\n                    case 5:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetchCSPlayers() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetchPlayers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n        value: {\n            players: players,\n            setPlayers: setPlayers,\n            valorantPlayers: valorantPlayers,\n            setValorantPlayers: setValorantPlayers,\n            fetchValorantPlayers: fetchValorantPlayers,\n            lolPlayers: lolPlayers,\n            setLolPlayers: setLolPlayers,\n            fetchLolPlayers: fetchLolPlayers,\n            games: games,\n            setGames: setGames\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/test/bettingnext/src/Context/store.tsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, _this);\n};\n_s(GlobalContextProvider, \"uf/PYEIXYoq+bEVQ27fYLJAQHis=\");\n_c = GlobalContextProvider;\nvar useGlobalContext = function() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalContext);\n};\n_s1(useGlobalContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eHQvc3RvcmUudHN4PzgwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2FtZTIgfSBmcm9tICcuLi9mdW5jdGlvbnMvcGxheWVycyc7XG5pbXBvcnQgeyBDU1BsYXllciwgTG9sUGxheWVyLCBWYWxvcmFudFBsYXllciwgV05CQVBsYXllciB9IGZyb20gJy4vUGxheWVyVHlwZXMnO1xuaW1wb3J0IHthcGlVcmx9IGZyb20gJy4uL2RhdGEvZGF0YSc7XG5cbmludGVyZmFjZSBDb250ZXh0UHJvcHMge1xuICBwbGF5ZXJzOiBXTkJBUGxheWVyW107XG4gIHNldFBsYXllcnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFdOQkFQbGF5ZXJbXT4+O1xuICBnYW1lczogR2FtZTJbXSxcbiAgc2V0R2FtZXM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPEdhbWUyW10+PjtcbiAgdmFsb3JhbnRQbGF5ZXJzOiBWYWxvcmFudFBsYXllcltdO1xuICBzZXRWYWxvcmFudFBsYXllcnM6ICBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxWYWxvcmFudFBsYXllcltdPj47XG4gIGZldGNoVmFsb3JhbnRQbGF5ZXJzOiAoKSA9PiBQcm9taXNlPFZhbG9yYW50UGxheWVyW10+O1xuICBsb2xQbGF5ZXJzOiBMb2xQbGF5ZXJbXSxcbiAgc2V0TG9sUGxheWVyczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248TG9sUGxheWVyW10+PixcbiAgZmV0Y2hMb2xQbGF5ZXJzOiAoKSA9PiBQcm9taXNlPExvbFBsYXllcltdPixcbiAgY3NQbGF5ZXJzOiBDU1BsYXllcltdLFxuICBzZXRDU1BsYXllcnM6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPENTUGxheWVyW10+PixcbiAgZmV0Y2hDU1BsYXllcnM6ICgpID0+IFByb21pc2U8Q1NQbGF5ZXJbXT5cbn1cblxuY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dFByb3BzPih7XG4gIHBsYXllcnM6IFtdLFxuICBzZXRQbGF5ZXJzOiAoKTogV05CQVBsYXllcltdID0+IFtdLFxuICBnYW1lczogW10sXG4gIHNldEdhbWVzOiAoKTogR2FtZTJbXSA9PiBbXSxcbiAgdmFsb3JhbnRQbGF5ZXJzOiBbXSxcbiAgc2V0VmFsb3JhbnRQbGF5ZXJzOiAgKCk6IFZhbG9yYW50UGxheWVyW10gPT4gW10sXG4gIGZldGNoVmFsb3JhbnRQbGF5ZXJzOiBhc3luYyAoKTogUHJvbWlzZTxWYWxvcmFudFBsYXllcltdPiA9PiBbXSxcbiAgbG9sUGxheWVyczogW10sXG4gIHNldExvbFBsYXllcnM6ICAoKTogTG9sUGxheWVyW10gPT4gW10sXG4gIGZldGNoTG9sUGxheWVyczogYXN5bmMgKCk6IFByb21pc2U8TG9sUGxheWVyW10+ID0+IFtdICxcbiAgY3NQbGF5ZXJzOiBbXSxcbiAgc2V0Q1NQbGF5ZXJzOiAoKTogQ1NQbGF5ZXJbXSA9PiBbXSxcbiAgZmV0Y2hDU1BsYXllcnM6IGFzeW5jICgpOiBQcm9taXNlPENTUGxheWVyW10+ID0+IFtdICxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW3BsYXllcnMsIHNldFBsYXllcnNdID0gdXNlU3RhdGU8V05CQVBsYXllcltdPihbXSk7XG4gIGNvbnN0IFt2YWxvcmFudFBsYXllcnMsIHNldFZhbG9yYW50UGxheWVyc10gPSB1c2VTdGF0ZTxWYWxvcmFudFBsYXllcltdPihbXSk7XG4gIGNvbnN0IFtsb2xQbGF5ZXJzLCBzZXRMb2xQbGF5ZXJzXSA9IHVzZVN0YXRlPExvbFBsYXllcltdPihbXSk7XG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGU8R2FtZTJbXT4oW10pO1xuXG4gIGNvbnN0IGZldGNoUGxheWVycyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vYWxsUGxheWVyc2ApO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwbGF5ZXJzJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UGxheWVycyhkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGxheWVyczonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZldGNoVmFsb3JhbnRQbGF5ZXJzID0gYXN5bmMgKCk6IFByb21pc2U8VmFsb3JhbnRQbGF5ZXJbXT4gPT4ge1xuICAgIGlmKHZhbG9yYW50UGxheWVycy5sZW5ndGggPiAwKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGVkIFZhbG9yYW50XCIpO1xuICAgICAgcmV0dXJuIHZhbG9yYW50UGxheWVycztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgQ2FjaGVkIFZhbG9yYW50XCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFfS92YWxvcmFudC9nZXRBbGxQbGF5ZXJzYCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIFZhbG9yYW50IHBsYXllcnMnKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRWYWxvcmFudFBsYXllcnMoZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgVmFsb3JhbnQgcGxheWVyczonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hMb2xQbGF5ZXJzID0gYXN5bmMgKCk6IFByb21pc2U8TG9sUGxheWVyW10+ID0+IHtcbiAgICBpZihsb2xQbGF5ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgY29uc29sZS5sb2coXCJDYWNoZWQgTG9sXCIpO1xuICAgICAgcmV0dXJuIGxvbFBsYXllcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IENhY2hlZCBMb2xcIik7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTE9DQUxfUk9VVEV9L2xvbC9hbGxQbGF5ZXJzYCk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIExvbCBwbGF5ZXJzJyk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0TG9sUGxheWVycyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBMb2wgcGxheWVyczonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hDU1BsYXllcnMgPSBhc3luYyAoKTogUHJvbWlzZTxDU1BsYXllcltdPiA9PiB7XG4gICAgaWYobG9sUGxheWVycy5sZW5ndGggPiAwKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FjaGVkIExvbFwiKTtcbiAgICAgIHJldHVybiBsb2xQbGF5ZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBDYWNoZWQgTG9sXCIpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFfS9sb2wvYWxsUGxheWVyc2ApO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBMb2wgcGxheWVycycpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldExvbFBsYXllcnMoZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgTG9sIHBsYXllcnM6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQbGF5ZXJzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IFxuICAgICAgcGxheWVycywgc2V0UGxheWVycywgXG4gICAgICB2YWxvcmFudFBsYXllcnMsIHNldFZhbG9yYW50UGxheWVycywgZmV0Y2hWYWxvcmFudFBsYXllcnMsXG4gICAgICBsb2xQbGF5ZXJzLCBzZXRMb2xQbGF5ZXJzLCBmZXRjaExvbFBsYXllcnMsXG4gICAgICBnYW1lcywgc2V0R2FtZXMsIFxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2xvYmFsQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHbG9iYWxDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChHbG9iYWxDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJHbG9iYWxDb250ZXh0IiwicGxheWVycyIsInNldFBsYXllcnMiLCJnYW1lcyIsInNldEdhbWVzIiwidmFsb3JhbnRQbGF5ZXJzIiwic2V0VmFsb3JhbnRQbGF5ZXJzIiwiZmV0Y2hWYWxvcmFudFBsYXllcnMiLCJsb2xQbGF5ZXJzIiwic2V0TG9sUGxheWVycyIsImZldGNoTG9sUGxheWVycyIsImNzUGxheWVycyIsInNldENTUGxheWVycyIsImZldGNoQ1NQbGF5ZXJzIiwiR2xvYmFsQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJmZXRjaFBsYXllcnMiLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0xPQ0FMX1JPVVRFIiwib2siLCJFcnJvciIsImpzb24iLCJjb25zb2xlIiwibGVuZ3RoIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Context/store.tsx\n"));

/***/ })

});