webpackHotUpdate_N_E("pages/index",{

/***/ "./libs/axios.js":
/*!***********************!*\
  !*** ./libs/axios.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var RootPath = "http://localhost/blogapp-server/api/";
var username = 'admin';
var password = '1234';
var token = Buffer.from("".concat(username, ":").concat(password), 'utf8').toString('base64');

var GET = function GET(path) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(RootPath + path, {
      headers: {//'Authorization': `basic ${token}`,
        //'X-API-KEY': `blog123`
      }
    }).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err);
    });
  });
  return promise;
};

_c = GET;

var GET_ID = function GET_ID(path, id) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(RootPath + path + id).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err);
    });
  });
  return promise;
};

_c2 = GET_ID;

var GET_BY_ID = function GET_BY_ID(path, data) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(RootPath + path + data).then(function (res) {
      resolve(res.data);
    }, function (err) {
      console.log(err.response);
      return err.response;
    });
  });
  return promise;
};

_c3 = GET_BY_ID;

var POST = function POST(path, data) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(RootPath + path, data).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err);
    });
  });
  return promise;
};

_c4 = POST;

var PUT = function PUT(path, data) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(RootPath + path, data).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err);
    });
  });
  return promise;
};

_c5 = PUT;

var DELETE = function DELETE(path, data) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](RootPath + path + data).then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      reject(err);
    });
  });
  return promise;
};

_c6 = DELETE;

var SEARCH = function SEARCH(path, data) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(RootPath + path + data).then(function (res) {
      resolve(res.data);
    })["catch"](function (er) {
      reject(er);
    });
  });
  return promise;
};

_c7 = SEARCH;

var POST_FOTO = function POST_FOTO(path, data, name) {
  var promise = new Promise(function (resolve, reject) {
    var formdata = new FormData();
    formdata.append('foto', data, name);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(RootPath + path, formdata).then(function (res) {
      resolve(res.data.status);
    }, function (err) {
      reject(err);
    });
  });
  return promise;
};

_c8 = POST_FOTO;

var PostLogin = function PostLogin(data) {
  return POST('LoginController', data);
};

_c9 = PostLogin;

var GetBlog = function GetBlog() {
  return GET('BlogController');
};

_c10 = GetBlog;

var GetBlogId = function GetBlogId(data) {
  return GET_ID('BlogController?id=', data);
};

_c11 = GetBlogId;

var PostBlog = function PostBlog(data) {
  return POST('BlogController', data);
};

_c12 = PostBlog;

var PutBlog = function PutBlog(data) {
  return PUT('BlogController', data);
};

_c13 = PutBlog;

var PutBlogCategory = function PutBlogCategory(data) {
  return PUT('BlogCategoryController', data);
};

_c14 = PutBlogCategory;

var DeleteBlog = function DeleteBlog(id) {
  return DELETE('BlogController/index_delete?id=', id);
};

_c15 = DeleteBlog;

var PutBlogImage = function PutBlogImage(data) {
  return PUT('BlogImageController', data);
};

_c16 = PutBlogImage;

var GetSetting = function GetSetting() {
  return GET('SettingController');
};

_c17 = GetSetting;

var PutSetting = function PutSetting(data) {
  return PUT('SettingController', data);
};

_c18 = PutSetting;

var GetUser = function GetUser() {
  return GET('UserController');
};

_c19 = GetUser;

var GetUserId = function GetUserId(data) {
  return GET_ID('UserController?id=', data);
};

_c20 = GetUserId;

var PostUser = function PostUser(data) {
  return POST('UserController', data);
};

_c21 = PostUser;

var PutUser = function PutUser(data) {
  return PUT('UserController', data);
};

_c22 = PutUser;

var PutUserPass = function PutUserPass(data) {
  return PUT('UserPassController', data);
};

_c23 = PutUserPass;

var DeleteUser = function DeleteUser(id) {
  return DELETE('UserController/index_delete?id=', id);
};

_c24 = DeleteUser;

var GetSlideshow = function GetSlideshow() {
  return GET('SlideshowController');
};

_c25 = GetSlideshow;

var GetSlideshowId = function GetSlideshowId(data) {
  return GET_ID('SlideshowController?id=', data);
};

_c26 = GetSlideshowId;

var PostSlideshow = function PostSlideshow(data) {
  return POST('SlideshowController', data);
};

_c27 = PostSlideshow;

var PutSlideshow = function PutSlideshow(data) {
  return PUT('SlideshowController', data);
};

_c28 = PutSlideshow;

var DeleteSlideshow = function DeleteSlideshow(id) {
  return DELETE('SlideshowController/index_delete?id=', id);
};

_c29 = DeleteSlideshow;

var PutSlideshowImage = function PutSlideshowImage(data) {
  return PUT('SlideshowImageController', data);
};

_c30 = PutSlideshowImage;

var GetCategory = function GetCategory() {
  return GET('CategoryController');
};

_c31 = GetCategory;

var GetCategoryId = function GetCategoryId(data) {
  return GET_ID('CategoryController?id=', data);
};

_c32 = GetCategoryId;

var PostCategory = function PostCategory(data) {
  return POST('CategoryController', data);
};

_c33 = PostCategory;

var PutCategory = function PutCategory(data) {
  return PUT('CategoryController', data);
};

_c34 = PutCategory;

var DeleteCategory = function DeleteCategory(id) {
  return DELETE('CategoryController/index_delete?id=', id);
};

_c35 = DeleteCategory;

var PostFoto = function PostFoto(data, name) {
  return POST_FOTO('ImageUpload', data, name);
};

_c36 = PostFoto;

var CountBlog = function CountBlog() {
  return GET('CountBlogController');
};

_c37 = CountBlog;

var CountCategory = function CountCategory() {
  return GET('CountCategoryController');
};

_c38 = CountCategory;

var SearchBlog = function SearchBlog(data) {
  return SEARCH('SearchController?id=', data);
};

_c39 = SearchBlog;

var GetComment = function GetComment() {
  return GET('CommentController');
};

_c40 = GetComment;

var GetCommentId = function GetCommentId(data) {
  return GET_ID('CommentController?id=', data);
};

_c41 = GetCommentId;

var PostComment = function PostComment(data) {
  return POST('CommentController', data);
};

_c42 = PostComment;

var PutComment = function PutComment(data) {
  return PUT('CommentController', data);
};

_c43 = PutComment;

var CountComment = function CountComment() {
  return GET('CountCommentController');
};

_c44 = CountComment;
var API = {
  PostLogin: PostLogin,
  GetBlog: GetBlog,
  GetBlogId: GetBlogId,
  PostBlog: PostBlog,
  PutBlog: PutBlog,
  PutBlogCategory: PutBlogCategory,
  DeleteBlog: DeleteBlog,
  PutBlogImage: PutBlogImage,
  GetSetting: GetSetting,
  PutSetting: PutSetting,
  GetUser: GetUser,
  GetUserId: GetUserId,
  PostUser: PostUser,
  PutUser: PutUser,
  PutUserPass: PutUserPass,
  DeleteUser: DeleteUser,
  GetSlideshow: GetSlideshow,
  GetSlideshowId: GetSlideshowId,
  PostSlideshow: PostSlideshow,
  PutSlideshow: PutSlideshow,
  DeleteSlideshow: DeleteSlideshow,
  PutSlideshowImage: PutSlideshowImage,
  GetCategory: GetCategory,
  GetCategoryId: GetCategoryId,
  PostCategory: PostCategory,
  PutCategory: PutCategory,
  DeleteCategory: DeleteCategory,
  PostFoto: PostFoto,
  CountBlog: CountBlog,
  CountCategory: CountCategory,
  SearchBlog: SearchBlog,
  GetComment: GetComment,
  GetCommentId: GetCommentId,
  PostComment: PostComment,
  PutComment: PutComment,
  CountComment: CountComment
};
/* harmony default export */ __webpack_exports__["default"] = (API);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33, _c34, _c35, _c36, _c37, _c38, _c39, _c40, _c41, _c42, _c43, _c44;

$RefreshReg$(_c, "GET");
$RefreshReg$(_c2, "GET_ID");
$RefreshReg$(_c3, "GET_BY_ID");
$RefreshReg$(_c4, "POST");
$RefreshReg$(_c5, "PUT");
$RefreshReg$(_c6, "DELETE");
$RefreshReg$(_c7, "SEARCH");
$RefreshReg$(_c8, "POST_FOTO");
$RefreshReg$(_c9, "PostLogin");
$RefreshReg$(_c10, "GetBlog");
$RefreshReg$(_c11, "GetBlogId");
$RefreshReg$(_c12, "PostBlog");
$RefreshReg$(_c13, "PutBlog");
$RefreshReg$(_c14, "PutBlogCategory");
$RefreshReg$(_c15, "DeleteBlog");
$RefreshReg$(_c16, "PutBlogImage");
$RefreshReg$(_c17, "GetSetting");
$RefreshReg$(_c18, "PutSetting");
$RefreshReg$(_c19, "GetUser");
$RefreshReg$(_c20, "GetUserId");
$RefreshReg$(_c21, "PostUser");
$RefreshReg$(_c22, "PutUser");
$RefreshReg$(_c23, "PutUserPass");
$RefreshReg$(_c24, "DeleteUser");
$RefreshReg$(_c25, "GetSlideshow");
$RefreshReg$(_c26, "GetSlideshowId");
$RefreshReg$(_c27, "PostSlideshow");
$RefreshReg$(_c28, "PutSlideshow");
$RefreshReg$(_c29, "DeleteSlideshow");
$RefreshReg$(_c30, "PutSlideshowImage");
$RefreshReg$(_c31, "GetCategory");
$RefreshReg$(_c32, "GetCategoryId");
$RefreshReg$(_c33, "PostCategory");
$RefreshReg$(_c34, "PutCategory");
$RefreshReg$(_c35, "DeleteCategory");
$RefreshReg$(_c36, "PostFoto");
$RefreshReg$(_c37, "CountBlog");
$RefreshReg$(_c38, "CountCategory");
$RefreshReg$(_c39, "SearchBlog");
$RefreshReg$(_c40, "GetComment");
$RefreshReg$(_c41, "GetCommentId");
$RefreshReg$(_c42, "PostComment");
$RefreshReg$(_c43, "PutComment");
$RefreshReg$(_c44, "CountComment");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9heGlvcy5qcyJdLCJuYW1lcyI6WyJSb290UGF0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b2tlbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIkdFVCIsInBhdGgiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJBeGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsIkdFVF9JRCIsImlkIiwiR0VUX0JZX0lEIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiUE9TVCIsInBvc3QiLCJQVVQiLCJwdXQiLCJERUxFVEUiLCJTRUFSQ0giLCJlciIsIlBPU1RfRk9UTyIsIm5hbWUiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic3RhdHVzIiwiUG9zdExvZ2luIiwiR2V0QmxvZyIsIkdldEJsb2dJZCIsIlBvc3RCbG9nIiwiUHV0QmxvZyIsIlB1dEJsb2dDYXRlZ29yeSIsIkRlbGV0ZUJsb2ciLCJQdXRCbG9nSW1hZ2UiLCJHZXRTZXR0aW5nIiwiUHV0U2V0dGluZyIsIkdldFVzZXIiLCJHZXRVc2VySWQiLCJQb3N0VXNlciIsIlB1dFVzZXIiLCJQdXRVc2VyUGFzcyIsIkRlbGV0ZVVzZXIiLCJHZXRTbGlkZXNob3ciLCJHZXRTbGlkZXNob3dJZCIsIlBvc3RTbGlkZXNob3ciLCJQdXRTbGlkZXNob3ciLCJEZWxldGVTbGlkZXNob3ciLCJQdXRTbGlkZXNob3dJbWFnZSIsIkdldENhdGVnb3J5IiwiR2V0Q2F0ZWdvcnlJZCIsIlBvc3RDYXRlZ29yeSIsIlB1dENhdGVnb3J5IiwiRGVsZXRlQ2F0ZWdvcnkiLCJQb3N0Rm90byIsIkNvdW50QmxvZyIsIkNvdW50Q2F0ZWdvcnkiLCJTZWFyY2hCbG9nIiwiR2V0Q29tbWVudCIsIkdldENvbW1lbnRJZCIsIlBvc3RDb21tZW50IiwiUHV0Q29tbWVudCIsIkNvdW50Q29tbWVudCIsIkFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxPQUFqQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxNQUFqQjtBQUVBLElBQU1DLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxJQUFQLFdBQWVKLFFBQWYsY0FBMkJDLFFBQTNCLEdBQXVDLE1BQXZDLEVBQStDSSxRQUEvQyxDQUF3RCxRQUF4RCxDQUFkOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLElBQUQsRUFBVTtBQUNsQixNQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUM1Q0MsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVZCxRQUFRLEdBQUNRLElBQW5CLEVBQXlCO0FBQ3JCTyxhQUFPLEVBQUUsQ0FDVjtBQUNBO0FBRlU7QUFEWSxLQUF6QixFQUtLQyxJQUxMLENBS1UsVUFBQUMsR0FBRyxFQUFJO0FBQ2JOLGFBQU8sQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDSCxLQVBELFdBT1MsVUFBQUMsR0FBRyxFQUFJO0FBQ1pQLFlBQU0sQ0FBQ08sR0FBRCxDQUFOO0FBQ0gsS0FURDtBQVVILEdBWGUsQ0FBaEI7QUFZQSxTQUFPVixPQUFQO0FBQ0gsQ0FkRDs7S0FBTUYsRzs7QUFnQk4sSUFBTWEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ1osSUFBRCxFQUFNYSxFQUFOLEVBQWE7QUFDeEIsTUFBTVosT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDNUNDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVWQsUUFBUSxHQUFDUSxJQUFULEdBQWNhLEVBQXhCLEVBQTRCTCxJQUE1QixDQUFpQyxVQUFBQyxHQUFHLEVBQUk7QUFDcENOLGFBQU8sQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDSCxLQUZELFdBRVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pQLFlBQU0sQ0FBQ08sR0FBRCxDQUFOO0FBQ0gsS0FKRDtBQUtILEdBTmUsQ0FBaEI7QUFPQSxTQUFPVixPQUFQO0FBQ0gsQ0FURDs7TUFBTVcsTTs7QUFXTixJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDZCxJQUFELEVBQU1VLElBQU4sRUFBYztBQUM1QixNQUFNVCxPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUN6Q0MsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVZCxRQUFRLEdBQUNRLElBQVQsR0FBY1UsSUFBeEIsRUFBOEJGLElBQTlCLENBQW1DLFVBQUFDLEdBQUcsRUFBRTtBQUNwQ04sYUFBTyxDQUFDTSxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNILEtBRkQsRUFFRSxVQUFBQyxHQUFHLEVBQUU7QUFDSkksYUFBTyxDQUFDQyxHQUFSLENBQVlMLEdBQUcsQ0FBQ00sUUFBaEI7QUFDQSxhQUFPTixHQUFHLENBQUNNLFFBQVg7QUFDRixLQUxEO0FBTUosR0FQZSxDQUFoQjtBQVFBLFNBQU9oQixPQUFQO0FBQ0YsQ0FWRjs7TUFBTWEsUzs7QUFZTixJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDbEIsSUFBRCxFQUFNVSxJQUFOLEVBQWU7QUFDeEIsTUFBTVQsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDNUNDLGdEQUFLLENBQUNjLElBQU4sQ0FBVzNCLFFBQVEsR0FBQ1EsSUFBcEIsRUFBeUJVLElBQXpCLEVBQStCRixJQUEvQixDQUFvQyxVQUFBQyxHQUFHLEVBQUk7QUFDdkNOLGFBQU8sQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDSCxLQUZELFdBRVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pQLFlBQU0sQ0FBQ08sR0FBRCxDQUFOO0FBQ0gsS0FKRDtBQUtILEdBTmUsQ0FBaEI7QUFPQSxTQUFPVixPQUFQO0FBQ0gsQ0FURDs7TUFBTWlCLEk7O0FBV04sSUFBTUUsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ3BCLElBQUQsRUFBTVUsSUFBTixFQUFlO0FBQ3ZCLE1BQU1ULE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQW9CO0FBQzVDQyxnREFBSyxDQUFDZ0IsR0FBTixDQUFVN0IsUUFBUSxHQUFDUSxJQUFuQixFQUF3QlUsSUFBeEIsRUFBOEJGLElBQTlCLENBQW1DLFVBQUFDLEdBQUcsRUFBSTtBQUN0Q04sYUFBTyxDQUFDTSxHQUFHLENBQUNDLElBQUwsQ0FBUDtBQUNILEtBRkQsV0FFUyxVQUFBQyxHQUFHLEVBQUk7QUFDWlAsWUFBTSxDQUFDTyxHQUFELENBQU47QUFDSCxLQUpEO0FBS0gsR0FOZSxDQUFoQjtBQU9BLFNBQU9WLE9BQVA7QUFDSCxDQVREOztNQUFNbUIsRzs7QUFXTixJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDdEIsSUFBRCxFQUFNVSxJQUFOLEVBQWU7QUFDMUIsTUFBTVQsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDNUNDLGdEQUFLLFVBQUwsQ0FBYWIsUUFBUSxHQUFDUSxJQUFULEdBQWNVLElBQTNCLEVBQWlDRixJQUFqQyxDQUFzQyxVQUFBQyxHQUFHLEVBQUk7QUFDekNOLGFBQU8sQ0FBQ00sR0FBRyxDQUFDQyxJQUFMLENBQVA7QUFDSCxLQUZELFdBRVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pQLFlBQU0sQ0FBQ08sR0FBRCxDQUFOO0FBQ0gsS0FKRDtBQUtILEdBTmUsQ0FBaEI7QUFPQSxTQUFPVixPQUFQO0FBQ0gsQ0FURDs7TUFBTXFCLE07O0FBV04sSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ3ZCLElBQUQsRUFBTVUsSUFBTixFQUFlO0FBQzFCLE1BQU1ULE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQW9CO0FBQzVDQyxnREFBSyxDQUFDQyxHQUFOLENBQVVkLFFBQVEsR0FBQ1EsSUFBVCxHQUFjVSxJQUF4QixFQUE4QkYsSUFBOUIsQ0FBbUMsVUFBQUMsR0FBRyxFQUFJO0FBQ3RDTixhQUFPLENBQUNNLEdBQUcsQ0FBQ0MsSUFBTCxDQUFQO0FBQ0gsS0FGRCxXQUVTLFVBQUFjLEVBQUUsRUFBSTtBQUNYcEIsWUFBTSxDQUFDb0IsRUFBRCxDQUFOO0FBQ0gsS0FKRDtBQUtILEdBTmUsQ0FBaEI7QUFPQSxTQUFPdkIsT0FBUDtBQUNILENBVEQ7O01BQU1zQixNOztBQVdOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN6QixJQUFELEVBQU1VLElBQU4sRUFBV2dCLElBQVgsRUFBb0I7QUFDbEMsTUFBTXpCLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCO0FBQzFDLFFBQU11QixRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjtBQUNBRCxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBdUJuQixJQUF2QixFQUE0QmdCLElBQTVCO0FBQ0FyQixnREFBSyxDQUFDYyxJQUFOLENBQVczQixRQUFRLEdBQUNRLElBQXBCLEVBQXlCMkIsUUFBekIsRUFBbUNuQixJQUFuQyxDQUF3QyxVQUFBQyxHQUFHLEVBQUU7QUFDMUNOLGFBQU8sQ0FBQ00sR0FBRyxDQUFDQyxJQUFKLENBQVNvQixNQUFWLENBQVA7QUFDSCxLQUZBLEVBRUMsVUFBQ25CLEdBQUQsRUFBTztBQUNMUCxZQUFNLENBQUNPLEdBQUQsQ0FBTjtBQUNILEtBSkE7QUFLSCxHQVJlLENBQWhCO0FBU0EsU0FBT1YsT0FBUDtBQUNILENBWEQ7O01BQU13QixTOztBQWFOLElBQU1NLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNyQixJQUFEO0FBQUEsU0FBVVEsSUFBSSxDQUFDLGlCQUFELEVBQW1CUixJQUFuQixDQUFkO0FBQUEsQ0FBbEI7O01BQU1xQixTOztBQUNOLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTWpDLEdBQUcsQ0FBQyxnQkFBRCxDQUFUO0FBQUEsQ0FBaEI7O09BQU1pQyxPOztBQUNOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN2QixJQUFEO0FBQUEsU0FBVUUsTUFBTSxDQUFDLG9CQUFELEVBQXNCRixJQUF0QixDQUFoQjtBQUFBLENBQWxCOztPQUFNdUIsUzs7QUFDTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDeEIsSUFBRDtBQUFBLFNBQVVRLElBQUksQ0FBQyxnQkFBRCxFQUFrQlIsSUFBbEIsQ0FBZDtBQUFBLENBQWpCOztPQUFNd0IsUTs7QUFDTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDekIsSUFBRDtBQUFBLFNBQVVVLEdBQUcsQ0FBQyxnQkFBRCxFQUFrQlYsSUFBbEIsQ0FBYjtBQUFBLENBQWhCOztPQUFNeUIsTzs7QUFDTixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUMxQixJQUFEO0FBQUEsU0FBVVUsR0FBRyxDQUFDLHdCQUFELEVBQTBCVixJQUExQixDQUFiO0FBQUEsQ0FBeEI7O09BQU0wQixlOztBQUNOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUN4QixFQUFEO0FBQUEsU0FBUVMsTUFBTSxDQUFDLGlDQUFELEVBQW1DVCxFQUFuQyxDQUFkO0FBQUEsQ0FBbkI7O09BQU13QixVOztBQUNOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUM1QixJQUFEO0FBQUEsU0FBVVUsR0FBRyxDQUFDLHFCQUFELEVBQXVCVixJQUF2QixDQUFiO0FBQUEsQ0FBckI7O09BQU00QixZOztBQUNOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsU0FBTXhDLEdBQUcsQ0FBQyxtQkFBRCxDQUFUO0FBQUEsQ0FBbkI7O09BQU13QyxVOztBQUNOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUM5QixJQUFEO0FBQUEsU0FBVVUsR0FBRyxDQUFDLG1CQUFELEVBQXFCVixJQUFyQixDQUFiO0FBQUEsQ0FBbkI7O09BQU04QixVOztBQUNOLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsU0FBTTFDLEdBQUcsQ0FBQyxnQkFBRCxDQUFUO0FBQUEsQ0FBaEI7O09BQU0wQyxPOztBQUNOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNoQyxJQUFEO0FBQUEsU0FBVUUsTUFBTSxDQUFDLG9CQUFELEVBQXNCRixJQUF0QixDQUFoQjtBQUFBLENBQWxCOztPQUFNZ0MsUzs7QUFDTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDakMsSUFBRDtBQUFBLFNBQVVRLElBQUksQ0FBQyxnQkFBRCxFQUFrQlIsSUFBbEIsQ0FBZDtBQUFBLENBQWpCOztPQUFNaUMsUTs7QUFDTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDbEMsSUFBRDtBQUFBLFNBQVVVLEdBQUcsQ0FBQyxnQkFBRCxFQUFrQlYsSUFBbEIsQ0FBYjtBQUFBLENBQWhCOztPQUFNa0MsTzs7QUFDTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDbkMsSUFBRDtBQUFBLFNBQVVVLEdBQUcsQ0FBQyxvQkFBRCxFQUFzQlYsSUFBdEIsQ0FBYjtBQUFBLENBQXBCOztPQUFNbUMsVzs7QUFDTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDakMsRUFBRDtBQUFBLFNBQVFTLE1BQU0sQ0FBQyxpQ0FBRCxFQUFtQ1QsRUFBbkMsQ0FBZDtBQUFBLENBQW5COztPQUFNaUMsVTs7QUFDTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFNBQU1oRCxHQUFHLENBQUMscUJBQUQsQ0FBVDtBQUFBLENBQXJCOztPQUFNZ0QsWTs7QUFDTixJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUN0QyxJQUFEO0FBQUEsU0FBVUUsTUFBTSxDQUFDLHlCQUFELEVBQTJCRixJQUEzQixDQUFoQjtBQUFBLENBQXZCOztPQUFNc0MsYzs7QUFDTixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUN2QyxJQUFEO0FBQUEsU0FBVVEsSUFBSSxDQUFDLHFCQUFELEVBQXVCUixJQUF2QixDQUFkO0FBQUEsQ0FBdEI7O09BQU11QyxhOztBQUNOLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUN4QyxJQUFEO0FBQUEsU0FBVVUsR0FBRyxDQUFDLHFCQUFELEVBQXVCVixJQUF2QixDQUFiO0FBQUEsQ0FBckI7O09BQU13QyxZOztBQUNOLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3RDLEVBQUQ7QUFBQSxTQUFRUyxNQUFNLENBQUMsc0NBQUQsRUFBd0NULEVBQXhDLENBQWQ7QUFBQSxDQUF4Qjs7T0FBTXNDLGU7O0FBQ04sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDMUMsSUFBRDtBQUFBLFNBQVVVLEdBQUcsQ0FBQywwQkFBRCxFQUE0QlYsSUFBNUIsQ0FBYjtBQUFBLENBQTFCOztPQUFNMEMsaUI7O0FBQ04sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUFNdEQsR0FBRyxDQUFDLG9CQUFELENBQVQ7QUFBQSxDQUFwQjs7T0FBTXNELFc7O0FBQ04sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDNUMsSUFBRDtBQUFBLFNBQVVFLE1BQU0sQ0FBQyx3QkFBRCxFQUEwQkYsSUFBMUIsQ0FBaEI7QUFBQSxDQUF0Qjs7T0FBTTRDLGE7O0FBQ04sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQzdDLElBQUQ7QUFBQSxTQUFVUSxJQUFJLENBQUMsb0JBQUQsRUFBc0JSLElBQXRCLENBQWQ7QUFBQSxDQUFyQjs7T0FBTTZDLFk7O0FBQ04sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQzlDLElBQUQ7QUFBQSxTQUFVVSxHQUFHLENBQUMsb0JBQUQsRUFBc0JWLElBQXRCLENBQWI7QUFBQSxDQUFwQjs7T0FBTThDLFc7O0FBQ04sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDNUMsRUFBRDtBQUFBLFNBQVFTLE1BQU0sQ0FBQyxxQ0FBRCxFQUF1Q1QsRUFBdkMsQ0FBZDtBQUFBLENBQXZCOztPQUFNNEMsYzs7QUFDTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDaEQsSUFBRCxFQUFNZ0IsSUFBTjtBQUFBLFNBQWVELFNBQVMsQ0FBQyxhQUFELEVBQWVmLElBQWYsRUFBb0JnQixJQUFwQixDQUF4QjtBQUFBLENBQWpCOztPQUFNZ0MsUTs7QUFDTixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU01RCxHQUFHLENBQUMscUJBQUQsQ0FBVDtBQUFBLENBQWxCOztPQUFNNEQsUzs7QUFDTixJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBTTdELEdBQUcsQ0FBQyx5QkFBRCxDQUFUO0FBQUEsQ0FBdEI7O09BQU02RCxhOztBQUNOLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNuRCxJQUFEO0FBQUEsU0FBVWEsTUFBTSxDQUFDLHNCQUFELEVBQXdCYixJQUF4QixDQUFoQjtBQUFBLENBQW5COztPQUFNbUQsVTs7QUFDTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU0vRCxHQUFHLENBQUMsbUJBQUQsQ0FBVDtBQUFBLENBQW5COztPQUFNK0QsVTs7QUFDTixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDckQsSUFBRDtBQUFBLFNBQVVFLE1BQU0sQ0FBQyx1QkFBRCxFQUF5QkYsSUFBekIsQ0FBaEI7QUFBQSxDQUFyQjs7T0FBTXFELFk7O0FBQ04sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ3RELElBQUQ7QUFBQSxTQUFVUSxJQUFJLENBQUMsbUJBQUQsRUFBcUJSLElBQXJCLENBQWQ7QUFBQSxDQUFwQjs7T0FBTXNELFc7O0FBQ04sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3ZELElBQUQ7QUFBQSxTQUFVVSxHQUFHLENBQUMsbUJBQUQsRUFBcUJWLElBQXJCLENBQWI7QUFBQSxDQUFuQjs7T0FBTXVELFU7O0FBQ04sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxTQUFNbkUsR0FBRyxDQUFDLHdCQUFELENBQVQ7QUFBQSxDQUFyQjs7T0FBTW1FLFk7QUFFTixJQUFNQyxHQUFHLEdBQUc7QUFDUnBDLFdBQVMsRUFBVEEsU0FEUTtBQUVSQyxTQUFPLEVBQVBBLE9BRlE7QUFHUkMsV0FBUyxFQUFUQSxTQUhRO0FBSVJDLFVBQVEsRUFBUkEsUUFKUTtBQUtSQyxTQUFPLEVBQVBBLE9BTFE7QUFNUkMsaUJBQWUsRUFBZkEsZUFOUTtBQU9SQyxZQUFVLEVBQVZBLFVBUFE7QUFRUkMsY0FBWSxFQUFaQSxZQVJRO0FBU1JDLFlBQVUsRUFBVkEsVUFUUTtBQVVSQyxZQUFVLEVBQVZBLFVBVlE7QUFXUkMsU0FBTyxFQUFQQSxPQVhRO0FBWVJDLFdBQVMsRUFBVEEsU0FaUTtBQWFSQyxVQUFRLEVBQVJBLFFBYlE7QUFjUkMsU0FBTyxFQUFQQSxPQWRRO0FBZVJDLGFBQVcsRUFBWEEsV0FmUTtBQWdCUkMsWUFBVSxFQUFWQSxVQWhCUTtBQWlCUkMsY0FBWSxFQUFaQSxZQWpCUTtBQWtCUkMsZ0JBQWMsRUFBZEEsY0FsQlE7QUFtQlJDLGVBQWEsRUFBYkEsYUFuQlE7QUFvQlJDLGNBQVksRUFBWkEsWUFwQlE7QUFxQlJDLGlCQUFlLEVBQWZBLGVBckJRO0FBc0JSQyxtQkFBaUIsRUFBakJBLGlCQXRCUTtBQXVCUkMsYUFBVyxFQUFYQSxXQXZCUTtBQXdCUkMsZUFBYSxFQUFiQSxhQXhCUTtBQXlCUkMsY0FBWSxFQUFaQSxZQXpCUTtBQTBCUkMsYUFBVyxFQUFYQSxXQTFCUTtBQTJCUkMsZ0JBQWMsRUFBZEEsY0EzQlE7QUE0QlJDLFVBQVEsRUFBUkEsUUE1QlE7QUE2QlJDLFdBQVMsRUFBVEEsU0E3QlE7QUE4QlJDLGVBQWEsRUFBYkEsYUE5QlE7QUErQlJDLFlBQVUsRUFBVkEsVUEvQlE7QUFnQ1JDLFlBQVUsRUFBVkEsVUFoQ1E7QUFpQ1JDLGNBQVksRUFBWkEsWUFqQ1E7QUFrQ1JDLGFBQVcsRUFBWEEsV0FsQ1E7QUFtQ1JDLFlBQVUsRUFBVkEsVUFuQ1E7QUFvQ1JDLGNBQVksRUFBWkE7QUFwQ1EsQ0FBWjtBQXVDZUMsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzYyNDE2ZmU5NzhhNzUxY2E1NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tICdheGlvcydcclxuXHJcbmNvbnN0IFJvb3RQYXRoID0gXCJodHRwOi8vbG9jYWxob3N0L2Jsb2dhcHAtc2VydmVyL2FwaS9cIlxyXG5jb25zdCB1c2VybmFtZSA9ICdhZG1pbidcclxuY29uc3QgcGFzc3dvcmQgPSAnMTIzNCdcclxuXHJcbmNvbnN0IHRva2VuID0gQnVmZmVyLmZyb20oYCR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9YCwgJ3V0ZjgnKS50b1N0cmluZygnYmFzZTY0JylcclxuXHJcbmNvbnN0IEdFVCA9IChwYXRoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgQXhpb3MuZ2V0KFJvb3RQYXRoK3BhdGgsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgIC8vJ0F1dGhvcml6YXRpb24nOiBgYmFzaWMgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgIC8vJ1gtQVBJLUtFWSc6IGBibG9nMTIzYFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgR0VUX0lEID0gKHBhdGgsaWQpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICBBeGlvcy5nZXQoUm9vdFBhdGgrcGF0aCtpZCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBHRVRfQllfSUQgPSAocGF0aCxkYXRhKSA9PntcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgIEF4aW9zLmdldChSb290UGF0aCtwYXRoK2RhdGEpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgICB9LGVycj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpOyBcclxuICAgICAgICAgICAgcmV0dXJuIGVyci5yZXNwb25zZTtcclxuICAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG4gfVxyXG5cclxuY29uc3QgUE9TVCA9IChwYXRoLGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICBBeGlvcy5wb3N0KFJvb3RQYXRoK3BhdGgsZGF0YSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBQVVQgPSAocGF0aCxkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgQXhpb3MucHV0KFJvb3RQYXRoK3BhdGgsZGF0YSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBERUxFVEUgPSAocGF0aCxkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgQXhpb3MuZGVsZXRlKFJvb3RQYXRoK3BhdGgrZGF0YSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBTRUFSQ0ggPSAocGF0aCxkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgQXhpb3MuZ2V0KFJvb3RQYXRoK3BhdGgrZGF0YSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgUE9TVF9GT1RPID0gKHBhdGgsZGF0YSxuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ2ZvdG8nLGRhdGEsbmFtZSlcclxuICAgICAgICBBeGlvcy5wb3N0KFJvb3RQYXRoK3BhdGgsZm9ybWRhdGEpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YS5zdGF0dXMpXHJcbiAgICAgICB9LChlcnIpPT57XHJcbiAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgUG9zdExvZ2luID0gKGRhdGEpID0+IFBPU1QoJ0xvZ2luQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IEdldEJsb2cgPSAoKSA9PiBHRVQoJ0Jsb2dDb250cm9sbGVyJyk7XHJcbmNvbnN0IEdldEJsb2dJZCA9IChkYXRhKSA9PiBHRVRfSUQoJ0Jsb2dDb250cm9sbGVyP2lkPScsZGF0YSlcclxuY29uc3QgUG9zdEJsb2cgPSAoZGF0YSkgPT4gUE9TVCgnQmxvZ0NvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRCbG9nID0gKGRhdGEpID0+IFBVVCgnQmxvZ0NvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRCbG9nQ2F0ZWdvcnkgPSAoZGF0YSkgPT4gUFVUKCdCbG9nQ2F0ZWdvcnlDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgRGVsZXRlQmxvZyA9IChpZCkgPT4gREVMRVRFKCdCbG9nQ29udHJvbGxlci9pbmRleF9kZWxldGU/aWQ9JyxpZCk7XHJcbmNvbnN0IFB1dEJsb2dJbWFnZSA9IChkYXRhKSA9PiBQVVQoJ0Jsb2dJbWFnZUNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBHZXRTZXR0aW5nID0gKCkgPT4gR0VUKCdTZXR0aW5nQ29udHJvbGxlcicpO1xyXG5jb25zdCBQdXRTZXR0aW5nID0gKGRhdGEpID0+IFBVVCgnU2V0dGluZ0NvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBHZXRVc2VyID0gKCkgPT4gR0VUKCdVc2VyQ29udHJvbGxlcicpO1xyXG5jb25zdCBHZXRVc2VySWQgPSAoZGF0YSkgPT4gR0VUX0lEKCdVc2VyQ29udHJvbGxlcj9pZD0nLGRhdGEpXHJcbmNvbnN0IFBvc3RVc2VyID0gKGRhdGEpID0+IFBPU1QoJ1VzZXJDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0VXNlciA9IChkYXRhKSA9PiBQVVQoJ1VzZXJDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0VXNlclBhc3MgPSAoZGF0YSkgPT4gUFVUKCdVc2VyUGFzc0NvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBEZWxldGVVc2VyID0gKGlkKSA9PiBERUxFVEUoJ1VzZXJDb250cm9sbGVyL2luZGV4X2RlbGV0ZT9pZD0nLGlkKTtcclxuY29uc3QgR2V0U2xpZGVzaG93ID0gKCkgPT4gR0VUKCdTbGlkZXNob3dDb250cm9sbGVyJyk7XHJcbmNvbnN0IEdldFNsaWRlc2hvd0lkID0gKGRhdGEpID0+IEdFVF9JRCgnU2xpZGVzaG93Q29udHJvbGxlcj9pZD0nLGRhdGEpXHJcbmNvbnN0IFBvc3RTbGlkZXNob3cgPSAoZGF0YSkgPT4gUE9TVCgnU2xpZGVzaG93Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dFNsaWRlc2hvdyA9IChkYXRhKSA9PiBQVVQoJ1NsaWRlc2hvd0NvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBEZWxldGVTbGlkZXNob3cgPSAoaWQpID0+IERFTEVURSgnU2xpZGVzaG93Q29udHJvbGxlci9pbmRleF9kZWxldGU/aWQ9JyxpZCk7XHJcbmNvbnN0IFB1dFNsaWRlc2hvd0ltYWdlID0gKGRhdGEpID0+IFBVVCgnU2xpZGVzaG93SW1hZ2VDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgR2V0Q2F0ZWdvcnkgPSAoKSA9PiBHRVQoJ0NhdGVnb3J5Q29udHJvbGxlcicpO1xyXG5jb25zdCBHZXRDYXRlZ29yeUlkID0gKGRhdGEpID0+IEdFVF9JRCgnQ2F0ZWdvcnlDb250cm9sbGVyP2lkPScsZGF0YSlcclxuY29uc3QgUG9zdENhdGVnb3J5ID0gKGRhdGEpID0+IFBPU1QoJ0NhdGVnb3J5Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dENhdGVnb3J5ID0gKGRhdGEpID0+IFBVVCgnQ2F0ZWdvcnlDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgRGVsZXRlQ2F0ZWdvcnkgPSAoaWQpID0+IERFTEVURSgnQ2F0ZWdvcnlDb250cm9sbGVyL2luZGV4X2RlbGV0ZT9pZD0nLGlkKTtcclxuY29uc3QgUG9zdEZvdG8gPSAoZGF0YSxuYW1lKSA9PiBQT1NUX0ZPVE8oJ0ltYWdlVXBsb2FkJyxkYXRhLG5hbWUpO1xyXG5jb25zdCBDb3VudEJsb2cgPSAoKSA9PiBHRVQoJ0NvdW50QmxvZ0NvbnRyb2xsZXInKTtcclxuY29uc3QgQ291bnRDYXRlZ29yeSA9ICgpID0+IEdFVCgnQ291bnRDYXRlZ29yeUNvbnRyb2xsZXInKTtcclxuY29uc3QgU2VhcmNoQmxvZyA9IChkYXRhKSA9PiBTRUFSQ0goJ1NlYXJjaENvbnRyb2xsZXI/aWQ9JyxkYXRhKTtcclxuY29uc3QgR2V0Q29tbWVudCA9ICgpID0+IEdFVCgnQ29tbWVudENvbnRyb2xsZXInKTtcclxuY29uc3QgR2V0Q29tbWVudElkID0gKGRhdGEpID0+IEdFVF9JRCgnQ29tbWVudENvbnRyb2xsZXI/aWQ9JyxkYXRhKVxyXG5jb25zdCBQb3N0Q29tbWVudCA9IChkYXRhKSA9PiBQT1NUKCdDb21tZW50Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dENvbW1lbnQgPSAoZGF0YSkgPT4gUFVUKCdDb21tZW50Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IENvdW50Q29tbWVudCA9ICgpID0+IEdFVCgnQ291bnRDb21tZW50Q29udHJvbGxlcicpO1xyXG5cclxuY29uc3QgQVBJID0ge1xyXG4gICAgUG9zdExvZ2luLFxyXG4gICAgR2V0QmxvZyxcclxuICAgIEdldEJsb2dJZCxcclxuICAgIFBvc3RCbG9nLFxyXG4gICAgUHV0QmxvZyxcclxuICAgIFB1dEJsb2dDYXRlZ29yeSxcclxuICAgIERlbGV0ZUJsb2csXHJcbiAgICBQdXRCbG9nSW1hZ2UsXHJcbiAgICBHZXRTZXR0aW5nLFxyXG4gICAgUHV0U2V0dGluZyxcclxuICAgIEdldFVzZXIsXHJcbiAgICBHZXRVc2VySWQsXHJcbiAgICBQb3N0VXNlcixcclxuICAgIFB1dFVzZXIsXHJcbiAgICBQdXRVc2VyUGFzcyxcclxuICAgIERlbGV0ZVVzZXIsXHJcbiAgICBHZXRTbGlkZXNob3csXHJcbiAgICBHZXRTbGlkZXNob3dJZCxcclxuICAgIFBvc3RTbGlkZXNob3csXHJcbiAgICBQdXRTbGlkZXNob3csXHJcbiAgICBEZWxldGVTbGlkZXNob3csXHJcbiAgICBQdXRTbGlkZXNob3dJbWFnZSxcclxuICAgIEdldENhdGVnb3J5LFxyXG4gICAgR2V0Q2F0ZWdvcnlJZCxcclxuICAgIFBvc3RDYXRlZ29yeSxcclxuICAgIFB1dENhdGVnb3J5LFxyXG4gICAgRGVsZXRlQ2F0ZWdvcnksXHJcbiAgICBQb3N0Rm90byxcclxuICAgIENvdW50QmxvZyxcclxuICAgIENvdW50Q2F0ZWdvcnksXHJcbiAgICBTZWFyY2hCbG9nLFxyXG4gICAgR2V0Q29tbWVudCxcclxuICAgIEdldENvbW1lbnRJZCxcclxuICAgIFBvc3RDb21tZW50LFxyXG4gICAgUHV0Q29tbWVudCxcclxuICAgIENvdW50Q29tbWVudFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBUEkiXSwic291cmNlUm9vdCI6IiJ9