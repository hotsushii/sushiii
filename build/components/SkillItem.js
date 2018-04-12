'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkillItem = function SkillItem(props) {
  var iSize = {
    fontSize: '3rem'
  };
  var skill = props.skill;
  function getIcon() {
    if (skill === 'JavaScript') {
      return _react2.default.createElement('i', { style: iSize, className: 'ion-social-nodejs' });
    } else if (skill === 'Webpack') {
      return _react2.default.createElement('i', { style: iSize, className: 'ion-cube' });
    } else if (skill === 'Python') {
      return _react2.default.createElement('i', { style: iSize, className: 'ion-social-python' });
    } else if (skill === 'SaaS') {
      return _react2.default.createElement('i', { style: iSize, className: 'ion-android-cloud-outline' });
    } else if (skill === 'Linux') {
      return _react2.default.createElement('i', { style: iSize, className: 'ion-social-tux' });
    } else {
      return _react2.default.createElement('img', { style: { maxWidth: '5.1rem', maxHeight: '5.1rem' }, src: '/react.png' });
    }
  }
  return _react2.default.createElement(
    'div',
    { className: 'col-sm-12 col-md-4 col-lg-3' },
    _react2.default.createElement(
      'div',
      { className: 'card border-secondary', style: { textAlign: 'center', marginTop: '.7rem' } },
      _react2.default.createElement(
        'div',
        { className: 'card-body' },
        _react2.default.createElement(
          'h5',
          { className: 'card-title' },
          getIcon()
        ),
        _react2.default.createElement(
          'span',
          { className: 'badge badge-pill badge-info' },
          skill
        )
      )
    )
  );
};

exports.default = SkillItem;