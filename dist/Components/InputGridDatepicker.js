"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactMultiDatePicker = _interopRequireDefault(require("react-multi-date-picker"));
var _calenderLang = require("../../utils/calenderLang");
var _reactI18next = require("react-i18next");
require("../style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var InputGridDatepicker = function InputGridDatepicker(props) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  return /*#__PURE__*/React.createElement(_reactMultiDatePicker["default"], _extends({
    calendar: (0, _calenderLang.renderCalendarSwitch)(i18n.language),
    locale: (0, _calenderLang.renderCalendarLocaleSwitch)(i18n.language),
    calendarPosition: "bottom-right",
    onOpen: false,
    onOpenPickNewDate: false
  }, props));
};
var _default = InputGridDatepicker;
exports["default"] = _default;