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



var _jsxFileName = "C:\\Users\\ubong\\Desktop\\job\\nacrispools\\component\\Header.jsx",
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
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      pos: "fixed",
      w: "100%",
      zIndex: 2,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        as: "nav",
        align: "center",
        justify: "space-between",
        fontSize: {
          sm: "md",
          md: "lg"
        },
        wrap: "wrap",
        maxW: "93%",
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
              lineNumber: 41,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
              w: 7,
              h: 7
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, _this),
            variant: "ghost",
            "aria-label": "Toggle Navigation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
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
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          display: {
            sm: isOpen ? "block" : "none",
            md: "flex"
          },
          width: {
            sm: "full",
            md: "auto"
          },
          "font-family": "Open Sans",
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
            lineNumber: 59,
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
            lineNumber: 71,
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
            lineNumber: 83,
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
            lineNumber: 95,
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
            lineNumber: 107,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlRGlzY2xvc3VyZSIsImlzT3BlbiIsIm9uVG9nZ2xlIiwic20iLCJtZCIsImJhc2UiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsdUJBQ1VDLHNFQUFhLEVBRHZCO0FBQUEsTUFDWEMsTUFEVyxrQkFDWEEsTUFEVztBQUFBLE1BQ0hDLFFBREcsa0JBQ0hBLFFBREc7O0FBR25CLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsb0RBQUQ7QUFBSyxTQUFHLEVBQUMsT0FBVDtBQUFpQixPQUFDLEVBQUMsTUFBbkI7QUFBMEIsWUFBTSxFQUFFLENBQWxDO0FBQUEsNkJBQ0UscUVBQUMscURBQUQ7QUFDRSxVQUFFLEVBQUMsS0FETDtBQUVFLGFBQUssRUFBQyxRQUZSO0FBR0UsZUFBTyxFQUFDLGVBSFY7QUFJRSxnQkFBUSxFQUFFO0FBQUVDLFlBQUUsRUFBRSxJQUFOO0FBQVlDLFlBQUUsRUFBRTtBQUFoQixTQUpaO0FBS0UsWUFBSSxFQUFDLE1BTFA7QUFNRSxZQUFJLEVBQUMsS0FOUDtBQU9FLFVBQUUsRUFBQyxNQVBMO0FBUUUsVUFBRSxFQUFFO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBUk47QUFTRSxVQUFFLEVBQUU7QUFBRUEsY0FBSSxFQUFFO0FBQVIsU0FUTjtBQUFBLGdDQVdFLHFFQUFDLHFEQUFEO0FBQ0UsY0FBSSxFQUFFO0FBQUVBLGdCQUFJLEVBQUUsQ0FBUjtBQUFXRCxjQUFFLEVBQUU7QUFBZixXQURSO0FBRUUsWUFBRSxFQUFFO0FBQUVD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QUFBZixhQUZOO0FBR0UsbUJBQU8sRUFBQyxPQUhWO0FBSUUsaUJBQUssRUFBRUUsMEVBQWlCLENBQUMsU0FBRCxDQUoxQjtBQUtFLGtCQUFNLEVBQUU7QUFDTkMsNEJBQWMsRUFBRSxNQURWO0FBRU5DLG1CQUFLLEVBQUVGLDBFQUFpQixDQUFDLFNBQUQ7QUFGbEIsYUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6Q0YsZUFxREUscUVBQUMscURBQUQ7QUFDRSxjQUFFLEVBQUUsQ0FETjtBQUVFLGNBQUUsRUFBRTtBQUFFRCxrQkFBSSxFQUFFLENBQVI7QUFBV0QsZ0JBQUUsRUFBRTtBQUFmLGFBRk47QUFHRSxtQkFBTyxFQUFDLE9BSFY7QUFJRSxpQkFBSyxFQUFFRSwwRUFBaUIsQ0FBQyxTQUFELENBSjFCO0FBS0Usa0JBQU0sRUFBRTtBQUNOQyw0QkFBYyxFQUFFLE1BRFY7QUFFTkMsbUJBQUssRUFBRUYsMEVBQWlCLENBQUMsU0FBRDtBQUZsQixhQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBLGtCQURGO0FBMkdELENBOUdEOztHQUFNUCxNO1VBQ3lCQyw4RCxFQWdEVk0sa0UsRUFHRUEsa0UsRUFTRkEsa0UsRUFHRUEsa0UsRUFTRkEsa0UsRUFHRUEsa0UsRUFTRkEsa0UsRUFHRUEsa0UsRUFTRkEsa0UsRUFHRUEsa0U7OztLQXBHakJQLE07QUFnSFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzOTMwMzg5NmI4YTk0OTk4M2IzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgSW1hZ2UsXHJcbiAgTGluayxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBJY29uQnV0dG9uLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9Ub3BCYXJcIjtcclxuaW1wb3J0IHsgQ2xvc2VJY29uLCBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25Ub2dnbGUgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPEJveCBwb3M9XCJmaXhlZFwiIHc9XCIxMDAlXCIgekluZGV4PXsyfT5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgZm9udFNpemU9e3sgc206IFwibWRcIiwgbWQ6IFwibGdcIiB9fVxyXG4gICAgICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICAgICAgbWF4Vz1cIjkzJVwiXHJcbiAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgcHk9e3sgYmFzZTogMiB9fVxyXG4gICAgICAgICAgcHg9e3sgYmFzZTogNCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGZsZXg9e3sgYmFzZTogMSwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgIG1sPXt7IGJhc2U6IC0yIH19XHJcbiAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxyXG4gICAgICAgICAgICAgIGljb249e1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIHc9ezR9IGg9ezR9IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8SGFtYnVyZ2VySWNvbiB3PXs3fSBoPXs3fSAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXJpYW50PXtcImdob3N0XCJ9XHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XCJUb2dnbGUgTmF2aWdhdGlvblwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPEZsZXgganVzdGlmeT17eyBiYXNlOiBcImNlbnRlclwiLCBzbTogXCJzdGFydFwiLCBtZDogXCJzdGFydFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28xLnN2Z1wiIHc9XCI0MFwiIGg9XCIyMFwiIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBkaXNwbGF5PXt7IHNtOiBpc09wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgbWQ6IFwiZmxleFwiIH19XHJcbiAgICAgICAgICAgIHdpZHRoPXt7IHNtOiBcImZ1bGxcIiwgbWQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5PXtcIk9wZW4gU2Fuc1wifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV0hBVCBXRSBET1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgbXI9ezZ9XHJcbiAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIil9XHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDT01NRVJDSUFMIFBPT0xTXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiIzMzMzMzM1wiKX1cclxuICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBPT0xTIEdBTExFUllcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU0VSVklDRVNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==