'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (BasePlugin) {

  return function (_BasePlugin) {
    _inherits(BaseClass, _BasePlugin);

    function BaseClass() {
      var _Object$getPrototypeO;

      _classCallCheck(this, BaseClass);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(BaseClass)).call.apply(_Object$getPrototypeO, [this].concat(args)));

      _this.config = {
        compress: true,
        parseOptions: null,
        compileOptions: null,
        environments: {
          development: {
            compress: false
          }
        }
      };
      return _this;
    }

    _createClass(BaseClass, [{
      key: 'render',
      value: function render(opts, next) {
        var inExtension = opts.inExtension;
        var outExtension = opts.outExtension;
        var file = opts.file;


        if (inExtension !== 'less' || ['css', null].indexOf(outExtension) === -1) return next();

        var parseOptions = {
          paths: file.get('fullDirPath'),
          filename: file.get('fullPath')
        };

        Object.assign(this.config, parseOptions);

        if (opts.content.indexOf('@import') !== -1) {
          file.setMetaDefaults({ referenceOthers: true });
        }

        _less2.default.render(opts.content, parseOptions, function (err, data) {
          opts.content = data.css;
          next();
        });
      }
    }, {
      key: 'name',
      get: function get() {
        return 'less';
      }
    }]);

    return BaseClass;
  }(BasePlugin);
};

var _less = require('less');

var _less2 = _interopRequireDefault(_less);

require('../helpers/polyfill.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = exports['default'];