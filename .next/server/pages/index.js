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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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
            lineNumber: 29,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
            lineNumber: 33,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
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
            lineNumber: 42,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          color: "gray.500",
          fontFamily: 'sans-serif',
          children: "Nacris Pools is involved in the construction of commercial, semi commercial and residential swimming pools as well as the renovation and repair of existing pools.We are also dealing in Pool Surround Equipment, Swimming Pool Cleaning Equipment, Under Water Light, Swimming Pool Furniture, Competition Equipment, Swimming Pool Chemical, Swimming Pool Inflatable, Life Saving Equipment, Counter Current Nozzle, Swimming Filteration Plant, Pool Pump, Pool Heater etc."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
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
          lineNumber: 68,
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
            lineNumber: 86,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
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
      lineNumber: 109,
      columnNumber: 9
    }, undefined)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 7
  }, undefined);
};

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
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        as: "nav",
        align: "center",
        justify: "space-between",
        fontSize: 19,
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
              lineNumber: 41,
              columnNumber: 24
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_4__["HamburgerIcon"], {
              w: 7,
              h: 7
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 52
            }, undefined),
            variant: "ghost",
            "aria-label": "Toggle Navigation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
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
            lineNumber: 48,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"] //wrap="wrap"
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
            lineNumber: 56,
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
            lineNumber: 68,
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
            lineNumber: 80,
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
            lineNumber: 92,
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
            lineNumber: 104,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
            color: "gray.400"
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
            color: "gray.400"
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _component_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/Slider */ "./component/Slider.jsx");

