webpackHotUpdate_N_E("pages/address-book",{

/***/ "./components/card/card.js":
/*!*********************************!*\
  !*** ./components/card/card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.module.scss */ \"./components/card/card.module.scss\");\n/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/button */ \"./components/button/button.js\");\n/* harmony import */ var _input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input/input */ \"./components/input/input.js\");\n\n\n\nvar _jsxFileName = \"/app/components/card/card.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Card(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children,\n      address = _ref.address;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      editState = _useState[0],\n      setEditState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      saveState = _useState2[0],\n      setSaveState = _useState2[1];\n\n  var editHandleClick = function editHandleClick() {\n    setEditState(true);\n    renderEditForm();\n  };\n\n  var saveHandleClick = function saveHandleClick() {\n    console.log('save');\n    setSaveState(true);\n  };\n\n  var createHandleClick = function createHandleClick() {\n    console.log(\"create\");\n  };\n\n  var deleteHandleClick = function deleteHandleClick() {\n    console.log('delete');\n  };\n\n  var renderEditForm = function renderEditForm(address) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"border-2 border-purple p-8 mt-8 w-full md:w-1/2 \".concat(editState ? _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['card__edit--visible'] : _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['card__edit']),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_input_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        label: \"Address Line 1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_input_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        onClick: saveHandleClick,\n        variant: \"primary\",\n        children: \"Save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _card_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.card,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-wrap justify-between items-center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mb-4 md:mb-0\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: !address ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          onClick: createHandleClick,\n          variant: \"secondary\",\n          children: \"Add Address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: editHandleClick,\n            variant: \"secondary\",\n            children: \"Edit\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_button_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            onClick: deleteHandleClick,\n            variant: \"error\",\n            children: \"Delete\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, this), renderEditForm()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Card, \"hLFj/jYBD3P+YepLS8Tpnk5uQJo=\");\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL2NhcmQuanM/NDhjNSJdLCJuYW1lcyI6WyJDYXJkIiwiY2hpbGRyZW4iLCJhZGRyZXNzIiwidXNlU3RhdGUiLCJlZGl0U3RhdGUiLCJzZXRFZGl0U3RhdGUiLCJzYXZlU3RhdGUiLCJzZXRTYXZlU3RhdGUiLCJlZGl0SGFuZGxlQ2xpY2siLCJyZW5kZXJFZGl0Rm9ybSIsInNhdmVIYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVIYW5kbGVDbGljayIsImRlbGV0ZUhhbmRsZUNsaWNrIiwic3R5bGVzIiwiY2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQUEsa0JBQ2hCQyxzREFBUSxDQUFDLEtBQUQsQ0FEUTtBQUFBLE1BQzNDQyxTQUQyQztBQUFBLE1BQ2hDQyxZQURnQzs7QUFBQSxtQkFFaEJGLHNEQUFRLENBQUMsSUFBRCxDQUZRO0FBQUEsTUFFM0NHLFNBRjJDO0FBQUEsTUFFaENDLFlBRmdDOztBQUloRCxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJILGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FJLGtCQUFjO0FBQ2YsR0FIRDs7QUFLQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUwsZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUhEOztBQUtBLE1BQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkYsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FGRDs7QUFJQSxNQUFNSCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUVQLE9BQUYsRUFBYztBQUNuQyx3QkFDRTtBQUFLLGVBQVMsNERBQXFERSxTQUFTLEdBQUdXLHdEQUFNLENBQUMscUJBQUQsQ0FBVCxHQUFrQ0Esd0RBQU0sQ0FBQyxZQUFELENBQXRHLENBQWQ7QUFBQSw4QkFDRSxxRUFBQyxvREFBRDtBQUFPLGFBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLHFFQUFDLHNEQUFEO0FBQVEsZUFBTyxFQUFFTCxlQUFqQjtBQUFrQyxlQUFPLEVBQUMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU9ELEdBUkQ7O0FBVUEsc0JBQ0E7QUFBSyxhQUFTLEVBQUVLLHdEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLCtDQUFkO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxrQkFDR2Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBLGtCQUNHLENBQUNDLE9BQUQsZ0JBQ0MscUVBQUMsc0RBQUQ7QUFBUSxpQkFBTyxFQUFFVyxpQkFBakI7QUFBb0MsaUJBQU8sRUFBQyxXQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxnQkFHQztBQUFBLGtDQUNFLHFFQUFDLHNEQUFEO0FBQVEsbUJBQU8sRUFBRUwsZUFBakI7QUFBa0MsbUJBQU8sRUFBQyxXQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFLHFFQUFDLHNEQUFEO0FBQVEsbUJBQU8sRUFBRU0saUJBQWpCO0FBQW9DLG1CQUFPLEVBQUMsT0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWdCR0wsY0FBYyxFQWhCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFvQkQ7O0dBcER1QlQsSTs7S0FBQUEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FyZC9jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2FyZC5tb2R1bGUuc2NzcydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL2J1dHRvbidcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dC9pbnB1dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCh7Y2hpbGRyZW4sIGFkZHJlc3N9KSB7XG4gIGxldCBbZWRpdFN0YXRlLCBzZXRFZGl0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBsZXQgW3NhdmVTdGF0ZSwgc2V0U2F2ZVN0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGVkaXRIYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRFZGl0U3RhdGUodHJ1ZSk7XG4gICAgcmVuZGVyRWRpdEZvcm0oKTtcbiAgfVxuXG4gIGNvbnN0IHNhdmVIYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xuICAgIHNldFNhdmVTdGF0ZSh0cnVlKTtcbiAgfVxuXG4gIGNvbnN0IGNyZWF0ZUhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlXCIpO1xuICB9XG4gIFxuICBjb25zdCBkZWxldGVIYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGVsZXRlJylcbiAgfVxuICBcbiAgY29uc3QgcmVuZGVyRWRpdEZvcm0gPSAoIGFkZHJlc3MpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bib3JkZXItMiBib3JkZXItcHVycGxlIHAtOCBtdC04IHctZnVsbCBtZDp3LTEvMiAke2VkaXRTdGF0ZSA/IHN0eWxlc1snY2FyZF9fZWRpdC0tdmlzaWJsZSddOiBzdHlsZXNbJ2NhcmRfX2VkaXQnXX1gfT5cbiAgICAgICAgPElucHV0IGxhYmVsPVwiQWRkcmVzcyBMaW5lIDFcIj48L0lucHV0PlxuICAgICAgICA8SW5wdXQ+PC9JbnB1dD5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzYXZlSGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJwcmltYXJ5XCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBtZDptYi0wXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiA+XG4gICAgICAgIHshYWRkcmVzcyA/IFxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y3JlYXRlSGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5BZGQgQWRkcmVzczwvQnV0dG9uPlxuICAgICAgICA6IFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2VkaXRIYW5kbGVDbGlja30gdmFyaWFudD1cInNlY29uZGFyeVwiPkVkaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZGVsZXRlSGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJlcnJvclwiPkRlbGV0ZTwvQnV0dG9uPiAgICAgICAgXG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIHtyZW5kZXJFZGl0Rm9ybSgpfVxuICA8L2Rpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card/card.js\n");

/***/ })

})