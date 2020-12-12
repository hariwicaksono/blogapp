webpackHotUpdate_N_E("pages/index",{

/***/ "./libs/axios.js":
/*!***********************!*\
  !*** ./libs/axios.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var RootPath = "http://localhost/blogapp-server/api/";
var ApiKey = 'blog123'; //const username = 'admin'
//const password = '1234'
//const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

var GET = function GET(path) {
  var promise = new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(RootPath + path, {
      headers: {
        //'Authorization': `basic ${token}`,
        'X-API-KEY': "".concat(ApiKey)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy9heGlvcy5qcyJdLCJuYW1lcyI6WyJSb290UGF0aCIsIkFwaUtleSIsIkdFVCIsInBhdGgiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJBeGlvcyIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsIkdFVF9JRCIsImlkIiwiR0VUX0JZX0lEIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiUE9TVCIsInBvc3QiLCJQVVQiLCJwdXQiLCJERUxFVEUiLCJTRUFSQ0giLCJlciIsIlBPU1RfRk9UTyIsIm5hbWUiLCJmb3JtZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic3RhdHVzIiwiUG9zdExvZ2luIiwiR2V0QmxvZyIsIkdldEJsb2dJZCIsIlBvc3RCbG9nIiwiUHV0QmxvZyIsIlB1dEJsb2dDYXRlZ29yeSIsIkRlbGV0ZUJsb2ciLCJQdXRCbG9nSW1hZ2UiLCJHZXRTZXR0aW5nIiwiUHV0U2V0dGluZyIsIkdldFVzZXIiLCJHZXRVc2VySWQiLCJQb3N0VXNlciIsIlB1dFVzZXIiLCJQdXRVc2VyUGFzcyIsIkRlbGV0ZVVzZXIiLCJHZXRTbGlkZXNob3ciLCJHZXRTbGlkZXNob3dJZCIsIlBvc3RTbGlkZXNob3ciLCJQdXRTbGlkZXNob3ciLCJEZWxldGVTbGlkZXNob3ciLCJQdXRTbGlkZXNob3dJbWFnZSIsIkdldENhdGVnb3J5IiwiR2V0Q2F0ZWdvcnlJZCIsIlBvc3RDYXRlZ29yeSIsIlB1dENhdGVnb3J5IiwiRGVsZXRlQ2F0ZWdvcnkiLCJQb3N0Rm90byIsIkNvdW50QmxvZyIsIkNvdW50Q2F0ZWdvcnkiLCJTZWFyY2hCbG9nIiwiR2V0Q29tbWVudCIsIkdldENvbW1lbnRJZCIsIlBvc3RDb21tZW50IiwiUHV0Q29tbWVudCIsIkNvdW50Q29tbWVudCIsIkFQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEs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QUFQQSxPQUZRO0FBR1JDLFdBQVMsRUFBVEEsU0FIUTtBQUlSQyxVQUFRLEVBQVJBLFFBSlE7QUFLUkMsU0FBTyxFQUFQQSxPQUxRO0FBTVJDLGlCQUFlLEVBQWZBLGVBTlE7QUFPUkMsWUFBVSxFQUFWQSxVQVBRO0FBUVJDLGNBQVksRUFBWkEsWUFSUTtBQVNSQyxZQUFVLEVBQVZBLFVBVFE7QUFVUkMsWUFBVSxFQUFWQSxVQVZRO0FBV1JDLFNBQU8sRUFBUEEsT0FYUTtBQVlSQyxXQUFTLEVBQVRBLFNBWlE7QUFhUkMsVUFBUSxFQUFSQSxRQWJRO0FBY1JDLFNBQU8sRUFBUEEsT0FkUTtBQWVSQyxhQUFXLEVBQVhBLFdBZlE7QUFnQlJDLFlBQVUsRUFBVkEsVUFoQlE7QUFpQlJDLGNBQVksRUFBWkEsWUFqQlE7QUFrQlJDLGdCQUFjLEVBQWRBLGNBbEJRO0FBbUJSQyxlQUFhLEVBQWJBLGFBbkJRO0FBb0JSQyxjQUFZLEVBQVpBLFlBcEJRO0FBcUJSQyxpQkFBZSxFQUFmQSxlQXJCUTtBQXNCUkMsbUJBQWlCLEVBQWpCQSxpQkF0QlE7QUF1QlJDLGFBQVcsRUFBWEEsV0F2QlE7QUF3QlJDLGVBQWEsRUFBYkEsYUF4QlE7QUF5QlJDLGNBQVksRUFBWkEsWUF6QlE7QUEwQlJDLGFBQVcsRUFBWEEsV0ExQlE7QUEyQlJDLGdCQUFjLEVBQWRBLGNBM0JRO0FBNEJSQyxVQUFRLEVBQVJBLFFBNUJRO0FBNkJSQyxXQUFTLEVBQVRBLFNBN0JRO0FBOEJSQyxlQUFhLEVBQWJBLGFBOUJRO0FBK0JSQyxZQUFVLEVBQVZBLFVBL0JRO0FBZ0NSQyxZQUFVLEVBQVZBLFVBaENRO0FBaUNSQyxjQUFZLEVBQVpBLFlBakNRO0FBa0NSQyxhQUFXLEVBQVhBLFdBbENRO0FBbUNSQyxZQUFVLEVBQVZBLFVBbkNRO0FBb0NSQyxjQUFZLEVBQVpBO0FBcENRLENBQVo7QUF1Q2VDLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdiOTgwN2U0NmViMWU4MGE2MGFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5jb25zdCBSb290UGF0aCA9IFwiaHR0cDovL2xvY2FsaG9zdC9ibG9nYXBwLXNlcnZlci9hcGkvXCJcclxuY29uc3QgQXBpS2V5ID0gJ2Jsb2cxMjMnXHJcbi8vY29uc3QgdXNlcm5hbWUgPSAnYWRtaW4nXHJcbi8vY29uc3QgcGFzc3dvcmQgPSAnMTIzNCdcclxuLy9jb25zdCB0b2tlbiA9IEJ1ZmZlci5mcm9tKGAke3VzZXJuYW1lfToke3Bhc3N3b3JkfWAsICd1dGY4JykudG9TdHJpbmcoJ2Jhc2U2NCcpXHJcblxyXG5jb25zdCBHRVQgPSAocGF0aCkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmdldChSb290UGF0aCtwYXRoLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAvLydBdXRob3JpemF0aW9uJzogYGJhc2ljICR7dG9rZW59YCxcclxuICAgICAgICAgICAnWC1BUEktS0VZJzogYCR7QXBpS2V5fWBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IEdFVF9JRCA9IChwYXRoLGlkKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgQXhpb3MuZ2V0KFJvb3RQYXRoK3BhdGgraWQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgR0VUX0JZX0lEID0gKHBhdGgsZGF0YSkgPT57XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xyXG4gICAgICAgICBBeGlvcy5nZXQoUm9vdFBhdGgrcGF0aCtkYXRhKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgfSxlcnI9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTsgXHJcbiAgICAgICAgICAgIHJldHVybiBlcnIucmVzcG9uc2U7XHJcbiAgICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxuIH1cclxuXHJcbmNvbnN0IFBPU1QgPSAocGF0aCxkYXRhKSA9PiB7XHJcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgQXhpb3MucG9zdChSb290UGF0aCtwYXRoLGRhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgUFVUID0gKHBhdGgsZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLnB1dChSb290UGF0aCtwYXRoLGRhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgREVMRVRFID0gKHBhdGgsZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmRlbGV0ZShSb290UGF0aCtwYXRoK2RhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxufVxyXG5cclxuY29uc3QgU0VBUkNIID0gKHBhdGgsZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgIEF4aW9zLmdldChSb290UGF0aCtwYXRoK2RhdGEpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IFBPU1RfRk9UTyA9IChwYXRoLGRhdGEsbmFtZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCdmb3RvJyxkYXRhLG5hbWUpXHJcbiAgICAgICAgQXhpb3MucG9zdChSb290UGF0aCtwYXRoLGZvcm1kYXRhKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEuc3RhdHVzKVxyXG4gICAgICAgfSwoZXJyKT0+e1xyXG4gICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIHJldHVybiBwcm9taXNlXHJcbn1cclxuXHJcbmNvbnN0IFBvc3RMb2dpbiA9IChkYXRhKSA9PiBQT1NUKCdMb2dpbkNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBHZXRCbG9nID0gKCkgPT4gR0VUKCdCbG9nQ29udHJvbGxlcicpO1xyXG5jb25zdCBHZXRCbG9nSWQgPSAoZGF0YSkgPT4gR0VUX0lEKCdCbG9nQ29udHJvbGxlcj9pZD0nLGRhdGEpXHJcbmNvbnN0IFBvc3RCbG9nID0gKGRhdGEpID0+IFBPU1QoJ0Jsb2dDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0QmxvZyA9IChkYXRhKSA9PiBQVVQoJ0Jsb2dDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgUHV0QmxvZ0NhdGVnb3J5ID0gKGRhdGEpID0+IFBVVCgnQmxvZ0NhdGVnb3J5Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IERlbGV0ZUJsb2cgPSAoaWQpID0+IERFTEVURSgnQmxvZ0NvbnRyb2xsZXIvaW5kZXhfZGVsZXRlP2lkPScsaWQpO1xyXG5jb25zdCBQdXRCbG9nSW1hZ2UgPSAoZGF0YSkgPT4gUFVUKCdCbG9nSW1hZ2VDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgR2V0U2V0dGluZyA9ICgpID0+IEdFVCgnU2V0dGluZ0NvbnRyb2xsZXInKTtcclxuY29uc3QgUHV0U2V0dGluZyA9IChkYXRhKSA9PiBQVVQoJ1NldHRpbmdDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgR2V0VXNlciA9ICgpID0+IEdFVCgnVXNlckNvbnRyb2xsZXInKTtcclxuY29uc3QgR2V0VXNlcklkID0gKGRhdGEpID0+IEdFVF9JRCgnVXNlckNvbnRyb2xsZXI/aWQ9JyxkYXRhKVxyXG5jb25zdCBQb3N0VXNlciA9IChkYXRhKSA9PiBQT1NUKCdVc2VyQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dFVzZXIgPSAoZGF0YSkgPT4gUFVUKCdVc2VyQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IFB1dFVzZXJQYXNzID0gKGRhdGEpID0+IFBVVCgnVXNlclBhc3NDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgRGVsZXRlVXNlciA9IChpZCkgPT4gREVMRVRFKCdVc2VyQ29udHJvbGxlci9pbmRleF9kZWxldGU/aWQ9JyxpZCk7XHJcbmNvbnN0IEdldFNsaWRlc2hvdyA9ICgpID0+IEdFVCgnU2xpZGVzaG93Q29udHJvbGxlcicpO1xyXG5jb25zdCBHZXRTbGlkZXNob3dJZCA9IChkYXRhKSA9PiBHRVRfSUQoJ1NsaWRlc2hvd0NvbnRyb2xsZXI/aWQ9JyxkYXRhKVxyXG5jb25zdCBQb3N0U2xpZGVzaG93ID0gKGRhdGEpID0+IFBPU1QoJ1NsaWRlc2hvd0NvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRTbGlkZXNob3cgPSAoZGF0YSkgPT4gUFVUKCdTbGlkZXNob3dDb250cm9sbGVyJyxkYXRhKTtcclxuY29uc3QgRGVsZXRlU2xpZGVzaG93ID0gKGlkKSA9PiBERUxFVEUoJ1NsaWRlc2hvd0NvbnRyb2xsZXIvaW5kZXhfZGVsZXRlP2lkPScsaWQpO1xyXG5jb25zdCBQdXRTbGlkZXNob3dJbWFnZSA9IChkYXRhKSA9PiBQVVQoJ1NsaWRlc2hvd0ltYWdlQ29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IEdldENhdGVnb3J5ID0gKCkgPT4gR0VUKCdDYXRlZ29yeUNvbnRyb2xsZXInKTtcclxuY29uc3QgR2V0Q2F0ZWdvcnlJZCA9IChkYXRhKSA9PiBHRVRfSUQoJ0NhdGVnb3J5Q29udHJvbGxlcj9pZD0nLGRhdGEpXHJcbmNvbnN0IFBvc3RDYXRlZ29yeSA9IChkYXRhKSA9PiBQT1NUKCdDYXRlZ29yeUNvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRDYXRlZ29yeSA9IChkYXRhKSA9PiBQVVQoJ0NhdGVnb3J5Q29udHJvbGxlcicsZGF0YSk7XHJcbmNvbnN0IERlbGV0ZUNhdGVnb3J5ID0gKGlkKSA9PiBERUxFVEUoJ0NhdGVnb3J5Q29udHJvbGxlci9pbmRleF9kZWxldGU/aWQ9JyxpZCk7XHJcbmNvbnN0IFBvc3RGb3RvID0gKGRhdGEsbmFtZSkgPT4gUE9TVF9GT1RPKCdJbWFnZVVwbG9hZCcsZGF0YSxuYW1lKTtcclxuY29uc3QgQ291bnRCbG9nID0gKCkgPT4gR0VUKCdDb3VudEJsb2dDb250cm9sbGVyJyk7XHJcbmNvbnN0IENvdW50Q2F0ZWdvcnkgPSAoKSA9PiBHRVQoJ0NvdW50Q2F0ZWdvcnlDb250cm9sbGVyJyk7XHJcbmNvbnN0IFNlYXJjaEJsb2cgPSAoZGF0YSkgPT4gU0VBUkNIKCdTZWFyY2hDb250cm9sbGVyP2lkPScsZGF0YSk7XHJcbmNvbnN0IEdldENvbW1lbnQgPSAoKSA9PiBHRVQoJ0NvbW1lbnRDb250cm9sbGVyJyk7XHJcbmNvbnN0IEdldENvbW1lbnRJZCA9IChkYXRhKSA9PiBHRVRfSUQoJ0NvbW1lbnRDb250cm9sbGVyP2lkPScsZGF0YSlcclxuY29uc3QgUG9zdENvbW1lbnQgPSAoZGF0YSkgPT4gUE9TVCgnQ29tbWVudENvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBQdXRDb21tZW50ID0gKGRhdGEpID0+IFBVVCgnQ29tbWVudENvbnRyb2xsZXInLGRhdGEpO1xyXG5jb25zdCBDb3VudENvbW1lbnQgPSAoKSA9PiBHRVQoJ0NvdW50Q29tbWVudENvbnRyb2xsZXInKTtcclxuXHJcbmNvbnN0IEFQSSA9IHtcclxuICAgIFBvc3RMb2dpbixcclxuICAgIEdldEJsb2csXHJcbiAgICBHZXRCbG9nSWQsXHJcbiAgICBQb3N0QmxvZyxcclxuICAgIFB1dEJsb2csXHJcbiAgICBQdXRCbG9nQ2F0ZWdvcnksXHJcbiAgICBEZWxldGVCbG9nLFxyXG4gICAgUHV0QmxvZ0ltYWdlLFxyXG4gICAgR2V0U2V0dGluZyxcclxuICAgIFB1dFNldHRpbmcsXHJcbiAgICBHZXRVc2VyLFxyXG4gICAgR2V0VXNlcklkLFxyXG4gICAgUG9zdFVzZXIsXHJcbiAgICBQdXRVc2VyLFxyXG4gICAgUHV0VXNlclBhc3MsXHJcbiAgICBEZWxldGVVc2VyLFxyXG4gICAgR2V0U2xpZGVzaG93LFxyXG4gICAgR2V0U2xpZGVzaG93SWQsXHJcbiAgICBQb3N0U2xpZGVzaG93LFxyXG4gICAgUHV0U2xpZGVzaG93LFxyXG4gICAgRGVsZXRlU2xpZGVzaG93LFxyXG4gICAgUHV0U2xpZGVzaG93SW1hZ2UsXHJcbiAgICBHZXRDYXRlZ29yeSxcclxuICAgIEdldENhdGVnb3J5SWQsXHJcbiAgICBQb3N0Q2F0ZWdvcnksXHJcbiAgICBQdXRDYXRlZ29yeSxcclxuICAgIERlbGV0ZUNhdGVnb3J5LFxyXG4gICAgUG9zdEZvdG8sXHJcbiAgICBDb3VudEJsb2csXHJcbiAgICBDb3VudENhdGVnb3J5LFxyXG4gICAgU2VhcmNoQmxvZyxcclxuICAgIEdldENvbW1lbnQsXHJcbiAgICBHZXRDb21tZW50SWQsXHJcbiAgICBQb3N0Q29tbWVudCxcclxuICAgIFB1dENvbW1lbnQsXHJcbiAgICBDb3VudENvbW1lbnRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQVBJIl0sInNvdXJjZVJvb3QiOiIifQ==