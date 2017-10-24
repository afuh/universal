/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FlatButton");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Snackbar = __webpack_require__(25);

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatchErrors = function CatchErrors(_ref) {
  var error = _ref.error,
      open = _ref.open,
      close = _ref.close;
  return _react2.default.createElement(_Snackbar2.default, {
    key: 'snack',
    open: open,
    message: error || 'Error',
    autoHideDuration: 2000,
    onRequestClose: close
  });
};

CatchErrors.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  error: _propTypes2.default.string,
  close: _propTypes2.default.func.isRequired
};

exports.default = CatchErrors;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(12);
module.exports = __webpack_require__(13);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(14);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
__webpack_require__(32).config({ path: '.env' });

var express = __webpack_require__(33);
var bodyParser = __webpack_require__(34);
var mongoose = __webpack_require__(10);
var path = __webpack_require__(35);

var app = express();

var API = __webpack_require__(36);

mongoose.connect(process.env.DATABASE, { useMongoClient: true }).then(mongoose.Promise = global.Promise);

mongoose.connection.on('error', function (err) {
  console.error('\uD83D\uDEAB \u2192 ' + err.message);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router.all('/api/*', authentication acá!)
API(app);

// https://reacttraining.com/react-router/web/api/StaticRouter
app.get('*', function (req, res) {
  var context = {};

  var html = (0, _server.renderToString)(_react2.default.createElement(
    _reactRouterDom.StaticRouter,
    { location: req.url, context: context },
    _react2.default.createElement(_App2.default, null)
  ));

  res.status(context.statusCode || 200).render('layout', { html: html });
});

var PORT = process.env.PORT || 7777;
app.listen(PORT, function () {
  return console.log('\x1b[35m%s\x1b[0m', 'Express running \u2192 http://localhost:' + PORT);
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _MuiThemeProvider = __webpack_require__(16);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = __webpack_require__(17);

var _Paper2 = _interopRequireDefault(_Paper);

var _PostsList = __webpack_require__(18);

var _PostsList2 = _interopRequireDefault(_PostsList);

var _ShowPost = __webpack_require__(26);

var _ShowPost2 = _interopRequireDefault(_ShowPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Componets


// Material
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;

  var style = {
    height: "100vh",
    background: 'whitesmoke'
  };
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(
      _Paper2.default,
      null,
      children
    )
  );
};
var App = function App() {
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    null,
    _react2.default.createElement(
      Wrapper,
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _PostsList2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/post/:id', component: _ShowPost2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
            return _react2.default.createElement('img', { style: { width: "100%" }, src: 'http://404-resto.com/typo3temp/pics/7580ea80fa.jpg' });
          } })
      )
    )
  );
};

exports.default = App;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _collection = __webpack_require__(19);

var _collection2 = _interopRequireDefault(_collection);

var _List = __webpack_require__(20);

var _Divider = __webpack_require__(4);

var _Divider2 = _interopRequireDefault(_Divider);

var _Avatar = __webpack_require__(21);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _colors = __webpack_require__(22);

var _Subheader = __webpack_require__(23);

var _Subheader2 = _interopRequireDefault(_Subheader);

var _CreatePost = __webpack_require__(24);

