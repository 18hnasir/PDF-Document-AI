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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PdfQaApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction PdfQaApp() {\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [answer, setAnswer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAsking, setIsAsking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [documentId, setDocumentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleFileChange = (e)=>{\n        if (e.target.files) {\n            setFile(e.target.files[0]);\n        }\n    };\n    const handleUpload = async ()=>{\n        if (!file) return;\n        setIsUploading(true);\n        try {\n            // Convert file to base64\n            const base64File = await new Promise((resolve, reject)=>{\n                const reader = new FileReader();\n                reader.readAsDataURL(file);\n                reader.onload = ()=>{\n                    const base64String = reader.result.split(\",\")[1];\n                    resolve(base64String);\n                };\n                reader.onerror = reject;\n            });\n            const response = await fetch(\"https://y83l6ljmqa.execute-api.us-east-1.amazonaws.com/Prod/upload\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                mode: \"cors\",\n                body: JSON.stringify(base64File)\n            });\n            if (!response.ok) {\n                throw new Error(\"Upload failed\");\n            }\n            const data = await response.json();\n            setDocumentId(data.file_key);\n            setIsUploading(false);\n        } catch (error) {\n            console.error(\"Error uploading file:\", error);\n            setIsUploading(false);\n        }\n    };\n    const handleAskQuestion = async ()=>{\n        if (!question || !documentId) return;\n        setIsAsking(true);\n        try {\n            const response = await fetch(\"https://y83l6ljmqa.execute-api.us-east-1.amazonaws.com/Prod/ask\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    file_key: documentId,\n                    question: question\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to get answer\");\n            }\n            const data = await response.json();\n            setAnswer(data.body.answer);\n            setIsAsking(false);\n        } catch (error) {\n            console.error(\"Error asking question:\", error);\n            setIsAsking(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                            children: \"Upload PDF Document\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    type: \"file\",\n                                    accept: \".pdf\",\n                                    onChange: handleFileChange\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: handleUpload,\n                                    disabled: !file || isUploading,\n                                    children: isUploading ? \"Uploading...\" : \"Upload\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            documentId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardHeader, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {\n                            children: \"Ask a Question\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-y-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                            htmlFor: \"question\",\n                                            children: \"Your Question\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                            id: \"question\",\n                                            placeholder: \"Ask a question about the document...\",\n                                            value: question,\n                                            onChange: (e)=>setQuestion(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    onClick: handleAskQuestion,\n                                    disabled: !question || isAsking,\n                                    children: isAsking ? \"Asking...\" : \"Ask\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, this),\n                                answer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_6__.Label, {\n                                            children: \"Answer:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 129,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-2 p-4 bg-gray-100 rounded-md\",\n                                            children: answer\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                            lineNumber: 130,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\18hna\\\\Documents\\\\Projects\\\\PDF Document AI\\\\ai-document-reader-ui\\\\components\\\\pdf-qa-app.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(PdfQaApp, \"hrGBL1QtfQfR1VbQ5Y23jpu5qtE=\");\n_c = PdfQaApp;\nvar _c;\n$RefreshReg$(_c, \"PdfQaApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcGRmLXFhLWFwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDZTtBQUNGO0FBQ007QUFDNEI7QUFDbEM7QUFFOUIsU0FBU1M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBYztJQUM5QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ29CLFlBQVlDLGNBQWMsR0FBR3JCLCtDQUFRQSxDQUFnQjtJQUU1RCxNQUFNc0IsbUJBQW1CLENBQUNDO1FBQ3hCLElBQUlBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFO1lBQ2xCZCxRQUFRWSxFQUFFQyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzNCO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlO1FBQ25CLElBQUksQ0FBQ2hCLE1BQU07UUFFWE8sZUFBZTtRQUVmLElBQUk7WUFDRix5QkFBeUI7WUFDekIsTUFBTVUsYUFBYSxNQUFNLElBQUlDLFFBQWdCLENBQUNDLFNBQVNDO2dCQUNyRCxNQUFNQyxTQUFTLElBQUlDO2dCQUNuQkQsT0FBT0UsYUFBYSxDQUFDdkI7Z0JBQ3JCcUIsT0FBT0csTUFBTSxHQUFHO29CQUNkLE1BQU1DLGVBQWUsT0FBUUMsTUFBTSxDQUFZQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzVEUixRQUFRTTtnQkFDVjtnQkFDQUosT0FBT08sT0FBTyxHQUFHUjtZQUNuQjtZQUVBLE1BQU1TLFdBQVcsTUFBTUMsTUFBTSxzRUFBc0U7Z0JBQ2pHQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU07Z0JBQ05DLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ25CO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDWSxTQUFTUSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUVBLE1BQU1DLE9BQU8sTUFBTVYsU0FBU1csSUFBSTtZQUNoQzdCLGNBQWM0QixLQUFLRSxRQUFRO1lBQzNCbEMsZUFBZTtRQUNqQixFQUFFLE9BQU9tQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3ZDbkMsZUFBZTtRQUNqQjtJQUNGO0lBRUEsTUFBTXFDLG9CQUFvQjtRQUN4QixJQUFJLENBQUMxQyxZQUFZLENBQUNRLFlBQVk7UUFFOUJELFlBQVk7UUFDWixJQUFJO1lBQ0YsTUFBTW9CLFdBQVcsTUFBTUMsTUFBTSxtRUFBbUU7Z0JBQzlGQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FFLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkJLLFVBQVUvQjtvQkFDVlIsVUFBVUE7Z0JBQ1o7WUFDRjtZQUVBLElBQUksQ0FBQzJCLFNBQVNRLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsTUFBTUMsT0FBTyxNQUFNVixTQUFTVyxJQUFJO1lBQ2hDbkMsVUFBVWtDLEtBQUtMLElBQUksQ0FBQzlCLE1BQU07WUFDMUJLLFlBQVk7UUFDZCxFQUFFLE9BQU9pQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1lBQ3hDakMsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ29DO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDcEQscURBQUlBOztrQ0FDSCw4REFBQ0UsMkRBQVVBO2tDQUNULDRFQUFDQywwREFBU0E7c0NBQUM7Ozs7Ozs7Ozs7O2tDQUViLDhEQUFDRiw0REFBV0E7a0NBQ1YsNEVBQUNrRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUN0RCx1REFBS0E7b0NBQUN1RCxNQUFLO29DQUFPQyxRQUFPO29DQUFPQyxVQUFVckM7Ozs7Ozs4Q0FDM0MsOERBQUNyQix5REFBTUE7b0NBQUMyRCxTQUFTbEM7b0NBQWNtQyxVQUFVLENBQUNuRCxRQUFRTTs4Q0FDL0NBLGNBQWMsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU12Q0ksNEJBQ0MsOERBQUNoQixxREFBSUE7O2tDQUNILDhEQUFDRSwyREFBVUE7a0NBQ1QsNEVBQUNDLDBEQUFTQTtzQ0FBQzs7Ozs7Ozs7Ozs7a0NBRWIsOERBQUNGLDREQUFXQTtrQ0FDViw0RUFBQ2tEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDaEQsdURBQUtBOzRDQUFDc0QsU0FBUTtzREFBVzs7Ozs7O3NEQUMxQiw4REFBQzNELDZEQUFRQTs0Q0FDUDRELElBQUc7NENBQ0hDLGFBQVk7NENBQ1pDLE9BQU9yRDs0Q0FDUCtDLFVBQVUsQ0FBQ3BDLElBQU1WLFlBQVlVLEVBQUVDLE1BQU0sQ0FBQ3lDLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FHL0MsOERBQUNoRSx5REFBTUE7b0NBQUMyRCxTQUFTTjtvQ0FBbUJPLFVBQVUsQ0FBQ2pELFlBQVlNOzhDQUN4REEsV0FBVyxjQUFjOzs7Ozs7Z0NBRTNCSix3QkFDQyw4REFBQ3lDO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ2hELHVEQUFLQTtzREFBQzs7Ozs7O3NEQUNQLDhEQUFDMEQ7NENBQUVWLFdBQVU7c0RBQW1DMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xFO0dBakl3Qkw7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZGYtcWEtYXBwLnRzeD9kYTFmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIlxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiXG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCwgQ2FyZEhlYWRlciwgQ2FyZFRpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBkZlFhQXBwKCkge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Fuc3dlciwgc2V0QW5zd2VyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbaXNVcGxvYWRpbmcsIHNldElzVXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNBc2tpbmcsIHNldElzQXNraW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbZG9jdW1lbnRJZCwgc2V0RG9jdW1lbnRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMpIHtcbiAgICAgIHNldEZpbGUoZS50YXJnZXQuZmlsZXNbMF0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlVXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghZmlsZSkgcmV0dXJuXG5cbiAgICBzZXRJc1VwbG9hZGluZyh0cnVlKVxuICAgIFxuICAgIHRyeSB7XG4gICAgICAvLyBDb252ZXJ0IGZpbGUgdG8gYmFzZTY0XG4gICAgICBjb25zdCBiYXNlNjRGaWxlID0gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBiYXNlNjRTdHJpbmcgPSAocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpLnNwbGl0KCcsJylbMV1cbiAgICAgICAgICByZXNvbHZlKGJhc2U2NFN0cmluZylcbiAgICAgICAgfVxuICAgICAgICByZWFkZXIub25lcnJvciA9IHJlamVjdFxuICAgICAgfSlcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly95ODNsNmxqbXFhLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL1Byb2QvdXBsb2FkJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYmFzZTY0RmlsZSlcbiAgICAgIH0pXG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVcGxvYWQgZmFpbGVkJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0RG9jdW1lbnRJZChkYXRhLmZpbGVfa2V5KVxuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBmaWxlOicsIGVycm9yKVxuICAgICAgc2V0SXNVcGxvYWRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQXNrUXVlc3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFxdWVzdGlvbiB8fCAhZG9jdW1lbnRJZCkgcmV0dXJuXG5cbiAgICBzZXRJc0Fza2luZyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3k4M2w2bGptcWEuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vUHJvZC9hc2snLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGZpbGVfa2V5OiBkb2N1bWVudElkLFxuICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvblxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgYW5zd2VyJylcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgc2V0QW5zd2VyKGRhdGEuYm9keS5hbnN3ZXIpXG4gICAgICBzZXRJc0Fza2luZyhmYWxzZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXNraW5nIHF1ZXN0aW9uOicsIGVycm9yKVxuICAgICAgc2V0SXNBc2tpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktOFwiPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxDYXJkSGVhZGVyPlxuICAgICAgICAgIDxDYXJkVGl0bGU+VXBsb2FkIFBERiBEb2N1bWVudDwvQ2FyZFRpdGxlPlxuICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwiLnBkZlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVcGxvYWR9IGRpc2FibGVkPXshZmlsZSB8fCBpc1VwbG9hZGluZ30+XG4gICAgICAgICAgICAgIHtpc1VwbG9hZGluZyA/ICdVcGxvYWRpbmcuLi4nIDogJ1VwbG9hZCd9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cblxuICAgICAge2RvY3VtZW50SWQgJiYgKFxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkVGl0bGU+QXNrIGEgUXVlc3Rpb248L0NhcmRUaXRsZT5cbiAgICAgICAgICA8L0NhcmRIZWFkZXI+XG4gICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInF1ZXN0aW9uXCI+WW91ciBRdWVzdGlvbjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICAgICAgICBpZD1cInF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXNrIGEgcXVlc3Rpb24gYWJvdXQgdGhlIGRvY3VtZW50Li4uXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlc3Rpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFza1F1ZXN0aW9ufSBkaXNhYmxlZD17IXF1ZXN0aW9uIHx8IGlzQXNraW5nfT5cbiAgICAgICAgICAgICAgICB7aXNBc2tpbmcgPyAnQXNraW5nLi4uJyA6ICdBc2snfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAge2Fuc3dlciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+QW5zd2VyOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHAtNCBiZy1ncmF5LTEwMCByb3VuZGVkLW1kXCI+e2Fuc3dlcn08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiTGFiZWwiLCJQZGZRYUFwcCIsImZpbGUiLCJzZXRGaWxlIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsImFuc3dlciIsInNldEFuc3dlciIsImlzVXBsb2FkaW5nIiwic2V0SXNVcGxvYWRpbmciLCJpc0Fza2luZyIsInNldElzQXNraW5nIiwiZG9jdW1lbnRJZCIsInNldERvY3VtZW50SWQiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVXBsb2FkIiwiYmFzZTY0RmlsZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWQiLCJiYXNlNjRTdHJpbmciLCJyZXN1bHQiLCJzcGxpdCIsIm9uZXJyb3IiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm1vZGUiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImZpbGVfa2V5IiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlQXNrUXVlc3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/pdf-qa-app.tsx\n"));

/***/ })

});