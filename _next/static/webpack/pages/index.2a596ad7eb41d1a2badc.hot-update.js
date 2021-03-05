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

      if (localStorage.getItem('isLogin')) {
        return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard');
      } else if (localStorage.getItem('isAdmin')) {
        return next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push('/dashboard');
      } else {}

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
            lineNumber: 49,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
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
                    lineNumber: 55,
                    columnNumber: 37
                  }, this), " Informasi"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 18
                }, this), "Selamat Datang di ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("strong", {
                  children: "React Next.js App"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 94
                }, this), " ", this.props.setting.company, ". Informasi lebih lanjut hubungi Telp/WA di ", this.props.setting.phone, " atau ", this.props.setting.email]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_slideshow__WEBPACK_IMPORTED_MODULE_12__["default"], {
              data: this.state.Slideshow
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
                md: "12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
                  children: "Blog"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 11
                }, this), this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_loader__WEBPACK_IMPORTED_MODULE_13___default.a, {
                  options: options,
                  className: "spinner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 11
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_posts__WEBPACK_IMPORTED_MODULE_14__["default"], {
                  data: this.state.Posts
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 13
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 11
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsib3B0aW9ucyIsImxpbmVzIiwibGVuZ3RoIiwid2lkdGgiLCJyYWRpdXMiLCJzY2FsZSIsImNvcm5lcnMiLCJjb2xvciIsIm9wYWNpdHkiLCJyb3RhdGUiLCJkaXJlY3Rpb24iLCJzcGVlZCIsInRyYWlsIiwiZnBzIiwiekluZGV4IiwidG9wIiwibGVmdCIsInNoYWRvdyIsImh3YWNjZWwiLCJwb3NpdGlvbiIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsIlNsaWRlc2hvdyIsIlBvc3RzIiwibG9hZGluZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwiQVBJIiwiR2V0U2xpZGVzaG93IiwidGhlbiIsInJlcyIsInNldFN0YXRlIiwiZGF0YSIsIkdldEJsb2ciLCJzZXRUaW1lb3V0Iiwic2l0ZVRpdGxlIiwic2V0dGluZyIsImNvbXBhbnkiLCJwaG9uZSIsImVtYWlsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHO0FBQUNDLE9BQUssRUFBRSxFQUFSO0FBQVdDLFFBQU0sRUFBRSxFQUFuQjtBQUFzQkMsT0FBSyxFQUFFLEVBQTdCO0FBQWdDQyxRQUFNLEVBQUUsRUFBeEM7QUFBMkNDLE9BQUssRUFBRSxJQUFsRDtBQUF1REMsU0FBTyxFQUFFLENBQWhFO0FBQWtFQyxPQUFLLEVBQUUsTUFBekU7QUFBZ0ZDLFNBQU8sRUFBRSxJQUF6RjtBQUE4RkMsUUFBTSxFQUFFLENBQXRHO0FBQXdHQyxXQUFTLEVBQUUsQ0FBbkg7QUFBcUhDLE9BQUssRUFBRSxDQUE1SDtBQUE4SEMsT0FBSyxFQUFFLEVBQXJJO0FBQXdJQyxLQUFHLEVBQUUsRUFBN0k7QUFBZ0pDLFFBQU0sRUFBRSxHQUF4SjtBQUE0SkMsS0FBRyxFQUFFLEtBQWpLO0FBQXVLQyxNQUFJLEVBQUUsS0FBN0s7QUFBbUxDLFFBQU0sRUFBRSxLQUEzTDtBQUFpTUMsU0FBTyxFQUFFLEtBQTFNO0FBQWdOQyxVQUFRLEVBQUU7QUFBMU4sQ0FBZDs7SUFFTUMsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUUsRUFERjtBQUVUQyxXQUFLLEVBQUUsRUFGRTtBQUdUQyxhQUFPLEVBQUU7QUFIQSxLQUFiO0FBRmlCO0FBUXBCOzs7O3dDQUN1QjtBQUFBOztBQUNsQixVQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBSixFQUFxQztBQUNuQyxlQUFRQyxrREFBTSxDQUFDQyxJQUFQLENBQVksWUFBWixDQUFSO0FBQ0QsT0FGRCxNQUVPLElBQUlILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixDQUFKLEVBQXFDO0FBQzFDLGVBQVFDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxZQUFaLENBQVI7QUFDRCxPQUZNLE1BRUEsQ0FFTjs7QUFDREMsMERBQUcsQ0FBQ0MsWUFBSixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsR0FBRyxFQUFJO0FBQzNCLGNBQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQ1ZYLG1CQUFTLEVBQUVVLEdBQUcsQ0FBQ0U7QUFETCxTQUFkO0FBR0gsT0FKRDtBQUtBTCwwREFBRyxDQUFDTSxPQUFKLEdBQWNKLElBQWQsQ0FBbUIsVUFBQUMsR0FBRyxFQUFJO0FBQ3hCSSxrQkFBVSxDQUFDO0FBQUEsaUJBQU0sTUFBSSxDQUFDSCxRQUFMLENBQWM7QUFDM0JWLGlCQUFLLEVBQUVTLEdBQUcsQ0FBQ0UsSUFEZ0I7QUFFM0JWLG1CQUFPLEVBQUU7QUFGa0IsV0FBZCxDQUFOO0FBQUEsU0FBRCxFQUdOLEdBSE0sQ0FBVjtBQUlELE9BTEQ7QUFNSDs7OzZCQUNPO0FBRU4sMEJBQ0UscUVBQUMsMERBQUQ7QUFBUSxZQUFJLE1BQVo7QUFBQSxnQ0FDQSxxRUFBQyxnREFBRDtBQUFBLGlDQUNFO0FBQUEsa0NBQWVhLDREQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFLQTtBQUFNLG1CQUFTLEVBQUMsTUFBaEI7QUFBQSxpQ0FDRSxxRUFBQywwREFBRDtBQUFBLG9DQUNBLHFFQUFDLHNEQUFEO0FBQU8scUJBQU8sRUFBQyxTQUFmO0FBQUEscUNBQ0U7QUFBQSx3Q0FBTztBQUFJLDJCQUFTLEVBQUMsSUFBZDtBQUFBLDBDQUFtQixxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQVAscUNBQW1GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFuRixPQUF1SCxLQUFLakIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQkMsT0FBMUksa0RBQStMLEtBQUtuQixLQUFMLENBQVdrQixPQUFYLENBQW1CRSxLQUFsTixZQUErTixLQUFLcEIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQkcsS0FBbFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFEQSxlQUlBLHFFQUFDLDhEQUFEO0FBQVcsa0JBQUksRUFBRSxLQUFLcEIsS0FBTCxDQUFXQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpBLGVBTUEscUVBQUMsb0RBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxvREFBRDtBQUFLLGtCQUFFLEVBQUMsSUFBUjtBQUFBLHdDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLEVBRUUsS0FBS0QsS0FBTCxDQUFXRyxPQUFYLGdCQUNGLHFFQUFDLG9EQUFEO0FBQVEseUJBQU8sRUFBRXpCLE9BQWpCO0FBQTBCLDJCQUFTLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERSxnQkFHQSxxRUFBQywwREFBRDtBQUFNLHNCQUFJLEVBQUUsS0FBS3NCLEtBQUwsQ0FBV0U7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUE0QkQ7Ozs7RUE1RGlCbUIsK0M7O0FBK0RMdkIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE1OTZhZDdlYjQxZDFhMmJhZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExheW91dCwge3NpdGVOYW1lLCBzaXRlVGl0bGV9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEFQSSBmcm9tICcuLi9saWJzL2F4aW9zJztcclxuaW1wb3J0IHtDb250YWluZXIsIEFsZXJ0LCBDYXJkLCBSb3csIENvbCwgU3Bpbm5lciwgQnV0dG9uLCBGb3JtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgU2xpZGVzaG93IGZyb20gJy4uL2NvbXBvbmVudHMvc2xpZGVzaG93JztcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXInO1xyXG5pbXBvcnQgQmxvZyBmcm9tICcuLi9jb21wb25lbnRzL3Bvc3RzJztcclxuaW1wb3J0IHtGYUV4Y2xhbWF0aW9uVHJpYW5nbGV9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcbnZhciBvcHRpb25zID0ge2xpbmVzOiAxMyxsZW5ndGg6IDIwLHdpZHRoOiAxMCxyYWRpdXM6IDMwLHNjYWxlOiAwLjM1LGNvcm5lcnM6IDEsY29sb3I6ICcjZmZmJyxvcGFjaXR5OiAwLjI1LHJvdGF0ZTogMCxkaXJlY3Rpb246IDEsc3BlZWQ6IDEsdHJhaWw6IDYwLGZwczogMjAsekluZGV4OiAyZTksdG9wOiAnNTAlJyxsZWZ0OiAnNTAlJyxzaGFkb3c6IGZhbHNlLGh3YWNjZWw6IGZhbHNlLHBvc2l0aW9uOiAnYWJzb2x1dGUnfTtcclxuXHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgU2xpZGVzaG93OiBbXSxcclxuICAgICAgICBQb3N0czogW10sXHJcbiAgICAgICAgbG9hZGluZzogdHJ1ZVxyXG4gICAgfVxyXG4gIFxyXG59XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2luJykpIHtcclxuICAgICAgICByZXR1cm4oIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJykgKVxyXG4gICAgICB9IGVsc2UgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0FkbWluJykpIHtcclxuICAgICAgICByZXR1cm4oIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJykgKVxyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgfVxyXG4gICAgICBBUEkuR2V0U2xpZGVzaG93KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgU2xpZGVzaG93OiByZXMuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgICAgQVBJLkdldEJsb2coKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgUG9zdHM6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgIH0pLCAxMDApO1xyXG4gICAgICB9KVxyXG4gIH0gXHJcbiAgcmVuZGVyKCl7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxMYXlvdXQgaG9tZT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkhvbWUgLSB7c2l0ZVRpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB5LTNcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxBbGVydCB2YXJpYW50PVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgPHNtYWxsPjxoMSBjbGFzc05hbWU9XCJoNVwiPjxGYUV4Y2xhbWF0aW9uVHJpYW5nbGUvPiBJbmZvcm1hc2k8L2gxPlNlbGFtYXQgRGF0YW5nIGRpIDxzdHJvbmc+UmVhY3QgTmV4dC5qcyBBcHA8L3N0cm9uZz4ge3RoaXMucHJvcHMuc2V0dGluZy5jb21wYW55fS4gSW5mb3JtYXNpIGxlYmloIGxhbmp1dCBodWJ1bmdpIFRlbHAvV0EgZGkge3RoaXMucHJvcHMuc2V0dGluZy5waG9uZX0gYXRhdSB7dGhpcy5wcm9wcy5zZXR0aW5nLmVtYWlsfTwvc21hbGw+XHJcbiAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDxTbGlkZXNob3cgZGF0YT17dGhpcy5zdGF0ZS5TbGlkZXNob3d9IC8+IFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiMTJcIj5cclxuICAgICAgICAgIDxoMT5CbG9nPC9oMT5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID9cclxuICAgICAgICAgIDxMb2FkZXIgb3B0aW9ucz17b3B0aW9uc30gY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICAgIDxCbG9nIGRhdGE9e3RoaXMuc3RhdGUuUG9zdHN9IC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICBcclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9