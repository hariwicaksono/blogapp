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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
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
          Settings: res.data
        });
      });
    });

    _this.state = {
      showMenu: true,
      login: false,
      Settings: []
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
            lineNumber: 54,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1, shrink-to-fit=no"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            href: "https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("meta", {
            name: "description",
            content: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_navbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          toggleMenu: this.toggleMenu,
          setting: this.state.Settings
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "wrapper",
          children: [this.state.login == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_sidebar__WEBPACK_IMPORTED_MODULE_12__["default"], {
            showMenu: this.state.showMenu
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
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
                    lineNumber: 71,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 5
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 7
            }, this), children]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 5
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            id: "content",
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_footer__WEBPACK_IMPORTED_MODULE_13__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsic2l0ZU5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJwcm9wcyIsInNldFN0YXRlIiwic2hvd01lbnUiLCJzdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2dpbiIsIkFQSSIsIkdldFNldHRpbmciLCJ0aGVuIiwicmVzIiwiU2V0dGluZ3MiLCJkYXRhIiwidG9nZ2xlTWVudSIsImJpbmQiLCJjaGlsZHJlbiIsImhvbWUiLCJhZG1pbiIsIm1lbWJlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFNBQVMsR0FBRyx5QkFBbEI7O0lBRURDLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLHFOQVVOLFlBQVc7QUFDdEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVDLGdCQUFRLEVBQUUsQ0FBQyxLQUFLQyxLQUFMLENBQVdEO0FBQXhCLE9BQWQ7QUFDRCxLQVprQjs7QUFBQSw0TkFjQyxZQUFNO0FBQ3hCLFVBQUdFLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFILEVBQW1DO0FBQ2pDO0FBQ0EsY0FBS0osUUFBTCxDQUFjO0FBQ1pLLGVBQUssRUFBRztBQURJLFNBQWQ7QUFHRCxPQUxELE1BS087QUFDSCxjQUFLTCxRQUFMLENBQWM7QUFDVkssZUFBSyxFQUFHO0FBREUsU0FBZDtBQUdIOztBQUVEQywwREFBRyxDQUFDQyxVQUFKLEdBQWlCQyxJQUFqQixDQUFzQixVQUFBQyxHQUFHLEVBQUU7QUFDekIsY0FBS1QsUUFBTCxDQUFjO0FBQ1ZVLGtCQUFRLEVBQUVELEdBQUcsQ0FBQ0U7QUFESixTQUFkO0FBR0gsT0FKQztBQUtILEtBL0JvQjs7QUFFakIsVUFBS1QsS0FBTCxHQUFhO0FBQ1RELGNBQVEsRUFBRSxJQUREO0FBRVRJLFdBQUssRUFBRyxLQUZDO0FBR1RLLGNBQVEsRUFBRTtBQUhELEtBQWI7QUFLQSxVQUFLRSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLHlHQUFsQjtBQVBpQjtBQVFsQjs7Ozs2QkF5QlE7QUFBQSx3QkFDMEMsS0FBS2QsS0FEL0M7QUFBQSxVQUNDZSxRQURELGVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxJQURYLGVBQ1dBLElBRFg7QUFBQSxVQUNpQlYsS0FEakIsZUFDaUJBLEtBRGpCO0FBQUEsVUFDd0JXLEtBRHhCLGVBQ3dCQSxLQUR4QjtBQUFBLFVBQytCQyxNQUQvQixlQUMrQkEsTUFEL0I7QUFHVCwwQkFDRTtBQUFBLGdDQUNBLHFFQUFDLGdEQUFEO0FBQUEsa0NBQ0E7QUFBTSxtQkFBTyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVBO0FBQU0sZ0JBQUksRUFBQyxVQUFYO0FBQXNCLG1CQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGQSxlQUdBO0FBQU0sZ0JBQUksRUFBQywrREFBWDtBQUEyRSxlQUFHLEVBQUM7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIQSxlQUlBO0FBQU0sZ0JBQUksRUFBQyxhQUFYO0FBQXlCLG1CQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKQSxlQUtBO0FBQU0sZUFBRyxFQUFDLE1BQVY7QUFBaUIsZ0JBQUksRUFBQyxjQUF0QjtBQUFxQyxnQkFBSSxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBU0EscUVBQUMsZ0RBQUQ7QUFBUSxvQkFBVSxFQUFFLEtBQUtMLFVBQXpCO0FBQXFDLGlCQUFPLEVBQUUsS0FBS1YsS0FBTCxDQUFXUTtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRBLGVBVUE7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxxQkFDQyxLQUFLUixLQUFMLENBQVdHLEtBQVgsSUFBb0IsSUFBcEIsaUJBQ0cscUVBQUMsaURBQUQ7QUFBUyxvQkFBUSxFQUFFLEtBQUtILEtBQUwsQ0FBV0Q7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixFQUlDLENBQUNjLElBQUQsSUFBUyxDQUFDVixLQUFWLElBQW1CLENBQUNXLEtBQXBCLGdCQUNEO0FBQUssY0FBRSxFQUFDLFNBQVI7QUFBQSxvQ0FDRSxxRUFBQywwREFBRDtBQUFBLHFDQUNGO0FBQUsseUJBQVMsRUFBQyxNQUFmO0FBQUEsdUNBQ0EscUVBQUMsaURBQUQ7QUFBTSxzQkFBSSxFQUFDLEdBQVg7QUFBZSwwQkFBUSxNQUF2QjtBQUFBLHlDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBUUdGLFFBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURDLGdCQVlEO0FBQUssY0FBRSxFQUFDLFNBQVI7QUFBQSxzQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkEsZUFnQ0EscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0E7QUFBQSxzQkFERjtBQW9DQzs7OztFQXpFa0JJLCtDOztBQTJFTnBCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1YTczMjNmNDFhODY4ZjIzYjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7aXNMb2dpbiwgaXNBZG1pbn0gZnJvbSAnLi4vbGlicy91dGlscyc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vbGlicy9heGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2l0ZU5hbWUgPSAnQmxvZyBBcHAnXHJcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnQmxvZyBBcHAgRGVuZ2FuIE5leHQuanMnXHJcblxyXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgc2hvd01lbnU6IHRydWUsXHJcbiAgICAgICAgbG9naW4gOiBmYWxzZSxcclxuICAgICAgICBTZXR0aW5nczogW11cclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudS5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICB0b2dnbGVNZW51ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd01lbnU6ICF0aGlzLnN0YXRlLnNob3dNZW51IH0pO1xyXG4gIH1cclxuICBcclxuICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0FkbWluJykpe1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdBRE1JTicpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGxvZ2luIDogdHJ1ZVxyXG4gICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGxvZ2luIDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIEFQSS5HZXRTZXR0aW5nKCkudGhlbihyZXM9PntcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBTZXR0aW5nczogcmVzLmRhdGFcclxuICAgICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhvbWUsIGxvZ2luLCBhZG1pbiwgbWVtYmVyIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxIZWFkPiAgXHJcbiAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCIgLz5cclxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zOjQwMCw1MDAsNjAwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cclxuICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcblxyXG4gICAgPE5hdmJhciB0b2dnbGVNZW51PXt0aGlzLnRvZ2dsZU1lbnV9IHNldHRpbmc9e3RoaXMuc3RhdGUuU2V0dGluZ3N9IC8+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgIHt0aGlzLnN0YXRlLmxvZ2luID09IHRydWUgJiYgKFxyXG4gICAgICAgIDxTaWRlYmFyIHNob3dNZW51PXt0aGlzLnN0YXRlLnNob3dNZW51fSAvPlxyXG4gICAgKX0gXHJcbiAgICB7IWhvbWUgJiYgIWxvZ2luICYmICFhZG1pbiA/IFxyXG4gICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtM1wiPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPGE+4oaQIEtlbWJhbGk8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj4gXHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgICA6XHJcbiAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICAgIH1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxGb290ZXIvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9