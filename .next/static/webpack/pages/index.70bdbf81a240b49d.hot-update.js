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

/***/ "./src/components/Predictions.tsx":
/*!****************************************!*\
  !*** ./src/components/Predictions.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Table; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ \"./src/components/View.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Table() {\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchBooks = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3004/images\");\n            const data = await response.json();\n            setBooks(data);\n        } catch (err) {\n            console.log(\"HAPPY HARRY \".concat(err));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBooks();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-1.5 w-full inline-block align-middle\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden border rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"min-w-full divide-y divide-gray-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"bg-gray-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase \",\n                                        children: \"Title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase \",\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase \",\n                                        children: \"Timestamp\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase \",\n                                        children: \"Button\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase \",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            className: \"divide-y divide-gray-200\",\n                            children: books.map((book, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap\",\n                                            children: book.book.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4 text-sm text-gray-800 whitespace-nowrap\",\n                                            children: book.book.description\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4 text-sm text-gray-800 whitespace-nowrap\",\n                                            children: book.book.predictionTime\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            className: \"px-6 py-4 text-sm font-medium text-right whitespace-nowrap\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-red-500 hover:text-red-700\",\n                                                href: \"#\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                    index: index\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 33\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 29\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Predictions.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Table, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = Table;\nvar _c;\n$RefreshReg$(_c, \"Table\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QcmVkaWN0aW9ucy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFFWCxTQUFTRyxRQUFROztJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBTUosK0NBQVFBLENBQUMsRUFBRTtJQUl4QyxNQUFNSyxhQUFhLFVBQVk7UUFDM0IsSUFBRztZQUNILE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENMLFNBQVNJO1FBQ1QsRUFDQSxPQUFPRSxLQUNQO1lBQ0lDLFFBQVFDLEdBQUcsQ0FBQyxlQUFtQixPQUFKRjtRQUMvQjtJQUVKO0lBRUFYLGdEQUFTQSxDQUFDLElBQU07UUFDWk07SUFDSixHQUFHLEVBQUU7SUFTTCxxQkFDSTtrQkFFQSw0RUFBQ1E7WUFBSUMsV0FBVTtzQkFDZiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFNRCxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQU1GLFdBQVU7c0NBQ2IsNEVBQUNHOztrREFFRyw4REFBQ0M7d0NBQ0dDLE9BQU07d0NBQ05MLFdBQVU7a0RBQ2I7Ozs7OztrREFLRCw4REFBQ0k7d0NBQ0dDLE9BQU07d0NBQ05MLFdBQVU7a0RBQ2I7Ozs7OztrREFHRCw4REFBQ0k7d0NBQ0dDLE9BQU07d0NBQ05MLFdBQVU7a0RBQ2I7Ozs7OztrREFHRCw4REFBQ0k7d0NBQ0dDLE9BQU07d0NBQ05MLFdBQVU7a0RBQ2I7Ozs7OztrREFHRCw4REFBQ0k7d0NBQ0dDLE9BQU07d0NBQ05MLFdBQVU7a0RBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU9ULDhEQUFDTTs0QkFBTU4sV0FBVTtzQ0FDaEJYLE1BQU1rQixHQUFHLENBQUMsQ0FBQ0MsTUFBV0Msc0JBS25CLDhEQUFDTjs7c0RBRUcsOERBQUNPOzRDQUFHVixXQUFVO3NEQUNUUSxLQUFLQSxJQUFJLENBQUNHLEtBQUs7Ozs7OztzREFFcEIsOERBQUNEOzRDQUFHVixXQUFVO3NEQUNUUSxLQUFLQSxJQUFJLENBQUNJLFdBQVc7Ozs7OztzREFFMUIsOERBQUNGOzRDQUFHVixXQUFVO3NEQUNUUSxLQUFLQSxJQUFJLENBQUNLLGNBQWM7Ozs7OztzREFFN0IsOERBQUNIOzRDQUFHVixXQUFVO3NEQUNWLDRFQUFDYztnREFBRWQsV0FBVTtnREFBa0NlLE1BQUs7MERBQ2hELDRFQUFDNUIsNkNBQUlBO29EQUFDc0IsT0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWJoQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDN0IsQ0FBQztHQWxIdUJyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QcmVkaWN0aW9ucy50c3g/ODBiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlKCkge1xuICAgIGNvbnN0IFtib29rcywgc2V0Qm9va3NdOiBhbnk9dXNlU3RhdGUoW10pO1xuXG5cblxuICAgIGNvbnN0IGZldGNoQm9va3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L2ltYWdlcycpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRCb29rcyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSEFQUFkgSEFSUlkgJHtlcnJ9YCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaEJvb2tzKCk7XG4gICAgfSwgW10pO1xuICAgIFxuXG4gICAgXG5cblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xLjUgdy1mdWxsIGlubGluZS1ibG9jayBhbGlnbi1taWRkbGVcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIGJvcmRlciByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICA8dHIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQteHMgZm9udC1ib2xkIHRleHQtbGVmdCB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LWxlZnQgdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC14cyBmb250LWJvbGQgdGV4dC1sZWZ0IHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGltZXN0YW1wXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXJpZ2h0IHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXJpZ2h0IHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAge2Jvb2tzLm1hcCgoYm9vazogYW55LCBpbmRleDogYW55KSA9PiAoXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktODAwIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9vay50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHRleHQtc20gdGV4dC1ncmF5LTgwMCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2suZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS04MDAgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rLnByZWRpY3Rpb25UaW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXJpZ2h0IHdoaXRlc3BhY2Utbm93cmFwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC03MDBcIiBocmVmPVwiI1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXcgaW5kZXg9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgPC90Ym9keT5cblxuICAgICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0Qm9va3MoW10pfT5SZW1vdmUgQWxsPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDwvPlxuXG4gICAgKTtcblxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVmlldyIsIlRhYmxlIiwiYm9va3MiLCJzZXRCb29rcyIsImZldGNoQm9va3MiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwibWFwIiwiYm9vayIsImluZGV4IiwidGQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJlZGljdGlvblRpbWUiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Predictions.tsx\n"));

/***/ })

});