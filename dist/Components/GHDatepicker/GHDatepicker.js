"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactMultiDatePicker = _interopRequireDefault(require("react-multi-date-picker"));
var _calendarLang = require("../../utils/calendarLang");
var _excluded = ["onCorrectInput", "onWrongInput", "language"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var GHDatepicker = function GHDatepicker(_ref) {
  var onCorrectInput = _ref.onCorrectInput,
    onWrongInput = _ref.onWrongInput,
    _ref$language = _ref.language,
    language = _ref$language === void 0 ? "en" : _ref$language,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_reactMultiDatePicker["default"], _extends({
    calendar: (0, _calendarLang.renderCalendarSwitch)(language),
    locale: (0, _calendarLang.renderCalendarLocaleSwitch)(language),
    calendarPosition: "bottom-right",
    onOpen: false,
    onOpenPickNewDate: false,
    onChange: function onChange(date, _ref2) {
      var input = _ref2.input,
        isTyping = _ref2.isTyping;
      var actualInput = input.querySelector("input");
      if (!isTyping) return onCorrectInput(date); // user selects the date from the calendar and no needs for validation.

      if (actualInput.value.includes("–")) {
        onWrongInput(date);
        return actualInput.value;
      }
      var strings = actualInput.value.split("/");
      var numbers = strings.map(Number);
      var _numbers = _slicedToArray(numbers, 3),
        year = _numbers[0],
        month = _numbers[1],
        day = _numbers[2];
      if (actualInput.value && numbers.some(function (number) {
        return isNaN(number);
      })) {
        return false; //in case user enter something other than digits
      }

      if (month > 12 || month < 0) return false; //month < 0 in case user want to type 01
      if (day < 0 || date && day > date.day) return false;
      if (strings.some(function (val) {
        return val.startsWith("00");
      })) return false;
      return onCorrectInput(date);
    }
  }, props));
};
var _default = GHDatepicker;
exports["default"] = _default;