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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction View(param) {\n    let { image , fetchImages , index  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //   const [image, setImage] = useState<any | null>(null);\n    let imageUrl;\n    //   const b64toBlob = (b64Data: any, contentType='', sliceSize=512) => {\n    //     const byteCharacters = atob(b64Data);\n    //     const byteArrays = [];\n    //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {\n    //       const slice = byteCharacters.slice(offset, offset + sliceSize);\n    //       const byteNumbers = new Array(slice.length);\n    //       for (let i = 0; i < slice.length; i++) {\n    //         byteNumbers[i] = slice.charCodeAt(i);\n    //       }\n    //       const byteArray = new Uint8Array(byteNumbers);\n    //       byteArrays.push(byteArray);\n    //     }\n    //     const blob = new Blob(byteArrays, {type: contentType});\n    //     return blob;\n    //   }\n    //   const [title, setTitle] = useState('');\n    //   const [description, setDescription] = useState('');\n    //   const handleSubmit = async () =>{\n    //     book.description = description\n    //     book.title = title\n    //     book.predictionTime = new Date().toLocaleString()\n    //     console.log(book)\n    //     const response = await fetch('http://localhost:3004/images', {\n    //       method: 'POST',\n    //       headers: {\n    //         'Content-Type': 'application/json',\n    //       },\n    //       // book.title = title\n    //       // book.description = description\n    //       body: JSON.stringify({\n    //         // book.push(description),\n    //         book\n    //         // title: title,\n    //         // description: description\n    //       }),\n    //     });\n    //     console.log(response);\n    //     const data = await response.json();\n    //     console.log(data);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>{\n                    setShowModal(true);\n                    fetchImages(index);\n                },\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 107,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 133,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 140,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBR3BDLFNBQVNFLEtBQUssS0FBa0MsRUFBRztRQUFyQyxFQUFFQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFPLEdBQWxDOztJQUMzQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUNsRCwwREFBMEQ7SUFDeEQsSUFBSU87SUFFTix5RUFBeUU7SUFDekUsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUU3QixrRkFBa0Y7SUFDbEYsd0VBQXdFO0lBRXhFLHFEQUFxRDtJQUNyRCxpREFBaUQ7SUFDakQsZ0RBQWdEO0lBQ2hELFVBQVU7SUFFVix1REFBdUQ7SUFDdkQsb0NBQW9DO0lBQ3BDLFFBQVE7SUFFUiw4REFBOEQ7SUFDOUQsbUJBQW1CO0lBQ25CLE1BQU07SUFLTiw0Q0FBNEM7SUFDNUMsd0RBQXdEO0lBSXhELHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLHdEQUF3RDtJQUN4RCx3QkFBd0I7SUFDeEIscUVBQXFFO0lBQ3JFLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsMENBQTBDO0lBRTFDLCtCQUErQjtJQUMvQixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFFdEMsWUFBWTtJQUVaLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUV6QixNQUFNO0lBSUoscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFDQ0MsV0FBVTtnQkFDVkMsTUFBSztnQkFDTEMsU0FBUyxJQUFNO29CQUFFTCxhQUFhLElBQUk7b0JBQUdILFlBQVlDO2dCQUFPOzBCQUN6RDs7Ozs7O1lBR0FDLDBCQUNDOztrQ0FDRSw4REFBQ087d0JBQ0NILFdBQVU7a0NBRVYsNEVBQUNHOzRCQUFJSCxXQUFVO3NDQU9iLDRFQUFDRztnQ0FBSUgsV0FBVTs7a0RBRWIsOERBQUNHO3dDQUFJSCxXQUFVOzswREFDYiw4REFBQ0k7Z0RBQUdKLFdBQVU7MERBQXlCOzs7Ozs7MERBR3ZDLDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVkUsU0FBUyxJQUFNTCxhQUFhLEtBQUs7MERBRWpDLDRFQUFDUTtvREFBS0wsV0FBVTs4REFBNkY7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQU1qSCw4REFBQ0c7d0NBQUlILFdBQVU7a0RBRVgsNEVBQUNNO3NEQUNELDRFQUFDSDswREFHQyw0RUFBQ0k7b0RBQUlDLEtBQUtmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBc0JoQiw4REFBQ1U7d0NBQUlILFdBQVU7OzBEQUNiLDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVkMsTUFBSztnREFDTEMsU0FBUyxJQUFNTCxhQUFhLEtBQUs7MERBQ2xDOzs7Ozs7MERBR0QsOERBQUNFO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU07b0RBRWYsb0JBQW9CO29EQUNsQkwsYUFBYSxLQUFLO2dEQUNwQjswREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPVCw4REFBQ007d0JBQUlILFdBQVU7Ozs7Ozs7K0JBRWYsSUFBSTs7O0FBR2QsQ0FBQztHQTVKdUJSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZXcudHN4PzhiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldyh7IGltYWdlLCBmZXRjaEltYWdlcywgaW5kZXggfTogYW55ICkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBsZXQgaW1hZ2VVcmw6IGFueTtcblxuLy8gICBjb25zdCBiNjR0b0Jsb2IgPSAoYjY0RGF0YTogYW55LCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikgPT4ge1xuLy8gICAgIGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcbi8vICAgICBjb25zdCBieXRlQXJyYXlzID0gW107XG4gIFxuLy8gICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuLy8gICAgICAgY29uc3Qgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XG4gIFxuLy8gICAgICAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcbi8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcbi8vICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xuLy8gICAgIH1cbiAgXG4vLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuLy8gICAgIHJldHVybiBibG9iO1xuLy8gICB9XG5cblxuXG5cbi8vICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4vLyAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuXG5cblxuLy8gICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9Pntcbi8vICAgICBib29rLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbi8vICAgICBib29rLnRpdGxlID0gdGl0bGVcbi8vICAgICBib29rLnByZWRpY3Rpb25UaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4vLyAgICAgY29uc29sZS5sb2coYm9vaylcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDQvaW1hZ2VzJywge1xuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICB9LFxuLy8gICAgICAgLy8gYm9vay50aXRsZSA9IHRpdGxlXG4vLyAgICAgICAvLyBib29rLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgIFxuLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAvLyBib29rLnB1c2goZGVzY3JpcHRpb24pLFxuLy8gICAgICAgICBib29rXG4vLyAgICAgICAgIC8vIHRpdGxlOiB0aXRsZSxcbi8vICAgICAgICAgLy8gZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG5cbi8vICAgICAgIH0pLFxuXG4vLyAgICAgfSk7XG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbi8vICAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLXBpbmstNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFNob3dNb2RhbCh0cnVlKTsgZmV0Y2hJbWFnZXMoaW5kZXgpO319XG4gICAgICA+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0zeGxcIj5cblxuXG4gICAgICAgICAgICAgIHsvKmNvbnRlbnQqL31cblxuXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBiZy13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICBNb2RhbCBUaXRsZVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgb3BhY2l0eS01IGgtNiB3LTYgdGV4dC0yeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJJbWFnZSBmcm9tIEFQSVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2ltYWdlfSAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coZXhhbXBsZSl9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+IFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gRGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXQgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1iXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNiBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTI1IGZpeGVkIGluc2V0LTAgei00MCBiZy1ibGFja1wiPjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJWaWV3IiwiaW1hZ2UiLCJmZXRjaEltYWdlcyIsImluZGV4Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaW1hZ2VVcmwiLCJidXR0b24iLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImRpdiIsImgzIiwic3BhbiIsImZvcm0iLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});