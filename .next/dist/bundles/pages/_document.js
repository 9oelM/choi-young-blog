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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/grommet/grommet-dxc.min.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("next/document");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_grommet_dxc_min_css__ = __webpack_require__("./node_modules/grommet/grommet-dxc.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_grommet_dxc_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_grommet_dxc_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_style_css__ = __webpack_require__("./static/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
var _jsxFileName = "/home/ubuntu/workspace/pages/_document.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// _document.js
// pages/_document.js






var CustomDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(CustomDocument, _Document);

  function CustomDocument() {
    _classCallCheck(this, CustomDocument);

    return _possibleConstructorReturn(this, (CustomDocument.__proto__ || Object.getPrototypeOf(CustomDocument)).apply(this, arguments));
  }

  _createClass(CustomDocument, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,700",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-2063074794"
      }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        id: "main-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), " ", __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2063074794",
        css: "#main-wrapper.jsx-2063074794{width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QnNCLEFBR3VCLFdBQ0MsWUFDYiIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIF9kb2N1bWVudC5qc1xuLy8gcGFnZXMvX2RvY3VtZW50LmpzXG5pbXBvcnQgRG9jdW1lbnQsIHsgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IFwiZ3JvbW1ldC9ncm9tbWV0LWR4Yy5taW4uY3NzXCJcbmltcG9ydCBcIi4uL3N0YXRpYy9zdHlsZS5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9tRG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICB7LyogVGhpcyBpcyBnb2luZyB0byBiZSB5b3VyIGdsb2JhbCBoZWFkICovfVxuICAgICAgICAgIDxsaW5rIHJlbCA9IFwic3R5bGVzaGVldFwiIGhyZWYgPSBcIi9fbmV4dC9zdGF0aWMvc3R5bGUuY3NzXCIgLz5cbiAgICAgICAgICA8c2NyaXB0IHNyYyA9IFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZ3JvbW1ldC8xLjEwLjEvZ3JvbW1ldC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIi8+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Xb3JrK1NhbnM6MzAwLDQwMCw3MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIFxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIFxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiBpZCA9IFwibWFpbi13cmFwcGVyXCIgLz4gey8qIGVhY2ggcm91dGVkIHBhZ2Ugd2lsbCBnbyBpbnNpZGUgaGVyZSAqL31cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI21haW4td3JhcHBlciB7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPiB7LyogWW91IGRvbid0IGhhdmUgdG8gY2FyZSBhYm91dCB0aGlzLiAqL31cbiAgICAgICAgICBcbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/_document.js */"
      }), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), " "));
    }
  }]);

  return CustomDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);



/***/ }),

/***/ "./static/style.css":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map