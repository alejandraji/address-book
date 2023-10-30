webpackHotUpdate_N_E("pages/address-book",{

/***/ "./addressesApi/update.js":
/*!********************************!*\
  !*** ./addressesApi/update.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var update = function update(address) {\n  return fetch(\"http://localhost:3001/addresses/\".concat(address.id), {\n    method: 'PUT',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(address)\n  }).then(function (response) {\n    var parsedResponse = response.json();\n\n    if (response.ok) {\n      return parsedResponse;\n    } else {\n      console.log(parsedResponse);\n      return Promise.reject(JSON.parse(parsedResponse.message));\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (update);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWRkcmVzc2VzQXBpL3VwZGF0ZS5qcz85YWMxIl0sIm5hbWVzIjpbInVwZGF0ZSIsImFkZHJlc3MiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwicGFyc2VkUmVzcG9uc2UiLCJqc29uIiwib2siLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlamVjdCIsInBhcnNlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxrREFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsT0FBRDtBQUFBLFNBQ2JDLEtBQUssMkNBQW9DRCxPQUFPLENBQUNFLEVBQTVDLEdBQWtEO0FBQ3JEQyxVQUFNLEVBQUUsS0FENkM7QUFFckRDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRjRDO0FBS3JEQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxPQUFmO0FBTCtDLEdBQWxELENBQUwsQ0FPR1EsSUFQSCxDQU9RLFVBQUFDLFFBQVEsRUFBSTtBQUNoQixRQUFNQyxjQUFjLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxFQUF2Qjs7QUFDQSxRQUFJRixRQUFRLENBQUNHLEVBQWIsRUFBaUI7QUFDZixhQUFPRixjQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSixjQUFaO0FBQ0EsYUFBT0ssT0FBTyxDQUFDQyxNQUFSLENBQWVWLElBQUksQ0FBQ1csS0FBTCxDQUFXUCxjQUFjLENBQUNRLE9BQTFCLENBQWYsQ0FBUDtBQUNEO0FBQ0YsR0FmSCxDQURhO0FBQUEsQ0FBZjs7QUFrQmVuQixxRUFBZiIsImZpbGUiOiIuL2FkZHJlc3Nlc0FwaS91cGRhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cGRhdGUgPSAoYWRkcmVzcyk9PlxuICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FkZHJlc3Nlcy8ke2FkZHJlc3MuaWR9YCwge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYWRkcmVzcylcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCBwYXJzZWRSZXNwb25zZSA9IHJlc3BvbnNlLmpzb24oKVxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiBwYXJzZWRSZXNwb25zZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cocGFyc2VkUmVzcG9uc2UpXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChKU09OLnBhcnNlKHBhcnNlZFJlc3BvbnNlLm1lc3NhZ2UpKVxuICAgICAgfVxuICAgIH0pXG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./addressesApi/update.js\n");

/***/ })

})