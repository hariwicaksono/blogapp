webpackHotUpdate_N_E("pages/admin/blog",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteName, siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteName", function() { return siteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../libs/utils */ "./libs/utils.js");
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../libs/axios */ "./libs/axios.js");









var _jsxFileName = "C:\\xampp\\htdocs\\blogapp-nextjs\\components\\layout.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var siteName = 'Blog App';
var siteTitle = 'Blog App Dengan Next.js';

var Layout = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout, _Component);

  var _super = _createSuper(Layout);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleMenu", function () {
      this.setState({
        showMenu: !this.state.showMenu
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "componentDidMount", function () {
      if (!Object(_libs_utils__WEBPACK_IMPORTED_MODULE_15__["isAdmin"])()) {
        return Router.push('/login');
      }

      if (localStorage.getItem('isAdmin')) {
        //console.log('ADMIN')
        _this.setState({
          login: true
        });
      } else {
        _this.setState({
          login: false
        });
      }

      _libs_axios__WEBPACK_IMPORTED_MODULE_16__["default"].GetSetting().then(function (res) {
        _this.setState({
          Pengaturan: res.data[0]
        });
      });
    });

    _this.state = {
      showMenu: true,
      login: false,
      Pengaturan: []
    };
    _this.toggleMenu = _this.toggleMenu.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          home = _this$props.home,
          login = _this$props.login,
          admin = _this$props.admin,
          member = _this$props.member;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            name: "description",
            content: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          toggleMenu: this.toggleMenu,
          setting: this.state.Pengaturan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "wrapper",
          children: [this.state.login == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
            showMenu: this.state.showMenu
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 9
          }, this), !home && !login && !admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            id: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__["Container"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "pt-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
                  href: "/",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                    children: "\u2190 Kembali"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 76,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 5
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 7
            }, this), children]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 5
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            id: "content",
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
          setting: this.state.Pengaturan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 5
        }, this)]
      }, void 0, true);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsic2l0ZU5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJwcm9wcyIsInNldFN0YXRlIiwic2hvd01lbnUiLCJzdGF0ZSIsImlzQWRtaW4iLCJSb3V0ZXIiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwiQVBJIiwiR2V0U2V0dGluZyIsInRoZW4iLCJyZXMiLCJQZW5nYXR1cmFuIiwiZGF0YSIsInRvZ2dsZU1lbnUiLCJiaW5kIiwiY2hpbGRyZW4iLCJob21lIiwiYWRtaW4iLCJtZW1iZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxTQUFTLEdBQUcseUJBQWxCOztJQUVEQyxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixxTkFVTixZQUFXO0FBQ3RCLFdBQUtDLFFBQUwsQ0FBYztBQUFFQyxnQkFBUSxFQUFFLENBQUMsS0FBS0MsS0FBTCxDQUFXRDtBQUF4QixPQUFkO0FBQ0QsS0Faa0I7O0FBQUEsNE5BY0MsWUFBTTtBQUN4QixVQUFJLENBQUNFLDREQUFPLEVBQVosRUFBZ0I7QUFDZCxlQUFRQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLENBQVI7QUFDRDs7QUFFRCxVQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBSCxFQUFtQztBQUNqQztBQUNBLGNBQUtQLFFBQUwsQ0FBYztBQUNaUSxlQUFLLEVBQUc7QUFESSxTQUFkO0FBR0QsT0FMRCxNQUtPO0FBQ0gsY0FBS1IsUUFBTCxDQUFjO0FBQ1ZRLGVBQUss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O0FBZ0ZOdkIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vYmxvZy43M2Y1NTUxNzFhYjc2YzAzZTFhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXInO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge2lzTG9naW4sIGlzQWRtaW59IGZyb20gJy4uL2xpYnMvdXRpbHMnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uL2xpYnMvYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpdGVOYW1lID0gJ0Jsb2cgQXBwJ1xyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ0Jsb2cgQXBwIERlbmdhbiBOZXh0LmpzJ1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIHNob3dNZW51OiB0cnVlLFxyXG4gICAgICAgIGxvZ2luIDogZmFsc2UsXHJcbiAgICAgICAgUGVuZ2F0dXJhbjogW11cclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICB0b2dnbGVNZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01lbnU6ICF0aGlzLnN0YXRlLnNob3dNZW51IH0pO1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIGlmICghaXNBZG1pbigpKSB7XHJcbiAgICAgIHJldHVybiggUm91dGVyLnB1c2goJy9sb2dpbicpIClcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzQWRtaW4nKSl7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ0FETUlOJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9naW4gOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9naW4gOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgQVBJLkdldFNldHRpbmcoKS50aGVuKHJlcz0+e1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIFBlbmdhdHVyYW46IHJlcy5kYXRhWzBdXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaG9tZSwgbG9naW4sIGFkbWluLCBtZW1iZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+ICBcclxuICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMCw2MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8TmF2YmFyIHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX0gc2V0dGluZz17dGhpcy5zdGF0ZS5QZW5nYXR1cmFufSAvPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAge3RoaXMuc3RhdGUubG9naW4gPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgPFNpZGViYXIgc2hvd01lbnU9e3RoaXMuc3RhdGUuc2hvd01lbnV9IC8+XHJcbiAgICApfSBcclxuICAgIHshaG9tZSAmJiAhbG9naW4gJiYgIWFkbWluID8gXHJcbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8YT7ihpAgS2VtYmFsaTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PiBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDpcclxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPEZvb3RlciBzZXR0aW5nPXt0aGlzLnN0YXRlLlBlbmdhdHVyYW59Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==