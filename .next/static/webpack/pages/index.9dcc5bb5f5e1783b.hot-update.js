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

/***/ "./src/components/View.tsx":
/*!*********************************!*\
  !*** ./src/components/View.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction View(param) {\n    let { index  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [predictions, setPredictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchImages = async ()=>{\n        const response = await fetch(\"http://localhost:3004/images/\".concat(index + 1));\n        const data = await response.json();\n        const imageJson = data.book.image;\n        setImage(imageJson);\n        console.log(imageJson);\n    };\n    const grabPredictions = async ()=>{\n        const response = await fetch(\"http://localhost:3004/predictions\");\n        const predictions = await response.json();\n        setPredictions(predictions);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        grabPredictions();\n    }, []);\n    function Draw() {\n        const canvas = document.getElementById(\"canvas\");\n        let context = canvas.getContext(\"2d\");\n        context.fillStyle = \"rgba(76, 174, 120, 0.43)\";\n    // context.fillRect(prediction.bbox.x1,prediction.bbox.y1,prediction.bbox.w1,prediction.bbox.h1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>{\n                    setShowModal(true);\n                    fetchImages();\n                },\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"container\",\n                                            style: {\n                                                display: \"inline-block\",\n                                                position: \"relative\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                                    id: \"canvas\",\n                                                    className: \"absolute flex justify-center items-center z-10\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"absolute bottom-0 right-0 h-16 w-16\",\n                                                        children: \"predictions.bbox.label\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    alt: \"\",\n                                                    style: {\n                                                        position: \"relative\",\n                                                        zIndex: 1\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"KR1Tz5MRkIp46wHLmcGEBYVvSh8=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBSXBDLFNBQVNHLEtBQUssS0FBYyxFQUFHO1FBQWpCLEVBQUVDLE1BQUssRUFBTyxHQUFkOztJQUMzQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQWEsSUFBSTtJQUNuRCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQWEsSUFBSTtJQUUvRCxNQUFNVSxjQUFjLFVBQVk7UUFDOUIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdDQUF3QyxPQUFSVCxRQUFNO1FBQ25FLE1BQU1VLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtRQUNoQyxNQUFNQyxZQUFZRixLQUFLRyxJQUFJLENBQUNWLEtBQUs7UUFDakNDLFNBQVNRO1FBQ1RFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWjtJQUdBLE1BQU1JLGtCQUFrQixVQUFZO1FBQ2xDLE1BQU1SLFdBQVcsTUFBTUMsTUFBTztRQUM5QixNQUFNSixjQUFjLE1BQU1HLFNBQVNHLElBQUk7UUFDdkNMLGVBQWVEO0lBRWpCO0lBRUFQLGdEQUFTQSxDQUFDLElBQU07UUFDZGtCO0lBQ0YsR0FBRyxFQUFFO0lBTVQsU0FBU0MsT0FBTztRQUNaLE1BQU1DLFNBQVNDLFNBQVNDLGNBQWMsQ0FBQztRQUN2QyxJQUFJQyxVQUFlSCxPQUFPSSxVQUFVLENBQUM7UUFDbkNELFFBQVFFLFNBQVMsR0FBRztJQUNwQixpR0FBaUc7SUFFdkc7SUFLRSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUNWQyxNQUFLO2dCQUNMQyxTQUFTLElBQU07b0JBQUV6QixhQUFhLElBQUk7b0JBQUdLO2dCQUFjOzBCQUNwRDs7Ozs7O1lBR0FOLDBCQUNDOztrQ0FDRSw4REFBQzJCO3dCQUNDSCxXQUFVO2tDQUVWLDRFQUFDRzs0QkFBSUgsV0FBVTtzQ0FPYiw0RUFBQ0c7Z0NBQUlILFdBQVU7O2tEQUViLDhEQUFDRzt3Q0FBSUgsV0FBVTs7MERBQ2IsOERBQUNJO2dEQUFHSixXQUFVOzBEQUF5Qjs7Ozs7OzBEQUd2Qyw4REFBQ0Q7Z0RBQ0NDLFdBQVU7Z0RBQ1ZFLFNBQVMsSUFBTXpCLGFBQWEsS0FBSzswREFFakMsNEVBQUM0QjtvREFBS0wsV0FBVTs4REFBNkY7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU1qSCw4REFBQ0c7d0NBQUlILFdBQVU7a0RBSVgsNEVBQUNHOzRDQUFJRyxJQUFHOzRDQUFZQyxPQUFPO2dEQUFDQyxTQUFTO2dEQUFnQkMsVUFBVTs0Q0FBVTs7OERBSXpFLDhEQUFDaEI7b0RBQU9hLElBQUc7b0RBQVNOLFdBQVU7OERBQzVCLDRFQUFDVTt3REFBRVYsV0FBVTtrRUFBc0M7Ozs7Ozs7Ozs7OzhEQUluRCw4REFBQ1c7b0RBQUlDLEtBQUtsQztvREFBT21DLEtBQUk7b0RBQUdOLE9BQU87d0RBQUNFLFVBQVU7d0RBQVlLLFFBQVE7b0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU1yRSw4REFBQ1g7d0NBQUlILFdBQVU7OzBEQUNiLDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVkMsTUFBSztnREFDTEMsU0FBUyxJQUFNekIsYUFBYSxLQUFLOzBEQUNsQzs7Ozs7OzBEQUdELDhEQUFDc0I7Z0RBQ0NDLFdBQVU7Z0RBQ1ZDLE1BQUs7Z0RBQ0xDLFNBQVMsSUFBTTtvREFFZixvQkFBb0I7b0RBQ2xCekIsYUFBYSxLQUFLO2dEQUNwQjswREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPVCw4REFBQzBCO3dCQUFJSCxXQUFVOzs7Ozs7OytCQUVmLElBQUk7OztBQUdkLENBQUM7R0E3SHVCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlldy50c3g/OGJkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcoeyBpbmRleCB9OiBhbnkgKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcmVkaWN0aW9ucywgc2V0UHJlZGljdGlvbnNdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L2ltYWdlcy8ke2luZGV4KzF9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBpbWFnZUpzb24gPSBkYXRhLmJvb2suaW1hZ2U7XG4gICAgc2V0SW1hZ2UoaW1hZ2VKc29uKTtcbiAgICBjb25zb2xlLmxvZyhpbWFnZUpzb24pO1xuICAgIFxuICAgIH07XG5cblxuICAgIGNvbnN0IGdyYWJQcmVkaWN0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9wcmVkaWN0aW9uc2ApO1xuICAgICAgY29uc3QgcHJlZGljdGlvbnMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQcmVkaWN0aW9ucyhwcmVkaWN0aW9ucyk7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgZ3JhYlByZWRpY3Rpb25zKCk7XG4gICAgfSwgW10pO1xuXG5cblxuXG5cbmZ1bmN0aW9uIERyYXcoKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIGxldCBjb250ZXh0OiBhbnkgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDc2LCAxNzQsIDEyMCwgMC40MylcIjtcbiAgICAgIC8vIGNvbnRleHQuZmlsbFJlY3QocHJlZGljdGlvbi5iYm94LngxLHByZWRpY3Rpb24uYmJveC55MSxwcmVkaWN0aW9uLmJib3gudzEscHJlZGljdGlvbi5iYm94LmgxKTtcblxufVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctcGluay02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd01vZGFsKHRydWUpOyBmZXRjaEltYWdlcygpO319XG4gICAgICA+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0zeGxcIj5cblxuXG4gICAgICAgICAgICAgIHsvKmNvbnRlbnQqL31cblxuXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBiZy13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICBNb2RhbCBUaXRsZVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgb3BhY2l0eS01IGgtNiB3LTYgdGV4dC0yeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGZvcm0gPiAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0gPlxuXG4gICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cImNhbnZhc1wiIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMTBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCBoLTE2IHctMTZcIj5wcmVkaWN0aW9ucy5iYm94LmxhYmVsPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9jYW52YXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD0nJyBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHpJbmRleDogMX19Lz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiBcblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmZvb3RlciovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcC02IGJvcmRlci10IGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtYlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgYmFja2dyb3VuZC10cmFuc3BhcmVudCBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWVtZXJhbGQtNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eS0yNSBmaXhlZCBpbnNldC0wIHotNDAgYmctYmxhY2tcIj48L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVmlldyIsImluZGV4Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInByZWRpY3Rpb25zIiwic2V0UHJlZGljdGlvbnMiLCJmZXRjaEltYWdlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImltYWdlSnNvbiIsImJvb2siLCJjb25zb2xlIiwibG9nIiwiZ3JhYlByZWRpY3Rpb25zIiwiRHJhdyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwiZGl2IiwiaDMiLCJzcGFuIiwiaWQiLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInAiLCJpbWciLCJzcmMiLCJhbHQiLCJ6SW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});