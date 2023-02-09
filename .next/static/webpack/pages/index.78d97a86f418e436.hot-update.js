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

/***/ "./src/components/Dialogue.tsx":
/*!*************************************!*\
  !*** ./src/components/Dialogue.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dialogue; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Dialogue(param) {\n    let { book  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async ()=>{\n        book.description = description;\n        book.title = title;\n        book.predictionTime = new Date().toLocaleString();\n        console.log(book);\n        const response = await fetch(\"http://localhost:3004/images\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                book\n            })\n        });\n        console.log(response);\n        const data = await response.json();\n        console.log(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>setShowModal(true),\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Submit for prediction\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                                    children: [\n                                                        \" Title:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                                            type: \"text\",\n                                                            required: true,\n                                                            onChange: (e)=>setTitle(e.target.value),\n                                                            value: title\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                                    children: [\n                                                        \" Description:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            className: \"shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                                            type: \"text\",\n                                                            required: true,\n                                                            value: description,\n                                                            onChange: (e)=>setDescription(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 19\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/Dialogue.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(Dialogue, \"UCmVjoPoyHqA2Ha0ubt7qd7x6b4=\");\n_c = Dialogue;\nvar _c;\n$RefreshReg$(_c, \"Dialogue\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EaWFsb2d1ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRDtBQUdwQyxTQUFTRSxTQUFTLEtBQWEsRUFBRztRQUFoQixFQUFFQyxLQUFJLEVBQU8sR0FBYjs7SUFDL0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDaEQsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUkvQyxNQUFNUyxlQUFlLFVBQVc7UUFDOUJQLEtBQUtLLFdBQVcsR0FBR0E7UUFDbkJMLEtBQUtHLEtBQUssR0FBR0E7UUFDYkgsS0FBS1EsY0FBYyxHQUFHLElBQUlDLE9BQU9DLGNBQWM7UUFDL0NDLFFBQVFDLEdBQUcsQ0FBQ1o7UUFDWixNQUFNYSxXQUFXLE1BQU1DLE1BQU0sZ0NBQWdDO1lBQzNEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBRUFDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFDbkJuQjtZQUVGO1FBRUY7UUFDQVcsUUFBUUMsR0FBRyxDQUFDQztRQUNaLE1BQU1PLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUNoQ1YsUUFBUUMsR0FBRyxDQUFDUTtJQUVkO0lBS0EscUJBQ0U7OzBCQUNFLDhEQUFDRTtnQkFDQ0MsV0FBVTtnQkFDVkMsTUFBSztnQkFDTEMsU0FBUyxJQUFNdkIsYUFBYSxJQUFJOzBCQUNqQzs7Ozs7O1lBR0FELDBCQUNDOztrQ0FDRSw4REFBQ3lCO3dCQUNDSCxXQUFVO2tDQUVWLDRFQUFDRzs0QkFBSUgsV0FBVTtzQ0FPYiw0RUFBQ0c7Z0NBQUlILFdBQVU7O2tEQUViLDhEQUFDRzt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNJO2dEQUFHSixXQUFVOzBEQUF5Qjs7Ozs7OzBEQUd2Qyw4REFBQ0Q7Z0RBQ0NDLFdBQVU7Z0RBQ1ZFLFNBQVMsSUFBTXZCLGFBQWEsS0FBSzswREFFakMsNEVBQUMwQjtvREFBS0wsV0FBVTs4REFBNkY7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU1qSCw4REFBQ0c7d0NBQUlILFdBQVU7a0RBRWpCLDRFQUFDTTs7OERBQ0MsOERBQUNDO29EQUFNUCxXQUFXOzt3REFBNkM7c0VBQzdELDhEQUFDUTs0REFBTVIsV0FBVTs0REFDZkMsTUFBSzs0REFBT1EsUUFBUTs0REFDcEJDLFVBQVUsQ0FBQ0MsSUFBTTlCLFNBQVM4QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7NERBQ3hDQSxPQUFPakM7Ozs7Ozs7Ozs7Ozs4REFHWCw4REFBQzJCO29EQUFNUCxXQUFXOzt3REFBNkM7c0VBQzdELDhEQUFDUTs0REFBTVIsV0FBVTs0REFDZkMsTUFBSzs0REFBT1EsUUFBUTs0REFDcEJJLE9BQU8vQjs0REFDUDRCLFVBQVUsQ0FBQ0MsSUFBTTVCLGVBQWU0QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQVFsRCw4REFBQ1Y7d0NBQUlILFdBQVU7OzBEQUNiLDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVkMsTUFBSztnREFDTEMsU0FBUyxJQUFNdkIsYUFBYSxLQUFLOzBEQUNsQzs7Ozs7OzBEQUdELDhEQUFDb0I7Z0RBQ0NDLFdBQVU7Z0RBQ1ZDLE1BQUs7Z0RBQ0xDLFNBQVMsSUFBTTtvREFFYmxCO29EQUNBTCxhQUFhLEtBQUs7Z0RBQ3BCOzBEQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9ULDhEQUFDd0I7d0JBQUlILFdBQVU7Ozs7Ozs7K0JBRWYsSUFBSTs7O0FBR2QsQ0FBQztHQXhIdUJ4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EaWFsb2d1ZS50c3g/YTNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWFsb2d1ZSh7IGJvb2sgfTogYW55ICkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+e1xuICAgIGJvb2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIGJvb2sudGl0bGUgPSB0aXRsZVxuICAgIGJvb2sucHJlZGljdGlvblRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbiAgICBjb25zb2xlLmxvZyhib29rKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYm9va1xuXG4gICAgICB9KSxcblxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLXBpbmstNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd01vZGFsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxuXG5cbiAgICAgICAgICAgICAgey8qY29udGVudCovfVxuXG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtNSBib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdCBmb3IgcHJlZGljdGlvblxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgb3BhY2l0eS01IGgtNiB3LTYgdGV4dC0yeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cblxuICAgICAgICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj4gVGl0bGU6XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZSA9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIj4gRGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtNiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGJhY2tncm91bmQtdHJhbnNwYXJlbnQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1lbWVyYWxkLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRpYWxvZ3VlIiwiYm9vayIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiaGFuZGxlU3VibWl0IiwicHJlZGljdGlvblRpbWUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJkaXYiLCJoMyIsInNwYW4iLCJmb3JtIiwibGFiZWwiLCJpbnB1dCIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Dialogue.tsx\n"));

/***/ })

});