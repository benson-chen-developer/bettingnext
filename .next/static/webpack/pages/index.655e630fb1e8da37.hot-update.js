"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Home/Trending/PlayerBox.tsx":
/*!****************************************************!*\
  !*** ./src/components/Home/Trending/PlayerBox.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PlayerBox: function() { return /* binding */ PlayerBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Nav_SearchBar_DropDown_SportBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Nav/SearchBar/DropDown/SportBtn */ \"./src/components/Nav/SearchBar/DropDown/SportBtn.tsx\");\n/* harmony import */ var _Nav_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Nav/SearchBar/SearchBar */ \"./src/components/Nav/SearchBar/SearchBar.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar boxSize = \"175px\";\nvar iconSize = \"50px\";\nvar PlayerBox = function(param) {\n    var player = param.player;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: boxSize,\n            height: boxSize,\n            background: \"#4c2f39\",\n            border: \"2px solid #fff\",\n            borderRadius: 20,\n            display: \"flex\",\n            cursor: \"pointer\",\n            justifyContent: \"space-evenly\",\n            alignItems: \"center\",\n            flexDirection: \"column\"\n        },\n        onClick: function() {\n            if (player.lastName) {\n                (0,_Nav_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__.searchPlayer)(\"\".concat(player.firstName, \"_\").concat(player.lastName), player.sport, true);\n            } else {\n                (0,_Nav_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_4__.searchPlayer)(\"\".concat(player.firstName, \"_\"), player.sport, true);\n            }\n        },\n        children: [\n            player.picId !== \"\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"https://cdn.wnba.com/headshots/wnba/latest/1040x760/\".concat(player.picId, \".png\"),\n                alt: \"Headshot of \".concat(player.firstName, \" \").concat(player.lastName),\n                width: 80,\n                height: 60\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Home\\\\Trending\\\\PlayerBox.tsx\",\n                lineNumber: 30,\n                columnNumber: 17\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_SearchBar_DropDown_SportBtn__WEBPACK_IMPORTED_MODULE_3__.LeagueIcon, {\n                sport: player.sport,\n                size: \"40px\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Home\\\\Trending\\\\PlayerBox.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    color: \"#fff\",\n                    margin: 0,\n                    fontSize: \"16px\"\n                },\n                children: [\n                    player.firstName,\n                    \" \",\n                    player.lastName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Home\\\\Trending\\\\PlayerBox.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Benson\\\\OneDrive\\\\Desktop\\\\coding\\\\proStatsMongo\\\\bettingnext\\\\src\\\\components\\\\Home\\\\Trending\\\\PlayerBox.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, _this);\n};\n_c = PlayerBox;\nvar _c;\n$RefreshReg$(_c, \"PlayerBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lL1RyZW5kaW5nL1BsYXllckJveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTjtBQUUwQztBQUNOO0FBTTdELElBQU1JLFVBQVU7QUFBUyxJQUFNQyxXQUFXO0FBQ25DLElBQU1DLFlBQTZCO1FBQUVDLGVBQUFBO0lBQ3hDLHFCQUNJLDhEQUFDQztRQUFJQyxPQUFPO1lBQ1JDLE9BQU9OO1lBQVNPLFFBQVFQO1lBQ3hCUSxZQUFZO1lBQ1pDLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxTQUFTO1lBQVFDLFFBQU87WUFDeEJDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUFVQyxlQUFjO1FBQ3hDO1FBQUdDLFNBQVM7WUFDUixJQUFHYixPQUFPYyxRQUFRLEVBQUM7Z0JBQ2ZsQixzRUFBWUEsQ0FBQyxHQUF1QkksT0FBcEJBLE9BQU9lLFNBQVMsRUFBQyxLQUFtQixPQUFoQmYsT0FBT2MsUUFBUSxHQUFJZCxPQUFPZ0IsS0FBSyxFQUFFO1lBQ3pFLE9BQU87Z0JBQ0hwQixzRUFBWUEsQ0FBQyxHQUFvQixPQUFqQkksT0FBT2UsU0FBUyxFQUFDLE1BQUlmLE9BQU9nQixLQUFLLEVBQUU7WUFDdkQ7UUFDSjs7WUFDS2hCLE9BQU9pQixLQUFLLEtBQUssbUJBQ2QsOERBQUN4QixtREFBS0E7Z0JBQ0Z5QixLQUFLLHVEQUFvRSxPQUFibEIsT0FBT2lCLEtBQUssRUFBQztnQkFDekVFLEtBQUssZUFBbUNuQixPQUFwQkEsT0FBT2UsU0FBUyxFQUFDLEtBQW1CLE9BQWhCZixPQUFPYyxRQUFRO2dCQUN2RFgsT0FBTztnQkFDUEMsUUFBUTs7Ozs7c0NBRVosOERBQUNULHdFQUFVQTtnQkFBQ3FCLE9BQU9oQixPQUFPZ0IsS0FBSztnQkFBRUksTUFBTTs7Ozs7OzBCQVEzQyw4REFBQ0M7Z0JBQUduQixPQUFPO29CQUFFb0IsT0FBTztvQkFBUUMsUUFBTztvQkFBR0MsVUFBUztnQkFBTzs7b0JBQUl4QixPQUFPZSxTQUFTO29CQUFDO29CQUFFZixPQUFPYyxRQUFROzs7Ozs7Ozs7Ozs7O0FBR3hHLEVBQUM7S0FuQ1lmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUvVHJlbmRpbmcvUGxheWVyQm94LnRzeD8zYWI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUcmVuZGluZ1BsYXllciB9IGZyb20gJy4uLy4uLy4uL0NvbnRleHQvUGxheWVyVHlwZXMnO1xyXG5pbXBvcnQgeyBMZWFndWVJY29uIH0gZnJvbSAnLi4vLi4vTmF2L1NlYXJjaEJhci9Ecm9wRG93bi9TcG9ydEJ0bic7XHJcbmltcG9ydCB7IHNlYXJjaFBsYXllciB9IGZyb20gJy4uLy4uL05hdi9TZWFyY2hCYXIvU2VhcmNoQmFyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBwbGF5ZXI6IFRyZW5kaW5nUGxheWVyLFxyXG59XHJcblxyXG5jb25zdCBib3hTaXplID0gJzE3NXB4JzsgY29uc3QgaWNvblNpemUgPSAnNTBweCdcclxuZXhwb3J0IGNvbnN0IFBsYXllckJveDogUmVhY3QuRkM8UHJvcHM+ID0gKHtwbGF5ZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgd2lkdGg6IGJveFNpemUsIGhlaWdodDogYm94U2l6ZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyM0YzJmMzknLFxyXG4gICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgI2ZmZicsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogMjAsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgY3Vyc29yOidwb2ludGVyJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleERpcmVjdGlvbjonY29sdW1uJ1xyXG4gICAgICAgIH19IG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgaWYocGxheWVyLmxhc3ROYW1lKXtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFBsYXllcihgJHtwbGF5ZXIuZmlyc3ROYW1lfV8ke3BsYXllci5sYXN0TmFtZX1gLCBwbGF5ZXIuc3BvcnQsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUGxheWVyKGAke3BsYXllci5maXJzdE5hbWV9X2AsIHBsYXllci5zcG9ydCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge3BsYXllci5waWNJZCAhPT0gXCJcIiA/IFxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9jZG4ud25iYS5jb20vaGVhZHNob3RzL3duYmEvbGF0ZXN0LzEwNDB4NzYwLyR7cGxheWVyLnBpY0lkfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17YEhlYWRzaG90IG9mICR7cGxheWVyLmZpcnN0TmFtZX0gJHtwbGF5ZXIubGFzdE5hbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17ODB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cclxuICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgIDxMZWFndWVJY29uIHNwb3J0PXtwbGF5ZXIuc3BvcnR9IHNpemU9e1wiNDBweFwifS8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgey8qIDxwIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicsIG1hcmdpbjowLCBmb250U2l6ZTonMTZweCcgfX0+e2dhbWUucmVzdWx0cy5ob21lLmFiYnJ9IHZzIHtnYW1lLnJlc3VsdHMudmlzaXRvci5hYmJyfTwvcD4gKi99XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCB3aWR0aDonNzAlJywganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWV2ZW5seSd9fT5cclxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6ICcjZmZmJywgbWFyZ2luOjAsIGZvbnRTaXplOicxNHB4JywgZm9udFdlaWdodDonYm9sZCd9fT57Z2V0RGF5KGdhbWUucmVzdWx0cy5lYXN0ZXJuVGltZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjZmZmJywgbWFyZ2luOjAsIGZvbnRTaXplOicxNHB4JyB9fT57Y29udmVydFRvRVNUKGdhbWUucmVzdWx0cy5lYXN0ZXJuVGltZSl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogJyNmZmYnLCBtYXJnaW46MCwgZm9udFNpemU6JzE2cHgnIH19PntwbGF5ZXIuZmlyc3ROYW1lfSB7cGxheWVyLmxhc3ROYW1lfTwvaDM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJMZWFndWVJY29uIiwic2VhcmNoUGxheWVyIiwiYm94U2l6ZSIsImljb25TaXplIiwiUGxheWVyQm94IiwicGxheWVyIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiY3Vyc29yIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIm9uQ2xpY2siLCJsYXN0TmFtZSIsImZpcnN0TmFtZSIsInNwb3J0IiwicGljSWQiLCJzcmMiLCJhbHQiLCJzaXplIiwiaDMiLCJjb2xvciIsIm1hcmdpbiIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home/Trending/PlayerBox.tsx\n"));

/***/ })

});