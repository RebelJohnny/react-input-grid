"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _excluded = ["noOptionsText", "innerWidth", "innerFontSize", "backgroundColor", "loadingState", "allowClear", "dir"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GHAutocomplete = function GHAutocomplete(_ref) {
  var _ref$noOptionsText = _ref.noOptionsText,
    noOptionsText = _ref$noOptionsText === void 0 ? "" : _ref$noOptionsText,
    _ref$innerWidth = _ref.innerWidth,
    innerWidth = _ref$innerWidth === void 0 ? 300 : _ref$innerWidth,
    _ref$innerFontSize = _ref.innerFontSize,
    innerFontSize = _ref$innerFontSize === void 0 ? '12px' : _ref$innerFontSize,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#FFFFFF' : _ref$backgroundColor,
    loadingState = _ref.loadingState,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    _ref$dir = _ref.dir,
    dir = _ref$dir === void 0 ? "ltr" : _ref$dir,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(innerWidth),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = (0, _react.useState)(innerFontSize),
    _useState4 = _slicedToArray(_useState3, 2),
    fontSize = _useState4[0],
    setFontSize = _useState4[1];
  var _useState5 = (0, _react.useState)(backgroundColor),
    _useState6 = _slicedToArray(_useState5, 2),
    bgColor = _useState6[0],
    setBgColor = _useState6[1];
  return /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], _extends({
    componentsProps: {
      paper: {
        sx: {
          width: {
            width: width
          },
          maxWidth: '90vw',
          direction: dir,
          position: "absolute",
          fontSize: {
            fontSize: fontSize
          },
          right: dir === "rtl" ? "0" : "unset"
        }
      }
    },
    sx: {
      direction: dir,
      position: "relative",
      background: {
        bgColor: bgColor
      },
      borderRadius: 0,
      fontSize: {
        fontSize: fontSize
      }
    },
    size: "small",
    isOptionEqualToValue: function isOptionEqualToValue(option, value) {
      return (option === null || option === void 0 ? void 0 : option.value) === (value === null || value === void 0 ? void 0 : value.value);
    },
    disableClearable: !allowClear,
    forcePopupIcon: false,
    noOptionsText: noOptionsText,
    loading: true,
    loadingText: loadingState ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null) : noOptionsText,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: params.InputProps.ref
      }, /*#__PURE__*/_react["default"].createElement("input", _extends({
        type: "text"
      }, params.inputProps, {
        className: "form-input"
      })));
    }
  }, props));
};
var _default = GHAutocomplete;
exports["default"] = _default;