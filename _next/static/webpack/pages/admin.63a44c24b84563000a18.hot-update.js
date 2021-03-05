webpackHotUpdate_N_E("pages/admin",{

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
      if (localStorage.getItem('isLogin')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTXlOYXZiYXIiLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwiaXNMb2dpbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJpZCIsImVtYWlsIiwiQVBJIiwiR2V0VXNlcklkIiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwibmFtZSIsImxvYWRpbmciLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJzZXR0aW5nIiwiY29tcGFueSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsNE5BUUQsWUFBTTtBQUN4QixVQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBSixFQUFxQztBQUNuQyxlQUFRQyxtREFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixDQUFSO0FBQ0Q7O0FBQ0QsVUFBSUMsNERBQU8sRUFBWCxFQUFlO0FBQ1gsWUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQVgsQ0FBYjtBQUNBLFlBQU1PLEVBQUUsR0FBR0gsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSSxLQUFuQjtBQUNBQyw0REFBRyxDQUFDQyxTQUFKLENBQWNILEVBQWQsRUFBa0JJLElBQWxCLENBQXVCLFVBQUFDLEdBQUcsRUFBRTtBQUN4QixnQkFBS0MsUUFBTCxDQUFjO0FBQ1ZOLGNBQUUsRUFBR0ssR0FBRyxDQUFDUixJQUFKLENBQVMsQ0FBVCxFQUFZRyxF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b0JDLCtDOztBQWdGUnZCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjYzYTQ0YzI0Yjg0NTYzMDAwYTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBOYXZiYXIsIE5hdiwgTmF2SXRlbSwgTmF2RHJvcGRvd24sIEZvcm0sIEZvcm1Db250cm9sLCBCdXR0b259IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vbGlicy9heGlvcyc7XHJcbmltcG9ydCB7bG9nb3V0LCBpc0xvZ2luLCBpc0FkbWlufSBmcm9tICcuLi9saWJzL3V0aWxzJztcclxuaW1wb3J0IHtJbWFnZXNVcmx9IGZyb20gJy4uL2xpYnMvdXJscyc7XHJcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vc2VhcmNoRm9ybSc7XHJcbmltcG9ydCB7RmFCYXJzLCBGYVNpZ25JbkFsdCwgRmFTaWduT3V0QWx0LCBGYUtleX0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XHJcblxyXG5jbGFzcyBNeU5hdmJhciBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2luJykpIHtcclxuICAgIHJldHVybiggUm91dGVyLnB1c2goJy9hZG1pbicpIClcclxuICB9XHJcbiAgaWYgKGlzTG9naW4oKSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNMb2dpbicpKVxyXG4gICAgICBjb25zdCBpZCA9IGRhdGFbMF0uZW1haWxcclxuICAgICAgQVBJLkdldFVzZXJJZChpZCkudGhlbihyZXM9PntcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGlkIDogcmVzLmRhdGFbMF0uaWQsXHJcbiAgICAgICAgICAgICAgbmFtZTogcmVzLmRhdGFbMF0ubmFtZSxcclxuICAgICAgICAgICAgICBlbWFpbDogcmVzLmRhdGFbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgfSBcclxuICBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICB9KSwgMTAwKTtcclxuICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgXHJcbjxOYXZiYXIgYmc9XCJwcmltYXJ5XCIgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJzaGFkb3cgYm9yZGVyLWJvdHRvbSBweS0zXCIgZXhwYW5kPVwibGdcIiBzdGlja3k9XCJ0b3BcIj5cclxuPENvbnRhaW5lcj5cclxuXHJcbiAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj48TmF2YmFyLkJyYW5kPlxyXG4gICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPXsxODB9IGhlaWdodD17MjV9IC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICA6XHJcbiAgICAgICAgPD5cclxuICAgICAgICB7dGhpcy5wcm9wcy5zZXR0aW5nLmNvbXBhbnl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgfTwvTmF2YmFyLkJyYW5kPjwvTGluaz5cclxuICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj48TmF2Lkxpbms+SG9tZTwvTmF2Lkxpbms+PC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Jsb2dcIiBwYXNzSHJlZj48TmF2Lkxpbms+QmxvZzwvTmF2Lkxpbms+PC9MaW5rPlxyXG4gICAgICB7Lyo8TmF2RHJvcGRvd24gdGl0bGU9XCJEcm9wZG93blwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIiNcIiBwYXNzSHJlZj48TmF2RHJvcGRvd24uSXRlbT5BY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgcGFzc0hyZWY+PE5hdkRyb3Bkb3duLkl0ZW0+QW5vdGhlciBhY3Rpb248L05hdkRyb3Bkb3duLkl0ZW0+PC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgcGFzc0hyZWY+PE5hdkRyb3Bkb3duLkl0ZW0+U29tZXRoaW5nPC9OYXZEcm9wZG93bi5JdGVtPjwvTGluaz5cclxuICAgICAgICA8TmF2RHJvcGRvd24uRGl2aWRlciAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgcGFzc0hyZWY+PE5hdkRyb3Bkb3duLkl0ZW0+U2VwYXJhdGVkIGxpbms8L05hdkRyb3Bkb3duLkl0ZW0+PC9MaW5rPlxyXG4gICAgICA8L05hdkRyb3Bkb3duPiovfVxyXG4gICAgPC9OYXY+XHJcbiAgICA8U2VhcmNoRm9ybS8+XHJcbiAgICBcclxuICAgIDxGb3JtIGlubGluZT5cclxuICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiBwYXNzSHJlZj5cclxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCIgdmFyaWFudD1cImxpbmtcIj48RmFTaWduSW5BbHQvPiBMb2dpbjwvQnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0Zvcm0+XHJcbiAgICBcclxuICA8L05hdmJhci5Db2xsYXBzZT5cclxuICA8L0NvbnRhaW5lcj5cclxuPC9OYXZiYXI+XHJcbiAgICAgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlOYXZiYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==