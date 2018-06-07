webpackHotUpdate(5,{

/***/ "./components/copyright.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/ubuntu/workspace/components/copyright.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var getThisYear = function getThisYear() {
  return new Date().getFullYear();
};

var _default = function _default(_ref) {
  var _ref$linkToDevAccount = _ref.linkToDevAccount,
      linkToDevAccount = _ref$linkToDevAccount === void 0 ? "https://github.com/9oelm" : _ref$linkToDevAccount,
      _ref$linkToAuthorAcco = _ref.linkToAuthorAccount,
      linkToAuthorAccount = _ref$linkToAuthorAcco === void 0 ? "#" : _ref$linkToAuthorAcco,
      _ref$author = _ref.author,
      author = _ref$author === void 0 ? "Choi Young" : _ref$author,
      _ref$developer = _ref.developer,
      developer = _ref$developer === void 0 ? "Joel Mun" : _ref$developer;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "\xA9 ", getThisYear(), " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "{linkToAuthorAccount}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, author), ", website developed by ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "{linkToDevAccount}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, developer));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getThisYear, "getThisYear", "/home/ubuntu/workspace/components/copyright.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/components/copyright.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.af18a4ff233ccbea6911.hot-update.js.map