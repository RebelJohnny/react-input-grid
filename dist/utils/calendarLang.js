"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCalendarLocaleSwitch = renderCalendarLocaleSwitch;
exports.renderCalendarSwitch = renderCalendarSwitch;
var _persian = _interopRequireDefault(require("react-date-object/calendars/persian"));
var _persian_fa = _interopRequireDefault(require("react-date-object/locales/persian_fa"));
var _arabic = _interopRequireDefault(require("react-date-object/calendars/arabic"));
var _gregorian = _interopRequireDefault(require("react-date-object/calendars/gregorian"));
var _arabic_ar = _interopRequireDefault(require("react-date-object/locales/arabic_ar"));
var _gregorian_en = _interopRequireDefault(require("react-date-object/locales/gregorian_en"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function renderCalendarSwitch(param) {
  switch (param) {
    case 'fa':
      return _persian["default"];
    case 'en':
      return _gregorian["default"];
    case 'ar':
      return _arabic["default"];
    default:
      break;
  }
}
function renderCalendarLocaleSwitch(param) {
  switch (param) {
    case 'fa':
      return _persian_fa["default"];
    case 'en':
      return _gregorian_en["default"];
    case 'ar':
      return _arabic_ar["default"];
    default:
      break;
  }
}