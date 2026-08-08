"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _excluded = ["Icon", "iconClass"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var InputGridDeleteRowBtn = function InputGridDeleteRowBtn(_ref) {
  var Icon = _ref.Icon,
    iconClass = _ref.iconClass,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_material.IconButton, _extends({
    variant: "contained",
    color: "error",
    className: "kendo-action-btn",
    tabIndex: -1
  }, otherProps), Icon ? /*#__PURE__*/React.createElement(_material.SvgIcon, {
    className: iconClass
  }, /*#__PURE__*/React.createElement(Icon, null)) : /*#__PURE__*/React.createElement(_Delete["default"], null));
};
var _default = exports["default"] = InputGridDeleteRowBtn;