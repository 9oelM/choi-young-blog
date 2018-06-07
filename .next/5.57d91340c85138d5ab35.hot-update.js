webpackHotUpdate(5,{

/***/ "./components/slideMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_burger_menu__ = __webpack_require__("./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_burger_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_burger_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar__ = __webpack_require__("./node_modules/grommet/components/Sidebar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Header__ = __webpack_require__("./node_modules/grommet/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Title__ = __webpack_require__("./node_modules/grommet/components/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Box__ = __webpack_require__("./node_modules/grommet/components/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Menu__ = __webpack_require__("./node_modules/grommet/components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Anchor__ = __webpack_require__("./node_modules/grommet/components/Anchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Anchor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Footer__ = __webpack_require__("./node_modules/grommet/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Button__ = __webpack_require__("./node_modules/grommet/components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Button__);
var _jsxFileName = "/home/ubuntu/workspace/components/slideMenu.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Example =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: "showSettings",
    value: function showSettings(event) {
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_burger_menu__["slide"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Header___default.a, {
        pad: "medium",
        justify: "between",
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Title___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Box___default.a, {
        flex: "grow",
        justify: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Menu___default.a, {
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Anchor___default.a, {
        href: "#",
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "First"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Second"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Third"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Footer___default.a, {
        pad: "medium",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Example;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Example;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Example, "Example", "/home/ubuntu/workspace/components/slideMenu.js");
  reactHotLoader.register(_default, "default", "/home/ubuntu/workspace/components/slideMenu.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.57d91340c85138d5ab35.hot-update.js.map