webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/movie/index.tsx":
/*!****************************************!*\
  !*** ./src/components/movie/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/MovieContext */ \"./src/contexts/MovieContext.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/movie/styles.ts\");\n\n\nvar _jsxFileName = \"/home/batista/Desktop/Projects/Netflix Redesign/src/components/movie/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Movie = function Movie() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    x: 0\n  }),\n      animationMovie = _useState[0],\n      setAnimation = _useState[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_2__[\"MovieContext\"]),\n      movie = _useContext[0],\n      setMovie = _useContext[1];\n\n  var changeAnimation = function changeAnimation() {\n    setAnimation({\n      x: 1000\n    });\n  };\n\n  var backHome = function backHome() {\n    changeAnimation();\n    setTimeout(function () {\n      setMovie({\n        cover: \"\",\n        description: \"\",\n        title: \"\",\n        year: \"\"\n      });\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"OverlayMovie\"], {\n    initial: {\n      x: 1000\n    },\n    animate: animationMovie,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"CoverMovie\"], {\n      cover: \"/images/photo1.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"MovieInfo\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n        children: \"The Pursuit of Happiness\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Description\"], {\n        children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque accusamus id exercitationem eveniet accusantium a, nihil aspernatur voluptas, voluptatem, doloremque quibusdam labore provident fugiat ea pariatur. Fugit alias recusandae, commodi accusamus voluptate eius consectetur, reiciendis magni illum repellendus libero!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Year\"], {\n        children: \"2020\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"divBtns\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ButtonWatchMovie\"], {\n          onClick: backHome,\n          back: true,\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ButtonWatchMovie\"], {\n          children: \"Watch Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Movie, \"+SkMTVdrRNhw3JBiKHO51jeYO6g=\");\n\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWUvaW5kZXgudHN4P2E1MTciXSwibmFtZXMiOlsiTW92aWUiLCJ1c2VTdGF0ZSIsIngiLCJhbmltYXRpb25Nb3ZpZSIsInNldEFuaW1hdGlvbiIsInVzZUNvbnRleHQiLCJNb3ZpZUNvbnRleHQiLCJtb3ZpZSIsInNldE1vdmllIiwiY2hhbmdlQW5pbWF0aW9uIiwiYmFja0hvbWUiLCJzZXRUaW1lb3V0IiwiY292ZXIiLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwieWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFXQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ3FCQyxzREFBUSxDQUFNO0FBQUVDLEtBQUMsRUFBRTtBQUFMLEdBQU4sQ0FEN0I7QUFBQSxNQUNYQyxjQURXO0FBQUEsTUFDS0MsWUFETDs7QUFBQSxvQkFFUUMsd0RBQVUsQ0FBTUMsbUVBQU4sQ0FGbEI7QUFBQSxNQUVYQyxLQUZXO0FBQUEsTUFFSkMsUUFGSTs7QUFJbEIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCTCxnQkFBWSxDQUFDO0FBQUVGLE9BQUMsRUFBRTtBQUFMLEtBQUQsQ0FBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTVEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQkQsbUJBQWU7QUFFZkUsY0FBVSxDQUFDLFlBQU07QUFDZkgsY0FBUSxDQUFDO0FBQ1BJLGFBQUssRUFBRSxFQURBO0FBRVBDLG1CQUFXLEVBQUUsRUFGTjtBQUdQQyxhQUFLLEVBQUUsRUFIQTtBQUlQQyxZQUFJLEVBQUU7QUFKQyxPQUFELENBQVI7QUFNRCxLQVBTLENBQVY7QUFRRCxHQVhEOztBQWFBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQWMsV0FBTyxFQUFFO0FBQUViLE9BQUMsRUFBRTtBQUFMLEtBQXZCO0FBQW9DLFdBQU8sRUFBRUMsY0FBN0M7QUFBQSw0QkFDRSxxRUFBQyxrREFBRDtBQUFZLFdBQUssRUFBRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxpREFBRDtBQUFBLDhCQUNFLHFFQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBV0UscUVBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRixlQWFFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0UscUVBQUMsd0RBQUQ7QUFBa0IsaUJBQU8sRUFBRU8sUUFBM0I7QUFBcUMsY0FBSSxFQUFFLElBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUUscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0E5Q0Q7O0dBQU1WLEs7O0tBQUFBLEs7QUFnRFNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbW92aWUvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vdmllQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Nb3ZpZUNvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbldhdGNoTW92aWUsXG4gIENvdmVyTW92aWUsXG4gIERlc2NyaXB0aW9uLFxuICBNb2RhbE1vdmllLFxuICBNb3ZpZUluZm8sXG4gIE92ZXJsYXlNb3ZpZSxcbiAgVGl0bGUsXG4gIFllYXIsXG59IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBNb3ZpZSA9ICgpID0+IHtcbiAgY29uc3QgW2FuaW1hdGlvbk1vdmllLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGU8YW55Pih7IHg6IDAgfSk7XG4gIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gdXNlQ29udGV4dDxhbnk+KE1vdmllQ29udGV4dCk7XG5cbiAgY29uc3QgY2hhbmdlQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIHNldEFuaW1hdGlvbih7IHg6IDEwMDAgfSk7XG4gIH07XG5cbiAgY29uc3QgYmFja0hvbWUgPSAoKSA9PiB7XG4gICAgY2hhbmdlQW5pbWF0aW9uKCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldE1vdmllKHtcbiAgICAgICAgY292ZXI6IFwiXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgeWVhcjogXCJcIixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE92ZXJsYXlNb3ZpZSBpbml0aWFsPXt7IHg6IDEwMDAgfX0gYW5pbWF0ZT17YW5pbWF0aW9uTW92aWV9PlxuICAgICAgPENvdmVyTW92aWUgY292ZXI9e1wiL2ltYWdlcy9waG90bzEuanBnXCJ9IC8+XG4gICAgICA8TW92aWVJbmZvPlxuICAgICAgICA8VGl0bGU+VGhlIFB1cnN1aXQgb2YgSGFwcGluZXNzPC9UaXRsZT5cblxuICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXV0IGVhcXVlXG4gICAgICAgICAgYWNjdXNhbXVzIGlkIGV4ZXJjaXRhdGlvbmVtIGV2ZW5pZXQgYWNjdXNhbnRpdW0gYSwgbmloaWwgYXNwZXJuYXR1clxuICAgICAgICAgIHZvbHVwdGFzLCB2b2x1cHRhdGVtLCBkb2xvcmVtcXVlIHF1aWJ1c2RhbSBsYWJvcmUgcHJvdmlkZW50IGZ1Z2lhdCBlYVxuICAgICAgICAgIHBhcmlhdHVyLiBGdWdpdCBhbGlhcyByZWN1c2FuZGFlLCBjb21tb2RpIGFjY3VzYW11cyB2b2x1cHRhdGUgZWl1c1xuICAgICAgICAgIGNvbnNlY3RldHVyLCByZWljaWVuZGlzIG1hZ25pIGlsbHVtIHJlcGVsbGVuZHVzIGxpYmVybyFcbiAgICAgICAgPC9EZXNjcmlwdGlvbj5cblxuICAgICAgICA8WWVhcj4yMDIwPC9ZZWFyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2QnRuc1wiPlxuICAgICAgICAgIDxCdXR0b25XYXRjaE1vdmllIG9uQ2xpY2s9e2JhY2tIb21lfSBiYWNrPXt0cnVlfT5cbiAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICA8L0J1dHRvbldhdGNoTW92aWU+XG4gICAgICAgICAgPEJ1dHRvbldhdGNoTW92aWU+V2F0Y2ggTm93PC9CdXR0b25XYXRjaE1vdmllPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW92aWVJbmZvPlxuICAgIDwvT3ZlcmxheU1vdmllPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/movie/index.tsx\n");

/***/ })

})