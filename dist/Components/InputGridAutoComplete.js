"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InputGridAutoComplete;
var _react = _interopRequireWildcard(require("react"));
var _reactI18next = require("react-i18next");
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _CircularProgress = _interopRequireDefault(require("@mui/material/CircularProgress"));
var _excluded = ["innerWidth", "innerFontSize", "backgroundColor", "loadingState"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function InputGridAutoComplete(_ref) {
  var _ref$innerWidth = _ref.innerWidth,
    innerWidth = _ref$innerWidth === void 0 ? 300 : _ref$innerWidth,
    _ref$innerFontSize = _ref.innerFontSize,
    innerFontSize = _ref$innerFontSize === void 0 ? '12px' : _ref$innerFontSize,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? '#FFFFFF' : _ref$backgroundColor,
    loadingState = _ref.loadingState,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
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
          direction: i18n.dir(),
          position: "absolute",
          fontSize: {
            fontSize: fontSize
          },
          right: i18n.dir() === "rtl" ? "0" : "unset"
        }
      }
    },
    sx: {
      direction: i18n.dir(),
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
    disableClearable: true,
    forcePopupIcon: false,
    noOptionsText: t("اطلاعات یافت نشد"),
    loading: true,
    loadingText: loadingState ? /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null) : t("اطلاعات یافت نشد"),
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
}