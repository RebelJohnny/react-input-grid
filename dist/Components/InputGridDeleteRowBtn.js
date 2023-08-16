"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InputGridDeleteRowBtn;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function InputGridDeleteRowBtn(props) {
  return /*#__PURE__*/_react["default"].createElement(_material.IconButton, _extends({
    variant: "contained",
    color: "error",
    className: "kendo-action-btn"
  }, props), /*#__PURE__*/_react["default"].createElement(_Delete["default"], null));
}