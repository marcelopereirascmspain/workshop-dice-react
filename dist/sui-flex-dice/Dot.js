"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Dot = (function (_React$Component) {
  _inherits(Dot, _React$Component);

  function Dot() {
    _classCallCheck(this, Dot);

    _get(Object.getPrototypeOf(Dot.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Dot, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var align = _props.align;
      var size = _props.size;

      var _align = _slicedToArray(align, 2);

      var vertical = _align[0];
      var horizontal = _align[1];

      var verticalStyle = styleVertical(vertical, size);
      var horizontalStyle = styleHorizontal(horizontal, size);

      return _react2["default"].createElement("div", {
        style: _extends({
          width: size,
          height: size
        }, verticalStyle, horizontalStyle),
        className: "dice__dot" });
    }
  }]);

  return Dot;
})(_react2["default"].Component);

exports["default"] = Dot;

Dot.defaultProps = {
  size: 22
};

function styleHorizontal(position, size) {
  switch (position) {
    case "right":
      return { right: 0 };
    case "center":
      return { left: "50%", marginLeft: -size / 2 };
    case "left":
      return { left: 0 };
  }
}

function styleVertical(position, size) {
  switch (position) {
    case "bottom":
      return { bottom: 0 };
    case "center":
      return { top: "50%", marginTop: -size / 2 };
    default:
      return { top: 0 };
  }
}
module.exports = exports["default"];