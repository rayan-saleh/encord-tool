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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction View(param) {\n    let { book  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    let imageUrl;\n    //   const b64toBlob = (b64Data: any, contentType='', sliceSize=512) => {\n    //     const byteCharacters = atob(b64Data);\n    //     const byteArrays = [];\n    //     for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {\n    //       const slice = byteCharacters.slice(offset, offset + sliceSize);\n    //       const byteNumbers = new Array(slice.length);\n    //       for (let i = 0; i < slice.length; i++) {\n    //         byteNumbers[i] = slice.charCodeAt(i);\n    //       }\n    //       const byteArray = new Uint8Array(byteNumbers);\n    //       byteArrays.push(byteArray);\n    //     }\n    //     const blob = new Blob(byteArrays, {type: contentType});\n    //     return blob;\n    //   }\n    const fetchImages = async ()=>{\n        const response = await fetch(\"http://localhost:3004/images/1\");\n        const data = await response.json();\n        const imageJson = data.book.image;\n        let blob = new Blob([\n            imageJson\n        ], {\n            type: \"image/png;base64\"\n        });\n        // console.log(blob);\n        const reader = new FileReader();\n        reader.readAsDataURL(blob);\n        reader.onload = ()=>{\n            setImage(reader.result);\n            console.log(reader.result);\n        };\n    // let  urlCreator = window.URL || window.webkitURL;\n    // imageUrl = urlCreator.createObjectURL(blob);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchImages();\n    }, [\n        image\n    ]);\n    //   const [title, setTitle] = useState('');\n    //   const [description, setDescription] = useState('');\n    //   const handleSubmit = async () =>{\n    //     book.description = description\n    //     book.title = title\n    //     book.predictionTime = new Date().toLocaleString()\n    //     console.log(book)\n    //     const response = await fetch('http://localhost:3004/images', {\n    //       method: 'POST',\n    //       headers: {\n    //         'Content-Type': 'application/json',\n    //       },\n    //       // book.title = title\n    //       // book.description = description\n    //       body: JSON.stringify({\n    //         // book.push(description),\n    //         book\n    //         // title: title,\n    //         // description: description\n    //       }),\n    //     });\n    //     console.log(response);\n    //     const data = await response.json();\n    //     console.log(data);\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>setShowModal(true),\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    alt: \"Image from API\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 25\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 128,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 153,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 160,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 175,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"0x7FDQZlFzPvajkOJymjhltU1wk=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQnRCLGFBQWEsS0FBSztnREFDcEI7MERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1QsOERBQUN1Qjt3QkFBSUYsV0FBVTs7Ozs7OzsrQkFFZixJQUFJOzs7QUFHZCxDQUFDO0dBaEx1QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZXcudHN4PzhiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlldyh7IGJvb2sgfTogYW55ICkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBsZXQgaW1hZ2VVcmw6IGFueTtcblxuLy8gICBjb25zdCBiNjR0b0Jsb2IgPSAoYjY0RGF0YTogYW55LCBjb250ZW50VHlwZT0nJywgc2xpY2VTaXplPTUxMikgPT4ge1xuLy8gICAgIGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcbi8vICAgICBjb25zdCBieXRlQXJyYXlzID0gW107XG4gIFxuLy8gICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuLy8gICAgICAgY29uc3Qgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XG4gIFxuLy8gICAgICAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcbi8vICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xuLy8gICAgICAgfVxuICBcbi8vICAgICAgIGNvbnN0IGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcbi8vICAgICAgIGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xuLy8gICAgIH1cbiAgXG4vLyAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuLy8gICAgIHJldHVybiBibG9iO1xuLy8gICB9XG5cbiAgY29uc3QgZmV0Y2hJbWFnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMvMScpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBpbWFnZUpzb24gPSBkYXRhLmJvb2suaW1hZ2U7XG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2ltYWdlSnNvbl0sIHt0eXBlOiAnaW1hZ2UvcG5nO2Jhc2U2NCd9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYmxvYik7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4geyAgICAgXG4gICAgICAgICAgICBzZXRJbWFnZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgXG5cbiAgICAgICAgLy8gbGV0ICB1cmxDcmVhdG9yID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMO1xuICAgICAgICAvLyBpbWFnZVVybCA9IHVybENyZWF0b3IuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICBcbiAgICAgICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoSW1hZ2VzKCk7XG4gICAgfSwgW2ltYWdlXSk7XG5cblxuLy8gICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbi8vICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuXG4vLyAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+e1xuLy8gICAgIGJvb2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuLy8gICAgIGJvb2sudGl0bGUgPSB0aXRsZVxuLy8gICAgIGJvb2sucHJlZGljdGlvblRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKClcbi8vICAgICBjb25zb2xlLmxvZyhib29rKVxuLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMnLCB7XG4vLyAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgIH0sXG4vLyAgICAgICAvLyBib29rLnRpdGxlID0gdGl0bGVcbi8vICAgICAgIC8vIGJvb2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgXG4vLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgIC8vIGJvb2sucHVzaChkZXNjcmlwdGlvbiksXG4vLyAgICAgICAgIGJvb2tcbi8vICAgICAgICAgLy8gdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICAvLyBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cblxuLy8gICAgICAgfSksXG5cbi8vICAgICB9KTtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuLy8gICB9XG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1waW5rLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKHRydWUpfVxuICAgICAgPlxuICAgICAgICBWaWV3XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzaG93TW9kYWwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkIGluc2V0LTAgei01MCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXctM3hsXCI+XG5cblxuICAgICAgICAgICAgICB7Lypjb250ZW50Ki99XG5cblxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgIHsvKmhlYWRlciovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC01IGJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtdFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9kYWwgVGl0bGVcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBtbC1hdXRvIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIHRleHQtYmxhY2sgb3BhY2l0eS01IGZsb2F0LXJpZ2h0IHRleHQtM3hsIGxlYWRpbmctbm9uZSBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWJsYWNrIG9wYWNpdHktNSBoLTYgdy02IHRleHQtMnhsIGJsb2NrIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lypib2R5Ki99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTYgZmxleC1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJJbWFnZSBmcm9tIEFQSVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+IFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gRGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXQgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1iXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNiBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTI1IGZpeGVkIGluc2V0LTAgei00MCBiZy1ibGFja1wiPjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJWaWV3IiwiYm9vayIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZVVybCIsImZldGNoSW1hZ2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaW1hZ2VKc29uIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImRpdiIsImgzIiwic3BhbiIsImZvcm0iLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});