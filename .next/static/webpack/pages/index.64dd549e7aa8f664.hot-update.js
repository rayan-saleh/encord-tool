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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction View(param) {\n    let { book  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //   const b64toBlob = (b64Data: any, contentType='', sliceSize=512) => {\n    //     const byteCharacters = atob(b64Data);\n    //     const byteArrays = [];\n    //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {\n    //       const slice = byteCharacters.slice(offset, offset + sliceSize);\n    //       const byteNumbers = new Array(slice.length);\n    //       for (let i = 0; i < slice.length; i++) {\n    //         byteNumbers[i] = slice.charCodeAt(i);\n    //       }\n    //       const byteArray = new Uint8Array(byteNumbers);\n    //       byteArrays.push(byteArray);\n    //     }\n    //     const blob = new Blob(byteArrays, {type: contentType});\n    //     return blob;\n    //   }\n    const fetchImages = async ()=>{\n        // try{\n        const response = await fetch(\"http://localhost:3004/images/1\");\n        const data = await response.json();\n        console.log(data.book.image);\n        const imageJson = data.book.image;\n        let blob = new Blob([\n            imageJson\n        ], {\n            type: \"image/png\"\n        });\n        console.log(blob);\n        // const blob = b64toBlob(image, image);\n        // const blobUrl = URL.createObjectURL(blob);\n        // let blobUrl: Blob = Blob.from(image, 'base64')\n        // const base64Data = \"aGV5IHRoZXJl\";\n        // const base64 = await fetch(image);\n        // const base64Response = await fetch(`data:image/jpeg;base64,${image}`);\n        // const blob = await base64.blob();\n        const reader = new FileReader();\n        reader.readAsDataURL(blob);\n        reader.onloadend = ()=>{\n            setImage(blob);\n        // let img = new Image();\n        // img.src = reader.result;\n        };\n    // setBooks(data);\n    // }\n    // catch (err)\n    // {\n    //     console.log(`HAPPY HARRY ${err}`);\n    //     // setError(true);\n    // }\n    };\n    // useEffect(() => {\n    //     fetchImages();\n    // }, []);\n    //   const [title, setTitle] = useState('');\n    //   const [description, setDescription] = useState('');\n    //   const handleSubmit = async () =>{\n    //     book.description = description\n    //     book.title = title\n    //     book.predictionTime = new Date().toLocaleString()\n    //     console.log(book)\n    //     const response = await fetch('http://localhost:3004/images', {\n    //       method: 'POST',\n    //       headers: {\n    //         'Content-Type': 'application/json',\n    //       },\n    //       // book.title = title\n    //       // book.description = description\n    //       body: JSON.stringify({\n    //         // book.push(description),\n    //         book\n    //         // title: title,\n    //         // description: description\n    //       }),\n    //     });\n    //     console.log(response);\n    //     const data = await response.json();\n    //     console.log(data);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>setShowModal(true),\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    alt: \"Image from API\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 152,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 151,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 175,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 182,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 174,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 197,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"4GOlElvuJ/Irf9qkie2DCLsbsCw=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQUlGLFdBQVU7OzBEQUNiLDhEQUFDRDtnREFDQ0MsV0FBVTtnREFDVk4sTUFBSztnREFDTE8sU0FBUyxJQUFNcEIsYUFBYSxLQUFLOzBEQUNsQzs7Ozs7OzBEQUdELDhEQUFDa0I7Z0RBQ0NDLFdBQVU7Z0RBQ1ZOLE1BQUs7Z0RBQ0xPLFNBQVMsSUFBTTtvREFFZixvQkFBb0I7b0RBQ2xCcEIsYUFBYSxLQUFLO2dEQUNwQjswREFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPVCw4REFBQ3FCO3dCQUFJRixXQUFVOzs7Ozs7OytCQUVmLElBQUk7OztBQUdkLENBQUM7R0F0TXVCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlldy50c3g/OGJkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KHsgYm9vayB9OiBhbnkgKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGU8YW55IHwgbnVsbD4obnVsbCk7XG5cbi8vICAgY29uc3QgYjY0dG9CbG9iID0gKGI2NERhdGE6IGFueSwgY29udGVudFR5cGU9JycsIHNsaWNlU2l6ZT01MTIpID0+IHtcbi8vICAgICBjb25zdCBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSk7XG4vLyAgICAgY29uc3QgYnl0ZUFycmF5cyA9IFtdO1xuICBcbi8vICAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSBzbGljZVNpemUpIHtcbi8vICAgICAgIGNvbnN0IHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xuICBcbi8vICAgICAgIGNvbnN0IGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XG4vLyAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICAgIGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcbi8vICAgICAgIH1cbiAgXG4vLyAgICAgICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XG4vLyAgICAgICBieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcbi8vICAgICB9XG4gIFxuLy8gICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcbi8vICAgICByZXR1cm4gYmxvYjtcbi8vICAgfVxuXG4gIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvLyB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMvMScpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmJvb2suaW1hZ2UpOyBcblxuICAgICAgICBjb25zdCBpbWFnZUpzb24gPSBkYXRhLmJvb2suaW1hZ2U7XG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2ltYWdlSnNvbl0sIHt0eXBlOiAnaW1hZ2UvcG5nJ30pO1xuICAgICAgICBjb25zb2xlLmxvZyhibG9iKTtcbiAgICAgICAgLy8gY29uc3QgYmxvYiA9IGI2NHRvQmxvYihpbWFnZSwgaW1hZ2UpO1xuICAgICAgICAvLyBjb25zdCBibG9iVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgLy8gbGV0IGJsb2JVcmw6IEJsb2IgPSBCbG9iLmZyb20oaW1hZ2UsICdiYXNlNjQnKVxuICAgICAgICAvLyBjb25zdCBiYXNlNjREYXRhID0gXCJhR1Y1SUhSb1pYSmxcIjtcbiAgICAgICAgLy8gY29uc3QgYmFzZTY0ID0gYXdhaXQgZmV0Y2goaW1hZ2UpO1xuICAgICAgICAvLyBjb25zdCBiYXNlNjRSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCR7aW1hZ2V9YCk7XG4gICAgICAgIC8vIGNvbnN0IGJsb2IgPSBhd2FpdCBiYXNlNjQuYmxvYigpO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldEltYWdlKGJsb2IpO1xuXG4gICAgICAgICAgICAvLyBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAvLyBpbWcuc3JjID0gcmVhZGVyLnJlc3VsdDtcblxuXG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgIC8vIHNldEJvb2tzKGRhdGEpO1xuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY2F0Y2ggKGVycilcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYEhBUFBZIEhBUlJZICR7ZXJyfWApO1xuICAgICAgICAvLyAgICAgLy8gc2V0RXJyb3IodHJ1ZSk7XG4gICAgICAgIC8vIH1cblxuICAgIH07XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBmZXRjaEltYWdlcygpO1xuICAgIC8vIH0sIFtdKTtcblxuXG4vLyAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuLy8gICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcblxuXG5cbi8vICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT57XG4vLyAgICAgYm9vay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4vLyAgICAgYm9vay50aXRsZSA9IHRpdGxlXG4vLyAgICAgYm9vay5wcmVkaWN0aW9uVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKVxuLy8gICAgIGNvbnNvbGUubG9nKGJvb2spXG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L2ltYWdlcycsIHtcbi8vICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgfSxcbi8vICAgICAgIC8vIGJvb2sudGl0bGUgPSB0aXRsZVxuLy8gICAgICAgLy8gYm9vay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICBcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgLy8gYm9vay5wdXNoKGRlc2NyaXB0aW9uKSxcbi8vICAgICAgICAgYm9va1xuLy8gICAgICAgICAvLyB0aXRsZTogdGl0bGUsXG4vLyAgICAgICAgIC8vIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuXG4vLyAgICAgICB9KSxcblxuLy8gICAgIH0pO1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4vLyAgIH1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLXBpbmstNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICA+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0zeGxcIj5cblxuXG4gICAgICAgICAgICAgIHsvKmNvbnRlbnQqL31cblxuXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBiZy13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICBNb2RhbCBUaXRsZVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgb3BhY2l0eS01IGgtNiB3LTYgdGV4dC0yeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD1cIkltYWdlIGZyb20gQVBJXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsYWJlbD4gVGl0bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPiBEZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtNiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGJhY2tncm91bmQtdHJhbnNwYXJlbnQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1lbWVyYWxkLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlZpZXciLCJib29rIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImZldGNoSW1hZ2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImltYWdlSnNvbiIsImJsb2IiLCJCbG9iIiwidHlwZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsImgzIiwic3BhbiIsImZvcm0iLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});