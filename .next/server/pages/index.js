module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/About.jsx":
/*!*****************************!*\
  !*** ./component/About.jsx ***!
  \*****************************/
/*! exports provided: default, Blob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blob", function() { return Blob; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\About.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function About() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxW: "90%",
    mt: -10,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      align: "center",
      spacing: {
        base: 8,
        md: 10
      },
      py: {
        base: 20,
        md: 28
      },
      direction: {
        base: "column",
        md: "row"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
        flex: 1,
        spacing: {
          base: 5,
          md: 10
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
          lineHeight: 1.1,
          fontWeight: 400,
          fontSize: {
            base: "2xl",
            sm: "2xl",
            lg: "3xl"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            as: "span",
            letterSpacing: 8,
            children: "WELCOME!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            as: "span",
            color: "gray.400",
            fontWeight: 200,
            fontSize: {
              base: "1",
              sm: "3xl",
              lg: "4xl"
            },
            children: "Nacris Pools"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            as: "span",
            color: "#7A7CA8",
            fontSize: {
              base: "l",
              sm: "2xl",
              lg: "3xl"
            },
            children: "We Are Swimming Pool Service Experts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          color: "gray.500",
          fontFamily: 'sans-serif',
          children: "Nacris Pools is involved in the construction of commercial, semi commercial and residential swimming pools as well as the renovation and repair of existing pools.We are also dealing in Pool Surround Equipment, Swimming Pool Cleaning Equipment, Under Water Light, Swimming Pool Furniture, Competition Equipment, Swimming Pool Chemical, Swimming Pool Inflatable, Life Saving Equipment, Counter Current Nozzle, Swimming Filteration Plant, Pool Pump, Pool Heater etc."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        flex: 1,
        justify: "center",
        align: "center",
        position: "relative",
        w: "full",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Blob, {
          w: "150%",
          h: "150%",
          position: "absolute",
          top: "-20%",
          left: 0,
          zIndex: -1,
          color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("gray.50", "gray.400")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          position: "relative",
          height: "300px",
          rounded: "2xl",
          boxShadow: "2xl",
          width: "full",
          overflow: "hidden",
          borderRadius: "none",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            alt: "About Image",
            align: "center",
            w: "100%",
            h: "100%",
            src: "images/pool1_400.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }, this);
}
const Blob = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], _objectSpread(_objectSpread({
    width: "100%",
    viewBox: "0 0 578 440",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z",
      fill: "currentColor"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 7
  }, undefined);
};

/***/ }),

/***/ "./component/Footer.jsx":
/*!******************************!*\
  !*** ./component/Footer.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bi */ "react-icons/bi");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FooterCopyright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FooterCopyright */ "./component/FooterCopyright.jsx");


var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Footer.jsx";