var _CreatePost2 = _interopRequireDefault(_CreatePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Utils


// Material UI


// Components


// Fake avatars
var avatars = ['/images/rick.png', '/images/morty.jpg', '/images/doofus-rick.jpg', '/images/Evilmorty.jpg'];

var PostsList = function (_React$Component) {
  _inherits(PostsList, _React$Component);

  function PostsList() {
    _classCallCheck(this, PostsList);

    var _this = _possibleConstructorReturn(this, (PostsList.__proto__ || Object.getPrototypeOf(PostsList)).call(this));

    _this.state = {
      posts: []
    };
    _this.handleData = _this.handleData.bind(_this);
    return _this;
  }

  _createClass(PostsList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/post').then(function (res) {
        return _this2.handleState(res.data);
      });
    }
  }, {
    key: 'handleData',
    value: function handleData() {
      var _this3 = this;

      _axios2.default.get('/api/post').then(function (res) {
        return _this3.handleState(res.data);
      });
    }
  }, {
    key: 'handleState',
    value: function handleState(posts) {
      this.setState({ posts: posts });
    }
  }, {
    key: 'render',
    value: function render() {
      var posts = this.state.posts;


      return _react2.default.createElement(
        _List.List,
        { style: { padding: 0 } },
        _react2.default.createElement(_List.ListItem, { containerElement: _react2.default.createElement(_CreatePost2.default, { addPost: this.handleData }) }),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _Subheader2.default,
          null,
          'Latests Posts'
        ),
        posts.map(function (p) {
          return _react2.default.createElement(
            'div',
            { key: p._id },
            _react2.default.createElement(_List.ListItem, {
              leftAvatar: _react2.default.createElement(_Avatar2.default, { src: _collection2.default.sample(avatars) }),
              primaryText: _react2.default.createElement(
                'p',
                null,
                p.title,
                _react2.default.createElement(
                  'span',
                  { style: { color: _colors.lightBlack, fontSize: "0.7em" } },
                  '\xA0\xA0',
                  (0, _moment2.default)(p.created).fromNow()
                )
              ),
              secondaryText: p.text,
              secondaryTextLines: 2,
              hoverColor: _colors.cyan100,
              containerElement: _react2.default.createElement(_reactRouterDom.Link, { to: '/post/' + p._id })
            }),
            _react2.default.createElement(_Divider2.default, { inset: true })
          );
        })
      );
    }
  }]);

  return PostsList;
}(_react2.default.Component);

exports.default = PostsList;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("lodash/collection");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Subheader");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _TextField = __webpack_require__(6);

var _TextField2 = _interopRequireDefault(_TextField);

var _FlatButton = __webpack_require__(7);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _Card = __webpack_require__(8);

var _CatchErrors = __webpack_require__(9);

