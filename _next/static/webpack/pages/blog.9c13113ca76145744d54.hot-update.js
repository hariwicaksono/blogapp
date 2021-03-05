webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../libs/axios */ "./libs/axios.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../libs/utils */ "./libs/utils.js");
/* harmony import */ var _libs_urls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../libs/urls */ "./libs/urls.js");
/* harmony import */ var _searchForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./searchForm */ "./components/searchForm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "C:\\xampp\\htdocs\\blogapp-nextjs\\components\\navbar.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var MyNavbar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MyNavbar, _Component);

  var _super = _createSuper(MyNavbar);

  function MyNavbar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyNavbar);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "componentDidMount", function () {
      if (localStorage.getItem('isAdmin')) {
        return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/admin');
      }

      if (Object(_libs_utils__WEBPACK_IMPORTED_MODULE_14__["isLogin"])()) {
        var data = JSON.parse(localStorage.getItem('isLogin'));
        var id = data[0].email;
        _libs_axios__WEBPACK_IMPORTED_MODULE_13__["default"].GetUserId(id).then(function (res) {
          _this.setState({
            id: res.data[0].id,
            name: res.data[0].name,
            email: res.data[0].email,
            loading: false
          });
        });
      } else {
        setTimeout(function () {
          return _this.setState({
            loading: false
          });
        }, 100);
      }
    });

    _this.state = {
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyNavbar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Navbar"], {
        bg: "primary",
        variant: "dark",
        className: "shadow border-bottom py-3",
        expand: "lg",
        sticky: "top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Container"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Navbar"].Brand, {
              children: this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_18___default.a, {
                  width: 180,
                  height: 25
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 13
                }, this)
              }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                children: this.props.setting.company
              }, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Navbar"].Toggle, {
            "aria-controls": "basic-navbar-nav"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 3
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Navbar"].Collapse, {
            id: "basic-navbar-nav",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Nav"], {
              className: "mr-auto",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Nav"].Link, {
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 5
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/blog",
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Nav"].Link, {
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 35
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_searchForm__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Form"], {
              inline: true,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
                href: "/login",
                passHref: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
                  className: "text-light",
                  variant: "link",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_17__["FaSignInAlt"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 53
                  }, this), " Login"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 7
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 5
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 3
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 1
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 1
      }, this);
    }
  }]);

  return MyNavbar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MyNavbar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTXlOYXZiYXIiLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwiaXNMb2dpbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJpZCIsImVtYWlsIiwiQVBJIiwiR2V0VXNlcklkIiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwibmFtZSIsImxvYWRpbmciLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJzZXR0aW5nIiwiY29tcGFueSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsNE5BUUQsWUFBTTtBQUN4QixVQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBSixFQUFxQztBQUNuQyxlQUFRQyxtREFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixDQUFSO0FBQ0Q7O0FBQ0QsVUFBSUMsNERBQU8sRUFBWCxFQUFlO0FBQ1gsWUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FBYjtBQUNBLFlBQU1PLEVBQUUsR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSSxLQUFuQjtBQUNBQyw0REFBRyxDQUFDQyxTQUFKLENBQWNILEVBQWQsRUFBa0JJLElBQWxCLENBQXVCLFVBQUFDLEdBQUcsRUFBRTtBQUN4QixnQkFBS0MsUUFBTCxDQUFjO0FBQ1ZOLGNBQUUsRUFBR0ssR0FBRyxDQUFDUixJQUFKLENBQVMsQ0FBVCxFQUFZRyxF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b0JDLCtDOztBQWdGUnZCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuOWMxMzExM2NhNzYxNDU3NDRkNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtDb250YWluZXIsIE5hdmJhciwgTmF2LCBOYXZJdGVtLCBOYXZEcm9wZG93biwgRm9ybSwgRm9ybUNvbnRyb2wsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi9saWJzL2F4aW9zJztcclxuaW1wb3J0IHtsb2dvdXQsIGlzTG9naW4sIGlzQWRtaW59IGZyb20gJy4uL2xpYnMvdXRpbHMnO1xyXG5pbXBvcnQge0ltYWdlc1VybH0gZnJvbSAnLi4vbGlicy91cmxzJztcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9zZWFyY2hGb3JtJztcclxuaW1wb3J0IHtGYUJhcnMsIEZhU2lnbkluQWx0LCBGYVNpZ25PdXRBbHQsIEZhS2V5fSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdyZWFjdC1sb2FkaW5nLXNrZWxldG9uJztcclxuXHJcbmNsYXNzIE15TmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5jb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzQWRtaW4nKSkge1xyXG4gICAgcmV0dXJuKCBSb3V0ZXIucHVzaCgnL2FkbWluJykgKVxyXG4gIH1cclxuICBpZiAoaXNMb2dpbigpKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2luJykpXHJcbiAgICAgIGNvbnN0IGlkID0gZGF0YVswXS5lbWFpbFxyXG4gICAgICBBUEkuR2V0VXNlcklkKGlkKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgaWQgOiByZXMuZGF0YVswXS5pZCxcclxuICAgICAgICAgICAgICBuYW1lOiByZXMuZGF0YVswXS5uYW1lLFxyXG4gICAgICAgICAgICAgIGVtYWlsOiByZXMuZGF0YVswXS5lbWFpbCxcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICB9IFxyXG4gIGVsc2Uge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgIH0pLCAxMDApO1xyXG4gIH1cclxuICBcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICBcclxuPE5hdmJhciBiZz1cInByaW1hcnlcIiB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cInNoYWRvdyBib3JkZXItYm90dG9tIHB5LTNcIiBleHBhbmQ9XCJsZ1wiIHN0aWNreT1cInRvcFwiPlxyXG48Q29udGFpbmVyPlxyXG5cclxuICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPjxOYXZiYXIuQnJhbmQ+XHJcbiAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8U2tlbGV0b24gd2lkdGg9ezE4MH0gaGVpZ2h0PXsyNX0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIDpcclxuICAgICAgICA8PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnNldHRpbmcuY29tcGFueX1cclxuICAgICAgICA8Lz5cclxuICAgICAgICB9PC9OYXZiYXIuQnJhbmQ+PC9MaW5rPlxyXG4gIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPjxOYXYuTGluaz5Ib21lPC9OYXYuTGluaz48L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiIHBhc3NIcmVmPjxOYXYuTGluaz5CbG9nPC9OYXYuTGluaz48L0xpbms+XHJcbiAgICAgIHsvKjxOYXZEcm9wZG93biB0aXRsZT1cIkRyb3Bkb3duXCIgaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiI1wiIHBhc3NIcmVmPjxOYXZEcm9wZG93bi5JdGVtPkFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBwYXNzSHJlZj48TmF2RHJvcGRvd24uSXRlbT5Bbm90aGVyIGFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT48L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBwYXNzSHJlZj48TmF2RHJvcGRvd24uSXRlbT5Tb21ldGhpbmc8L05hdkRyb3Bkb3duLkl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBwYXNzSHJlZj48TmF2RHJvcGRvd24uSXRlbT5TZXBhcmF0ZWQgbGluazwvTmF2RHJvcGRvd24uSXRlbT48L0xpbms+XHJcbiAgICAgIDwvTmF2RHJvcGRvd24+Ki99XHJcbiAgICA8L05hdj5cclxuICAgIDxTZWFyY2hGb3JtLz5cclxuICAgIFxyXG4gICAgPEZvcm0gaW5saW5lPlxyXG4gICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIHBhc3NIcmVmPlxyXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInRleHQtbGlnaHRcIiB2YXJpYW50PVwibGlua1wiPjxGYVNpZ25JbkFsdC8+IExvZ2luPC9CdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvRm9ybT5cclxuICAgIFxyXG4gIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gIDwvQ29udGFpbmVyPlxyXG48L05hdmJhcj5cclxuICAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeU5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9