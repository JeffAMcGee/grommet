// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

'use strict';

var React = require('react');
var FormattedMessage = require('../../../components/FormattedMessage');

var CLASS_ROOT = "control-icon";

var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    a11yTitle: React.PropTypes.string,
    a11yTitleId: React.PropTypes.string,
    colorIndex: React.PropTypes.string,
    large: React.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      a11yTitleId: 'carrot-next-title'
    };
  },

  render: function render() {
    var classes = [CLASS_ROOT, CLASS_ROOT + '-carrot-next'];
    if (this.props.large) {
      classes.push(CLASS_ROOT + "--large");
    }
    if (this.props.colorIndex) {
      classes.push("color-index-" + this.props.colorIndex);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    var titleLabel = typeof this.props.a11yTitle !== "undefined" ? this.props.a11yTitle : "carrot-next";
    var a11yTitle = React.createElement(FormattedMessage, { id: titleLabel, defaultMessage: titleLabel });

    return React.createElement(
      'svg',
      { version: '1.1', viewBox: '0 0 48 48', width: '48px', height: '48px', className: classes.join(' '), 'aria-labelledby': this.props.a11yTitleId },
      React.createElement(
        'title',
        { id: this.props.a11yTitleId },
        a11yTitle
      ),
      React.createElement(
        'g',
        { id: 'carrot-next' },
        React.createElement('rect', { id: '_x2E_svg_254_', fill: 'none', width: '48', height: '48' }),
        React.createElement('polygon', { fill: '#231F20', stroke: '#231F20', strokeWidth: '2', strokeMiterlimit: '10', points: '19,16.8571 19,31.1429 29,24 \t' })
      )
    );
  }

});

module.exports = Icon;