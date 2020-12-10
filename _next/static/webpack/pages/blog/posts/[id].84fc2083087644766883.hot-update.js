webpackHotUpdate_N_E("pages/blog/posts/[id]",{

/***/ "./components/postComment.js":
/*!***********************************!*\
  !*** ./components/postComment.js ***!
  \***********************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _libs_axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../libs/axios */ "./libs/axios.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");









var _jsxFileName = "C:\\xampp\\htdocs\\blogapp-nextjs\\components\\postComment.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










 //import moment from 'moment'
//import 'moment/locale/id'



var validationSchema = yup__WEBPACK_IMPORTED_MODULE_19__["object"]({
  name: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required(),
  email: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().email().required(),
  body: yup__WEBPACK_IMPORTED_MODULE_19__["string"]().required()
});

var FormComment = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FormComment, _Component);

  var _super = _createSuper(FormComment);

  function FormComment(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormComment);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "componentDidMount", function () {
      var id = _this.props.postID;

      _this.setState({
        post_id: id,
        loading: false
      });
    });

    _this.state = {
      post_id: '',
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FormComment, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
        children: this.state.loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_17___default.a, {
            count: 4,
            height: 40,
            className: "mb-1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 26
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_17___default.a, {
            width: 100,
            height: 40
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 26
          }, this)]
        }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Card"], {
            className: "mb-2",
            body: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h5", {
              className: "mb-3",
              style: {
                fontWeight: '400'
              },
              children: "Tambah Komentar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_18__["Formik"], {
              initialValues: {
                post_id: this.state.post_id,
                name: '',
                email: '',
                body: ''
              },
              onSubmit: function onSubmit(values, actions) {
                //alert(JSON.stringify(values));
                _libs_axios__WEBPACK_IMPORTED_MODULE_13__["default"].PostComment(values).then(function (res) {
                  //console.log(res)
                  if (res.status === 1) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].success("Komentar berhasil disimpan", {
                      position: "top-center"
                    });
                    setTimeout(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.reload();
                    }, 2000);
                  } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].warn("Gagal, periksa kembali", {
                      position: "top-center"
                    });
                  }
                });
                setTimeout(function () {
                  actions.setSubmitting(false);
                }, 1000);
              },
              validationSchema: validationSchema,
              children: function children(_ref) {
                var handleSubmit = _ref.handleSubmit,
                    handleChange = _ref.handleChange,
                    handleBlur = _ref.handleBlur,
                    setFieldValue = _ref.setFieldValue,
                    values = _ref.values,
                    touched = _ref.touched,
                    errors = _ref.errors,
                    isSubmitting = _ref.isSubmitting;
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"], {
                  noValidate: true,
                  onSubmit: handleSubmit,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
                      children: "Nama"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 33
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control, {
                      name: "name",
                      placeholder: "Nama Anda",
                      className: "form-control",
                      onChange: handleChange,
                      onBlur: handleBlur,
                      value: values.name,
                      isInvalid: !!errors.name && touched.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 33
                    }, _this2), errors.name && touched.name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control.Feedback, {
                      type: "invalid",
                      children: errors.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 65
                    }, _this2)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
                      children: "Email"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 33
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control, {
                      type: "text",
                      name: "email",
                      placeholder: "Email",
                      className: "form-control",
                      onChange: handleChange,
                      onBlur: handleBlur,
                      value: values.email,
                      isInvalid: !!errors.email && touched.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 33
                    }, _this2), errors.email && touched.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control.Feedback, {
                      type: "invalid",
                      children: errors.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 67
                    }, _this2)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Group, {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Label, {
                      children: "Komentar"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 33
                    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control, {
                      as: "textarea",
                      rows: "6",
                      name: "body",
                      placeholder: "",
                      className: "form-control",
                      onChange: handleChange,
                      onBlur: handleBlur,
                      value: values.body,
                      isInvalid: !!errors.body && touched.body
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 33
                    }, _this2), errors.body && touched.body && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Form"].Control.Feedback, {
                      type: "invalid",
                      children: errors.body
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 65
                    }, _this2)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 29
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Button"], {
                    variant: "primary",
                    type: "submit",
                    disabled: isSubmitting,
                    children: isSubmitting ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__["Spinner"], {
                        as: "span",
                        animation: "grow",
                        size: "sm",
                        role: "status",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 29
                      }, _this2), " Memuat..."]
                    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_16__["FaSave"], {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 37
                      }, _this2), " Simpan"]
                    }, void 0, true)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 29
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 25
                }, _this2);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, this)
        }, void 0, false)
      }, void 0, false);
    }
  }]);

  return FormComment;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FormComment);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Q29tbWVudC5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwieXVwIiwibmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJib2R5IiwiRm9ybUNvbW1lbnQiLCJwcm9wcyIsImlkIiwicG9zdElEIiwic2V0U3RhdGUiLCJwb3N0X2lkIiwibG9hZGluZyIsInN0YXRlIiwiZm9udFdlaWdodCIsInZhbHVlcyIsImFjdGlvbnMiLCJBUEkiLCJQb3N0Q29tbWVudCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJyZWxvYWQiLCJ3YXJuIiwic2V0U3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJzZXRGaWVsZFZhbHVlIiwidG91Y2hlZCIsImVycm9ycyIsImlzU3VibWl0dGluZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsMkNBQUEsQ0FBVztBQUNoQ0MsTUFBSSxFQUFFRCwyQ0FBQSxHQUFhRSxRQUFiLEVBRDBCO0FBRWhDQyxPQUFLLEVBQUVILDJDQUFBLEdBQWFHLEtBQWIsR0FBcUJELFFBQXJCLEVBRnlCO0FBR2hDRSxNQUFJLEVBQUVKLDJDQUFBLEdBQWFFLFFBQWI7QUFIMEIsQ0FBWCxDQUF6Qjs7SUFNTUcsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLDROQVFFLFlBQU07QUFDdEIsVUFBTUMsRUFBRSxHQUFHLE1BQUtELEtB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O0FBR0EsNEJBQUksRUFBQyxJQUhMO0FBSUEsNEJBQUksRUFBQyxRQUpMO0FBS0EsdUNBQVk7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURBO0FBQUEsb0NBRDZFLGdCQVV2RTtBQUFBLDhDQUFFLHFFQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBQUY7QUFBQTtBQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWSztBQUFBO0FBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFQUix1QkFEUjtBQTRGSDs7OztFQTlHcUJDLCtDOztBQWlIWC9CLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvcG9zdHMvW2lkXS44NGZjMjA4MzA4NzY0NDc2Njg4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uL2xpYnMvYXhpb3MnO1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBCcmVhZGNydW1iLCBDYXJkLCBSb3csIENvbCwgU3Bpbm5lciwgQnV0dG9uLCBGb3JtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGYVNhdmV9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24nO1xyXG4vL2ltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG4vL2ltcG9ydCAnbW9tZW50L2xvY2FsZS9pZCdcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCc7XHJcblxyXG5jb25zdCB2YWxpZGF0aW9uU2NoZW1hID0geXVwLm9iamVjdCh7XHJcbiAgICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoKS5yZXF1aXJlZCgpLFxyXG4gICAgYm9keTogeXVwLnN0cmluZygpLnJlcXVpcmVkKClcclxuICB9KTsgXHJcblxyXG5jbGFzcyBGb3JtQ29tbWVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcG9zdF9pZDogJycsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLnBvc3RJRFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBwb3N0X2lkOiBpZCxcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID9cclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8U2tlbGV0b24gY291bnQ9ezR9IGhlaWdodD17NDB9IGNsYXNzTmFtZT1cIm1iLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPXsxMDB9IGhlaWdodD17NDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwibWItMlwiIGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItM1wiIHN0eWxlPXt7Zm9udFdlaWdodDogJzQwMCd9fT5UYW1iYWggS29tZW50YXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1pa1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0X2lkOiB0aGlzLnN0YXRlLnBvc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQSS5Qb3N0Q29tbWVudCh2YWx1ZXMpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJLb21lbnRhciBiZXJoYXNpbCBkaXNpbXBhblwiLCB7cG9zaXRpb246IFwidG9wLWNlbnRlclwifSk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3Qud2FybihcIkdhZ2FsLCBwZXJpa3NhIGtlbWJhbGlcIiwge3Bvc2l0aW9uOiBcInRvcC1jZW50ZXJcIn0pOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXt2YWxpZGF0aW9uU2NoZW1hfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWw+TmFtYTwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1hIEFuZGFcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZUJsdXJ9IHZhbHVlPXt2YWx1ZXMubmFtZX0gaXNJbnZhbGlkPXshIWVycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLm5hbWUgJiYgdG91Y2hlZC5uYW1lICYmIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj57ZXJyb3JzLm5hbWV9PC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gb25CbHVyPXtoYW5kbGVCbHVyfSB2YWx1ZT17dmFsdWVzLmVtYWlsfSBpc0ludmFsaWQ9eyEhZXJyb3JzLmVtYWlsICYmIHRvdWNoZWQuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj57ZXJyb3JzLmVtYWlsfTwvRm9ybS5Db250cm9sLkZlZWRiYWNrPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5Lb21lbnRhcjwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIGFzPVwidGV4dGFyZWFcIiByb3dzPVwiNlwiIG5hbWU9XCJib2R5XCIgcGxhY2Vob2xkZXI9XCJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBvbkJsdXI9e2hhbmRsZUJsdXJ9IHZhbHVlPXt2YWx1ZXMuYm9keX0gaXNJbnZhbGlkPXshIWVycm9ycy5ib2R5ICYmIHRvdWNoZWQuYm9keX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmJvZHkgJiYgdG91Y2hlZC5ib2R5ICYmIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj57ZXJyb3JzLmJvZHl9PC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+e2lzU3VibWl0dGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cImdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IE1lbXVhdC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKCA8PjxGYVNhdmUvPiBTaW1wYW48Lz4gKX08L0J1dHRvbj5cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Db21tZW50OyJdLCJzb3VyY2VSb290IjoiIn0=