var _CatchErrors2 = _interopRequireDefault(_CatchErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Utils


// Material UI


// Components


var CreatePost = function (_React$Component) {
  _inherits(CreatePost, _React$Component);

  function CreatePost() {
    _classCallCheck(this, CreatePost);

    var _this = _possibleConstructorReturn(this, (CreatePost.__proto__ || Object.getPrototypeOf(CreatePost)).call(this));

    _this.state = {
      title: '',
      text: '',
      error: '',
      snackbar: false
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    return _this;
  }

  _createClass(CreatePost, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          id = _event$target.id,
          value = _event$target.value;

      id === 'title' ? this.setState({ title: value }) : this.setState({ text: value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this2 = this;

      var _state = this.state,
          title = _state.title,
          text = _state.text;


      _axios2.default.post('/api/post', { title: title, text: text }).then(function () {
        _this2.props.addPost();
        _this2.setState({ title: '', text: '' });
      }).catch(function (res) {
        return _this2.handleError(true, res.response.data);
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(snackbar, error) {
      this.setState({ snackbar: snackbar, error: error });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          text = _state2.text,
          title = _state2.title,
          error = _state2.error,
          snackbar = _state2.snackbar;


      return _react2.default.createElement(
        _Card.Card,
        { key: 'card', style: { boxShadow: "0 0" } },
        _react2.default.createElement(_Card.CardHeader, {
          title: 'Create post',
          actAsExpander: true,
          showExpandableButton: true
        }),
        _react2.default.createElement(
          _Card.CardText,
          { expandable: true },
          _react2.default.createElement(_TextField2.default, {
            id: 'title',
            floatingLabelText: 'Title',
            value: title,
            fullWidth: true,
            onChange: this.handleChange
          }),
          _react2.default.createElement(_TextField2.default, {
            id: 'text',
            floatingLabelText: 'Post',
            multiLine: true,
            value: text,
            fullWidth: true,
            onChange: this.handleChange
          }),
          _react2.default.createElement(
            'div',
            { style: { display: "flex", justifyContent: 'flex-end' } },
            _react2.default.createElement(_FlatButton2.default, {
              onClick: this.handleSubmit,
              style: { marginTop: "20px" },
              label: 'Submit',
              primary: true })
          )
        ),
        _react2.default.createElement(_CatchErrors2.default, { key: 'snack', error: error, open: snackbar, close: function close() {
            return _this3.handleError(false, error);
          } })
      );
    }
  }]);

  return CreatePost;
}(_react2.default.Component);

CreatePost.propTypes = {
  addPost: _propTypes2.default.func.isRequired
};

exports.default = CreatePost;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(3);

var _moment2 = _interopRequireDefault(_moment);

var _Card = __webpack_require__(8);

var _IconButton = __webpack_require__(27);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Divider = __webpack_require__(4);

var _Divider2 = _interopRequireDefault(_Divider);

var _delete = __webpack_require__(28);

var _delete2 = _interopRequireDefault(_delete);

var _done = __webpack_require__(29);

var _done2 = _interopRequireDefault(_done);

var _arrowBack = __webpack_require__(30);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _Dialog = __webpack_require__(31);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(7);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextField = __webpack_require__(6);

var _TextField2 = _interopRequireDefault(_TextField);

var _CatchErrors = __webpack_require__(9);

var _CatchErrors2 = _interopRequireDefault(_CatchErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Utils


// Material UI


// Components


var ShowPost = function (_React$Component) {
  _inherits(ShowPost, _React$Component);

  function ShowPost() {
    _classCallCheck(this, ShowPost);

    var _this = _possibleConstructorReturn(this, (ShowPost.__proto__ || Object.getPrototypeOf(ShowPost)).call(this));

    _this.state = {
      title: '',
      text: '',
      created: '',
      open: false,
      edit: false,
      error: '',
      snackbar: false
    };

    _this.removePost = _this.removePost.bind(_this);

    _this.handleOpen = _this.handleOpen.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    return _this;
  }

  _createClass(ShowPost, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.match.params.id;

      _axios2.default.get('/api/post/' + id).then(function (res) {
        return _this2.handleData(res.data);
      }).catch(function (res) {
        return _this2.handleError(true, res.response.data);
      });
    }
  }, {
    key: 'handleData',
    value: function handleData(_ref) {
      var title = _ref.title,
          text = _ref.text,
          created = _ref.created;

      this.setState({ title: title, text: text, created: created });
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit(edit) {
      this.setState({ edit: edit });
    }
  }, {
    key: 'handleOpen',
    value: function handleOpen() {
      this.setState({ open: true });
    }
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.setState({ open: false });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var _event$target = event.target,
          id = _event$target.id,
          value = _event$target.value;

      id === 'title' ? this.setState({ title: value }) : this.setState({ text: value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this3 = this;

      var id = this.props.match.params.id;
      var _state = this.state,
          title = _state.title,
          text = _state.text;


      _axios2.default.put('/api/post/' + id, { title: title, text: text }).then(function () {
        return _this3.handleEdit(false);
      }).catch(function (res) {
        return _this3.handleError(true, res.response.data);
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(snackbar, error) {
      this.setState({ snackbar: snackbar, error: error });
    }
  }, {
    key: 'removePost',
    value: function removePost() {
      var _this4 = this;

      var id = this.props.match.params.id;


      _axios2.default.delete('/api/post/' + id).then(function () {
        _this4.handleClose();
        _this4.props.history.goBack();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _state2 = this.state,
          title = _state2.title,
          text = _state2.text,
          created = _state2.created,
          edit = _state2.edit,
          error = _state2.error,
          snackbar = _state2.snackbar;

      var actions = [_react2.default.createElement(_FlatButton2.default, { key: 'cancel', label: 'Cancel', primary: true, onClick: this.handleClose }), _react2.default.createElement(_FlatButton2.default, { key: 'submit', label: 'Submit', primary: true, onClick: this.removePost })];
      var content = {
        title: !edit ? title : _react2.default.createElement(_TextField2.default, { id: "title", defaultValue: title, onChange: this.handleChange }),
        text: !edit ? text : _react2.default.createElement(_TextField2.default, { id: "text", defaultValue: text, onChange: this.handleChange, fullWidth: true, multiLine: true })
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Card.Card,
          { style: { boxShadow: "0 0" } },
          _react2.default.createElement(_Card.CardHeader, { style: { padding: "8px" }, title: _react2.default.createElement(
              _IconButton2.default,
              { onClick: function onClick() {
                  return _this5.props.history.goBack();
                } },
              _react2.default.createElement(_arrowBack2.default, null)
            ) })
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _Card.Card,
          { style: { boxShadow: "0 0", margin: "10px 0" } },
          _react2.default.createElement(_Card.CardHeader, {
            title: 'username',
            avatar: '/images/Evilmorty.jpg',
            subtitle: 'name'
          }),
          _react2.default.createElement(_Card.CardTitle, {
            title: content.title,
            subtitle: created && (0, _moment2.default)(created).fromNow(),
            subtitleStyle: { fontSize: "12px" },
            onClick: function onClick() {
              return _this5.handleEdit(true);
            }
          }),
          _react2.default.createElement(
            _Card.CardText,
            { style: { whiteSpace: "pre-wrap" }, onClick: function onClick() {
                return _this5.handleEdit(true);
              } },
            content.text
          ),
          _react2.default.createElement(_Divider2.default, null),
          _react2.default.createElement(
            _Card.CardActions,
            null,
            !edit && _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleOpen },
              _react2.default.createElement(_delete2.default, null)
            ),
            edit && _react2.default.createElement(
              _IconButton2.default,
              { onClick: this.handleSubmit },
              _react2.default.createElement(_done2.default, null)
            )
          )
        ),
        _react2.default.createElement(_CatchErrors2.default, { key: 'snack', error: error, open: snackbar, close: function close() {
            return _this5.handleError(false, error);
          } }),
        _react2.default.createElement(
          _Dialog2.default,
          {
            bodyClassName: 'device',
            actions: actions,
            modal: false,
            open: this.state.open,
            onRequestClose: this.handleClose
          },
          ' Discard post?'
        )
      );
    }
  }]);

  return ShowPost;
}(_react2.default.Component);

exports.default = ShowPost;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/delete");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/action/done");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/svg-icons/navigation/arrow-back");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var p = __webpack_require__(37);

var error = function error(fn) {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

module.exports = function (app) {
  app.route('/api/post').get(error(p.getAllPosts)).post(p.checkBody, error(p.createPost));

  app.route('/api/post/:id').get(p.checkId, error(p.getSinglePost)).delete(p.checkId, error(p.deletePost)).put(p.checkId, p.checkBody, error(p.updatePost));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Post = __webpack_require__(38);

var message = {
  noContent: 'You should write something',
  noTitle: 'Please provide a title',
  maxLength: 'That\'s a very long text',
  postNotFound: 'Post not found!'
};

exports.checkBody = function (req, res, next) {
  var _req$body = req.body,
      title = _req$body.title,
      text = _req$body.text;


  if (title.length > 1000 || text.length > 1000) return res.status(500).send(message.maxLength);
  if (text.length === 0) return res.status(500).send(message.noContent);
  if (title.length === 0) return res.status(500).send(message.noTitle);
  next();
};

exports.checkId = function (req, res, next) {
  var id = req.params.id;

  var checkId = new RegExp("^[0-9a-fA-F]{24}$");

  if (typeof id === 'string' && id.length == 24 && checkId.test(id)) {
    return next();
  } else {
    return res.status(500).send(message.postNotFound);
  }
};

exports.createPost = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Post(req.body).save();

          case 2:
            post = _context.sent;

            res.json(post);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllPosts = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var posts;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Post.find().sort({ created: -1 }).limit(10);

          case 2:
            posts = _context2.sent;

            res.json(posts);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSinglePost = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Post.findById(req.params.id);

          case 2:
            post = _context3.sent;

            if (post) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', res.status(500).send(message.postNotFound));

          case 5:
            res.json(post);

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deletePost = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Post.findByIdAndRemove(req.params.id);

          case 2:
            post = _context4.sent;

            if (post) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt('return', res.status(500).send(message.postNotFound));

          case 5:
            res.json({ message: "post removed" });

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatePost = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

          case 2:
            post = _context5.sent;

            if (post) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt('return', res.status(500).send(message.postNotFound));

          case 5:
            res.json(post);

          case 6:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(10);
var error = __webpack_require__(39);

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000
  },
  created: {
    type: Date,
    default: Date.now
  }
});

postSchema.plugin(error);

module.exports = mongoose.model('Post', postSchema);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("mongoose-mongodb-errors");

/***/ })
/******/ ]);