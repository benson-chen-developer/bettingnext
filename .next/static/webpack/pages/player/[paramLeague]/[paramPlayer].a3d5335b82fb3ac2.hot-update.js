"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[paramLeague]/[paramPlayer]",{

/***/ "./src/components/Valorant/ValPlayer.tsx":
/*!***********************************************!*\
  !*** ./src/components/Valorant/ValPlayer.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValPlayer: function() { return /* binding */ ValPlayer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/store */ \"./src/Context/store.tsx\");\n/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spinners */ \"./node_modules/react-spinners/esm/index.js\");\n/* harmony import */ var _Player_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/Hero */ \"./src/components/Player/Hero.tsx\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ \"./src/components/Valorant/Row.tsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n/*\n    For this page the games array is like this \n\n    date: \"2024/07/14\"\n    maps : (3) ['Ascent', 'Bind', 'Lotus']\n    oppTeam : \"LOUD\"\n    players : Array(10) {name: 'saadhak', team: 'LOUD', kills: Array(12), deaths: Array(12), assists: Array(12)}\n    url: \"/353200/loud-vs-100-thieves-champions-to\"\n\n    1) We load 50 of these games but the maps and players will be empty\n    2) We load each map indivually via the url and fill the maps and players\n    3) Only load <Rows> for games without an empty players and maps array \n*/ var ValPlayer = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _router_query = router.query, paramPlayer = _router_query.paramPlayer, paramLeague = _router_query.paramLeague;\n    var fetchValorantPlayers = (0,_Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext)().fetchValorantPlayers;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allPlayers = _useState[0], setAllPlayers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), 2), player = _useState1[0], setPlayer = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), allGames = _useState2[0], setAllGames = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), displayedGames = _useState3[0], setDisplayedGames = _useState3[1];\n    var allPickedBtns = [\n        \"All Maps\",\n        \"Map 1\",\n        \"Map 2\",\n        \"Map 3\",\n        \"Map 1+2\",\n        \"Map 1+3\",\n        \"Map 2+3\"\n    ];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All Maps\"), 2), pickedBtn = _useState4[0], setPickedBtn = _useState4[1];\n    /*\n        If (`http://localhost:3001/valorant/${foundPlayer?.id}/${foundPlayer?.name}`); crashes it means ussually that\n        foundPlayer isn't defined (make sure nodemon crashing restarts)\n    */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchPlayer = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var allValPlayers, foundPlayer, res, gamesWithOutMapsOrPlayers, mapRes, playersAndMaps, players, maps;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                fetchValorantPlayers()\n                            ];\n                        case 1:\n                            allValPlayers = _state.sent();\n                            console.log(allValPlayers);\n                            setAllPlayers(allValPlayers);\n                            foundPlayer = allValPlayers.find(function(player) {\n                                return player.name.toLowerCase() === paramPlayer.toLowerCase();\n                            });\n                            setPlayer(foundPlayer);\n                            console.log(foundPlayer);\n                            return [\n                                4,\n                                fetch(\"http://localhost:3001/valorant/\".concat(foundPlayer === null || foundPlayer === void 0 ? void 0 : foundPlayer.id, \"/\").concat(foundPlayer === null || foundPlayer === void 0 ? void 0 : foundPlayer.name))\n                            ];\n                        case 2:\n                            res = _state.sent();\n                            return [\n                                4,\n                                res.json()\n                            ];\n                        case 3:\n                            gamesWithOutMapsOrPlayers = _state.sent();\n                            return [\n                                4,\n                                fetch(\"http://localhost:3001/valorant/123\")\n                            ];\n                        case 4:\n                            mapRes = _state.sent();\n                            return [\n                                4,\n                                mapRes.json()\n                            ];\n                        case 5:\n                            playersAndMaps = _state.sent();\n                            players = playersAndMaps.players;\n                            maps = playersAndMaps.maps;\n                            gamesWithOutMapsOrPlayers[0].players = players;\n                            gamesWithOutMapsOrPlayers[0].maps = maps;\n                            // console.log(gamesWithOutMapsOrPlayers)\n                            setAllGames(gamesWithOutMapsOrPlayers);\n                            setDisplayedGames(gamesWithOutMapsOrPlayers.filter(function(game) {\n                                return game.maps.length > 0 && game.players.length > 0;\n                            }));\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchPlayer() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (paramLeague && paramPlayer) fetchPlayer();\n    }, []);\n    if (player && allPlayers.length > 0 && displayedGames.length > 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Player_Hero__WEBPACK_IMPORTED_MODULE_4__.Hero, {\n                playerName: player.name,\n                picUrl: \"\",\n                team: player.team,\n                number: \"\",\n                position: \"\",\n                pickedBtn: pickedBtn,\n                setPickedBtn: setPickedBtn,\n                allPickedBtns: allPickedBtns\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginLeft: \"50px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    style: {\n                        width: \"50%\",\n                        borderCollapse: \"collapse\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {}, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: displayedGames.map(function(game, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                                    game: game,\n                                    playerName: player.name,\n                                    pickedBtn: pickedBtn\n                                }, index, false, {\n                                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 29\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n                lineNumber: 80,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"100%\",\n            minHeight: \"100vh\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            display: \"flex\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_spinners__WEBPACK_IMPORTED_MODULE_9__.ClipLoader, {\n            color: \"#000\",\n            loading: true,\n            size: 150,\n            \"aria-label\": \"Loading Spinner\",\n            \"data-testid\": \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n            lineNumber: 140,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/bensonchen/Desktop/Projects/sportsStatsnext/bettinghelper/src/components/Valorant/ValPlayer.tsx\",\n        lineNumber: 136,\n        columnNumber: 12\n    }, _this);\n};\n_s(ValPlayer, \"thB1fqD5F3STFDUGkXh7Li/wKyA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _Context_store__WEBPACK_IMPORTED_MODULE_3__.useGlobalContext\n    ];\n});\n_c = ValPlayer;\nvar _c;\n$RefreshReg$(_c, \"ValPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WYWxvcmFudC9WYWxQbGF5ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1Y7QUFDZTtBQUVYO0FBQ047QUFDVjtBQUU1Qjs7Ozs7Ozs7Ozs7O0FBWUEsR0FDTyxJQUFNUSxZQUFZOztJQUNyQixJQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsSUFBcUNNLGdCQUFBQSxPQUFPQyxLQUFLLEVBQXpDQyxjQUE2QkYsY0FBN0JFLGFBQWFDLGNBQWdCSCxjQUFoQkc7SUFDckIsSUFBTSx1QkFBeUJSLGdFQUFnQkEsR0FBeENTO0lBQ1AsSUFBb0NYLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBbUIsRUFBRSxPQUExRFksYUFBNkJaLGNBQWpCYSxnQkFBaUJiO0lBQ3BDLElBQTRCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQTZCYyxnQkFBMURDLFNBQXFCZixlQUFiZ0IsWUFBYWhCO0lBQzVCLElBQWdDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWlCLEVBQUUsT0FBcERpQixXQUF5QmpCLGVBQWZrQixjQUFlbEI7SUFDaEMsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBaUIsRUFBRSxPQUFoRW1CLGlCQUFxQ25CLGVBQXJCb0Isb0JBQXFCcEI7SUFFNUMsSUFBTXFCLGdCQUFnQjtRQUFDO1FBQVk7UUFBUztRQUFTO1FBQVM7UUFBVztRQUFXO0tBQVU7SUFDOUYsSUFBa0NyQixhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsaUJBQTVDc0IsWUFBMkJ0QixlQUFoQnVCLGVBQWdCdkI7SUFFbEM7OztJQUdBLEdBQ0FELGdEQUFTQSxDQUFDO1FBQ04sSUFBTXlCO3VCQUFjO29CQUNWQyxlQUlBQyxhQUlBQyxLQUNGQywyQkFFRUMsUUFDQUMsZ0JBRUFDLFNBQXdDQzs7Ozs0QkFkeEI7O2dDQUFNckI7Ozs0QkFBdEJjLGdCQUFnQjs0QkFDdEJRLFFBQVFDLEdBQUcsQ0FBQ1Q7NEJBQ1paLGNBQWNZOzRCQUVSQyxjQUFjRCxjQUFjVSxJQUFJLENBQUNwQixTQUFBQTt1Q0FBVUEsT0FBT3FCLElBQUksQ0FBQ0MsV0FBVyxPQUFPLFlBQXdCQSxXQUFXOzs0QkFDbEhyQixVQUFVVTs0QkFDVk8sUUFBUUMsR0FBRyxDQUFDUjs0QkFFQTs7Z0NBQU1ZLE1BQU0seUNBQWtDWix3QkFBQUEsa0NBQUFBLFlBQWFhLEVBQUUsRUFBQyxLQUFxQixPQUFsQmIsd0JBQUFBLGtDQUFBQSxZQUFhVSxJQUFJOzs7NEJBQXhGVCxNQUFNOzRCQUNvQjs7Z0NBQU1BLElBQUlhLElBQUk7Ozs0QkFBMUNaLDRCQUE0Qjs0QkFFakI7O2dDQUFNVSxNQUFPOzs7NEJBQXRCVCxTQUFTOzRCQUNROztnQ0FBTUEsT0FBT1csSUFBSTs7OzRCQUFsQ1YsaUJBQWlCOzRCQUVqQkMsVUFBVUQsZUFBZUMsT0FBTzs0QkFBUUMsT0FBT0YsZUFBZUUsSUFBSTs0QkFDeEVKLHlCQUF5QixDQUFDLEVBQUUsQ0FBQ0csT0FBTyxHQUFHQTs0QkFBU0gseUJBQXlCLENBQUMsRUFBRSxDQUFDSSxJQUFJLEdBQUdBOzRCQUVwRix5Q0FBeUM7NEJBQ3pDZCxZQUFZVTs0QkFDWlIsa0JBQWtCUSwwQkFBMEJhLE1BQU0sQ0FBQyxTQUFDQzt1Q0FDaERBLEtBQUtWLElBQUksQ0FBQ1csTUFBTSxHQUFHLEtBQUtELEtBQUtYLE9BQU8sQ0FBQ1ksTUFBTSxHQUFHOzs7Ozs7O1lBRXREOzRCQXZCTW5COzs7O1FBeUJOLElBQUdkLGVBQWVELGFBQWFlO0lBQ25DLEdBQUcsRUFBRTtJQUVMLElBQUdULFVBQVVILFdBQVcrQixNQUFNLEdBQUcsS0FBS3hCLGVBQWV3QixNQUFNLEdBQUcsR0FBRyxxQkFDN0QsOERBQUNDOzswQkFDRyw4REFBQ3hDLDhDQUFJQTtnQkFDRHlDLFlBQVk5QixPQUFPcUIsSUFBSTtnQkFDdkJVLFFBQU87Z0JBQ1BDLE1BQU1oQyxPQUFPZ0MsSUFBSTtnQkFDakJDLFFBQU87Z0JBQ1BDLFVBQVM7Z0JBQ1QzQixXQUFXQTtnQkFDWEMsY0FBY0E7Z0JBQ2RGLGVBQWVBOzs7Ozs7MEJBR25CLDhEQUFDdUI7Z0JBQUlNLE9BQU87b0JBQUNDLFNBQVE7b0JBQVFDLFlBQVc7Z0JBQU07MEJBQzFDLDRFQUFDQztvQkFBTUgsT0FBTzt3QkFBRUksT0FBTzt3QkFBT0MsZ0JBQWdCO29CQUFVOztzQ0FDcEQsOERBQUNDOzs7OztzQ0EyQ0QsOERBQUNDO3NDQUNJdEMsZUFBZXVDLEdBQUcsQ0FBQyxTQUFDaEIsTUFBTWlCO3FEQUN2Qiw4REFBQ3RELHFDQUFHQTtvQ0FBYXFDLE1BQU1BO29DQUFNRyxZQUFZOUIsT0FBT3FCLElBQUk7b0NBQUVkLFdBQVdBO21DQUF2RHFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU2xDLHFCQUFPLDhEQUFDZjtRQUFJTSxPQUFPO1lBQ2ZJLE9BQU07WUFBUU0sV0FBVTtZQUFTQyxnQkFBZTtZQUFVQyxZQUFXO1lBQ3JFWCxTQUFRO1FBQ1o7a0JBQ0ksNEVBQUNoRCxzREFBVUE7WUFDUDRELE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNO1lBQ05DLGNBQVc7WUFDWEMsZUFBWTs7Ozs7Ozs7Ozs7QUFHeEIsRUFBQztHQTlIWTdEOztRQUNNTCxrREFBU0E7UUFFT0MsNERBQWdCQTs7O0tBSHRDSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9WYWxvcmFudC9WYWxQbGF5ZXIudHN4P2M1MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9Db250ZXh0L3N0b3JlJztcbmltcG9ydCB7IFZhbG9yYW50R2FtZSwgVmFsb3JhbnRQbGF5ZXIgfSBmcm9tICcuLi8uLi9Db250ZXh0L1BsYXllclR5cGVzJztcbmltcG9ydCB7IENsaXBMb2FkZXIgfSBmcm9tICdyZWFjdC1zcGlubmVycyc7XG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vUGxheWVyL0hlcm8nO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9Sb3cnO1xuXG4vKlxuICAgIEZvciB0aGlzIHBhZ2UgdGhlIGdhbWVzIGFycmF5IGlzIGxpa2UgdGhpcyBcblxuICAgIGRhdGU6IFwiMjAyNC8wNy8xNFwiXG4gICAgbWFwcyA6ICgzKSBbJ0FzY2VudCcsICdCaW5kJywgJ0xvdHVzJ11cbiAgICBvcHBUZWFtIDogXCJMT1VEXCJcbiAgICBwbGF5ZXJzIDogQXJyYXkoMTApIHtuYW1lOiAnc2FhZGhhaycsIHRlYW06ICdMT1VEJywga2lsbHM6IEFycmF5KDEyKSwgZGVhdGhzOiBBcnJheSgxMiksIGFzc2lzdHM6IEFycmF5KDEyKX1cbiAgICB1cmw6IFwiLzM1MzIwMC9sb3VkLXZzLTEwMC10aGlldmVzLWNoYW1waW9ucy10b1wiXG5cbiAgICAxKSBXZSBsb2FkIDUwIG9mIHRoZXNlIGdhbWVzIGJ1dCB0aGUgbWFwcyBhbmQgcGxheWVycyB3aWxsIGJlIGVtcHR5XG4gICAgMikgV2UgbG9hZCBlYWNoIG1hcCBpbmRpdnVhbGx5IHZpYSB0aGUgdXJsIGFuZCBmaWxsIHRoZSBtYXBzIGFuZCBwbGF5ZXJzXG4gICAgMykgT25seSBsb2FkIDxSb3dzPiBmb3IgZ2FtZXMgd2l0aG91dCBhbiBlbXB0eSBwbGF5ZXJzIGFuZCBtYXBzIGFycmF5IFxuKi9cbmV4cG9ydCBjb25zdCBWYWxQbGF5ZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwYXJhbVBsYXllciwgcGFyYW1MZWFndWUgfSA9IHJvdXRlci5xdWVyeTtcbiAgICBjb25zdCB7ZmV0Y2hWYWxvcmFudFBsYXllcnN9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICAgIGNvbnN0IFthbGxQbGF5ZXJzLCBzZXRBbGxQbGF5ZXJzXSA9IHVzZVN0YXRlPFZhbG9yYW50UGxheWVyW10+KFtdKTtcbiAgICBjb25zdCBbcGxheWVyLCBzZXRQbGF5ZXJdID0gdXNlU3RhdGU8VmFsb3JhbnRQbGF5ZXIgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gICAgY29uc3QgW2FsbEdhbWVzLCBzZXRBbGxHYW1lc10gPSB1c2VTdGF0ZTxWYWxvcmFudEdhbWVbXT4oW10pO1xuICAgIGNvbnN0IFtkaXNwbGF5ZWRHYW1lcywgc2V0RGlzcGxheWVkR2FtZXNdID0gdXNlU3RhdGU8VmFsb3JhbnRHYW1lW10+KFtdKTtcblxuICAgIGNvbnN0IGFsbFBpY2tlZEJ0bnMgPSBbXCJBbGwgTWFwc1wiLCBcIk1hcCAxXCIsIFwiTWFwIDJcIiwgXCJNYXAgM1wiLCBcIk1hcCAxKzJcIiwgXCJNYXAgMSszXCIsIFwiTWFwIDIrM1wiXTtcbiAgICBjb25zdCBbcGlja2VkQnRuLCBzZXRQaWNrZWRCdG5dID0gdXNlU3RhdGU8c3RyaW5nPignQWxsIE1hcHMnKVxuXG4gICAgLypcbiAgICAgICAgSWYgKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdmFsb3JhbnQvJHtmb3VuZFBsYXllcj8uaWR9LyR7Zm91bmRQbGF5ZXI/Lm5hbWV9YCk7IGNyYXNoZXMgaXQgbWVhbnMgdXNzdWFsbHkgdGhhdFxuICAgICAgICBmb3VuZFBsYXllciBpc24ndCBkZWZpbmVkIChtYWtlIHN1cmUgbm9kZW1vbiBjcmFzaGluZyByZXN0YXJ0cylcbiAgICAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUGxheWVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWxsVmFsUGxheWVycyA9IGF3YWl0IGZldGNoVmFsb3JhbnRQbGF5ZXJzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxWYWxQbGF5ZXJzKVxuICAgICAgICAgICAgc2V0QWxsUGxheWVycyhhbGxWYWxQbGF5ZXJzKTtcblxuICAgICAgICAgICAgY29uc3QgZm91bmRQbGF5ZXIgPSBhbGxWYWxQbGF5ZXJzLmZpbmQocGxheWVyID0+IHBsYXllci5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IChwYXJhbVBsYXllciBhcyBzdHJpbmcpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgc2V0UGxheWVyKGZvdW5kUGxheWVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvdW5kUGxheWVyKVxuXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3ZhbG9yYW50LyR7Zm91bmRQbGF5ZXI/LmlkfS8ke2ZvdW5kUGxheWVyPy5uYW1lfWApO1xuICAgICAgICAgICAgbGV0IGdhbWVzV2l0aE91dE1hcHNPclBsYXllcnMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBtYXBSZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL3ZhbG9yYW50LzEyM2ApO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyc0FuZE1hcHMgPSBhd2FpdCBtYXBSZXMuanNvbigpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzID0gcGxheWVyc0FuZE1hcHMucGxheWVyczsgY29uc3QgbWFwcyA9IHBsYXllcnNBbmRNYXBzLm1hcHM7XG4gICAgICAgICAgICBnYW1lc1dpdGhPdXRNYXBzT3JQbGF5ZXJzWzBdLnBsYXllcnMgPSBwbGF5ZXJzOyBnYW1lc1dpdGhPdXRNYXBzT3JQbGF5ZXJzWzBdLm1hcHMgPSBtYXBzO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhnYW1lc1dpdGhPdXRNYXBzT3JQbGF5ZXJzKVxuICAgICAgICAgICAgc2V0QWxsR2FtZXMoZ2FtZXNXaXRoT3V0TWFwc09yUGxheWVycyk7XG4gICAgICAgICAgICBzZXREaXNwbGF5ZWRHYW1lcyhnYW1lc1dpdGhPdXRNYXBzT3JQbGF5ZXJzLmZpbHRlcigoZ2FtZTogVmFsb3JhbnRHYW1lKSA9PiBcbiAgICAgICAgICAgICAgICBnYW1lLm1hcHMubGVuZ3RoID4gMCAmJiBnYW1lLnBsYXllcnMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhcmFtTGVhZ3VlICYmIHBhcmFtUGxheWVyKSBmZXRjaFBsYXllcigpO1xuICAgIH0sIFtdKVxuXG4gICAgaWYocGxheWVyICYmIGFsbFBsYXllcnMubGVuZ3RoID4gMCAmJiBkaXNwbGF5ZWRHYW1lcy5sZW5ndGggPiAwKSByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlcm8gXG4gICAgICAgICAgICAgICAgcGxheWVyTmFtZT17cGxheWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgcGljVXJsPVwiXCJcbiAgICAgICAgICAgICAgICB0ZWFtPXtwbGF5ZXIudGVhbX1cbiAgICAgICAgICAgICAgICBudW1iZXI9XCJcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPScnXG4gICAgICAgICAgICAgICAgcGlja2VkQnRuPXtwaWNrZWRCdG59XG4gICAgICAgICAgICAgICAgc2V0UGlja2VkQnRuPXtzZXRQaWNrZWRCdG59XG4gICAgICAgICAgICAgICAgYWxsUGlja2VkQnRucz17YWxsUGlja2VkQnRuc31cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgbWFyZ2luTGVmdDonNTBweCd9fT5cbiAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICc1MCUnLCBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dHIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5Cb3R0b206JzIwcHgnLCBhbGlnbkl0ZW1zOidjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgZGlzcGxheTonZmxleCcsIGp1c3RpZnlDb250ZW50OidjZW50ZXInLCBhbGlnbkl0ZW1zOidjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjNjY2MzYzXCIgZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwczEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMTVjLS41NSAwLTEtLjQ1LTEtMXYtNGMwLS41NS40NS0xIDEtMXMxIC40NSAxIDF2NGMwIC41NS0uNDUgMS0xIDFtMS04aC0yVjdoMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjonIzY2NjM2MycsIGZvbnRTaXplOicxMnB4JywgbWFyZ2luOjB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGUgYSBOdW1iZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4gdG8gQ29tcGFyZSB0byBTdGF0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhjaGFydENvbXBhcmVUbykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17a2V5fSBzdHlsZT17eyB3aWR0aDogJzUwcHgnLCBoZWlnaHQ6ICczNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ29tcGFyZVRvQ2hhbmdlKGtleSwgTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRyIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0+VGVhbTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGNoYXJ0Q29tcGFyZVRvKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICc1MHB4JyB9fSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5ZWRHYW1lcy5tYXAoKGdhbWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdyBrZXk9e2luZGV4fSBnYW1lPXtnYW1lfSBwbGF5ZXJOYW1lPXtwbGF5ZXIubmFtZX0gcGlja2VkQnRuPXtwaWNrZWRCdG59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e1xuICAgICAgICB3aWR0aDonMTAwJScsIG1pbkhlaWdodDonMTAwdmgnLCBqdXN0aWZ5Q29udGVudDonY2VudGVyJywgYWxpZ25JdGVtczonY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTonZmxleCdcbiAgICB9fT5cbiAgICAgICAgPENsaXBMb2FkZXJcbiAgICAgICAgICAgIGNvbG9yPXsnIzAwMCd9XG4gICAgICAgICAgICBsb2FkaW5nPXt0cnVlfVxuICAgICAgICAgICAgc2l6ZT17MTUwfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxvYWRpbmcgU3Bpbm5lclwiXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImxvYWRlclwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZUdsb2JhbENvbnRleHQiLCJDbGlwTG9hZGVyIiwiSGVybyIsIlJvdyIsIlZhbFBsYXllciIsInJvdXRlciIsInF1ZXJ5IiwicGFyYW1QbGF5ZXIiLCJwYXJhbUxlYWd1ZSIsImZldGNoVmFsb3JhbnRQbGF5ZXJzIiwiYWxsUGxheWVycyIsInNldEFsbFBsYXllcnMiLCJ1bmRlZmluZWQiLCJwbGF5ZXIiLCJzZXRQbGF5ZXIiLCJhbGxHYW1lcyIsInNldEFsbEdhbWVzIiwiZGlzcGxheWVkR2FtZXMiLCJzZXREaXNwbGF5ZWRHYW1lcyIsImFsbFBpY2tlZEJ0bnMiLCJwaWNrZWRCdG4iLCJzZXRQaWNrZWRCdG4iLCJmZXRjaFBsYXllciIsImFsbFZhbFBsYXllcnMiLCJmb3VuZFBsYXllciIsInJlcyIsImdhbWVzV2l0aE91dE1hcHNPclBsYXllcnMiLCJtYXBSZXMiLCJwbGF5ZXJzQW5kTWFwcyIsInBsYXllcnMiLCJtYXBzIiwiY29uc29sZSIsImxvZyIsImZpbmQiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJmZXRjaCIsImlkIiwianNvbiIsImZpbHRlciIsImdhbWUiLCJsZW5ndGgiLCJkaXYiLCJwbGF5ZXJOYW1lIiwicGljVXJsIiwidGVhbSIsIm51bWJlciIsInBvc2l0aW9uIiwic3R5bGUiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsInRhYmxlIiwid2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsInRoZWFkIiwidGJvZHkiLCJtYXAiLCJpbmRleCIsIm1pbkhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibG9hZGluZyIsInNpemUiLCJhcmlhLWxhYmVsIiwiZGF0YS10ZXN0aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Valorant/ValPlayer.tsx\n"));

/***/ })

});