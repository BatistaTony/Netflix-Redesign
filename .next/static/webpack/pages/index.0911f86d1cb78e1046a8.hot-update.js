webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/navbar/modal.tsx":
/*!*****************************************!*\
  !*** ./src/components/navbar/modal.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_batista_Desktop_Projects_Netflix_Redesign_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/navbar/styles.ts\");\n/* harmony import */ var _iconesSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iconesSvg */ \"./src/components/navbar/iconesSvg.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/home/batista/Desktop/Projects/Netflix Redesign/src/components/navbar/modal.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_batista_Desktop_Projects_Netflix_Redesign_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar ModalSearch = function ModalSearch(_ref) {\n  _s();\n\n  var toggleModal = _ref.toggleModal;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])({\n    y: 0\n  }),\n      animationModal = _useState[0],\n      setAnimation = _useState[1];\n\n  var results = [{\n    cover: \"/images/photo1.jpg\",\n    title: \"The Porsuit of Happiness\",\n    description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\n          Dolores placeat accusamus reiciendis.\",\n    year: 2020\n  }, {\n    cover: \"/images/photo1.jpg\",\n    title: \"The Porsuit of Happiness\",\n    description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\n            Dolores placeat accusamus reiciendis.\",\n    year: 2020\n  }, {\n    cover: \"/images/photo1.jpg\",\n    title: \"The Porsuit of Happiness\",\n    description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\n            Dolores placeat accusamus reiciendis.\",\n    year: 2020\n  }, {\n    cover: \"/images/photo1.jpg\",\n    title: \"The Porsuit of Happiness\",\n    description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\n            Dolores placeat accusamus reiciendis.\",\n    year: 2020\n  }, {\n    cover: \"/images/photo1.jpg\",\n    title: \"The Porsuit of Happiness\",\n    description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\n            Dolores placeat accusamus reiciendis.\",\n    year: 2020\n  }, {\n    cover: \"/images/photo1.jpg\",\n    title: \"The Porsuit of Happiness\",\n    description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit.\\n            Dolores placeat accusamus reiciendis.\",\n    year: 2020\n  }];\n\n  var toggleModalByOther = function toggleModalByOther() {\n    setAnimation({\n      y: -1000\n    });\n    setTimeout(function () {\n      toggleModal();\n    }, 300);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"SeachModal\"], {\n    initial: {\n      y: -100\n    },\n    animate: _objectSpread(_objectSpread({}, animationModal), {}, {\n      duration: 1\n    }),\n    length: results.length,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"ButtonCloseModal\"], {\n      onClick: toggleModalByOther,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_iconesSvg__WEBPACK_IMPORTED_MODULE_3__[\"CloseIcon\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"FormGroup\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        placeholder: \"search for movie\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"SearchResult\"], {\n      length: results.length,\n      children: results.map(function (item, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"SearchResultItem\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"cover\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"itemInfo\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              children: item.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              children: item.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n              children: item.year\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ModalSearch, \"sgVppHfaJHv9nqfh1ppfxdTnuMc=\");\n\n_c = ModalSearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalSearch);\n\nvar _c;\n\n$RefreshReg$(_c, \"ModalSearch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL21vZGFsLnRzeD8xMjlkIl0sIm5hbWVzIjpbIk1vZGFsU2VhcmNoIiwidG9nZ2xlTW9kYWwiLCJ1c2VTdGF0ZSIsInkiLCJhbmltYXRpb25Nb2RhbCIsInNldEFuaW1hdGlvbiIsInJlc3VsdHMiLCJjb3ZlciIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ5ZWFyIiwidG9nZ2xlTW9kYWxCeU90aGVyIiwic2V0VGltZW91dCIsImR1cmF0aW9uIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBOztBQWFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLFdBQTBCLFFBQTFCQSxXQUEwQjs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBTTtBQUFFQyxLQUFDLEVBQUU7QUFBTCxHQUFOLENBREE7QUFBQSxNQUN4Q0MsY0FEd0M7QUFBQSxNQUN4QkMsWUFEd0I7O0FBRy9DLE1BQU1DLE9BQXNCLEdBQUcsQ0FDN0I7QUFDRUMsU0FBSyxFQUFFLG9CQURUO0FBRUVDLFNBQUssRUFBRSwwQkFGVDtBQUdFQyxlQUFXLDZHQUhiO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBRDZCLEVBUTdCO0FBQ0VILFNBQUssRUFBRSxvQkFEVDtBQUVFQyxTQUFLLEVBQUUsMEJBRlQ7QUFHRUMsZUFBVywrR0FIYjtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQVI2QixFQWU3QjtBQUNFSCxTQUFLLEVBQUUsb0JBRFQ7QUFFRUMsU0FBSyxFQUFFLDBCQUZUO0FBR0VDLGVBQVcsK0dBSGI7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0FmNkIsRUFzQjdCO0FBQ0VILFNBQUssRUFBRSxvQkFEVDtBQUVFQyxTQUFLLEVBQUUsMEJBRlQ7QUFHRUMsZUFBVywrR0FIYjtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQXRCNkIsRUE2QjdCO0FBQ0VILFNBQUssRUFBRSxvQkFEVDtBQUVFQyxTQUFLLEVBQUUsMEJBRlQ7QUFHRUMsZUFBVywrR0FIYjtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQTdCNkIsRUFvQzdCO0FBQ0VILFNBQUssRUFBRSxvQkFEVDtBQUVFQyxTQUFLLEVBQUUsMEJBRlQ7QUFHRUMsZUFBVywrR0FIYjtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQXBDNkIsQ0FBL0I7O0FBNkNBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQk4sZ0JBQVksQ0FBQztBQUFFRixPQUFDLEVBQUUsQ0FBQztBQUFOLEtBQUQsQ0FBWjtBQUVBUyxjQUFVLENBQUMsWUFBTTtBQUNmWCxpQkFBVztBQUNaLEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxHQU5EOztBQVFBLHNCQUNFLHFFQUFDLGtEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUVFLE9BQUMsRUFBRSxDQUFDO0FBQU4sS0FEWDtBQUVFLFdBQU8sa0NBQU9DLGNBQVA7QUFBdUJTLGNBQVEsRUFBRTtBQUFqQyxNQUZUO0FBR0UsVUFBTSxFQUFFUCxPQUFPLENBQUNRLE1BSGxCO0FBQUEsNEJBS0UscUVBQUMsd0RBQUQ7QUFBa0IsYUFBTyxFQUFFSCxrQkFBM0I7QUFBQSw2QkFDRSxxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLGVBU0UscUVBQUMsaURBQUQ7QUFBQSw2QkFDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQWFFLHFFQUFDLG9EQUFEO0FBQWMsWUFBTSxFQUFFTCxPQUFPLENBQUNRLE1BQTlCO0FBQUEsZ0JBQ0dSLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLFVBQUNDLElBQUQsRUFBZUMsS0FBZjtBQUFBLDRCQUNYLHFFQUFDLHdEQUFEO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsb0NBQ0U7QUFBQSx3QkFBS0QsSUFBSSxDQUFDUjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBLHdCQUFJUSxJQUFJLENBQUNQO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUlFO0FBQUEsd0JBQUlPLElBQUksQ0FBQ047QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQXVCTyxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQXJGRDs7R0FBTWpCLFc7O0tBQUFBLFc7QUF1RlNBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL21vZGFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJ1dHRvbkNsb3NlTW9kYWwsXG4gIEZvcm1Hcm91cCxcbiAgU2VhY2hNb2RhbCxcbiAgU2VhcmNoUmVzdWx0LFxuICBTZWFyY2hSZXN1bHRJdGVtLFxufSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuaW1wb3J0IHsgQ2xvc2VJY29uIH0gZnJvbSBcIi4vaWNvbmVzU3ZnXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFRNb3ZpZSA9IHtcbiAgY292ZXI6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgeWVhcjogc3RyaW5nIHwgbnVtYmVyO1xufTtcblxudHlwZSBUUHJvcHMgPSB7XG4gIHRvZ2dsZU1vZGFsOiBhbnk7XG59O1xuXG5jb25zdCBNb2RhbFNlYXJjaCA9ICh7IHRvZ2dsZU1vZGFsIH06IFRQcm9wcykgPT4ge1xuICBjb25zdCBbYW5pbWF0aW9uTW9kYWwsIHNldEFuaW1hdGlvbl0gPSB1c2VTdGF0ZTxhbnk+KHsgeTogMCB9KTtcblxuICBjb25zdCByZXN1bHRzOiBBcnJheTxUTW92aWU+ID0gW1xuICAgIHtcbiAgICAgIGNvdmVyOiBcIi9pbWFnZXMvcGhvdG8xLmpwZ1wiLFxuICAgICAgdGl0bGU6IFwiVGhlIFBvcnN1aXQgb2YgSGFwcGluZXNzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgRG9sb3JlcyBwbGFjZWF0IGFjY3VzYW11cyByZWljaWVuZGlzLmAsXG4gICAgICB5ZWFyOiAyMDIwLFxuICAgIH0sXG4gICAge1xuICAgICAgY292ZXI6IFwiL2ltYWdlcy9waG90bzEuanBnXCIsXG4gICAgICB0aXRsZTogXCJUaGUgUG9yc3VpdCBvZiBIYXBwaW5lc3NcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgIERvbG9yZXMgcGxhY2VhdCBhY2N1c2FtdXMgcmVpY2llbmRpcy5gLFxuICAgICAgeWVhcjogMjAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdmVyOiBcIi9pbWFnZXMvcGhvdG8xLmpwZ1wiLFxuICAgICAgdGl0bGU6IFwiVGhlIFBvcnN1aXQgb2YgSGFwcGluZXNzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICBEb2xvcmVzIHBsYWNlYXQgYWNjdXNhbXVzIHJlaWNpZW5kaXMuYCxcbiAgICAgIHllYXI6IDIwMjAsXG4gICAgfSxcbiAgICB7XG4gICAgICBjb3ZlcjogXCIvaW1hZ2VzL3Bob3RvMS5qcGdcIixcbiAgICAgIHRpdGxlOiBcIlRoZSBQb3JzdWl0IG9mIEhhcHBpbmVzc1wiLFxuICAgICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxuICAgICAgICAgICAgRG9sb3JlcyBwbGFjZWF0IGFjY3VzYW11cyByZWljaWVuZGlzLmAsXG4gICAgICB5ZWFyOiAyMDIwLFxuICAgIH0sXG4gICAge1xuICAgICAgY292ZXI6IFwiL2ltYWdlcy9waG90bzEuanBnXCIsXG4gICAgICB0aXRsZTogXCJUaGUgUG9yc3VpdCBvZiBIYXBwaW5lc3NcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgIERvbG9yZXMgcGxhY2VhdCBhY2N1c2FtdXMgcmVpY2llbmRpcy5gLFxuICAgICAgeWVhcjogMjAyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvdmVyOiBcIi9pbWFnZXMvcGhvdG8xLmpwZ1wiLFxuICAgICAgdGl0bGU6IFwiVGhlIFBvcnN1aXQgb2YgSGFwcGluZXNzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXG4gICAgICAgICAgICBEb2xvcmVzIHBsYWNlYXQgYWNjdXNhbXVzIHJlaWNpZW5kaXMuYCxcbiAgICAgIHllYXI6IDIwMjAsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCB0b2dnbGVNb2RhbEJ5T3RoZXIgPSAoKSA9PiB7XG4gICAgc2V0QW5pbWF0aW9uKHsgeTogLTEwMDAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvZ2dsZU1vZGFsKCk7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTZWFjaE1vZGFsXG4gICAgICBpbml0aWFsPXt7IHk6IC0xMDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgLi4uYW5pbWF0aW9uTW9kYWwsIGR1cmF0aW9uOiAxIH19XG4gICAgICBsZW5ndGg9e3Jlc3VsdHMubGVuZ3RofVxuICAgID5cbiAgICAgIDxCdXR0b25DbG9zZU1vZGFsIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsQnlPdGhlcn0+XG4gICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgIDwvQnV0dG9uQ2xvc2VNb2RhbD5cblxuICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIG1vdmllXCIgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICA8U2VhcmNoUmVzdWx0IGxlbmd0aD17cmVzdWx0cy5sZW5ndGh9PlxuICAgICAgICB7cmVzdWx0cy5tYXAoKGl0ZW06IFRNb3ZpZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U2VhcmNoUmVzdWx0SXRlbSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9cIj5cbiAgICAgICAgICAgICAgPGgxPntpdGVtLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxwPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgICA8cD57aXRlbS55ZWFyfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU2VhcmNoUmVzdWx0SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L1NlYXJjaFJlc3VsdD5cbiAgICA8L1NlYWNoTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbFNlYXJjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/navbar/modal.tsx\n");

/***/ })

})