"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';
// import ReactDOM from 'react-dom';

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
      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "text", autoComplete: "off", onChange: this.textChange })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImlucHV0IiwidGV4dENoYW5nZSIsImJpbmQiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFHQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLE9BQWxCO0FBTGlCO0FBTWxCOzs7OytCQUVXQyxDLEVBQUc7QUFDYixXQUFLQyxRQUFMLENBQWU7QUFDYkosZUFBT0csRUFBRUUsTUFBRixDQUFTQztBQURILE9BQWY7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsY0FBYSxLQUFoQyxFQUFzQyxVQUFVLEtBQUtMLFVBQXJEO0FBREYsT0FERjtBQU1EOzs7O0VBdEJlTSxNQUFNQyxTOztBQXlCeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF3QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF4QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0OiAnJ1xuICAgIH07XG4gICAgdGhpcy50ZXh0Q2hhbmdlID0gdGhpcy50ZXh0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICB0ZXh0Q2hhbmdlIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgaW5wdXQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgb25DaGFuZ2U9e3RoaXMudGV4dENoYW5nZX0+PC9pbnB1dD5cbiAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gYWxlcnQodGhpcy5zdGF0ZS5pbnB1dCl9PlN1Ym1pdDwvYnV0dG9uPiAqL31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==