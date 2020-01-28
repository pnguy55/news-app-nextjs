webpackHotUpdate("static\\development\\pages\\story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentList */ "./components/CommentList.js");
var _jsxFileName = "C:\\react-projects\\news-app\\components\\Comment.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return __jsx("div", {
    className: "jsx-2657397767" + " " + 'comment',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2657397767" + " " + 'comment-user',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, comment.user), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-2657397767" + " " + 'comment-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), _CommentList__WEBPACK_IMPORTED_MODULE_2__["default"].comments && __jsx("div", {
    className: "jsx-2657397767" + " " + 'nested-comments',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, comment.comments.map(function (nestedComment) {
    return __jsx(Comment, {
      key: nestedComment.id,
      comment: nestedComment,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2657397767",
    __self: this
  }, ".comment.jsx-2657397767{margin-bottom:1.5em;}.comment-user.jsx-2657397767{font-size:.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-2657397767{font-size:.9rem;}.comment-content.jsx-2657397767 p{margin:0;margin-bottom:.5em;word-wrap:break-word;}.comment-content.jsx-2657397767 a{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-2657397767 pre{max-width:100%;overflow:scroll;}.nested-comments.jsx-2657397767{margin-top:1em;border-left:1px solid rgba(0,0,0,.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxyZWFjdC1wcm9qZWN0c1xcbmV3cy1hcHBcXGNvbXBvbmVudHNcXENvbW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYW9CLEFBR2lDLEFBR0wsQUFLQyxBQUdQLEFBS0UsQUFJSSxBQUlBLFNBWkksRUFLTyxJQUlWLEFBSXdCLENBckJ2QixBQUtyQixJQVJBLFFBWXlCLEdBU3pCLEVBakJ3QixnQkFTeEIsR0FZcUIsQ0FwQnJCLGdCQXFCQSxFQVRBIiwiZmlsZSI6IkM6XFxyZWFjdC1wcm9qZWN0c1xcbmV3cy1hcHBcXGNvbXBvbmVudHNcXENvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudExpc3QgZnJvbSBcIi4vQ29tbWVudExpc3RcIjtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudC11c2VyJz57Y29tbWVudC51c2VyfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LWNvbnRlbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29tbWVudC5jb250ZW50fX0gLz5cclxuICAgICAgICB7Q29tbWVudExpc3QuY29tbWVudHMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmVzdGVkLWNvbW1lbnRzJz5cclxuICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzLm1hcChuZXN0ZWRDb21tZW50ID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCBrZXk9e25lc3RlZENvbW1lbnQuaWR9IGNvbW1lbnQ9eyBuZXN0ZWRDb21tZW50IH0+PC9Db21tZW50PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50LXVzZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6LjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbW1lbnQtY29udGVudCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29tbWVudC1jb250ZW50IDpnbG9iYWwoYSkge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y2MDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb21tZW50LWNvbnRlbnQgOmdsb2JhbChwcmUpIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmVzdGVkLWNvbW1lbnRzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdfQ== */\n/*@ sourceURL=C:\\\\react-projects\\\\news-app\\\\components\\\\Comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.f70246ff82c0e2013fae.hot-update.js.map