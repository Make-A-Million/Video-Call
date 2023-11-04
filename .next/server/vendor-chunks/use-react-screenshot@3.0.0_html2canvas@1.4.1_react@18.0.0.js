"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-react-screenshot@3.0.0_html2canvas@1.4.1_react@18.0.0";
exports.ids = ["vendor-chunks/use-react-screenshot@3.0.0_html2canvas@1.4.1_react@18.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/use-react-screenshot@3.0.0_html2canvas@1.4.1_react@18.0.0/node_modules/use-react-screenshot/dist/index.es.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/use-react-screenshot@3.0.0_html2canvas@1.4.1_react@18.0.0/node_modules/use-react-screenshot/dist/index.es.js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFileName: () => (/* binding */ createFileName),\n/* harmony export */   useScreenshot: () => (/* binding */ useScreenshot)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.1_react-dom@18.0.0_react@18.0.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ \"(ssr)/./node_modules/.pnpm/html2canvas@1.4.1/node_modules/html2canvas/dist/html2canvas.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction _slicedToArray(arr, i) {\n  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n\n  if (_i == null) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n\n  var _s, _e;\n\n  try {\n    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n\n  return arr2;\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n/**\n * @module Main_Hook\n * Hook return\n * @typedef {Array} HookReturn\n * @property {string} HookReturn[0] - image string\n * @property {string} HookReturn[1] - take screen shot string\n * @property {object} HookReturn[2] - errors\n */\n\n/**\n * hook for creating screenshot from html node\n * @returns {HookReturn}\n */\n\nvar useScreenshot = function useScreenshot() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      type = _ref.type,\n      quality = _ref.quality;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      image = _useState2[0],\n      setImage = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      error = _useState4[0],\n      setError = _useState4[1];\n  /**\n   * convert html node to image\n   * @param {HTMLElement} node\n   */\n\n\n  var takeScreenShot = function takeScreenShot(node) {\n    if (!node) {\n      throw new Error('You should provide correct html node.');\n    }\n\n    return html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(node).then(function (canvas) {\n      var croppedCanvas = document.createElement('canvas');\n      var croppedCanvasContext = croppedCanvas.getContext('2d'); // init data\n\n      var cropPositionTop = 0;\n      var cropPositionLeft = 0;\n      var cropWidth = canvas.width;\n      var cropHeight = canvas.height;\n      croppedCanvas.width = cropWidth;\n      croppedCanvas.height = cropHeight;\n      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);\n      var base64Image = croppedCanvas.toDataURL(type, quality);\n      setImage(base64Image);\n      return base64Image;\n    })[\"catch\"](setError);\n  };\n\n  return [image, takeScreenShot, {\n    error: error\n  }];\n};\n/**\n * creates name of file\n * @param {string} extension\n * @param  {string[]} parts of file name\n */\n\n\nvar createFileName = function createFileName() {\n  var extension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n\n  if (!extension) {\n    return '';\n  }\n\n  for (var _len = arguments.length, names = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    names[_key - 1] = arguments[_key];\n  }\n\n  return \"\".concat(names.join(''), \".\").concat(extension);\n};\n\n\n//# sourceMappingURL=index.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlLXJlYWN0LXNjcmVlbnNob3RAMy4wLjBfaHRtbDJjYW52YXNAMS40LjFfcmVhY3RAMTguMC4wL25vZGVfbW9kdWxlcy91c2UtcmVhY3Qtc2NyZWVuc2hvdC9kaXN0L2luZGV4LmVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNLOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsK0JBQStCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Q0FBeUMsU0FBUzs7QUFFbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTs7QUFFQSxrQkFBa0IsK0NBQVE7QUFDMUI7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiwrQ0FBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtEQUFXO0FBQ3RCO0FBQ0EsaUVBQWlFOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFVBQVU7QUFDdEI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFeUM7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vdXNlLXJlYWN0LXNjcmVlbnNob3RAMy4wLjBfaHRtbDJjYW52YXNAMS40LjFfcmVhY3RAMTguMC4wL25vZGVfbW9kdWxlcy91c2UtcmVhY3Qtc2NyZWVuc2hvdC9kaXN0L2luZGV4LmVzLmpzP2IwZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgTWFpbl9Ib29rXG4gKiBIb29rIHJldHVyblxuICogQHR5cGVkZWYge0FycmF5fSBIb29rUmV0dXJuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSG9va1JldHVyblswXSAtIGltYWdlIHN0cmluZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IEhvb2tSZXR1cm5bMV0gLSB0YWtlIHNjcmVlbiBzaG90IHN0cmluZ1xuICogQHByb3BlcnR5IHtvYmplY3R9IEhvb2tSZXR1cm5bMl0gLSBlcnJvcnNcbiAqL1xuXG4vKipcbiAqIGhvb2sgZm9yIGNyZWF0aW5nIHNjcmVlbnNob3QgZnJvbSBodG1sIG5vZGVcbiAqIEByZXR1cm5zIHtIb29rUmV0dXJufVxuICovXG5cbnZhciB1c2VTY3JlZW5zaG90ID0gZnVuY3Rpb24gdXNlU2NyZWVuc2hvdCgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHF1YWxpdHkgPSBfcmVmLnF1YWxpdHk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBpbWFnZSA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbWFnZSA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIF91c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUzLCAyKSxcbiAgICAgIGVycm9yID0gX3VzZVN0YXRlNFswXSxcbiAgICAgIHNldEVycm9yID0gX3VzZVN0YXRlNFsxXTtcbiAgLyoqXG4gICAqIGNvbnZlcnQgaHRtbCBub2RlIHRvIGltYWdlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGVcbiAgICovXG5cblxuICB2YXIgdGFrZVNjcmVlblNob3QgPSBmdW5jdGlvbiB0YWtlU2NyZWVuU2hvdChub2RlKSB7XG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgcHJvdmlkZSBjb3JyZWN0IGh0bWwgbm9kZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbDJjYW52YXMobm9kZSkudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICB2YXIgY3JvcHBlZENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgdmFyIGNyb3BwZWRDYW52YXNDb250ZXh0ID0gY3JvcHBlZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpOyAvLyBpbml0IGRhdGFcblxuICAgICAgdmFyIGNyb3BQb3NpdGlvblRvcCA9IDA7XG4gICAgICB2YXIgY3JvcFBvc2l0aW9uTGVmdCA9IDA7XG4gICAgICB2YXIgY3JvcFdpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgdmFyIGNyb3BIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgY3JvcHBlZENhbnZhcy53aWR0aCA9IGNyb3BXaWR0aDtcbiAgICAgIGNyb3BwZWRDYW52YXMuaGVpZ2h0ID0gY3JvcEhlaWdodDtcbiAgICAgIGNyb3BwZWRDYW52YXNDb250ZXh0LmRyYXdJbWFnZShjYW52YXMsIGNyb3BQb3NpdGlvbkxlZnQsIGNyb3BQb3NpdGlvblRvcCk7XG4gICAgICB2YXIgYmFzZTY0SW1hZ2UgPSBjcm9wcGVkQ2FudmFzLnRvRGF0YVVSTCh0eXBlLCBxdWFsaXR5KTtcbiAgICAgIHNldEltYWdlKGJhc2U2NEltYWdlKTtcbiAgICAgIHJldHVybiBiYXNlNjRJbWFnZTtcbiAgICB9KVtcImNhdGNoXCJdKHNldEVycm9yKTtcbiAgfTtcblxuICByZXR1cm4gW2ltYWdlLCB0YWtlU2NyZWVuU2hvdCwge1xuICAgIGVycm9yOiBlcnJvclxuICB9XTtcbn07XG4vKipcbiAqIGNyZWF0ZXMgbmFtZSBvZiBmaWxlXG4gKiBAcGFyYW0ge3N0cmluZ30gZXh0ZW5zaW9uXG4gKiBAcGFyYW0gIHtzdHJpbmdbXX0gcGFydHMgb2YgZmlsZSBuYW1lXG4gKi9cblxuXG52YXIgY3JlYXRlRmlsZU5hbWUgPSBmdW5jdGlvbiBjcmVhdGVGaWxlTmFtZSgpIHtcbiAgdmFyIGV4dGVuc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJyc7XG5cbiAgaWYgKCFleHRlbnNpb24pIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbmFtZXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG5hbWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBcIlwiLmNvbmNhdChuYW1lcy5qb2luKCcnKSwgXCIuXCIpLmNvbmNhdChleHRlbnNpb24pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRmlsZU5hbWUsIHVzZVNjcmVlbnNob3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/use-react-screenshot@3.0.0_html2canvas@1.4.1_react@18.0.0/node_modules/use-react-screenshot/dist/index.es.js\n");

/***/ })

};
;