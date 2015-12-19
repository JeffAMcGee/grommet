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
      var classes = [CLASS_ROOT, CLASS_ROOT + '-svg'];
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

      var titleLabel = typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "svg";
      var a11yTitle = _react2['default'].createElement(_componentsFormattedMessage2['default'], { id: titleLabel, defaultMessage: titleLabel });

      return _react2['default'].createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 24 23.5693', width: '24px', height: '24px', className: classes.join(' '), 'aria-labelledby': this.props.a11yTitleId },
        _react2['default'].createElement(
          'title',
          { id: this.props.a11yTitleId },
          a11yTitle
        ),
        _react2['default'].createElement('path', { d: 'M24,12.3368c0-1.8973-0.4905-3.6797-1.3507-5.2286c3.6665-8.2982-3.9287-7.0827-4.3516-7\r c-1.6091,0.3149-3.0978,0.8204-4.4711,1.4612c-0.2025-0.0114-0.4062-0.0177-0.6115-0.0177c-5.1248,0-9.4146,3.5745-10.5126,8.3664\r C5.4036,6.8878,7.294,5.6651,8.426,5.1758C8.2453,5.3373,8.0684,5.5005,7.8944,5.665C7.8365,5.7197,7.7807,5.7751,7.7236,5.8302\r C7.6088,5.9405,7.4944,6.051,7.3825,6.1625C7.316,6.2288,7.2513,6.2956,7.1857,6.3624c-0.0992,0.101-0.1981,0.2018-0.295,0.3034\r C6.822,6.7379,6.7549,6.8102,6.6874,6.8824C6.5969,6.9793,6.507,7.0762,6.4188,7.1735c-0.0685,0.0756-0.136,0.1512-0.2033,0.227\r C6.1319,7.4946,6.049,7.5888,5.9673,7.6832c-0.0678,0.0783-0.135,0.1565-0.2014,0.2349C5.6884,8.0096,5.6119,8.101,5.5362,8.1925\r c-0.067,0.081-0.1337,0.1618-0.1993,0.2426c-0.0709,0.0874-0.1402,0.1748-0.2094,0.262c-0.0671,0.0845-0.1342,0.169-0.1997,0.2534\r c-0.0624,0.0804-0.123,0.1605-0.184,0.2406C4.6749,9.2817,4.6055,9.3722,4.5384,9.4624c-0.048,0.0645-0.094,0.1284-0.1411,0.1927\r c-0.4261,0.5814-0.8155,1.1517-1.1671,1.6995c-0.0009,0.0013-0.0018,0.0027-0.0026,0.004\r c-0.0926,0.1442-0.1819,0.2864-0.2695,0.4272c-0.0047,0.0076-0.0096,0.0153-0.0143,0.023c-0.0877,0.1414-0.1723,0.2804-0.2548,0.418\r c-0.0029,0.0048-0.0059,0.0097-0.0088,0.0145c-0.2218,0.3702-0.4276,0.7271-0.6129,1.0629\r c-0.9713,1.7603-1.4442,2.9902-1.4647,3.0632c-3.0673,10.966,6.5059,6.3351,7.8417,5.6439\r c1.4384,0.7106,3.0577,1.1106,4.7707,1.1106c4.6895,0,8.6795-2.9934,10.1646-7.1736h-5.6668\r c-0.8385,1.4166-2.4528,2.3761-4.3074,2.3761c-2.7172,0-4.9199-2.0587-4.9199-4.5984h15.4256C23.9697,13.271,24,12.8074,24,12.3368\r L24,12.3368z M21.9853,1.7237c0.9287,0.6268,1.6737,1.6113,0.3944,4.9265c-1.2269-1.9732-3.0729-3.5211-5.267-4.3719\r C18.1108,1.7963,20.5825,0.7768,21.9853,1.7237z M2.2481,21.9893c-0.7564-0.7758-0.8902-2.6652,0.779-6.1083\r c0.8424,2.422,2.5235,4.4515,4.6962,5.7395C6.6428,22.2153,3.774,23.5544,2.2481,21.9893z M8.4618,10.7766\r C8.548,8.3083,10.6962,6.332,13.3356,6.332c2.6393,0,4.7876,1.9763,4.8738,4.4447H8.4618L8.4618,10.7766z' })
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

Icon.icon = true;

module.exports = Icon;