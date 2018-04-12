'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailBody = function DetailBody(props) {
  var info = props.jinfo;
  var employ = props.jinfo.employer.split('|');
  var cardI = {
    marginRight: '1rem', fontSize: '1.6rem'
  };
  return _react2.default.createElement(
    'div',
    { className: 'col-lg-8' },
    _react2.default.createElement(
      'div',
      { className: 'card bg-dark text-white' },
      _react2.default.createElement('img', { className: 'card-img', src: info.imgUrl, alt: 'jonathan ortiz', style: { minHeight: '400px' } }),
      _react2.default.createElement(
        'div',
        { className: 'card-img-overlay' },
        _react2.default.createElement(
          'h4',
          { className: 'card-title' },
          _react2.default.createElement('i', { className: 'ion-happy', style: { marginRight: '1rem' } }),
          info.firstName,
          ' ',
          info.lastName
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          _react2.default.createElement('i', { className: 'ion-hammer', style: cardI }),
          info.title
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          _react2.default.createElement('i', { className: 'ion-map', style: cardI }),
          info.location
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          _react2.default.createElement('i', { className: 'ion-lock-combination', style: cardI }),
          employ[0]
        ),
        _react2.default.createElement(
          'p',
          { className: 'card-text' },
          _react2.default.createElement('i', { className: 'ion-ribbon-a', style: cardI }),
          info.yearsExp,
          ' yrs. exp'
        ),
        _react2.default.createElement(
          'a',
          { href: info.sushi, target: '_blank', className: 'btn btn-lg btn-outline-info' },
          'Hot Sushi'
        )
      )
    )
  );
};

exports.default = DetailBody;