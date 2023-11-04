"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@protobufjs+utf8@1.1.0";
exports.ids = ["vendor-chunks/@protobufjs+utf8@1.1.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@protobufjs+utf8@1.1.0/node_modules/@protobufjs/utf8/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/@protobufjs+utf8@1.1.0/node_modules/@protobufjs/utf8/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n/**\r\n * A minimal UTF8 implementation for number arrays.\r\n * @memberof util\r\n * @namespace\r\n */ var utf8 = exports;\n/**\r\n * Calculates the UTF8 byte length of a string.\r\n * @param {string} string String\r\n * @returns {number} Byte length\r\n */ utf8.length = function utf8_length(string) {\n    var len = 0, c = 0;\n    for(var i = 0; i < string.length; ++i){\n        c = string.charCodeAt(i);\n        if (c < 128) len += 1;\n        else if (c < 2048) len += 2;\n        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {\n            ++i;\n            len += 4;\n        } else len += 3;\n    }\n    return len;\n};\n/**\r\n * Reads UTF8 bytes as a string.\r\n * @param {Uint8Array} buffer Source buffer\r\n * @param {number} start Source start\r\n * @param {number} end Source end\r\n * @returns {string} String read\r\n */ utf8.read = function utf8_read(buffer, start, end) {\n    var len = end - start;\n    if (len < 1) return \"\";\n    var parts = null, chunk = [], i = 0, t; // temporary\n    while(start < end){\n        t = buffer[start++];\n        if (t < 128) chunk[i++] = t;\n        else if (t > 191 && t < 224) chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;\n        else if (t > 239 && t < 365) {\n            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;\n            chunk[i++] = 0xD800 + (t >> 10);\n            chunk[i++] = 0xDC00 + (t & 1023);\n        } else chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;\n        if (i > 8191) {\n            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));\n            i = 0;\n        }\n    }\n    if (parts) {\n        if (i) parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));\n        return parts.join(\"\");\n    }\n    return String.fromCharCode.apply(String, chunk.slice(0, i));\n};\n/**\r\n * Writes a string as UTF8 bytes.\r\n * @param {string} string Source string\r\n * @param {Uint8Array} buffer Destination buffer\r\n * @param {number} offset Destination offset\r\n * @returns {number} Bytes written\r\n */ utf8.write = function utf8_write(string, buffer, offset) {\n    var start = offset, c1, c2; // character 2\n    for(var i = 0; i < string.length; ++i){\n        c1 = string.charCodeAt(i);\n        if (c1 < 128) {\n            buffer[offset++] = c1;\n        } else if (c1 < 2048) {\n            buffer[offset++] = c1 >> 6 | 192;\n            buffer[offset++] = c1 & 63 | 128;\n        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {\n            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);\n            ++i;\n            buffer[offset++] = c1 >> 18 | 240;\n            buffer[offset++] = c1 >> 12 & 63 | 128;\n            buffer[offset++] = c1 >> 6 & 63 | 128;\n            buffer[offset++] = c1 & 63 | 128;\n        } else {\n            buffer[offset++] = c1 >> 12 | 224;\n            buffer[offset++] = c1 >> 6 & 63 | 128;\n            buffer[offset++] = c1 & 63 | 128;\n        }\n    }\n    return offset - start;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMrdXRmOEAxLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvdXRmOC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViOzs7O0NBSUMsR0FDRCxJQUFJQSxPQUFPQztBQUVYOzs7O0NBSUMsR0FDREQsS0FBS0UsTUFBTSxHQUFHLFNBQVNDLFlBQVlDLE1BQU07SUFDckMsSUFBSUMsTUFBTSxHQUNOQyxJQUFJO0lBQ1IsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE9BQU9GLE1BQU0sRUFBRSxFQUFFSyxFQUFHO1FBQ3BDRCxJQUFJRixPQUFPSSxVQUFVLENBQUNEO1FBQ3RCLElBQUlELElBQUksS0FDSkQsT0FBTzthQUNOLElBQUlDLElBQUksTUFDVEQsT0FBTzthQUNOLElBQUksQ0FBQ0MsSUFBSSxNQUFLLE1BQU8sVUFBVSxDQUFDRixPQUFPSSxVQUFVLENBQUNELElBQUksS0FBSyxNQUFLLE1BQU8sUUFBUTtZQUNoRixFQUFFQTtZQUNGRixPQUFPO1FBQ1gsT0FDSUEsT0FBTztJQUNmO0lBQ0EsT0FBT0E7QUFDWDtBQUVBOzs7Ozs7Q0FNQyxHQUNETCxLQUFLUyxJQUFJLEdBQUcsU0FBU0MsVUFBVUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEdBQUc7SUFDN0MsSUFBSVIsTUFBTVEsTUFBTUQ7SUFDaEIsSUFBSVAsTUFBTSxHQUNOLE9BQU87SUFDWCxJQUFJUyxRQUFRLE1BQ1JDLFFBQVEsRUFBRSxFQUNWUixJQUFJLEdBQ0pTLEdBQU8sWUFBWTtJQUN2QixNQUFPSixRQUFRQyxJQUFLO1FBQ2hCRyxJQUFJTCxNQUFNLENBQUNDLFFBQVE7UUFDbkIsSUFBSUksSUFBSSxLQUNKRCxLQUFLLENBQUNSLElBQUksR0FBR1M7YUFDWixJQUFJQSxJQUFJLE9BQU9BLElBQUksS0FDcEJELEtBQUssQ0FBQ1IsSUFBSSxHQUFHLENBQUNTLElBQUksRUFBQyxLQUFNLElBQUlMLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHO2FBQzlDLElBQUlJLElBQUksT0FBT0EsSUFBSSxLQUFLO1lBQ3pCQSxJQUFJLENBQUMsQ0FBQ0EsSUFBSSxNQUFNLEtBQUssQ0FBQ0wsTUFBTSxDQUFDQyxRQUFRLEdBQUcsRUFBQyxLQUFNLEtBQUssQ0FBQ0QsTUFBTSxDQUFDQyxRQUFRLEdBQUcsRUFBQyxLQUFNLElBQUlELE1BQU0sQ0FBQ0MsUUFBUSxHQUFHLEVBQUMsSUFBSztZQUMxR0csS0FBSyxDQUFDUixJQUFJLEdBQUcsU0FBVVMsQ0FBQUEsS0FBSyxFQUFDO1lBQzdCRCxLQUFLLENBQUNSLElBQUksR0FBRyxTQUFVUyxDQUFBQSxJQUFJLElBQUc7UUFDbEMsT0FDSUQsS0FBSyxDQUFDUixJQUFJLEdBQUcsQ0FBQ1MsSUFBSSxFQUFDLEtBQU0sS0FBSyxDQUFDTCxNQUFNLENBQUNDLFFBQVEsR0FBRyxFQUFDLEtBQU0sSUFBSUQsTUFBTSxDQUFDQyxRQUFRLEdBQUc7UUFDbEYsSUFBSUwsSUFBSSxNQUFNO1lBQ1RPLENBQUFBLFNBQVVBLENBQUFBLFFBQVEsRUFBRSxHQUFHRyxJQUFJLENBQUNDLE9BQU9DLFlBQVksQ0FBQ0MsS0FBSyxDQUFDRixRQUFRSDtZQUMvRFIsSUFBSTtRQUNSO0lBQ0o7SUFDQSxJQUFJTyxPQUFPO1FBQ1AsSUFBSVAsR0FDQU8sTUFBTUcsSUFBSSxDQUFDQyxPQUFPQyxZQUFZLENBQUNDLEtBQUssQ0FBQ0YsUUFBUUgsTUFBTU0sS0FBSyxDQUFDLEdBQUdkO1FBQ2hFLE9BQU9PLE1BQU1RLElBQUksQ0FBQztJQUN0QjtJQUNBLE9BQU9KLE9BQU9DLFlBQVksQ0FBQ0MsS0FBSyxDQUFDRixRQUFRSCxNQUFNTSxLQUFLLENBQUMsR0FBR2Q7QUFDNUQ7QUFFQTs7Ozs7O0NBTUMsR0FDRFAsS0FBS3VCLEtBQUssR0FBRyxTQUFTQyxXQUFXcEIsTUFBTSxFQUFFTyxNQUFNLEVBQUVjLE1BQU07SUFDbkQsSUFBSWIsUUFBUWEsUUFDUkMsSUFDQUMsSUFBSSxjQUFjO0lBQ3RCLElBQUssSUFBSXBCLElBQUksR0FBR0EsSUFBSUgsT0FBT0YsTUFBTSxFQUFFLEVBQUVLLEVBQUc7UUFDcENtQixLQUFLdEIsT0FBT0ksVUFBVSxDQUFDRDtRQUN2QixJQUFJbUIsS0FBSyxLQUFLO1lBQ1ZmLE1BQU0sQ0FBQ2MsU0FBUyxHQUFHQztRQUN2QixPQUFPLElBQUlBLEtBQUssTUFBTTtZQUNsQmYsTUFBTSxDQUFDYyxTQUFTLEdBQUdDLE1BQU0sSUFBVTtZQUNuQ2YsTUFBTSxDQUFDYyxTQUFTLEdBQUdDLEtBQVcsS0FBSztRQUN2QyxPQUFPLElBQUksQ0FBQ0EsS0FBSyxNQUFLLE1BQU8sVUFBVSxDQUFDLENBQUNDLEtBQUt2QixPQUFPSSxVQUFVLENBQUNELElBQUksRUFBQyxJQUFLLE1BQUssTUFBTyxRQUFRO1lBQzFGbUIsS0FBSyxVQUFXLEVBQUNBLEtBQUssTUFBSyxLQUFNLEVBQUMsSUFBTUMsQ0FBQUEsS0FBSyxNQUFLO1lBQ2xELEVBQUVwQjtZQUNGSSxNQUFNLENBQUNjLFNBQVMsR0FBR0MsTUFBTSxLQUFVO1lBQ25DZixNQUFNLENBQUNjLFNBQVMsR0FBR0MsTUFBTSxLQUFLLEtBQUs7WUFDbkNmLE1BQU0sQ0FBQ2MsU0FBUyxHQUFHQyxNQUFNLElBQUssS0FBSztZQUNuQ2YsTUFBTSxDQUFDYyxTQUFTLEdBQUdDLEtBQVcsS0FBSztRQUN2QyxPQUFPO1lBQ0hmLE1BQU0sQ0FBQ2MsU0FBUyxHQUFHQyxNQUFNLEtBQVU7WUFDbkNmLE1BQU0sQ0FBQ2MsU0FBUyxHQUFHQyxNQUFNLElBQUssS0FBSztZQUNuQ2YsTUFBTSxDQUFDYyxTQUFTLEdBQUdDLEtBQVcsS0FBSztRQUN2QztJQUNKO0lBQ0EsT0FBT0QsU0FBU2I7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vQHByb3RvYnVmanMrdXRmOEAxLjEuMC9ub2RlX21vZHVsZXMvQHByb3RvYnVmanMvdXRmOC9pbmRleC5qcz80MGU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgbWluaW1hbCBVVEY4IGltcGxlbWVudGF0aW9uIGZvciBudW1iZXIgYXJyYXlzLlxyXG4gKiBAbWVtYmVyb2YgdXRpbFxyXG4gKiBAbmFtZXNwYWNlXHJcbiAqL1xyXG52YXIgdXRmOCA9IGV4cG9ydHM7XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgVVRGOCBieXRlIGxlbmd0aCBvZiBhIHN0cmluZy5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBTdHJpbmdcclxuICogQHJldHVybnMge251bWJlcn0gQnl0ZSBsZW5ndGhcclxuICovXHJcbnV0ZjgubGVuZ3RoID0gZnVuY3Rpb24gdXRmOF9sZW5ndGgoc3RyaW5nKSB7XHJcbiAgICB2YXIgbGVuID0gMCxcclxuICAgICAgICBjID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KVxyXG4gICAgICAgICAgICBsZW4gKz0gMTtcclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OClcclxuICAgICAgICAgICAgbGVuICs9IDI7XHJcbiAgICAgICAgZWxzZSBpZiAoKGMgJiAweEZDMDApID09PSAweEQ4MDAgJiYgKHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4RkMwMCkgPT09IDB4REMwMCkge1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGxlbiArPSA0O1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICBsZW4gKz0gMztcclxuICAgIH1cclxuICAgIHJldHVybiBsZW47XHJcbn07XHJcblxyXG4vKipcclxuICogUmVhZHMgVVRGOCBieXRlcyBhcyBhIHN0cmluZy5cclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIgU291cmNlIGJ1ZmZlclxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgU291cmNlIHN0YXJ0XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgU291cmNlIGVuZFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBTdHJpbmcgcmVhZFxyXG4gKi9cclxudXRmOC5yZWFkID0gZnVuY3Rpb24gdXRmOF9yZWFkKGJ1ZmZlciwgc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0O1xyXG4gICAgaWYgKGxlbiA8IDEpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB2YXIgcGFydHMgPSBudWxsLFxyXG4gICAgICAgIGNodW5rID0gW10sXHJcbiAgICAgICAgaSA9IDAsIC8vIGNoYXIgb2Zmc2V0XHJcbiAgICAgICAgdDsgICAgIC8vIHRlbXBvcmFyeVxyXG4gICAgd2hpbGUgKHN0YXJ0IDwgZW5kKSB7XHJcbiAgICAgICAgdCA9IGJ1ZmZlcltzdGFydCsrXTtcclxuICAgICAgICBpZiAodCA8IDEyOClcclxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IHQ7XHJcbiAgICAgICAgZWxzZSBpZiAodCA+IDE5MSAmJiB0IDwgMjI0KVxyXG4gICAgICAgICAgICBjaHVua1tpKytdID0gKHQgJiAzMSkgPDwgNiB8IGJ1ZmZlcltzdGFydCsrXSAmIDYzO1xyXG4gICAgICAgIGVsc2UgaWYgKHQgPiAyMzkgJiYgdCA8IDM2NSkge1xyXG4gICAgICAgICAgICB0ID0gKCh0ICYgNykgPDwgMTggfCAoYnVmZmVyW3N0YXJ0KytdICYgNjMpIDw8IDEyIHwgKGJ1ZmZlcltzdGFydCsrXSAmIDYzKSA8PCA2IHwgYnVmZmVyW3N0YXJ0KytdICYgNjMpIC0gMHgxMDAwMDtcclxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IDB4RDgwMCArICh0ID4+IDEwKTtcclxuICAgICAgICAgICAgY2h1bmtbaSsrXSA9IDB4REMwMCArICh0ICYgMTAyMyk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIGNodW5rW2krK10gPSAodCAmIDE1KSA8PCAxMiB8IChidWZmZXJbc3RhcnQrK10gJiA2MykgPDwgNiB8IGJ1ZmZlcltzdGFydCsrXSAmIDYzO1xyXG4gICAgICAgIGlmIChpID4gODE5MSkge1xyXG4gICAgICAgICAgICAocGFydHMgfHwgKHBhcnRzID0gW10pKS5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjaHVuaykpO1xyXG4gICAgICAgICAgICBpID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFydHMpIHtcclxuICAgICAgICBpZiAoaSlcclxuICAgICAgICAgICAgcGFydHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2h1bmsuc2xpY2UoMCwgaSkpKTtcclxuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIlwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY2h1bmsuc2xpY2UoMCwgaSkpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFdyaXRlcyBhIHN0cmluZyBhcyBVVEY4IGJ5dGVzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFNvdXJjZSBzdHJpbmdcclxuICogQHBhcmFtIHtVaW50OEFycmF5fSBidWZmZXIgRGVzdGluYXRpb24gYnVmZmVyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgRGVzdGluYXRpb24gb2Zmc2V0XHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IEJ5dGVzIHdyaXR0ZW5cclxuICovXHJcbnV0Zjgud3JpdGUgPSBmdW5jdGlvbiB1dGY4X3dyaXRlKHN0cmluZywgYnVmZmVyLCBvZmZzZXQpIHtcclxuICAgIHZhciBzdGFydCA9IG9mZnNldCxcclxuICAgICAgICBjMSwgLy8gY2hhcmFjdGVyIDFcclxuICAgICAgICBjMjsgLy8gY2hhcmFjdGVyIDJcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgYzEgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYzEgPCAxMjgpIHtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYzEgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSA+PiA2ICAgICAgIHwgMTkyO1xyXG4gICAgICAgICAgICBidWZmZXJbb2Zmc2V0KytdID0gYzEgICAgICAgJiA2MyB8IDEyODtcclxuICAgICAgICB9IGVsc2UgaWYgKChjMSAmIDB4RkMwMCkgPT09IDB4RDgwMCAmJiAoKGMyID0gc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpKSAmIDB4RkMwMCkgPT09IDB4REMwMCkge1xyXG4gICAgICAgICAgICBjMSA9IDB4MTAwMDAgKyAoKGMxICYgMHgwM0ZGKSA8PCAxMCkgKyAoYzIgJiAweDAzRkYpO1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSA+PiAxOCAgICAgIHwgMjQwO1xyXG4gICAgICAgICAgICBidWZmZXJbb2Zmc2V0KytdID0gYzEgPj4gMTIgJiA2MyB8IDEyODtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxID4+IDYgICYgNjMgfCAxMjg7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSAgICAgICAmIDYzIHwgMTI4O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltvZmZzZXQrK10gPSBjMSA+PiAxMiAgICAgIHwgMjI0O1xyXG4gICAgICAgICAgICBidWZmZXJbb2Zmc2V0KytdID0gYzEgPj4gNiAgJiA2MyB8IDEyODtcclxuICAgICAgICAgICAgYnVmZmVyW29mZnNldCsrXSA9IGMxICAgICAgICYgNjMgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9mZnNldCAtIHN0YXJ0O1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXRmOCIsImV4cG9ydHMiLCJsZW5ndGgiLCJ1dGY4X2xlbmd0aCIsInN0cmluZyIsImxlbiIsImMiLCJpIiwiY2hhckNvZGVBdCIsInJlYWQiLCJ1dGY4X3JlYWQiLCJidWZmZXIiLCJzdGFydCIsImVuZCIsInBhcnRzIiwiY2h1bmsiLCJ0IiwicHVzaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5Iiwic2xpY2UiLCJqb2luIiwid3JpdGUiLCJ1dGY4X3dyaXRlIiwib2Zmc2V0IiwiYzEiLCJjMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@protobufjs+utf8@1.1.0/node_modules/@protobufjs/utf8/index.js\n");

/***/ })

};
;