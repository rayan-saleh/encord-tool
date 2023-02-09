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

/***/ "./src/components/Table.tsx":
/*!**********************************!*\
  !*** ./src/components/Table.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Dialogue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialogue */ \"./src/components/Dialogue.tsx\");\n\n\n\nfunction Table(param) {\n    let { books , deleteBook  } = param;\n    return books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap\",\n                    children: book.name\n                }, void 0, false, {\n                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"px-6 py-4 text-sm text-gray-800 whitespace-nowrap\",\n                    children: book.size\n                }, void 0, false, {\n                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"px-6 py-4 text-sm text-gray-800 whitespace-nowrap\",\n                    children: book.time\n                }, void 0, false, {\n                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"px-6 py-4 text-sm font-medium text-right whitespace-nowrap\",\n                    onClick: ()=>deleteBook(index),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-red-500 hover:text-red-700\",\n                        href: \"#\",\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    className: \"px-6 py-4 text-sm font-medium text-right whitespace-nowrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-red-500 hover:text-red-700\",\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dialogue__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            book: book\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, index, true, {\n            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Table.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this));\n}\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNTO0FBSW5CLFNBQVNFLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFDQyxNQUFLLEVBQUVDLFdBQVUsRUFBTSxHQUF4QjtJQUc5QixPQUFPRCxNQUFNRSxHQUFHLENBQUMsQ0FBQ0MsTUFBV0Msc0JBR2pCLDhEQUFDQzs7OEJBRUcsOERBQUNDO29CQUFHQyxXQUFVOzhCQUNUSixLQUFLSyxJQUFJOzs7Ozs7OEJBRWQsOERBQUNGO29CQUFHQyxXQUFVOzhCQUNUSixLQUFLTSxJQUFJOzs7Ozs7OEJBRWQsOERBQUNIO29CQUFHQyxXQUFVOzhCQUNUSixLQUFLTyxJQUFJOzs7Ozs7OEJBRWQsOERBQUNKO29CQUFHQyxXQUFVO29CQUE0REksU0FBUyxJQUFJVixXQUFXRzs4QkFDOUYsNEVBQUNRO3dCQUFFTCxXQUFVO3dCQUFrQ00sTUFBSztrQ0FBSTs7Ozs7Ozs7Ozs7OEJBSTVELDhEQUFDUDtvQkFBR0MsV0FBVTs4QkFDViw0RUFBQ0s7d0JBQUVMLFdBQVU7d0JBQWtDTSxNQUFLO2tDQUNoRCw0RUFBQ2YsaURBQVFBOzRCQUFDSyxNQUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FsQm5CQzs7Ozs7QUF5QmIsQ0FBQztLQS9CZUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFibGUudHN4P2ZmMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IERpYWxvZ3VlIGZyb20gJy4vRGlhbG9ndWUnO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUoe2Jvb2tzLCBkZWxldGVCb29rfTogYW55KSB7XG5cbiAgICBcbnJldHVybiBib29rcy5tYXAoKGJvb2s6IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuXG5cbiAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLm5hbWV9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtc20gdGV4dC1ncmF5LTgwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5zaXplfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS04MDAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2sudGltZX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJpZ2h0IHdoaXRlc3BhY2Utbm93cmFwXCJvbkNsaWNrPXsoKT0+ZGVsZXRlQm9vayhpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNzAwXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1yaWdodCB3aGl0ZXNwYWNlLW5vd3JhcFwiID5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTcwMFwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9ndWUgYm9vaz17Ym9va30vPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG5cblxuXG4gICAgKSApIH0iXSwibmFtZXMiOlsiUmVhY3QiLCJEaWFsb2d1ZSIsIlRhYmxlIiwiYm9va3MiLCJkZWxldGVCb29rIiwibWFwIiwiYm9vayIsImluZGV4IiwidHIiLCJ0ZCIsImNsYXNzTmFtZSIsIm5hbWUiLCJzaXplIiwidGltZSIsIm9uQ2xpY2siLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Table.tsx\n"));

/***/ })

});