function Footer() {
  const ListHeader = ({
    children
  }) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: "500",
      fontSize: {
        base: "1",
        sm: "sm",
        lg: "lg"
      },
      mb: 2,
      textColor: "white",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      background: "#2f344e",
      bgSize: "cover",
      w: "100%",
      h: "300px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        maxW: "80%",
        mx: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["SimpleGrid"], {
          columns: [2, null, 3],
          spacing: "30px",
          mt: 10,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            mt: 10,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Image"], {
                src: "images/logo1.svg",
                w: "40",
                h: "20"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
              textColor: "white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["PhoneIcon"], {
                w: 3,
                h: 3,
                color: "gray.400",
                margin: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, this), "+233 57 289 0312"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
              textColor: "white",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["EmailIcon"], {
                color: "gray.400",
                margin: "3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this), "info@nacrispools.com"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            py: 10,
            ml: 20,
            mt: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
              align: "flex-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListHeader, {
                children: "Recent Post"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                href: "#",
                textColor: "#337ab7",
                _hover: {
                  textDecoration: "none",
                  color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
                },
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                href: "#",
                textColor: "#337ab7",
                _hover: {
                  textDecoration: "none",
                  color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
                },
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                href: "#",
                textColor: "#337ab7",
                _hover: {
                  textDecoration: "none",
                  color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
                },
                children: "Pool Gallery"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                href: "#",
                textColor: "#337ab7",
                _hover: {
                  textDecoration: "none",
                  color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
                },
                children: "Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                href: "#",
                textColor: "#337ab7",
                _hover: {
                  textDecoration: "none",
                  color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("#7A7CA8")
                },
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
            py: 10,
            ml: 20,
            mt: 5,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
              align: "flex-start",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListHeader, {
                children: "Get News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
                align: "flex-start",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ListHeader, {
                  children: "Subscribe for latest news"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 110,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
                  direction: "row",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
                    placeholder: "Your email address",
                    bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("blackAlpha.100", "whiteAlpha.100"),
                    border: 0,
                    _focus: {
                      bg: "whiteAlpha.300"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
                    bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("blue.400", "blue.800"),
                    color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])("white", "gray.800"),
                    _hover: {
                      bg: "blue.600"
                    },
                    "aria-label": "Subscribe",
                    icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__["BiMailSend"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 29
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FooterCopyright__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./component/FooterCopyright.jsx":
/*!***************************************!*\
  !*** ./component/FooterCopyright.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterCopyright; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\FooterCopyright.jsx";



function FooterCopyright() {
  const SocialButton = ({
    children,
    label,
    href
  }) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["chakra"].button, {
      bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("whiteAlpha.500"),
      rounded: "full",
      w: 8,
      h: 8,
      cursor: "pointer",
      as: "a",
      href: href,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background 0.3s ease",
      _hover: {
        bg: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("blackAlpha.200", "whiteAlpha.200")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VisuallyHidden"], {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      background: "#010517",
      bgSize: "cover",
      w: "100%",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"],
        maxW: "6xl",
        wrap: "wrap",
        py: 4,
        direction: {
          base: "column",
          md: "row"
        },
        spacing: 4,
        justify: {
          base: "center",
          md: "space-between"
        },
        align: {
          base: "center",
          md: "center"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          textColor: "whiteAlpha.600",
          children: "\xA9 2021 Bakorlabs. All rights reserved"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
          direction: "row",
          spacing: 6,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SocialButton, {
            label: "Twitter",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitter"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SocialButton, {
            label: "YouTube",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebook"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SocialButton, {
            label: "Instagram",
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInstagram"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./component/Header.jsx":
/*!******************************!*\
  !*** ./component/Header.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TopBar */ "./component/TopBar.jsx");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Header.jsx";





const Header = () => {
  const {
    isOpen,
    onToggle
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TopBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
              w: 7,
              h: 7
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 19
            }, undefined),
            variant: "ghost",
            "aria-label": "Toggle Navigation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
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
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          display: {
            sm: isOpen ? "block" : "none",
            md: "flex"
          },
          width: {
            sm: "full",
            md: "auto"
          },
          "font-family": 'Open Sans',
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
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
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
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
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
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
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
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Link"], {
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
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./component/Info.jsx":
/*!****************************!*\
  !*** ./component/Info.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Info.jsx";


function Info() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      mt: 10,
      bgImage: "url('/images/bg1.jpg')",
      bgSize: "cover",
      bgRepeat: "no-repeat",
      w: "100%",
      h: "400px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        w: "full",
        align: "center",
        justify: "center",
        px: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useBreakpointValue"])({
          base: 4,
          md: 8
        }),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          maxW: "2xl",
          align: "flex-start",
          spacing: 6,
          pt: 10,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            pt: 10,
            lineHeight: 1.2,
            color: "whiteAlpha.900",
            fontWeight: 400,
            fontSize: {
              base: "1",
              sm: "3xl",
              lg: "4xl"
            },
            children: "Please Feel Free To Contact Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            pt: 10,
            fontSize: {
              base: "1",
              sm: "2xl",
              lg: "2xl"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: "white",
              children: " Hotline: +233 57 289 0312"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              color: "white",
              children: "Mail Address: info@nacrispools.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./component/Project.jsx":
/*!*******************************!*\
  !*** ./component/Project.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Project.jsx";


function Project() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      maxW: "90%",
      mt: 10,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          as: "span",
          color: "gray.400",
          fontWeight: 300,
          fontSize: {
            base: "1",
            sm: "3xl",
            lg: "4xl"
          },
          children: "OUR RECENT PROJECTS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        mt: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
          columns: [2, null, 3],
          spacing: "20px",
          mt: 10,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic1.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic2.jpg",
            alt: "pool image2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic5.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic4.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic3.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic6.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic7.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic13.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
            src: "/gallery/pic14.jpg",
            alt: "pool image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./component/Services.jsx":
/*!********************************!*\
  !*** ./component/Services.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Services; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/layout */ "@chakra-ui/layout");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ "react-icons/gi");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Services.jsx";



function Services() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxW: "90%",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Center"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        as: "span",
        color: "gray.400",
        fontWeight: 200,
        fontSize: {
          base: "1",
          sm: "3xl",
          lg: "4xl"
        },
        children: "OUR SERVICES"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["SimpleGrid"], {
      columns: [2, null, 3],
      spacing: "40px",
      mt: 10,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        p: 5,
        _hover: {
          shadow: "md",
          borderWidth: "1px",
          flex: "1",
          borderRadius: "md",
          fontWeight: "semibold"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Square"], {
          border: "4px",
          color: "white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiConcreteBag"], {
            size: 40,
            color: "gray"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Swimming Pool Construction"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "14px",
          textAlign: "center",
          color: "#7A7CA8",
          children: "We are among the prominent consultant for swimming pool construction."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        p: 5,
        _hover: {
          shadow: "md",
          borderWidth: "1px",
          flex: "1",
          borderRadius: "md",
          fontWeight: "semibold"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Square"], {
          border: "4px",
          color: "white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiCrane"], {
            size: 40,
            color: "gray"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Swimming Pool Maintenance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "14px",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Let our trained proffessionals take care of all your pool and spa needs."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        p: 5,
        _hover: {
          shadow: "md",
          borderWidth: "1px",
          flex: "1",
          borderRadius: "md",
          fontWeight: "semibold"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Square"], {
          border: "4px",
          color: "white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiOpenChest"], {
            size: 40,
            color: "gray"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Steam Sauna Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "14px",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Equipped with sophisticated automation system, Steam and Sauna Products generates a pleasing level of heat that is skin friendly and healthy."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        p: 5,
        _hover: {
          shadow: "md",
          borderWidth: "1px",
          flex: "1",
          borderRadius: "md",
          fontWeight: "semibold"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Square"], {
          border: "4px",
          color: "white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiShipWheel"], {
            size: 40,
            color: "gray"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Repair & Renovation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "14px",
          textAlign: "center",
          color: "#7A7CA8",
          children: "To meet the variegated requirements of our customers, we are providing these Swimming Pool Repairing Services."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        p: 5,
        _hover: {
          shadow: "md",
          borderWidth: "1px",
          flex: "1",
          borderRadius: "md",
          fontWeight: "semibold"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Square"], {
          border: "24px",
          color: "white",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__["GiMonkeyWrench"], {
            size: 40,
            color: "gray"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "18px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Jacuzzi Spa Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          fontSize: "14px",
          textAlign: "center",
          color: "#7A7CA8",
          children: "Available with us an assortment of Spa and Jacuzzi products that adds lavishness and rejuvenation to your bathroom."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./component/Slider.jsx":
/*!******************************!*\
  !*** ./component/Slider.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\Slider.jsx";



class Slider extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      autoPlay: true,
      showThumbs: false,
      infiniteLoop: true,
      showStatus: false,
      dynamicHeight: true,
      stopOnHover: false,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/carousel5.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/carousel2.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/carousel3.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/carousel4.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "images/carousel6.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./component/TopBar.jsx":
/*!******************************!*\
  !*** ./component/TopBar.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\component\\TopBar.jsx";



function TopBar() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      align: "center",
      justify: "space-between",
      flex: {
        base: 2
      },
      lineHeight: "40px",
      fontSize: "16",
      wrap: "wrap",
      px: "15",
      mx: "auto",
      maxW: "90%",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        mt: 1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["PhoneIcon"], {
            w: 3,
            h: 3,
            color: "gray.400",
            margin: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), "+233 57 289 0312"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          pl: "4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__["EmailIcon"], {
            color: "gray.400",
            margin: "3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), "info@nacrispools.com"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
          separator: "|",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbLink"], {
              href: "#",
              mx: "2",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("#000"),
              _hover: {
                textDecoration: "none",
                color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("#7A7CA8")
              },
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbLink"], {
              href: "#",
              mx: "2",
              color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("#000"),
              _hover: {
                textDecoration: "none",
                color: Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])("#7A7CA8")
              },
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              colorScheme: "telegram",
              borderRadius: "0",
              children: "Make An Appointment"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/About */ "./component/About.jsx");
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Header */ "./component/Header.jsx");
/* harmony import */ var _component_Info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Info */ "./component/Info.jsx");
/* harmony import */ var _component_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Project */ "./component/Project.jsx");
/* harmony import */ var _component_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/Services */ "./component/Services.jsx");
/* harmony import */ var _component_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/Slider */ "./component/Slider.jsx");
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../component/Footer */ "./component/Footer.jsx");

var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\pages\\index.jsx";








function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Slider__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_About__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Services__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Info__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/layout":
/*!************************************!*\
  !*** external "@chakra-ui/layout" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bi");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/gi":
/*!*********************************!*\
  !*** external "react-icons/gi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/gi");

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0Fib3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvRm9vdGVyQ29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudC9TZXJ2aWNlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1NsaWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L1RvcEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2xheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9naVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBYm91dCIsImJhc2UiLCJtZCIsInNtIiwibGciLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkJsb2IiLCJwcm9wcyIsIkZvb3RlciIsIkxpc3RIZWFkZXIiLCJjaGlsZHJlbiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJiZyIsIkZvb3RlckNvcHlyaWdodCIsIlNvY2lhbEJ1dHRvbiIsImxhYmVsIiwiaHJlZiIsIlN0YWNrIiwiSGVhZGVyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJ1c2VEaXNjbG9zdXJlIiwiSW5mbyIsInVzZUJyZWFrcG9pbnRWYWx1ZSIsIlByb2plY3QiLCJTZXJ2aWNlcyIsInNoYWRvdyIsImJvcmRlcldpZHRoIiwiZmxleCIsImJvcmRlclJhZGl1cyIsImZvbnRXZWlnaHQiLCJTbGlkZXIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJUb3BCYXIiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQVlpQixTQUFTQSxLQUFULEdBQWlCO0FBQzlCLHNCQUNFLHFFQUFDLDBE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QkFBWSxFQUFDLEdBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWdFRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVMrQixJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsQzs7Ozs7Ozs7Ozs7QUNyQkQsNkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzeFwiKTtcbiIsImltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBTdGFjayxcclxuICAgIEZsZXgsXHJcbiAgICBCb3gsXHJcbiAgICBIZWFkaW5nLFxyXG4gICAgVGV4dCxcclxuICAgIEltYWdlLFxyXG4gICAgSWNvbixcclxuICAgIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXIgbWF4Vz17XCI5MCVcIn0gbXQ9ey0xMH0+XHJcbiAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICBhbGlnbj17XCJjZW50ZXJcIn1cclxuICAgICAgICAgIHNwYWNpbmc9e3sgYmFzZTogOCwgbWQ6IDEwIH19XHJcbiAgICAgICAgICBweT17eyBiYXNlOiAyMCwgbWQ6IDI4IH19XHJcbiAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3RhY2sgZmxleD17MX0gc3BhY2luZz17eyBiYXNlOiA1LCBtZDogMTAgfX0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nXHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodD17MS4xfVxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiBcIjJ4bFwiLCBzbTogXCIyeGxcIiwgbGc6IFwiM3hsXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0IGFzPXtcInNwYW5cIn0gbGV0dGVyU3BhY2luZz17OH0+XHJcbiAgICAgICAgICAgICAgICBXRUxDT01FIVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgYXM9e1wic3BhblwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wiZ3JheS40MDBcIn1cclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMVwiLCBzbTogXCIzeGxcIiwgbGc6IFwiNHhsXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBOYWNyaXMgUG9vbHNcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIGFzPXtcInNwYW5cIn1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIiM3QTdDQThcIn1cclxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwibFwiLCBzbTogXCIyeGxcIiwgbGc6IFwiM3hsXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBXZSBBcmUgU3dpbW1pbmcgUG9vbCBTZXJ2aWNlIEV4cGVydHNcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQgY29sb3I9e1wiZ3JheS41MDBcIn0gZm9udEZhbWlseT17J3NhbnMtc2VyaWYnfT5cclxuICAgICAgICAgICAgICBOYWNyaXMgUG9vbHMgaXMgaW52b2x2ZWQgaW4gdGhlIGNvbnN0cnVjdGlvbiBvZiBjb21tZXJjaWFsLCBzZW1pXHJcbiAgICAgICAgICAgICAgY29tbWVyY2lhbCBhbmQgcmVzaWRlbnRpYWwgc3dpbW1pbmcgcG9vbHMgYXMgd2VsbCBhcyB0aGUgcmVub3ZhdGlvblxyXG4gICAgICAgICAgICAgIGFuZCByZXBhaXIgb2YgZXhpc3RpbmcgcG9vbHMuV2UgYXJlIGFsc28gZGVhbGluZyBpbiBQb29sIFN1cnJvdW5kXHJcbiAgICAgICAgICAgICAgRXF1aXBtZW50LCBTd2ltbWluZyBQb29sIENsZWFuaW5nIEVxdWlwbWVudCwgVW5kZXIgV2F0ZXIgTGlnaHQsXHJcbiAgICAgICAgICAgICAgU3dpbW1pbmcgUG9vbCBGdXJuaXR1cmUsIENvbXBldGl0aW9uIEVxdWlwbWVudCwgU3dpbW1pbmcgUG9vbFxyXG4gICAgICAgICAgICAgIENoZW1pY2FsLCBTd2ltbWluZyBQb29sIEluZmxhdGFibGUsIExpZmUgU2F2aW5nIEVxdWlwbWVudCwgQ291bnRlclxyXG4gICAgICAgICAgICAgIEN1cnJlbnQgTm96emxlLCBTd2ltbWluZyBGaWx0ZXJhdGlvbiBQbGFudCwgUG9vbCBQdW1wLCBQb29sIEhlYXRlclxyXG4gICAgICAgICAgICAgIGV0Yy5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGZsZXg9ezF9XHJcbiAgICAgICAgICAgIGp1c3RpZnk9e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgICBwb3NpdGlvbj17XCJyZWxhdGl2ZVwifVxyXG4gICAgICAgICAgICB3PXtcImZ1bGxcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEJsb2JcclxuICAgICAgICAgICAgICB3PXtcIjE1MCVcIn1cclxuICAgICAgICAgICAgICBoPXtcIjE1MCVcIn1cclxuICAgICAgICAgICAgICBwb3NpdGlvbj17XCJhYnNvbHV0ZVwifVxyXG4gICAgICAgICAgICAgIHRvcD17XCItMjAlXCJ9XHJcbiAgICAgICAgICAgICAgbGVmdD17MH1cclxuICAgICAgICAgICAgICB6SW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNTBcIiwgXCJncmF5LjQwMFwiKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtcInJlbGF0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtcIjMwMHB4XCJ9XHJcbiAgICAgICAgICAgICAgcm91bmRlZD17XCIyeGxcIn1cclxuICAgICAgICAgICAgICBib3hTaGFkb3c9e1wiMnhsXCJ9XHJcbiAgICAgICAgICAgICAgd2lkdGg9e1wiZnVsbFwifVxyXG4gICAgICAgICAgICAgIG92ZXJmbG93PXtcImhpZGRlblwifVxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17XCJub25lXCJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD17XCJBYm91dCBJbWFnZVwifVxyXG4gICAgICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgICAgICB3PXtcIjEwMCVcIn1cclxuICAgICAgICAgICAgICAgIGg9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgc3JjPXtcImltYWdlcy9wb29sMV80MDAuanBnXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgY29uc3QgQmxvYiA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEljb25cclxuICAgICAgICB3aWR0aD17XCIxMDAlXCJ9XHJcbiAgICAgICAgdmlld0JveD1cIjAgMCA1NzggNDQwXCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgZD1cIk0yMzkuMTg0IDQzOS40NDNjLTU1LjEzLTUuNDE5LTExMC4yNDEtMjEuMzY1LTE1MS4wNzQtNTguNzY3QzQyLjMwNyAzMzguNzIyLTcuNDc4IDI4Mi43MjkuOTM4IDIyMS4yMTdjOC40MzMtNjEuNjQ0IDc4Ljg5Ni05MS4wNDggMTI2Ljg3MS0xMzAuNzEyIDM0LjMzNy0yOC4zODggNzAuMTk4LTUxLjM0OCAxMTIuMDA0LTY2Ljc4QzI4Mi4zNCA4LjAyNCAzMjUuMzgyLTMuMzY5IDM3MC41MTguOTA0YzU0LjAxOSA1LjExNSAxMTIuNzc0IDEwLjg4NiAxNTAuODgxIDQ5LjQ4MiAzOS45MTYgNDAuNDI3IDQ5LjQyMSAxMDAuNzUzIDUzLjM4NSAxNTcuNDAyIDQuMTMgNTkuMDE1IDExLjI1NSAxMjguNDQtMzAuNDQ0IDE3MC40NC00MS4zODMgNDEuNjgzLTExMS42IDE5LjEwNi0xNjkuMjEzIDMwLjY2My00Ni42OCA5LjM2NC04OC41NiAzNS4yMS0xMzUuOTQzIDMwLjU1MXpcIlxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9JY29uPlxyXG4gICAgKTtcclxuICB9O1xyXG4gICIsImltcG9ydCB7IEVtYWlsSWNvbiwgUGhvbmVJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQ29udGFpbmVyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgSW1hZ2UsXHJcbiAgSW5wdXQsXHJcbiAgTGluayxcclxuICBTaW1wbGVHcmlkLFxyXG4gIFN0YWNrLFxyXG4gIFRleHQsXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCaU1haWxTZW5kIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmltcG9ydCBGb290ZXJDb3B5cmlnaHQgZnJvbSBcIi4vRm9vdGVyQ29weXJpZ2h0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IExpc3RIZWFkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGZvbnRXZWlnaHQ9e1wiNTAwXCJ9XHJcbiAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIxXCIsIHNtOiBcInNtXCIsIGxnOiBcImxnXCIgfX1cclxuICAgICAgICBtYj17Mn1cclxuICAgICAgICB0ZXh0Q29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBiYWNrZ3JvdW5kPVwiIzJmMzQ0ZVwiIGJnU2l6ZT17XCJjb3ZlclwifSB3PVwiMTAwJVwiIGg9XCIzMDBweFwiPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4Vz17XCI4MCVcIn0gbXg9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMiwgbnVsbCwgM119IHNwYWNpbmc9XCIzMHB4XCIgbXQ9ezEwfT5cclxuICAgICAgICAgICAgPEJveCBtdD17MTB9PlxyXG4gICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28xLnN2Z1wiIHc9XCI0MFwiIGg9XCIyMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPEJveCB0ZXh0Q29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgPFBob25lSWNvbiB3PXszfSBoPXszfSBjb2xvcj1cImdyYXkuNDAwXCIgbWFyZ2luPXtcIjNcIn0gLz5cclxuICAgICAgICAgICAgICAgICsyMzMgNTcgMjg5IDAzMTJcclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IHRleHRDb2xvcj1cIndoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8RW1haWxJY29uIGNvbG9yPVwiZ3JheS40MDBcIiBtYXJnaW49e1wiM1wifSAvPlxyXG4gICAgICAgICAgICAgICAgaW5mb0BuYWNyaXNwb29scy5jb21cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggcHk9ezEwfSBtbD17MjB9IG10PXs1fT5cclxuICAgICAgICAgICAgICA8U3RhY2sgYWxpZ249e1wiZmxleC1zdGFydFwifT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SGVhZGVyPlJlY2VudCBQb3N0PC9MaXN0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj17XCIjMzM3YWI3XCJ9XHJcbiAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcIiNcIn1cclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPXtcIiMzMzdhYjdcIn1cclxuICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXtcIiNcIn1cclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPXtcIiMzMzdhYjdcIn1cclxuICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBvb2wgR2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj17XCIjMzM3YWI3XCJ9XHJcbiAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj17XCIjXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcj17XCIjMzM3YWI3XCJ9XHJcbiAgICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggcHk9ezEwfSBtbD17MjB9IG10PXs1fT5cclxuICAgICAgICAgICAgICA8U3RhY2sgYWxpZ249e1wiZmxleC1zdGFydFwifT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SGVhZGVyPkdldCBOZXdzPC9MaXN0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFN0YWNrIGFsaWduPXtcImZsZXgtc3RhcnRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SGVhZGVyPlN1YnNjcmliZSBmb3IgbGF0ZXN0IG5ld3M8L0xpc3RIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiWW91ciBlbWFpbCBhZGRyZXNzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja0FscGhhLjEwMFwiLCBcIndoaXRlQWxwaGEuMTAwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgX2ZvY3VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnOiBcIndoaXRlQWxwaGEuMzAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsdWUuNDAwXCIsIFwiYmx1ZS44MDBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZVwiLCBcImdyYXkuODAwXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnOiBcImJsdWUuNjAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN1YnNjcmliZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8QmlNYWlsU2VuZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxGb290ZXJDb3B5cmlnaHQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgY2hha3JhLFxyXG4gIENvbnRhaW5lcixcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIFZpc3VhbGx5SGlkZGVuLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmFGYWNlYm9vaywgRmFJbnN0YWdyYW0sIEZhVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyQ29weXJpZ2h0KCkge1xyXG4gIGNvbnN0IFNvY2lhbEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBsYWJlbCwgaHJlZiB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Y2hha3JhLmJ1dHRvblxyXG4gICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlQWxwaGEuNTAwXCIpfVxyXG4gICAgICAgIHJvdW5kZWQ9e1wiZnVsbFwifVxyXG4gICAgICAgIHc9ezh9XHJcbiAgICAgICAgaD17OH1cclxuICAgICAgICBjdXJzb3I9e1wicG9pbnRlclwifVxyXG4gICAgICAgIGFzPXtcImFcIn1cclxuICAgICAgICBocmVmPXtocmVmfVxyXG4gICAgICAgIGRpc3BsYXk9e1wiaW5saW5lLWZsZXhcIn1cclxuICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgIHRyYW5zaXRpb249e1wiYmFja2dyb3VuZCAwLjNzIGVhc2VcIn1cclxuICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgIGJnOiB1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrQWxwaGEuMjAwXCIsIFwid2hpdGVBbHBoYS4yMDBcIiksXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxWaXN1YWxseUhpZGRlbj57bGFiZWx9PC9WaXN1YWxseUhpZGRlbj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvY2hha3JhLmJ1dHRvbj5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBiYWNrZ3JvdW5kPVwiIzAxMDUxN1wiIGJnU2l6ZT17XCJjb3ZlclwifSB3PVwiMTAwJVwiPlxyXG4gICAgICAgIDxDb250YWluZXJcclxuICAgICAgICAgIGFzPXtTdGFja31cclxuICAgICAgICAgIG1heFc9e1wiNnhsXCJ9XHJcbiAgICAgICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgICAgICBweT17NH1cclxuICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxyXG4gICAgICAgICAgc3BhY2luZz17NH1cclxuICAgICAgICAgIGp1c3RpZnk9e3sgYmFzZTogXCJjZW50ZXJcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XHJcbiAgICAgICAgICBhbGlnbj17eyBiYXNlOiBcImNlbnRlclwiLCBtZDogXCJjZW50ZXJcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUZXh0IHRleHRDb2xvcj1cIndoaXRlQWxwaGEuNjAwXCI+XHJcbiAgICAgICAgICAgIMKpIDIwMjEgQmFrb3JsYWJzLiBBbGwgcmlnaHRzIHJlc2VydmVkXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXs2fT5cclxuICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbiBsYWJlbD17XCJUd2l0dGVyXCJ9IGhyZWY9e1wiI1wifT5cclxuICAgICAgICAgICAgICA8RmFUd2l0dGVyIC8+XHJcbiAgICAgICAgICAgIDwvU29jaWFsQnV0dG9uPlxyXG4gICAgICAgICAgICA8U29jaWFsQnV0dG9uIGxhYmVsPXtcIllvdVR1YmVcIn0gaHJlZj17XCIjXCJ9PlxyXG4gICAgICAgICAgICAgIDxGYUZhY2Vib29rIC8+XHJcbiAgICAgICAgICAgIDwvU29jaWFsQnV0dG9uPlxyXG4gICAgICAgICAgICA8U29jaWFsQnV0dG9uIGxhYmVsPXtcIkluc3RhZ3JhbVwifSBocmVmPXtcIiNcIn0+XHJcbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XHJcbiAgICAgICAgICAgIDwvU29jaWFsQnV0dG9uPlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBJbWFnZSxcclxuICBMaW5rLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIEljb25CdXR0b24sXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gXCIuL1RvcEJhclwiO1xyXG5pbXBvcnQgeyBDbG9zZUljb24sIEhhbWJ1cmdlckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvblRvZ2dsZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRvcEJhciAvPlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICBmb250U2l6ZT17eyBzbTogXCJtZFwiLCBtZDogXCJsZ1wiIH19XHJcbiAgICAgICAgICB3cmFwPVwid3JhcFwiXHJcbiAgICAgICAgICBtYXhXPVwiOTMlXCJcclxuICAgICAgICAgIG14PVwiYXV0b1wiXHJcbiAgICAgICAgICBweT17eyBiYXNlOiAyIH19XHJcbiAgICAgICAgICBweD17eyBiYXNlOiA0IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgZmxleD17eyBiYXNlOiAxLCBtZDogXCJhdXRvXCIgfX1cclxuICAgICAgICAgICAgbWw9e3sgYmFzZTogLTIgfX1cclxuICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGV9XHJcbiAgICAgICAgICAgICAgaWNvbj17XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gdz17NH0gaD17NH0gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxIYW1idXJnZXJJY29uIHc9ezd9IGg9ezd9IC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9e1wiZ2hvc3RcIn1cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtcIlRvZ2dsZSBOYXZpZ2F0aW9uXCJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5PXt7IGJhc2U6IFwiY2VudGVyXCIsIHNtOiBcInN0YXJ0XCIsIG1kOiBcInN0YXJ0XCIgfX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJpbWFnZXMvbG9nbzEuc3ZnXCIgdz1cIjQwXCIgaD1cIjIwXCIgLz5cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGRpc3BsYXk9e3sgc206IGlzT3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCBtZDogXCJmbGV4XCIgfX1cclxuICAgICAgICAgICAgd2lkdGg9e3sgc206IFwiZnVsbFwiLCBtZDogXCJhdXRvXCIgfX1cclxuICAgICAgICAgICAgZm9udC1mYW1pbHk9eydPcGVuIFNhbnMnfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV0hBVCBXRSBET1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgbXI9ezZ9XHJcbiAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIil9XHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDT01NRVJDSUFMIFBPT0xTXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiIzMzMzMzM1wiKX1cclxuICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBPT0xTIEdBTExFUllcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU0VSVklDRVNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgQm94LCBUZXh0LCB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgbXQ9ezEwfVxyXG4gICAgICAgIGJnSW1hZ2U9XCJ1cmwoJy9pbWFnZXMvYmcxLmpwZycpXCJcclxuICAgICAgICBiZ1NpemU9e1wiY292ZXJcIn1cclxuICAgICAgICBiZ1JlcGVhdD1cIm5vLXJlcGVhdFwiXHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIGg9XCI0MDBweFwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICB3PXtcImZ1bGxcIn1cclxuICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxyXG4gICAgICAgICAganVzdGlmeT17XCJjZW50ZXJcIn1cclxuICAgICAgICAgIHB4PXt1c2VCcmVha3BvaW50VmFsdWUoeyBiYXNlOiA0LCBtZDogOCB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94IG1heFc9e1wiMnhsXCJ9IGFsaWduPXtcImZsZXgtc3RhcnRcIn0gc3BhY2luZz17Nn0gcHQ9ezEwfT5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBwdD17MTB9XHJcbiAgICAgICAgICAgICAgbGluZUhlaWdodD17MS4yfVxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlQWxwaGEuOTAwXCJ9XHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMVwiLCBzbTogXCIzeGxcIiwgbGc6IFwiNHhsXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBsZWFzZSBGZWVsIEZyZWUgVG8gQ29udGFjdCBVc1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBwdD17MTB9XHJcbiAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIxXCIsIHNtOiBcIjJ4bFwiLCBsZzogXCIyeGxcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9e1wid2hpdGVcIn0+IEhvdGxpbmU6ICsyMzMgNTcgMjg5IDAzMTI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9e1wid2hpdGVcIn0+TWFpbCBBZGRyZXNzOiBpbmZvQG5hY3Jpc3Bvb2xzLmNvbTwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIENlbnRlcixcclxuICBDb250YWluZXIsXHJcbiAgVGV4dCxcclxuICBJbWFnZSxcclxuICBTaW1wbGVHcmlkLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXIgbWF4Vz17XCI5MCVcIn0gbXQ9ezEwfT5cclxuICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgYXM9e1wic3BhblwifVxyXG4gICAgICAgICAgICBjb2xvcj17XCJncmF5LjQwMFwifVxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMVwiLCBzbTogXCIzeGxcIiwgbGc6IFwiNHhsXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgT1VSIFJFQ0VOVCBQUk9KRUNUU1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQ2VudGVyPlxyXG4gICAgICAgIDxCb3ggbXQ9ezh9PlxyXG4gICAgICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17WzIsIG51bGwsIDNdfSBzcGFjaW5nPVwiMjBweFwiIG10PXsxMH0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZ2FsbGVyeS9waWMxLmpwZ1wiIGFsdD1cInBvb2wgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2dhbGxlcnkvcGljMi5qcGdcIiBhbHQ9XCJwb29sIGltYWdlMlwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZ2FsbGVyeS9waWM1LmpwZ1wiIGFsdD1cInBvb2wgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2dhbGxlcnkvcGljNC5qcGdcIiBhbHQ9XCJwb29sIGltYWdlXCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9nYWxsZXJ5L3BpYzMuanBnXCIgYWx0PVwicG9vbCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZ2FsbGVyeS9waWM2LmpwZ1wiIGFsdD1cInBvb2wgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2dhbGxlcnkvcGljNy5qcGdcIiBhbHQ9XCJwb29sIGltYWdlXCIgLz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9nYWxsZXJ5L3BpYzEzLmpwZ1wiIGFsdD1cInBvb2wgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2dhbGxlcnkvcGljMTQuanBnXCIgYWx0PVwicG9vbCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEJveCxcclxuICBDZW50ZXIsXHJcbiAgQ29udGFpbmVyLFxyXG4gIFNpbXBsZUdyaWQsXHJcbiAgU3F1YXJlLFxyXG4gIFRleHQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBHaUNvbmNyZXRlQmFnLFxyXG4gIEdpQ3JhbmUsXHJcbiAgR2lPcGVuQ2hlc3QsXHJcbiAgR2lNb25rZXlXcmVuY2gsXHJcbiAgR2lTaGlwV2hlZWwsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2dpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBtYXhXPXtcIjkwJVwifT5cclxuICAgICAgPENlbnRlcj5cclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgYXM9e1wic3BhblwifVxyXG4gICAgICAgICAgY29sb3I9e1wiZ3JheS40MDBcIn1cclxuICAgICAgICAgIGZvbnRXZWlnaHQ9ezIwMH1cclxuICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMVwiLCBzbTogXCIzeGxcIiwgbGc6IFwiNHhsXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBPVVIgU0VSVklDRVNcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQ2VudGVyPlxyXG4gICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXtbMiwgbnVsbCwgM119IHNwYWNpbmc9XCI0MHB4XCIgbXQ9ezEwfT5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBwPXs1fVxyXG4gICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgIHNoYWRvdzogXCJtZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJtZFwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcInNlbWlib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTcXVhcmUgYm9yZGVyPVwiNHB4XCIgY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICA8R2lDb25jcmV0ZUJhZyBzaXplPXs0MH0gY29sb3I9XCJncmF5XCIgLz5cclxuICAgICAgICAgIDwvU3F1YXJlPlxyXG5cclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMThweFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJib2xkXCJcclxuICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgY29sb3I9e1wiIzdBN0NBOFwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTd2ltbWluZyBQb29sIENvbnN0cnVjdGlvblxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxNHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9e1wiIzdBN0NBOFwifT5cclxuICAgICAgICAgICAgV2UgYXJlIGFtb25nIHRoZSBwcm9taW5lbnQgY29uc3VsdGFudCBmb3Igc3dpbW1pbmcgcG9vbFxyXG4gICAgICAgICAgICBjb25zdHJ1Y3Rpb24uXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgcD17NX1cclxuICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICBzaGFkb3c6IFwibWRcIixcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWRcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJzZW1pYm9sZFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3F1YXJlIGJvcmRlcj1cIjRweFwiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgPEdpQ3JhbmUgc2l6ZT17NDB9IGNvbG9yPVwiZ3JheVwiIC8+XHJcbiAgICAgICAgICA8L1NxdWFyZT5cclxuXHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGNvbG9yPXtcIiM3QTdDQThcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpbW1pbmcgUG9vbCBNYWludGVuYW5jZVxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxNHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9e1wiIzdBN0NBOFwifT5cclxuICAgICAgICAgICAgTGV0IG91ciB0cmFpbmVkIHByb2ZmZXNzaW9uYWxzIHRha2UgY2FyZSBvZiBhbGwgeW91ciBwb29sIGFuZCBzcGFcclxuICAgICAgICAgICAgbmVlZHMuXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgcD17NX1cclxuICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICBzaGFkb3c6IFwibWRcIixcclxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXHJcbiAgICAgICAgICAgIGZsZXg6IFwiMVwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwibWRcIixcclxuICAgICAgICAgICAgZm9udFdlaWdodDogXCJzZW1pYm9sZFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U3F1YXJlIGJvcmRlcj1cIjRweFwiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgPEdpT3BlbkNoZXN0IHNpemU9ezQwfSBjb2xvcj1cImdyYXlcIiAvPlxyXG4gICAgICAgICAgPC9TcXVhcmU+XHJcblxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBjb2xvcj17XCIjN0E3Q0E4XCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN0ZWFtIFNhdW5hIFByb2R1Y3RzXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE0cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj17XCIjN0E3Q0E4XCJ9PlxyXG4gICAgICAgICAgICBFcXVpcHBlZCB3aXRoIHNvcGhpc3RpY2F0ZWQgYXV0b21hdGlvbiBzeXN0ZW0sIFN0ZWFtIGFuZCBTYXVuYVxyXG4gICAgICAgICAgICBQcm9kdWN0cyBnZW5lcmF0ZXMgYSBwbGVhc2luZyBsZXZlbCBvZiBoZWF0IHRoYXQgaXMgc2tpbiBmcmllbmRseVxyXG4gICAgICAgICAgICBhbmQgaGVhbHRoeS5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBwPXs1fVxyXG4gICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgIHNoYWRvdzogXCJtZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJtZFwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcInNlbWlib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTcXVhcmUgYm9yZGVyPVwiNHB4XCIgY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgICA8R2lTaGlwV2hlZWwgc2l6ZT17NDB9IGNvbG9yPVwiZ3JheVwiIC8+XHJcbiAgICAgICAgICA8L1NxdWFyZT5cclxuXHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4cHhcIlxyXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXHJcbiAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgIGNvbG9yPXtcIiM3QTdDQThcIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUmVwYWlyICYgUmVub3ZhdGlvblxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCIxNHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9e1wiIzdBN0NBOFwifT5cclxuICAgICAgICAgICAgVG8gbWVldCB0aGUgdmFyaWVnYXRlZCByZXF1aXJlbWVudHMgb2Ygb3VyIGN1c3RvbWVycywgd2UgYXJlXHJcbiAgICAgICAgICAgIHByb3ZpZGluZyB0aGVzZSBTd2ltbWluZyBQb29sIFJlcGFpcmluZyBTZXJ2aWNlcy5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBwPXs1fVxyXG4gICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgIHNoYWRvdzogXCJtZFwiLFxyXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcclxuICAgICAgICAgICAgZmxleDogXCIxXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCJtZFwiLFxyXG4gICAgICAgICAgICBmb250V2VpZ2h0OiBcInNlbWlib2xkXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTcXVhcmUgYm9yZGVyPVwiMjRweFwiIGNvbG9yPVwid2hpdGVcIj5cclxuICAgICAgICAgICAgPEdpTW9ua2V5V3JlbmNoIHNpemU9ezQwfSBjb2xvcj1cImdyYXlcIiAvPlxyXG4gICAgICAgICAgPC9TcXVhcmU+XHJcblxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxOHB4XCJcclxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICBjb2xvcj17XCIjN0E3Q0E4XCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEphY3V6emkgU3BhIFByb2R1Y3RzXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIjE0cHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj17XCIjN0E3Q0E4XCJ9PlxyXG4gICAgICAgICAgICBBdmFpbGFibGUgd2l0aCB1cyBhbiBhc3NvcnRtZW50IG9mIFNwYSBhbmQgSmFjdXp6aSBwcm9kdWN0cyB0aGF0XHJcbiAgICAgICAgICAgIGFkZHMgbGF2aXNobmVzcyBhbmQgcmVqdXZlbmF0aW9uIHRvIHlvdXIgYmF0aHJvb20uXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcblxyXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICBkeW5hbWljSGVpZ2h0PXt0cnVlfVxyXG4gICAgICAgIHN0b3BPbkhvdmVyPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXJvdXNlbDUuanBnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2Fyb3VzZWwyLmpwZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Nhcm91c2VsMy5qcGdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXJvdXNlbDQuanBnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2Fyb3VzZWw2LmpwZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iLCJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtLFxyXG4gIEJyZWFkY3J1bWJMaW5rLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGhvbmVJY29uLCBFbWFpbEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wQmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgZmxleD17eyBiYXNlOiAyIH19XHJcbiAgICAgICAgbGluZUhlaWdodD1cIjQwcHhcIlxyXG4gICAgICAgIGZvbnRTaXplPVwiMTZcIlxyXG4gICAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgICBweD1cIjE1XCJcclxuICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgIG1heFc9XCI5MCVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggbXQ9ezF9PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFBob25lSWNvbiB3PXszfSBoPXszfSBjb2xvcj1cImdyYXkuNDAwXCIgbWFyZ2luPXtcIjNcIn0gLz5cclxuICAgICAgICAgICAgKzIzMyA1NyAyODkgMDMxMlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHBsPVwiNFwiPlxyXG4gICAgICAgICAgICA8RW1haWxJY29uIGNvbG9yPVwiZ3JheS40MDBcIiBtYXJnaW49e1wiM1wifSAvPlxyXG4gICAgICAgICAgICBpbmZvQG5hY3Jpc3Bvb2xzLmNvbVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWIgc2VwYXJhdG9yPVwifFwiPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWJMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBteD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiIzAwMFwiKX1cclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJMaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgbXg9XCIyXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMwMDBcIil9XHJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvQnJlYWRjcnVtYkxpbms+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInRlbGVncmFtXCIgYm9yZGVyUmFkaXVzPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgTWFrZSBBbiBBcHBvaW50bWVudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnQvQWJvdXRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L0hlYWRlclwiO1xyXG5pbXBvcnQgSW5mbyBmcm9tIFwiLi4vY29tcG9uZW50L0luZm9cIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4uL2NvbXBvbmVudC9Qcm9qZWN0XCI7XHJcbmltcG9ydCBTZXJ2aWNlcyBmcm9tIFwiLi4vY29tcG9uZW50L1NlcnZpY2VzXCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9TbGlkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50L0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U2xpZGVyIC8+XHJcbiAgICAgIDxBYm91dCAvPlxyXG4gICAgICA8U2VydmljZXMgLz5cclxuICAgICAgPEluZm8gLz5cclxuICAgICAgPFByb2plY3QgLz5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZ2lcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==