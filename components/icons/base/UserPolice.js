// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsFormattedMessage = require('../../../components/FormattedMessage');

var _componentsFormattedMessage2 = _interopRequireDefault(_componentsFormattedMessage);

var CLASS_ROOT = "control-icon";

var Icon = (function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var classes = [CLASS_ROOT, CLASS_ROOT + '-user-police'];
      if (this.props.size) {
        classes.push(CLASS_ROOT + "--" + this.props.size);
      } else if (this.props.large) {
        classes.push(CLASS_ROOT + "--large");
      }
      if (this.props.colorIndex) {
        classes.push("color-index-" + this.props.colorIndex);
      }
      if (this.props.className) {
        classes.push(this.props.className);
      }

      var titleLabel = typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "user-police";
      var a11yTitle = _react2['default'].createElement(_componentsFormattedMessage2['default'], { id: titleLabel, defaultMessage: titleLabel });

      return _react2['default'].createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', className: classes.join(' '), 'aria-labelledby': this.props.a11yTitleId },
        _react2['default'].createElement(
          'title',
          { id: this.props.a11yTitleId },
          a11yTitle
        ),
        _react2['default'].createElement(
          'g',
          { id: 'user-police' },
          _react2['default'].createElement('rect', { id: '_x2E_svg_135_', fill: 'none', width: '24', height: '24' }),
          _react2['default'].createElement('path', { fill: 'none', stroke: '#000000', strokeWidth: '2', strokeMiterlimit: '10', d: 'M18,9v0.5714C18,13.1218,15.5504,16,12,16\r s-6-2.8782-6-6.4286V9 M8.45,14.83C5.81,16.14,4,18.86,4,22v1h16v-1c0-2.21-0.9-4.21-2.34-5.66c-0.61-0.61-1.32-1.12-2.11-1.51\r M21,5.3322C19.2226,2.7422,15.8652,1,12,1S4.7774,2.7422,3,5.3322L5.4169,8H12h6.5831L21,5.3322z' }),
          _react2['default'].createElement('path', { d: 'M12,3h-2c0,0-0.0625,3,2,3c2,0,1.9998-3,1.9998-3H12z' })
        )
      );
    }
  }]);

  return Icon;
})(_react.Component);

Icon.propTypes = {
  a11yTitle: _react.PropTypes.string,
  a11yTitleId: _react.PropTypes.string,
  colorIndex: _react.PropTypes.string,
  large: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
};

Icon.defaultProps = {
  a11yTitleId: '" + resolve.fileName + "-title'
};

module.exports = Icon;