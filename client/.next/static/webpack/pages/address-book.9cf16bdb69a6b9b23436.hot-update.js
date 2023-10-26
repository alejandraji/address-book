webpackHotUpdate_N_E("pages/address-book",{

/***/ "./pages/address-book.js":
/*!*******************************!*\
  !*** ./pages/address-book.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_input_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/input/input */ \"./components/input/input.js\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/card/card */ \"./components/card/card.js\");\n/* harmony import */ var _addressesApi_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../addressesApi/search */ \"./addressesApi/search.js\");\n/* harmony import */ var _addressesApi_seedAddresses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../addressesApi/seedAddresses */ \"./addressesApi/seedAddresses.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/app/pages/address-book.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nfunction Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  // seedAddresses()\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      searchString = _useState[0],\n      setSearchString = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      addresses = _useState2[0],\n      setAddresses = _useState2[1];\n\n  var prependAddress = function prependAddress(address) {\n    setAddresses([address].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addresses)));\n  };\n\n  var removeAddress = function removeAddress(addressToRemove) {\n    setAddresses(addresses.filter(function (address) {\n      return addressToRemove.id != address.id;\n    }));\n  };\n\n  var replaceAddress = function replaceAddress(replacementAddress) {\n    setAddresses(addresses.map(function (address) {\n      return replacementAddress.id === address.id ? replacementAddress : address;\n    }));\n  };\n\n  var renderSearchInput = function renderSearchInput() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: \"w-full md:w-1/2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_input_input__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          value: searchString,\n          onChange: searchHandleChange,\n          icon: \"icon-search.svg\",\n          name: \"search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false);\n  };\n\n  var cardProps = {\n    prependAddress: prependAddress,\n    removeAddress: removeAddress,\n    replaceAddress: replaceAddress\n  };\n\n  var renderAddressCards = function renderAddressCards() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"mt-10\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _objectSpread({}, cardProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), addresses.map(function (address) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_card_card__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _objectSpread({\n          initialAddress: address\n        }, cardProps), address.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    Object(_addressesApi_search__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(searchString).then(function (results) {\n      return setAddresses(results);\n    });\n  }, [searchString]);\n\n  var searchHandleChange = function searchHandleChange(e) {\n    return setSearchString(e.target.value);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    home: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"title\", {\n        children: \"Address Book\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h1\", {\n      className: \"mb-8\",\n      children: \"Address Book\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this), renderSearchInput(), renderAddressCards()]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"BfdJ9wYF29uYnkb2mwzNT51PQRE=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkcmVzcy1ib29rLmpzPzE5YzQiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwic2VhcmNoU3RyaW5nIiwic2V0U2VhcmNoU3RyaW5nIiwiYWRkcmVzc2VzIiwic2V0QWRkcmVzc2VzIiwicHJlcGVuZEFkZHJlc3MiLCJhZGRyZXNzIiwicmVtb3ZlQWRkcmVzcyIsImFkZHJlc3NUb1JlbW92ZSIsImZpbHRlciIsImlkIiwicmVwbGFjZUFkZHJlc3MiLCJyZXBsYWNlbWVudEFkZHJlc3MiLCJtYXAiLCJyZW5kZXJTZWFyY2hJbnB1dCIsInNlYXJjaEhhbmRsZUNoYW5nZSIsImNhcmRQcm9wcyIsInJlbmRlckFkZHJlc3NDYXJkcyIsInVzZUVmZmVjdCIsInNlYXJjaCIsInRoZW4iLCJyZXN1bHRzIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUFvQjtBQUFBOztBQUFBOztBQUFBOztBQUNqQztBQURpQyxrQkFFT0Msc0RBQVEsQ0FBQyxFQUFELENBRmY7QUFBQSxNQUUxQkMsWUFGMEI7QUFBQSxNQUVaQyxlQUZZOztBQUFBLG1CQUdDRixzREFBUSxDQUFDLEVBQUQsQ0FIVDtBQUFBLE1BRzFCRyxTQUgwQjtBQUFBLE1BR2ZDLFlBSGU7O0FBS2pDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsT0FBTyxFQUFJO0FBQ2hDRixnQkFBWSxFQUFFRSxPQUFGLHNHQUFhSCxTQUFiLEdBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsZUFBZSxFQUFJO0FBQ3ZDSixnQkFBWSxDQUFDRCxTQUFTLENBQUNNLE1BQVYsQ0FBaUIsVUFBQUgsT0FBTztBQUFBLGFBQUlFLGVBQWUsQ0FBQ0UsRUFBaEIsSUFBc0JKLE9BQU8sQ0FBQ0ksRUFBbEM7QUFBQSxLQUF4QixDQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQUMsa0JBQWtCLEVBQUk7QUFDM0NSLGdCQUFZLENBQUNELFNBQVMsQ0FBQ1UsR0FBVixDQUFjLFVBQUFQLE9BQU87QUFBQSxhQUFJTSxrQkFBa0IsQ0FBQ0YsRUFBbkIsS0FBMEJKLE9BQU8sQ0FBQ0ksRUFBbEMsR0FBdUNFLGtCQUF2QyxHQUE0RE4sT0FBaEU7QUFBQSxLQUFyQixDQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLE1BQU1RLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5Qix3QkFDRTtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLCtCQUNFLHFFQUFDLCtEQUFEO0FBQ0UsZUFBSyxFQUFFYixZQURUO0FBRUUsa0JBQVEsRUFBRWMsa0JBRlo7QUFHRSxjQUFJLEVBQUMsaUJBSFA7QUFJRSxjQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLHFCQURGO0FBWUQsR0FiRDs7QUFlQSxNQUFNQyxTQUFTLEdBQUc7QUFDaEJYLGtCQUFjLEVBQWRBLGNBRGdCO0FBRWhCRSxpQkFBYSxFQUFiQSxhQUZnQjtBQUdoQkksa0JBQWMsRUFBZEE7QUFIZ0IsR0FBbEI7O0FBTUEsTUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQy9CLHdCQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw4QkFDRSxxRUFBQyw2REFBRCxvQkFBVUQsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFR2IsU0FBUyxDQUFDVSxHQUFWLENBQWMsVUFBQ1AsT0FBRDtBQUFBLDRCQUNiLHFFQUFDLDZEQUFEO0FBRUUsd0JBQWMsRUFBRUE7QUFGbEIsV0FHTVUsU0FITixHQUNPVixPQUFPLENBQUNJLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQVlELEdBYkQ7O0FBZUFRLHlEQUFTLENBQUMsWUFBTTtBQUNkQyx3RUFBTSxDQUFDbEIsWUFBRCxDQUFOLENBQ0dtQixJQURILENBQ1EsVUFBQUMsT0FBTztBQUFBLGFBQUlqQixZQUFZLENBQUNpQixPQUFELENBQWhCO0FBQUEsS0FEZjtBQUVELEdBSFEsRUFHUCxDQUFDcEIsWUFBRCxDQUhPLENBQVQ7O0FBS0EsTUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBTyxDQUFDO0FBQUEsV0FBSXBCLGVBQWUsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUEsR0FBNUI7O0FBQ0Esc0JBQ0UscUVBQUMsaUVBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBSSxlQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLEVBS0tWLGlCQUFpQixFQUx0QixFQU1LRyxrQkFBa0IsRUFOdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FyRXVCbEIsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2FkZHJlc3MtYm9vay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0J1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQvY2FyZCdcblxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi9hZGRyZXNzZXNBcGkvc2VhcmNoJztcbmltcG9ydCBzZWVkQWRkcmVzc2VzIGZyb20gJy4uL2FkZHJlc3Nlc0FwaS9zZWVkQWRkcmVzc2VzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoIHt9ICkge1xuICAvLyBzZWVkQWRkcmVzc2VzKClcbiAgY29uc3QgW3NlYXJjaFN0cmluZywgc2V0U2VhcmNoU3RyaW5nXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbYWRkcmVzc2VzLCBzZXRBZGRyZXNzZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgcHJlcGVuZEFkZHJlc3MgPSBhZGRyZXNzID0+IHtcbiAgICBzZXRBZGRyZXNzZXMoW2FkZHJlc3MsLi4uYWRkcmVzc2VzXSlcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUFkZHJlc3MgPSBhZGRyZXNzVG9SZW1vdmUgPT4ge1xuICAgIHNldEFkZHJlc3NlcyhhZGRyZXNzZXMuZmlsdGVyKGFkZHJlc3MgPT4gYWRkcmVzc1RvUmVtb3ZlLmlkICE9IGFkZHJlc3MuaWQpKVxuICB9XG5cbiAgY29uc3QgcmVwbGFjZUFkZHJlc3MgPSByZXBsYWNlbWVudEFkZHJlc3MgPT4ge1xuICAgIHNldEFkZHJlc3NlcyhhZGRyZXNzZXMubWFwKGFkZHJlc3MgPT4gcmVwbGFjZW1lbnRBZGRyZXNzLmlkID09PSBhZGRyZXNzLmlkID8gcmVwbGFjZW1lbnRBZGRyZXNzIDogYWRkcmVzcykpXG4gIH1cblxuICBjb25zdCByZW5kZXJTZWFyY2hJbnB1dCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzJcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hTdHJpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17c2VhcmNoSGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgaWNvbj1cImljb24tc2VhcmNoLnN2Z1wiXG4gICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGNhcmRQcm9wcyA9IHtcbiAgICBwcmVwZW5kQWRkcmVzcyxcbiAgICByZW1vdmVBZGRyZXNzLFxuICAgIHJlcGxhY2VBZGRyZXNzXG4gIH1cblxuICBjb25zdCByZW5kZXJBZGRyZXNzQ2FyZHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgPENhcmQgey4uLmNhcmRQcm9wc30gLz5cbiAgICAgICAge2FkZHJlc3Nlcy5tYXAoKGFkZHJlc3MpID0+IFxuICAgICAgICAgIDxDYXJkIFxuICAgICAgICAgICAga2V5PXthZGRyZXNzLmlkfSBcbiAgICAgICAgICAgIGluaXRpYWxBZGRyZXNzPXthZGRyZXNzfSBcbiAgICAgICAgICAgIHsuLi5jYXJkUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2VhcmNoKHNlYXJjaFN0cmluZylcbiAgICAgIC50aGVuKHJlc3VsdHMgPT4gc2V0QWRkcmVzc2VzKHJlc3VsdHMpKTtcbiAgfSxbc2VhcmNoU3RyaW5nXSlcblxuICBjb25zdCBzZWFyY2hIYW5kbGVDaGFuZ2UgPSBlID0+IHNldFNlYXJjaFN0cmluZyhlLnRhcmdldC52YWx1ZSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BZGRyZXNzIEJvb2s8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLThcIj5BZGRyZXNzIEJvb2s8L2gxPlxuICAgICAgICB7cmVuZGVyU2VhcmNoSW5wdXQoKX1cbiAgICAgICAge3JlbmRlckFkZHJlc3NDYXJkcygpfVxuICAgIDwvTGF5b3V0PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/address-book.js\n");

/***/ })

})