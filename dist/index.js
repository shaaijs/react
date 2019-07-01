"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shaai = _interopRequireDefault(require("@shaai/shaai"));

var _htmlElementToReact = require("html-element-to-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ShaaiReact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShaaiReact, _React$Component);

  function ShaaiReact(props) {
    var _this;

    _classCallCheck(this, ShaaiReact);

    _this.state = {
      currentDOM: null
    };
    return _possibleConstructorReturn(_this);
  }

  _createClass(ShaaiReact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var Scroll = (0, _shaai["default"])(this.props.scroll || 'scroll-ink');
      this.scroll = new Scroll(this.props.config);
    }
  }, {
    key: "load",
    value: function load(templates) {
      this.scroll.load(templates);
    }
  }, {
    key: "subscribe",
    value: function subscribe(cb) {
      this.scroll.subscribe(cb);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react["default"].Fragment, null, (0, _htmlElementToReact.convert)(this.state.currentDOM));
    }
  }]);

  return ShaaiReact;
}(_react["default"].Component);

exports["default"] = ShaaiReact;
ShaaiReact.propTypes = {
  config: _propTypes["default"].object,
  scrollName: _propTypes["default"].string
};