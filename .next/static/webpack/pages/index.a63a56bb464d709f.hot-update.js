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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import { Stage, Layer, Rect } from 'react-konva';\nfunction View(param) {\n    let { index  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [predictions, setPredictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchImages = async ()=>{\n        const response = await fetch(\"http://localhost:3004/images/\".concat(index + 1));\n        const data = await response.json();\n        const imageJson = data.book.image;\n        setImage(imageJson);\n        console.log(imageJson);\n    };\n    // plan to draw shapes on image from API\n    // get prediction JSON\n    // set canvas to image /image size\n    // for each prediction in JSON, draw on canvas + text\n    // activate with onClick\n    // grab json\n    // when user press VIEW\n    // pass predictions to draw\n    const grabPredictions = async ()=>{\n        const response = await fetch(\"http://localhost:3004/predictions\");\n        const predictions = await response.json();\n        setPredictions(predictions);\n    // console.log(predictions)\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        grabPredictions();\n    }, []);\n    //   const DrawCanvas = () => {\n    //     return predictions.map((prediction: any, index: any) => (\n    //       <>\n    //       <canvas key={index} id=\"canvas\" className=\"absolute flex justify-center items-center z-10\">\n    //  <p className=\"absolute bottom-0 right-0 h-16 w-16\">prediction.label</p>\n    //  </canvas>\n    //  {Draw(prediction.bbox.x1,prediction.bbox.y1,prediction.bbox.w1,prediction.bbox.h1)}\n    //       </>\n    //     ) \n    //     )\n    // }\n    function Draw(x, y, w, h) {\n        // console.log(document.getElementById('canvas'))\n        const canvas = document.getElementById(\"canvas\");\n        // if (canvas){\n        let context = canvas.getContext(\"2d\");\n        context.fillStyle = \"rgba(76, 174, 120, 0.43)\";\n        context.fillRect(x, y, w, h);\n    // context.clearRect(40,40,60,60);\n    // context.strokeRect(45,45,50,50);\n    // }\n    //   return (\n    //     <>\n    //     {/* <div id=\"container\" style={{display: \"inline-block\", position: \"relative\"}}> */}\n    // {predictions.map((prediction: any, index: any) => (\n    //   <canvas key={index} id=\"canvas\" className=\"absolute flex justify-center items-center z-10\">\n    //      <p className=\"absolute bottom-0 right-0 h-16 w-16\">text</p>\n    //    </canvas>\n    //  ))}\n    //  {/* <img src={image}  style={{position: \"relative\", zIndex: 1}}/> */}\n    //  {/* </div> */}\n    //     </>\n    //   );\n    }\n    // }} ,[drawShapes])  \n    // c.strokeStyle = 'white'\n    // c.fillStyle = 'blue'\n    // c.rect(100, 20, 150, 100)\n    // c.stroke()\n    // c.fill()\n    // c.fillStyle = 'red'\n    // c.fillRect(400, 500, 300, 250)\n    // // Uncomment to remove the first two blocks\n    // // c.clearRect(0, 0, canvas.width, canvas.height)\n    // c.fillStyle = 'green'\n    // c.fillRect(1500, 500, 300, 250)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>{\n                    setShowModal(true);\n                    fetchImages();\n                },\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 163,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 170,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 166,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"container\",\n                                            style: {\n                                                display: \"inline-block\",\n                                                position: \"relative\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                                    id: \"canvas\",\n                                                    className: \"absolute flex justify-center items-center z-10\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"absolute bottom-0 right-0 h-16 w-16\",\n                                                        children: \"predictions.bbox.label\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                        lineNumber: 191,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, index, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 190,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    style: {\n                                                        position: \"relative\",\n                                                        zIndex: 1\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 196,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 180,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 176,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 222,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 229,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 221,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 160,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 244,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"KR1Tz5MRkIp46wHLmcGEBYVvSh8=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlILFdBQVU7a0RBSVgsNEVBQUNHOzRDQUFJRyxJQUFHOzRDQUFZQyxPQUFPO2dEQUFDQyxTQUFTO2dEQUFnQkMsVUFBVTs0Q0FBVTs7OERBVXpFLDhEQUFDakI7b0RBQW1CYyxJQUFHO29EQUFTTixXQUFVOzhEQUN4Qyw0RUFBQ1U7d0RBQUVWLFdBQVU7a0VBQXNDOzs7Ozs7bURBRHhDOUI7Ozs7OzhEQU1YLDhEQUFDeUM7b0RBQUlDLEtBQUt2QztvREFBUWtDLE9BQU87d0RBQUNFLFVBQVU7d0RBQVlJLFFBQVE7b0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQXlCL0QsOERBQUNWO3dDQUFJSCxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQ0NDLFdBQVU7Z0RBQ1ZDLE1BQUs7Z0RBQ0xDLFNBQVMsSUFBTTlCLGFBQWEsS0FBSzswREFDbEM7Ozs7OzswREFHRCw4REFBQzJCO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU07b0RBRWYsb0JBQW9CO29EQUNsQjlCLGFBQWEsS0FBSztnREFDcEI7MERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1QsOERBQUMrQjt3QkFBSUgsV0FBVTs7Ozs7OzsrQkFFZixJQUFJOzs7QUFHZCxDQUFDO0dBblB1Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZXcudHN4PzhiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBTdGFnZSwgTGF5ZXIsIFJlY3QgfSBmcm9tICdyZWFjdC1rb252YSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KHsgaW5kZXggfTogYW55ICkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcHJlZGljdGlvbnMsIHNldFByZWRpY3Rpb25zXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMvJHtpbmRleCsxfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgaW1hZ2VKc29uID0gZGF0YS5ib29rLmltYWdlO1xuICAgIHNldEltYWdlKGltYWdlSnNvbik7XG4gICAgY29uc29sZS5sb2coaW1hZ2VKc29uKTtcbiAgICBcbiAgICB9O1xuXG4gICAgLy8gcGxhbiB0byBkcmF3IHNoYXBlcyBvbiBpbWFnZSBmcm9tIEFQSVxuICAgIC8vIGdldCBwcmVkaWN0aW9uIEpTT05cbiAgICAvLyBzZXQgY2FudmFzIHRvIGltYWdlIC9pbWFnZSBzaXplXG4gICAgLy8gZm9yIGVhY2ggcHJlZGljdGlvbiBpbiBKU09OLCBkcmF3IG9uIGNhbnZhcyArIHRleHRcbiAgICAvLyBhY3RpdmF0ZSB3aXRoIG9uQ2xpY2tcblxuICAgIC8vIGdyYWIganNvblxuICAgIC8vIHdoZW4gdXNlciBwcmVzcyBWSUVXXG4gICAgLy8gcGFzcyBwcmVkaWN0aW9ucyB0byBkcmF3XG5cblxuXG5cblxuXG4gICAgY29uc3QgZ3JhYlByZWRpY3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L3ByZWRpY3Rpb25zYCk7XG4gICAgICBjb25zdCBwcmVkaWN0aW9ucyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFByZWRpY3Rpb25zKHByZWRpY3Rpb25zKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHByZWRpY3Rpb25zKVxuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGdyYWJQcmVkaWN0aW9ucygpO1xuICAgIH0sIFtdKTtcblxuXG4gIC8vICAgY29uc3QgRHJhd0NhbnZhcyA9ICgpID0+IHtcbiAgICAgIFxuICAvLyAgICAgcmV0dXJuIHByZWRpY3Rpb25zLm1hcCgocHJlZGljdGlvbjogYW55LCBpbmRleDogYW55KSA9PiAoXG4gIC8vICAgICAgIDw+XG4gICAgICAgICBcblxuICAvLyAgICAgICA8Y2FudmFzIGtleT17aW5kZXh9IGlkPVwiY2FudmFzXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0xMFwiPlxuICAvLyAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCBoLTE2IHctMTZcIj5wcmVkaWN0aW9uLmxhYmVsPC9wPlxuXG4gIC8vICA8L2NhbnZhcz5cblxuICAvLyAge0RyYXcocHJlZGljdGlvbi5iYm94LngxLHByZWRpY3Rpb24uYmJveC55MSxwcmVkaWN0aW9uLmJib3gudzEscHJlZGljdGlvbi5iYm94LmgxKX1cblxuICAgICAgICAgIFxuXG5cblxuICAvLyAgICAgICA8Lz5cbiAgICAgIFxuXG5cbiAgLy8gICAgICkgXG4gIC8vICAgICApXG4gIC8vIH1cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gRHJhdyh4OiBudW1iZXIseTogbnVtYmVyLHc6IG51bWJlcixoOiBudW1iZXIpIHtcbiAgLy8gY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpKVxuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgLy8gaWYgKGNhbnZhcyl7XG4gICAgbGV0IGNvbnRleHQ6IGFueSA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoNzYsIDE3NCwgMTIwLCAwLjQzKVwiO1xuICAgICAgY29udGV4dC5maWxsUmVjdCh4LHksdyxoKTtcbiAgICAgIC8vIGNvbnRleHQuY2xlYXJSZWN0KDQwLDQwLDYwLDYwKTtcbiAgICAgIC8vIGNvbnRleHQuc3Ryb2tlUmVjdCg0NSw0NSw1MCw1MCk7XG4gICAgXG4gIC8vIH1cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuICAgIFxuICAgIFxuLy8gICAgIHsvKiA8ZGl2IGlkPVwiY29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+ICovfVxuXG4vLyB7cHJlZGljdGlvbnMubWFwKChwcmVkaWN0aW9uOiBhbnksIGluZGV4OiBhbnkpID0+IChcblxuLy8gICA8Y2FudmFzIGtleT17aW5kZXh9IGlkPVwiY2FudmFzXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0xMFwiPlxuXG4vLyAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgaC0xNiB3LTE2XCI+dGV4dDwvcD5cblxuLy8gICAgPC9jYW52YXM+XG4vLyAgKSl9XG5cbi8vICB7LyogPGltZyBzcmM9e2ltYWdlfSAgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB6SW5kZXg6IDF9fS8+ICovfVxuXG4vLyAgey8qIDwvZGl2PiAqL31cbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbi8vICAgICA8Lz5cbi8vICAgKTtcbn1cbiAgLy8gfX0gLFtkcmF3U2hhcGVzXSkgIFxuXG5cbi8vIGMuc3Ryb2tlU3R5bGUgPSAnd2hpdGUnXG4vLyBjLmZpbGxTdHlsZSA9ICdibHVlJ1xuLy8gYy5yZWN0KDEwMCwgMjAsIDE1MCwgMTAwKVxuLy8gYy5zdHJva2UoKVxuLy8gYy5maWxsKClcblxuLy8gYy5maWxsU3R5bGUgPSAncmVkJ1xuLy8gYy5maWxsUmVjdCg0MDAsIDUwMCwgMzAwLCAyNTApXG5cbi8vIC8vIFVuY29tbWVudCB0byByZW1vdmUgdGhlIGZpcnN0IHR3byBibG9ja3Ncbi8vIC8vIGMuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbi8vIGMuZmlsbFN0eWxlID0gJ2dyZWVuJ1xuLy8gYy5maWxsUmVjdCgxNTAwLCA1MDAsIDMwMCwgMjUwKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1waW5rLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRTaG93TW9kYWwodHJ1ZSk7IGZldGNoSW1hZ2VzKCk7fX1cbiAgICAgID5cbiAgICAgICAgVmlld1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd01vZGFsID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxuXG5cbiAgICAgICAgICAgICAgey8qY29udGVudCovfVxuXG5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICB7LypoZWFkZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHAtNSBib3JkZXItYiBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLXRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIE1vZGFsIFRpdGxlXG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0byBiZy10cmFuc3BhcmVudCBib3JkZXItMCB0ZXh0LWJsYWNrIG9wYWNpdHktNSBmbG9hdC1yaWdodCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1ibGFjayBvcGFjaXR5LTUgaC02IHctNiB0ZXh0LTJ4bCBibG9jayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qYm9keSovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC02IGZsZXgtYXV0b1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8Zm9ybSA+ICovfVxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBzdHlsZT17e2Rpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgey8qIHtwcmVkaWN0aW9ucy5tYXAoKHByZWRpY3Rpb246IGFueSwgaW5kZXg6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyBrZXk9e2luZGV4fSBpZD1cImNhbnZhc1wiIGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotMTBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIGgtMTYgdy0xNlwiPnRleHQ8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2FudmFzPlxuICAgICAgICAgICAgICAgICAgICAgICkpfSAqL31cblxuICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGtleT17aW5kZXh9IGlkPVwiY2FudmFzXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgaC0xNiB3LTE2XCI+cHJlZGljdGlvbnMuYmJveC5sYWJlbDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvY2FudmFzPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9ICBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCIsIHpJbmRleDogMX19Lz5cblxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuIFxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2RyYXd9PkRyYXc8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxhYmVsPiBUaXRsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+IERlc2NyaXB0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8L2Zvcm0+ICovfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZCBwLTYgYm9yZGVyLXQgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC1iXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtNiBweS0yIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZW1lcmFsZC01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctZW1lcmFsZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gICBoYW5kbGVTdWJtaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGFjaXR5LTI1IGZpeGVkIGluc2V0LTAgei00MCBiZy1ibGFja1wiPjwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJWaWV3IiwiaW5kZXgiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJpbWFnZSIsInNldEltYWdlIiwicHJlZGljdGlvbnMiLCJzZXRQcmVkaWN0aW9ucyIsImZldGNoSW1hZ2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiaW1hZ2VKc29uIiwiYm9vayIsImNvbnNvbGUiLCJsb2ciLCJncmFiUHJlZGljdGlvbnMiLCJEcmF3IiwieCIsInkiLCJ3IiwiaCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJkaXYiLCJoMyIsInNwYW4iLCJpZCIsInN0eWxlIiwiZGlzcGxheSIsInBvc2l0aW9uIiwicCIsImltZyIsInNyYyIsInpJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});