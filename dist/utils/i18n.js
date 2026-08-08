"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_i18next["default"].use(_reactI18next.initReactI18next).init({
  lng: localStorage.getItem('language') == null ? "fa" : localStorage.getItem('language'),
  //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});
var _default = exports["default"] = _i18next["default"];