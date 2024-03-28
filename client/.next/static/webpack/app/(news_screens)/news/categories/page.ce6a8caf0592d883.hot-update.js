"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(news_screens)/news/categories/page",{

/***/ "(app-pages-browser)/./components/category_items.tsx":
/*!***************************************!*\
  !*** ./components/category_items.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner */ \"(app-pages-browser)/./components/spinner.tsx\");\n/* harmony import */ var _state_slices_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/state/slices/news */ \"(app-pages-browser)/./state/slices/news.ts\");\n/* harmony import */ var _selectors_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/selectors/news */ \"(app-pages-browser)/./selectors/news.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_state_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/state_types */ \"(app-pages-browser)/./hooks/state_types.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CategoryItems(param) {\n    let { list, query } = param;\n    _s();\n    const dispatch = (0,_hooks_state_types__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const { date } = (0,_selectors_news__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const { isLoading, data, error } = (0,_state_slices_news__WEBPACK_IMPORTED_MODULE_2__.useGet_everythingQuery)({\n        query,\n        date: date\n    });\n    const go_to_news = (news)=>{\n        localStorage.setItem(\"current_news\", JSON.stringify(news));\n        router.push(\"/news/\".concat(news === null || news === void 0 ? void 0 : news.id, \"-category-\").concat(query));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        var _data_articles;\n        const articles = data === null || data === void 0 ? void 0 : (_data_articles = data.articles) === null || _data_articles === void 0 ? void 0 : _data_articles.map((article, index)=>({\n                ...article,\n                id: index,\n                urlToImage: (article === null || article === void 0 ? void 0 : article.urlToImage) || \"https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image-1536x1024.png\"\n            }));\n        dispatch((0,_state_slices_news__WEBPACK_IMPORTED_MODULE_2__.set_news)({\n            name: query,\n            news: articles\n        }));\n    }, [\n        data,\n        error,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-3 place-content-between gap-[2em]\",\n        children: [\n            !isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: list === null || list === void 0 ? void 0 : list.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1 h-[300px] flex flex-col gap-[1em] rounded-lg shadow-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"w-full h-[70%] rounded-lg object-cover\",\n                                src: item === null || item === void 0 ? void 0 : item.urlToImage,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                onClick: ()=>go_to_news(item),\n                                className: \"font-[400] text-[16px] text-black cursor-pointer p-[0.5em]\",\n                                children: item === null || item === void 0 ? void 0 : item.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[25px] h-[25px] mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spinner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        h: 25,\n                        w: 25\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 64\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                lineNumber: 46,\n                columnNumber: 18\n            }, this),\n            (list === null || list === void 0 ? void 0 : list.length) <= 0 && !isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto\",\n                children: \"No news yet\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n                lineNumber: 51,\n                columnNumber: 51\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PC\\\\Desktop\\\\news_feed\\\\client\\\\components\\\\category_items.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(CategoryItems, \"ka+24oaRId1teyyyRBQz+jL4U1I=\", false, function() {\n    return [\n        _hooks_state_types__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _state_slices_news__WEBPACK_IMPORTED_MODULE_2__.useGet_everythingQuery\n    ];\n});\n_c = CategoryItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryItems);\nvar _c;\n$RefreshReg$(_c, \"CategoryItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY2F0ZWdvcnlfaXRlbXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSWdDO0FBQ3VDO0FBQ3pCO0FBQ1o7QUFDbUI7QUFDVDtBQUk1QyxTQUFTTyxjQUFjLEtBQXNEO1FBQXRELEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUF5QyxHQUF0RDs7SUFDbkIsTUFBTUMsV0FBV0wsa0VBQWNBO0lBQy9CLE1BQU1NLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLEVBQUVNLElBQUksRUFBRSxHQUFHVCwyREFBY0E7SUFDL0IsTUFBTSxFQUFFVSxTQUFTLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdiLDBFQUFzQkEsQ0FBQztRQUFFTztRQUFPRyxNQUFNQTtJQUFlO0lBRXhGLE1BQU1JLGFBQWEsQ0FBQ0M7UUFDaEJDLGFBQWFDLE9BQU8sQ0FBQyxnQkFBZ0JDLEtBQUtDLFNBQVMsQ0FBQ0o7UUFDcEROLE9BQU9XLElBQUksQ0FBQyxTQUE4QmIsT0FBckJRLGlCQUFBQSwyQkFBQUEsS0FBTU0sRUFBRSxFQUFDLGNBQWtCLE9BQU5kO0lBQzlDO0lBRUFMLGdEQUFTQSxDQUFDO1lBQ1lVO1FBQWxCLE1BQU1VLFdBQVlWLGlCQUFBQSw0QkFBQUEsaUJBQUFBLEtBQU1VLFFBQVEsY0FBZFYscUNBQUQsZUFBNEJXLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxRQUFtQjtnQkFBRSxHQUFHRCxPQUFPO2dCQUFFSCxJQUFJSTtnQkFBT0MsWUFBWUYsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTRSxVQUFVLEtBQUk7WUFBZ0c7UUFDMU9sQixTQUFTVCw0REFBUUEsQ0FBQztZQUFFNEIsTUFBTXBCO1lBQU9RLE1BQU1PO1FBQW1CO0lBQzlELEdBQUc7UUFBQ1Y7UUFBTUM7UUFBT0Y7S0FBVTtJQUUzQixxQkFDSSw4REFBQ2lCO1FBQUlDLFdBQVU7O1lBRVYsQ0FBQ2xCLDBCQUNHOzBCQUNJTCxpQkFBQUEsMkJBQUFBLEtBQU1pQixHQUFHLENBQUMsQ0FBQ08sTUFBTUwsc0JBQ2QsOERBQUNHO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7Z0NBQUlGLFdBQVU7Z0NBQXlDRyxHQUFHLEVBQUVGLGlCQUFBQSwyQkFBQUEsS0FBTUosVUFBVTtnQ0FBRU8sS0FBSTs7Ozs7OzBDQUduRiw4REFBQ0M7Z0NBQUtDLFNBQVMsSUFBTXJCLFdBQVdnQjtnQ0FBT0QsV0FBVTswQ0FDNUNDLGlCQUFBQSwyQkFBQUEsS0FBTU0sS0FBSzs7Ozs7Ozt1QkFMb0VYOzs7Ozs4Q0FVL0YsOERBQUNHO2dCQUFJQyxXQUFVOzBCQUNaLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFBNEIsNEVBQUMvQixnREFBT0E7d0JBQUN1QyxHQUFHO3dCQUFJQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O1lBSXJFLENBQUNoQyxpQkFBQUEsMkJBQUFBLEtBQU1pQyxNQUFNLEtBQUksS0FBSyxDQUFDNUIsMkJBQWMsOERBQUNpQjtnQkFBSUMsV0FBVTswQkFBVTs7Ozs7Ozs7Ozs7O0FBSzNFO0dBMUNTeEI7O1FBQ1lGLDhEQUFjQTtRQUNoQkMsc0RBQVNBO1FBRVdKLHNFQUFzQkE7OztLQUpwREs7QUE0Q1QsK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXRlZ29yeV9pdGVtcy50c3g/ZWY5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGltYWdlcyB9IGZyb20gXCJAL2NvbnN0YW50cy9pbWFnZXNcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlLCBOZXdzIH0gZnJvbSBcIkAvaW50ZXJmYWNlcy9uZXdzXCI7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gXCIuL3NwaW5uZXJcIjtcclxuaW1wb3J0IHsgc2V0X25ld3MsIHVzZUdldF9ldmVyeXRoaW5nUXVlcnkgfSBmcm9tIFwiQC9zdGF0ZS9zbGljZXMvbmV3c1wiO1xyXG5pbXBvcnQgbmV3c19zZWxlY3RvcnMgZnJvbSBcIkAvc2VsZWN0b3JzL25ld3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvaG9va3Mvc3RhdGVfdHlwZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBDYXRlZ29yeUl0ZW1zKHsgbGlzdCwgcXVlcnkgfTogeyBsaXN0OiBOZXdzW10sIHF1ZXJ5OiBDYXRlZ29yeVR5cGUgfSkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGRhdGUgfSA9IG5ld3Nfc2VsZWN0b3JzKClcclxuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhLCBlcnJvciB9ID0gdXNlR2V0X2V2ZXJ5dGhpbmdRdWVyeSh7IHF1ZXJ5LCBkYXRlOiBkYXRlIGFzIHN0cmluZyB9KTtcclxuXHJcbiAgICBjb25zdCBnb190b19uZXdzID0gKG5ld3M6IE5ld3MpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF9uZXdzJywgSlNPTi5zdHJpbmdpZnkobmV3cykpXHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9uZXdzLyR7bmV3cz8uaWR9LWNhdGVnb3J5LSR7cXVlcnl9YClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFydGljbGVzID0gKGRhdGE/LmFydGljbGVzIGFzIE5ld3NbXSk/Lm1hcCgoYXJ0aWNsZSwgaW5kZXg6IG51bWJlcikgPT4gKHsgLi4uYXJ0aWNsZSwgaWQ6IGluZGV4LCB1cmxUb0ltYWdlOiBhcnRpY2xlPy51cmxUb0ltYWdlIHx8ICdodHRwczovL2NsYXJpb25oZWFsdGhjYXJlLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMi9kZWZhdWx0LWZhbGxiYWNrLWltYWdlLTE1MzZ4MTAyNC5wbmcnIH0pKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRfbmV3cyh7IG5hbWU6IHF1ZXJ5LCBuZXdzOiBhcnRpY2xlcyBhcyBOZXdzW10gfSkpXHJcbiAgICB9LCBbZGF0YSwgZXJyb3IsIGlzTG9hZGluZ10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgcGxhY2UtY29udGVudC1iZXR3ZWVuIGdhcC1bMmVtXVwiPlxyXG5cclxuICAgICAgICAgICAgeyFpc0xvYWRpbmcgP1xyXG4gICAgICAgICAgICAgICAgKDw+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3Q/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGgtWzMwMHB4XSBmbGV4IGZsZXgtY29sIGdhcC1bMWVtXSByb3VuZGVkLWxnIHNoYWRvdy1tZFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNzAlXSByb3VuZGVkLWxnIG9iamVjdC1jb3ZlclwiIHNyYz17aXRlbT8udXJsVG9JbWFnZX0gYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2hyZWYgPSB7YC9uZXdzLyR7aXRlbT8uaWR9LWNhdGVnb3J5LSR7cXVlcnl9YH19ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gZ29fdG9fbmV3cyhpdGVtKX0gY2xhc3NOYW1lPVwiZm9udC1bNDAwXSB0ZXh0LVsxNnB4XSB0ZXh0LWJsYWNrIGN1cnNvci1wb2ludGVyIHAtWzAuNWVtXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtPy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8Lz4pIDpcclxuICAgICAgICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzI1cHhdIGgtWzI1cHhdIG14LWF1dG9cIj48U3Bpbm5lciBoPXsyNX0gdz17MjV9IC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHsobGlzdD8ubGVuZ3RoIDw9IDAgJiYgIWlzTG9hZGluZykgJiYgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+Tm8gbmV3cyB5ZXQ8L2Rpdj59XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlJdGVtczsiXSwibmFtZXMiOlsiU3Bpbm5lciIsInNldF9uZXdzIiwidXNlR2V0X2V2ZXJ5dGhpbmdRdWVyeSIsIm5ld3Nfc2VsZWN0b3JzIiwidXNlRWZmZWN0IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VSb3V0ZXIiLCJDYXRlZ29yeUl0ZW1zIiwibGlzdCIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJkYXRlIiwiaXNMb2FkaW5nIiwiZGF0YSIsImVycm9yIiwiZ29fdG9fbmV3cyIsIm5ld3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInB1c2giLCJpZCIsImFydGljbGVzIiwibWFwIiwiYXJ0aWNsZSIsImluZGV4IiwidXJsVG9JbWFnZSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsIm9uQ2xpY2siLCJ0aXRsZSIsImgiLCJ3IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/category_items.tsx\n"));

/***/ })

});