"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/pdf-qa-app.tsx":
/*!***********************************!*\
  !*** ./components/pdf-qa-app.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PdfQaApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PdfQaApp() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAsking, setIsAsking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [documentId, setDocumentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = (e)=>{\n        if (e.target.files) {\n            setFile(e.target.files[0]);\n        }\n    };\n    const handleUpload = async ()=>{\n        if (!file) return;\n        setIsUploading(true);\n        try {\n            // Convert file to base64\n            const base64File = await new Promise((resolve, reject)=>{\n                const reader = new FileReader();\n                reader.readAsDataURL(file);\n                reader.onload = ()=>{\n                    const base64String = reader.result.split(\",\")[1];\n                    resolve(base64String);\n                };\n                reader.onerror = reject;\n            });\n            const response = await fetch(\"https://y83l6ljmqa.execute-api.us-east-1.amazonaws.com/Prod/upload\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                mode: \"cors\",\n                body: JSON.stringify(base64File)\n            });\n            if (!response.ok) {\n                throw new Error(\"Upload failed\");\n            }\n            const data = await response.json();\n            console.log(\"cookies\", data);\n            setDocumentId(data.file_key);\n            setIsUploading(false);\n        } catch (error) {\n            console.error(\"Error uploading file:\", error);\n            setIsUploading(false);\n        }\n    };\n    const handleAskQuestion = async ()=>{\n        if (!question || !documentId) return;\n        setIsAsking(true);\n        try {\n            const response = await fetch(\"https://y83l6ljmqa.execute-api.us-east-1.amazonaws.com/Prod/ask\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    file_key: documentId,\n                    question: question\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to get answer\");\n            }\n            const data = await response.json();\n            setAnswer(data.body.answer);\n            setIsAsking(false);\n        } catch (error) {\n            console.error(\"Error asking question:\", error);\n            setIsAsking(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                            children: \"Upload PDF Document\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"file\",\n                                    accept: \".pdf\",\n                                    onChange: handleFileChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: handleUpload,\n                                    disabled: !file || isUploading,\n                                    children: isUploading ? \"Uploading...\" : \"Upload\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            documentId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                            children: \"Ask a Question\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                            htmlFor: \"question\",\n                                            children: \"Your Question\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                            id: \"question\",\n                                            placeholder: \"Ask a question about the document...\",\n                                            value: question,\n                                            onChange: (e)=>setQuestion(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: handleAskQuestion,\n                                    disabled: !question || isAsking,\n                                    children: isAsking ? \"Asking...\" : \"Ask\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, this),\n                                answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                            children: \"Answer:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-2 p-4 bg-gray-100 rounded-md\",\n                                            children: answer\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(PdfQaApp, \"hrGBL1QtfQfR1VbQ5Y23jpu5qtE=\");\n_c = PdfQaApp;\nvar _c;\n$RefreshReg$(_c, \"PdfQaApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGRmLXFhLWFwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDZTtBQUNGO0FBQ007QUFDNEI7QUFDbEM7QUFFOUIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ29CLFlBQVlDLGNBQWMsR0FBR3JCLCtDQUFRQSxDQUFnQjtJQUU1RCxNQUFNc0IsbUJBQW1CLENBQUNDO1FBQ3hCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ2xCZCxRQUFRWSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlO1FBQ25CLElBQUksQ0FBQ2hCLE1BQU07UUFFWE8sZUFBZTtRQUVmLElBQUk7WUFDRix5QkFBeUI7WUFDekIsTUFBTVUsYUFBYSxNQUFNLElBQUlDLFFBQWdCLENBQUNDLFNBQVNDO2dCQUNyRCxNQUFNQyxTQUFTLElBQUlDO2dCQUNuQkQsT0FBT0UsYUFBYSxDQUFDdkI7Z0JBQ3JCcUIsT0FBT0csTUFBTSxHQUFHO29CQUNkLE1BQU1DLGVBQWUsT0FBUUMsTUFBTSxDQUFZQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzVEUixRQUFRTTtnQkFDVjtnQkFDQUosT0FBT08sT0FBTyxHQUFHUjtZQUNuQjtZQUVBLE1BQU1TLFdBQVcsTUFBTUMsTUFBTSxzRUFBc0U7Z0JBQ2pHQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU07Z0JBQ05DLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ25CO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDWSxTQUFTUSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLE9BQU8sTUFBTVYsU0FBU1csSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLFdBQVdIO1lBQ3ZCNUIsY0FBYzRCLEtBQUtJLFFBQVE7WUFDM0JwQyxlQUFlO1FBQ2pCLEVBQUUsT0FBT3FDLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNyQyxlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxNQUFNc0Msb0JBQW9CO1FBQ3hCLElBQUksQ0FBQzNDLFlBQVksQ0FBQ1EsWUFBWTtRQUU5QkQsWUFBWTtRQUNaLElBQUk7WUFDRixNQUFNb0IsV0FBVyxNQUFNQyxNQUFNLG1FQUFtRTtnQkFDOUZDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUUsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQk8sVUFBVWpDO29CQUNWUixVQUFVQTtnQkFDWjtZQUNGO1lBRUEsSUFBSSxDQUFDMkIsU0FBU1EsRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFFQSxNQUFNQyxPQUFPLE1BQU1WLFNBQVNXLElBQUk7WUFDaENuQyxVQUFVa0MsS0FBS0wsSUFBSSxDQUFDOUIsTUFBTTtZQUMxQkssWUFBWTtRQUNkLEVBQUUsT0FBT21DLE9BQU87WUFDZEgsUUFBUUcsS0FBSyxDQUFDLDBCQUEwQkE7WUFDeENuQyxZQUFZO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDcUM7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNyRCxxREFBSUE7O2tDQUNILDhEQUFDRSwyREFBVUE7a0NBQ1QsNEVBQUNDLDBEQUFTQTtzQ0FBQzs7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNGLDREQUFXQTtrQ0FDViw0RUFBQ21EOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3ZELHVEQUFLQTtvQ0FBQ3dELE1BQUs7b0NBQU9DLFFBQU87b0NBQU9DLFVBQVV0Qzs7Ozs7OzhDQUMzQyw4REFBQ3JCLHlEQUFNQTtvQ0FBQzRELFNBQVNuQztvQ0FBY29DLFVBQVUsQ0FBQ3BELFFBQVFNOzhDQUMvQ0EsY0FBYyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTXZDSSw0QkFDQyw4REFBQ2hCLHFEQUFJQTs7a0NBQ0gsOERBQUNFLDJEQUFVQTtrQ0FDVCw0RUFBQ0MsMERBQVNBO3NDQUFDOzs7Ozs7Ozs7OztrQ0FFYiw4REFBQ0YsNERBQVdBO2tDQUNWLDRFQUFDbUQ7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNqRCx1REFBS0E7NENBQUN1RCxTQUFRO3NEQUFXOzs7Ozs7c0RBQzFCLDhEQUFDNUQsNkRBQVFBOzRDQUNQNkQsSUFBRzs0Q0FDSEMsYUFBWTs0Q0FDWkMsT0FBT3REOzRDQUNQZ0QsVUFBVSxDQUFDckMsSUFBTVYsWUFBWVUsRUFBRUMsTUFBTSxDQUFDMEMsS0FBSzs7Ozs7Ozs7Ozs7OzhDQUcvQyw4REFBQ2pFLHlEQUFNQTtvQ0FBQzRELFNBQVNOO29DQUFtQk8sVUFBVSxDQUFDbEQsWUFBWU07OENBQ3hEQSxXQUFXLGNBQWM7Ozs7OztnQ0FFM0JKLHdCQUNDLDhEQUFDMEM7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDakQsdURBQUtBO3NEQUFDOzs7Ozs7c0RBQ1AsOERBQUMyRDs0Q0FBRVYsV0FBVTtzREFBbUMzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbEU7R0FsSXdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BkZi1xYS1hcHAudHN4P2RhMWYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIlxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGRmUWFBcHAoKSB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKVxuICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYW5zd2VyLCBzZXRBbnN3ZXJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpc1VwbG9hZGluZywgc2V0SXNVcGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0Fza2luZywgc2V0SXNBc2tpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtkb2N1bWVudElkLCBzZXREb2N1bWVudElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlcykge1xuICAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFmaWxlKSByZXR1cm5cblxuICAgIHNldElzVXBsb2FkaW5nKHRydWUpXG4gICAgXG4gICAgdHJ5IHtcbiAgICAgIC8vIENvbnZlcnQgZmlsZSB0byBiYXNlNjRcbiAgICAgIGNvbnN0IGJhc2U2NEZpbGUgPSBhd2FpdCBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IChyZWFkZXIucmVzdWx0IGFzIHN0cmluZykuc3BsaXQoJywnKVsxXVxuICAgICAgICAgIHJlc29sdmUoYmFzZTY0U3RyaW5nKVxuICAgICAgICB9XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0XG4gICAgICB9KVxuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3k4M2w2bGptcWEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUHJvZC91cGxvYWQnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShiYXNlNjRGaWxlKVxuICAgICAgfSlcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VwbG9hZCBmYWlsZWQnKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBjb25zb2xlLmxvZyhcImNvb2tpZXNcIiwgZGF0YSlcbiAgICAgIHNldERvY3VtZW50SWQoZGF0YS5maWxlX2tleSlcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZmlsZTonLCBlcnJvcilcbiAgICAgIHNldElzVXBsb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFza1F1ZXN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcXVlc3Rpb24gfHwgIWRvY3VtZW50SWQpIHJldHVyblxuXG4gICAgc2V0SXNBc2tpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly95ODNsNmxqbXFhLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL1Byb2QvYXNrJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBmaWxlX2tleTogZG9jdW1lbnRJZCxcbiAgICAgICAgICBxdWVzdGlvbjogcXVlc3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IGFuc3dlcicpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIHNldEFuc3dlcihkYXRhLmJvZHkuYW5zd2VyKVxuICAgICAgc2V0SXNBc2tpbmcoZmFsc2UpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFza2luZyBxdWVzdGlvbjonLCBlcnJvcilcbiAgICAgIHNldElzQXNraW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LThcIj5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICA8Q2FyZFRpdGxlPlVwbG9hZCBQREYgRG9jdW1lbnQ8L0NhcmRUaXRsZT5cbiAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cIi5wZGZcIiBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfSBkaXNhYmxlZD17IWZpbGUgfHwgaXNVcGxvYWRpbmd9PlxuICAgICAgICAgICAgICB7aXNVcGxvYWRpbmcgPyAnVXBsb2FkaW5nLi4uJyA6ICdVcGxvYWQnfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG5cbiAgICAgIHtkb2N1bWVudElkICYmIChcbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlPkFzayBhIFF1ZXN0aW9uPC9DYXJkVGl0bGU+XG4gICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJxdWVzdGlvblwiPllvdXIgUXVlc3Rpb248L0xhYmVsPlxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgaWQ9XCJxdWVzdGlvblwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFzayBhIHF1ZXN0aW9uIGFib3V0IHRoZSBkb2N1bWVudC4uLlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBc2tRdWVzdGlvbn0gZGlzYWJsZWQ9eyFxdWVzdGlvbiB8fCBpc0Fza2luZ30+XG4gICAgICAgICAgICAgICAge2lzQXNraW5nID8gJ0Fza2luZy4uLicgOiAnQXNrJ31cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIHthbnN3ZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgPExhYmVsPkFuc3dlcjo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBwLTQgYmctZ3JheS0xMDAgcm91bmRlZC1tZFwiPnthbnN3ZXJ9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJJbnB1dCIsIlRleHRhcmVhIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIkxhYmVsIiwiUGRmUWFBcHAiLCJmaWxlIiwic2V0RmlsZSIsInF1ZXN0aW9uIiwic2V0UXVlc3Rpb24iLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJpc1VwbG9hZGluZyIsInNldElzVXBsb2FkaW5nIiwiaXNBc2tpbmciLCJzZXRJc0Fza2luZyIsImRvY3VtZW50SWQiLCJzZXREb2N1bWVudElkIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImhhbmRsZVVwbG9hZCIsImJhc2U2NEZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkIiwiYmFzZTY0U3RyaW5nIiwicmVzdWx0Iiwic3BsaXQiLCJvbmVycm9yIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJtb2RlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZmlsZV9rZXkiLCJlcnJvciIsImhhbmRsZUFza1F1ZXN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwib25DbGljayIsImRpc2FibGVkIiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pdf-qa-app.tsx\n"));

/***/ })

});