"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "InputGridAutoComplete", {
  enumerable: true,
  get: function get() {
    return _InputGridAutoComplete["default"];
  }
});
Object.defineProperty(exports, "InputGridCurrencyInput", {
  enumerable: true,
  get: function get() {
    return _InputGridCurrencyInput["default"];
  }
});
Object.defineProperty(exports, "InputGridDatepicker", {
  enumerable: true,
  get: function get() {
    return _InputGridDatepicker["default"];
  }
});
Object.defineProperty(exports, "InputGridInput", {
  enumerable: true,
  get: function get() {
    return _InputGridInput["default"];
  }
});
Object.defineProperty(exports, "KeyboardNavigation", {
  enumerable: true,
  get: function get() {
    return _gridNavigation["default"];
  }
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
require("./style.css");
var _reactI18next = require("react-i18next");
var _formik = require("formik");
var _InputGridDeleteRowBtn = _interopRequireDefault(require("./components/InputGridDeleteRowBtn"));
var _material = require("@mui/material");
var _createTableError = require("./utils/createTableError");
var _gridNavigation = _interopRequireWildcard(require("./utils/gridNavigation"));
var _InputGridAutoComplete = _interopRequireDefault(require("./components/InputGridAutoComplete"));
var _InputGridCurrencyInput = _interopRequireDefault(require("./components/InputGridCurrencyInput"));
var _InputGridDatepicker = _interopRequireDefault(require("./components/InputGridDatepicker"));
var _InputGridInput = _interopRequireDefault(require("./components/InputGridInput"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var GHGrid = function GHGrid(_ref) {
  var title = _ref.title,
    fieldArrayName = _ref.fieldArrayName,
    fieldArrayKey = _ref.fieldArrayKey,
    fieldArrayValues = _ref.fieldArrayValues,
    fieldArrayErrors = _ref.fieldArrayErrors,
    columns = _ref.columns,
    footer = _ref.footer,
    addRowFunction = _ref.addRowFunction,
    rowFocusFunction = _ref.rowFocusFunction,
    rowFocusState = _ref.rowFocusState,
    removeRowOperation = _ref.removeRowOperation,
    _ref$showFooter = _ref.showFooter,
    showFooter = _ref$showFooter === void 0 ? "true" : _ref$showFooter,
    _ref$showDelete = _ref.showDelete,
    showDelete = _ref$showDelete === void 0 ? "true" : _ref$showDelete,
    _ref$showAddButton = _ref.showAddButton,
    showAddButton = _ref$showAddButton === void 0 ? "true" : _ref$showAddButton,
    customUpperButtonFunction = _ref.customUpperButtonFunction;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t,
    i18n = _useTranslation.i18n;
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content col-lg-6 col-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title mb-0"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "span"
  }, " ", title, " "))), typeof customUpperButtonFunction === "undefined" ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "content col-lg-6 col-6"
  }, showAddButton ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "outlined",
    className: "grid-add-btn",
    onClick: function onClick(e) {
      addRowFunction();
      setTimeout(function () {
        var added = e.target.closest("div").parentElement.nextSibling.querySelector('tbody tr:last-child td:nth-child(2)');
        while (added.querySelector("button:not([aria-label='Clear'])") || added.querySelector("input").disabled) {
          added = (0, _gridNavigation.findNextFocusable)(added);
        }
        added.querySelector("input").focus();
      }, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))) : null) : customUpperButtonFunction(), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content col-lg-12 col-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-responsive sticky-h-f gridRow ".concat(theme.palette.mode === 'dark' ? 'dark' : '')
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "table table-bordered "
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("th", null, t("ردیف")), columns.map(function (column, index) {
    return column.show || typeof column.show === "undefined" ? /*#__PURE__*/_react["default"].createElement("th", {
      key: index
    }, column.header) : null;
  }), showDelete ? /*#__PURE__*/_react["default"].createElement("th", null, t("حذف")) : null)), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(_formik.FieldArray, {
    name: fieldArrayName,
    validateOnChange: false,
    render: function render(_ref2) {
      var push = _ref2.push,
        remove = _ref2.remove;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, fieldArrayValues === null || fieldArrayValues === void 0 ? void 0 : fieldArrayValues.map(function (item, arrayIndex) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          style: {
            cursor: 'pointer'
          },
          key: item[fieldArrayKey],
          className: rowFocusState === arrayIndex + 1 ? 'focus-row-bg' : '',
          onFocus: function onFocus(e) {
            return rowFocusFunction(e);
          }
        }, /*#__PURE__*/_react["default"].createElement("td", {
          className: "text-center",
          style: {
            verticalAlign: 'middle',
            width: '40px'
          }
        }, arrayIndex + 1), columns.map(function (column, index) {
          return column.show || typeof column.show === "undefined" ? /*#__PURE__*/_react["default"].createElement("td", {
            key: index,
            style: {
              width: column.width,
              minWidth: column.minWidth
            }
          }, column.content(arrayIndex)) : null;
        }), showDelete ? /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            width: '40px'
          }
        }, /*#__PURE__*/_react["default"].createElement(_InputGridDeleteRowBtn["default"], {
          onClick: function onClick() {
            removeRowOperation(arrayIndex);
            remove(arrayIndex);
          }
        })) : null);
      }));
    }
  })), showFooter ? /*#__PURE__*/_react["default"].createElement("tfoot", null, /*#__PURE__*/_react["default"].createElement("tr", null, footer.map(function (footerCell, index) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      key: index,
      colSpan: footerCell.colspan ? footerCell.colspan : 1
    }, footerCell.content ? footerCell.content() : null);
  }))) : null)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row align-items-start"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "content col-lg-12 col-md-12 col-12"
  }, fieldArrayErrors === null || fieldArrayErrors === void 0 ? void 0 : fieldArrayErrors.map(function (error, index) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "error-msg",
      key: index
    }, error ? " ".concat(t("ردیف"), " ").concat(index + 1, " : ").concat((0, _createTableError.CreateTableError)(error)) : null);
  }))));
};
var _default = GHGrid;
exports["default"] = _default;