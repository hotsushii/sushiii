'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  var detail = props.details;
  var fir = props.details.firstName;
  var las = props.details.lastName;
  var modalIcon = {
    fontSize: '4rem', textAlign: 'center'
  };
  return _react2.default.createElement(
    'div',
    { className: 'modal fade', id: 'exampleModalCenter', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'exampleModalCenterTitle', 'aria-hidden': 'true' },
    _react2.default.createElement(
      'div',
      { className: 'modal-dialog modal-dialog-centered', role: 'document' },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-header' },
          _react2.default.createElement(
            'h5',
            { className: 'modal-title', id: 'exampleModalCenterTitle' },
            fir,
            ' ',
            las
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
            _react2.default.createElement(
              'span',
              { 'aria-hidden': 'true' },
              '\xD7'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'row align-items-center', style: { textAlign: 'center' } },
              _react2.default.createElement(
                'div',
                { className: 'col-12 align-self-center' },
                _react2.default.createElement('i', { className: 'ion-iphone', style: modalIcon })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col align-self-center' },
                _react2.default.createElement(
                  'p',
                  { className: 'lead' },
                  detail.mobile
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-12 align-self-center' },
                _react2.default.createElement('i', { className: 'ion-ios-email-outline', style: modalIcon })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col align-self-center' },
                _react2.default.createElement(
                  'p',
                  { className: 'lead' },
                  detail.email
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-outline-info btn-block', 'data-dismiss': 'modal' },
            'Close'
          )
        )
      )
    )
  );
};

exports.default = Modal;