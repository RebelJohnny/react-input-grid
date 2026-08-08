"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
require("./style.css");
var _formik = require("formik");
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _createTableError = require("./utils/createTableError");
var _GridNavigation = require("./utils/GridNavigation/GridNavigation");
var _uuid = require("uuid");
var _InputGridDeleteRowBtn = _interopRequireDefault(require("./components/InputGridDeleteRowBtn"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; var r = _regenerator(), e = r.m(_regeneratorRuntime), t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor; function n(r) { var e = "function" == typeof r && r.constructor; return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name)); } var o = { "throw": 1, "return": 2, "break": 3, "continue": 3 }; function a(r) { var e, t; return function (n) { e || (e = { stop: function stop() { return t(n.a, 2); }, "catch": function _catch() { return n.v; }, abrupt: function abrupt(r, e) { return t(n.a, o[r], e); }, delegateYield: function delegateYield(r, o, a) { return e.resultName = o, t(n.d, _regeneratorValues(r), a); }, finish: function finish(r) { return t(n.f, r); } }, t = function t(r, _t, o) { n.p = e.prev, n.n = e.next; try { return r(_t, o); } finally { e.next = n.n; } }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n; try { return r.call(this, e); } finally { n.p = e.prev, n.n = e.next; } }; } return (_regeneratorRuntime = function _regeneratorRuntime() { return { wrap: function wrap(e, t, n, o) { return r.w(a(e), t, n, o && o.reverse()); }, isGeneratorFunction: n, mark: r.m, awrap: function awrap(r, e) { return new _OverloadYield(r, e); }, AsyncIterator: _regeneratorAsyncIterator, async: function async(r, e, t, o, u) { return (n(e) ? _regeneratorAsyncGen : _regeneratorAsync)(a(r), e, t, o, u); }, keys: _regeneratorKeys, values: _regeneratorValues }; })(); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regeneratorKeys(e) { var n = Object(e), r = []; for (var t in n) r.unshift(t); return function e() { for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e; return e.done = !0, e; }; }
function _regeneratorAsync(n, e, r, t, o) { var a = _regeneratorAsyncGen(n, e, r, t, o); return a.next().then(function (n) { return n.done ? n.value : a.next(); }); }
function _regeneratorAsyncGen(r, e, t, o, n) { return new _regeneratorAsyncIterator(_regenerator().w(r, e, t, o), n || Promise); }
function _regeneratorAsyncIterator(t, e) { function n(r, o, i, f) { try { var c = t[r](o), u = c.value; return u instanceof _OverloadYield ? e.resolve(u.v).then(function (t) { n("next", t, i, f); }, function (t) { n("throw", t, i, f); }) : e.resolve(u).then(function (t) { c.value = t, i(c); }, function (t) { return n("throw", t, i, f); }); } catch (t) { f(t); } } var r; this.next || (_regeneratorDefine2(_regeneratorAsyncIterator.prototype), _regeneratorDefine2(_regeneratorAsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () { return this; })), _regeneratorDefine2(this, "_invoke", function (t, o, i) { function f() { return new e(function (e, r) { n(t, i, e, r); }); } return r = r ? r.then(f, f) : f(); }, !0); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _OverloadYield(e, d) { this.v = e, this.k = d; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FieldArrayGrid = function FieldArrayGrid(_ref) {
  var title = _ref.title,
    fieldArrayName = _ref.fieldArrayName,
    columns = _ref.columns,
    footer = _ref.footer,
    _ref$onRowFocused = _ref.onRowFocused,
    onRowFocused = _ref$onRowFocused === void 0 ? function () {} : _ref$onRowFocused,
    _ref$showFooter = _ref.showFooter,
    showFooter = _ref$showFooter === void 0 ? false : _ref$showFooter,
    _ref$showDelete = _ref.showDelete,
    showDelete = _ref$showDelete === void 0 ? true : _ref$showDelete,
    _ref$showIndex = _ref.showIndex,
    showIndex = _ref$showIndex === void 0 ? true : _ref$showIndex,
    _ref$indexHeader = _ref.indexHeader,
    indexHeader = _ref$indexHeader === void 0 ? "" : _ref$indexHeader,
    _ref$operationHeader = _ref.operationHeader,
    operationHeader = _ref$operationHeader === void 0 ? "" : _ref$operationHeader,
    _ref$customIndexCell = _ref.customIndexCell,
    customIndexCell = _ref$customIndexCell === void 0 ? null : _ref$customIndexCell,
    CustomUpperButton = _ref.CustomUpperButton,
    _ref$disableRemoveExp = _ref.disableRemoveExpr,
    disableRemoveExpr = _ref$disableRemoveExp === void 0 ? function () {
      return false;
    } : _ref$disableRemoveExp,
    _ref$rtlEnabled = _ref.rtlEnabled,
    rtlEnabled = _ref$rtlEnabled === void 0 ? false : _ref$rtlEnabled,
    _ref$emptyRowObject = _ref.emptyRowObject,
    emptyRowObject = _ref$emptyRowObject === void 0 ? {} : _ref$emptyRowObject,
    _ref$keyExpr = _ref.keyExpr,
    keyExpr = _ref$keyExpr === void 0 ? "id" : _ref$keyExpr,
    _ref$deleteIcon = _ref.deleteIcon,
    deleteIcon = _ref$deleteIcon === void 0 ? null : _ref$deleteIcon,
    _ref$deleteIconClassN = _ref.deleteIconClassName,
    deleteIconClassName = _ref$deleteIconClassN === void 0 ? "" : _ref$deleteIconClassN,
    _ref$allowInsertBetwe = _ref.allowInsertBetween,
    allowInsertBetween = _ref$allowInsertBetwe === void 0 ? false : _ref$allowInsertBetwe,
    _ref$allowAdd = _ref.allowAdd,
    allowAdd = _ref$allowAdd === void 0 ? true : _ref$allowAdd,
    _ref$onBeforeRowPushe = _ref.onBeforeRowPushed,
    onBeforeRowPushed = _ref$onBeforeRowPushe === void 0 ? function (item) {} : _ref$onBeforeRowPushe,
    _ref$onAfterRowPushed = _ref.onAfterRowPushed,
    onAfterRowPushed = _ref$onAfterRowPushed === void 0 ? function (item) {} : _ref$onAfterRowPushed,
    _ref$onBeforeRowRemov = _ref.onBeforeRowRemoved,
    onBeforeRowRemoved = _ref$onBeforeRowRemov === void 0 ? function (index) {} : _ref$onBeforeRowRemov,
    _ref$onAfterRowRemove = _ref.onAfterRowRemoved,
    onAfterRowRemoved = _ref$onAfterRowRemove === void 0 ? function (index) {} : _ref$onAfterRowRemove,
    _ref$onBeforeRowInser = _ref.onBeforeRowInserted,
    onBeforeRowInserted = _ref$onBeforeRowInser === void 0 ? function (index, item) {} : _ref$onBeforeRowInser,
    _ref$onAfterRowInsert = _ref.onAfterRowInserted,
    onAfterRowInserted = _ref$onAfterRowInsert === void 0 ? function (index, item) {} : _ref$onAfterRowInsert,
    createRow = _ref.createRow,
    _ref$warnExpr = _ref.warnExpr,
    warnExpr = _ref$warnExpr === void 0 ? "hasWarning" : _ref$warnExpr;
  var theme = (0, _material.useTheme)();
  var _useFormikContext = (0, _formik.useFormikContext)(),
    values = _useFormikContext.values,
    errors = _useFormikContext.errors;
  var defaultCreateRow = function defaultCreateRow() {
    return _objectSpread(_objectSpread({}, emptyRowObject), {}, _defineProperty({}, keyExpr, (0, _uuid.v4)()));
  };
  var resolveCreateRow = createRow !== null && createRow !== void 0 ? createRow : defaultCreateRow;
  var rowBuilder = (0, _react.useCallback)(function (row, arrayIndex, removeFunction, insertFunction) {
    var _errors$fieldArrayNam;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      className: row[warnExpr] ? 'warn-row' : ((_errors$fieldArrayNam = errors[fieldArrayName]) !== null && _errors$fieldArrayNam !== void 0 ? _errors$fieldArrayNam : [])[arrayIndex] ? 'error-row' : "",
      style: {
        cursor: 'pointer'
      },
      key: row[keyExpr],
      onFocus: function onFocus(e) {
        onRowFocused(e);
      },
      tabIndex: arrayIndex
    }, customIndexCell === null ? /*#__PURE__*/_react["default"].createElement("td", {
      key: "".concat(row[keyExpr], "_index"),
      className: allowInsertBetween ? 'with-insert-between-text-center' : 'text-center',
      style: {
        position: "relative",
        verticalAlign: 'middle',
        width: '40px',
        display: showIndex ? 'table-cell' : 'none'
      },
      onClick: allowInsertBetween ? function () {
        return insertFunction(arrayIndex + 1);
      } : undefined
    }, arrayIndex + 1) : customIndexCell(), columns.map(function (column) {
      return column.show || typeof column.show === "undefined" ? /*#__PURE__*/_react["default"].createElement("td", {
        key: "".concat(row[keyExpr], "_").concat(column.header),
        style: {
          width: column.width ? column.width : "auto",
          minWidth: column.minWidth ? column.minWidth : "auto"
        }
      }, /*#__PURE__*/_react["default"].isValidElement(column.content) ? /*#__PURE__*/_react["default"].cloneElement(column.content, {
        index: arrayIndex
      }) : /*#__PURE__*/_react["default"].createElement(column.content, {
        index: arrayIndex
      })) : null;
    }), showDelete ? /*#__PURE__*/_react["default"].createElement("td", {
      key: "".concat(row[keyExpr], "_delete"),
      style: {
        width: '40px'
      }
    }, /*#__PURE__*/_react["default"].createElement("input", {
      disabled: true,
      hidden: true
    }), /*#__PURE__*/_react["default"].createElement(_InputGridDeleteRowBtn["default"], {
      onClick: function onClick() {
        removeFunction(arrayIndex);
      },
      disabled: disableRemoveExpr(arrayIndex),
      Icon: deleteIcon,
      iconClass: deleteIconClassName
    })) : null);
  }, [onRowFocused, disableRemoveExpr, CustomUpperButton, onBeforeRowPushed, onAfterRowPushed, onBeforeRowRemoved, onAfterRowRemoved, onBeforeRowInserted, onAfterRowInserted]);
  return /*#__PURE__*/_react["default"].createElement(_formik.FieldArray, {
    name: fieldArrayName,
    validateOnChange: false,
    render: function render(_ref2) {
      var _values$fieldArrayNam, _errors$fieldArrayNam2;
      var push = _ref2.push,
        remove = _ref2.remove,
        insert = _ref2.insert;
      var pushFunction = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var newItem;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                newItem = resolveCreateRow();
                _context.next = 3;
                return Promise.resolve(onBeforeRowPushed(newItem));
              case 3:
                push(newItem);
                _context.next = 6;
                return Promise.resolve(onAfterRowPushed(newItem));
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function pushFunction() {
          return _ref3.apply(this, arguments);
        };
      }();
      var removeFunction = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(index) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.resolve(onBeforeRowRemoved(index));
              case 2:
                remove(index);
                _context2.next = 5;
                return Promise.resolve(onAfterRowRemoved(index));
              case 5:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function removeFunction(_x) {
          return _ref4.apply(this, arguments);
        };
      }();
      var insertFunction = /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(index) {
          var newItem;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                newItem = resolveCreateRow();
                _context3.next = 3;
                return Promise.resolve(onBeforeRowInserted(index, newItem));
              case 3:
                insert(index, newItem);
                _context3.next = 6;
                return Promise.resolve(onAfterRowInserted(index, newItem));
              case 6:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function insertFunction(_x2) {
          return _ref5.apply(this, arguments);
        };
      }();
      return /*#__PURE__*/_react["default"].createElement(_GridNavigation.NavigationContext.Provider, {
        value: function value(e) {
          (0, _GridNavigation.KeyDownHandler)(e, allowAdd ? pushFunction : function () {}, rtlEnabled, allowAdd);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row align-items-center"
      }, typeof title !== "undefined" ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "content col-lg-6 col-6"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title mb-0"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "span"
      }, " ", title, " "))) : null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content ".concat(typeof title === "undefined" ? "col-12" : "col-lg-6 col-6")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "d-flex justify-content-".concat(typeof CustomUpperButton === "undefined" ? "end" : "between")
      }, typeof CustomUpperButton !== "undefined" && (/*#__PURE__*/_react["default"].isValidElement(CustomUpperButton) ? /*#__PURE__*/_react["default"].cloneElement(CustomUpperButton) : /*#__PURE__*/_react["default"].createElement(CustomUpperButton)), allowAdd ? /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        variant: "outlined",
        className: "grid-add-btn",
        onClick: function onClick(e) {
          pushFunction();
          setTimeout(function () {
            var added = e.target.closest("div").parentElement.nextSibling.querySelector('tbody tr:last-child td:nth-child(2)');
            while (added.querySelector("button:not([tabindex='-1'])") || added.querySelector("input").disabled) {
              added = (0, _GridNavigation.findNextFocusable)(added);
            }
            added.querySelector("input").focus();
          }, 0);
        }
      }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)) : null)), /*#__PURE__*/_react["default"].createElement("div", {
        className: "content col-lg-12 col-12"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-responsive sticky-h-f gridRow ".concat(theme.palette.mode === 'dark' ? 'dark' : '')
      }, /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-bordered "
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", {
        className: "text-center"
      }, /*#__PURE__*/_react["default"].createElement("th", {
        style: {
          display: showIndex ? 'table-cell' : 'none'
        }
      }, indexHeader), columns.map(function (column) {
        return column.show || typeof column.show === "undefined" ? /*#__PURE__*/_react["default"].createElement("th", {
          key: column.header
        }, column.header) : null;
      }), showDelete ? /*#__PURE__*/_react["default"].createElement("th", null, operationHeader) : null)), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (_values$fieldArrayNam = values[fieldArrayName]) === null || _values$fieldArrayNam === void 0 ? void 0 : _values$fieldArrayNam.map(function (row, arrayIndex) {
        return rowBuilder(row, arrayIndex, removeFunction, function () {
          return insertFunction(arrayIndex + 1);
        });
      }))), showFooter ? /*#__PURE__*/_react["default"].createElement("tfoot", null, /*#__PURE__*/_react["default"].createElement("tr", null, footer.map(function (footerCell, index) {
        return /*#__PURE__*/_react["default"].createElement("td", {
          key: "footer_".concat(index),
          colSpan: footerCell.colspan ? footerCell.colspan : 1
        }, footerCell.content ? footerCell.content() : null);
      }))) : null)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "content col-lg-12 col-md-12 col-12"
      }, Array.isArray(errors[fieldArrayName]) ? (_errors$fieldArrayNam2 = errors[fieldArrayName]) === null || _errors$fieldArrayNam2 === void 0 ? void 0 : _errors$fieldArrayNam2.map(function (error, index) {
        return /*#__PURE__*/_react["default"].createElement("p", {
          className: "error-msg",
          key: "error_".concat(index)
        }, error ? " ".concat(indexHeader, " ").concat(index + 1, " : ").concat((0, _createTableError.CreateTableError)(error)) : null);
      }) : /*#__PURE__*/_react["default"].createElement("p", {
        className: "error-msg"
      }, errors[fieldArrayName]))));
    }
  });
};
var _default = exports["default"] = FieldArrayGrid;