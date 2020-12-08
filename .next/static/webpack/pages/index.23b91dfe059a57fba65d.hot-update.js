webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/styles */ \"./src/components/home/styles.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout/index.tsx\");\n/* harmony import */ var _components_movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/movie */ \"./src/components/movie/index.tsx\");\n/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../contexts/MovieContext */ \"./src/contexts/MovieContext.tsx\");\n\n\nvar _jsxFileName = \"/home/batista/Desktop/Projects/Netflix Redesign/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_5__[\"MovieContext\"]),\n      movie = _useContext.movie,\n      setMovie = _useContext.setMovie;\n\n  var movies = [\"/images/photo1.jpg\", \"/images/photo2.jpg\", \"/images/photo3.jpg\", \"/images/photo4.jpg\", \"/images/photo5.jpg\", \"/images/photo6.jpg\", \"/images/photo7.jpg\", \"/images/photo8.jpg\", \"/images/photo9.jpg\", \"/images/photo10.jpg\", \"/images/photo11.jpg\", \"/images/photo12.jpg\"];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: movie.title.length < 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_styles__WEBPACK_IMPORTED_MODULE_2__[\"ContainerHome\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_home_styles__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n        initial: {\n          scale: 0.1\n        },\n        animate: {\n          scale: 1\n        },\n        children: \"POPULAR\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_movie__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"6cv7Ax+rb2bDVCsvYioGh6J+gT4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VDb250ZXh0IiwiTW92aWVDb250ZXh0IiwibW92aWUiLCJzZXRNb3ZpZSIsIm1vdmllcyIsInRpdGxlIiwibGVuZ3RoIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsb0JBQ0RDLHdEQUFVLENBQU1DLG1FQUFOLENBRFQ7QUFBQSxNQUNyQkMsS0FEcUIsZUFDckJBLEtBRHFCO0FBQUEsTUFDZEMsUUFEYyxlQUNkQSxRQURjOztBQUc3QixNQUFNQyxNQUFNLEdBQUcsQ0FDYixvQkFEYSxFQUViLG9CQUZhLEVBR2Isb0JBSGEsRUFJYixvQkFKYSxFQUtiLG9CQUxhLEVBTWIsb0JBTmEsRUFPYixvQkFQYSxFQVFiLG9CQVJhLEVBU2Isb0JBVGEsRUFVYixxQkFWYSxFQVdiLHFCQVhhLEVBWWIscUJBWmEsQ0FBZjtBQWVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsY0FDR0YsS0FBSyxDQUFDRyxLQUFOLENBQVlDLE1BQVosR0FBcUIsQ0FBckIsZ0JBQ0MscUVBQUMscUVBQUQ7QUFBQSw2QkFDRSxxRUFBQyw2REFBRDtBQUFPLGVBQU8sRUFBRTtBQUFFQyxlQUFLLEVBQUU7QUFBVCxTQUFoQjtBQUFnQyxlQUFPLEVBQUU7QUFBRUEsZUFBSyxFQUFFO0FBQVQsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZ0JBUUMscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQWhDdUJSLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVE1vdmllIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgTGlzdE1vdmllIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvbGlzdE1vdmllc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVySG9tZSwgVGl0bGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL3N0eWxlc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBNb3ZpZSBmcm9tIFwiLi4vY29tcG9uZW50cy9tb3ZpZVwiO1xuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIi4vLi4vY29udGV4dHMvTW92aWVDb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgbW92aWUsIHNldE1vdmllIH0gPSB1c2VDb250ZXh0PGFueT4oTW92aWVDb250ZXh0KTtcblxuICBjb25zdCBtb3ZpZXMgPSBbXG4gICAgXCIvaW1hZ2VzL3Bob3RvMS5qcGdcIixcbiAgICBcIi9pbWFnZXMvcGhvdG8yLmpwZ1wiLFxuICAgIFwiL2ltYWdlcy9waG90bzMuanBnXCIsXG4gICAgXCIvaW1hZ2VzL3Bob3RvNC5qcGdcIixcbiAgICBcIi9pbWFnZXMvcGhvdG81LmpwZ1wiLFxuICAgIFwiL2ltYWdlcy9waG90bzYuanBnXCIsXG4gICAgXCIvaW1hZ2VzL3Bob3RvNy5qcGdcIixcbiAgICBcIi9pbWFnZXMvcGhvdG84LmpwZ1wiLFxuICAgIFwiL2ltYWdlcy9waG90bzkuanBnXCIsXG4gICAgXCIvaW1hZ2VzL3Bob3RvMTAuanBnXCIsXG4gICAgXCIvaW1hZ2VzL3Bob3RvMTEuanBnXCIsXG4gICAgXCIvaW1hZ2VzL3Bob3RvMTIuanBnXCIsXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAge21vdmllLnRpdGxlLmxlbmd0aCA8IDIgPyAoXG4gICAgICAgIDxDb250YWluZXJIb21lPlxuICAgICAgICAgIDxUaXRsZSBpbml0aWFsPXt7IHNjYWxlOiAwLjEgfX0gYW5pbWF0ZT17eyBzY2FsZTogMSB9fT5cbiAgICAgICAgICAgIFBPUFVMQVJcbiAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgIHsvKiA8TGlzdE1vdmllIG1vdmllcz17bW92aWVzfSAvPiAqL31cbiAgICAgICAgPC9Db250YWluZXJIb21lPlxuICAgICAgKSA6IChcbiAgICAgICAgPE1vdmllIC8+XG4gICAgICApfVxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})