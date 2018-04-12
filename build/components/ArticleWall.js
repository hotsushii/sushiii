'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SkillItem = require('./SkillItem');

var _SkillItem2 = _interopRequireDefault(_SkillItem);

var _DetailBody = require('./DetailBody');

var _DetailBody2 = _interopRequireDefault(_DetailBody);

var _HobbieItem = require('./HobbieItem');

var _HobbieItem2 = _interopRequireDefault(_HobbieItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleWall = function ArticleWall(props) {
  var bodyRow = {
    padding: '2.5rem'
  };
  var bodyRow2 = {
    padding: '.8rem'
  };
  if (props.hobbies != undefined || props.skills != undefined) {
    return _react2.default.createElement(
      'div',
      { style: { paddingBottom: '2rem' } },
      _react2.default.createElement(
        'div',
        { className: 'row justify-content-center' },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-10' },
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center', style: bodyRow2 },
            _react2.default.createElement(_DetailBody2.default, { jinfo: props.info })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row justify-content-center', style: bodyRow },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-9' },
          _react2.default.createElement(
            'h1',
            { className: 'display-4 text-center', style: { fontSize: '2rem', padding: '1rem' } },
            'Skills'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-10' },
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center' },
            props.skills.map(function (skill, index) {
              return _react2.default.createElement(_SkillItem2.default, { key: index, skill: skill });
            })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row justify-content-center', style: bodyRow },
        _react2.default.createElement(
          'div',
          { className: 'col-lg-9' },
          _react2.default.createElement(
            'h1',
            { className: 'display-4 text-center', style: { fontSize: '2rem', padding: '1rem' } },
            'Hobbies'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-lg-10' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            props.hobbies.map(function (hobbie, index) {
              return _react2.default.createElement(_HobbieItem2.default, { key: index, hobbie: hobbie });
            })
          )
        )
      )
    );
  } else {
    return null;
  }
};

exports.default = ArticleWall;