var _jsxFileName = "C:\\Users\\ubong\\Desktop\\real\\nacrispools\\pages\\index.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_About__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0Fib3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvU2xpZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvVG9wQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFib3V0IiwiYmFzZSIsIm1kIiwic20iLCJsZyIsInVzZUNvbG9yTW9kZVZhbHVlIiwiQmxvYiIsInByb3BzIiwiSGVhZGVyIiwiaXNPcGVuIiwib25Ub2dnbGUiLCJ1c2VEaXNjbG9zdXJlIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsIlNsaWRlciIsIkNvbXBvbmVudCIsInJlbmRlciIsIlRvcEJhciIsIkhvbWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtC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QUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9ELEM7Ozs7Ozs7Ozs7O0FDYkQsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFN0YWNrLFxyXG4gICAgRmxleCxcclxuICAgIEJveCxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBUZXh0LFxyXG4gICAgSW1hZ2UsXHJcbiAgICBJY29uLFxyXG4gICAgSWNvblByb3BzLFxyXG4gICAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbiAgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lciBtYXhXPXtcIjkwJVwifSBtdD17LTEwfT5cclxuICAgICAgICA8U3RhY2tcclxuICAgICAgICAgIGFsaWduPXtcImNlbnRlclwifVxyXG4gICAgICAgICAgc3BhY2luZz17eyBiYXNlOiA4LCBtZDogMTAgfX1cclxuICAgICAgICAgIHB5PXt7IGJhc2U6IDIwLCBtZDogMjggfX1cclxuICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdGFjayBmbGV4PXsxfSBzcGFjaW5nPXt7IGJhc2U6IDUsIG1kOiAxMCB9fT5cclxuICAgICAgICAgICAgPEhlYWRpbmdcclxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0PXsxLjF9XHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD17NDAwfVxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IFwiMnhsXCIsIHNtOiBcIjJ4bFwiLCBsZzogXCIzeGxcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHQgYXM9e1wic3BhblwifSBsZXR0ZXJTcGFjaW5nPXs4fT5cclxuICAgICAgICAgICAgICAgIFdFTENPTUUhXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBhcz17XCJzcGFuXCJ9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17XCJncmF5LjQwMFwifVxyXG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCIxXCIsIHNtOiBcIjN4bFwiLCBsZzogXCI0eGxcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE5hY3JpcyBQb29sc1xyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgYXM9e1wic3BhblwifVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1wiIzdBN0NBOFwifVxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCJsXCIsIHNtOiBcIjJ4bFwiLCBsZzogXCIzeGxcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFdlIEFyZSBTd2ltbWluZyBQb29sIFNlcnZpY2UgRXhwZXJ0c1xyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCBjb2xvcj17XCJncmF5LjUwMFwifSBmb250RmFtaWx5PXsnc2Fucy1zZXJpZid9PlxyXG4gICAgICAgICAgICAgIE5hY3JpcyBQb29scyBpcyBpbnZvbHZlZCBpbiB0aGUgY29uc3RydWN0aW9uIG9mIGNvbW1lcmNpYWwsIHNlbWlcclxuICAgICAgICAgICAgICBjb21tZXJjaWFsIGFuZCByZXNpZGVudGlhbCBzd2ltbWluZyBwb29scyBhcyB3ZWxsIGFzIHRoZSByZW5vdmF0aW9uXHJcbiAgICAgICAgICAgICAgYW5kIHJlcGFpciBvZiBleGlzdGluZyBwb29scy5XZSBhcmUgYWxzbyBkZWFsaW5nIGluIFBvb2wgU3Vycm91bmRcclxuICAgICAgICAgICAgICBFcXVpcG1lbnQsIFN3aW1taW5nIFBvb2wgQ2xlYW5pbmcgRXF1aXBtZW50LCBVbmRlciBXYXRlciBMaWdodCxcclxuICAgICAgICAgICAgICBTd2ltbWluZyBQb29sIEZ1cm5pdHVyZSwgQ29tcGV0aXRpb24gRXF1aXBtZW50LCBTd2ltbWluZyBQb29sXHJcbiAgICAgICAgICAgICAgQ2hlbWljYWwsIFN3aW1taW5nIFBvb2wgSW5mbGF0YWJsZSwgTGlmZSBTYXZpbmcgRXF1aXBtZW50LCBDb3VudGVyXHJcbiAgICAgICAgICAgICAgQ3VycmVudCBOb3p6bGUsIFN3aW1taW5nIEZpbHRlcmF0aW9uIFBsYW50LCBQb29sIFB1bXAsIFBvb2wgSGVhdGVyXHJcbiAgICAgICAgICAgICAgZXRjLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgZmxleD17MX1cclxuICAgICAgICAgICAganVzdGlmeT17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPXtcInJlbGF0aXZlXCJ9XHJcbiAgICAgICAgICAgIHc9e1wiZnVsbFwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8QmxvYlxyXG4gICAgICAgICAgICAgIHc9e1wiMTUwJVwifVxyXG4gICAgICAgICAgICAgIGg9e1wiMTUwJVwifVxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtcImFic29sdXRlXCJ9XHJcbiAgICAgICAgICAgICAgdG9wPXtcIi0yMCVcIn1cclxuICAgICAgICAgICAgICBsZWZ0PXswfVxyXG4gICAgICAgICAgICAgIHpJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS41MFwiLCBcImdyYXkuNDAwXCIpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249e1wicmVsYXRpdmVcIn1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e1wiMzAwcHhcIn1cclxuICAgICAgICAgICAgICByb3VuZGVkPXtcIjJ4bFwifVxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdz17XCIyeGxcIn1cclxuICAgICAgICAgICAgICB3aWR0aD17XCJmdWxsXCJ9XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c9e1wiaGlkZGVuXCJ9XHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXtcIm5vbmVcIn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgYWx0PXtcIkFib3V0IEltYWdlXCJ9XHJcbiAgICAgICAgICAgICAgICBhbGlnbj17XCJjZW50ZXJcIn1cclxuICAgICAgICAgICAgICAgIHc9e1wiMTAwJVwifVxyXG4gICAgICAgICAgICAgICAgaD17XCIxMDAlXCJ9XHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiaW1hZ2VzL3Bvb2wxXzQwMC5qcGdcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L1N0YWNrPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBCbG9iID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SWNvblxyXG4gICAgICAgIHdpZHRoPXtcIjEwMCVcIn1cclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDU3OCA0NDBcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICBkPVwiTTIzOS4xODQgNDM5LjQ0M2MtNTUuMTMtNS40MTktMTEwLjI0MS0yMS4zNjUtMTUxLjA3NC01OC43NjdDNDIuMzA3IDMzOC43MjItNy40NzggMjgyLjcyOS45MzggMjIxLjIxN2M4LjQzMy02MS42NDQgNzguODk2LTkxLjA0OCAxMjYuODcxLTEzMC43MTIgMzQuMzM3LTI4LjM4OCA3MC4xOTgtNTEuMzQ4IDExMi4wMDQtNjYuNzhDMjgyLjM0IDguMDI0IDMyNS4zODItMy4zNjkgMzcwLjUxOC45MDRjNTQuMDE5IDUuMTE1IDExMi43NzQgMTAuODg2IDE1MC44ODEgNDkuNDgyIDM5LjkxNiA0MC40MjcgNDkuNDIxIDEwMC43NTMgNTMuMzg1IDE1Ny40MDIgNC4xMyA1OS4wMTUgMTEuMjU1IDEyOC40NC0zMC40NDQgMTcwLjQ0LTQxLjM4MyA0MS42ODMtMTExLjYgMTkuMTA2LTE2OS4yMTMgMzAuNjYzLTQ2LjY4IDkuMzY0LTg4LjU2IDM1LjIxLTEzNS45NDMgMzAuNTUxelwiXHJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0ljb24+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIEZsZXgsXHJcbiAgSW1hZ2UsXHJcbiAgTGluayxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBJY29uQnV0dG9uLFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFRvcEJhciBmcm9tIFwiLi9Ub3BCYXJcIjtcclxuaW1wb3J0IHsgQ2xvc2VJY29uLCBIYW1idXJnZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25Ub2dnbGUgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8RmxleFxyXG4gICAgICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgZm9udFNpemU9ezE5fVxyXG4gICAgICAgICAgd3JhcD1cIndyYXBcIlxyXG4gICAgICAgICAgbWF4Vz1cIjkwJVwiXHJcbiAgICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgICAgcHk9e3sgYmFzZTogMiB9fVxyXG4gICAgICAgICAgcHg9e3sgYmFzZTogNCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBmbGV4PXt7IGJhc2U6IDEsIG1kOiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgbWw9e3sgYmFzZTogLTIgfX1cclxuICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogXCJmbGV4XCIsIG1kOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlfVxyXG4gICAgICAgICAgICBpY29uPXtcclxuICAgICAgICAgICAgICBpc09wZW4gPyA8Q2xvc2VJY29uIHc9ezR9IGg9ezR9IC8+IDogPEhhbWJ1cmdlckljb24gdz17N30gaD17N30gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXJpYW50PXtcImdob3N0XCJ9XHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e1wiVG9nZ2xlIE5hdmlnYXRpb25cIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPEZsZXgganVzdGlmeT17eyBiYXNlOiBcImNlbnRlclwiLCBzbTogXCJzdGFydFwiLCBtZDogXCJzdGFydFwiIH19PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaW1hZ2VzL2xvZ28xLnN2Z1wiIHc9XCI0MFwiIGg9XCIyMFwiIC8+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAvL3dyYXA9XCJ3cmFwXCJcclxuICAgICAgICAgICAgZGlzcGxheT17eyBzbTogaXNPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9fVxyXG4gICAgICAgICAgICB3aWR0aD17eyBzbTogXCJmdWxsXCIsIG1kOiBcImF1dG9cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgV0hBVCBXRSBET1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgbXI9ezZ9XHJcbiAgICAgICAgICAgICAgbXQ9e3sgYmFzZTogNCwgbWQ6IDAgfX1cclxuICAgICAgICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMzMzMzMzNcIil9XHJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDT01NRVJDSUFMIFBPT0xTXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBtcj17Nn1cclxuICAgICAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiIzMzMzMzM1wiKX1cclxuICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFBPT0xTIEdBTExFUllcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU0VSVklDRVNcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIG1yPXs2fVxyXG4gICAgICAgICAgICAgIG10PXt7IGJhc2U6IDQsIG1kOiAwIH19XHJcbiAgICAgICAgICAgICAgZGlzcGxheT1cImJsb2NrXCJcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCIjMzMzMzMzXCIpfVxyXG4gICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHVzZUNvbG9yTW9kZVZhbHVlKFwiIzdBN0NBOFwiKSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ09OVEFDVFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XHJcblxyXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgIHNob3dUaHVtYnM9e2ZhbHNlfVxyXG4gICAgICAgIGluZmluaXRlTG9vcD17dHJ1ZX1cclxuICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICBkeW5hbWljSGVpZ2h0PXt0cnVlfVxyXG4gICAgICAgIHN0b3BPbkhvdmVyPXtmYWxzZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXJvdXNlbDUuanBnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2Fyb3VzZWwyLmpwZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Nhcm91c2VsMy5qcGdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9jYXJvdXNlbDQuanBnXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvY2Fyb3VzZWw2LmpwZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyO1xyXG4iLCJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRmxleCxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtLFxyXG4gIEJyZWFkY3J1bWJMaW5rLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGhvbmVJY29uLCBFbWFpbEljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wQmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgZmxleD17eyBiYXNlOiAyIH19XHJcbiAgICAgICAgbGluZUhlaWdodD1cIjQwcHhcIlxyXG4gICAgICAgIGZvbnRTaXplPVwiMTZcIlxyXG4gICAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgICBweD1cIjE1XCJcclxuICAgICAgICBteD1cImF1dG9cIlxyXG4gICAgICAgIG1heFc9XCI5MCVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggbXQ9ezF9PlxyXG4gICAgICAgICAgPEJveD5cclxuICAgICAgICAgICAgPFBob25lSWNvbiB3PXszfSBoPXszfSBjb2xvcj1cImdyYXkuNDAwXCIgLz5cclxuICAgICAgICAgICAgKzIzMyA1NyAyODkgMDMxMlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHBsPVwiNFwiPlxyXG4gICAgICAgICAgICA8RW1haWxJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPlxyXG4gICAgICAgICAgICBpbmZvQG5hY3Jpc3Bvb2xzLmNvbVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWIgc2VwYXJhdG9yPVwifFwiPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWJMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBteD1cIjJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiIzAwMFwiKX1cclxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB1c2VDb2xvck1vZGVWYWx1ZShcIiM3QTdDQThcIiksXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJMaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iTGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgbXg9XCIyXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcIiMwMDBcIil9XHJcbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdXNlQ29sb3JNb2RlVmFsdWUoXCIjN0E3Q0E4XCIpLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgIDwvQnJlYWRjcnVtYkxpbms+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cInRlbGVncmFtXCIgYm9yZGVyUmFkaXVzPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgTWFrZSBBbiBBcHBvaW50bWVudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9jb21wb25lbnQvQWJvdXRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50L0hlYWRlclwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCIuLi9jb21wb25lbnQvU2xpZGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxTbGlkZXIgLz5cclxuICAgICAgPEFib3V0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9