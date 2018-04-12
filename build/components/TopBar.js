"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopBar = function TopBar(props) {
  var navInfo = props.topInfo;
  return _react2.default.createElement(
    "div",
    { className: "pos-f-t" },
    _react2.default.createElement(
      "div",
      { className: "collapse", id: "navbarToggleExternalContent" },
      _react2.default.createElement(
        "div",
        { className: "bg-info p-4" },
        _react2.default.createElement(
          "h5",
          { className: "text-white h4" },
          navInfo.appName
        ),
        _react2.default.createElement(
          "span",
          { className: "text-muted" },
          "v0.0.1"
        )
      )
    ),
    _react2.default.createElement(
      "nav",
      { className: "navbar navbar-dark bg-info" },
      _react2.default.createElement(
        "button",
        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarToggleExternalContent", "aria-controls": "navbarToggleExternalContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
        _react2.default.createElement("span", { className: "navbar-toggler-icon" })
      )
    )
  );
};

exports.default = TopBar;