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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
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

/***/ "./components/fixedHeading/fakeButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu__ = __webpack_require__("grommet/components/icons/base/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu__);
var _jsxFileName = "/home/ubuntu/workspace/components/fixedHeading/fakeButton.js";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["a"] = (function () {
  var _React$createElement;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default.a, {
    alignSelf: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Button___default.a, (_React$createElement = {
    style: {
      width: "min-content"
    },
    plain: false,
    fill: false,
    icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu___default.a, {
      size: "medium",
      colorIndex: "grey-2",
      pad: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    onClick: function onClick(f) {
      return f;
    },
    href: "#"
  }, _defineProperty(_React$createElement, "style", {
    visibility: "hidden"
  }), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 6
  }), _React$createElement)));
});

/***/ }),

/***/ "./components/fixedHeading/fixedHeadingLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__);
var _jsxFileName = "/home/ubuntu/workspace/components/fixedHeading/fixedHeadingLayout.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default.a, {
    style: {
      position: "fixed",
      zIndex: "9999"
    },
    responsive: false,
    justify: "between",
    full: "horizontal",
    colorIndex: "light-1",
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, children);
});

/***/ }),

/***/ "./components/fixedHeading/menuButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu__ = __webpack_require__("grommet/components/icons/base/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu__);
var _jsxFileName = "/home/ubuntu/workspace/components/fixedHeading/menuButton.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default.a, {
    alignSelf: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Button___default.a, {
    style: {
      width: "min-content"
    },
    plain: false,
    fill: false,
    icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_icons_base_Menu___default.a, {
      size: "medium",
      colorIndex: "grey-2",
      pad: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    onClick: function onClick(f) {
      return f;
    },
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
});

/***/ }),

/***/ "./components/fixedHeading/title.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Heading__ = __webpack_require__("grommet/components/Heading");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Heading__);
var _jsxFileName = "/home/ubuntu/workspace/components/fixedHeading/title.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default.a, {
    alignSelf: "center",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Heading___default.a, {
    style: {
      padding: "0",
      margin: "0"
    },
    tag: "h2",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Choi Young"));
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
    pad: "large",
    separator: "top",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Section__ = __webpack_require__("grommet/components/Section");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Article__ = __webpack_require__("grommet/components/Article");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading__ = __webpack_require__("grommet/components/Heading");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu__ = __webpack_require__("grommet/components/icons/base/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fixedHeading_fixedHeadingLayout_js__ = __webpack_require__("./components/fixedHeading/fixedHeadingLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mainContent_mainContent_js__ = __webpack_require__("./components/mainContent/mainContent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mainContent_mainContentLayout_js__ = __webpack_require__("./components/mainContent/mainContentLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__fixedHeading_menuButton_js__ = __webpack_require__("./components/fixedHeading/menuButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fixedHeading_title_js__ = __webpack_require__("./components/fixedHeading/title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__slideMenu_js__ = __webpack_require__("./components/slideMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fixedHeading_fakeButton_js__ = __webpack_require__("./components/fixedHeading/fakeButton.js");
var _jsxFileName = "/home/ubuntu/workspace/components/layout.js";

















var ownerName = "Choi Young";
var footerStyles = {
  position: 'fixed',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center'
};
var sideBarStyles = {};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__fixedHeading_fixedHeadingLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__slideMenu_js__["a" /* default */], {
    title: "Choi Young",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__fixedHeading_title_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__fixedHeading_fakeButton_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__mainContent_mainContentLayout_js__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__mainContent_mainContent_js__["a" /* default */], {
    title: ownerName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, children)));
});

/***/ }),

/***/ "./components/mainContent/mainContent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer__ = __webpack_require__("./components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Section__ = __webpack_require__("grommet/components/Section");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Article__ = __webpack_require__("grommet/components/Article");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Box__);
var _jsxFileName = "/home/ubuntu/workspace/components/mainContent/mainContent.js";






/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      ownerName = _ref.ownerName;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Article___default.a, {
    full: true,
    direction: "column",
    alignContent: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* default */], {
    title: ownerName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Section___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Box___default.a, {
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, children)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
});

/***/ }),

/***/ "./components/mainContent/mainContentLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box__);
var _jsxFileName = "/home/ubuntu/workspace/components/mainContent/mainContentLayout.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Box___default.a, {
    full: true,
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, children);
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









/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
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

/***/ "./components/slideMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_burger_menu__ = __webpack_require__("react-burger-menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_burger_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_burger_menu__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fixedHeading_menuButton_js__ = __webpack_require__("./components/fixedHeading/menuButton.js");
var _jsxFileName = "/home/ubuntu/workspace/components/slideMenu.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var SideBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideBar, _React$Component);

  function SideBar() {
    _classCallCheck(this, SideBar);

    return _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).apply(this, arguments));
  }

  _createClass(SideBar, [{
    key: "showSettings",
    value: function showSettings(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_burger_menu__["slide"], {
        customBurgerIcon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__fixedHeading_menuButton_js__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Header___default.a, {
        pad: "medium",
        justify: "between",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Title___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Box___default.a, {
        flex: "grow",
        justify: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Menu___default.a, {
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
        href: "#",
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "First"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Second"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Third"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer___default.a, {
        pad: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return SideBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SideBar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Card__ = __webpack_require__("grommet/components/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet__ = __webpack_require__("grommet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet__);
var _jsxFileName = "/home/ubuntu/workspace/pages/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet___default.a.App, {
    centered: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Card___default.a, {
    thumbnail: "https://images.pexels.com/photos/374685/pexels-photo-374685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    label: "Sample Label",
    heading: "Sample Heading",
    description: "Sample description providing more details.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Card___default.a, {
    thumbnail: "https://images.pexels.com/photos/374685/pexels-photo-374685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    label: "Sample Label",
    heading: "Sample Heading",
    description: "Sample description providing more details.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Card___default.a, {
    thumbnail: "https://images.pexels.com/photos/933701/pexels-photo-933701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    label: "Sample Label",
    heading: "Sample Heading",
    description: "Sample description providing more details.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
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

/***/ "grommet/components/Card":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Card");

/***/ }),

/***/ "grommet/components/Footer":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Footer");

/***/ }),

/***/ "grommet/components/Header":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Header");

/***/ }),

/***/ "grommet/components/Heading":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Heading");

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

/***/ "grommet/components/icons/base/Menu":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Menu");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map