webpackHotUpdate(5,{

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_footer__ = __webpack_require__("./components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sidebar__ = __webpack_require__("./components/sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Button__ = __webpack_require__("./node_modules/grommet/components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Section__ = __webpack_require__("./node_modules/grommet/components/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Article__ = __webpack_require__("./node_modules/grommet/components/Article.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__ = __webpack_require__("./node_modules/grommet/components/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading__ = __webpack_require__("./node_modules/grommet/components/Heading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu__ = __webpack_require__("./node_modules/grommet/components/icons/base/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu__);
var _jsxFileName = "/home/ubuntu/workspace/components/layout.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();










var ownerName = "Choi Young";
var footerStyles = {
  position: 'fixed',
  bottom: '0',
  display: 'flex',
  justifyContent: 'center'
};
var sideBarStyles = {};

var _default = function _default(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
    full: "horizontal",
    pad: "small",
    colorIndex: "light-2",
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
    alignSelf: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Button___default.a, {
    style: {
      width: "min-content"
    },
    plain: false,
    fill: false,
    icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_base_Menu___default.a, {
      size: "medium",
      colorIndex: "grey-2",
      pad: "small",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    }),
    onClick: function onClick(f) {
      return f;
    },
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
    alignSelf: "center",
    align: "center",
    full: "horizontal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Heading___default.a, {
    style: {
      padding: "0",
      margin: "0"
    },
    tag: "h2",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Choi Young's portfolio"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
    full: true,
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_sidebar__["a" /* default */], {
    title: ownerName,
    style: sideBarStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Article___default.a, {
    full: true,
    direction: "column",
    alignContent: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_header__["a" /* default */], {
    title: ownerName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Section___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, children)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ownerName, "ownerName", "/home/ubuntu/workspace/components/layout.js");
  reactHotLoader.register(footerStyles, "footerStyles", "/home/ubuntu/workspace/components/layout.js");
  reactHotLoader.register(sideBarStyles, "sideBarStyles", "/home/ubuntu/workspace/components/layout.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/components/layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.5b2ec30eba440201c787.hot-update.js.map