"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@protobufjs+aspromise@1.1.2";
exports.ids = ["vendor-chunks/@protobufjs+aspromise@1.1.2"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@protobufjs+aspromise@1.1.2/node_modules/@protobufjs/aspromise/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@protobufjs+aspromise@1.1.2/node_modules/@protobufjs/aspromise/index.js ***!
  \****************************************************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = asPromise;\n/**\r\n * Callback as used by {@link util.asPromise}.\r\n * @typedef asPromiseCallback\r\n * @type {function}\r\n * @param {Error|null} error Error, if any\r\n * @param {...*} params Additional arguments\r\n * @returns {undefined}\r\n */ /**\r\n * Returns a promise from a node-style callback function.\r\n * @memberof util\r\n * @param {asPromiseCallback} fn Function to call\r\n * @param {*} ctx Function context\r\n * @param {...*} params Function arguments\r\n * @returns {Promise<*>} Promisified function\r\n */ function asPromise(fn, ctx /*, varargs */ ) {\n    var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;\n    while(index < arguments.length)params[offset++] = arguments[index++];\n    return new Promise(function executor(resolve, reject) {\n        params[offset] = function callback(err /*, varargs */ ) {\n            if (pending) {\n                pending = false;\n                if (err) reject(err);\n                else {\n                    var params = new Array(arguments.length - 1), offset = 0;\n                    while(offset < params.length)params[offset++] = arguments[offset];\n                    resolve.apply(null, params);\n                }\n            }\n        };\n        try {\n            fn.apply(ctx || null, params);\n        } catch (err) {\n            if (pending) {\n                pending = false;\n                reject(err);\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMrYXNwcm9taXNlQDEuMS4yL25vZGVfbW9kdWxlcy9AcHJvdG9idWZqcy9hc3Byb21pc2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsT0FBT0MsT0FBTyxHQUFHQztBQUVqQjs7Ozs7OztDQU9DLEdBRUQ7Ozs7Ozs7Q0FPQyxHQUNELFNBQVNBLFVBQVVDLEVBQUUsRUFBRUMsSUFBRyxZQUFZLEdBQVo7SUFDdEIsSUFBSUMsU0FBVSxJQUFJQyxNQUFNQyxVQUFVQyxNQUFNLEdBQUcsSUFDdkNDLFNBQVUsR0FDVkMsUUFBVSxHQUNWQyxVQUFVO0lBQ2QsTUFBT0QsUUFBUUgsVUFBVUMsTUFBTSxDQUMzQkgsTUFBTSxDQUFDSSxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0csUUFBUTtJQUN6QyxPQUFPLElBQUlFLFFBQVEsU0FBU0MsU0FBU0MsT0FBTyxFQUFFQyxNQUFNO1FBQ2hEVixNQUFNLENBQUNJLE9BQU8sR0FBRyxTQUFTTyxTQUFTQyxJQUFHLFlBQVksR0FBWjtZQUNsQyxJQUFJTixTQUFTO2dCQUNUQSxVQUFVO2dCQUNWLElBQUlNLEtBQ0FGLE9BQU9FO3FCQUNOO29CQUNELElBQUlaLFNBQVMsSUFBSUMsTUFBTUMsVUFBVUMsTUFBTSxHQUFHLElBQ3RDQyxTQUFTO29CQUNiLE1BQU9BLFNBQVNKLE9BQU9HLE1BQU0sQ0FDekJILE1BQU0sQ0FBQ0ksU0FBUyxHQUFHRixTQUFTLENBQUNFLE9BQU87b0JBQ3hDSyxRQUFRSSxLQUFLLENBQUMsTUFBTWI7Z0JBQ3hCO1lBQ0o7UUFDSjtRQUNBLElBQUk7WUFDQUYsR0FBR2UsS0FBSyxDQUFDZCxPQUFPLE1BQU1DO1FBQzFCLEVBQUUsT0FBT1ksS0FBSztZQUNWLElBQUlOLFNBQVM7Z0JBQ1RBLFVBQVU7Z0JBQ1ZJLE9BQU9FO1lBQ1g7UUFDSjtJQUNKO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMrYXNwcm9taXNlQDEuMS4yL25vZGVfbW9kdWxlcy9AcHJvdG9idWZqcy9hc3Byb21pc2UvaW5kZXguanM/NGIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxubW9kdWxlLmV4cG9ydHMgPSBhc1Byb21pc2U7XHJcblxyXG4vKipcclxuICogQ2FsbGJhY2sgYXMgdXNlZCBieSB7QGxpbmsgdXRpbC5hc1Byb21pc2V9LlxyXG4gKiBAdHlwZWRlZiBhc1Byb21pc2VDYWxsYmFja1xyXG4gKiBAdHlwZSB7ZnVuY3Rpb259XHJcbiAqIEBwYXJhbSB7RXJyb3J8bnVsbH0gZXJyb3IgRXJyb3IsIGlmIGFueVxyXG4gKiBAcGFyYW0gey4uLip9IHBhcmFtcyBBZGRpdGlvbmFsIGFyZ3VtZW50c1xyXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSBmcm9tIGEgbm9kZS1zdHlsZSBjYWxsYmFjayBmdW5jdGlvbi5cclxuICogQG1lbWJlcm9mIHV0aWxcclxuICogQHBhcmFtIHthc1Byb21pc2VDYWxsYmFja30gZm4gRnVuY3Rpb24gdG8gY2FsbFxyXG4gKiBAcGFyYW0geyp9IGN0eCBGdW5jdGlvbiBjb250ZXh0XHJcbiAqIEBwYXJhbSB7Li4uKn0gcGFyYW1zIEZ1bmN0aW9uIGFyZ3VtZW50c1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqPn0gUHJvbWlzaWZpZWQgZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIGFzUHJvbWlzZShmbiwgY3R4LyosIHZhcmFyZ3MgKi8pIHtcclxuICAgIHZhciBwYXJhbXMgID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKSxcclxuICAgICAgICBvZmZzZXQgID0gMCxcclxuICAgICAgICBpbmRleCAgID0gMixcclxuICAgICAgICBwZW5kaW5nID0gdHJ1ZTtcclxuICAgIHdoaWxlIChpbmRleCA8IGFyZ3VtZW50cy5sZW5ndGgpXHJcbiAgICAgICAgcGFyYW1zW29mZnNldCsrXSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBwYXJhbXNbb2Zmc2V0XSA9IGZ1bmN0aW9uIGNhbGxiYWNrKGVyci8qLCB2YXJhcmdzICovKSB7XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA8IHBhcmFtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtc1tvZmZzZXQrK10gPSBhcmd1bWVudHNbb2Zmc2V0XTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlLmFwcGx5KG51bGwsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KGN0eCB8fCBudWxsLCBwYXJhbXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImFzUHJvbWlzZSIsImZuIiwiY3R4IiwicGFyYW1zIiwiQXJyYXkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJvZmZzZXQiLCJpbmRleCIsInBlbmRpbmciLCJQcm9taXNlIiwiZXhlY3V0b3IiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2FsbGJhY2siLCJlcnIiLCJhcHBseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@protobufjs+aspromise@1.1.2/node_modules/@protobufjs/aspromise/index.js\n");

/***/ })

};
;