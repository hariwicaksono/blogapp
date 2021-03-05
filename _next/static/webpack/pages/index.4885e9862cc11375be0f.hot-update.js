webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../libs/axios */ "./libs/axios.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_slideshow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/slideshow */ "./components/slideshow.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/posts */ "./components/posts.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");






var _jsxFileName = "C:\\xampp\\htdocs\\blogapp-nextjs\\pages\\index.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var options = {
  lines: 13,
  length: 20,
  width: 10,
  radius: 30,
  scale: 0.35,
  corners: 1,
  color: '#fff',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  trail: 60,
  fps: 20,
  zIndex: 2e9,
  top: '50%',
  left: '50%',
  shadow: false,
  hwaccel: false,
  position: 'absolute'
};

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {
      Slideshow: [],
      Posts: [],
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _libs_axios__WEBPACK_IMPORTED_MODULE_10__["default"].GetSlideshow().then(function (res) {
        _this2.setState({
          Slideshow: res.data
        });
      });
      _libs_axios__WEBPACK_IMPORTED_MODULE_10__["default"].GetBlog().then(function (res) {
        setTimeout(function () {
          return _this2.setState({
            Posts: res.data,
            loading: false
          });
        }, 100);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        home: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
            children: ["Home - ", _components_layout__WEBPACK_IMPORTED_MODULE_9__["siteTitle"]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("main", {
          className: "py-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
              variant: "success",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("small", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
                  className: "h5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_15__["FaExclamationTriangle"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 37
                  }, this), " Informasi"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 18
                }, this), "Selamat Datang di ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
                  children: "React Next.js App"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 94
                }, this), " ", this.props.setting.company, ". Informasi lebih lanjut hubungi Telp/WA di ", this.props.setting.phone, " atau ", this.props.setting.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_slideshow__WEBPACK_IMPORTED_MODULE_12__["default"], {
              data: this.state.Slideshow
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
                md: "12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 11
                }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_loader__WEBPACK_IMPORTED_MODULE_13___default.a, {
                  options: options,
                  className: "spinner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 11
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_posts__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  data: this.state.Posts
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, this);
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImxpbmVzIiwibGVuZ3RoIiwid2lkdGgiLCJyYWRpdXMiLCJzY2FsZSIsImNvcm5lcnMiLCJjb2xvciIsIm9wYWNpdHkiLCJyb3RhdGUiLCJkaXJlY3Rpb24iLCJzcGVlZCIsInRyYWlsIiwiZnBzIiwiekluZGV4IiwidG9wIiwibGVmdCIsInNoYWRvdyIsImh3YWNjZWwiLCJwb3NpdGlvbiIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsIlNsaWRlc2hvdyIsIlBvc3RzIiwibG9hZGluZyIsIkFQSSIsIkdldFNsaWRlc2hvdyIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJHZXRCbG9nIiwic2V0VGltZW91dCIsInNpdGVUaXRsZSIsInNldHRpbmciLCJjb21wYW55IiwicGhvbmUiLCJlbWFpbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBRztBQUFDQyxPQUFLLEVBQUUsRUFBUjtBQUFXQyxRQUFNLEVBQUUsRUFBbkI7QUFBc0JDLE9BQUssRUFBRSxFQUE3QjtBQUFnQ0MsUUFBTSxFQUFFLEVBQXhDO0FBQTJDQyxPQUFLLEVBQUUsSUFBbEQ7QUFBdURDLFNBQU8sRUFBRSxDQUFoRTtBQUFrRUMsT0FBSyxFQUFFLE1BQXpFO0FBQWdGQyxTQUFPLEVBQUUsSUFBekY7QUFBOEZDLFFBQU0sRUFBRSxDQUF0RztBQUF3R0MsV0FBUyxFQUFFLENBQW5IO0FBQXFIQyxPQUFLLEVBQUUsQ0FBNUg7QUFBOEhDLE9BQUssRUFBRSxFQUFySTtBQUF3SUMsS0FBRyxFQUFFLEVBQTdJO0FBQWdKQyxRQUFNLEVBQUUsR0FBeEo7QUFBNEpDLEtBQUcsRUFBRSxLQUFq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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ4ODVlOTg2MmNjMTEzNzViZTBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMYXlvdXQsIHtzaXRlTmFtZSwgc2l0ZVRpdGxlfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vbGlicy9heGlvcyc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBBbGVydCwgQ2FyZCwgUm93LCBDb2wsIFNwaW5uZXIsIEJ1dHRvbiwgRm9ybX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlc2hvdyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cyc7XHJcbmltcG9ydCB7RmFFeGNsYW1hdGlvblRyaWFuZ2xlfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG52YXIgb3B0aW9ucyA9IHtsaW5lczogMTMsbGVuZ3RoOiAyMCx3aWR0aDogMTAscmFkaXVzOiAzMCxzY2FsZTogMC4zNSxjb3JuZXJzOiAxLGNvbG9yOiAnI2ZmZicsb3BhY2l0eTogMC4yNSxyb3RhdGU6IDAsZGlyZWN0aW9uOiAxLHNwZWVkOiAxLHRyYWlsOiA2MCxmcHM6IDIwLHpJbmRleDogMmU5LHRvcDogJzUwJScsbGVmdDogJzUwJScsc2hhZG93OiBmYWxzZSxod2FjY2VsOiBmYWxzZSxwb3NpdGlvbjogJ2Fic29sdXRlJ307XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIFNsaWRlc2hvdzogW10sXHJcbiAgICAgICAgUG9zdHM6IFtdLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH1cclxuICBcclxufVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgXHJcbiAgICAgIEFQSS5HZXRTbGlkZXNob3coKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBTbGlkZXNob3c6IHJlcy5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBBUEkuR2V0QmxvZygpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBQb3N0czogcmVzLmRhdGEsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgfSksIDEwMCk7XHJcbiAgICAgIH0pXHJcbiAgfSBcclxuICByZW5kZXIoKXtcclxuICAgICAgICBcclxuICAgIHJldHVybihcclxuICAgICAgPExheW91dCBob21lPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SG9tZSAtIHtzaXRlVGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHktM1wiPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJzdWNjZXNzXCI+XHJcbiAgICAgICAgICA8c21hbGw+PGgxIGNsYXNzTmFtZT1cImg1XCI+PEZhRXhjbGFtYXRpb25UcmlhbmdsZS8+IEluZm9ybWFzaTwvaDE+U2VsYW1hdCBEYXRhbmcgZGkgPHN0cm9uZz5SZWFjdCBOZXh0LmpzIEFwcDwvc3Ryb25nPiB7dGhpcy5wcm9wcy5zZXR0aW5nLmNvbXBhbnl9LiBJbmZvcm1hc2kgbGViaWggbGFuanV0IGh1YnVuZ2kgVGVscC9XQSBkaSB7dGhpcy5wcm9wcy5zZXR0aW5nLnBob25lfSBhdGF1IHt0aGlzLnByb3BzLnNldHRpbmcuZW1haWx9PC9zbWFsbD5cclxuICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgPFNsaWRlc2hvdyBkYXRhPXt0aGlzLnN0YXRlLlNsaWRlc2hvd30gLz4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgIDxDb2wgbWQ9XCIxMlwiPlxyXG4gICAgICAgICAgPGgxPkJsb2c8L2gxPlxyXG4gICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgP1xyXG4gICAgICAgICAgPExvYWRlciBvcHRpb25zPXtvcHRpb25zfSBjbGFzc05hbWU9XCJzcGlubmVyXCIgLz5cclxuICAgICAgICAgIDpcclxuICAgICAgICAgICAgPEJsb2cgZGF0YT17dGhpcy5zdGF0ZS5Qb3N0c30gLz5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=