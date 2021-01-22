webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar */ "./components/sidebar.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer */ "./components/footer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../libs/utils */ "./libs/utils.js");
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../libs/axios */ "./libs/axios.js");









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
      if (!Object(_libs_utils__WEBPACK_IMPORTED_MODULE_16__["isAdmin"])()) {
        return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');
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

      _libs_axios__WEBPACK_IMPORTED_MODULE_17__["default"].GetSetting().then(function (res) {
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
            lineNumber: 59,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            name: "description",
            content: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          toggleMenu: this.toggleMenu,
          setting: this.state.Pengaturan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "wrapper",
          children: [this.state.login == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_sidebar__WEBPACK_IMPORTED_MODULE_13__["default"], {
            showMenu: this.state.showMenu
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 9
          }, this), !home && !login && !admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            id: "content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Container"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                className: "pt-3",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                  href: "/",
                  passHref: true,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
                    children: "\u2190 Kembali"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 77,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 5
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 7
            }, this), children]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 5
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            id: "content",
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
          setting: this.state.Pengaturan
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsic2l0ZU5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJwcm9wcyIsInNldFN0YXRlIiwic2hvd01lbnUiLCJzdGF0ZSIsImlzQWRtaW4iLCJSb3V0ZXIiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwiQVBJIiwiR2V0U2V0dGluZyIsInRoZW4iLCJyZXMiLCJQZW5nYXR1cmFuIiwiZGF0YSIsInRvZ2dsZU1lbnUiLCJiaW5kIiwiY2hpbGRyZW4iLCJob21lIiwiYWRtaW4iLCJtZW1iZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFVBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLHlCQUFsQjs7SUFFREMsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIscU5BVU4sWUFBVztBQUN0QixXQUFLQyxRQUFMLENBQWM7QUFBRUMsZ0JBQVEsRUFBRSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0Q7QUFBeEIsT0FBZDtBQUNELEtBWmtCOztBQUFBLDROQWNDLFlBQU07QUFDeEIsVUFBSSxDQUFDRSw0REFBTyxFQUFaLEVBQWdCO0FBQ2QsZUFBUUMsbURBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosQ0FBUjtBQUNEOztBQUVELFVBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFILEVBQW1DO0FBQ2pDO0FBQ0EsY0FBS1AsUUFBTCxDQUFjO0FBQ1pRLGVBQUssRUFBRztBQURJLFNBQWQ7QUFHRCxPQUxELE1BS087QUFDSCxjQUFLUixRQUFMLENBQWM7QUFD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RWtCUSwrQzs7QUFnRk52QixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMzRlMTljZDc3M2M2ZGVkZTU0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHtpc0xvZ2luLCBpc0FkbWlufSBmcm9tICcuLi9saWJzL3V0aWxzJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi9saWJzL2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaXRlTmFtZSA9ICdCbG9nIEFwcCdcclxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdCbG9nIEFwcCBEZW5nYW4gTmV4dC5qcydcclxuXHJcbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBzaG93TWVudTogdHJ1ZSxcclxuICAgICAgICBsb2dpbiA6IGZhbHNlLFxyXG4gICAgICAgIFBlbmdhdHVyYW46IFtdXHJcbiAgICB9XHJcbiAgICB0aGlzLnRvZ2dsZU1lbnUgPSB0aGlzLnRvZ2dsZU1lbnUuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTWVudSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dNZW51OiAhdGhpcy5zdGF0ZS5zaG93TWVudSB9KTtcclxuICB9XHJcbiAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzQWRtaW4oKSkge1xyXG4gICAgICByZXR1cm4oIFJvdXRlci5wdXNoKCcvbG9naW4nKSApXHJcbiAgICB9XHJcblxyXG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzQWRtaW4nKSl7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJ0FETUlOJylcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbG9naW4gOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbG9naW4gOiBmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgQVBJLkdldFNldHRpbmcoKS50aGVuKHJlcz0+e1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIFBlbmdhdHVyYW46IHJlcy5kYXRhWzBdXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaG9tZSwgbG9naW4sIGFkbWluLCBtZW1iZXIgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEhlYWQ+ICBcclxuICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMCw2MDBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8TmF2YmFyIHRvZ2dsZU1lbnU9e3RoaXMudG9nZ2xlTWVudX0gc2V0dGluZz17dGhpcy5zdGF0ZS5QZW5nYXR1cmFufSAvPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAge3RoaXMuc3RhdGUubG9naW4gPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgPFNpZGViYXIgc2hvd01lbnU9e3RoaXMuc3RhdGUuc2hvd01lbnV9IC8+XHJcbiAgICApfSBcclxuICAgIHshaG9tZSAmJiAhbG9naW4gJiYgIWFkbWluID8gXHJcbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0zXCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8YT7ihpAgS2VtYmFsaTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PiBcclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIDpcclxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPEZvb3RlciBzZXR0aW5nPXt0aGlzLnN0YXRlLlBlbmdhdHVyYW59Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==