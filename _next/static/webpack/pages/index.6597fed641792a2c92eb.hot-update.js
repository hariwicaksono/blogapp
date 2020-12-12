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
      headers: {
        'Authorization': "basic ".concat(token)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9heGlvcy5qcyJdLCJuYW1lcyI6WyJSb290UGF0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b2tlbiIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIkdFVCIsInBhdGgiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJBeGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsIkdFVF9JRCIsImlkIiwiR0VUX0JZX0lEIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiUE9TVCIsInBvc3QiLCJQVVQiLCJwdXQiLCJERUxFVEUiLCJTRUFSQ0giLCJlciIsIlBPU1RfRk9UTyIsIm5hbWUiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic3RhdHVzIiwiUG9zdExvZ2luIiwiR2V0QmxvZyIsIkdldEJsb2dJZCIsIlBvc3RCbG9nIiwiUHV0QmxvZyIsIlB1dEJsb2dDYXRlZ29yeSIsIkRlbGV0ZUJsb2ciLCJQdXRCbG9nSW1hZ2UiLCJHZXRTZXR0aW5nIiwiUHV0U2V0dGluZyIsIkdldFVzZXIiLCJHZXRVc2VySWQiLCJQb3N0VXNlciIsIlB1dFVzZXIiLCJQdXRVc2VyUGFzcyIsIkRlbGV0ZVVzZXIiLCJHZXRTbGlkZXNob3ciLCJHZXRTbGlkZXNob3dJZCIsIlBvc3RTbGlkZXNob3ciLCJQdXRTbGlkZXNob3ciLCJEZWxldGVTbGlkZXNob3ciLCJQdXRTbGlkZXNob3dJbWFnZSIsIkdldENhdGVnb3J5IiwiR2V0Q2F0ZWdvcnlJZCIsIlBvc3RDYXRlZ29yeSIsIlB1dENhdGVnb3J5IiwiRGVsZXRlQ2F0ZWdvcnkiLCJQb3N0Rm90byIsIkNvdW50QmxvZyIsIkNvdW50Q2F0ZWdvcnkiLCJTZWFyY2hCbG9nIiwiR2V0Q29tbWVudCIsIkdldENvbW1lbnRJZCIsIlBvc3RDb21tZW50IiwiUHV0Q29tbWVudCIsIkNvdW50Q29tbWVudCIsIkFQSSJd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YUFBVyxFQUFYQSxXQWxDUTtBQW1DUkMsWUFBVSxFQUFWQSxVQW5DUTtBQW9DUkMsY0FBWSxFQUFaQTtBQXBDUSxDQUFaO0FBdUNlQyxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NTk3ZmVkNjQxNzkyYTJjOTJlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgUm9vdFBhdGggPSBcImh0dHA6Ly9sb2NhbGhvc3QvYmxvZ2FwcC1zZXJ2ZXIvYXBpL1wiXHJcbmNvbnN0IHVzZXJuYW1lID0gJ2FkbWluJ1xyXG5jb25zdCBwYXNzd29yZCA9ICcxMjM0J1xyXG5cclxuY29uc3QgdG9rZW4gPSBCdWZmZXIuZnJvbShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKVxyXG5cclxuY29uc3QgR0VUID0gKHBhdGgpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICBBeGlvcy5nZXQoUm9vdFBhdGgrcGF0aCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgYmFzaWMgJHt0b2tlbn1gXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxyXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBHRVRfSUQgPSAocGF0aCxpZCkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmdldChSb290UGF0aCtwYXRoK2lkKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IEdFVF9CWV9JRCA9IChwYXRoLGRhdGEpID0+e1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgQXhpb3MuZ2V0KFJvb3RQYXRoK3BhdGgrZGF0YSkudGhlbihyZXM9PntcclxuICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgIH0sZXJyPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7IFxyXG4gICAgICAgICAgICByZXR1cm4gZXJyLnJlc3BvbnNlO1xyXG4gICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbiB9XHJcblxyXG5jb25zdCBQT1NUID0gKHBhdGgsZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLnBvc3QoUm9vdFBhdGgrcGF0aCxkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IFBVVCA9IChwYXRoLGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICBBeGlvcy5wdXQoUm9vdFBhdGgrcGF0aCxkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IERFTEVURSA9IChwYXRoLGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICBBeGlvcy5kZWxldGUoUm9vdFBhdGgrcGF0aCtkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IFNFQVJDSCA9IChwYXRoLGRhdGEpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcclxuICAgICAgICBBeGlvcy5nZXQoUm9vdFBhdGgrcGF0aCtkYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXIpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBQT1NUX0ZPVE8gPSAocGF0aCxkYXRhLG5hbWUpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgY29uc3QgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZCgnZm90bycsZGF0YSxuYW1lKVxyXG4gICAgICAgIEF4aW9zLnBvc3QoUm9vdFBhdGgrcGF0aCxmb3JtZGF0YSkudGhlbihyZXM9PntcclxuICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhLnN0YXR1cylcclxuICAgICAgIH0sKGVycik9PntcclxuICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG59XHJcblxyXG5jb25zdCBQb3N0TG9naW4gPSAoZGF0YSkgPT4gUE9TVCgnTG9naW5Db250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgR2V0QmxvZyA9ICgpID0+IEdFVCgnQmxvZ0NvbnRyb2xsZXInKTtcclxuY29uc3QgR2V0QmxvZ0lkID0gKGRhdGEpID0+IEdFVF9JRCgnQmxvZ0NvbnRyb2xsZXI/aWQ9JyxkYXRhKVxyXG5jb25zdCBQb3N0QmxvZyA9IChkYXRhKSA9PiBQT1NUKCdCbG9nQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dEJsb2cgPSAoZGF0YSkgPT4gUFVUKCdCbG9nQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dEJsb2dDYXRlZ29yeSA9IChkYXRhKSA9PiBQVVQoJ0Jsb2dDYXRlZ29yeUNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBEZWxldGVCbG9nID0gKGlkKSA9PiBERUxFVEUoJ0Jsb2dDb250cm9sbGVyL2luZGV4X2RlbGV0ZT9pZD0nLGlkKTtcclxuY29uc3QgUHV0QmxvZ0ltYWdlID0gKGRhdGEpID0+IFBVVCgnQmxvZ0ltYWdlQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IEdldFNldHRpbmcgPSAoKSA9PiBHRVQoJ1NldHRpbmdDb250cm9sbGVyJyk7XHJcbmNvbnN0IFB1dFNldHRpbmcgPSAoZGF0YSkgPT4gUFVUKCdTZXR0aW5nQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IEdldFVzZXIgPSAoKSA9PiBHRVQoJ1VzZXJDb250cm9sbGVyJyk7XHJcbmNvbnN0IEdldFVzZXJJZCA9IChkYXRhKSA9PiBHRVRfSUQoJ1VzZXJDb250cm9sbGVyP2lkPScsZGF0YSlcclxuY29uc3QgUG9zdFVzZXIgPSAoZGF0YSkgPT4gUE9TVCgnVXNlckNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRVc2VyID0gKGRhdGEpID0+IFBVVCgnVXNlckNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRVc2VyUGFzcyA9IChkYXRhKSA9PiBQVVQoJ1VzZXJQYXNzQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IERlbGV0ZVVzZXIgPSAoaWQpID0+IERFTEVURSgnVXNlckNvbnRyb2xsZXIvaW5kZXhfZGVsZXRlP2lkPScsaWQpO1xyXG5jb25zdCBHZXRTbGlkZXNob3cgPSAoKSA9PiBHRVQoJ1NsaWRlc2hvd0NvbnRyb2xsZXInKTtcclxuY29uc3QgR2V0U2xpZGVzaG93SWQgPSAoZGF0YSkgPT4gR0VUX0lEKCdTbGlkZXNob3dDb250cm9sbGVyP2lkPScsZGF0YSlcclxuY29uc3QgUG9zdFNsaWRlc2hvdyA9IChkYXRhKSA9PiBQT1NUKCdTbGlkZXNob3dDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0U2xpZGVzaG93ID0gKGRhdGEpID0+IFBVVCgnU2xpZGVzaG93Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IERlbGV0ZVNsaWRlc2hvdyA9IChpZCkgPT4gREVMRVRFKCdTbGlkZXNob3dDb250cm9sbGVyL2luZGV4X2RlbGV0ZT9pZD0nLGlkKTtcclxuY29uc3QgUHV0U2xpZGVzaG93SW1hZ2UgPSAoZGF0YSkgPT4gUFVUKCdTbGlkZXNob3dJbWFnZUNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBHZXRDYXRlZ29yeSA9ICgpID0+IEdFVCgnQ2F0ZWdvcnlDb250cm9sbGVyJyk7XHJcbmNvbnN0IEdldENhdGVnb3J5SWQgPSAoZGF0YSkgPT4gR0VUX0lEKCdDYXRlZ29yeUNvbnRyb2xsZXI/aWQ9JyxkYXRhKVxyXG5jb25zdCBQb3N0Q2F0ZWdvcnkgPSAoZGF0YSkgPT4gUE9TVCgnQ2F0ZWdvcnlDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0Q2F0ZWdvcnkgPSAoZGF0YSkgPT4gUFVUKCdDYXRlZ29yeUNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBEZWxldGVDYXRlZ29yeSA9IChpZCkgPT4gREVMRVRFKCdDYXRlZ29yeUNvbnRyb2xsZXIvaW5kZXhfZGVsZXRlP2lkPScsaWQpO1xyXG5jb25zdCBQb3N0Rm90byA9IChkYXRhLG5hbWUpID0+IFBPU1RfRk9UTygnSW1hZ2VVcGxvYWQnLGRhdGEsbmFtZSk7XHJcbmNvbnN0IENvdW50QmxvZyA9ICgpID0+IEdFVCgnQ291bnRCbG9nQ29udHJvbGxlcicpO1xyXG5jb25zdCBDb3VudENhdGVnb3J5ID0gKCkgPT4gR0VUKCdDb3VudENhdGVnb3J5Q29udHJvbGxlcicpO1xyXG5jb25zdCBTZWFyY2hCbG9nID0gKGRhdGEpID0+IFNFQVJDSCgnU2VhcmNoQ29udHJvbGxlcj9pZD0nLGRhdGEpO1xyXG5jb25zdCBHZXRDb21tZW50ID0gKCkgPT4gR0VUKCdDb21tZW50Q29udHJvbGxlcicpO1xyXG5jb25zdCBHZXRDb21tZW50SWQgPSAoZGF0YSkgPT4gR0VUX0lEKCdDb21tZW50Q29udHJvbGxlcj9pZD0nLGRhdGEpXHJcbmNvbnN0IFBvc3RDb21tZW50ID0gKGRhdGEpID0+IFBPU1QoJ0NvbW1lbnRDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0Q29tbWVudCA9IChkYXRhKSA9PiBQVVQoJ0NvbW1lbnRDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgQ291bnRDb21tZW50ID0gKCkgPT4gR0VUKCdDb3VudENvbW1lbnRDb250cm9sbGVyJyk7XHJcblxyXG5jb25zdCBBUEkgPSB7XHJcbiAgICBQb3N0TG9naW4sXHJcbiAgICBHZXRCbG9nLFxyXG4gICAgR2V0QmxvZ0lkLFxyXG4gICAgUG9zdEJsb2csXHJcbiAgICBQdXRCbG9nLFxyXG4gICAgUHV0QmxvZ0NhdGVnb3J5LFxyXG4gICAgRGVsZXRlQmxvZyxcclxuICAgIFB1dEJsb2dJbWFnZSxcclxuICAgIEdldFNldHRpbmcsXHJcbiAgICBQdXRTZXR0aW5nLFxyXG4gICAgR2V0VXNlcixcclxuICAgIEdldFVzZXJJZCxcclxuICAgIFBvc3RVc2VyLFxyXG4gICAgUHV0VXNlcixcclxuICAgIFB1dFVzZXJQYXNzLFxyXG4gICAgRGVsZXRlVXNlcixcclxuICAgIEdldFNsaWRlc2hvdyxcclxuICAgIEdldFNsaWRlc2hvd0lkLFxyXG4gICAgUG9zdFNsaWRlc2hvdyxcclxuICAgIFB1dFNsaWRlc2hvdyxcclxuICAgIERlbGV0ZVNsaWRlc2hvdyxcclxuICAgIFB1dFNsaWRlc2hvd0ltYWdlLFxyXG4gICAgR2V0Q2F0ZWdvcnksXHJcbiAgICBHZXRDYXRlZ29yeUlkLFxyXG4gICAgUG9zdENhdGVnb3J5LFxyXG4gICAgUHV0Q2F0ZWdvcnksXHJcbiAgICBEZWxldGVDYXRlZ29yeSxcclxuICAgIFBvc3RGb3RvLFxyXG4gICAgQ291bnRCbG9nLFxyXG4gICAgQ291bnRDYXRlZ29yeSxcclxuICAgIFNlYXJjaEJsb2csXHJcbiAgICBHZXRDb21tZW50LFxyXG4gICAgR2V0Q29tbWVudElkLFxyXG4gICAgUG9zdENvbW1lbnQsXHJcbiAgICBQdXRDb21tZW50LFxyXG4gICAgQ291bnRDb21tZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFQSSJdLCJzb3VyY2VSb290IjoiIn0=