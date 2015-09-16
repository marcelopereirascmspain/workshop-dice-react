'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dot = require("./Dot");

var _Dot2 = _interopRequireDefault(_Dot);

var Dice = (function (_React$Component) {
  _inherits(Dice, _React$Component);

  function Dice() {
    _classCallCheck(this, Dice);

    _get(Object.getPrototypeOf(Dice.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Dice, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var size = _props.size;
      var dotSize = _props.dotSize;

      var faces = this.props.faces > 6 || this.props.faces < 1 ? 1 : this.props.faces;

      return _react2['default'].createElement(
        'div',
        {
          className: 'dice',
          style: {
            width: size,
            height: size,
            padding: size / 10
          } },
        _react2['default'].createElement(
          'div',
          { className: 'dice__inner' },
          dots(diceAlignments[faces], dotSize)
        )
      );
    }
  }]);

  return Dice;
})(_react2['default'].Component);

exports['default'] = Dice;

Dice.defaultProps = {
  faces: 1,
  size: 104,
  dotSize: 22
};

function dots(alignments, size) {
  return alignments.map(function (alignment, idx) {
    return _react2['default'].createElement(_Dot2['default'], { align: alignment, size: size, key: idx });
  });
}

var diceAlignments = {
  1: [["center", "center"]],

  2: [["top", "left"], ["bottom", "right"]],

  3: [["top", "left"], ["center", "center"], ["bottom", "right"]],

  4: [["top", "left"], ["top", "right"], ["bottom", "left"], ["bottom", "right"]],

  5: [["top", "left"], ["top", "right"], ["center", "center"], ["bottom", "left"], ["bottom", "right"]],

  6: [["top", "left"], ["top", "right"], ["center", "left"], ["center", "right"], ["bottom", "left"], ["bottom", "right"]]
};
module.exports = exports['default'];