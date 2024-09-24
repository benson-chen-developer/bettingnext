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

/***/ "./src/components/Player/Leagues/League.tsx":
/*!**************************************************!*\
  !*** ./src/components/Player/Leagues/League.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   League: function() { return /* binding */ League; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_class_call_check */ \"./node_modules/@swc/helpers/esm/_class_call_check.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n\n\n\n\nvar League = function League() {\n    \"use strict\";\n    (0,_swc_helpers_class_call_check__WEBPACK_IMPORTED_MODULE_0__._)(this, League);\n};\nLeague.allPickedBtns = [\n    \"All Maps\",\n    \"Map 1\",\n    \"Map 2\",\n    \"Map 3\",\n    \"Map 1+2\",\n    \"Map 1+2+3\",\n    \"Map 4\",\n    \"Map 5\"\n];\nLeague.statsHeader = [\n    {\n        name: \"K\",\n        underName: \"Kills\"\n    },\n    {\n        name: \"D\",\n        underName: \"Deaths\"\n    },\n    {\n        name: \"A\",\n        underName: \"Assists\"\n    }\n];\nLeague.compareFunction = function(pickedBtn, allTheGames) {\n    /* This takes the strings '3/3/3' and adds up the columns */ var addUpMaps = function() {\n        for(var _len = arguments.length, maps = new Array(_len), _key = 0; _key < _len; _key++){\n            maps[_key] = arguments[_key];\n        }\n        // Check if any map is null, undefined, or out of range\n        if (maps.some(function(map) {\n            return !map || map === \"-1/-1/-1\";\n        })) {\n            return [\n                -1\n            ];\n        }\n        var sums = [\n            0,\n            0,\n            0\n        ];\n        maps.forEach(function(map) {\n            var parts = map.split(\"/\").map(Number);\n            for(var i = 0; i < parts.length; i++){\n                sums[i] += parts[i];\n            }\n        });\n        return sums;\n    };\n    if (pickedBtn === \"All Maps\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps.apply(void 0, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_1__._)(game.scores.slice().reverse()));\n        });\n    } else if (pickedBtn === \"Map 1\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps(game.scores.slice().reverse()[0]);\n        });\n    } else if (pickedBtn === \"Map 2\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps(game.scores.slice().reverse()[1]);\n        });\n    } else if (pickedBtn === \"Map 3\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps(game.scores.slice().reverse()[2]);\n        });\n    } else if (pickedBtn === \"Map 1+2\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps.apply(void 0, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_1__._)(game.scores.slice().reverse().slice(0, 2)));\n        });\n    } else if (pickedBtn === \"Map 1+2+3\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps.apply(void 0, (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_1__._)(game.scores.slice().reverse().slice(0, 3)));\n        });\n    } else if (pickedBtn === \"Map 4\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps(game.scores.slice().reverse()[3]);\n        });\n    } else if (pickedBtn === \"Map 5\") {\n        return allTheGames.map(function(game) {\n            return addUpMaps(game.scores.slice().reverse()[4]);\n        });\n    }\n};\nLeague.GetTeamName = function(games) {\n    var firstGame = games[0];\n    var secondGame = games[1];\n    var names = [];\n    if (firstGame && secondGame) {\n        names = [\n            firstGame.game.split(\"vs\")[0],\n            firstGame.game.split(\"vs\")[1],\n            secondGame.game.split(\"vs\")[0],\n            secondGame.game.split(\"vs\")[1]\n        ];\n    }\n    for(var i = 0; i < names.length; i++){\n        for(var j = i + 1; j < names.length; j++){\n            if (names[i].toLocaleLowerCase() === names[j].toLocaleLowerCase()) {\n                return names[i].trim();\n            }\n        }\n    }\n    return \"\";\n};\nLeague.fetchMatches = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_2__._)(function(foundPlayer) {\n        var res, allGames;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_3__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"\".concat(\"http://localhost:3001\", \"/lol/player/\").concat(foundPlayer.playerId))\n                    ];\n                case 1:\n                    res = _state.sent();\n                    return [\n                        4,\n                        res.json()\n                    ];\n                case 2:\n                    allGames = _state.sent();\n                    return [\n                        2,\n                        allGames\n                    ];\n            }\n        });\n    });\n    return function(foundPlayer) {\n        return _ref.apply(this, arguments);\n    };\n}();\nLeague.convertToEGames = function(lolGames) {\n    var eGames = [];\n    lolGames.forEach(function(lolGame) {\n        eGames.push({\n            team1: lolGame.game.split(\" \")[0],\n            team2: lolGame.game.split(\" \")[2],\n            url: lolGame.url,\n            date: lolGame.date,\n            maps: [\n                {\n                    map: \"\",\n                    didPlay: true,\n                    players: (0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_1__._)(lolGame.scores.map(function(data) {\n                        return {\n                            name: \"\",\n                            team: \"\",\n                            stats: [\n                                {\n                                    name: \"kills\",\n                                    count: parseInt(data.split(\" \")[0], 10)\n                                },\n                                {\n                                    name: \"deaths\",\n                                    count: parseInt(data.split(\" \")[1], 10)\n                                },\n                                {\n                                    name: \"assists\",\n                                    count: parseInt(data.split(\" \")[2], 10)\n                                }\n                            ]\n                        };\n                    }))\n                }\n            ]\n        });\n    });\n    return eGames;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXIvTGVhZ3Vlcy9MZWFndWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVPLHNCQUFNQTs7MkVBQUFBO0VBNkdaO0FBN0dZQSxPQUNGQyxnQkFBZ0I7SUFBQztJQUFZO0lBQVM7SUFBUztJQUFTO0lBQVc7SUFBYTtJQUFTO0NBQVE7QUFEL0ZELE9BRUZFLGNBQWM7SUFDakI7UUFBQ0MsTUFBTTtRQUFLQyxXQUFXO0lBQU87SUFDOUI7UUFBQ0QsTUFBTTtRQUFLQyxXQUFXO0lBQVE7SUFDL0I7UUFBQ0QsTUFBTTtRQUFLQyxXQUFXO0lBQVM7Q0FDbkM7QUFOUUosT0FRRkssa0JBQWtCLFNBQUNDLFdBQW1CQztJQUN6QywwREFBMEQsR0FDMUQsSUFBTUMsWUFBWTt5Q0FBSUM7WUFBQUE7O1FBQ2xCLHVEQUF1RDtRQUN2RCxJQUFJQSxLQUFLQyxJQUFJLENBQUNDLFNBQUFBO21CQUFPLENBQUNBLE9BQU9BLFFBQVE7WUFBYTtZQUM5QyxPQUFPO2dCQUFDLENBQUM7YUFBRTtRQUNmO1FBQ0EsSUFBTUMsT0FBTztZQUFDO1lBQUc7WUFBRztTQUFFO1FBRXRCSCxLQUFLSSxPQUFPLENBQUNGLFNBQUFBO1lBQ1QsSUFBTUcsUUFBUUgsSUFBS0ksS0FBSyxDQUFDLEtBQUtKLEdBQUcsQ0FBQ0s7WUFDbEMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1JLE1BQU0sRUFBRUQsSUFBSztnQkFDbkNMLElBQUksQ0FBQ0ssRUFBRSxJQUFJSCxLQUFLLENBQUNHLEVBQUU7WUFDdkI7UUFDSjtRQUVBLE9BQU9MO0lBQ1g7SUFFQSxJQUFHTixjQUFjLFlBQVc7UUFDeEIsT0FBUUMsWUFBWUksR0FBRyxDQUFDLFNBQUNRO21CQUFTWCxVQUFBQSxNQUFBQSxLQUFBQSxHQUFVLG9FQUFHVyxLQUFLQyxNQUFNLENBQUNDLEtBQUssR0FBR0MsT0FBTzs7SUFDOUUsT0FDSyxJQUFHaEIsY0FBYyxTQUFRO1FBQzFCLE9BQU9DLFlB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U0FBQUE7UUFDYkQsT0FBT0UsSUFBSSxDQUFDO1lBQ1JDLE9BQU9GLFFBQVF6QixJQUFJLENBQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQ2dDLE9BQU9ILFFBQVF6QixJQUFJLENBQUNKLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQ2lDLEtBQUtKLFFBQVFJLEdBQUc7WUFDaEJDLE1BQU1MLFFBQVFLLElBQUk7WUFDbEJ4QyxNQUFNO2dCQUFDO29CQUNIRSxLQUFLO29CQUNMdUMsU0FBUztvQkFDVEMsU0FDSSxvRUFBR1AsUUFBUXhCLE1BQU0sQ0FBQ1QsR0FBRyxDQUFDeUMsU0FBQUE7K0JBQVM7NEJBQzNCakQsTUFBTTs0QkFDTmtELE1BQU07NEJBQ05DLE9BQU87Z0NBQ0g7b0NBQUVuRCxNQUFNO29DQUFTb0QsT0FBT0MsU0FBU0osS0FBS3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dDQUFJO2dDQUN6RDtvQ0FBRVosTUFBTTtvQ0FBVW9ELE9BQU9DLFNBQVNKLEtBQUtyQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQ0FBSTtnQ0FDMUQ7b0NBQUVaLE1BQU07b0NBQVdvRCxPQUFPQyxTQUFTSixLQUFLckMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0NBQUk7NkJBQzlEO3dCQUNMOztnQkFFUjthQUFFO1FBQ047SUFDSjtJQUVBLE9BQU80QjtBQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllci9MZWFndWVzL0xlYWd1ZS50c3g/NjljMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFR2FtZSwgTG9sR2FtZSwgUGxheWVyVHlwZSB9IGZyb20gXCIuLi8uLi8uLi9Db250ZXh0L1BsYXllclR5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGVhZ3VlIHtcclxuICAgIHN0YXRpYyBhbGxQaWNrZWRCdG5zID0gW1wiQWxsIE1hcHNcIiwgXCJNYXAgMVwiLCBcIk1hcCAyXCIsIFwiTWFwIDNcIiwgXCJNYXAgMSsyXCIsIFwiTWFwIDErMiszXCIsIFwiTWFwIDRcIiwgXCJNYXAgNVwiXTtcclxuICAgIHN0YXRpYyBzdGF0c0hlYWRlciA9IFtcclxuICAgICAgICB7bmFtZTogXCJLXCIsIHVuZGVyTmFtZTogXCJLaWxsc1wifSxcclxuICAgICAgICB7bmFtZTogXCJEXCIsIHVuZGVyTmFtZTogXCJEZWF0aHNcIn0sXHJcbiAgICAgICAge25hbWU6IFwiQVwiLCB1bmRlck5hbWU6IFwiQXNzaXN0c1wifSxcclxuICAgIF07XHJcblxyXG4gICAgc3RhdGljIGNvbXBhcmVGdW5jdGlvbiA9IChwaWNrZWRCdG46IHN0cmluZywgYWxsVGhlR2FtZXM6IExvbEdhbWVbXSkgPT4ge1xyXG4gICAgICAgIC8qIFRoaXMgdGFrZXMgdGhlIHN0cmluZ3MgJzMvMy8zJyBhbmQgYWRkcyB1cCB0aGUgY29sdW1ucyAqL1xyXG4gICAgICAgIGNvbnN0IGFkZFVwTWFwcyA9ICguLi5tYXBzOiAoc3RyaW5nIHwgdW5kZWZpbmVkIHwgbnVsbClbXSk6IG51bWJlcltdID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYW55IG1hcCBpcyBudWxsLCB1bmRlZmluZWQsIG9yIG91dCBvZiByYW5nZVxyXG4gICAgICAgICAgICBpZiAobWFwcy5zb21lKG1hcCA9PiAhbWFwIHx8IG1hcCA9PT0gJy0xLy0xLy0xJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbLTFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1bXMgPSBbMCwgMCwgMF07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXBzLmZvckVhY2gobWFwID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbWFwIS5zcGxpdCgnLycpLm1hcChOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1bXNbaV0gKz0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gc3VtcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZihwaWNrZWRCdG4gPT09IFwiQWxsIE1hcHNcIil7XHJcbiAgICAgICAgICAgIHJldHVybiAoYWxsVGhlR2FtZXMubWFwKChnYW1lKSA9PiBhZGRVcE1hcHMoLi4uZ2FtZS5zY29yZXMuc2xpY2UoKS5yZXZlcnNlKCkpKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaWNrZWRCdG4gPT09IFwiTWFwIDFcIil7XHJcbiAgICAgICAgICAgIHJldHVybihhbGxUaGVHYW1lcy5tYXAoKGdhbWUpID0+IGFkZFVwTWFwcyhnYW1lLnNjb3Jlcy5zbGljZSgpLnJldmVyc2UoKVswXSkpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHBpY2tlZEJ0biA9PT0gXCJNYXAgMlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuKGFsbFRoZUdhbWVzLm1hcCgoZ2FtZSkgPT4gYWRkVXBNYXBzKGdhbWUuc2NvcmVzLnNsaWNlKCkucmV2ZXJzZSgpWzFdKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocGlja2VkQnRuID09PSBcIk1hcCAzXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4oYWxsVGhlR2FtZXMubWFwKChnYW1lKSA9PiBhZGRVcE1hcHMoZ2FtZS5zY29yZXMuc2xpY2UoKS5yZXZlcnNlKClbMl0pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaWNrZWRCdG4gPT09IFwiTWFwIDErMlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuKGFsbFRoZUdhbWVzLm1hcCgoZ2FtZSkgPT4gYWRkVXBNYXBzKC4uLmdhbWUuc2NvcmVzLnNsaWNlKCkucmV2ZXJzZSgpLnNsaWNlKDAsIDIpKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocGlja2VkQnRuID09PSBcIk1hcCAxKzIrM1wiKXtcclxuICAgICAgICAgICAgcmV0dXJuKGFsbFRoZUdhbWVzLm1hcCgoZ2FtZSkgPT4gYWRkVXBNYXBzKC4uLmdhbWUuc2NvcmVzLnNsaWNlKCkucmV2ZXJzZSgpLnNsaWNlKDAsIDMpKSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYocGlja2VkQnRuID09PSBcIk1hcCA0XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4oYWxsVGhlR2FtZXMubWFwKChnYW1lKSA9PiBhZGRVcE1hcHMoZ2FtZS5zY29yZXMuc2xpY2UoKS5yZXZlcnNlKClbM10pKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwaWNrZWRCdG4gPT09IFwiTWFwIDVcIil7XHJcbiAgICAgICAgICAgIHJldHVybihhbGxUaGVHYW1lcy5tYXAoKGdhbWUpID0+IGFkZFVwTWFwcyhnYW1lLnNjb3Jlcy5zbGljZSgpLnJldmVyc2UoKVs0XSkpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgR2V0VGVhbU5hbWUgPSAoZ2FtZXM6IExvbEdhbWVbXSk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgbGV0IGZpcnN0R2FtZSA9IGdhbWVzWzBdOyBsZXQgc2Vjb25kR2FtZSA9IGdhbWVzWzFdO1xyXG4gICAgICAgIGxldCBuYW1lczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgaWYoZmlyc3RHYW1lICYmIHNlY29uZEdhbWUpe1xyXG4gICAgICAgICAgICBuYW1lcyA9IFtcclxuICAgICAgICAgICAgICAgIGZpcnN0R2FtZS5nYW1lLnNwbGl0KCd2cycpWzBdLCBmaXJzdEdhbWUuZ2FtZS5zcGxpdCgndnMnKVsxXSwgXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRHYW1lLmdhbWUuc3BsaXQoJ3ZzJylbMF0sIHNlY29uZEdhbWUuZ2FtZS5zcGxpdCgndnMnKVsxXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbmFtZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lc1tpXS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuYW1lc1tqXS50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWVzW2ldLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gJyc7IFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZmV0Y2hNYXRjaGVzID0gYXN5bmMgKGZvdW5kUGxheWVyOiBQbGF5ZXJUeXBlKTogUHJvbWlzZTxMb2xHYW1lW10+ID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MT0NBTF9ST1VURX0vbG9sL3BsYXllci8ke2ZvdW5kUGxheWVyLnBsYXllcklkfWApXHJcbiAgICAgICAgY29uc3QgYWxsR2FtZXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBhbGxHYW1lcztcclxuICAgIH0gIFxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0VG9FR2FtZXMgPSAobG9sR2FtZXM6IExvbEdhbWVbXSk6IEVHYW1lW10gPT4ge1xyXG4gICAgICAgIGNvbnN0IGVHYW1lczogRUdhbWVbXSA9IFtdO1xyXG5cclxuICAgICAgICBsb2xHYW1lcy5mb3JFYWNoKGxvbEdhbWUgPT4ge1xyXG4gICAgICAgICAgICBlR2FtZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0ZWFtMTogbG9sR2FtZS5nYW1lLnNwbGl0KCcgJylbMF0sXHJcbiAgICAgICAgICAgICAgICB0ZWFtMjogbG9sR2FtZS5nYW1lLnNwbGl0KCcgJylbMl0sXHJcbiAgICAgICAgICAgICAgICB1cmw6IGxvbEdhbWUudXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogbG9sR2FtZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgbWFwczogW3tcclxuICAgICAgICAgICAgICAgICAgICBtYXA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpZFBsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5sb2xHYW1lLnNjb3Jlcy5tYXAoZGF0YSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0czogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ2tpbGxzJywgY291bnQ6IHBhcnNlSW50KGRhdGEuc3BsaXQoJyAnKVswXSwgMTApIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnZGVhdGhzJywgY291bnQ6IHBhcnNlSW50KGRhdGEuc3BsaXQoJyAnKVsxXSwgMTApIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYXNzaXN0cycsIGNvdW50OiBwYXJzZUludChkYXRhLnNwbGl0KCcgJylbMl0sIDEwKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZUdhbWVzO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkxlYWd1ZSIsImFsbFBpY2tlZEJ0bnMiLCJzdGF0c0hlYWRlciIsIm5hbWUiLCJ1bmRlck5hbWUiLCJjb21wYXJlRnVuY3Rpb24iLCJwaWNrZWRCdG4iLCJhbGxUaGVHYW1lcyIsImFkZFVwTWFwcyIsIm1hcHMiLCJzb21lIiwibWFwIiwic3VtcyIsImZvckVhY2giLCJwYXJ0cyIsInNwbGl0IiwiTnVtYmVyIiwiaSIsImxlbmd0aCIsImdhbWUiLCJzY29yZXMiLCJzbGljZSIsInJldmVyc2UiLCJHZXRUZWFtTmFtZSIsImdhbWVzIiwiZmlyc3RHYW1lIiwic2Vjb25kR2FtZSIsIm5hbWVzIiwiaiIsInRvTG9jYWxlTG93ZXJDYXNlIiwidHJpbSIsImZldGNoTWF0Y2hlcyIsImZvdW5kUGxheWVyIiwicmVzIiwiYWxsR2FtZXMiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19MT0NBTF9ST1VURSIsInBsYXllcklkIiwianNvbiIsImNvbnZlcnRUb0VHYW1lcyIsImxvbEdhbWVzIiwiZUdhbWVzIiwibG9sR2FtZSIsInB1c2giLCJ0ZWFtMSIsInRlYW0yIiwidXJsIiwiZGF0ZSIsImRpZFBsYXkiLCJwbGF5ZXJzIiwiZGF0YSIsInRlYW0iLCJzdGF0cyIsImNvdW50IiwicGFyc2VJbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Player/Leagues/League.tsx\n"));

/***/ })

});