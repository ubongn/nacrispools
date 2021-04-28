webpackHotUpdate_N_E("pages/index",{

/***/ "./component/Header.jsx":
/*!******************************!*\
  !*** ./component/Header.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar */ "./component/TopBar.jsx");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");



var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Header.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var Header = function Header() {
  _s();

  var _useDisclosure = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onToggle = _useDisclosure.onToggle;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        as: "nav",
        align: "center",
        justify: "space-between",
        fontSize: 19 //fontFamily={"public/fonts/OpenSans-Italic.ttf"}
        ,
        wrap: "wrap",
        maxW: "90%",
        mx: "auto",
        py: {
          base: 2
        },
        px: {
          base: 4
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          flex: {
            base: 1,
            md: "auto"
          },
          ml: {
            base: -2
          },
          display: {
            base: "flex",
            md: "none"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
            onClick: onToggle,
            icon: isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["CloseIcon"], {
              w: 4,
              h: 4
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 24
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
              w: 7,
              h: 7
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 52
            }, _this),
            variant: "ghost",
            "aria-label": "Toggle Navigation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
          justify: {
            base: "center",
            sm: "start",
            md: "start"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
            src: "images/logo1.svg",
            w: "40",
            h: "20"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"] //wrap="wrap"
        , {
          display: {
            sm: isOpen ? "block" : "none",
            md: "flex"
          },
          width: {
            sm: "full",
            md: "auto"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            mt: {
              base: 4,
              md: 0
            },
            display: "block",
            mr: 6,
            color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#333333"),
            _hover: {
              textDecoration: "none",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
            },
            children: "WHAT WE DO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            mr: 6,
            mt: {
              base: 4,
              md: 0
            },
            display: "block",
            color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#333333"),
            _hover: {
              textDecoration: "none",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
            },
            children: "COMMERCIAL POOLS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            mr: 6,
            mt: {
              base: 4,
              md: 0
            },
            display: "block",
            color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#333333"),
            _hover: {
              textDecoration: "none",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
            },
            children: "POOLS GALLERY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            mr: 6,
            mt: {
              base: 4,
              md: 0
            },
            display: "block",
            color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#333333"),
            _hover: {
              textDecoration: "none",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
            },
            children: "SERVICES"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            mr: 6,
            mt: {
              base: 4,
              md: 0
            },
            display: "block",
            color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#333333"),
            _hover: {
              textDecoration: "none",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
            },
            children: "CONTACT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Header, "3GtpN+Gr7YODNLg/gTqa96dSM9M=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"]];
});

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uVG9nZ2xlIiwiYmFzZSIsIm1kIiwic20iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsdUJBQ1VDLHNFQUFhLEVBRHZCO0FBQUEsTUFDWEMsTUFEVyxrQkFDWEEsTUFEVztBQUFBLE1BQ0hDLFFBREcsa0JBQ0hBLFFBREc7O0FBR25CLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsb0RBQUQ7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUNFLFVBQUUsRUFBQyxLQURMO0FBRUUsYUFBSyxFQUFDLFFBRlI7QUFHRSxlQUFPLEVBQUMsZUFIVjtBQUlFLGdCQUFRLEVBQUUsRUFKWixDQUtFO0FBTEY7QUFNRSxZQUFJLEVBQUMsTUFOUDtBQU9FLFlBQUksRUFBQyxLQVBQO0FBUUUsVUFBRSxFQUFDLE1BUkw7QUFTRSxVQUFFLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FUTjtBQVVFLFVBQUUsRUFBRTtBQUFFQSxjQUFJLEVBQUU7QUFBUixTQVZOO0FBQUEsZ0NBWUUscUVBQUMscURBQUQ7QUFDQSxjQUFJLEVBQUU7QUFBRUEsZ0JBQUksRUFBRSxDQUFSO0FBQVdDLGNBQUUsRUFBRTtBQUFmLFdBRE47QUFFQSxZQUFFLEVBQUU7QUFBRUQsZ0JBQUksRUFBRSxDQUFDO0FBQVQsV0FGSjtBQUdBLGlCQUFPLEVBQUU7QUFBRUEsZ0JBQUksRUFBRSxNQUFSO0FBQWdCQyxjQUFFLEVBQUU7QUFBcEIsV0FIVDtBQUFB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QUUsTUFEVjtBQUVOQyxtQkFBSyxFQUFFRiwwRUFBaUIsQ0FBQyxTQUFEO0FBRmxCLGFBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekNGLGVBcURFLHFFQUFDLHFEQUFEO0FBQ0UsY0FBRSxFQUFFLENBRE47QUFFRSxjQUFFLEVBQUU7QUFBRUgsa0JBQUksRUFBRSxDQUFSO0FBQVdDLGdCQUFFLEVBQUU7QUFBZixhQUZOO0FBR0UsbUJBQU8sRUFBQyxPQUhWO0FBSUUsaUJBQUssRUFBRUUsMEVBQWlCLENBQUMsU0FBRCxDQUoxQjtBQUtFLGtCQUFNLEVBQUU7QUFDTkMsNEJBQWMsRUFBRSxNQURWO0FBRU5DLG1CQUFLLEVBQUVGLDBFQUFpQixDQUFDLFNBQUQ7QUFGbEIsYUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQXdHRCxDQTNHRDs7R0FBTVAsTTtVQUN5QkMsOEQsRUE2Q1ZNLGtFLEVBR0VBLGtFLEVBU0ZBLGtFLEVBR0VBLGtFLEVBU0ZBLGtFLEVBR0VBLGtFLEVBU0ZBLGtFLEVBR0VBLGtFLEVBU0ZBLGtFLEVBR0VBLGtFOzs7S0FqR2pCUCxNO0FBNkdTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMDI1NGNlY2NjZWM5OGUzNTgwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIEZsZXgsXHJcbiAgSW1hZ2UsXHJcbiAgTGluayxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBJY29uQnV0dG9uLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9Ub3BCYXJcIjtcclxuaW1wb3J0IHsgQ2xvc2VJY29uLCBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25Ub2dnbGUgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgZm9udFNpemU9ezE5fVxyXG4gICAgICAgICAgLy9mb250RmFtaWx5PXtcInB1YmxpYy9mb250cy9PcGVuU2Fucy1JdGFsaWMudHRmXCJ9XHJcbiAgICAgICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgICAgICBtYXhXPVwiOTAlXCJcclxuICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgICBweT17eyBiYXNlOiAyIH19XHJcbiAgICAgICAgICBweD17eyBiYXNlOiA0IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgIGZsZXg9e3sgYmFzZTogMSwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICBtbD17eyBiYXNlOiAtMiB9fVxyXG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XHJcbiAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgIGlzT3BlbiA/IDxDbG9zZUljb24gdz17NH0gaD17NH0gLz4gOiA8SGFtYnVyZ2VySWNvbiB3PXs3fSBoPXs3fSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cclxuICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJUb2dnbGUgTmF2aWdhdGlvblwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5PXt7IGJhc2U6IFwiY2VudGVyXCIsIHNtOiBcInN0YXJ0XCIsIG1kOiBcInN0YXJ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWFnZXMvbG9nbzEuc3ZnXCIgdz1cIjQwXCIgaD1cIjIwXCIgLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIC8vd3JhcD1cIndyYXBcIlxyXG4gICAgICAgICAgICBkaXNwbGF5PXt7IHNtOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH19XHJcbiAgICAgICAgICAgIHdpZHRoPXt7IHNtOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIil9XHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBXSEFUIFdFIERPXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiIzMzMzMzM1wiKX1cclxuICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENPTU1FUkNJQUwgUE9PTFNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUE9PTFMgR0FMTEVSWVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgbXI9ezZ9XHJcbiAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIil9XHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTRVJWSUNFU1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgbXI9ezZ9XHJcbiAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIil9XHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDT05UQUNUXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9