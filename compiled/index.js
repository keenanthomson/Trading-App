"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      input: ''
    };
    _this.textChange = _this.textChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "textChange",
    value: function textChange(e) {
      this.setState({
        input: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", autoComplete: "off", onChange: this.textChange }),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return alert(_this2.state.input);
            } },
          "Submit"
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaW5wdXQiLCJ0ZXh0Q2hhbmdlIiwiYmluZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPO0FBREksS0FBYjtBQUdBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFMaUI7QUFNbEI7Ozs7K0JBRVdDLEMsRUFBRztBQUNiLFdBQUtDLFFBQUwsQ0FBZTtBQUNiSixlQUFPRyxFQUFFRSxNQUFGLENBQVNDO0FBREgsT0FBZjtBQUdEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLHVDQUFPLE1BQUssTUFBWixFQUFtQixjQUFhLEtBQWhDLEVBQXNDLFVBQVUsS0FBS0wsVUFBckQsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFRLFNBQVM7QUFBQSxxQkFBTU0sTUFBTSxPQUFLUixLQUFMLENBQVdDLEtBQWpCLENBQU47QUFBQSxhQUFqQjtBQUFBO0FBQUE7QUFGRixPQURGO0FBTUQ7Ozs7RUF0QmVRLE1BQU1DLFM7O0FBeUJ4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXdCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXhCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiAnJ1xuICAgIH07XG4gICAgdGhpcy50ZXh0Q2hhbmdlID0gdGhpcy50ZXh0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICB0ZXh0Q2hhbmdlIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25DaGFuZ2U9e3RoaXMudGV4dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhbGVydCh0aGlzLnN0YXRlLmlucHV0KX0+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=