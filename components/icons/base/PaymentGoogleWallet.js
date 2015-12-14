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
      var classes = [CLASS_ROOT, CLASS_ROOT + '-payment-google-wallet'];
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

      var titleLabel = typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "payment-google-wallet";
      var a11yTitle = _react2['default'].createElement(_componentsFormattedMessage2['default'], { id: titleLabel, defaultMessage: titleLabel });

      return _react2['default'].createElement(
        'svg',
        { version: '1.1', viewBox: '0 0 25.5848 24.1156', width: '24px', height: '24px', className: classes.join(' '), 'aria-labelledby': this.props.a11yTitleId },
        _react2['default'].createElement(
          'title',
          { id: this.props.a11yTitleId },
          a11yTitle
        ),
        _react2['default'].createElement(
          'g',
          { id: 'payment-google-wallet' },
          _react2['default'].createElement('rect', { id: '_x2E_svg_293_', x: '1.5848', y: '0.1155', fill: 'none', width: '24', height: '24' }),
          _react2['default'].createElement('path', { id: 'path34', d: 'M8.7588,10.7742C7.3911,8.8903,5.4943,7.2387,3.3395,6.0903c-0.3226-0.1806-0.6968-0.271-1.071-0.271\r c-0.8387,0-1.6,0.4516-2,1.2c-0.5935,1.0968-0.1677,2.4774,0.929,3.0581c3.3161,1.7806,5.4581,5.1613,5.7161,9.0839v-0.0129\r c-0.0387-0.4387,0.0387-0.8645,0.2323-1.2645c0.0258-0.0516,0.0645-0.1161,0.1032-0.1806C8.2814,16,8.8363,14.0387,8.8363,12.0258\r C8.8363,11.6,8.7976,11.1871,8.7588,10.7742' }),
          _react2['default'].createElement('path', { id: 'path36', d: 'M21.8943,6.5161c-0.4-1.7548-0.9935-3.4581-1.7677-5.0839C19.7137,0.5677,18.8234,0,17.8685,0\r c-0.3742,0-0.7355,0.0774-1.071,0.2452c-1.2516,0.5935-1.7806,2.0903-1.1871,3.329c1.2645,2.6839,1.8968,5.5097,1.8968,8.4516\r s-0.6323,5.7677-1.871,8.4c-0.0129,0.0387-0.2323,0.5032-0.2323,1.0452c0,0.1548,0.0129,0.3742,0.0645,0.5806\r c0.1677,0.7097,0.6194,1.3548,1.3677,1.7032C17.1717,23.9097,17.533,24,17.9072,24c0.9161,0,1.7548-0.5032,2.1936-1.3032\r c0.5032-0.9419,1.0065-2.1677,1.4452-3.7548c0.1419-0.4774,0.2581-0.929,0.3613-1.4065c0.4-1.7935,0.6194-3.6258,0.6194-5.5097\r C22.5137,10.1677,22.2943,8.2968,21.8943,6.5161' }),
          _react2['default'].createElement('path', { id: 'path38', d: 'M11.3266,3.8968c-0.0387-0.0774-0.0903-0.1419-0.1419-0.2065c-0.1677-0.2194-0.3613-0.4-0.5935-0.5419\r c-0.3742-0.2452-0.8258-0.3871-1.2903-0.3871c-0.3871,0-0.5806,0.0516-0.8516,0.1548C8.1653,3.0323,7.8685,3.1871,7.5976,3.471\r S7.1717,4.0387,7.0556,4.3484C6.8234,4.9548,6.8621,5.7419,7.2492,6.3871C8.075,7.7161,8.5653,9.2387,8.7459,10.8\r c0.0516,0.4129,0.0774,0.8387,0.0774,1.2516c0,2.0129-0.5419,3.9742-1.5871,5.6774c-0.0387,0.0645-0.0645,0.1161-0.1032,0.1806\r c-0.2065,0.4-0.271,0.8516-0.2323,1.2774c0.0645,0.7226,0.4645,1.4065,1.1355,1.8194c0.1677,0.1032,0.3613,0.1806,0.5419,0.2452\r c0.2194,0.0645,0.4516,0.1032,0.6839,0.1032c0.8387,0,1.6-0.4258,2.0387-1.1484c1.3161-2.1548,2.0774-4.6065,2.2452-7.1226\r c0.0258-0.3355,0.0387-0.6839,0.0387-1.0194C13.5976,9.1484,12.8105,6.3355,11.3266,3.8968' }),
          _react2['default'].createElement('path', { id: 'path40', d: 'M15.6234,20.4258c1.2516-2.6323,1.8839-5.4581,1.8839-8.4c0-1.0065-0.0645-1.7419-0.1161-2.2194\r c-1.6387-2.6194-4.0129-4.9677-6.8-6.671c0,0,0.0645,0.0387,0.0645,0.0516c0.1935,0.1419,0.3484,0.2839,0.529,0.5032\r c0.0387,0.0516,0.1032,0.129,0.1419,0.2065c1.4839,2.4516,2.2581,5.2516,2.2581,8.129c0,0.3484-0.0129,0.6839-0.0387,1.0194\r c1.1871,2.2581,1.8323,4.8258,1.8323,7.5226c0,0.2194,0,0.5548,0,0.8129c0.0129-0.2839,0.0774-0.5806,0.1806-0.8387\r C15.5976,20.5032,15.6105,20.4645,15.6234,20.4258' })
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