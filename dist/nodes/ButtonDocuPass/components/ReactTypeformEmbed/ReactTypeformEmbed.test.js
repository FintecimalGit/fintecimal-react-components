"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = 'https://demo.typeform.com/to/njdbt5';
describe('<ReactTypeformEmbed />', function () {
  it('should render without breaking', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, {
      url: url,
      popup: true
    }));
    expect(wrapper.length).toEqual(1);
  });
  it('should have the className ReactTypeformEmbed', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_index.default, {
      url: url,
      popup: true
    }));
    expect(wrapper.is('.ReactTypeformEmbed')).toEqual(true);
  });
  it('should have the correct url props', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_index.default, {
      url: url
    }));
    expect(wrapper.props().url).toEqual(url);
  });
});