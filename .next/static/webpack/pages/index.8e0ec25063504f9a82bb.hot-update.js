webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/navbar/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/navbar/styles.ts\");\n/* harmony import */ var _iconesSvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iconesSvg */ \"./src/components/navbar/iconesSvg.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/components/navbar/modal.tsx\");\n\n\nvar _jsxFileName = \"/home/batista/Desktop/Projects/Netflix Redesign/src/components/navbar/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Navbar = function Navbar() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showModal = _useState[0],\n      setShowModal = _useState[1];\n\n  var toggleModal = function toggleModal() {\n    setShowModal(!showModal);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"NavbarStyled\"], {\n    children: [showModal && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"OverlaySearch\"], {\n      initial: {\n        opacity: 0.7\n      },\n      animate: {\n        opacity: 1\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        toggleModal: toggleModal\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"WrapperMenuAndLogo\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Logo\"], {\n        src: \"./images/logo.png\",\n        alt: \"Netflix\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSearch\"], {\n          onClick: toggleModal,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_iconesSvg__WEBPACK_IMPORTED_MODULE_2__[\"SearchIcon\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n          first: true,\n          children: \"BROWSE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"MenuItem\"], {\n          children: \"KIDS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"MenuRightSide\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"MenuRightSideItem\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_iconesSvg__WEBPACK_IMPORTED_MODULE_2__[\"BellIcon\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: \"notification\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"MenuRightSideItem\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n          src: \"./images/avatar.JPG\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL2luZGV4LnRzeD81ZDAzIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidG9nZ2xlTW9kYWwiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDZUMsc0RBQVEsQ0FBVSxLQUFWLENBRHZCO0FBQUEsTUFDWkMsU0FEWTtBQUFBLE1BQ0RDLFlBREM7O0FBR25CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJELGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxvREFBRDtBQUFBLGVBQ0dBLFNBQVMsaUJBQ1IscUVBQUMscURBQUQ7QUFBZSxhQUFPLEVBQUU7QUFBRUcsZUFBTyxFQUFFO0FBQVgsT0FBeEI7QUFBMEMsYUFBTyxFQUFFO0FBQUVBLGVBQU8sRUFBRTtBQUFYLE9BQW5EO0FBQUEsNkJBQ0UscUVBQUMsOENBQUQ7QUFBYSxtQkFBVyxFQUFFRDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKLGVBT0UscUVBQUMsMERBQUQ7QUFBQSw4QkFDRSxxRUFBQyw0Q0FBRDtBQUFNLFdBQUcsRUFBQyxtQkFBVjtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0UscUVBQUMsNENBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxvREFBRDtBQUFjLGlCQUFPLEVBQUVBLFdBQXZCO0FBQUEsaUNBQ0UscUVBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyxnREFBRDtBQUFVLGVBQUssRUFBRSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRixlQUtFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLGVBbUJFLHFFQUFDLHFEQUFEO0FBQUEsOEJBQ0UscUVBQUMseURBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLHFFQUFDLHlEQUFEO0FBQUEsK0JBQ0UscUVBQUMsOENBQUQ7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXhDRDs7R0FBTUosTTs7S0FBQUEsTTtBQTBDU0EscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBCdXR0b25TZWFyY2gsXG4gIExvZ28sXG4gIE1lbnUsXG4gIE1lbnVJdGVtLFxuICBNZW51UmlnaHRTaWRlLFxuICBNZW51UmlnaHRTaWRlSXRlbSxcbiAgTmF2YmFyU3R5bGVkLFxuICBPdmVybGF5U2VhcmNoLFxuICBXcmFwcGVyTWVudUFuZExvZ28sXG59IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5pbXBvcnQgeyBTZWFyY2hJY29uLCBCZWxsSWNvbiB9IGZyb20gXCIuL2ljb25lc1N2Z1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNb2RhbFNlYXJjaCBmcm9tIFwiLi9tb2RhbFwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0U2hvd01vZGFsKCFzaG93TW9kYWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5hdmJhclN0eWxlZD5cbiAgICAgIHtzaG93TW9kYWwgJiYgKFxuICAgICAgICA8T3ZlcmxheVNlYXJjaCBpbml0aWFsPXt7IG9wYWNpdHk6IDAuNyB9fSBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgPE1vZGFsU2VhcmNoIHRvZ2dsZU1vZGFsPXt0b2dnbGVNb2RhbH0gLz5cbiAgICAgICAgPC9PdmVybGF5U2VhcmNoPlxuICAgICAgKX1cblxuICAgICAgPFdyYXBwZXJNZW51QW5kTG9nbz5cbiAgICAgICAgPExvZ28gc3JjPVwiLi9pbWFnZXMvbG9nby5wbmdcIiBhbHQ9XCJOZXRmbGl4XCIgLz5cblxuICAgICAgICA8TWVudT5cbiAgICAgICAgICA8QnV0dG9uU2VhcmNoIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cbiAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgICAgICAgPC9CdXR0b25TZWFyY2g+XG4gICAgICAgICAgPE1lbnVJdGVtIGZpcnN0PXt0cnVlfT5CUk9XU0U8L01lbnVJdGVtPlxuICAgICAgICAgIDxNZW51SXRlbT5LSURTPC9NZW51SXRlbT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9XcmFwcGVyTWVudUFuZExvZ28+XG5cbiAgICAgIDxNZW51UmlnaHRTaWRlPlxuICAgICAgICA8TWVudVJpZ2h0U2lkZUl0ZW0+XG4gICAgICAgICAgPEJlbGxJY29uIC8+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgPGxpPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9NZW51UmlnaHRTaWRlSXRlbT5cbiAgICAgICAgPE1lbnVSaWdodFNpZGVJdGVtPlxuICAgICAgICAgIDxBdmF0YXIgc3JjPVwiLi9pbWFnZXMvYXZhdGFyLkpQR1wiIC8+XG4gICAgICAgIDwvTWVudVJpZ2h0U2lkZUl0ZW0+XG4gICAgICA8L01lbnVSaWdodFNpZGU+XG4gICAgPC9OYXZiYXJTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navbar/index.tsx\n");

/***/ })

})