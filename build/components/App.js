'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _TopBar = require('./TopBar');

var _TopBar2 = _interopRequireDefault(_TopBar);

var _JumboTron = require('./JumboTron');

var _JumboTron2 = _interopRequireDefault(_JumboTron);

var _ArticleWall = require('./ArticleWall');

var _ArticleWall2 = _interopRequireDefault(_ArticleWall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function Footer(props) {
  var info = props.ftext;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'nav',
      { className: 'navbar fixed-bottom navbar-light bg-light' },
      _react2.default.createElement(
        'a',
        { href: '/api/v1', target: '__blank', className: 'badge badge-info' },
        info.appName,
        'API'
      )
    )
  );
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      joortiz: {},
      quotes: [],
      qnum: null,
      randomQuote: ''
    };
    _this.handleQuote = _this.handleQuote.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var rawData, data, qata, rada, rand, setQuo;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.info('componentDidMount called on App');
                _context.next = 3;
                return _axios2.default.get('/api/v1');

              case 3:
                rawData = _context.sent;
                data = rawData.data.person;
                qata = rawData.data.quotes;
                rada = rawData.data.quotes.length;
                rand = this.getRandomInt(rada);
                setQuo = qata[rand];

                this.setState({
                  joortiz: data,
                  quotes: qata,
                  qnum: rand,
                  randomQuote: setQuo
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'getRandomInt',
    value: function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }, {
    key: 'handleQuote',
    value: function handleQuote() {
      var qLen = this.state.quotes.length;
      var rand = this.getRandomInt(qLen);
      var randomItem = this.state.quotes[rand];
      this.setState({
        randomQuote: randomItem,
        qnum: rand
      });
    }
  }, {
    key: 'renderQuote',
    value: function renderQuote() {
      var randItem = this.state.quotes[this.state.qnum];
      if (this.state.randomQuote === '') {
        return _react2.default.createElement(
          'div',
          null,
          randItem
        );
      } else {
        return _react2.default.createElement(
          'div',
          null,
          this.state.randomQuote
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state != undefined) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TopBar2.default, { topInfo: this.state.joortiz }),
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(_JumboTron2.default, { quote: this.state.randomQuote, onHandleQuote: this.handleQuote, info: this.state.joortiz }),
            _react2.default.createElement(_ArticleWall2.default, { info: this.state.joortiz, hobbies: this.state.joortiz.hobbies, skills: this.state.joortiz.skills }),
            _react2.default.createElement(Footer, { ftext: this.state.joortiz })
          )
        );
      } else {
        console.info('state was undefined');
        return _react2.default.createElement(
          'div',
          null,
          'loader component here'
        );
      }
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;