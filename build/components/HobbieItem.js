'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HobbieItem = function HobbieItem(props) {
  var hob = props.hobbie;
  function getIcon() {
    if (hob === 'Cooking') {
      return _react2.default.createElement('i', { style: { fontSize: '4rem', color: '#e67e22' }, className: 'ion-ios-nutrition' });
    } else if (hob === 'Basketball') {
      return _react2.default.createElement('i', { style: { fontSize: '4rem', color: '#d35400' }, className: 'ion-ios-basketball' });
    } else if (hob === 'RaspberryPi') {
      return _react2.default.createElement('i', { style: { fontSize: '4rem', color: '#c0392b' }, className: 'ion-pizza' });
    } else {
      return _react2.default.createElement('i', { style: { fontSize: '4rem', color: '#1abc9c' }, className: 'ion-code' });
    }
  }

  return _react2.default.createElement(
    'div',
    { className: 'col-6 col-md-3' },
    _react2.default.createElement(
      'div',
      { className: 'card border-secondary', style: { textAlign: 'center', marginTop: '.7rem' } },
      _react2.default.createElement(
        'div',
        { className: 'card-body' },
        _react2.default.createElement(
          'span',
          { className: 'badge badge-pill badge-info' },
          props.hobbie
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          getIcon()
        )
      )
    )
  );
};

exports.default = HobbieItem;