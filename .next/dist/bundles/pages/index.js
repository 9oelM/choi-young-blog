module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/copyright.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/ubuntu/workspace/components/copyright.js";


var getThisYear = function getThisYear() {
  return new Date().getFullYear();
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
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
});

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Footer__ = __webpack_require__("grommet/components/Footer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__copyright_js__ = __webpack_require__("./components/copyright.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Paragraph__ = __webpack_require__("grommet/components/Paragraph");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Paragraph___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Paragraph__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Box__);
var _jsxFileName = "/home/ubuntu/workspace/components/footer.js";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Footer___default.a, {
    size: "medium",
    alignSelf: "end",
    align: "center",
    alignContent: "center",
    justify: "center",
    textAlign: "center",
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Box___default.a, {
    direction: "row",
    align: "center",
    pad: {
      "between": "medium"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Paragraph___default.a, {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__copyright_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }))));
});

/***/ }),

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Header__ = __webpack_require__("grommet/components/Header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Title__ = __webpack_require__("grommet/components/Title");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box__);
var _jsxFileName = "/home/ubuntu/workspace/components/header.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Header___default.a, {
    splash: false,
    float: false,
    fixed: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Title___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
    flex: true,
    justify: "end",
    direction: "row",
    responsive: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
});

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer__ = __webpack_require__("./components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sidebar__ = __webpack_require__("./components/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Section__ = __webpack_require__("grommet/components/Section");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Article__ = __webpack_require__("grommet/components/Article");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Box__);
var _jsxFileName = "/home/ubuntu/workspace/components/layout.js";







var ownerName = "Choi Young";
var footerStyles = {
  position: 'fixed',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center'
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Box___default.a, {
    full: true,
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_sidebar__["a" /* default */], {
    title: ownerName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Article___default.a, {
    full: true,
    direction: "column",
    alignContent: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
    title: ownerName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Section___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Box___default.a, {
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, children)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }))));
});

/***/ }),

/***/ "./components/sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Sidebar__ = __webpack_require__("grommet/components/Sidebar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Header__ = __webpack_require__("grommet/components/Header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Title__ = __webpack_require__("grommet/components/Title");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Menu__ = __webpack_require__("grommet/components/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor__ = __webpack_require__("grommet/components/Anchor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer__ = __webpack_require__("grommet/components/Footer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Button__);
var _jsxFileName = "/home/ubuntu/workspace/components/sidebar.js";









/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Sidebar___default.a, {
    colorIndex: "light-2",
    fixed: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Header___default.a, {
    pad: "medium",
    justify: "between",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Title___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Box___default.a, {
    flex: "grow",
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Menu___default.a, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
    href: "#",
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "First"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Second"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Third"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer___default.a, {
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }));
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet__);
var _jsxFileName = "/home/ubuntu/workspace/pages/index.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet___default.a.App, {
    centered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "content"));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "grommet":
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),

/***/ "grommet/components/Anchor":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Anchor");

/***/ }),

/***/ "grommet/components/Article":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Article");

/***/ }),

/***/ "grommet/components/Box":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Box");

/***/ }),

/***/ "grommet/components/Button":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Button");

/***/ }),

/***/ "grommet/components/Footer":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Footer");

/***/ }),

/***/ "grommet/components/Header":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Header");

/***/ }),

/***/ "grommet/components/Menu":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Menu");

/***/ }),

/***/ "grommet/components/Paragraph":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Paragraph");

/***/ }),

/***/ "grommet/components/Section":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Section");

/***/ }),

/***/ "grommet/components/Sidebar":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Sidebar");

/***/ }),

/***/ "grommet/components/Title":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Title");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map