/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./client/src/App.jsx ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar url = 'wss://www.bitmex.com/realtime?subscribe=instrument,symbol:XBTUSD';\nvar connection = new WebSocket(url);\n\nvar App = function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));\n\n    _this.state = {\n      target: null,\n      entry: null,\n      stop: null,\n      XBTUSD: null\n    };\n    _this.targetChange = _this.targetChange.bind(_this);\n    _this.entryChange = _this.entryChange.bind(_this);\n    _this.stopChange = _this.stopChange.bind(_this);\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"targetChange\",\n    value: function targetChange(e) {\n      this.setState({\n        target: e.target.value\n      });\n    }\n  }, {\n    key: \"entryChange\",\n    value: function entryChange(e) {\n      this.setState({\n        entry: e.target.value\n      });\n    }\n  }, {\n    key: \"stopChange\",\n    value: function stopChange(e) {\n      this.setState({\n        stop: e.target.value\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      connection.onopen = function () {\n        console.log(\"Connection established.\");\n      };\n      connection.onerror = function (error) {\n        console.log(\"WebSocket error: \" + error);\n      };\n      connection.onmessage = function (e) {\n        var chunk = JSON.parse(e.data);\n        if (chunk.data && chunk.data[0].symbol === \"XBTUSD\" && chunk.data[0].lastPrice) {\n          _this2.setState({ XBTUSD: \"$\" + chunk.data[0].lastPrice });\n        }\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\n        \"div\",\n        null,\n        React.createElement(\n          \"h3\",\n          null,\n          \"XBTUSD: \",\n          this.state.XBTUSD\n        ),\n        React.createElement(\n          \"div\",\n          null,\n          React.createElement(\n            \"h4\",\n            null,\n            \"Target Price:\"\n          ),\n          React.createElement(\"input\", { type: \"text\", autoComplete: \"off\", onChange: this.targetChange })\n        ),\n        React.createElement(\n          \"h4\",\n          null,\n          \"Entry Price: \",\n          this.state.entry\n        ),\n        React.createElement(\n          \"h4\",\n          null,\n          \"Stop Loss: \",\n          this.state.stop\n        )\n      );\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jbGllbnQvc3JjL0FwcC5qc3g/YTJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1cmwgPSAnd3NzOi8vd3d3LmJpdG1leC5jb20vcmVhbHRpbWU/c3Vic2NyaWJlPWluc3RydW1lbnQsc3ltYm9sOlhCVFVTRCc7XG5jb25zdCBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGFyZ2V0OiBudWxsLFxuICAgICAgZW50cnk6IG51bGwsXG4gICAgICBzdG9wOiBudWxsLFxuICAgICAgWEJUVVNEOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLnRhcmdldENoYW5nZSA9IHRoaXMudGFyZ2V0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbnRyeUNoYW5nZSA9IHRoaXMuZW50cnlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0b3BDaGFuZ2UgPSB0aGlzLnN0b3BDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRhcmdldENoYW5nZSAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUgKHtcbiAgICAgIHRhcmdldDogZS50YXJnZXQudmFsdWVcbiAgICB9KVxuICB9XG5cbiAgZW50cnlDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUgKHtcbiAgICAgIGVudHJ5OiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBzdG9wQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICBzdG9wOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBDb25uZWN0aW9uIGVzdGFibGlzaGVkLmApXG4gICAgfVxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBXZWJTb2NrZXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgfVxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZSA9PiB7XG4gICAgICBsZXQgY2h1bmsgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICBpZiAoY2h1bmsuZGF0YSAmJiBjaHVuay5kYXRhWzBdLnN5bWJvbCA9PT0gXCJYQlRVU0RcIiAmJiBjaHVuay5kYXRhWzBdLmxhc3RQcmljZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtYQlRVU0Q6IGAkJHtjaHVuay5kYXRhWzBdLmxhc3RQcmljZX1gfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5YQlRVU0Q6IHt0aGlzLnN0YXRlLlhCVFVTRH08L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND5UYXJnZXQgUHJpY2U6PC9oND48aW5wdXQgdHlwZT1cInRleHRcIiBhdXRvQ29tcGxldGU9XCJvZmZcIiBvbkNoYW5nZT17dGhpcy50YXJnZXRDaGFuZ2V9PjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDQ+RW50cnkgUHJpY2U6IHt0aGlzLnN0YXRlLmVudHJ5fTwvaDQ+XG4gICAgICAgIDxoND5TdG9wIExvc3M6IHt0aGlzLnN0YXRlLnN0b3B9PC9oND5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjbGllbnQvc3JjL0FwcC5qc3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQVZBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBOzs7O0FBMURBO0FBQ0E7QUE0REEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);