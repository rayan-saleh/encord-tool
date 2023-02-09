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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// import { Stage, Layer, Rect } from 'react-konva';\nfunction View(param) {\n    let { index  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchImages = async ()=>{\n        const response = await fetch(\"http://localhost:3004/images/\".concat(index + 1));\n        const data = await response.json();\n        const imageJson = data.book.image;\n        setImage(imageJson);\n        console.log(imageJson);\n    };\n    // plan to draw shapes on image from API\n    // get prediction JSON\n    // set canvas to image /image size\n    // for each prediction in JSON, draw on canvas + text\n    // activate with onClick\n    const drawShapes = async ()=>{\n        const response = await fetch(\"http://localhost:3004/predictions\");\n    };\n    // // getting a reference to our HTML element\n    //     const canvas = document.querySelector('canvas')\n    //     // initiating 2D context on it\n    //     const c: any = canvas.getContext('2d')\n    //     addEventListener('resize', () => {\n    //       canvas.width = innerWidth\n    //       canvas.height = innerHeight\n    // }) \n    // useEffect(() => {\n    function draw() {\n        console.log(document.getElementById(\"canvas\"));\n        const canvas = document.getElementById(\"canvas\");\n        // if (canvas){\n        let context = canvas.getContext(\"2d\");\n        context.fillRect(20, 20, 100, 100);\n        context.clearRect(40, 40, 60, 60);\n        context.strokeRect(45, 45, 50, 50);\n    // }\n    }\n    // }} ,[drawShapes])  \n    // c.strokeStyle = 'white'\n    // c.fillStyle = 'blue'\n    // c.rect(100, 20, 150, 100)\n    // c.stroke()\n    // c.fill()\n    // c.fillStyle = 'red'\n    // c.fillRect(400, 500, 300, 250)\n    // // Uncomment to remove the first two blocks\n    // // c.clearRect(0, 0, canvas.width, canvas.height)\n    // c.fillStyle = 'green'\n    // c.fillRect(1500, 500, 300, 250)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>{\n                    setShowModal(true);\n                    fetchImages();\n                },\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"container\",\n                                            style: {\n                                                display: \"inline-block\",\n                                                position: \"relative\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                                    id: \"canvas\",\n                                                    style: {\n                                                        position: \"relative\",\n                                                        zIndex: 20\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 119,\n                                                    columnNumber: 23\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    onLoad: draw,\n                                                    style: {\n                                                        position: \"absolute\",\n                                                        zIndex: 1\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 112,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 154,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"4GOlElvuJ/Irf9qkie2DCLsbsCw=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsS0FBSzswREFDbEM7Ozs7OzswREFHRCw4REFBQ3NCO2dEQUNDQyxXQUFVO2dEQUNWQyxNQUFLO2dEQUNMQyxTQUFTLElBQU07b0RBRWYsb0JBQW9CO29EQUNsQnpCLGFBQWEsS0FBSztnREFDcEI7MERBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBT1QsOERBQUMwQjt3QkFBSUgsV0FBVTs7Ozs7OzsrQkFFZixJQUFJOzs7QUFHZCxDQUFDO0dBeEt1QjFCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZXcudHN4PzhiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBTdGFnZSwgTGF5ZXIsIFJlY3QgfSBmcm9tICdyZWFjdC1rb252YSc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KHsgaW5kZXggfTogYW55ICkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMvJHtpbmRleCsxfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgaW1hZ2VKc29uID0gZGF0YS5ib29rLmltYWdlO1xuICAgIHNldEltYWdlKGltYWdlSnNvbik7XG4gICAgY29uc29sZS5sb2coaW1hZ2VKc29uKTtcbiAgICBcbiAgICB9O1xuXG4gICAgLy8gcGxhbiB0byBkcmF3IHNoYXBlcyBvbiBpbWFnZSBmcm9tIEFQSVxuICAgIC8vIGdldCBwcmVkaWN0aW9uIEpTT05cbiAgICAvLyBzZXQgY2FudmFzIHRvIGltYWdlIC9pbWFnZSBzaXplXG4gICAgLy8gZm9yIGVhY2ggcHJlZGljdGlvbiBpbiBKU09OLCBkcmF3IG9uIGNhbnZhcyArIHRleHRcbiAgICAvLyBhY3RpdmF0ZSB3aXRoIG9uQ2xpY2tcblxuXG4gICAgY29uc3QgZHJhd1NoYXBlcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9wcmVkaWN0aW9uc2ApO1xuICAgIH1cblxuLy8gLy8gZ2V0dGluZyBhIHJlZmVyZW5jZSB0byBvdXIgSFRNTCBlbGVtZW50XG4vLyAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJylcblxuLy8gICAgIC8vIGluaXRpYXRpbmcgMkQgY29udGV4dCBvbiBpdFxuLy8gICAgIGNvbnN0IGM6IGFueSA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbi8vICAgICBhZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4vLyAgICAgICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoXG4vLyAgICAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHRcbi8vIH0pIFxuLy8gdXNlRWZmZWN0KCgpID0+IHtcbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSlcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG4gIC8vIGlmIChjYW52YXMpe1xuICAgIGxldCBjb250ZXh0OiBhbnkgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QoMjAsMjAsMTAwLDEwMCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCg0MCw0MCw2MCw2MCk7XG4gICAgICBjb250ZXh0LnN0cm9rZVJlY3QoNDUsNDUsNTAsNTApO1xuICAgIFxuICAvLyB9XG59XG4gIC8vIH19ICxbZHJhd1NoYXBlc10pICBcblxuXG4vLyBjLnN0cm9rZVN0eWxlID0gJ3doaXRlJ1xuLy8gYy5maWxsU3R5bGUgPSAnYmx1ZSdcbi8vIGMucmVjdCgxMDAsIDIwLCAxNTAsIDEwMClcbi8vIGMuc3Ryb2tlKClcbi8vIGMuZmlsbCgpXG5cbi8vIGMuZmlsbFN0eWxlID0gJ3JlZCdcbi8vIGMuZmlsbFJlY3QoNDAwLCA1MDAsIDMwMCwgMjUwKVxuXG4vLyAvLyBVbmNvbW1lbnQgdG8gcmVtb3ZlIHRoZSBmaXJzdCB0d28gYmxvY2tzXG4vLyAvLyBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG4vLyBjLmZpbGxTdHlsZSA9ICdncmVlbidcbi8vIGMuZmlsbFJlY3QoMTUwMCwgNTAwLCAzMDAsIDI1MClcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgdGV4dC13aGl0ZSBhY3RpdmU6YmctcGluay02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0U2hvd01vZGFsKHRydWUpOyBmZXRjaEltYWdlcygpO319XG4gICAgICA+XG4gICAgICAgIFZpZXdcbiAgICAgIDwvYnV0dG9uPlxuICAgICAge3Nob3dNb2RhbCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gZml4ZWQgaW5zZXQtMCB6LTUwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1hdXRvIG15LTYgbXgtYXV0byBtYXgtdy0zeGxcIj5cblxuXG4gICAgICAgICAgICAgIHsvKmNvbnRlbnQqL31cblxuXG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMCByb3VuZGVkLWxnIHNoYWRvdy1sZyByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBiZy13aGl0ZSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBwLTUgYm9yZGVyLWIgYm9yZGVyLXNvbGlkIGJvcmRlci1zbGF0ZS0yMDAgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICBNb2RhbCBUaXRsZVxuICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIG1sLWF1dG8gYmctdHJhbnNwYXJlbnQgYm9yZGVyLTAgdGV4dC1ibGFjayBvcGFjaXR5LTUgZmxvYXQtcmlnaHQgdGV4dC0zeGwgbGVhZGluZy1ub25lIGZvbnQtc2VtaWJvbGQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgb3BhY2l0eS01IGgtNiB3LTYgdGV4dC0yeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKmJvZHkqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGZvcm0gPiAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDxkaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgc3R5bGU9e3tkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XG4gXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e2ltYWdlfSBhbHQ9XCJJbWFnZSBmcm9tIEFQSVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2ltYWdlfSAgKi99XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCIgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB6SW5kZXg6IDIwfX0+PC9jYW52YXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IG9uTG9hZCA9e2RyYXd9IHN0eWxlPXt7cG9zaXRpb246IFwiYWJzb2x1dGVcIiwgekluZGV4OiAxfX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17ZHJhd30+RHJhdzwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGFiZWw+IFRpdGxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gRGVzY3JpcHRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDwvZm9ybT4gKi99XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtNiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGJhY2tncm91bmQtdHJhbnNwYXJlbnQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1lbWVyYWxkLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlZpZXciLCJpbmRleCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImltYWdlIiwic2V0SW1hZ2UiLCJmZXRjaEltYWdlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImltYWdlSnNvbiIsImJvb2siLCJjb25zb2xlIiwibG9nIiwiZHJhd1NoYXBlcyIsImRyYXciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJmaWxsUmVjdCIsImNsZWFyUmVjdCIsInN0cm9rZVJlY3QiLCJidXR0b24iLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImRpdiIsImgzIiwic3BhbiIsImlkIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJpbWciLCJzcmMiLCJvbkxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});