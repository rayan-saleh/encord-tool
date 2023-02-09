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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ View; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction View(param) {\n    let { index  } = param;\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [predictions, setPredictions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchImages = async ()=>{\n        const response = await fetch(\"http://localhost:3004/images/\".concat(index + 1));\n        const data = await response.json();\n        const imageJson = data.book.image;\n        setImage(imageJson);\n        console.log(imageJson);\n    };\n    const grabPredictions = async ()=>{\n        const response = await fetch(\"http://localhost:3004/predictions\");\n        const predictions = await response.json();\n        setPredictions(predictions);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        grabPredictions();\n    }, []);\n    function Draw(prediction) {\n        const canvas = document.getElementById(\"canvas\");\n        let context = canvas.getContext(\"2d\");\n        context.fillStyle = \"rgba(76, 174, 120, 0.43)\";\n        context.fillRect(prediction.bbox.x1, prediction.bbox.y1, prediction.bbox.w1, prediction.bbox.h1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                type: \"button\",\n                onClick: ()=>{\n                    setShowModal(true);\n                    fetchImages();\n                },\n                children: \"View\"\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-3xl font-semibold\",\n                                                children: \"Modal Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                    children: \"\\xd7\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative p-6 flex-auto\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            id: \"container\",\n                                            style: {\n                                                display: \"inline-block\",\n                                                position: \"relative\"\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                                                    id: \"canvas\",\n                                                    className: \"absolute flex justify-center items-center z-10\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"absolute bottom-0 right-0 h-16 w-16\",\n                                                        children: \"predictions.bbox.label\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: image,\n                                                    alt: \"\",\n                                                    style: {\n                                                        position: \"relative\",\n                                                        zIndex: 1\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 23\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>setShowModal(false),\n                                                children: \"Close\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    //   handleSubmit();\n                                                    setShowModal(false);\n                                                },\n                                                children: \"Save Changes\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/encord-challenge/src/components/View.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : null\n        ]\n    }, void 0, true);\n}\n_s(View, \"KR1Tz5MRkIp46wHLmcGEBYVvSh8=\");\n_c = View;\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0dBN0h1QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZpZXcudHN4PzhiZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3KHsgaW5kZXggfTogYW55ICkge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbcHJlZGljdGlvbnMsIHNldFByZWRpY3Rpb25zXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9pbWFnZXMvJHtpbmRleCsxfWApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgaW1hZ2VKc29uID0gZGF0YS5ib29rLmltYWdlO1xuICAgIHNldEltYWdlKGltYWdlSnNvbik7XG4gICAgY29uc29sZS5sb2coaW1hZ2VKc29uKTtcbiAgICBcbiAgICB9O1xuXG5cbiAgICBjb25zdCBncmFiUHJlZGljdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDQvcHJlZGljdGlvbnNgKTtcbiAgICAgIGNvbnN0IHByZWRpY3Rpb25zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UHJlZGljdGlvbnMocHJlZGljdGlvbnMpO1xuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGdyYWJQcmVkaWN0aW9ucygpO1xuICAgIH0sIFtdKTtcblxuXG5cblxuXG5mdW5jdGlvbiBEcmF3KHByZWRpY3Rpb246IGFueSk6IGFueSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBsZXQgY29udGV4dDogYW55ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSg3NiwgMTc0LCAxMjAsIDAuNDMpXCI7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHByZWRpY3Rpb24uYmJveC54MSxwcmVkaWN0aW9uLmJib3gueTEscHJlZGljdGlvbi5iYm94LncxLHByZWRpY3Rpb24uYmJveC5oMSk7XG5cbn1cblxuXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLXBpbmstNjAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSBweC02IHB5LTMgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFNob3dNb2RhbCh0cnVlKTsgZmV0Y2hJbWFnZXMoKTt9fVxuICAgICAgPlxuICAgICAgICBWaWV3XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtzaG93TW9kYWwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1hdXRvIGZpeGVkIGluc2V0LTAgei01MCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXctM3hsXCI+XG5cblxuICAgICAgICAgICAgICB7Lypjb250ZW50Ki99XG5cblxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgYmctd2hpdGUgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgIHsvKmhlYWRlciovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC01IGJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtdFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgTW9kYWwgVGl0bGVcbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBtbC1hdXRvIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIHRleHQtYmxhY2sgb3BhY2l0eS01IGZsb2F0LXJpZ2h0IHRleHQtM3hsIGxlYWRpbmctbm9uZSBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudCB0ZXh0LWJsYWNrIG9wYWNpdHktNSBoLTYgdy02IHRleHQtMnhsIGJsb2NrIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lypib2R5Ki99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBwLTYgZmxleC1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxmb3JtID4gKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2PiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIHN0eWxlPXt7ZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19ID5cblxuICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXNcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTEwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgaC0xNiB3LTE2XCI+cHJlZGljdGlvbnMuYmJveC5sYWJlbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvY2FudmFzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9Jycgc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCB6SW5kZXg6IDF9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lypmb290ZXIqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtNiBib3JkZXItdCBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTIwMCByb3VuZGVkLWJcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGJhY2tncm91bmQtdHJhbnNwYXJlbnQgZm9udC1ib2xkIHVwcGVyY2FzZSBweC02IHB5LTIgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1lbWVyYWxkLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgIGhhbmRsZVN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNb2RhbChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlZpZXciLCJpbmRleCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImltYWdlIiwic2V0SW1hZ2UiLCJwcmVkaWN0aW9ucyIsInNldFByZWRpY3Rpb25zIiwiZmV0Y2hJbWFnZXMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJpbWFnZUpzb24iLCJib29rIiwiY29uc29sZSIsImxvZyIsImdyYWJQcmVkaWN0aW9ucyIsIkRyYXciLCJwcmVkaWN0aW9uIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiYm94IiwieDEiLCJ5MSIsIncxIiwiaDEiLCJidXR0b24iLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsImRpdiIsImgzIiwic3BhbiIsImlkIiwic3R5bGUiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJwIiwiaW1nIiwic3JjIiwiYWx0IiwiekluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/View.tsx\n"));

/***/ })

});