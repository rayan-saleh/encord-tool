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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction View(param) {\n    let { book  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    //   const b64toBlob = (b64Data: any, contentType='', sliceSize=512) => {\n    //     const byteCharacters = atob(b64Data);\n    //     const byteArrays = [];\n    //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {\n    //       const slice = byteCharacters.slice(offset, offset + sliceSize);\n    //       const byteNumbers = new Array(slice.length);\n    //       for (let i = 0; i < slice.length; i++) {\n    //         byteNumbers[i] = slice.charCodeAt(i);\n    //       }\n    //       const byteArray = new Uint8Array(byteNumbers);\n    //       byteArrays.push(byteArray);\n    //     }\n    //     const blob = new Blob(byteArrays, {type: contentType});\n    //     return blob;\n    //   }\n    const fetchImages = async ()=>{\n        // try{\n        const response = await fetch(\"http://localhost:3004/images/1\");\n        const data = await response.json();\n        console.log(data.book.image);\n        const imageJson = data.book.image;\n        let blob = new Blob([\n            imageJson\n        ], {\n            type: \"image/png\"\n        });\n        console.log(blob);\n        // const blob = b64toBlob(image, image);\n        // const blobUrl = URL.createObjectURL(blob);\n        // let blobUrl: Blob = Blob.from(image, 'base64')\n        // const base64Data = \"aGV5IHRoZXJl\";\n        // const base64 = await fetch(image);\n        // const base64Response = await fetch(`data:image/jpeg;base64,${image}`);\n        // const blob = await base64.blob();\n        const reader = new FileReader();\n        reader.readAsDataURL(blob);\n        reader.onloadend = ()=>{\n            setImage(blob);\n        // let img = new Image();\n        // img.src = reader.result;\n        };\n    // setBooks(data);\n    // }\n    // catch (err)\n    // {\n    //     console.log(`HAPPY HARRY ${err}`);\n    //     // setError(true);\n    // }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchImages();\n    }, []);\n    //   const [title, setTitle] = useState('');\n    //   const [description, setDescription] = useState('');\n    //   const handleSubmit = async () =>{\n    //     book.description = description\n    //     book.title = title\n    //     book.predictionTime = new Date().toLocaleString()\n    //     console.log(book)\n    //     const response = await fetch('http://localhost:3004/images', {\n    //       method: 'POST',\n    //       headers: {\n    //         'Content-Type': 'application/json',\n    //       },\n    //       // book.title = title\n    //       // book.description = description\n    //       body: JSON.stringify({\n    //         // book.push(description),\n    //         book\n    //         // title: title,\n    //         // description: description\n    //       }),\n    //     });\n    //     console.log(response);\n    //     const data = await response.json();\n    //     console.log(data);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>setShowModal(true),\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    alt: \"Image from API\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 152,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 151,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 150,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 175,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 182,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 174,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 132,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 197,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"0x7FDQZlFzPvajkOJymjhltU1wk=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDTjt3Q0FBSUYsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUNDQyxXQUFVO2dEQUNWTixNQUFLO2dEQUNMTyxTQUFTLElBQU1wQixhQUFhLEtBQUs7MERBQ2xDOzs7Ozs7MERBR0QsOERBQUNrQjtnREFDQ0MsV0FBVTtnREFDVk4sTUFBSztnREFDTE8sU0FBUyxJQUFNO29EQUVmLG9CQUFvQjtvREFDbEJwQixhQUFhLEtBQUs7Z0RBQ3BCOzBEQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9ULDhEQUFDcUI7d0JBQUlGLFdBQVU7Ozs7Ozs7K0JBRWYsSUFBSTs7O0FBR2QsQ0FBQztHQXRNdUJ0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9WaWV3LnRzeD84YmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXcoeyBib29rIH06IGFueSApIHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZTxhbnkgfCBudWxsPihudWxsKTtcblxuLy8gICBjb25zdCBiNjR0b0Jsb2IgPSAoYjY0RGF0YTogYW55LCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikgPT4ge1xuLy8gICAgIGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcbi8vICAgICBjb25zdCBieXRlQXJyYXlzID0gW107XG4gIFxuLy8gICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuLy8gICAgICAgY29uc3Qgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XG4gIFxuLy8gICAgICAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcbi8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcbi8vICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xuLy8gICAgIH1cbiAgXG4vLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuLy8gICAgIHJldHVybiBibG9iO1xuLy8gICB9XG5cbiAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L2ltYWdlcy8xJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuYm9vay5pbWFnZSk7IFxuXG4gICAgICAgIGNvbnN0IGltYWdlSnNvbiA9IGRhdGEuYm9vay5pbWFnZTtcbiAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbaW1hZ2VKc29uXSwge3R5cGU6ICdpbWFnZS9wbmcnfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGJsb2IpO1xuICAgICAgICAvLyBjb25zdCBibG9iID0gYjY0dG9CbG9iKGltYWdlLCBpbWFnZSk7XG4gICAgICAgIC8vIGNvbnN0IGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAvLyBsZXQgYmxvYlVybDogQmxvYiA9IEJsb2IuZnJvbShpbWFnZSwgJ2Jhc2U2NCcpXG4gICAgICAgIC8vIGNvbnN0IGJhc2U2NERhdGEgPSBcImFHVjVJSFJvWlhKbFwiO1xuICAgICAgICAvLyBjb25zdCBiYXNlNjQgPSBhd2FpdCBmZXRjaChpbWFnZSk7XG4gICAgICAgIC8vIGNvbnN0IGJhc2U2NFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGRhdGE6aW1hZ2UvanBlZztiYXNlNjQsJHtpbWFnZX1gKTtcbiAgICAgICAgLy8gY29uc3QgYmxvYiA9IGF3YWl0IGJhc2U2NC5ibG9iKCk7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgc2V0SW1hZ2UoYmxvYik7XG5cbiAgICAgICAgICAgIC8vIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIC8vIGltZy5zcmMgPSByZWFkZXIucmVzdWx0O1xuXG5cbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgLy8gc2V0Qm9va3MoZGF0YSk7XG5cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjYXRjaCAoZXJyKVxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhgSEFQUFkgSEFSUlkgJHtlcnJ9YCk7XG4gICAgICAgIC8vICAgICAvLyBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgLy8gfVxuXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoSW1hZ2VzKCk7XG4gICAgfSwgW10pO1xuXG5cbi8vICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4vLyAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuXG5cblxuLy8gICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9Pntcbi8vICAgICBib29rLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbi8vICAgICBib29rLnRpdGxlID0gdGl0bGVcbi8vICAgICBib29rLnByZWRpY3Rpb25UaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpXG4vLyAgICAgY29uc29sZS5sb2coYm9vaylcbi8vICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDQvaW1hZ2VzJywge1xuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICB9LFxuLy8gICAgICAgLy8gYm9vay50aXRsZSA9IHRpdGxlXG4vLyAgICAgICAvLyBib29rLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgIFxuLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICAvLyBib29rLnB1c2goZGVzY3JpcHRpb24pLFxuLy8gICAgICAgICBib29rXG4vLyAgICAgICAgIC8vIHRpdGxlOiB0aXRsZSxcbi8vICAgICAgICAgLy8gZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG5cbi8vICAgICAgIH0pLFxuXG4vLyAgICAgfSk7XG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbi8vICAgfVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctcGluay02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cbiAgICAgID5cbiAgICAgICAgVmlld1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd01vZGFsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxuXG5cbiAgICAgICAgICAgICAgey8qY29udGVudCovfVxuXG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtNSBib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vZGFsIFRpdGxlXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0byBiZy10cmFuc3BhcmVudCBib3JkZXItMCB0ZXh0LWJsYWNrIG9wYWNpdHktNSBmbG9hdC1yaWdodCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBvcGFjaXR5LTUgaC02IHctNiB0ZXh0LTJ4bCBibG9jayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qYm9keSovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC02IGZsZXgtYXV0b1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiSW1hZ2UgZnJvbSBBUElcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxhYmVsPiBUaXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IERlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmZvb3RlciovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgcC02IGJvcmRlci10IGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtYlwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgYmFja2dyb3VuZC10cmFuc3BhcmVudCBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWVtZXJhbGQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLWVtZXJhbGQtNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaGFuZGxlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BhY2l0eS0yNSBmaXhlZCBpbnNldC0wIHotNDAgYmctYmxhY2tcIj48L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVmlldyIsImJvb2siLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJpbWFnZSIsInNldEltYWdlIiwiZmV0Y2hJbWFnZXMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VKc29uIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwiaDMiLCJzcGFuIiwiZm9ybSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});