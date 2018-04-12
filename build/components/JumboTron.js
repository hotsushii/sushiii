'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JumboTron = function JumboTron(props) {
  var selfie = props.info;
  var quote = props.quote.split('|');
  var auth = quote[0];
  var quo = quote[1];
  return _react2.default.createElement(
    'div',
    { className: 'row justify-content-md-center' },
    _react2.default.createElement(
      'div',
      { className: 'col col-lg-10' },
      _react2.default.createElement(
        'div',
        { className: 'jumbotron', style: { backgroundColor: '#ECF0F1', marginTop: '.3rem' } },
        _react2.default.createElement(
          'div',
          { className: 'container', style: { color: '#6C7A89' } },
          _react2.default.createElement(
            'blockquote',
            { className: 'blockquote text-left' },
            _react2.default.createElement(
              'h1',
              { className: 'mb-0' },
              quo
            ),
            _react2.default.createElement(
              'footer',
              { style: { fontSize: '1.5rem' }, className: 'blockquote-footer' },
              'The famous ',
              _react2.default.createElement(
                'cite',
                { title: 'Source Title' },
                auth
              )
            )
          ),
          _react2.default.createElement('hr', { className: 'my-4' }),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-info btn-lg', onClick: function onClick() {
                props.onHandleQuote();
              } },
            'Generate Quote'
          ),
          ' ',
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-info btn-lg', 'data-toggle': 'modal', 'data-target': '#exampleModalCenter' },
            'Contact'
          ),
          _react2.default.createElement(_Modal2.default, { details: selfie })
        )
      )
    )
  );
};

exports.default = JumboTron;