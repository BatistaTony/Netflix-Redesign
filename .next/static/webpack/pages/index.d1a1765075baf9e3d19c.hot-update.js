webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/movie/index.tsx":
/*!****************************************!*\
  !*** ./src/components/movie/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_MovieContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/MovieContext */ \"./src/contexts/MovieContext.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/movie/styles.ts\");\n\n\nvar _jsxFileName = \"/home/batista/Desktop/Projects/Netflix Redesign/src/components/movie/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Movie = function Movie() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    x: 0\n  }),\n      animationMovie = _useState[0],\n      setAnimation = _useState[1];\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_MovieContext__WEBPACK_IMPORTED_MODULE_2__[\"MovieContext\"]),\n      setMovie = _useContext[0];\n\n  var changeAnimation = function changeAnimation() {\n    setAnimation({\n      x: 1000\n    });\n  };\n\n  var backHome = function backHome() {\n    changeAnimation();\n    setTimeout(function () {\n      setMovie({\n        cover: \"\",\n        description: \"\",\n        title: \"\",\n        year: \"\"\n      });\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"OverlayMovie\"], {\n    initial: {\n      x: 1000\n    },\n    animate: animationMovie,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"CoverMovie\"], {\n      cover: \"/images/photo1.jpg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"MovieInfo\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n        children: \"The Pursuit of Happiness\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Description\"], {\n        children: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque accusamus id exercitationem eveniet accusantium a, nihil aspernatur voluptas, voluptatem, doloremque quibusdam labore provident fugiat ea pariatur. Fugit alias recusandae, commodi accusamus voluptate eius consectetur, reiciendis magni illum repellendus libero!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Year\"], {\n        children: \"2020\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"divBtns\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ButtonWatchMovie\"], {\n          onClick: backHome,\n          back: true,\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ButtonWatchMovie\"], {\n          children: \"Watch Now\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Movie, \"4PaWN+m6RgoUfnlcl0tSlEaNJ5g=\");\n\n_c = Movie;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\n\nvar _c;\n\n$RefreshReg$(_c, \"Movie\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW92aWUvaW5kZXgudHN4P2E1MTciXSwibmFtZXMiOlsiTW92aWUiLCJ1c2VTdGF0ZSIsIngiLCJhbmltYXRpb25Nb3ZpZSIsInNldEFuaW1hdGlvbiIsInVzZUNvbnRleHQiLCJNb3ZpZUNvbnRleHQiLCJzZXRNb3ZpZSIsImNoYW5nZUFuaW1hdGlvbiIsImJhY2tIb21lIiwic2V0VGltZW91dCIsImNvdmVyIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsInllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBV0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBTTtBQUFFQyxLQUFDLEVBQUU7QUFBTCxHQUFOLENBRDdCO0FBQUEsTUFDWEMsY0FEVztBQUFBLE1BQ0tDLFlBREw7O0FBQUEsb0JBRUNDLHdEQUFVLENBQU1DLG1FQUFOLENBRlg7QUFBQSxNQUVYQyxRQUZXOztBQUlsQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJKLGdCQUFZLENBQUM7QUFBRUYsT0FBQyxFQUFFO0FBQUwsS0FBRCxDQUFaO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCRCxtQkFBZTtBQUVmRSxjQUFVLENBQUMsWUFBTTtBQUNmSCxjQUFRLENBQUM7QUFDUEksYUFBSyxFQUFFLEVBREE7QUFFUEMsbUJBQVcsRUFBRSxFQUZOO0FBR1BDLGFBQUssRUFBRSxFQUhBO0FBSVBDLFlBQUksRUFBRTtBQUpDLE9BQUQsQ0FBUjtBQU1ELEtBUFMsQ0FBVjtBQVFELEdBWEQ7O0FBYUEsc0JBQ0UscUVBQUMsb0RBQUQ7QUFBYyxXQUFPLEVBQUU7QUFBRVosT0FBQyxFQUFFO0FBQUwsS0FBdkI7QUFBb0MsV0FBTyxFQUFFQyxjQUE3QztBQUFBLDRCQUNFLHFFQUFDLGtEQUFEO0FBQVksV0FBSyxFQUFFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGlEQUFEO0FBQUEsOEJBQ0UscUVBQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFXRSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBYUU7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRSxxRUFBQyx3REFBRDtBQUFrQixpQkFBTyxFQUFFTSxRQUEzQjtBQUFxQyxjQUFJLEVBQUUsSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlCRCxDQTlDRDs7R0FBTVQsSzs7S0FBQUEsSztBQWdEU0Esb0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb3ZpZS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW92aWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL01vdmllQ29udGV4dFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uV2F0Y2hNb3ZpZSxcbiAgQ292ZXJNb3ZpZSxcbiAgRGVzY3JpcHRpb24sXG4gIE1vZGFsTW92aWUsXG4gIE1vdmllSW5mbyxcbiAgT3ZlcmxheU1vdmllLFxuICBUaXRsZSxcbiAgWWVhcixcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IE1vdmllID0gKCkgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9uTW92aWUsIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZTxhbnk+KHsgeDogMCB9KTtcbiAgY29uc3QgW3NldE1vdmllXSA9IHVzZUNvbnRleHQ8YW55PihNb3ZpZUNvbnRleHQpO1xuXG4gIGNvbnN0IGNoYW5nZUFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBzZXRBbmltYXRpb24oeyB4OiAxMDAwIH0pO1xuICB9O1xuXG4gIGNvbnN0IGJhY2tIb21lID0gKCkgPT4ge1xuICAgIGNoYW5nZUFuaW1hdGlvbigpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRNb3ZpZSh7XG4gICAgICAgIGNvdmVyOiBcIlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgIHllYXI6IFwiXCIsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxPdmVybGF5TW92aWUgaW5pdGlhbD17eyB4OiAxMDAwIH19IGFuaW1hdGU9e2FuaW1hdGlvbk1vdmllfT5cbiAgICAgIDxDb3Zlck1vdmllIGNvdmVyPXtcIi9pbWFnZXMvcGhvdG8xLmpwZ1wifSAvPlxuICAgICAgPE1vdmllSW5mbz5cbiAgICAgICAgPFRpdGxlPlRoZSBQdXJzdWl0IG9mIEhhcHBpbmVzczwvVGl0bGU+XG5cbiAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF1dCBlYXF1ZVxuICAgICAgICAgIGFjY3VzYW11cyBpZCBleGVyY2l0YXRpb25lbSBldmVuaWV0IGFjY3VzYW50aXVtIGEsIG5paGlsIGFzcGVybmF0dXJcbiAgICAgICAgICB2b2x1cHRhcywgdm9sdXB0YXRlbSwgZG9sb3JlbXF1ZSBxdWlidXNkYW0gbGFib3JlIHByb3ZpZGVudCBmdWdpYXQgZWFcbiAgICAgICAgICBwYXJpYXR1ci4gRnVnaXQgYWxpYXMgcmVjdXNhbmRhZSwgY29tbW9kaSBhY2N1c2FtdXMgdm9sdXB0YXRlIGVpdXNcbiAgICAgICAgICBjb25zZWN0ZXR1ciwgcmVpY2llbmRpcyBtYWduaSBpbGx1bSByZXBlbGxlbmR1cyBsaWJlcm8hXG4gICAgICAgIDwvRGVzY3JpcHRpb24+XG5cbiAgICAgICAgPFllYXI+MjAyMDwvWWVhcj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdkJ0bnNcIj5cbiAgICAgICAgICA8QnV0dG9uV2F0Y2hNb3ZpZSBvbkNsaWNrPXtiYWNrSG9tZX0gYmFjaz17dHJ1ZX0+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9CdXR0b25XYXRjaE1vdmllPlxuICAgICAgICAgIDxCdXR0b25XYXRjaE1vdmllPldhdGNoIE5vdzwvQnV0dG9uV2F0Y2hNb3ZpZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vdmllSW5mbz5cbiAgICA8L092ZXJsYXlNb3ZpZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/movie/index.tsx\n");

/***/ })

})