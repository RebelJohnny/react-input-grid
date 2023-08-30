"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCurrencyInputField = _interopRequireDefault(require("react-currency-input-field"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var GHCurrencyInput = function GHCurrencyInput(props) {
  return /*#__PURE__*/_react["default"].createElement(_reactCurrencyInputField["default"], _extends({
    className: "form-input",
    decimalsLimit: 2,
    autoComplete: "off"
  }, props));
};
var _default = GHCurrencyInput;
exports["default"] = _default;