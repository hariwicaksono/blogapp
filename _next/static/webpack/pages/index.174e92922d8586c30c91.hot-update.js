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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../libs/axios */ "./libs/axios.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_slideshow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/slideshow */ "./components/slideshow.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_posts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/posts */ "./components/posts.js");






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

      _libs_axios__WEBPACK_IMPORTED_MODULE_9__["default"].GetSlideshow().then(function (res) {
        _this2.setState({
          Slideshow: res.data
        });
      });
      _libs_axios__WEBPACK_IMPORTED_MODULE_9__["default"].GetBlog().then(function (res) {
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        home: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
            children: ["Home - ", _components_layout__WEBPACK_IMPORTED_MODULE_8__["siteTitle"]]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("main", {
          className: "py-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Alert"], {
              variant: "warning",
              children: ["Selamat Datang di ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
                children: "React Next.js App"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 29
              }, this), " - ", this.props.setting.company, ". Informasi lebih lanjut hubungi Telp/WA di ", this.props.setting.phone, " atau ", this.props.setting.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_slideshow__WEBPACK_IMPORTED_MODULE_11__["default"], {
              data: this.state.Slideshow
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
                md: "12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 11
                }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_loader__WEBPACK_IMPORTED_MODULE_12___default.a, {
                  options: options,
                  className: "spinner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 11
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_posts__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  data: this.state.Posts
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImxpbmVzIiwibGVuZ3RoIiwid2lkdGgiLCJyYWRpdXMiLCJzY2FsZSIsImNvcm5lcnMiLCJjb2xvciIsIm9wYWNpdHkiLCJyb3RhdGUiLCJkaXJlY3Rpb24iLCJzcGVlZCIsInRyYWlsIiwiZnBzIiwiekluZGV4IiwidG9wIiwibGVmdCIsInNoYWRvdyIsImh3YWNjZWwiLCJwb3NpdGlvbiIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsIlNsaWRlc2hvdyIsIlBvc3RzIiwibG9hZGluZyIsIkFQSSIsIkdldFNsaWRlc2hvdyIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJHZXRCbG9nIiwic2V0VGltZW91dCIsInNpdGVUaXRsZSIsInNldHRpbmciLCJjb21wYW55IiwicGhvbmUiLCJlbWFpbCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHO0FBQUNDLE9BQUssRUFBRSxFQUFSO0FBQVdDLFFBQU0sRUFBRSxFQUFuQjtBQUFzQkMsT0FBSyxFQUFFLEVBQTdCO0FBQWdDQyxRQUFNLEVBQUUsRUFBeEM7QUFBMkNDLE9BQUssRUFBRSxJQUFsRDtBQUF1REMsU0FBTyxFQUFFLENBQWhFO0FBQWtFQyxPQUFLLEVBQUUsTUFBekU7QUFBZ0ZDLFNBQU8sRUFBRSxJQUF6RjtBQUE4RkMsUUFBTSxFQUFFLENBQXRHO0FBQXdHQyxXQUFTLEVBQUUsQ0FBbkg7QUFBcUhDLE9BQUssRUFBRSxDQUE1SDtBQUE4SEMsT0FBSyxFQUFFLEVBQXJJO0FBQXdJQyxLQUFHLEVBQUUsRUFBN0k7QUFBZ0pDLFFBQU0sRUFBRSxHQUF4SjtBQUE0SkMsS0FBRyxFQUFFLEtBQWpLO0FBQXVLQyxNQUFJLEVBQUUsS0FBN0s7QUFBbUxDLFFBQU0sRUFBRSxLQUEzTDtBQUFpTUMsU0FBTyxFQUFFLEtBQTFNO0FBQWdOQyxVQUFRLEVBQUU7QUFBMU4sQ0FBZDs7SUFFTUMsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsRUFERjtBQUVUQyxXQUFLLEVBQUUsRUFGRTtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBRmlCO0FBUXBCOzs7O3dDQUN1QjtBQUFBOztBQUNsQkMseURBQUcsQ0FBQ0MsWUFBSixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsR0FBRyxFQUFJO0FBQzdCLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZQLG1CQUFTLEVBQUVNLEdBQUcsQ0FBQ0U7QUFETCxTQUFkO0FBR0gsT0FKQztBQUtGTCx5REFBRyxDQUFDTSxPQUFKLEdBQWNKLElBQWQsQ0FBbUIsVUFBQUMsR0FBRyxFQUFJO0FBQ3hCSSxrQkFBVSxDQUFDO0FBQUEsaUJBQU0sTUFBSSxDQUFDSCxRQUFMLENBQWM7QUFDM0JOLGlCQUFLLEVBQUVLLEdBQUcsQ0FBQ0UsSUFEZ0I7QUFFM0JOLG1CQUFPLEVBQUU7QUFGa0IsV0FBZCxDQUFOO0FBQUEsU0FBRCxFQUdOLEdBSE0sQ0FBVjtBQUlILE9BTEM7QUFNRDs7OzZCQUNPO0FBRU4sMEJBQ0UscUVBQUMsMERBQUQ7QUFBUSxZQUFJLE1BQVo7QUFBQSxnQ0FDQSxxRUFBQyxnREFBRDtBQUFBLGlDQUNFO0FBQUEsa0NBQWVTLDREQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFLQTtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQSxpQ0FDRSxxRUFBQywwREFBRDtBQUFBLG9DQUNBLHFFQUFDLHNEQUFEO0FBQU8scUJBQU8sRUFBQyxTQUFmO0FBQUEsNERBQ29CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURwQixTQUMwRCxLQUFLYixLQUFMLENBQVdjLE9BQVgsQ0FBbUJDLE9BRDdFLGtEQUNrSSxLQUFLZixLQUFMLENBQVdjLE9BQVgsQ0FBbUJFLEtBRHJKLFlBQ2tLLEtBQUtoQixLQUFMLENBQVdjLE9BQVgsQ0FBbUJHLEtBRHJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUlBLHFFQUFDLDhEQUFEO0FBQVcsa0JBQUksRUFBRSxLQUFLaEIsS0FBTCxDQUFXQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpBLGVBTUEscUVBQUMsb0RBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxvREFBRDtBQUFLLGtCQUFFLEVBQUMsSUFBUjtBQUFBLHdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLEVBRUUsS0FBS0QsS0FBTCxDQUFXRyxPQUFYLGdCQUNGLHFFQUFDLG9EQUFEO0FBQVEseUJBQU8sRUFBRXpCLE9BQWpCO0FBQTBCLDJCQUFTLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERSxnQkFHQSxxRUFBQywwREFBRDtBQUFNLHNCQUFJLEVBQUUsS0FBS3NCLEtBQUwsQ0FBV0U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE0QkQ7Ozs7RUFyRGlCZSwrQzs7QUF3RExuQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNzRlOTI5MjJkODU4NmMzMGM5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMYXlvdXQsIHtzaXRlTmFtZSwgc2l0ZVRpdGxlfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vbGlicy9heGlvcyc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBBbGVydCwgQ2FyZCwgUm93LCBDb2wsIFNwaW5uZXIsIEJ1dHRvbiwgRm9ybX0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IFNsaWRlc2hvdyBmcm9tICcuLi9jb21wb25lbnRzL3NsaWRlc2hvdyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0cyc7XHJcblxyXG52YXIgb3B0aW9ucyA9IHtsaW5lczogMTMsbGVuZ3RoOiAyMCx3aWR0aDogMTAscmFkaXVzOiAzMCxzY2FsZTogMC4zNSxjb3JuZXJzOiAxLGNvbG9yOiAnI2ZmZicsb3BhY2l0eTogMC4yNSxyb3RhdGU6IDAsZGlyZWN0aW9uOiAxLHNwZWVkOiAxLHRyYWlsOiA2MCxmcHM6IDIwLHpJbmRleDogMmU5LHRvcDogJzUwJScsbGVmdDogJzUwJScsc2hhZG93OiBmYWxzZSxod2FjY2VsOiBmYWxzZSxwb3NpdGlvbjogJ2Fic29sdXRlJ307XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIFNsaWRlc2hvdzogW10sXHJcbiAgICAgICAgUG9zdHM6IFtdLFxyXG4gICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgIH1cclxuICBcclxufVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIEFQSS5HZXRTbGlkZXNob3coKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIFNsaWRlc2hvdzogcmVzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIEFQSS5HZXRCbG9nKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgUG9zdHM6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSksIDEwMCk7XHJcbiAgfSlcclxuICB9IFxyXG4gIHJlbmRlcigpe1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8TGF5b3V0IGhvbWU+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Ib21lIC0ge3NpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJweS0zXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QWxlcnQgdmFyaWFudD1cIndhcm5pbmdcIj5cclxuICAgICAgICAgIFNlbGFtYXQgRGF0YW5nIGRpIDxzdHJvbmc+UmVhY3QgTmV4dC5qcyBBcHA8L3N0cm9uZz4gLSB7dGhpcy5wcm9wcy5zZXR0aW5nLmNvbXBhbnl9LiBJbmZvcm1hc2kgbGViaWggbGFuanV0IGh1YnVuZ2kgVGVscC9XQSBkaSB7dGhpcy5wcm9wcy5zZXR0aW5nLnBob25lfSBhdGF1IHt0aGlzLnByb3BzLnNldHRpbmcuZW1haWx9XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDxTbGlkZXNob3cgZGF0YT17dGhpcy5zdGF0ZS5TbGlkZXNob3d9IC8+IFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiMTJcIj5cclxuICAgICAgICAgIDxoMT5CbG9nPC9oMT5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID9cclxuICAgICAgICAgIDxMb2FkZXIgb3B0aW9ucz17b3B0aW9uc30gY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxCbG9nIGRhdGE9e3RoaXMuc3RhdGUuUG9zdHN9IC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICBcclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9