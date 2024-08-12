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

/***/ "./src/components/Player/NotFound.tsx":
/*!********************************************!*\
  !*** ./src/components/Player/NotFound.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotFound: function() { return /* binding */ NotFound; },\n/* harmony export */   findSimilarLastNames: function() { return /* binding */ findSimilarLastNames; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_object_destructuring_empty */ \"./node_modules/@swc/helpers/esm/_object_destructuring_empty.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n/*\r\n    Don't worry what this does just know it is used to find similar names to the one\r\n    the user searched\r\n*/ var levenshteinDistance = function(a, b) {\n    var matrix = [];\n    for(var i = 0; i <= b.length; i++){\n        matrix[i] = [\n            i\n        ];\n    }\n    for(var j = 0; j <= a.length; j++){\n        matrix[0][j] = j;\n    }\n    for(var i1 = 1; i1 <= b.length; i1++){\n        for(var j1 = 1; j1 <= a.length; j1++){\n            if (b[i1 - 1] === a[j1 - 1]) {\n                matrix[i1][j1] = matrix[i1 - 1][j1 - 1];\n            } else {\n                matrix[i1][j1] = Math.min(matrix[i1 - 1][j1 - 1] + 1, matrix[i1][j1 - 1] + 1, matrix[i1 - 1][j1] + 1 // deletion\n                );\n            }\n        }\n    }\n    return matrix[b.length][a.length];\n};\n/*\r\n    Returns all the player names that are similar to the one we searched\r\n*/ var findSimilarLastNames = function(players, input, maxAllowedDistance) {\n    var trimmedInput = input.trim();\n    var firstName = \"\";\n    var lastName = \"\";\n    var foundPlayers = new Set();\n    /* This means if the user has used a space while typing */ if (trimmedInput.split(\" \").length > 1) {\n        firstName = trimmedInput.split(\" \")[0];\n        lastName = trimmedInput.split(\" \")[1];\n        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n        try {\n            for(var _iterator = players[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                var player = _step.value;\n                if (levenshteinDistance(player.firstName, firstName) <= maxAllowedDistance) {\n                    foundPlayers.add(player);\n                }\n                if (foundPlayers.size >= 5) break;\n                if (levenshteinDistance(player.lastName, lastName) <= maxAllowedDistance) {\n                    foundPlayers.add(player);\n                }\n                if (foundPlayers.size >= 5) break;\n            }\n        } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                    _iterator[\"return\"]();\n                }\n            } finally{\n                if (_didIteratorError) {\n                    throw _iteratorError;\n                }\n            }\n        }\n    } else {\n        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;\n        try {\n            for(var _iterator1 = players[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){\n                var player1 = _step1.value;\n                if (levenshteinDistance(player1.firstName, trimmedInput) <= maxAllowedDistance) {\n                    foundPlayers.add(player1);\n                }\n                if (foundPlayers.size >= 5) break;\n                if (levenshteinDistance(player1.lastName, trimmedInput) <= maxAllowedDistance) {\n                    foundPlayers.add(player1);\n                }\n                if (foundPlayers.size >= 5) break;\n            }\n        } catch (err) {\n            _didIteratorError1 = true;\n            _iteratorError1 = err;\n        } finally{\n            try {\n                if (!_iteratorNormalCompletion1 && _iterator1[\"return\"] != null) {\n                    _iterator1[\"return\"]();\n                }\n            } finally{\n                if (_didIteratorError1) {\n                    throw _iteratorError1;\n                }\n            }\n        }\n        firstName = trimmedInput;\n    }\n    // console.log(foundPlayers)\n    return Array.from(foundPlayers);\n};\n/*\r\n    We only need the paramPlayer name\r\n\r\n    1) Make a call depending on league to get all the players of that league\r\n    2) The players will be PlayerType so we can just try to find their names with findSimilarLastNames\r\n    3) Anyone returned is displayed\r\n*/ var NotFound = function(param) {\n    var ref = (0,_swc_helpers_object_destructuring_empty__WEBPACK_IMPORTED_MODULE_6__._)(param);\n    _s();\n    var _useGlobalContext = (0,_Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)(), fetchWnbaPlayer = _useGlobalContext.fetchWnbaPlayer, fetchLolPlayers = _useGlobalContext.fetchLolPlayers, fetchValorantPlayers = _useGlobalContext.fetchValorantPlayers, fetchCSPlayers = _useGlobalContext.fetchCSPlayers;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var _router_query = router.query, paramPlayer = _router_query.paramPlayer, paramLeague = _router_query.paramLeague;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = _useState[0], setAllPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), 2), isLoading = _useState1[0], setIsLoading = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), similarPlayers = _useState2[0], setSimilarPlayers = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var players = [];\n        var fetchPlayers = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            if (!(paramLeague[0].toLowerCase() === \"lol\")) return [\n                                3,\n                                2\n                            ];\n                            return [\n                                4,\n                                fetchLolPlayers()\n                            ];\n                        case 1:\n                            players = _state.sent();\n                            return [\n                                3,\n                                8\n                            ];\n                        case 2:\n                            if (!(paramLeague[0].toLowerCase() === \"valorant\")) return [\n                                3,\n                                4\n                            ];\n                            return [\n                                4,\n                                fetchValorantPlayers()\n                            ];\n                        case 3:\n                            players = _state.sent();\n                            return [\n                                3,\n                                8\n                            ];\n                        case 4:\n                            if (!(paramLeague[0].toLowerCase() === \"wnba\")) return [\n                                3,\n                                6\n                            ];\n                            return [\n                                4,\n                                fetchWnbaPlayer()\n                            ];\n                        case 5:\n                            players = _state.sent();\n                            return [\n                                3,\n                                8\n                            ];\n                        case 6:\n                            if (!(paramLeague[0].toLowerCase() === \"cs\")) return [\n                                3,\n                                8\n                            ];\n                            return [\n                                4,\n                                fetchCSPlayers()\n                            ];\n                        case 7:\n                            players = _state.sent();\n                            _state.label = 8;\n                        case 8:\n                            setAllPlayers(players);\n                            setSimilarPlayers(findSimilarLastNames(players, paramPlayer, 2));\n                            setIsLoading(false);\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchPlayers() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (paramLeague) fetchPlayers();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_10__.ClipLoader, {\n        color: \"#000\",\n        loading: true,\n        size: 150,\n        \"aria-label\": \"Loading Spinner\",\n        \"data-testid\": \"loader\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n        lineNumber: 127,\n        columnNumber: 26\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"100vh\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        children: similarPlayers.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {},\n                children: \"This Player Doesn't Exist or Has No Games\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n                lineNumber: 142,\n                columnNumber: 21\n            }, _this)\n        }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                alignItems: \"center\",\n                flexDirection: \"column\",\n                width: \"100%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Did You Mean\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n                    lineNumber: 146,\n                    columnNumber: 21\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        display: \"flex\"\n                    },\n                    children: similarPlayers.map(function(player, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayerBox, {\n                            player: player\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 21\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n            lineNumber: 145,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n        lineNumber: 136,\n        columnNumber: 9\n    }, _this);\n};\n_s(NotFound, \"ZDenP8g2fJBoKQE9zoyOpVPgS3E=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = NotFound;\nvar PlayerBox = function(param) {\n    var player = param.player;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/player/WNBA/\".concat(player.firstName, \"_\").concat(player.lastName),\n        style: {\n            textDecoration: \"none\",\n            color: \"black\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: \"200px\",\n                height: \"100px\",\n                border: \"2px solid #1E1E1E\",\n                borderRadius: 20,\n                display: \"flex\",\n                alignItems: \"center\",\n                margin: \"20px\",\n                cursor: \"pointer\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                    style: {\n                        width: \"50%\",\n                        height: \"75%\"\n                    },\n                    alt: \"Pic of \".concat(player.firstName, \" \").concat(player.lastName),\n                    width: 90,\n                    height: 75\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n                    lineNumber: 171,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        player.firstName,\n                        \" \",\n                        player.lastName\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n                    lineNumber: 176,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n            lineNumber: 166,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Player\\\\NotFound.tsx\",\n        lineNumber: 165,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = PlayerBox;\nvar _c, _c1;\n$RefreshReg$(_c, \"NotFound\");\n$RefreshReg$(_c1, \"PlayerBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7R0FoRVkvQjs7UUFDd0UvQiw0REFBZ0JBO1FBQ2xGRSxrREFBU0E7OztLQUZmNkI7QUFzRWIsSUFBTWdDLFlBQXNDO1FBQUdyQyxlQUFBQTtJQUMzQyxxQkFDSSw4REFBQ3pCLGtEQUFJQTtRQUFDK0QsTUFBTSxnQkFBb0N0QyxPQUFwQkEsT0FBT0wsU0FBUyxFQUFDLEtBQW1CLE9BQWhCSyxPQUFPSixRQUFRO1FBQUkrQixPQUFPO1lBQUNZLGdCQUFnQjtZQUFRakIsT0FBTTtRQUFPO2tCQUM1Ryw0RUFBQ0k7WUFBSUMsT0FBTztnQkFDUkMsT0FBTTtnQkFBU1ksUUFBTztnQkFBU0MsUUFBTztnQkFBcUJDLGNBQWE7Z0JBQ3hFVixTQUFRO2dCQUFRRCxZQUFXO2dCQUFVWSxRQUFPO2dCQUM1Q0MsUUFBTztZQUNYOzs4QkFDSSw4REFBQ3ZFLG1EQUFLQTtvQkFDRndFLEtBQUssdURBQW9FLE9BQWI3QyxPQUFPOEMsS0FBSyxFQUFDO29CQUN6RW5CLE9BQU87d0JBQUNDLE9BQU87d0JBQU9ZLFFBQVE7b0JBQUs7b0JBQ25DTyxLQUFLLFVBQThCL0MsT0FBcEJBLE9BQU9MLFNBQVMsRUFBQyxLQUFtQixPQUFoQkssT0FBT0osUUFBUTtvQkFBSWdDLE9BQU87b0JBQUlZLFFBQVE7Ozs7Ozs4QkFFN0UsOERBQUNROzt3QkFBR2hELE9BQU9MLFNBQVM7d0JBQUM7d0JBQUVLLE9BQU9KLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RDtNQWpCTXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9Ob3RGb3VuZC50c3g/NzNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL0NvbnRleHQvc3RvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDbGlwTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFBsYXllclR5cGUsIFdOQkFQbGF5ZXIgfSBmcm9tICcuLi8uLi9Db250ZXh0L1BsYXllclR5cGVzJztcclxuXHJcbmludGVyZmFjZSBQcm9wc3tcclxufVxyXG5cclxuLypcclxuICAgIERvbid0IHdvcnJ5IHdoYXQgdGhpcyBkb2VzIGp1c3Qga25vdyBpdCBpcyB1c2VkIHRvIGZpbmQgc2ltaWxhciBuYW1lcyB0byB0aGUgb25lXHJcbiAgICB0aGUgdXNlciBzZWFyY2hlZFxyXG4qL1xyXG5jb25zdCBsZXZlbnNodGVpbkRpc3RhbmNlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyID0+IHtcclxuICAgIGNvbnN0IG1hdHJpeCA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtYXRyaXhbaV0gPSBbaV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIG1hdHJpeFswXVtqXSA9IGo7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAoYltpIC0gMV0gPT09IGFbaiAtIDFdKSB7XHJcbiAgICAgICAgICBtYXRyaXhbaV1bal0gPSBtYXRyaXhbaSAtIDFdW2ogLSAxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgIG1hdHJpeFtpIC0gMV1baiAtIDFdICsgMSwgLy8gc3Vic3RpdHV0aW9uXHJcbiAgICAgICAgICAgIG1hdHJpeFtpXVtqIC0gMV0gKyAxLCAvLyBpbnNlcnRpb25cclxuICAgICAgICAgICAgbWF0cml4W2kgLSAxXVtqXSArIDEgLy8gZGVsZXRpb25cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0cml4W2IubGVuZ3RoXVthLmxlbmd0aF07XHJcbn07XHJcblxyXG4vKlxyXG4gICAgUmV0dXJucyBhbGwgdGhlIHBsYXllciBuYW1lcyB0aGF0IGFyZSBzaW1pbGFyIHRvIHRoZSBvbmUgd2Ugc2VhcmNoZWRcclxuKi9cclxuZXhwb3J0IGNvbnN0IGZpbmRTaW1pbGFyTGFzdE5hbWVzID0gKHBsYXllcnM6IFBsYXllclR5cGVbXSwgaW5wdXQ6IHN0cmluZywgbWF4QWxsb3dlZERpc3RhbmNlOiBudW1iZXIpOiBhbnlbXSA9PiB7XHJcbiAgICBjb25zdCB0cmltbWVkSW5wdXQgPSBpbnB1dC50cmltKCk7XHJcblxyXG4gICAgbGV0IGZpcnN0TmFtZSA9ICcnOyBsZXQgbGFzdE5hbWUgPSAnJzsgXHJcbiAgICBsZXQgZm91bmRQbGF5ZXJzID0gbmV3IFNldDxhbnk+KCk7XHJcblxyXG4gICAgLyogVGhpcyBtZWFucyBpZiB0aGUgdXNlciBoYXMgdXNlZCBhIHNwYWNlIHdoaWxlIHR5cGluZyAqL1xyXG4gICAgaWYgKHRyaW1tZWRJbnB1dC5zcGxpdCgnICcpLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBmaXJzdE5hbWUgPSB0cmltbWVkSW5wdXQuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICBsYXN0TmFtZSA9IHRyaW1tZWRJbnB1dC5zcGxpdCgnICcpWzFdO1xyXG4gICAgXHJcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xyXG4gICAgICAgICAgICBpZiAobGV2ZW5zaHRlaW5EaXN0YW5jZShwbGF5ZXIuZmlyc3ROYW1lLCBmaXJzdE5hbWUpIDw9IG1heEFsbG93ZWREaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRQbGF5ZXJzLmFkZChwbGF5ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3VuZFBsYXllcnMuc2l6ZSA+PSA1KSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGlmIChsZXZlbnNodGVpbkRpc3RhbmNlKHBsYXllci5sYXN0TmFtZSwgbGFzdE5hbWUpIDw9IG1heEFsbG93ZWREaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgZm91bmRQbGF5ZXJzLmFkZChwbGF5ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3VuZFBsYXllcnMuc2l6ZSA+PSA1KSBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcclxuICAgICAgICAgICAgaWYgKGxldmVuc2h0ZWluRGlzdGFuY2UocGxheWVyLmZpcnN0TmFtZSwgdHJpbW1lZElucHV0KSA8PSBtYXhBbGxvd2VkRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kUGxheWVycy5hZGQocGxheWVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZm91bmRQbGF5ZXJzLnNpemUgPj0gNSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBpZiAobGV2ZW5zaHRlaW5EaXN0YW5jZShwbGF5ZXIubGFzdE5hbWUsIHRyaW1tZWRJbnB1dCkgPD0gbWF4QWxsb3dlZERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZFBsYXllcnMuYWRkKHBsYXllcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZvdW5kUGxheWVycy5zaXplID49IDUpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaXJzdE5hbWUgPSB0cmltbWVkSW5wdXQ7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb3VuZFBsYXllcnMpXHJcbiAgICBcclxuICAgIHJldHVybiBBcnJheS5mcm9tKGZvdW5kUGxheWVycyk7XHJcbn07XHJcblxyXG4vKlxyXG4gICAgV2Ugb25seSBuZWVkIHRoZSBwYXJhbVBsYXllciBuYW1lXHJcblxyXG4gICAgMSkgTWFrZSBhIGNhbGwgZGVwZW5kaW5nIG9uIGxlYWd1ZSB0byBnZXQgYWxsIHRoZSBwbGF5ZXJzIG9mIHRoYXQgbGVhZ3VlXHJcbiAgICAyKSBUaGUgcGxheWVycyB3aWxsIGJlIFBsYXllclR5cGUgc28gd2UgY2FuIGp1c3QgdHJ5IHRvIGZpbmQgdGhlaXIgbmFtZXMgd2l0aCBmaW5kU2ltaWxhckxhc3ROYW1lc1xyXG4gICAgMykgQW55b25lIHJldHVybmVkIGlzIGRpc3BsYXllZFxyXG4qL1xyXG5leHBvcnQgY29uc3QgTm90Rm91bmQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7fSkgPT4ge1xyXG4gICAgY29uc3Qge2ZldGNoV25iYVBsYXllciwgZmV0Y2hMb2xQbGF5ZXJzLCBmZXRjaFZhbG9yYW50UGxheWVycywgZmV0Y2hDU1BsYXllcnN9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHBhcmFtUGxheWVyLCBwYXJhbUxlYWd1ZSB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgW2FsbFBsYXllcnMsIHNldEFsbFBsYXllcnNdID0gdXNlU3RhdGU8UGxheWVyVHlwZVtdPihbXSk7XHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gICAgY29uc3QgW3NpbWlsYXJQbGF5ZXJzLCBzZXRTaW1pbGFyUGxheWVyc10gPSB1c2VTdGF0ZTxXTkJBUGxheWVyW10+KFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXJzOiBQbGF5ZXJUeXBlW10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBmZXRjaFBsYXllcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbUxlYWd1ZSFbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2xvbCcpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllcnMgPSBhd2FpdCBmZXRjaExvbFBsYXllcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHBhcmFtTGVhZ3VlIVswXS50b0xvd2VyQ2FzZSgpID09PSAndmFsb3JhbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJzID0gYXdhaXQgZmV0Y2hWYWxvcmFudFBsYXllcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHBhcmFtTGVhZ3VlIVswXS50b0xvd2VyQ2FzZSgpID09PSAnd25iYScpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllcnMgPSBhd2FpdCBmZXRjaFduYmFQbGF5ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHBhcmFtTGVhZ3VlIVswXS50b0xvd2VyQ2FzZSgpID09PSAnY3MnKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJzID0gYXdhaXQgZmV0Y2hDU1BsYXllcnMoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2V0QWxsUGxheWVycyhwbGF5ZXJzKTtcclxuICAgICAgICAgICAgc2V0U2ltaWxhclBsYXllcnMoZmluZFNpbWlsYXJMYXN0TmFtZXMocGxheWVycywgcGFyYW1QbGF5ZXIgYXMgc3RyaW5nLCAyKSk7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYocGFyYW1MZWFndWUpIGZldGNoUGxheWVycygpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgaWYoaXNMb2FkaW5nKSByZXR1cm4gPENsaXBMb2FkZXJcclxuICAgICAgICBjb2xvcj17JyMwMDAnfVxyXG4gICAgICAgIGxvYWRpbmc9e3RydWV9XHJcbiAgICAgICAgc2l6ZT17MTUwfVxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJMb2FkaW5nIFNwaW5uZXJcIlxyXG4gICAgICAgIGRhdGEtdGVzdGlkPVwibG9hZGVyXCJcclxuICAgIC8+XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6JzEwMCUnLCBtaW5IZWlnaHQ6JzEwMHZoJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHtzaW1pbGFyUGxheWVycy5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3t9fT5UaGlzIFBsYXllciBEb2Vzbid0IEV4aXN0IG9yIEhhcyBObyBHYW1lczwvaDI+XHJcbiAgICAgICAgICAgICAgICA8Lz4gXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBmbGV4RGlyZWN0aW9uOidjb2x1bW4nLCB3aWR0aDonMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+RGlkIFlvdSBNZWFuPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3NpbWlsYXJQbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyQm94IHBsYXllcj17cGxheWVyfSBrZXk9e2luZGV4fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG50eXBlIFBsYXllckJveFByb3BzID0ge1xyXG4gICAgcGxheWVyOiBXTkJBUGxheWVyO1xyXG59O1xyXG4gIFxyXG5jb25zdCBQbGF5ZXJCb3g6IFJlYWN0LkZDPFBsYXllckJveFByb3BzPiA9ICh7IHBsYXllciB9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wbGF5ZXIvV05CQS8ke3BsYXllci5maXJzdE5hbWV9XyR7cGxheWVyLmxhc3ROYW1lfWB9IHN0eWxlPXt7dGV4dERlY29yYXRpb246ICdub25lJywgY29sb3I6J2JsYWNrJ319PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDonMjAwcHgnLCBoZWlnaHQ6JzEwMHB4JywgYm9yZGVyOicycHggc29saWQgIzFFMUUxRScsIGJvcmRlclJhZGl1czoyMCxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBtYXJnaW46JzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOidwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vY2RuLnduYmEuY29tL2hlYWRzaG90cy93bmJhL2xhdGVzdC8xMDQweDc2MC8ke3BsYXllci5waWNJZH0ucG5nYH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnNTAlJywgaGVpZ2h0OiAnNzUlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgUGljIG9mICR7cGxheWVyLmZpcnN0TmFtZX0gJHtwbGF5ZXIubGFzdE5hbWV9YH0gd2lkdGg9ezkwfSBoZWlnaHQ9ezc1fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwPntwbGF5ZXIuZmlyc3ROYW1lfSB7cGxheWVyLmxhc3ROYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJ1c2VHbG9iYWxDb250ZXh0IiwiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiQ2xpcExvYWRlciIsInVzZUVmZmVjdCIsImxldmVuc2h0ZWluRGlzdGFuY2UiLCJhIiwiYiIsIm1hdHJpeCIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsIm1pbiIsImZpbmRTaW1pbGFyTGFzdE5hbWVzIiwicGxheWVycyIsImlucHV0IiwibWF4QWxsb3dlZERpc3RhbmNlIiwidHJpbW1lZElucHV0IiwidHJpbSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZm91bmRQbGF5ZXJzIiwiU2V0Iiwic3BsaXQiLCJwbGF5ZXIiLCJhZGQiLCJzaXplIiwiQXJyYXkiLCJmcm9tIiwiTm90Rm91bmQiLCJmZXRjaFduYmFQbGF5ZXIiLCJmZXRjaExvbFBsYXllcnMiLCJmZXRjaFZhbG9yYW50UGxheWVycyIsImZldGNoQ1NQbGF5ZXJzIiwicm91dGVyIiwicXVlcnkiLCJwYXJhbVBsYXllciIsInBhcmFtTGVhZ3VlIiwiYWxsUGxheWVycyIsInNldEFsbFBsYXllcnMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzaW1pbGFyUGxheWVycyIsInNldFNpbWlsYXJQbGF5ZXJzIiwiZmV0Y2hQbGF5ZXJzIiwidG9Mb3dlckNhc2UiLCJjb2xvciIsImxvYWRpbmciLCJhcmlhLWxhYmVsIiwiZGF0YS10ZXN0aWQiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwibWluSGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoMiIsIm1hcCIsImluZGV4IiwiUGxheWVyQm94IiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwiY3Vyc29yIiwic3JjIiwicGljSWQiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Player/NotFound.tsx\n"));

/***/ })

});