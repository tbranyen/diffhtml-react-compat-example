(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('diffhtml-react-compat');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('diffhtml-react-compat');

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadReact = function (_Component) {
  _inherits(RadReact, _Component);

  function RadReact() {
    _classCallCheck(this, RadReact);

    return _possibleConstructorReturn(this, (RadReact.__proto__ || Object.getPrototypeOf(RadReact)).apply(this, arguments));
  }

  _createClass(RadReact, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Some rad React component',
        _react2.default.createElement(
          'span',
          null,
          this.props.message.text
        )
      );
    }
  }]);

  return RadReact;
}(_react.Component);

RadReact.propTypes = {
  message: _react.PropTypes.shape({
    text: _react.PropTypes.string.isRequired
  }).isRequired
};

var Display = function () {
  function Display() {
    _classCallCheck(this, Display);
  }

  _createClass(Display, [{
    key: 'render',
    value: function render(_ref) {
      var message = _ref.message,
          children = _ref.children;

      return [_react2.default.createElement(
        'li',
        null,
        message
      ), _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(RadReact, { message: { text: "world" } })
      ), undefined, 1, 2, 3, 'div'].concat(_toConsumableArray(children));
    }
  }]);

  return Display;
}();

var App = function App(state) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactSplitPane2.default,
      { split: 'vertical', minSize: 50, defaultSize: 200 },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            Display,
            state,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Test'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'b',
                null,
                'This'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Out!'
              )
            )
          )
        )
      ),
      _react2.default.createElement('div', null)
    )
  );
};

(0, _reactDom.render)(_react2.default.createElement(App, { message: 'Hello world' }), document.querySelector('main'));

},{"diffhtml-react-compat":42,"react-split-pane":36}],2:[function(require,module,exports){
'use strict';

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (root, name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition();else if (typeof define == 'function' && define.amd) define(name, definition);else root[name] = definition();
}(undefined, 'bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true;

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return match && match.length > 1 && match[1] || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return match && match.length > 1 && match[2] || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
        likeAndroid = /like android/i.test(ua),
        android = !likeAndroid && /android/i.test(ua),
        nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
        nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
        chromeos = /CrOS/.test(ua),
        silk = /silk/i.test(ua),
        sailfish = /sailfish/i.test(ua),
        tizen = /tizen/i.test(ua),
        webos = /(web|hpw)os/i.test(ua),
        windowsphone = /windows phone/i.test(ua),
        samsungBrowser = /SamsungBrowser/i.test(ua),
        windows = !windowsphone && /windows/i.test(ua),
        mac = !iosdevice && !silk && /macintosh/i.test(ua),
        linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
        edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
        versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
        tablet = /tablet/i.test(ua),
        mobile = !tablet && /[^-]mobi/i.test(ua),
        xbox = /xbox/i.test(ua),
        result;

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera',
        opera: t,
        version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      };
    } else if (/opr|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera',
        opera: t,
        version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      };
    } else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android',
        samsungBrowser: t,
        version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      };
    } else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast',
        coast: t,
        version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      };
    } else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser',
        yandexbrowser: t,
        version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      };
    } else if (/ucbrowser/i.test(ua)) {
      result = {
        name: 'UC Browser',
        ucbrowser: t,
        version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      };
    } else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon',
        maxthon: t,
        version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      };
    } else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany',
        epiphany: t,
        version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      };
    } else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin',
        puffin: t,
        version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      };
    } else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir',
        sleipnir: t,
        version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      };
    } else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon',
        kMeleon: t,
        version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      };
    } else if (windowsphone) {
      result = {
        name: 'Windows Phone',
        windowsphone: t
      };
      if (edgeVersion) {
        result.msedge = t;
        result.version = edgeVersion;
      } else {
        result.msie = t;
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
      }
    } else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer',
        msie: t,
        version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      };
    } else if (chromeos) {
      result = {
        name: 'Chrome',
        chromeos: t,
        chromeBook: t,
        chrome: t,
        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      };
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge',
        msedge: t,
        version: edgeVersion
      };
    } else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi',
        vivaldi: t,
        version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    } else if (sailfish) {
      result = {
        name: 'Sailfish',
        sailfish: t,
        version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      };
    } else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey',
        seamonkey: t,
        version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      };
    } else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox',
        firefox: t,
        version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      };
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t;
      }
    } else if (silk) {
      result = {
        name: 'Amazon Silk',
        silk: t,
        version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      };
    } else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS',
        phantom: t,
        version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      };
    } else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS',
        slimer: t,
        version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      };
    } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry',
        blackberry: t,
        version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      };
    } else if (webos) {
      result = {
        name: 'WebOS',
        webos: t,
        version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t);
    } else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada',
        bada: t,
        version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    } else if (tizen) {
      result = {
        name: 'Tizen',
        tizen: t,
        version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    } else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla',
        qupzilla: t,
        version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      };
    } else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium',
        chromium: t,
        version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      };
    } else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome',
        chrome: t,
        version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      };
    } else if (android) {
      result = {
        name: 'Android',
        version: versionIdentifier
      };
    } else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari',
        safari: t
      };
      if (versionIdentifier) {
        result.version = versionIdentifier;
      }
    } else if (iosdevice) {
      result = {
        name: iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      };
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier;
      }
    } else if (/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot',
        googlebot: t,
        version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      };
    } else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
      };
    }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink";
        result.blink = t;
      } else {
        result.name = result.name || "Webkit";
        result.webkit = t;
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier;
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko";
      result.gecko = t;
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.windowsphone && !result.msedge && (android || result.silk)) {
      result.android = t;
    } else if (!result.windowsphone && !result.msedge && iosdevice) {
      result[iosdevice] = t;
      result.ios = t;
    } else if (mac) {
      result.mac = t;
    } else if (xbox) {
      result.xbox = t;
    } else if (windows) {
      result.windows = t;
    } else if (linux) {
      result.linux = t;
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (tablet || nexusTablet || iosdevice == 'ipad' || android && (osMajorVersion == 3 || osMajorVersion >= 4 && !mobile) || result.silk) {
      result.tablet = t;
    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || nexusMobile || result.blackberry || result.webos || result.bada) {
      result.mobile = t;
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge || result.msie && result.version >= 10 || result.yandexbrowser && result.version >= 15 || result.vivaldi && result.version >= 1.0 || result.chrome && result.version >= 20 || result.samsungBrowser && result.version >= 4 || result.firefox && result.version >= 20.0 || result.safari && result.version >= 6 || result.opera && result.version >= 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] >= 6 || result.blackberry && result.version >= 10.1 || result.chromium && result.version >= 20) {
      result.a = t;
    } else if (result.msie && result.version < 10 || result.chrome && result.version < 20 || result.firefox && result.version < 20.0 || result.safari && result.version < 6 || result.opera && result.version < 10.0 || result.ios && result.osversion && result.osversion.split(".")[0] < 6 || result.chromium && result.version < 20) {
      result.c = t;
    } else result.x = t;

    return result;
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '');

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem === 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [],
        i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      } else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      } else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void 0;
    }

    if (strictMode === void 0) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          if (typeof minVersions[browser] !== 'string') {
            throw new Error('Browser version in the minVersion map should be a string: ' + browser + ': ' + String(minVersions));
          }

          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser;
});

},{}],3:[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
  return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();
// special flexbox specifications


var _prefixAll2 = require('./static/prefixAll');

var _prefixAll3 = _interopRequireDefault(_prefixAll2);

var _getBrowserInformation = require('./utils/getBrowserInformation');

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = require('./utils/getPrefixedKeyframes');

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = require('./utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('./utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _zoomCursor = require('./plugins/zoomCursor');

var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

var _grabCursor = require('./plugins/grabCursor');

var _grabCursor2 = _interopRequireDefault(_grabCursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var plugins = [_position2.default, _calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
// this must be run AFTER the flexbox specs
_flex2.default];

var Prefixer = function () {
  /**
   * Instantiante a new prefixer
   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
   * @param {string} keepUnprefixed - keeps unprefixed properties and values
   */

  function Prefixer() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Prefixer);

    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

    this._userAgent = options.userAgent || defaultUserAgent;
    this._keepUnprefixed = options.keepUnprefixed || false;

    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);

    // Checks if the userAgent was resolved correctly
    if (this._browserInfo && this._browserInfo.prefix) {
      // set additional prefix information
      this.cssPrefix = this._browserInfo.prefix.css;
      this.jsPrefix = this._browserInfo.prefix.inline;
      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
    } else {
      this._usePrefixAllFallback = true;
      return false;
    }

    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
    if (data) {
      this._requiresPrefix = Object.keys(data).filter(function (key) {
        return data[key] >= _this._browserInfo.version;
      }).reduce(function (result, name) {
        result[name] = true;
        return result;
      }, {});
      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
    } else {
      this._usePrefixAllFallback = true;
    }
  }

  /**
   * Returns a prefixed version of the style object
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */

  _createClass(Prefixer, [{
    key: 'prefix',
    value: function prefix(styles) {
      var _this2 = this;

      // use prefixAll as fallback if userAgent can not be resolved
      if (this._usePrefixAllFallback) {
        return (0, _prefixAll3.default)(styles);
      }

      // only add prefixes if needed
      if (!this._hasPropsRequiringPrefix) {
        return styles;
      }

      Object.keys(styles).forEach(function (property) {
        var value = styles[property];
        if (value instanceof Object && !Array.isArray(value)) {
          // recurse through nested style objects
          styles[property] = _this2.prefix(value);
        } else {
          // add prefixes if needed
          if (_this2._requiresPrefix[property]) {
            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
            if (!_this2._keepUnprefixed) {
              delete styles[property];
            }
          }
        }
      });

      Object.keys(styles).forEach(function (property) {
        [].concat(styles[property]).forEach(function (value) {
          // resolve plugins
          plugins.forEach(function (plugin) {
            // generates a new plugin interface with current data
            assignStyles(styles, plugin({
              property: property,
              value: value,
              styles: styles,
              browserInfo: _this2._browserInfo,
              prefix: {
                js: _this2.jsPrefix,
                css: _this2.cssPrefix,
                keyframes: _this2.prefixedKeyframes
              },
              keepUnprefixed: _this2._keepUnprefixed,
              requiresPrefix: _this2._requiresPrefix
            }), value, _this2._keepUnprefixed);
          });
        });
      });

      return (0, _sortPrefixedStyle2.default)(styles);
    }

    /**
     * Returns a prefixed version of the style object using all vendor prefixes
     * @param {Object} styles - Style object that gets prefixed properties added
     * @returns {Object} - Style object with prefixed properties and values
     */

  }], [{
    key: 'prefixAll',
    value: function prefixAll(styles) {
      return (0, _prefixAll3.default)(styles);
    }
  }]);

  return Prefixer;
}();

exports.default = Prefixer;

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var value = arguments[2];
  var keepUnprefixed = arguments[3];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (val) {
        if (base[property].indexOf(val) === -1) {
          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
        }
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];

},{"./plugins/calc":5,"./plugins/flex":6,"./plugins/flexboxIE":7,"./plugins/flexboxOld":8,"./plugins/grabCursor":9,"./plugins/gradient":10,"./plugins/position":11,"./plugins/sizing":12,"./plugins/transition":13,"./plugins/zoomCursor":14,"./prefixProps":15,"./static/prefixAll":25,"./utils/capitalizeString":27,"./utils/getBrowserInformation":28,"./utils/getPrefixedKeyframes":29,"./utils/sortPrefixedStyle":34}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function calc(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var values = { flex: true, 'inline-flex': true };

function flex(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
    return {
      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = grabCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var values = { grab: true, grabbing: true };

function grabCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function position(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'position' && value === 'sticky' && (browser === 'safari' || browser === 'ios_saf')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties[property] && values[value]) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],13:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _unprefixProperty = require('../utils/unprefixProperty');

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var properties = { transition: true, transitionProperty: true };

function transition(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var requiresPrefix = _ref.requiresPrefix;
  var keepUnprefixed = _ref.keepUnprefixed;

  // also check for already prefixed transitions
  var unprefixedProperty = (0, _unprefixProperty2.default)(property);

  if (typeof value === 'string' && properties[unprefixedProperty]) {
    var _ret = function () {
      // TODO: memoize this array
      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateStyleName2.default)(prop);
      });

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return {
        v: _defineProperty({}, property, multipleValues.join(','))
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}
module.exports = exports['default'];

},{"../utils/unprefixProperty":35,"hyphenate-style-name":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zoomCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var values = { 'zoom-in': true, 'zoom-out': true };

function zoomCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];

},{"../utils/getPrefixedValue":30}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
module.exports = exports["default"];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];

},{"../../utils/isPrefixedValue":32,"../../utils/joinPrefixedValue":33}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

},{"../../utils/joinPrefixedValue":33}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

},{"../../utils/isPrefixedValue":32,"../../utils/joinPrefixedValue":33}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];

},{"../../utils/joinPrefixedValue":33}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];

},{"../../utils/capitalizeString":27,"../../utils/isPrefixedValue":32,"../prefixProps":26,"hyphenate-style-name":3}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('../utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];

},{"../utils/capitalizeString":27,"../utils/sortPrefixedStyle":34,"./plugins/calc":16,"./plugins/cursor":17,"./plugins/flex":18,"./plugins/flexboxIE":19,"./plugins/flexboxOld":20,"./plugins/gradient":21,"./plugins/position":22,"./plugins/sizing":23,"./plugins/transition":24,"./prefixProps":26}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var vendorPrefixes = {
  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
  Moz: ['firefox', 'seamonkey', 'sailfish'],
  ms: ['msie', 'msedge']
};
var browsers = {
  chrome: [['chrome'], ['chromium']],
  safari: [['safari']],
  firefox: [['firefox']],
  edge: [['msedge']],
  opera: [['opera'], ['vivaldi']],
  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
  ie: [['msie']],
  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
  and_uc: [['android', 'mobile'], ['android', 'tablet']],
  android: [['android', 'mobile'], ['android', 'tablet']]
};

var browserByInfo = function browserByInfo(info) {
  if (info.firefox) {
    return 'firefox';
  }
  var name = '';

  Object.keys(browsers).forEach(function (browser) {
    browsers[browser].forEach(function (condition) {
      var match = 0;
      condition.forEach(function (single) {
        if (info[single]) {
          match += 1;
        }
      });
      if (condition.length === match) {
        name = browser;
      }
    });
  });

  return name;
};

/**
 * Uses bowser to get default browser information such as version and name
 * Evaluates bowser info and adds vendorPrefix information
 * @param {string} userAgent - userAgent that gets evaluated
 */

exports.default = function (userAgent) {
  if (!userAgent) {
    return false;
  }
  var info = _bowser2.default._detect(userAgent);

  Object.keys(vendorPrefixes).forEach(function (prefix) {
    vendorPrefixes[prefix].forEach(function (browser) {
      if (info[browser]) {
        info.prefix = {
          inline: prefix,
          css: '-' + prefix.toLowerCase() + '-'
        };
      }
    });
  });

  info.browser = browserByInfo(info);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
  info.osversion = parseFloat(info.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (info.browser === 'ios_saf' && info.version > info.osversion) {
    info.version = info.osversion;
    info.safari = true;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (info.browser === 'android' && info.chrome && info.version > 37) {
    info.browser = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (info.browser === 'android' && info.osversion < 5) {
    info.version = info.osversion;
  }

  return info;
};

module.exports = exports['default'];

},{"bowser":2}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var browser = _ref.browser;
  var version = _ref.version;
  var prefix = _ref.prefix;

  var prefixedKeyframes = 'keyframes';

  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
    prefixedKeyframes = prefix.css + prefixedKeyframes;
  }
  return prefixedKeyframes;
};

module.exports = exports['default'];

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (prefixedValue, value, keepUnprefixed) {
  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
};

module.exports = exports["default"];

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];

},{}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = require('./isPrefixedProperty');

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];

},{"./isPrefixedProperty":31}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
};

module.exports = exports['default'];

},{}],36:[function(require,module,exports){
'use strict';

var SplitPane = require('./lib/SplitPane');

module.exports = SplitPane;

},{"./lib/SplitPane":39}],37:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('diffhtml-react-compat');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Pane = function (_Component) {
    _inherits(Pane, _Component);

    function Pane() {
        var _ref;

        _classCallCheck(this, Pane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Pane.__proto__ || Object.getPrototypeOf(Pane)).call.apply(_ref, [this].concat(args)));

        _this.state = { size: _this.props.size };
        return _this;
    }

    _createClass(Pane, [{
        key: 'render',
        value: function render() {
            var split = this.props.split;
            var classes = ['Pane', split, this.props.className];

            var style = _extends({}, this.props.style || {}, {
                flex: 1,
                position: 'relative',
                outline: 'none'
            });

            if (this.state.size !== undefined) {
                if (split === 'vertical') {
                    style.width = this.state.size;
                } else {
                    style.height = this.state.size;
                    style.display = 'flex';
                }
                style.flex = 'none';
            }

            return _react2.default.createElement('div', { className: classes.join(' '), style: this.props.prefixer.prefix(style) }, this.props.children);
        }
    }]);

    return Pane;
}(_react.Component);

Pane.propTypes = {
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.node.isRequired,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};

Pane.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT })
};

exports.default = Pane;
module.exports = exports['default'];

},{"diffhtml-react-compat":42,"inline-style-prefixer":4,"react-style-proptype":41}],38:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('diffhtml-react-compat');

var _react2 = _interopRequireDefault(_react);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

var Resizer = function (_Component) {
    _inherits(Resizer, _Component);

    function Resizer() {
        _classCallCheck(this, Resizer);

        return _possibleConstructorReturn(this, (Resizer.__proto__ || Object.getPrototypeOf(Resizer)).apply(this, arguments));
    }

    _createClass(Resizer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                split = _props.split,
                className = _props.className,
                resizerClassName = _props.resizerClassName;

            var classes = [resizerClassName, split, className];
            return _react2.default.createElement('span', {
                className: classes.join(' '),
                style: this.props.prefixer.prefix(this.props.style) || {},
                onMouseDown: function onMouseDown(event) {
                    _this2.props.onMouseDown(event);
                },
                onTouchStart: function onTouchStart(event) {
                    event.preventDefault();
                    _this2.props.onTouchStart(event);
                },
                onTouchEnd: function onTouchEnd(event) {
                    event.preventDefault();
                    _this2.props.onTouchEnd(event);
                }
            });
        }
    }]);

    return Resizer;
}(_react.Component);

Resizer.propTypes = {
    onMouseDown: _react.PropTypes.func.isRequired,
    onTouchStart: _react.PropTypes.func.isRequired,
    onTouchEnd: _react.PropTypes.func.isRequired,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    className: _react.PropTypes.string.isRequired,
    resizerClassName: _react.PropTypes.string.isRequired,
    style: _reactStyleProptype2.default
};

Resizer.defaultProps = {
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    resizerClassName: 'Resizer'
};

exports.default = Resizer;
module.exports = exports['default'];

},{"diffhtml-react-compat":42,"inline-style-prefixer":4,"react-style-proptype":41}],39:[function(require,module,exports){
'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

var _react = require('diffhtml-react-compat');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('diffhtml-react-compat');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _Pane = require('./Pane');

var _Pane2 = _interopRequireDefault(_Pane);

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';

function unFocus(document, window) {
    if (document.selection) {
        document.selection.empty();
    } else {
        try {
            window.getSelection().removeAllRanges();
            // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}

var SplitPane = function (_Component) {
    _inherits(SplitPane, _Component);

    function SplitPane() {
        var _ref;

        _classCallCheck(this, SplitPane);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = SplitPane.__proto__ || Object.getPrototypeOf(SplitPane)).call.apply(_ref, [this].concat(args)));

        _this.onMouseDown = _this.onMouseDown.bind(_this);
        _this.onTouchStart = _this.onTouchStart.bind(_this);
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onTouchMove = _this.onTouchMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);

        _this.state = {
            active: false,
            resized: false
        };
        return _this;
    }

    _createClass(SplitPane, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setSize(this.props, this.state);
            document.addEventListener('mouseup', this.onMouseUp);
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setSize(props, this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('mouseup', this.onMouseUp);
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('touchmove', this.onTouchMove);
        }
    }, {
        key: 'onMouseDown',
        value: function onMouseDown(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchStart(eventWithTouches);
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart(event) {
            if (this.props.allowResize) {
                unFocus(document, window);
                var position = this.props.split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                if (typeof this.props.onDragStarted === 'function') {
                    this.props.onDragStarted();
                }
                this.setState({
                    active: true,
                    position: position
                });
            }
        }
    }, {
        key: 'onMouseMove',
        value: function onMouseMove(event) {
            var eventWithTouches = _extends({}, event, { touches: [{ clientX: event.clientX, clientY: event.clientY }] });
            this.onTouchMove(eventWithTouches);
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove(event) {
            if (this.props.allowResize) {
                if (this.state.active) {
                    unFocus(document, window);
                    var isPrimaryFirst = this.props.primary === 'first';
                    var ref = isPrimaryFirst ? this.pane1 : this.pane2;
                    if (ref) {
                        var node = _reactDom2.default.findDOMNode(ref);

                        if (node.getBoundingClientRect) {
                            var width = node.getBoundingClientRect().width;
                            var height = node.getBoundingClientRect().height;
                            var current = this.props.split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
                            var size = this.props.split === 'vertical' ? width : height;
                            var position = this.state.position;
                            var newPosition = isPrimaryFirst ? position - current : current - position;

                            var maxSize = this.props.maxSize;
                            if (this.props.maxSize !== undefined && this.props.maxSize <= 0) {
                                var splPane = this.splitPane;
                                if (this.props.split === 'vertical') {
                                    maxSize = splPane.getBoundingClientRect().width + this.props.maxSize;
                                } else {
                                    maxSize = splPane.getBoundingClientRect().height + this.props.maxSize;
                                }
                            }

                            var newSize = size - newPosition;

                            if (newSize < this.props.minSize) {
                                newSize = this.props.minSize;
                            } else if (this.props.maxSize !== undefined && newSize > maxSize) {
                                newSize = maxSize;
                            } else {
                                this.setState({
                                    position: current,
                                    resized: true
                                });
                            }

                            if (this.props.onChange) {
                                this.props.onChange(newSize);
                            }
                            this.setState({
                                draggedSize: newSize
                            });
                            ref.setState({
                                size: newSize
                            });
                        }
                    }
                }
            }
        }
    }, {
        key: 'onMouseUp',
        value: function onMouseUp() {
            if (this.props.allowResize) {
                if (this.state.active) {
                    if (typeof this.props.onDragFinished === 'function') {
                        this.props.onDragFinished(this.state.draggedSize);
                    }
                    this.setState({
                        active: false
                    });
                }
            }
        }
    }, {
        key: 'setSize',
        value: function setSize(props, state) {
            var ref = this.props.primary === 'first' ? this.pane1 : this.pane2;
            var newSize = void 0;
            if (ref) {
                newSize = props.size || state && state.draggedSize || props.defaultSize || props.minSize;
                ref.setState({
                    size: newSize
                });
                if (props.size !== state.draggedSize) {
                    this.setState({
                        draggedSize: newSize
                    });
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                split = _props.split,
                allowResize = _props.allowResize;

            var disabledClass = allowResize ? '' : 'disabled';

            var style = _extends({}, this.props.style || {}, {
                display: 'flex',
                flex: 1,
                position: 'relative',
                outline: 'none',
                overflow: 'hidden',
                MozUserSelect: 'text',
                WebkitUserSelect: 'text',
                msUserSelect: 'text',
                userSelect: 'text'
            });

            if (split === 'vertical') {
                _extends(style, {
                    flexDirection: 'row',
                    height: '100%',
                    position: 'absolute',
                    left: 0,
                    right: 0
                });
            } else {
                _extends(style, {
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100%',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    width: '100%'
                });
            }

            var children = this.props.children;
            var classes = ['SplitPane', this.props.className, split, disabledClass];

            var pane1Style = this.props.prefixer.prefix(_extends({}, this.props.paneStyle || {}, this.props.pane1Style || {}));

            var pane2Style = this.props.prefixer.prefix(_extends({}, this.props.paneStyle || {}, this.props.pane2Style || {}));

            return _react2.default.createElement('div', {
                className: classes.join(' '),
                style: this.props.prefixer.prefix(style),
                ref: function ref(node) {
                    _this2.splitPane = node;
                }
            }, _react2.default.createElement(_Pane2.default, {
                ref: function ref(node) {
                    _this2.pane1 = node;
                },
                key: 'pane1', className: 'Pane1',
                style: pane1Style,
                split: split,
                size: this.props.primary === 'first' ? this.props.size || this.props.defaultSize || this.props.minSize : undefined
            }, children[0]), _react2.default.createElement(_Resizer2.default, {
                ref: function ref(node) {
                    _this2.resizer = node;
                },
                key: 'resizer',
                className: disabledClass,
                resizerClassName: this.props.resizerClassName,
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                onTouchEnd: this.onMouseUp,
                style: this.props.resizerStyle || {},
                split: split
            }), _react2.default.createElement(_Pane2.default, {
                ref: function ref(node) {
                    _this2.pane2 = node;
                },
                key: 'pane2',
                className: 'Pane2',
                style: pane2Style,
                split: split,
                size: this.props.primary === 'second' ? this.props.size || this.props.defaultSize || this.props.minSize : undefined
            }, children[1]));
        }
    }]);

    return SplitPane;
}(_react.Component);

SplitPane.propTypes = {
    primary: _react.PropTypes.oneOf(['first', 'second']),
    minSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    maxSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    // eslint-disable-next-line react/no-unused-prop-types
    defaultSize: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    size: _react.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
    allowResize: _react.PropTypes.bool,
    split: _react.PropTypes.oneOf(['vertical', 'horizontal']),
    onDragStarted: _react.PropTypes.func,
    onDragFinished: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    prefixer: _react.PropTypes.instanceOf(_inlineStylePrefixer2.default).isRequired,
    style: _reactStyleProptype2.default,
    resizerStyle: _reactStyleProptype2.default,
    paneStyle: _reactStyleProptype2.default,
    pane1Style: _reactStyleProptype2.default,
    pane2Style: _reactStyleProptype2.default,
    className: _react.PropTypes.string,
    resizerClassName: _react.PropTypes.string,
    children: _react.PropTypes.arrayOf(_react.PropTypes.node).isRequired
};

SplitPane.defaultProps = {
    split: 'vertical',
    minSize: 50,
    allowResize: true,
    prefixer: new _inlineStylePrefixer2.default({ userAgent: USER_AGENT }),
    primary: 'first'
};

exports.default = SplitPane;
module.exports = exports['default'];

},{"./Pane":37,"./Resizer":38,"diffhtml-react-compat":42,"inline-style-prefixer":4,"react-style-proptype":41}],40:[function(require,module,exports){
"use strict";

module.exports = ["alignContent", "MozAlignContent", "WebKitAlignContent", "MSAlignContent", "OAlignContent", "alignItems", "MozAlignItems", "WebKitAlignItems", "MSAlignItems", "OAlignItems", "alignSelf", "MozAlignSelf", "WebKitAlignSelf", "MSAlignSelf", "OAlignSelf", "all", "MozAll", "WebKitAll", "MSAll", "OAll", "animation", "MozAnimation", "WebKitAnimation", "MSAnimation", "OAnimation", "animationDelay", "MozAnimationDelay", "WebKitAnimationDelay", "MSAnimationDelay", "OAnimationDelay", "animationDirection", "MozAnimationDirection", "WebKitAnimationDirection", "MSAnimationDirection", "OAnimationDirection", "animationDuration", "MozAnimationDuration", "WebKitAnimationDuration", "MSAnimationDuration", "OAnimationDuration", "animationFillMode", "MozAnimationFillMode", "WebKitAnimationFillMode", "MSAnimationFillMode", "OAnimationFillMode", "animationIterationCount", "MozAnimationIterationCount", "WebKitAnimationIterationCount", "MSAnimationIterationCount", "OAnimationIterationCount", "animationName", "MozAnimationName", "WebKitAnimationName", "MSAnimationName", "OAnimationName", "animationPlayState", "MozAnimationPlayState", "WebKitAnimationPlayState", "MSAnimationPlayState", "OAnimationPlayState", "animationTimingFunction", "MozAnimationTimingFunction", "WebKitAnimationTimingFunction", "MSAnimationTimingFunction", "OAnimationTimingFunction", "backfaceVisibility", "MozBackfaceVisibility", "WebKitBackfaceVisibility", "MSBackfaceVisibility", "OBackfaceVisibility", "background", "MozBackground", "WebKitBackground", "MSBackground", "OBackground", "backgroundAttachment", "MozBackgroundAttachment", "WebKitBackgroundAttachment", "MSBackgroundAttachment", "OBackgroundAttachment", "backgroundBlendMode", "MozBackgroundBlendMode", "WebKitBackgroundBlendMode", "MSBackgroundBlendMode", "OBackgroundBlendMode", "backgroundClip", "MozBackgroundClip", "WebKitBackgroundClip", "MSBackgroundClip", "OBackgroundClip", "backgroundColor", "MozBackgroundColor", "WebKitBackgroundColor", "MSBackgroundColor", "OBackgroundColor", "backgroundImage", "MozBackgroundImage", "WebKitBackgroundImage", "MSBackgroundImage", "OBackgroundImage", "backgroundOrigin", "MozBackgroundOrigin", "WebKitBackgroundOrigin", "MSBackgroundOrigin", "OBackgroundOrigin", "backgroundPosition", "MozBackgroundPosition", "WebKitBackgroundPosition", "MSBackgroundPosition", "OBackgroundPosition", "backgroundRepeat", "MozBackgroundRepeat", "WebKitBackgroundRepeat", "MSBackgroundRepeat", "OBackgroundRepeat", "backgroundSize", "MozBackgroundSize", "WebKitBackgroundSize", "MSBackgroundSize", "OBackgroundSize", "blockSize", "MozBlockSize", "WebKitBlockSize", "MSBlockSize", "OBlockSize", "border", "MozBorder", "WebKitBorder", "MSBorder", "OBorder", "borderBlockEnd", "MozBorderBlockEnd", "WebKitBorderBlockEnd", "MSBorderBlockEnd", "OBorderBlockEnd", "borderBlockEndColor", "MozBorderBlockEndColor", "WebKitBorderBlockEndColor", "MSBorderBlockEndColor", "OBorderBlockEndColor", "borderBlockEndStyle", "MozBorderBlockEndStyle", "WebKitBorderBlockEndStyle", "MSBorderBlockEndStyle", "OBorderBlockEndStyle", "borderBlockEndWidth", "MozBorderBlockEndWidth", "WebKitBorderBlockEndWidth", "MSBorderBlockEndWidth", "OBorderBlockEndWidth", "borderBlockStart", "MozBorderBlockStart", "WebKitBorderBlockStart", "MSBorderBlockStart", "OBorderBlockStart", "borderBlockStartColor", "MozBorderBlockStartColor", "WebKitBorderBlockStartColor", "MSBorderBlockStartColor", "OBorderBlockStartColor", "borderBlockStartStyle", "MozBorderBlockStartStyle", "WebKitBorderBlockStartStyle", "MSBorderBlockStartStyle", "OBorderBlockStartStyle", "borderBlockStartWidth", "MozBorderBlockStartWidth", "WebKitBorderBlockStartWidth", "MSBorderBlockStartWidth", "OBorderBlockStartWidth", "borderBottom", "MozBorderBottom", "WebKitBorderBottom", "MSBorderBottom", "OBorderBottom", "borderBottomColor", "MozBorderBottomColor", "WebKitBorderBottomColor", "MSBorderBottomColor", "OBorderBottomColor", "borderBottomLeftRadius", "MozBorderBottomLeftRadius", "WebKitBorderBottomLeftRadius", "MSBorderBottomLeftRadius", "OBorderBottomLeftRadius", "borderBottomRightRadius", "MozBorderBottomRightRadius", "WebKitBorderBottomRightRadius", "MSBorderBottomRightRadius", "OBorderBottomRightRadius", "borderBottomStyle", "MozBorderBottomStyle", "WebKitBorderBottomStyle", "MSBorderBottomStyle", "OBorderBottomStyle", "borderBottomWidth", "MozBorderBottomWidth", "WebKitBorderBottomWidth", "MSBorderBottomWidth", "OBorderBottomWidth", "borderCollapse", "MozBorderCollapse", "WebKitBorderCollapse", "MSBorderCollapse", "OBorderCollapse", "borderColor", "MozBorderColor", "WebKitBorderColor", "MSBorderColor", "OBorderColor", "borderImage", "MozBorderImage", "WebKitBorderImage", "MSBorderImage", "OBorderImage", "borderImageOutset", "MozBorderImageOutset", "WebKitBorderImageOutset", "MSBorderImageOutset", "OBorderImageOutset", "borderImageRepeat", "MozBorderImageRepeat", "WebKitBorderImageRepeat", "MSBorderImageRepeat", "OBorderImageRepeat", "borderImageSlice", "MozBorderImageSlice", "WebKitBorderImageSlice", "MSBorderImageSlice", "OBorderImageSlice", "borderImageSource", "MozBorderImageSource", "WebKitBorderImageSource", "MSBorderImageSource", "OBorderImageSource", "borderImageWidth", "MozBorderImageWidth", "WebKitBorderImageWidth", "MSBorderImageWidth", "OBorderImageWidth", "borderInlineEnd", "MozBorderInlineEnd", "WebKitBorderInlineEnd", "MSBorderInlineEnd", "OBorderInlineEnd", "borderInlineEndColor", "MozBorderInlineEndColor", "WebKitBorderInlineEndColor", "MSBorderInlineEndColor", "OBorderInlineEndColor", "borderInlineEndStyle", "MozBorderInlineEndStyle", "WebKitBorderInlineEndStyle", "MSBorderInlineEndStyle", "OBorderInlineEndStyle", "borderInlineEndWidth", "MozBorderInlineEndWidth", "WebKitBorderInlineEndWidth", "MSBorderInlineEndWidth", "OBorderInlineEndWidth", "borderInlineStart", "MozBorderInlineStart", "WebKitBorderInlineStart", "MSBorderInlineStart", "OBorderInlineStart", "borderInlineStartColor", "MozBorderInlineStartColor", "WebKitBorderInlineStartColor", "MSBorderInlineStartColor", "OBorderInlineStartColor", "borderInlineStartStyle", "MozBorderInlineStartStyle", "WebKitBorderInlineStartStyle", "MSBorderInlineStartStyle", "OBorderInlineStartStyle", "borderInlineStartWidth", "MozBorderInlineStartWidth", "WebKitBorderInlineStartWidth", "MSBorderInlineStartWidth", "OBorderInlineStartWidth", "borderLeft", "MozBorderLeft", "WebKitBorderLeft", "MSBorderLeft", "OBorderLeft", "borderLeftColor", "MozBorderLeftColor", "WebKitBorderLeftColor", "MSBorderLeftColor", "OBorderLeftColor", "borderLeftStyle", "MozBorderLeftStyle", "WebKitBorderLeftStyle", "MSBorderLeftStyle", "OBorderLeftStyle", "borderLeftWidth", "MozBorderLeftWidth", "WebKitBorderLeftWidth", "MSBorderLeftWidth", "OBorderLeftWidth", "borderRadius", "MozBorderRadius", "WebKitBorderRadius", "MSBorderRadius", "OBorderRadius", "borderRight", "MozBorderRight", "WebKitBorderRight", "MSBorderRight", "OBorderRight", "borderRightColor", "MozBorderRightColor", "WebKitBorderRightColor", "MSBorderRightColor", "OBorderRightColor", "borderRightStyle", "MozBorderRightStyle", "WebKitBorderRightStyle", "MSBorderRightStyle", "OBorderRightStyle", "borderRightWidth", "MozBorderRightWidth", "WebKitBorderRightWidth", "MSBorderRightWidth", "OBorderRightWidth", "borderSpacing", "MozBorderSpacing", "WebKitBorderSpacing", "MSBorderSpacing", "OBorderSpacing", "borderStyle", "MozBorderStyle", "WebKitBorderStyle", "MSBorderStyle", "OBorderStyle", "borderTop", "MozBorderTop", "WebKitBorderTop", "MSBorderTop", "OBorderTop", "borderTopColor", "MozBorderTopColor", "WebKitBorderTopColor", "MSBorderTopColor", "OBorderTopColor", "borderTopLeftRadius", "MozBorderTopLeftRadius", "WebKitBorderTopLeftRadius", "MSBorderTopLeftRadius", "OBorderTopLeftRadius", "borderTopRightRadius", "MozBorderTopRightRadius", "WebKitBorderTopRightRadius", "MSBorderTopRightRadius", "OBorderTopRightRadius", "borderTopStyle", "MozBorderTopStyle", "WebKitBorderTopStyle", "MSBorderTopStyle", "OBorderTopStyle", "borderTopWidth", "MozBorderTopWidth", "WebKitBorderTopWidth", "MSBorderTopWidth", "OBorderTopWidth", "borderWidth", "MozBorderWidth", "WebKitBorderWidth", "MSBorderWidth", "OBorderWidth", "bottom", "MozBottom", "WebKitBottom", "MSBottom", "OBottom", "boxDecorationBreak", "MozBoxDecorationBreak", "WebKitBoxDecorationBreak", "MSBoxDecorationBreak", "OBoxDecorationBreak", "boxShadow", "MozBoxShadow", "WebKitBoxShadow", "MSBoxShadow", "OBoxShadow", "boxSizing", "MozBoxSizing", "WebKitBoxSizing", "MSBoxSizing", "OBoxSizing", "breakAfter", "MozBreakAfter", "WebKitBreakAfter", "MSBreakAfter", "OBreakAfter", "breakBefore", "MozBreakBefore", "WebKitBreakBefore", "MSBreakBefore", "OBreakBefore", "breakInside", "MozBreakInside", "WebKitBreakInside", "MSBreakInside", "OBreakInside", "captionSide", "MozCaptionSide", "WebKitCaptionSide", "MSCaptionSide", "OCaptionSide", "ch", "MozCh", "WebKitCh", "MSCh", "OCh", "clear", "MozClear", "WebKitClear", "MSClear", "OClear", "clip", "MozClip", "WebKitClip", "MSClip", "OClip", "clipPath", "MozClipPath", "WebKitClipPath", "MSClipPath", "OClipPath", "cm", "MozCm", "WebKitCm", "MSCm", "OCm", "color", "MozColor", "WebKitColor", "MSColor", "OColor", "columnCount", "MozColumnCount", "WebKitColumnCount", "MSColumnCount", "OColumnCount", "columnFill", "MozColumnFill", "WebKitColumnFill", "MSColumnFill", "OColumnFill", "columnGap", "MozColumnGap", "WebKitColumnGap", "MSColumnGap", "OColumnGap", "columnRule", "MozColumnRule", "WebKitColumnRule", "MSColumnRule", "OColumnRule", "columnRuleColor", "MozColumnRuleColor", "WebKitColumnRuleColor", "MSColumnRuleColor", "OColumnRuleColor", "columnRuleStyle", "MozColumnRuleStyle", "WebKitColumnRuleStyle", "MSColumnRuleStyle", "OColumnRuleStyle", "columnRuleWidth", "MozColumnRuleWidth", "WebKitColumnRuleWidth", "MSColumnRuleWidth", "OColumnRuleWidth", "columnSpan", "MozColumnSpan", "WebKitColumnSpan", "MSColumnSpan", "OColumnSpan", "columnWidth", "MozColumnWidth", "WebKitColumnWidth", "MSColumnWidth", "OColumnWidth", "columns", "MozColumns", "WebKitColumns", "MSColumns", "OColumns", "content", "MozContent", "WebKitContent", "MSContent", "OContent", "counterIncrement", "MozCounterIncrement", "WebKitCounterIncrement", "MSCounterIncrement", "OCounterIncrement", "counterReset", "MozCounterReset", "WebKitCounterReset", "MSCounterReset", "OCounterReset", "cursor", "MozCursor", "WebKitCursor", "MSCursor", "OCursor", "deg", "MozDeg", "WebKitDeg", "MSDeg", "ODeg", "direction", "MozDirection", "WebKitDirection", "MSDirection", "ODirection", "display", "MozDisplay", "WebKitDisplay", "MSDisplay", "ODisplay", "dpcm", "MozDpcm", "WebKitDpcm", "MSDpcm", "ODpcm", "dpi", "MozDpi", "WebKitDpi", "MSDpi", "ODpi", "dppx", "MozDppx", "WebKitDppx", "MSDppx", "ODppx", "em", "MozEm", "WebKitEm", "MSEm", "OEm", "emptyCells", "MozEmptyCells", "WebKitEmptyCells", "MSEmptyCells", "OEmptyCells", "ex", "MozEx", "WebKitEx", "MSEx", "OEx", "filter", "MozFilter", "WebKitFilter", "MSFilter", "OFilter", "flex", "MozFlex", "WebKitFlex", "MSFlex", "OFlex", "flexBasis", "MozFlexBasis", "WebKitFlexBasis", "MSFlexBasis", "OFlexBasis", "flexDirection", "MozFlexDirection", "WebKitFlexDirection", "MSFlexDirection", "OFlexDirection", "flexFlow", "MozFlexFlow", "WebKitFlexFlow", "MSFlexFlow", "OFlexFlow", "flexGrow", "MozFlexGrow", "WebKitFlexGrow", "MSFlexGrow", "OFlexGrow", "flexShrink", "MozFlexShrink", "WebKitFlexShrink", "MSFlexShrink", "OFlexShrink", "flexWrap", "MozFlexWrap", "WebKitFlexWrap", "MSFlexWrap", "OFlexWrap", "float", "MozFloat", "WebKitFloat", "MSFloat", "OFloat", "font", "MozFont", "WebKitFont", "MSFont", "OFont", "fontFamily", "MozFontFamily", "WebKitFontFamily", "MSFontFamily", "OFontFamily", "fontFeatureSettings", "MozFontFeatureSettings", "WebKitFontFeatureSettings", "MSFontFeatureSettings", "OFontFeatureSettings", "fontKerning", "MozFontKerning", "WebKitFontKerning", "MSFontKerning", "OFontKerning", "fontLanguageOverride", "MozFontLanguageOverride", "WebKitFontLanguageOverride", "MSFontLanguageOverride", "OFontLanguageOverride", "fontSize", "MozFontSize", "WebKitFontSize", "MSFontSize", "OFontSize", "fontSizeAdjust", "MozFontSizeAdjust", "WebKitFontSizeAdjust", "MSFontSizeAdjust", "OFontSizeAdjust", "fontStretch", "MozFontStretch", "WebKitFontStretch", "MSFontStretch", "OFontStretch", "fontStyle", "MozFontStyle", "WebKitFontStyle", "MSFontStyle", "OFontStyle", "fontSynthesis", "MozFontSynthesis", "WebKitFontSynthesis", "MSFontSynthesis", "OFontSynthesis", "fontVariant", "MozFontVariant", "WebKitFontVariant", "MSFontVariant", "OFontVariant", "fontVariantAlternates", "MozFontVariantAlternates", "WebKitFontVariantAlternates", "MSFontVariantAlternates", "OFontVariantAlternates", "fontVariantCaps", "MozFontVariantCaps", "WebKitFontVariantCaps", "MSFontVariantCaps", "OFontVariantCaps", "fontVariantEastAsian", "MozFontVariantEastAsian", "WebKitFontVariantEastAsian", "MSFontVariantEastAsian", "OFontVariantEastAsian", "fontVariantLigatures", "MozFontVariantLigatures", "WebKitFontVariantLigatures", "MSFontVariantLigatures", "OFontVariantLigatures", "fontVariantNumeric", "MozFontVariantNumeric", "WebKitFontVariantNumeric", "MSFontVariantNumeric", "OFontVariantNumeric", "fontVariantPosition", "MozFontVariantPosition", "WebKitFontVariantPosition", "MSFontVariantPosition", "OFontVariantPosition", "fontWeight", "MozFontWeight", "WebKitFontWeight", "MSFontWeight", "OFontWeight", "grad", "MozGrad", "WebKitGrad", "MSGrad", "OGrad", "grid", "MozGrid", "WebKitGrid", "MSGrid", "OGrid", "gridArea", "MozGridArea", "WebKitGridArea", "MSGridArea", "OGridArea", "gridAutoColumns", "MozGridAutoColumns", "WebKitGridAutoColumns", "MSGridAutoColumns", "OGridAutoColumns", "gridAutoFlow", "MozGridAutoFlow", "WebKitGridAutoFlow", "MSGridAutoFlow", "OGridAutoFlow", "gridAutoRows", "MozGridAutoRows", "WebKitGridAutoRows", "MSGridAutoRows", "OGridAutoRows", "gridColumn", "MozGridColumn", "WebKitGridColumn", "MSGridColumn", "OGridColumn", "gridColumnEnd", "MozGridColumnEnd", "WebKitGridColumnEnd", "MSGridColumnEnd", "OGridColumnEnd", "gridColumnGap", "MozGridColumnGap", "WebKitGridColumnGap", "MSGridColumnGap", "OGridColumnGap", "gridColumnStart", "MozGridColumnStart", "WebKitGridColumnStart", "MSGridColumnStart", "OGridColumnStart", "gridGap", "MozGridGap", "WebKitGridGap", "MSGridGap", "OGridGap", "gridRow", "MozGridRow", "WebKitGridRow", "MSGridRow", "OGridRow", "gridRowEnd", "MozGridRowEnd", "WebKitGridRowEnd", "MSGridRowEnd", "OGridRowEnd", "gridRowGap", "MozGridRowGap", "WebKitGridRowGap", "MSGridRowGap", "OGridRowGap", "gridRowStart", "MozGridRowStart", "WebKitGridRowStart", "MSGridRowStart", "OGridRowStart", "gridTemplate", "MozGridTemplate", "WebKitGridTemplate", "MSGridTemplate", "OGridTemplate", "gridTemplateAreas", "MozGridTemplateAreas", "WebKitGridTemplateAreas", "MSGridTemplateAreas", "OGridTemplateAreas", "gridTemplateColumns", "MozGridTemplateColumns", "WebKitGridTemplateColumns", "MSGridTemplateColumns", "OGridTemplateColumns", "gridTemplateRows", "MozGridTemplateRows", "WebKitGridTemplateRows", "MSGridTemplateRows", "OGridTemplateRows", "height", "MozHeight", "WebKitHeight", "MSHeight", "OHeight", "hyphens", "MozHyphens", "WebKitHyphens", "MSHyphens", "OHyphens", "hz", "MozHz", "WebKitHz", "MSHz", "OHz", "imageOrientation", "MozImageOrientation", "WebKitImageOrientation", "MSImageOrientation", "OImageOrientation", "imageRendering", "MozImageRendering", "WebKitImageRendering", "MSImageRendering", "OImageRendering", "imageResolution", "MozImageResolution", "WebKitImageResolution", "MSImageResolution", "OImageResolution", "imeMode", "MozImeMode", "WebKitImeMode", "MSImeMode", "OImeMode", "in", "MozIn", "WebKitIn", "MSIn", "OIn", "inherit", "MozInherit", "WebKitInherit", "MSInherit", "OInherit", "initial", "MozInitial", "WebKitInitial", "MSInitial", "OInitial", "inlineSize", "MozInlineSize", "WebKitInlineSize", "MSInlineSize", "OInlineSize", "isolation", "MozIsolation", "WebKitIsolation", "MSIsolation", "OIsolation", "justifyContent", "MozJustifyContent", "WebKitJustifyContent", "MSJustifyContent", "OJustifyContent", "khz", "MozKhz", "WebKitKhz", "MSKhz", "OKhz", "left", "MozLeft", "WebKitLeft", "MSLeft", "OLeft", "letterSpacing", "MozLetterSpacing", "WebKitLetterSpacing", "MSLetterSpacing", "OLetterSpacing", "lineBreak", "MozLineBreak", "WebKitLineBreak", "MSLineBreak", "OLineBreak", "lineHeight", "MozLineHeight", "WebKitLineHeight", "MSLineHeight", "OLineHeight", "listStyle", "MozListStyle", "WebKitListStyle", "MSListStyle", "OListStyle", "listStyleImage", "MozListStyleImage", "WebKitListStyleImage", "MSListStyleImage", "OListStyleImage", "listStylePosition", "MozListStylePosition", "WebKitListStylePosition", "MSListStylePosition", "OListStylePosition", "listStyleType", "MozListStyleType", "WebKitListStyleType", "MSListStyleType", "OListStyleType", "margin", "MozMargin", "WebKitMargin", "MSMargin", "OMargin", "marginBlockEnd", "MozMarginBlockEnd", "WebKitMarginBlockEnd", "MSMarginBlockEnd", "OMarginBlockEnd", "marginBlockStart", "MozMarginBlockStart", "WebKitMarginBlockStart", "MSMarginBlockStart", "OMarginBlockStart", "marginBottom", "MozMarginBottom", "WebKitMarginBottom", "MSMarginBottom", "OMarginBottom", "marginInlineEnd", "MozMarginInlineEnd", "WebKitMarginInlineEnd", "MSMarginInlineEnd", "OMarginInlineEnd", "marginInlineStart", "MozMarginInlineStart", "WebKitMarginInlineStart", "MSMarginInlineStart", "OMarginInlineStart", "marginLeft", "MozMarginLeft", "WebKitMarginLeft", "MSMarginLeft", "OMarginLeft", "marginRight", "MozMarginRight", "WebKitMarginRight", "MSMarginRight", "OMarginRight", "marginTop", "MozMarginTop", "WebKitMarginTop", "MSMarginTop", "OMarginTop", "mask", "MozMask", "WebKitMask", "MSMask", "OMask", "maskClip", "MozMaskClip", "WebKitMaskClip", "MSMaskClip", "OMaskClip", "maskComposite", "MozMaskComposite", "WebKitMaskComposite", "MSMaskComposite", "OMaskComposite", "maskImage", "MozMaskImage", "WebKitMaskImage", "MSMaskImage", "OMaskImage", "maskMode", "MozMaskMode", "WebKitMaskMode", "MSMaskMode", "OMaskMode", "maskOrigin", "MozMaskOrigin", "WebKitMaskOrigin", "MSMaskOrigin", "OMaskOrigin", "maskPosition", "MozMaskPosition", "WebKitMaskPosition", "MSMaskPosition", "OMaskPosition", "maskRepeat", "MozMaskRepeat", "WebKitMaskRepeat", "MSMaskRepeat", "OMaskRepeat", "maskSize", "MozMaskSize", "WebKitMaskSize", "MSMaskSize", "OMaskSize", "maskType", "MozMaskType", "WebKitMaskType", "MSMaskType", "OMaskType", "maxBlockSize", "MozMaxBlockSize", "WebKitMaxBlockSize", "MSMaxBlockSize", "OMaxBlockSize", "maxHeight", "MozMaxHeight", "WebKitMaxHeight", "MSMaxHeight", "OMaxHeight", "maxInlineSize", "MozMaxInlineSize", "WebKitMaxInlineSize", "MSMaxInlineSize", "OMaxInlineSize", "maxWidth", "MozMaxWidth", "WebKitMaxWidth", "MSMaxWidth", "OMaxWidth", "minBlockSize", "MozMinBlockSize", "WebKitMinBlockSize", "MSMinBlockSize", "OMinBlockSize", "minHeight", "MozMinHeight", "WebKitMinHeight", "MSMinHeight", "OMinHeight", "minInlineSize", "MozMinInlineSize", "WebKitMinInlineSize", "MSMinInlineSize", "OMinInlineSize", "minWidth", "MozMinWidth", "WebKitMinWidth", "MSMinWidth", "OMinWidth", "mixBlendMode", "MozMixBlendMode", "WebKitMixBlendMode", "MSMixBlendMode", "OMixBlendMode", "mm", "MozMm", "WebKitMm", "MSMm", "OMm", "ms", "MozMs", "WebKitMs", "MSMs", "OMs", "objectFit", "MozObjectFit", "WebKitObjectFit", "MSObjectFit", "OObjectFit", "objectPosition", "MozObjectPosition", "WebKitObjectPosition", "MSObjectPosition", "OObjectPosition", "offsetBlockEnd", "MozOffsetBlockEnd", "WebKitOffsetBlockEnd", "MSOffsetBlockEnd", "OOffsetBlockEnd", "offsetBlockStart", "MozOffsetBlockStart", "WebKitOffsetBlockStart", "MSOffsetBlockStart", "OOffsetBlockStart", "offsetInlineEnd", "MozOffsetInlineEnd", "WebKitOffsetInlineEnd", "MSOffsetInlineEnd", "OOffsetInlineEnd", "offsetInlineStart", "MozOffsetInlineStart", "WebKitOffsetInlineStart", "MSOffsetInlineStart", "OOffsetInlineStart", "opacity", "MozOpacity", "WebKitOpacity", "MSOpacity", "OOpacity", "order", "MozOrder", "WebKitOrder", "MSOrder", "OOrder", "orphans", "MozOrphans", "WebKitOrphans", "MSOrphans", "OOrphans", "outline", "MozOutline", "WebKitOutline", "MSOutline", "OOutline", "outlineColor", "MozOutlineColor", "WebKitOutlineColor", "MSOutlineColor", "OOutlineColor", "outlineOffset", "MozOutlineOffset", "WebKitOutlineOffset", "MSOutlineOffset", "OOutlineOffset", "outlineStyle", "MozOutlineStyle", "WebKitOutlineStyle", "MSOutlineStyle", "OOutlineStyle", "outlineWidth", "MozOutlineWidth", "WebKitOutlineWidth", "MSOutlineWidth", "OOutlineWidth", "overflow", "MozOverflow", "WebKitOverflow", "MSOverflow", "OOverflow", "overflowWrap", "MozOverflowWrap", "WebKitOverflowWrap", "MSOverflowWrap", "OOverflowWrap", "overflowX", "MozOverflowX", "WebKitOverflowX", "MSOverflowX", "OOverflowX", "overflowY", "MozOverflowY", "WebKitOverflowY", "MSOverflowY", "OOverflowY", "padding", "MozPadding", "WebKitPadding", "MSPadding", "OPadding", "paddingBlockEnd", "MozPaddingBlockEnd", "WebKitPaddingBlockEnd", "MSPaddingBlockEnd", "OPaddingBlockEnd", "paddingBlockStart", "MozPaddingBlockStart", "WebKitPaddingBlockStart", "MSPaddingBlockStart", "OPaddingBlockStart", "paddingBottom", "MozPaddingBottom", "WebKitPaddingBottom", "MSPaddingBottom", "OPaddingBottom", "paddingInlineEnd", "MozPaddingInlineEnd", "WebKitPaddingInlineEnd", "MSPaddingInlineEnd", "OPaddingInlineEnd", "paddingInlineStart", "MozPaddingInlineStart", "WebKitPaddingInlineStart", "MSPaddingInlineStart", "OPaddingInlineStart", "paddingLeft", "MozPaddingLeft", "WebKitPaddingLeft", "MSPaddingLeft", "OPaddingLeft", "paddingRight", "MozPaddingRight", "WebKitPaddingRight", "MSPaddingRight", "OPaddingRight", "paddingTop", "MozPaddingTop", "WebKitPaddingTop", "MSPaddingTop", "OPaddingTop", "pageBreakAfter", "MozPageBreakAfter", "WebKitPageBreakAfter", "MSPageBreakAfter", "OPageBreakAfter", "pageBreakBefore", "MozPageBreakBefore", "WebKitPageBreakBefore", "MSPageBreakBefore", "OPageBreakBefore", "pageBreakInside", "MozPageBreakInside", "WebKitPageBreakInside", "MSPageBreakInside", "OPageBreakInside", "pc", "MozPc", "WebKitPc", "MSPc", "OPc", "perspective", "MozPerspective", "WebKitPerspective", "MSPerspective", "OPerspective", "perspectiveOrigin", "MozPerspectiveOrigin", "WebKitPerspectiveOrigin", "MSPerspectiveOrigin", "OPerspectiveOrigin", "pointerEvents", "MozPointerEvents", "WebKitPointerEvents", "MSPointerEvents", "OPointerEvents", "position", "MozPosition", "WebKitPosition", "MSPosition", "OPosition", "pt", "MozPt", "WebKitPt", "MSPt", "OPt", "px", "MozPx", "WebKitPx", "MSPx", "OPx", "q", "MozQ", "WebKitQ", "MSQ", "OQ", "quotes", "MozQuotes", "WebKitQuotes", "MSQuotes", "OQuotes", "rad", "MozRad", "WebKitRad", "MSRad", "ORad", "rem", "MozRem", "WebKitRem", "MSRem", "ORem", "resize", "MozResize", "WebKitResize", "MSResize", "OResize", "revert", "MozRevert", "WebKitRevert", "MSRevert", "ORevert", "right", "MozRight", "WebKitRight", "MSRight", "ORight", "rubyAlign", "MozRubyAlign", "WebKitRubyAlign", "MSRubyAlign", "ORubyAlign", "rubyMerge", "MozRubyMerge", "WebKitRubyMerge", "MSRubyMerge", "ORubyMerge", "rubyPosition", "MozRubyPosition", "WebKitRubyPosition", "MSRubyPosition", "ORubyPosition", "s", "MozS", "WebKitS", "MSS", "OS", "scrollBehavior", "MozScrollBehavior", "WebKitScrollBehavior", "MSScrollBehavior", "OScrollBehavior", "scrollSnapCoordinate", "MozScrollSnapCoordinate", "WebKitScrollSnapCoordinate", "MSScrollSnapCoordinate", "OScrollSnapCoordinate", "scrollSnapDestination", "MozScrollSnapDestination", "WebKitScrollSnapDestination", "MSScrollSnapDestination", "OScrollSnapDestination", "scrollSnapType", "MozScrollSnapType", "WebKitScrollSnapType", "MSScrollSnapType", "OScrollSnapType", "shapeImageThreshold", "MozShapeImageThreshold", "WebKitShapeImageThreshold", "MSShapeImageThreshold", "OShapeImageThreshold", "shapeMargin", "MozShapeMargin", "WebKitShapeMargin", "MSShapeMargin", "OShapeMargin", "shapeOutside", "MozShapeOutside", "WebKitShapeOutside", "MSShapeOutside", "OShapeOutside", "tabSize", "MozTabSize", "WebKitTabSize", "MSTabSize", "OTabSize", "tableLayout", "MozTableLayout", "WebKitTableLayout", "MSTableLayout", "OTableLayout", "textAlign", "MozTextAlign", "WebKitTextAlign", "MSTextAlign", "OTextAlign", "textAlignLast", "MozTextAlignLast", "WebKitTextAlignLast", "MSTextAlignLast", "OTextAlignLast", "textCombineUpright", "MozTextCombineUpright", "WebKitTextCombineUpright", "MSTextCombineUpright", "OTextCombineUpright", "textDecoration", "MozTextDecoration", "WebKitTextDecoration", "MSTextDecoration", "OTextDecoration", "textDecorationColor", "MozTextDecorationColor", "WebKitTextDecorationColor", "MSTextDecorationColor", "OTextDecorationColor", "textDecorationLine", "MozTextDecorationLine", "WebKitTextDecorationLine", "MSTextDecorationLine", "OTextDecorationLine", "textDecorationStyle", "MozTextDecorationStyle", "WebKitTextDecorationStyle", "MSTextDecorationStyle", "OTextDecorationStyle", "textEmphasis", "MozTextEmphasis", "WebKitTextEmphasis", "MSTextEmphasis", "OTextEmphasis", "textEmphasisColor", "MozTextEmphasisColor", "WebKitTextEmphasisColor", "MSTextEmphasisColor", "OTextEmphasisColor", "textEmphasisPosition", "MozTextEmphasisPosition", "WebKitTextEmphasisPosition", "MSTextEmphasisPosition", "OTextEmphasisPosition", "textEmphasisStyle", "MozTextEmphasisStyle", "WebKitTextEmphasisStyle", "MSTextEmphasisStyle", "OTextEmphasisStyle", "textIndent", "MozTextIndent", "WebKitTextIndent", "MSTextIndent", "OTextIndent", "textOrientation", "MozTextOrientation", "WebKitTextOrientation", "MSTextOrientation", "OTextOrientation", "textOverflow", "MozTextOverflow", "WebKitTextOverflow", "MSTextOverflow", "OTextOverflow", "textRendering", "MozTextRendering", "WebKitTextRendering", "MSTextRendering", "OTextRendering", "textShadow", "MozTextShadow", "WebKitTextShadow", "MSTextShadow", "OTextShadow", "textTransform", "MozTextTransform", "WebKitTextTransform", "MSTextTransform", "OTextTransform", "textUnderlinePosition", "MozTextUnderlinePosition", "WebKitTextUnderlinePosition", "MSTextUnderlinePosition", "OTextUnderlinePosition", "top", "MozTop", "WebKitTop", "MSTop", "OTop", "touchAction", "MozTouchAction", "WebKitTouchAction", "MSTouchAction", "OTouchAction", "transform", "MozTransform", "WebKitTransform", "MSTransform", "OTransform", "transformBox", "MozTransformBox", "WebKitTransformBox", "MSTransformBox", "OTransformBox", "transformOrigin", "MozTransformOrigin", "WebKitTransformOrigin", "MSTransformOrigin", "OTransformOrigin", "transformStyle", "MozTransformStyle", "WebKitTransformStyle", "MSTransformStyle", "OTransformStyle", "transition", "MozTransition", "WebKitTransition", "MSTransition", "OTransition", "transitionDelay", "MozTransitionDelay", "WebKitTransitionDelay", "MSTransitionDelay", "OTransitionDelay", "transitionDuration", "MozTransitionDuration", "WebKitTransitionDuration", "MSTransitionDuration", "OTransitionDuration", "transitionProperty", "MozTransitionProperty", "WebKitTransitionProperty", "MSTransitionProperty", "OTransitionProperty", "transitionTimingFunction", "MozTransitionTimingFunction", "WebKitTransitionTimingFunction", "MSTransitionTimingFunction", "OTransitionTimingFunction", "turn", "MozTurn", "WebKitTurn", "MSTurn", "OTurn", "unicodeBidi", "MozUnicodeBidi", "WebKitUnicodeBidi", "MSUnicodeBidi", "OUnicodeBidi", "unset", "MozUnset", "WebKitUnset", "MSUnset", "OUnset", "verticalAlign", "MozVerticalAlign", "WebKitVerticalAlign", "MSVerticalAlign", "OVerticalAlign", "vh", "MozVh", "WebKitVh", "MSVh", "OVh", "visibility", "MozVisibility", "WebKitVisibility", "MSVisibility", "OVisibility", "vmax", "MozVmax", "WebKitVmax", "MSVmax", "OVmax", "vmin", "MozVmin", "WebKitVmin", "MSVmin", "OVmin", "vw", "MozVw", "WebKitVw", "MSVw", "OVw", "whiteSpace", "MozWhiteSpace", "WebKitWhiteSpace", "MSWhiteSpace", "OWhiteSpace", "widows", "MozWidows", "WebKitWidows", "MSWidows", "OWidows", "width", "MozWidth", "WebKitWidth", "MSWidth", "OWidth", "willChange", "MozWillChange", "WebKitWillChange", "MSWillChange", "OWillChange", "wordBreak", "MozWordBreak", "WebKitWordBreak", "MSWordBreak", "OWordBreak", "wordSpacing", "MozWordSpacing", "WebKitWordSpacing", "MSWordSpacing", "OWordSpacing", "wordWrap", "MozWordWrap", "WebKitWordWrap", "MSWordWrap", "OWordWrap", "writingMode", "MozWritingMode", "WebKitWritingMode", "MSWritingMode", "OWritingMode", "zIndex", "MozZIndex", "WebKitZIndex", "MSZIndex", "OZIndex", "fontSize", "MozFontSize", "WebKitFontSize", "MSFontSize", "OFontSize"];

},{}],41:[function(require,module,exports){
'use strict';

var properties = require('./css-properties.js');
var React = require('diffhtml-react-compat');

module.exports = function (props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function (styleKey) {
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function (props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = React.PropTypes.oneOfType([React.PropTypes.arrayOf(module.exports), module.exports]);

},{"./css-properties.js":40,"diffhtml-react-compat":42}],42:[function(require,module,exports){
(function (global){
"use strict";

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof3(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.React = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (_dereq_, module, exports) {
      (function (process) {
        'use strict';

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var _require = _dereq_('diffhtml'),
            createTree = _require.createTree,
            innerHTML = _require.innerHTML,
            outerHTML = _require.outerHTML;

        var assign = Object.assign,
            freeze = Object.freeze;

        exports.createElement = function () {
          var tree = createTree.apply(undefined, arguments);

          tree.$$typeof = Symbol.for('react.element');

          var attributes = Object.keys(tree.attributes);

          if (attributes.includes('className')) {
            tree.attributes.class = tree.attributes.className;
          }

          attributes.forEach(function (name) {
            if (name.indexOf('on') === 0) {
              tree.attributes[name.toLowerCase()] = tree.attributes[name];
            }
          });

          return tree;
        };

        exports.Component = function () {
          function Component(props) {
            var _this = this;

            _classCallCheck(this, Component);

            var constructor = this.constructor;
            var _constructor$defaultP = constructor.defaultProps,
                defaultProps = _constructor$defaultP === undefined ? {} : _constructor$defaultP,
                _constructor$propType = constructor.propTypes,
                propTypes = _constructor$propType === undefined ? {} : _constructor$propType;

            this.props = assign({}, props);
            this.state = {};

            if (process.env.NODE_ENV !== 'production') {
              Object.keys(defaultProps).forEach(function (prop) {
                if (_this.props[prop] === undefined) {
                  _this.props[prop] = defaultProps[prop];
                }
              });

              Object.keys(propTypes).forEach(function (prop) {
                var err = propTypes[prop](_this.props, prop, constructor.name, 'prop');
                if (err) {
                  throw err;
                }
              });
            }
          }

          _createClass(Component, [{
            key: 'setState',
            value: function setState(newState) {
              this.state = freeze(assign({}, this.state, newState));

              if (this.shouldComponentUpdate()) {
                innerHTML(this.domNode.parentNode, this.render(this.props, this.state));
              }
            }
          }, {
            key: 'shouldComponentUpdate',
            value: function shouldComponentUpdate() {
              return true;
            }
          }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {}
          }]);

          return Component;
        }();
        exports.PropTypes = _dereq_('proptypes');
        exports.render = function (component, mount) {
          return innerHTML(mount, component);
        };
      }).call(this, _dereq_('_process'));
    }, { "_process": 2, "diffhtml": 4, "proptypes": 3 }], 2: [function (_dereq_, module, exports) {
      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;

      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };

      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };
    }, {}], 3: [function (_dereq_, module, exports) {
      (function (global, factory) {
        if (typeof define === 'function' && define.amd) {
          define('PropTypes', ['exports', 'module'], factory);
        } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
          factory(exports, module);
        } else {
          var mod = {
            exports: {}
          };
          factory(mod.exports, mod);
          global.PropTypes = mod.exports;
        }
      })(this, function (exports, module) {

        'use strict';

        var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

        var ReactElement = {};

        ReactElement.isValidElement = function (object) {
          return (typeof object === "undefined" ? "undefined" : _typeof3(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        };

        var ReactPropTypeLocationNames = {
          prop: 'prop',
          context: 'context',
          childContext: 'child context'
        };

        var emptyFunction = {
          thatReturns: function thatReturns(what) {
            return function () {
              return what;
            };
          }
        };

        var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === 'function') {
            return iteratorFn;
          }
        }

        var ANONYMOUS = '<<anonymous>>';

        var ReactPropTypes = {
          array: createPrimitiveTypeChecker('array'),
          bool: createPrimitiveTypeChecker('boolean'),
          func: createPrimitiveTypeChecker('function'),
          number: createPrimitiveTypeChecker('number'),
          object: createPrimitiveTypeChecker('object'),
          string: createPrimitiveTypeChecker('string'),

          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker
        };

        function createChainableTypeChecker(validate) {
          function checkType(isRequired, props, propName, componentName, location, propFullName) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (props[propName] == null) {
              var locationName = ReactPropTypeLocationNames[location];
              if (isRequired) {
                return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }

          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);

          return chainedCheckType;
        }

        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var locationName = ReactPropTypeLocationNames[location];

              var preciseType = getPreciseType(propValue);

              return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunction.thatReturns(null));
        }

        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var locationName = ReactPropTypeLocationNames[location];
              var propType = getPropType(propValue);
              return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!ReactElement.isValidElement(props[propName])) {
              var locationName = ReactPropTypeLocationNames[location];
              return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var locationName = ReactPropTypeLocationNames[location];
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            return createChainableTypeChecker(function () {
              return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
            });
          }

          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (propValue === expectedValues[i]) {
                return null;
              }
            }

            var locationName = ReactPropTypeLocationNames[location];
            var valuesString = JSON.stringify(expectedValues);
            return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
          }
          return createChainableTypeChecker(validate);
        }

        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
              var locationName = ReactPropTypeLocationNames[location];
              return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
            }
            for (var key in propValue) {
              if (propValue.hasOwnProperty(key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            return createChainableTypeChecker(function () {
              return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
            });
          }

          function validate(props, propName, componentName, location, propFullName) {
            for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
              var checker = arrayOfTypeCheckers[i];
              if (checker(props, propName, componentName, location, propFullName) == null) {
                return null;
              }
            }

            var locationName = ReactPropTypeLocationNames[location];
            return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
          }
          return createChainableTypeChecker(validate);
        }

        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              var locationName = ReactPropTypeLocationNames[location];
              return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== 'object') {
              var locationName = ReactPropTypeLocationNames[location];
              return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (!checker) {
                continue;
              }
              var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }

        function isNode(propValue) {
          switch (typeof propValue === "undefined" ? "undefined" : _typeof3(propValue)) {
            case 'number':
            case 'string':
            case 'undefined':
              return true;
            case 'boolean':
              return !propValue;
            case 'object':
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || ReactElement.isValidElement(propValue)) {
                return true;
              }

              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }

              return true;
            default:
              return false;
          }
        }

        function getPropType(propValue) {
          var propType = typeof propValue === "undefined" ? "undefined" : _typeof3(propValue);
          if (Array.isArray(propValue)) {
            return 'array';
          }
          if (propValue instanceof RegExp) {
            return 'object';
          }
          return propType;
        }

        function getPreciseType(propValue) {
          var propType = getPropType(propValue);
          if (propType === 'object') {
            if (propValue instanceof Date) {
              return 'date';
            } else if (propValue instanceof RegExp) {
              return 'regexp';
            }
          }
          return propType;
        }

        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }

        module.exports = ReactPropTypes;
      });
    }, {}], 4: [function (_dereq_, module, exports) {
      (function (global) {
        "use strict";

        var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
          return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
        } : function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
        };

        (function (f) {
          if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
            module.exports = f();
          } else if (typeof define === "function" && define.amd) {
            define([], f);
          } else {
            var g;if (typeof window !== "undefined") {
              g = window;
            } else if (typeof global !== "undefined") {
              g = global;
            } else if (typeof self !== "undefined") {
              g = self;
            } else {
              g = this;
            }g.diff = f();
          }
        })(function () {
          var define, module, exports;return function e(t, n, r) {
            function s(o, u) {
              if (!n[o]) {
                if (!t[o]) {
                  var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                  var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
              }return n[o].exports;
            }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
              s(r[o]);
            }return s;
          }({ 1: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              };

              var _tree = _dereq_('./tree');

              var _util = _dereq_('./util');

              var isAttributeEx = /(=|"|')[^><]*?$/;
              var isTagEx = /(<|\/)/;
              var TOKEN = '__DIFFHTML__';

              /**
               * Get the next value from the list. If the next value is a string, make sure
               * it is escaped.
               *
               * @param {Array} values - Values extracted from tagged template literal
               * @return {String|*} - Escaped string, otherwise any value passed
               */
              var nextValue = function nextValue(values) {
                var value = values.shift();
                return typeof value === 'string' ? (0, _util.escape)(value) : value;
              };

              function handleTaggedTemplate(options, strings) {
                for (var _len = arguments.length, values = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                  values[_key - 2] = arguments[_key];
                }

                // Automatically coerce a string literal to array.
                if (typeof strings === 'string') {
                  strings = [strings];
                }

                // Do not attempt to parse empty strings.
                if (!strings[0].length && !values.length) {
                  return null;
                }

                // Parse only the text, no dynamic bits.
                if (strings.length === 1 && !values.length) {
                  var _childNodes = (0, _util.parse)(strings[0]).childNodes;
                  return _childNodes.length > 1 ? _childNodes : _childNodes[0];
                }

                // Used to store markup and tokens.
                var retVal = '';

                // We filter the supplemental values by where they are used. Values are
                // either, children, or tags (for components).
                var supplemental = {
                  attributes: [],
                  children: [],
                  tags: []
                };

                // Loop over the static strings, each break correlates to an interpolated
                // value. Since these values can be dynamic, we cannot pass them to the
                // diffHTML HTML parser inline. They are passed as an additional argument
                // called supplemental. The following loop instruments the markup with tokens
                // that the parser then uses to assemble the correct tree.
                strings.forEach(function (string, i) {
                  // Always add the string, we need it to parse the markup later.
                  retVal += string;

                  // If there are values, figure out where in the markup they were injected.
                  // This is most likely incomplete code, and will need to be improved in the
                  // future with robust testing.
                  if (values.length) {
                    var value = nextValue(values);
                    var lastSegment = string.split(' ').pop();
                    var lastCharacter = lastSegment.trim().slice(-1);
                    var isAttribute = Boolean(retVal.match(isAttributeEx));
                    var isTag = Boolean(lastCharacter.match(isTagEx));

                    // Injected as attribute.
                    if (isAttribute) {
                      supplemental.attributes.push(value);
                      retVal += TOKEN;
                    }
                    // Injected as tag.
                    else if (isTag && typeof value !== 'string') {
                        supplemental.tags.push(value);
                        retVal += TOKEN;
                      }
                      // Injected as a child node.
                      else if (Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                          supplemental.children.push((0, _tree.createTree)(value));
                          retVal += TOKEN;
                        }
                        // Injected as something else in the markup or undefined.
                        else if (value !== null && value !== undefined) {
                            retVal += (0, _util.decodeEntities)(value);
                          }
                  }
                });

                // Parse the instrumented markup to get the Virtual Tree.
                var childNodes = (0, _util.parse)(retVal, supplemental, options).childNodes;

                // This makes it easier to work with a single element as a root, opposed to
                // always returning an array.
                return childNodes.length === 1 ? childNodes[0] : childNodes;
              }

              // Loose mode (default)
              var html = function html() {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                return handleTaggedTemplate.apply(undefined, [{}].concat(args));
              };

              // Strict mode (optional enforcing closing tags)
              html.strict = function () {
                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                  args[_key3] = arguments[_key3];
                }

                return handleTaggedTemplate.apply(undefined, [{ strict: true }].concat(args));
              };

              exports.default = html;
            }, { "./tree": 17, "./util": 23 }], 2: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.use = exports.createTree = exports.release = exports.html = exports.removeTransitionState = exports.addTransitionState = undefined;

              var _transition = _dereq_('./transition');

              Object.defineProperty(exports, 'addTransitionState', {
                enumerable: true,
                get: function get() {
                  return _transition.addTransitionState;
                }
              });
              Object.defineProperty(exports, 'removeTransitionState', {
                enumerable: true,
                get: function get() {
                  return _transition.removeTransitionState;
                }
              });

              var _html = _dereq_('./html');

              Object.defineProperty(exports, 'html', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_html).default;
                }
              });

              var _release = _dereq_('./release');

              Object.defineProperty(exports, 'release', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_release).default;
                }
              });

              var _create = _dereq_('./tree/create');

              Object.defineProperty(exports, 'createTree', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_create).default;
                }
              });

              var _use = _dereq_('./use');

              Object.defineProperty(exports, 'use', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_use).default;
                }
              });
              exports.outerHTML = outerHTML;
              exports.innerHTML = innerHTML;

              var _transaction = _dereq_('./transaction');

              var _transaction2 = _interopRequireDefault(_transaction);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              /**
               * Used to diff the outerHTML contents of the passed element with the markup
               * contents. Very useful for applying a global diff on the
               * `document.documentElement`.
               *
               * @example
               *
               *    import { outerHTML } from 'diffhtml';
               *
               *    // Remove all attributes and set the children to be a single text node
               *    // containing the text 'Hello world',
               *    outerHTML(document.body, '<body>Hello world</body>');
               *
               *
               * @param {Object} element - A DOM Node to render into
               * @param {String|Object} markup='' - A string of markup or virtual tree
               * @param {Object =} options={} - An object containing configuration options
               */
              function outerHTML(element) {
                var markup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                options.inner = false;
                return _transaction2.default.create(element, markup, options).start();
              }

              /**
               * Used to diff the innerHTML contents of the passed element with the markup
               * contents. This is useful with libraries like Backbone that render Views
               * into element container.
               *
               * @example
               *
               *    import { innerHTML } from 'diffhtml';
               *
               *    // Sets the body children to be a single text node containing the text
               *    // 'Hello world'.
               *    innerHTML(document.body, 'Hello world');
               *
               *
               * @param {Object} element - A DOM Node to render into
               * @param {String|Object} markup='' - A string of markup or virtual tree
               * @param {Object =} options={} - An object containing configuration options
               */
              function innerHTML(element) {
                var markup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                options.inner = true;
                return _transaction2.default.create(element, markup, options).start();
              }
            }, { "./html": 1, "./release": 6, "./transaction": 14, "./transition": 15, "./tree/create": 16, "./use": 19 }], 3: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _make = _dereq_('./make');

              Object.defineProperty(exports, 'makeNode', {
                enumerable: true,
                get: function get() {
                  return _make.makeNode;
                }
              });

              var _patch = _dereq_('./patch');

              Object.defineProperty(exports, 'patchNode', {
                enumerable: true,
                get: function get() {
                  return _patch.patchNode;
                }
              });
            }, { "./make": 4, "./patch": 5 }], 4: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              };

              exports.makeNode = makeNode;

              var _util = _dereq_('../util');

              var keys = Object.keys;

              /**
               * Takes in a Virtual Tree Element (VTree) and creates a DOM Node from it.
               * Sets the node into the Node cache. If this VTree already has an
               * associated node, it will reuse that.
               *
               * @param {Object} - A Virtual Tree Element or VTree-like element
               * @return {Object} - A DOM Node matching the vTree
               */

              function makeNode(vTree) {
                if (!vTree) {
                  throw new Error('Missing VTree when trying to create DOM Node');
                }

                // If the DOM Node was already created, reuse the existing node.
                if (_util.NodeCache.has(vTree)) {
                  return _util.NodeCache.get(vTree);
                }

                var nodeName = vTree.nodeName,
                    childNodes = vTree.childNodes,
                    attributes = vTree.attributes,
                    nodeValue = vTree.nodeValue;

                // Will vary based on the properties of the VTree.

                var domNode = null;

                // If we're dealing with a Text Node, we need to use the special DOM method,
                // since createElement does not understand the nodeName '#text'.
                // All other nodes can be created through createElement.
                if (nodeName === '#text') {
                  domNode = document.createTextNode((0, _util.decodeEntities)(nodeValue));
                }
                // Support dynamically creating document fragments.
                else if (nodeName === '#document-fragment') {
                    domNode = document.createDocumentFragment();
                  }
                  // If the nodeName matches any of the known SVG element names, mark it as
                  // SVG. The reason for doing this over detecting if nested in an <svg>
                  // element, is that we do not currently have circular dependencies in the
                  // VTree, by avoiding parentNode, so there is no way to crawl up the parents.
                  else if (_util.elements.indexOf(nodeName) > -1) {
                      domNode = document.createElementNS(_util.namespace, nodeName);
                    }
                    // If not a Text or SVG Node, then create with the standard method.
                    else {
                        domNode = document.createElement(nodeName);
                      }

                // Get an array of all the attribute names.
                var attributeNames = keys(attributes);

                // Copy all the attributes from the vTree into the newly created DOM
                // Node.

                var _loop = function _loop(i) {
                  var name = attributeNames[i];
                  var value = attributes[name];

                  var isString = typeof value === 'string';
                  var isBoolean = typeof value === 'boolean';
                  var isNumber = typeof value === 'number';
                  var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';

                  if (isObject && name === 'style') {
                    Object.keys(value).forEach(function (name) {
                      domNode.style.setProperty(name, value[name]);
                    });
                  }
                  // If not a dynamic type, set as an attribute, since it's a valid
                  // attribute value.
                  else if (name && (isString || isBoolean || isNumber)) {
                      domNode.setAttribute(name, (0, _util.decodeEntities)(value));
                    } else if (name) {
                      // Necessary to track the attribute/prop existence.
                      domNode.setAttribute(name, '');

                      // Since this is a dynamic value it gets set as a property.
                      domNode[name] = value;
                    }
                };

                for (var i = 0; i < attributeNames.length; i++) {
                  _loop(i);
                }

                // Add to the domNodes cache.
                _util.NodeCache.set(vTree, domNode);

                if (_util.ComponentCache.has(vTree)) {
                  _util.ComponentCache.get(vTree).domNode = domNode;
                }

                // Append all the children into the domNode, making sure to run them
                // through this `make` function as well.
                for (var _i = 0; _i < childNodes.length; _i++) {
                  domNode.appendChild(makeNode(childNodes[_i]));
                }

                return domNode;
              }
            }, { "../util": 23 }], 5: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              };

              var _slicedToArray = function () {
                function sliceIterator(arr, i) {
                  var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                      _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                  } catch (err) {
                    _d = true;_e = err;
                  } finally {
                    try {
                      if (!_n && _i["return"]) _i["return"]();
                    } finally {
                      if (_d) throw _e;
                    }
                  }return _arr;
                }return function (arr, i) {
                  if (Array.isArray(arr)) {
                    return arr;
                  } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                  } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  }
                };
              }();

              exports.patchNode = patchNode;

              var _node = _dereq_('../node');

              var _util = _dereq_('../util');

              var blockText = new Set(['script', 'noscript', 'style', 'code', 'template']);

              function patchNode(patches, state) {
                // Apply the set of patches to the Node.
                var promises = [];

                // Loop through all the patches and changesets to apply them.
                for (var i = 0; i < patches.length; i++) {
                  var changeset = patches[i];

                  var INSERT_BEFORE = changeset[0];
                  var REMOVE_CHILD = changeset[1];
                  var REPLACE_CHILD = changeset[2];
                  var NODE_VALUE = changeset[3];
                  var SET_ATTRIBUTE = changeset[4];
                  var REMOVE_ATTRIBUTE = changeset[5];

                  // Insert/append elements.
                  for (var _i = 0; _i < INSERT_BEFORE.length; _i++) {
                    var _INSERT_BEFORE$_i = _slicedToArray(INSERT_BEFORE[_i], 3),
                        vTree = _INSERT_BEFORE$_i[0],
                        childNodes = _INSERT_BEFORE$_i[1],
                        referenceNode = _INSERT_BEFORE$_i[2];

                    var domNode = _util.NodeCache.get(vTree);
                    var fragment = document.createDocumentFragment();

                    for (var _i2 = 0; _i2 < childNodes.length; _i2++) {
                      var newNode = (0, _node.makeNode)(childNodes[_i2]);
                      fragment.appendChild(newNode);

                      if (_util.ComponentCache.has(childNodes[_i2])) {
                        _util.ComponentCache.get(childNodes[_i2]).node = newNode;
                      }
                    }

                    (0, _util.protectVTree)(vTree);
                    domNode.insertBefore(fragment, referenceNode);
                  }

                  // Remove elements.
                  for (var _i3 = 0; _i3 < REMOVE_CHILD.length; _i3++) {
                    var _REMOVE_CHILD$_i = _slicedToArray(REMOVE_CHILD[_i3], 2),
                        vTree = _REMOVE_CHILD$_i[0],
                        childNode = _REMOVE_CHILD$_i[1];

                    var _domNode = _util.NodeCache.get(vTree);

                    if (_util.ComponentCache.has(childNode)) {
                      _util.ComponentCache.get(childNode).componentWillUnmount();
                    }

                    _domNode.removeChild(_util.NodeCache.get(childNode));
                    (0, _util.unprotectVTree)(childNode);
                  }

                  // Replace elements.
                  for (var _i4 = 0; _i4 < REPLACE_CHILD.length; _i4++) {
                    var _REPLACE_CHILD$_i = _slicedToArray(REPLACE_CHILD[_i4], 3),
                        vTree = _REPLACE_CHILD$_i[0],
                        newChildNode = _REPLACE_CHILD$_i[1],
                        oldChildNode = _REPLACE_CHILD$_i[2];

                    var _domNode2 = _util.NodeCache.get(vTree);
                    var oldDomNode = _util.NodeCache.get(oldChildNode);
                    var newDomNode = (0, _node.makeNode)(newChildNode);

                    _domNode2.replaceChild(newDomNode, oldDomNode);
                    (0, _util.protectVTree)(newChildNode);
                    (0, _util.unprotectVTree)(oldChildNode);
                  }

                  // Change nodeValue.
                  for (var _i5 = 0; _i5 < NODE_VALUE.length; _i5++) {
                    var _NODE_VALUE$_i = _slicedToArray(NODE_VALUE[_i5], 2),
                        vTree = _NODE_VALUE$_i[0],
                        nodeValue = _NODE_VALUE$_i[1];

                    var _domNode3 = _util.NodeCache.get(vTree);
                    var parentNode = _domNode3.parentNode;

                    _domNode3.nodeValue = nodeValue;

                    if (parentNode) {
                      var nodeName = parentNode.nodeName;

                      if (blockText.has(nodeName.toLowerCase())) {
                        parentNode.nodeValue = nodeValue;
                      }
                    }
                  }

                  // Set attributes.

                  var _loop = function _loop(_i6) {
                    var _SET_ATTRIBUTE$_i = _slicedToArray(SET_ATTRIBUTE[_i6], 2),
                        vTree = _SET_ATTRIBUTE$_i[0],
                        attributes = _SET_ATTRIBUTE$_i[1];

                    var domNode = _util.NodeCache.get(vTree);

                    var _loop2 = function _loop2(_i9) {
                      var _attributes$_i = _slicedToArray(attributes[_i9], 2),
                          name = _attributes$_i[0],
                          value = _attributes$_i[1];

                      var isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
                      var isFunction = typeof value === 'function';

                      if (isObject && name === 'style') {
                        Object.keys(value).forEach(function (name) {
                          domNode.style.setProperty(name, value[name]);
                        });
                      } else if (!isObject && !isFunction && name) {
                        domNode.setAttribute(name, (0, _util.decodeEntities)(value));
                      } else if (typeof value !== 'string') {
                        // Necessary to track the attribute/prop existence.
                        domNode.setAttribute(name, '');

                        // Since this is a property value it gets set directly on the node.
                        domNode[name] = value;
                      }

                      // Support live updating of the `value` and `checked` attribute.
                      if (name === 'value' || name === 'checked') {
                        domNode[name] = value;
                      }
                    };

                    for (var _i9 = 0; _i9 < attributes.length; _i9++) {
                      _loop2(_i9);
                    }
                  };

                  for (var _i6 = 0; _i6 < SET_ATTRIBUTE.length; _i6++) {
                    _loop(_i6);
                  }

                  // Remove attributes.
                  for (var _i7 = 0; _i7 < REMOVE_ATTRIBUTE.length; _i7++) {
                    var _REMOVE_ATTRIBUTE$_i = _slicedToArray(REMOVE_ATTRIBUTE[_i7], 2),
                        vTree = _REMOVE_ATTRIBUTE$_i[0],
                        _attributes = _REMOVE_ATTRIBUTE$_i[1];

                    var _domNode4 = _util.NodeCache.get(vTree);

                    for (var _i8 = 0; _i8 < _attributes.length; _i8++) {
                      var name = _attributes[_i8];

                      _domNode4.removeAttribute(name);

                      if (name in _domNode4) {
                        _domNode4[name] = undefined;
                      }
                    }
                  }
                }

                return promises;
              }
            }, { "../node": 3, "../util": 23 }], 6: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = release;

              var _util = _dereq_('./util');

              function release(domNode) {
                // Try and find a state object for this DOM Node.
                var state = _util.StateCache.get(domNode);

                // If there is a Virtual Tree element, recycle all objects allocated for it.
                if (state && state.oldTree) {
                  (0, _util.unprotectVTree)(state.oldTree);
                }

                // Remove the DOM Node's state object from the cache.
                _util.StateCache.delete(domNode);

                // Recycle all unprotected objects.
                (0, _util.cleanMemory)();
              }
            }, { "./util": 23 }], 7: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = endAsPromise;
              // End flow, this terminates the transaction and returns a Promise that
              // resolves when completed. If you want to make diffHTML return streams or
              // callbacks replace this function.
              function endAsPromise(transaction) {
                var state = transaction.state,
                    domNode = transaction.domNode,
                    inner = transaction.options.inner,
                    _transaction$promises = transaction.promises,
                    promises = _transaction$promises === undefined ? [] : _transaction$promises;

                // Cache the markup and text for the DOM node to allow for short-circuiting
                // future render transactions.

                state.previousMarkup = domNode[inner ? 'innerHTML' : 'outerHTML'];
                state.previousText = domNode.textContent;

                // Operate synchronously unless opted into a Promise-chain. Doesn't matter
                // if they are actually Promises or not, since they will all resolve
                // eventually with `Promise.all`.
                if (promises.length) {
                  return Promise.all(promises).then(function () {
                    return transaction.end();
                  });
                } else {
                  // Pass off the remaining middleware to allow users to dive into the
                  // transaction completed lifecycle event.
                  return Promise.resolve(transaction.end());
                }
              }
            }, {}], 8: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _schedule = _dereq_('./schedule');

              Object.defineProperty(exports, 'schedule', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_schedule).default;
                }
              });

              var _shouldUpdate = _dereq_('./should-update');

              Object.defineProperty(exports, 'shouldUpdate', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_shouldUpdate).default;
                }
              });

              var _reconcileTrees = _dereq_('./reconcile-trees');

              Object.defineProperty(exports, 'reconcileTrees', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_reconcileTrees).default;
                }
              });

              var _syncTrees = _dereq_('./sync-trees');

              Object.defineProperty(exports, 'syncTrees', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_syncTrees).default;
                }
              });

              var _patchNode = _dereq_('./patch-node');

              Object.defineProperty(exports, 'patchNode', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_patchNode).default;
                }
              });

              var _endAsPromise = _dereq_('./end-as-promise');

              Object.defineProperty(exports, 'endAsPromise', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_endAsPromise).default;
                }
              });

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
            }, { "./end-as-promise": 7, "./patch-node": 9, "./reconcile-trees": 10, "./schedule": 11, "./should-update": 12, "./sync-trees": 13 }], 9: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = patch;

              var _node = _dereq_('../node');

              var Node = _interopRequireWildcard(_node);

              function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                  return obj;
                } else {
                  var newObj = {};if (obj != null) {
                    for (var key in obj) {
                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                  }newObj.default = obj;return newObj;
                }
              }

              /**
               * Processes a set of patches onto a tracked DOM Node.
               *
               * @param {Object} node - DOM Node to process patchs on
               * @param {Array} patches - Contains patch objects
               */
              function patch(transaction) {
                var state = transaction.state,
                    measure = transaction.state.measure,
                    patches = transaction.patches;

                measure('patch node');
                transaction.promises = Node.patchNode(patches, state).filter(Boolean);
                measure('patch node');
              }
            }, { "../node": 3 }], 10: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = reconcileTrees;

              var _util = _dereq_('../util');

              var _tree = _dereq_('../tree');

              var assign = Object.assign,
                  keys = Object.keys;
              var isArray = Array.isArray;

              function reconcileComponents(oldTree, newTree) {
                // Stateful components have a very limited API, designed to be fully
                // implemented by a higher-level abstraction. The only method ever called
                // is `render`. It is up to a higher level abstraction on how to handle the
                // changes.
                for (var i = 0; i < newTree.childNodes.length; i++) {
                  var oldChild = oldTree && oldTree.childNodes[i];
                  var newChild = newTree.childNodes[i];

                  // If incoming tree is a component, flatten down to tree for now.
                  if (newChild && typeof newChild.rawNodeName === 'function') {
                    var oldCtor = oldChild && oldChild.rawNodeName;
                    var newCtor = newChild.rawNodeName;
                    var children = newChild.childNodes;
                    var props = assign({}, newChild.attributes, { children: children });
                    var canNew = newCtor.prototype && newCtor.prototype.render;

                    // If the component has already been initialized, we can reuse it.
                    var oldInstance = oldCtor === newCtor && _util.ComponentCache.get(oldChild);
                    var newInstance = !oldInstance && canNew && new newCtor(props);
                    var instance = oldInstance || newInstance;
                    var renderTree = (0, _tree.createTree)(instance ? instance.render(props) : newCtor(props));

                    // Build a new tree from the render, and use this as the current tree.
                    newTree.childNodes[i] = renderTree;

                    // Cache this new current tree.
                    if (instance) {
                      _util.ComponentCache.set(renderTree, instance);
                    }

                    // Recursively update trees.
                    reconcileComponents(oldChild, renderTree);
                  } else {
                    reconcileComponents(oldChild, newChild);
                  }
                }
              }

              function reconcileTrees(transaction) {
                var state = transaction.state,
                    measure = transaction.state.measure,
                    domNode = transaction.domNode,
                    markup = transaction.markup,
                    options = transaction.options;
                var previousMarkup = state.previousMarkup,
                    previousText = state.previousText;
                var inner = options.inner;

                measure('reconcile trees');

                // This looks for changes in the DOM from what we'd expect. This means we
                // need to rebuild the old Virtual Tree. This allows for keeping our tree
                // in sync with unexpected DOM changes. It's not very performant, so
                // ideally you should never change markup that diffHTML affects from
                // outside of diffHTML if performance is a concern.
                var sameInnerHTML = inner ? previousMarkup === domNode.innerHTML : true;
                var sameOuterHTML = inner ? true : previousMarkup === domNode.outerHTML;
                var sameTextContent = previousText === domNode.textContent;

                // We rebuild the tree whenever the DOM Node changes, including the first
                // time we patch a DOM Node.
                if (!sameInnerHTML || !sameOuterHTML || !sameTextContent) {
                  if (state.oldTree) {
                    (0, _util.unprotectVTree)(state.oldTree);
                  }

                  // Set the `oldTree` in the state as-well-as the transaction. This allows
                  // it to persist with the DOM Node and also be easily available to
                  // middleware and transaction tasks.
                  state.oldTree = (0, _tree.createTree)(domNode);

                  // We need to keep these objects around for comparisons.
                  (0, _util.protectVTree)(state.oldTree);
                }

                // Associate the old tree with this brand new transaction.
                transaction.oldTree = state.oldTree;

                // We need to ensure that our target to diff is a Virtual Tree Element. This
                // function takes in whatever `markup` is and normalizes to a tree object.
                // The callback function runs on every normalized Node to wrap childNodes
                // in the case of setting innerHTML.

                // This is HTML Markup, so we need to parse it.
                if (typeof markup === 'string') {
                  // If we are dealing with innerHTML, use all the Nodes. If we're dealing
                  // with outerHTML, we can only support diffing against a single element,
                  // so pick the first one.
                  transaction.newTree = (0, _util.parse)(markup, null, options).childNodes;
                }

                // Only create a document fragment for inner nodes if the user didn't already
                // pass an array. If they pass an array, `createTree` will auto convert to
                // a fragment.
                else if (options.inner) {
                    var _transaction$oldTree = transaction.oldTree,
                        nodeName = _transaction$oldTree.nodeName,
                        attributes = _transaction$oldTree.attributes;

                    transaction.newTree = (0, _tree.createTree)(nodeName, attributes, [].concat(markup));
                  }

                  // Everything else gets passed into `createTree` to be figured out.
                  else {
                      transaction.newTree = (0, _tree.createTree)(markup);
                    }

                // Hacky shit to test **Components**.
                reconcileComponents(state.oldTree, transaction.newTree);

                measure('reconcile trees');
              }
            }, { "../tree": 17, "../util": 23 }], 11: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = schedule;

              var _caches = _dereq_('../util/caches');

              /**
               * If diffHTML is rendering anywhere asynchronously, we need to wait until it
               * completes before this render can be executed. This sets up the next
               * buffer, if necessary, which serves as a Boolean determination later to
               * `bufferSet`.
               *
               * @param {Object} nextTransaction - The Transaction instance to schedule
               * @return {Boolean} - Value used to terminate a transaction render flow
               */
              function schedule(transaction) {
                // The state is a global store which is shared by all like-transactions.
                var state = transaction.state;

                // If there is an in-flight transaction render happening, push this
                // transaction into a queue.

                if (state.isRendering) {
                  state.nextTransaction = transaction;
                  return transaction.abort();
                }

                // Indicate we are now rendering a transaction for this DOM Node.
                state.isRendering = true;
              }
            }, { "../util/caches": 20 }], 12: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = shouldUpdate;
              function shouldUpdate(transaction) {
                var markup = transaction.markup,
                    state = transaction.state,
                    measure = transaction.state.measure;

                measure('should update');

                // If the contents haven't changed, abort the flow. Only support this if
                // the new markup is a string, otherwise it's possible for our object
                // recycling to match twice.
                if (typeof markup === 'string' && state.markup === markup) {
                  return transaction.abort();
                } else if (typeof markup === 'string') {
                  state.markup = markup;
                }

                measure('should update');
              }
            }, {}], 13: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = syncTrees;

              var _tree = _dereq_('../tree');

              var Tree = _interopRequireWildcard(_tree);

              function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                  return obj;
                } else {
                  var newObj = {};if (obj != null) {
                    for (var key in obj) {
                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                  }newObj.default = obj;return newObj;
                }
              }

              function syncTrees(transaction) {
                var _transaction$state = transaction.state,
                    measure = _transaction$state.measure,
                    oldTree = _transaction$state.oldTree,
                    newTree = transaction.newTree;

                measure('sync trees');
                transaction.patches = Tree.syncTree(oldTree, newTree);
                measure('sync trees');
              }
            }, { "../tree": 17 }], 14: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _createClass = function () {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
              }();

              var _util = _dereq_('./util');

              var internals = _interopRequireWildcard(_util);

              var _tasks = _dereq_('./tasks');

              function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                  return obj;
                } else {
                  var newObj = {};if (obj != null) {
                    for (var key in obj) {
                      if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                  }newObj.default = obj;return newObj;
                }
              }

              function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }

              var Transaction = function () {
                _createClass(Transaction, null, [{
                  key: 'create',
                  value: function create(domNode, markup, options) {
                    return new Transaction(domNode, markup, options);
                  }
                }, {
                  key: 'renderNext',
                  value: function renderNext(state) {
                    // Still no next transaction, so can safely return early.
                    if (!state.nextTransaction) {
                      return;
                    }

                    // Create the next transaction.
                    var _state$nextTransactio = state.nextTransaction,
                        domNode = _state$nextTransactio.domNode,
                        markup = _state$nextTransactio.markup,
                        options = _state$nextTransactio.options;

                    state.nextTransaction = undefined;
                    Transaction.create(domNode, markup, options).start();
                  }
                }, {
                  key: 'flow',
                  value: function flow(transaction, tasks) {
                    // Execute each "task" serially, passing the transaction as a baton that
                    // can be used to share state across the tasks.
                    return tasks.reduce(function (retVal, task, index) {
                      // If aborted, don't execute any more tasks.
                      if (transaction.aborted) {
                        return retVal;
                      }

                      // Continue flow, so long as there was no return value, or it matches the
                      // transaction.
                      if (retVal === undefined || retVal === transaction) {
                        return task(transaction);
                      }

                      // The last `returnValue` is what gets sent to the consumer. This
                      // mechanism is crucial for the `abort`, if you want to modify the "flow"
                      // that's fine, but you must ensure that your last task provides a
                      // mechanism to know when the transaction completes. Something like
                      // callbacks or a Promise.
                      return retVal;
                    }, transaction);
                  }
                }, {
                  key: 'assert',
                  value: function assert(transaction) {
                    if (transaction.aborted && transaction.completed) {
                      throw new Error('Transaction was previously aborted');
                    } else if (transaction.completed) {
                      throw new Error('Transaction was previously completed');
                    }
                  }
                }, {
                  key: 'invokeMiddleware',
                  value: function invokeMiddleware(transaction) {
                    var tasks = transaction.tasks;

                    _util.MiddlewareCache.forEach(function (fn) {
                      // Invoke all the middleware passing along this transaction as the only
                      // argument. If they return a value (must be a function) it will be added
                      // to the transaction task flow.
                      var result = fn(transaction);

                      if (result) {
                        tasks.push(result);
                      }
                    });
                  }
                }]);

                function Transaction(domNode, markup, options) {
                  _classCallCheck(this, Transaction);

                  this.domNode = domNode;
                  this.markup = markup;
                  this.options = options;

                  this.state = _util.StateCache.get(domNode) || { measure: _util.measure, internals: internals };

                  this.tasks = options.tasks || [_tasks.schedule, _tasks.shouldUpdate, _tasks.reconcileTrees, _tasks.syncTrees, _tasks.patchNode, _tasks.endAsPromise];

                  // Store calls to trigger after the transaction has ended.
                  this._endedCallbacks = new Set();

                  _util.StateCache.set(domNode, this.state);
                }

                _createClass(Transaction, [{
                  key: 'start',
                  value: function start() {
                    Transaction.assert(this);

                    var domNode = this.domNode,
                        measure = this.state.measure,
                        tasks = this.tasks;

                    var takeLastTask = tasks.pop();

                    // Add middleware in as tasks.
                    Transaction.invokeMiddleware(this);

                    // Shadow DOM rendering...
                    if (domNode && domNode.host) {
                      measure(domNode.host.constructor.name + ' render');
                    } else {
                      measure('render');
                    }

                    // Push back the last task as part of ending the flow.
                    tasks.push(takeLastTask);

                    return Transaction.flow(this, tasks);
                  }

                  // This will immediately call the last flow task and terminate the flow. We
                  // call the last task to ensure that the control flow completes. This should
                  // end psuedo-synchronously. Think `Promise.resolve()`, `callback()`, and
                  // `return someValue` to provide the most accurate performance reading. This
                  // doesn't matter practically besides that.

                }, {
                  key: 'abort',
                  value: function abort() {
                    Transaction.assert(this);

                    var state = this.state;

                    this.aborted = true;

                    // Grab the last task in the flow and return, this task will be responsible
                    // for calling `transaction.end`.
                    return this.tasks[this.tasks.length - 1](this);
                  }
                }, {
                  key: 'end',
                  value: function end() {
                    var _this = this;

                    Transaction.assert(this);

                    var state = this.state,
                        domNode = this.domNode,
                        options = this.options;
                    var measure = state.measure;
                    var inner = options.inner;

                    this.completed = true;

                    var renderScheduled = false;

                    _util.StateCache.forEach(function (cachedState) {
                      if (cachedState.isRendering && cachedState !== state) {
                        renderScheduled = true;
                      }
                    });

                    // Don't attempt to clean memory if in the middle of another render.
                    if (!renderScheduled) {
                      (0, _util.cleanMemory)();
                    }

                    measure('finalize');

                    // Shadow DOM rendering...
                    if (domNode && domNode.host) {
                      measure(domNode.host.constructor.name + ' render');
                    } else {
                      measure('render');
                    }

                    // Trigger all `onceEnded` callbacks, so that middleware can know the
                    // transaction has ended.
                    this._endedCallbacks.forEach(function (callback) {
                      return callback(_this);
                    });
                    this._endedCallbacks.clear();

                    // We are no longer rendering the previous transaction so set the state to
                    // `false`.
                    state.isRendering = false;

                    // Try and render the next transaction if one has been saved.
                    Transaction.renderNext(state);
                  }
                }, {
                  key: 'onceEnded',
                  value: function onceEnded(callback) {
                    this._endedCallbacks.add(callback);
                  }
                }]);

                return Transaction;
              }();

              exports.default = Transaction;
            }, { "./tasks": 8, "./util": 23 }], 15: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.addTransitionState = addTransitionState;
              exports.removeTransitionState = removeTransitionState;

              var _util = _dereq_('./util');

              // Available transition states.
              var stateNames = ['attached', 'detached', 'replaced', 'attributeChanged', 'textChanged'];

              // Sets up the states up so we can add and remove events from the sets.
              stateNames.forEach(function (stateName) {
                return _util.TransitionCache.set(stateName, new Set());
              });

              function addTransitionState(stateName, callback) {
                if (!stateName) {
                  throw new Error('Missing transition state name');
                }

                if (!callback) {
                  throw new Error('Missing transition state callback');
                }

                // Not a valid state name.
                if (stateNames.indexOf(stateName) === -1) {
                  throw new Error('Invalid state name: ' + stateName);
                }

                _util.TransitionCache.get(stateName).add(callback);
              }

              function removeTransitionState(stateName, callback) {
                if (!callback && stateName) {
                  _util.TransitionCache.get(stateName).clear();
                } else if (stateName && callback) {
                  // Not a valid state name.
                  if (stateNames.indexOf(stateName) === -1) {
                    throw new Error('Invalid state name ' + stateName);
                  }

                  _util.TransitionCache.get(stateName).delete(callback);
                } else {
                  for (var _stateName in stateNames) {
                    if (_util.TransitionCache.has(_stateName)) {
                      _util.TransitionCache.get(_stateName).clear();
                    }
                  }
                }
              }
            }, { "./util": 23 }], 16: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
              };

              exports.default = createTree;

              var _util = _dereq_('../util');

              var assign = Object.assign;
              var isArray = Array.isArray;
              function createTree(input, attributes, childNodes) {
                for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                  rest[_key - 3] = arguments[_key];
                }

                var _arguments = arguments;

                if (arguments.length === 1) {
                  if (!input) {
                    return null;
                  }

                  // If the first argument is an array, we assume this is a DOM fragment and
                  // the array are the childNodes.
                  if (isArray(input)) {
                    return createTree('#document-fragment', input.map(function (vTree) {
                      return createTree(vTree);
                    }));
                  }

                  // Crawl an HTML or SVG Element/Text Node etc. for attributes and children.
                  if (typeof Node !== 'undefined' && input instanceof Node) {
                    attributes = {};
                    childNodes = [];

                    // When working with a text node, simply save the nodeValue as the
                    // initial value.
                    if (input.nodeType === 3) {
                      childNodes = input.nodeValue;
                    }
                    // Element types are the only kind of DOM node we care about attributes
                    // from. Shadow DOM, Document Fragments, Text, Comment nodes, etc. can
                    // ignore this.
                    else if (input.nodeType === 1 && input.attributes.length) {
                        attributes = {};

                        for (var i = 0; i < input.attributes.length; i++) {
                          var _input$attributes$i = input.attributes[i],
                              name = _input$attributes$i.name,
                              value = _input$attributes$i.value;

                          if (value === '' && name in input) {
                            attributes[name] = input[name];
                            continue;
                          }

                          attributes[name] = value;
                        }
                      }

                    // Get the child nodes from an Element or Fragment/Shadow Root.
                    if (input.nodeType === 1 || input.nodeType === 11) {
                      if (input.childNodes.length) {
                        childNodes = [];

                        for (var _i = 0; _i < input.childNodes.length; _i++) {
                          if (input.childNodes[_i]) {
                            childNodes[_i] = createTree(input.childNodes[_i]);
                          }
                        }
                      }
                    }

                    var vTree = createTree(input.nodeName, attributes, childNodes);
                    _util.NodeCache.set(vTree, input);
                    return vTree;
                  }

                  // Assume any object value is a valid VTree object.
                  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
                    return input;
                  }
                  // Else assume it is text.
                  else {
                      return createTree('#text', input);
                    }
                }

                // Support JSX-style children being passed.
                if (rest.length) {
                  childNodes = [childNodes].concat(rest);
                }

                // Allocate a new VTree from the pool.
                var entry = _util.Pool.get();
                var isTextNode = input === '#text';

                entry.key = '';
                entry.rawNodeName = input;

                if (typeof input === 'function') {
                  entry.nodeName = '#document-fragment';
                } else {
                  entry.nodeName = String(input).toLowerCase();
                }

                if (isTextNode) {
                  var getValue = function getValue(attributes, childNodes) {
                    var nodes = _arguments.length === 2 ? attributes : childNodes;
                    return isArray(nodes) ? nodes.join('') : nodes;
                  };

                  var value = getValue(attributes, childNodes);

                  entry.nodeType = 3;
                  entry.nodeValue = (0, _util.escape)(String(value || ''));
                  entry.attributes = {};
                  entry.childNodes = [];

                  return entry;
                }

                var getChildNodes = function getChildNodes(attributes, childNodes) {
                  var nodes = null;

                  if (isArray(attributes) || (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) !== 'object') {
                    nodes = attributes;
                  } else {
                    nodes = childNodes;
                  }

                  return nodes ? [].concat(nodes).map(function (node) {
                    if (typeof node === 'string') {
                      return createTree('#text', node);
                    }

                    if (node) {
                      return node;
                    }
                  }).filter(Boolean) : [];
                };

                if (input === '#document-fragment') {
                  entry.nodeType = 11;
                } else if (input === '#comment') {
                  entry.nodeType = 8;
                } else {
                  entry.nodeType = 1;
                }

                entry.nodeValue = '';
                entry.childNodes = getChildNodes(attributes, childNodes);
                entry.attributes = {};

                if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object' && !isArray(attributes)) {
                  entry.attributes = attributes;
                }

                // Set the key prop if passed as an attr.
                if (entry.attributes && entry.attributes.key) {
                  entry.key = entry.attributes.key;
                }

                return entry;
              }
            }, { "../util": 23 }], 17: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _create = _dereq_('./create');

              Object.defineProperty(exports, 'createTree', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_create).default;
                }
              });

              var _sync = _dereq_('./sync');

              Object.defineProperty(exports, 'syncTree', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_sync).default;
                }
              });

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
            }, { "./create": 16, "./sync": 18 }], 18: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = syncTree;

              var _util = _dereq_('../util');

              var assign = Object.assign,
                  keys = Object.keys;
              function syncTree(oldTree, newTree) {
                if (!oldTree) {
                  throw new Error('Missing existing tree to sync from');
                }
                if (!newTree) {
                  throw new Error('Missing new tree to sync into');
                }

                // Create new arrays for patches or use existing from a recursive call.
                var patches = arguments[2] || [];

                var changeset = Array(7).fill(null).map(function () {
                  return [];
                });

                var INSERT_BEFORE = changeset[0];
                var REMOVE_CHILD = changeset[1];
                var REPLACE_CHILD = changeset[2];
                var NODE_VALUE = changeset[3];
                var SET_ATTRIBUTE = changeset[4];
                var REMOVE_ATTRIBUTE = changeset[5];

                // Immdiately push the changeset into the patches.
                patches.push(changeset);

                // If the element we're replacing is totally different from the previous
                // replace the entire element, don't bother investigating children. The
                // exception is if the `newTree` is a document fragment / shadow dom.
                if (oldTree.nodeName !== newTree.nodeName && newTree.nodeType !== 11) {
                  // Shallow clone the `newTree` into the `oldTree`. We want to get the same
                  // references/values inside here.
                  assign(oldTree, newTree);
                  REPLACE_ELEMENT.push([oldTree, newTree]);
                  return patches;
                }

                // If these trees are identical references, abort early. This will occur
                // when caching static VTrees.
                if (oldTree === newTree) {
                  return patches;
                }

                var oldChildNodes = oldTree.childNodes;
                var newChildNodes = newTree.childNodes;

                // Determines if any of the elements have a key attribute. If so, then we can
                // safely assume keys are being used here for optimization/transition
                // purposes.

                var hasOldKeys = oldChildNodes.some(function (vTree) {
                  return vTree.key;
                });
                var hasNewKeys = newChildNodes.some(function (vTree) {
                  return vTree.key;
                });
                var oldKeys = new Map();
                var newKeys = new Map();

                // Build up the key caches for each set of children.
                if (hasOldKeys && hasNewKeys) {
                  // Put the old `childNode` VTree's into the key cache for lookup.
                  for (var i = 0; i < oldChildNodes.length; i++) {
                    var vTree = oldChildNodes[i];

                    // Only add references if the key exists, otherwise ignore it. This
                    // allows someone to specify a single key and keep that element around.
                    if (vTree.key) {
                      oldKeys.set(vTree.key, vTree);
                    }
                  }

                  // Put the new `childNode` VTree's into the key cache for lookup.
                  for (var _i = 0; _i < newChildNodes.length; _i++) {
                    var _vTree = newChildNodes[_i];

                    // Only add references if the key exists, otherwise ignore it. This
                    // allows someone to specify a single key and keep that element around.
                    if (_vTree.key) {
                      newKeys.set(_vTree.key, _vTree);
                    }
                  }
                }

                // First check for new elements to add, this is the most common in my
                // experience.
                if (newChildNodes.length > oldChildNodes.length) {
                  // Store elements in a DocumentFragment to increase performance and be
                  // generally simplier to work with.
                  var fragment = [];

                  for (var _i2 = oldChildNodes.length; _i2 < newChildNodes.length; _i2++) {
                    // Internally add to the tree.
                    oldChildNodes.push(newChildNodes[_i2]);

                    // Add to the document fragment.
                    fragment.push(newChildNodes[_i2]);
                  }

                  // Assign the fragment to the patches to be injected.
                  INSERT_BEFORE.push([oldTree, fragment]);
                }

                // Find elements to replace and remove.
                for (var _i3 = 0; _i3 < oldChildNodes.length; _i3++) {
                  var oldChildNode = oldChildNodes[_i3];
                  var newChildNode = newChildNodes[_i3];

                  // If there was no new child to compare to, remove from the childNodes.
                  if (!newChildNode) {
                    REMOVE_CHILD.push([oldTree, oldChildNode]);
                    oldTree.childNodes.splice(_i3, 1);
                    _i3--;
                    continue;
                  }

                  var isOldInNewSet = newKeys.has(oldChildNode.key);
                  var isNewInOldSet = oldKeys.has(newChildNode.key);
                  var keyedNewChildNode = isOldInNewSet && newKeys.get(oldChildNode.key);
                  var keyedOldChildNode = isNewInOldSet && oldKeys.get(newChildNode.key);
                  var hasNoKeys = !hasOldKeys && !hasNewKeys;

                  if (hasNoKeys && oldChildNode.nodeName !== newChildNode.nodeName) {
                    REPLACE_CHILD.push([oldTree, newChildNode, oldChildNode]);
                    oldTree.childNodes.splice(_i3, 1, newChildNode);
                    continue;
                  }

                  // If these elements are already in place, continue to the next.
                  if (oldChildNode === newChildNode) {
                    continue;
                  }
                  // If using `keys` and this node exists in the new set, and is located at
                  // the same index.
                  else if (newChildNodes.indexOf(keyedNewChildNode) === _i3) {
                      syncTree(oldChildNode, newChildNode, patches);
                    }
                    // If not using `keys` but the nodeNames match, sync the trees.
                    else if (oldChildNode.nodeName === newChildNode.nodeName) {
                        // Do not synchronize text nodes.
                        syncTree(oldChildNode, newChildNode, patches);
                      }
                      // Replace the remaining elements, do not traverse further.
                      else {
                          // If we're using keys and we found a matching new node using the old key
                          // we can do a direct replacement.
                          if (keyedNewChildNode) {
                            var newIndex = newChildNodes.indexOf(keyedNewChildNode);
                            var prevTree = oldChildNodes[newIndex];

                            oldChildNodes[_i3] = prevTree;
                            oldChildNodes[newIndex] = oldChildNode;

                            REPLACE_CHILD.push([oldTree, oldChildNode, prevTree]);
                            continue;
                          }

                          // If we're using keys and found a matching old node using the new key
                          // we can do a direct replacement.
                          if (keyedOldChildNode) {
                            // Remove from old position.
                            oldChildNodes.splice(oldChildNodes.indexOf(keyedOldChildNode), 1);

                            var _oldChildNode = oldChildNodes[_i3];

                            // Assign to the new position.
                            oldChildNodes[_i3] = keyedOldChildNode;

                            REPLACE_CHILD.push([oldTree, keyedOldChildNode, _oldChildNode]);
                          }
                        }
                }

                // If both VTrees are text nodes then copy the value over.
                if (oldTree.nodeName === '#text' && newTree.nodeName === '#text') {
                  oldTree.nodeValue = newTree.nodeValue;
                  NODE_VALUE.push([oldTree, (0, _util.decodeEntities)(oldTree.nodeValue)]);
                  return patches;
                }

                // Attributes are significantly easier than elements and we ignore checking
                // them on fragments. The algorithm is the same as elements, check for
                // additions/removals based off length, and then iterate once to make
                // adjustments.
                if (newTree.nodeType === 1) {
                  // Cache the lengths for performance and readability.
                  var oldNames = keys(oldTree.attributes);
                  var newNames = keys(newTree.attributes);
                  var setAttributes = [];
                  var removeAttributes = [];

                  for (var _i4 = 0; _i4 < newNames.length; _i4++) {
                    var name = newNames[_i4];
                    var value = newTree.attributes[name];

                    if (oldNames.indexOf(name) < 0 || oldTree.attributes[name] !== value) {
                      if (name) {
                        oldTree.attributes[name] = value;
                        setAttributes.push([name, value]);
                      }
                    }
                  }

                  for (var _i5 = 0; _i5 < oldNames.length; _i5++) {
                    var _name = oldNames[_i5];

                    if (newNames.indexOf(_name) < 0) {
                      delete oldTree.attributes[_name];
                      removeAttributes.push(_name);
                    }
                  }

                  if (setAttributes.length) {
                    SET_ATTRIBUTE.push([oldTree, setAttributes]);
                  }

                  if (removeAttributes.length) {
                    REMOVE_ATTRIBUTE.push([oldTree, removeAttributes]);
                  }
                }

                var hasChanged = changeset.some(function (record) {
                  return Boolean(record.length);
                });

                // Remove the changeset if nothing changed.
                if (!hasChanged) {
                  patches.splice(patches.indexOf(changeset), 1);
                }

                return patches;
              }
            }, { "../util": 23 }], 19: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = use;

              var _util = _dereq_('./util');

              function use(middleware) {
                if (typeof middleware !== 'function') {
                  throw new Error('Middleware must be a function');
                }

                // Add the function to the set of middlewares.
                _util.MiddlewareCache.add(middleware);

                // The unsubscribe method for the middleware.
                return function () {
                  // Remove this middleware from the internal cache. This will prevent it
                  // from being invoked in the future.
                  _util.MiddlewareCache.delete(middleware);

                  // Call the unsubscribe method if defined in the middleware (allows them
                  // to cleanup).
                  middleware.unsubscribe && middleware.unsubscribe();
                };
              }
            }, { "./util": 23 }], 20: [function (_dereq_, module, exports) {
              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              // Associates DOM Nodes with state objects.
              var StateCache = exports.StateCache = new Map();

              // Associates Virtual Tree Elements with DOM Nodes.
              var NodeCache = exports.NodeCache = new Map();

              // Associates Virtual Tree Elements with Component instances.
              var ComponentCache = exports.ComponentCache = new Map();

              // Caches all middleware. You cannot unset a middleware once it has been added.
              var MiddlewareCache = exports.MiddlewareCache = new Set();

              // Cache transition functions.
              var TransitionCache = exports.TransitionCache = new Map();
            }, {}], 21: [function (_dereq_, module, exports) {
              (function (global) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                  value: true
                });
                exports.default = decodeEntities;
                // Support loading diffHTML in non-browser environments.
                var element = global.document ? document.createElement('div') : null;

                /**
                 * Decodes HTML strings.
                 *
                 * @see http://stackoverflow.com/a/5796718
                 * @param string
                 * @return unescaped HTML
                 */
                function decodeEntities(string) {
                  // If there are no HTML entities, we can safely pass the string through.
                  if (!element || !string || !string.indexOf || string.indexOf('&') === -1) {
                    return string;
                  }

                  element.innerHTML = string;
                  return element.textContent;
                }
              }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
            }, {}], 22: [function (_dereq_, module, exports) {
              "use strict";

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = escape;
              /**
               * Tiny HTML escaping function, useful to protect against things like XSS and
               * unintentionally breaking attributes with quotes.
               *
               * @param {String} unescaped - An HTML value, unescaped
               * @return {String} - An HTML-safe string
               */
              function escape(unescaped) {
                return unescaped.replace(/["&'<>`]/g, function (match) {
                  return "&#" + match.charCodeAt(0) + ";";
                });
              }
            }, {}], 23: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });

              var _caches = _dereq_('./caches');

              Object.defineProperty(exports, 'StateCache', {
                enumerable: true,
                get: function get() {
                  return _caches.StateCache;
                }
              });
              Object.defineProperty(exports, 'NodeCache', {
                enumerable: true,
                get: function get() {
                  return _caches.NodeCache;
                }
              });
              Object.defineProperty(exports, 'ComponentCache', {
                enumerable: true,
                get: function get() {
                  return _caches.ComponentCache;
                }
              });
              Object.defineProperty(exports, 'MiddlewareCache', {
                enumerable: true,
                get: function get() {
                  return _caches.MiddlewareCache;
                }
              });
              Object.defineProperty(exports, 'TransitionCache', {
                enumerable: true,
                get: function get() {
                  return _caches.TransitionCache;
                }
              });

              var _memory = _dereq_('./memory');

              Object.defineProperty(exports, 'protectVTree', {
                enumerable: true,
                get: function get() {
                  return _memory.protectVTree;
                }
              });
              Object.defineProperty(exports, 'unprotectVTree', {
                enumerable: true,
                get: function get() {
                  return _memory.unprotectVTree;
                }
              });
              Object.defineProperty(exports, 'cleanMemory', {
                enumerable: true,
                get: function get() {
                  return _memory.cleanMemory;
                }
              });

              var _svg = _dereq_('./svg');

              Object.defineProperty(exports, 'namespace', {
                enumerable: true,
                get: function get() {
                  return _svg.namespace;
                }
              });
              Object.defineProperty(exports, 'elements', {
                enumerable: true,
                get: function get() {
                  return _svg.elements;
                }
              });

              var _transitions = _dereq_('./transitions');

              Object.defineProperty(exports, 'states', {
                enumerable: true,
                get: function get() {
                  return _transitions.states;
                }
              });
              Object.defineProperty(exports, 'buildTrigger', {
                enumerable: true,
                get: function get() {
                  return _transitions.buildTrigger;
                }
              });
              Object.defineProperty(exports, 'makePromises', {
                enumerable: true,
                get: function get() {
                  return _transitions.makePromises;
                }
              });

              var _decodeEntities = _dereq_('./decode-entities');

              Object.defineProperty(exports, 'decodeEntities', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_decodeEntities).default;
                }
              });

              var _escape = _dereq_('./escape');

              Object.defineProperty(exports, 'escape', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_escape).default;
                }
              });

              var _performance = _dereq_('./performance');

              Object.defineProperty(exports, 'measure', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_performance).default;
                }
              });

              var _pool = _dereq_('./pool');

              Object.defineProperty(exports, 'Pool', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_pool).default;
                }
              });

              var _parser = _dereq_('./parser');

              Object.defineProperty(exports, 'parse', {
                enumerable: true,
                get: function get() {
                  return _interopRequireDefault(_parser).default;
                }
              });

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
            }, { "./caches": 20, "./decode-entities": 21, "./escape": 22, "./memory": 24, "./parser": 25, "./performance": 26, "./pool": 27, "./svg": 28, "./transitions": 29 }], 24: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.protectVTree = protectVTree;
              exports.unprotectVTree = unprotectVTree;
              exports.cleanMemory = cleanMemory;

              var _pool = _dereq_('./pool');

              var _pool2 = _interopRequireDefault(_pool);

              var _caches = _dereq_('./caches');

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              var memory = _pool2.default.memory,
                  protect = _pool2.default.protect,
                  unprotect = _pool2.default.unprotect;

              /**
               * Ensures that an vTree is not recycled during a render cycle.
               *
               * @param vTree
               * @return vTree
               */

              function protectVTree(vTree) {
                protect(vTree);

                for (var i = 0; i < vTree.childNodes.length; i++) {
                  protectVTree(vTree.childNodes[i]);
                }

                return vTree;
              }

              /**
               * Allows an vTree to be recycled during a render cycle.
               *
               * @param vTree
               * @return
               */
              function unprotectVTree(vTree) {
                unprotect(vTree);

                for (var i = 0; i < vTree.childNodes.length; i++) {
                  unprotectVTree(vTree.childNodes[i]);
                }

                _caches.NodeCache.delete(vTree);
                return vTree;
              }

              /**
               * Moves all unprotected allocations back into available pool. This keeps
               * diffHTML in a consistent state after synchronizing.
               */
              function cleanMemory() {
                memory.allocated.forEach(function (vTree) {
                  return memory.free.add(vTree);
                });
                memory.allocated.clear();

                // Clean out unused elements, if we have any elements cached that no longer
                // have a backing VTree, we can safely remove them from the cache.
                _caches.NodeCache.forEach(function (node, descriptor) {
                  if (!memory.protected.has(descriptor)) {
                    _caches.NodeCache.delete(descriptor);
                  }
                });
              }
            }, { "./caches": 20, "./pool": 27 }], 25: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.default = parse;

              var _tree = _dereq_('../tree');

              var _pool = _dereq_('./pool');

              var _pool2 = _interopRequireDefault(_pool);

              var _escape = _dereq_('./escape');

              var _escape2 = _interopRequireDefault(_escape);

              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }

              // This is a very special word in the diffHTML parser. It is the only way it
              // can gain access to dynamic content.
              var TOKEN = '__DIFFHTML__'; // Code based off of:
              // https://github.com/ashi009/node-fast-html-parser

              var hasNonWhitespaceEx = /\S/;
              var doctypeEx = /<!.*>/ig;
              var attrEx = /\b([_a-z][_a-z0-9\-]*)\s*(=\s*("([^"]+)"|'([^']+)'|(\S+)))?/ig;
              var spaceEx = /[^ ]/;

              var assign = Object.assign;

              var blockText = new Set(['script', 'noscript', 'style', 'code', 'template']);

              var selfClosing = new Set(['meta', 'img', 'link', 'input', 'area', 'br', 'hr']);

              var kElementsClosedByOpening = {
                li: { li: true },
                p: { p: true, div: true },
                td: { td: true, th: true },
                th: { td: true, th: true }
              };

              var kElementsClosedByClosing = {
                li: { ul: true, ol: true },
                a: { div: true },
                b: { div: true },
                i: { div: true },
                p: { div: true },
                td: { tr: true, table: true },
                th: { tr: true, table: true }
              };

              /**
               * Interpolate dynamic supplemental values from the tagged template into the
               * tree.
               *
               * @param currentParent
               * @param string
               * @param supplemental
               */
              var interpolateValues = function interpolateValues(currentParent, string, supplemental) {
                if (string && string.indexOf(TOKEN) > -1) {
                  (function () {
                    var childNodes = [];

                    // Break up the incoming string into dynamic parts that are then pushed
                    // into a new set of child nodes.
                    string.split(TOKEN).forEach(function (value, index, array) {
                      // If the first text node has relevant text, put it in, otherwise
                      // discard. This mimicks how the browser works and is generally easier
                      // to work with (when using tagged template tags).
                      if (value && hasNonWhitespaceEx.test(value)) {
                        childNodes.push((0, _tree.createTree)('#text', value));
                      }

                      // If we are in the second iteration, this means the whitespace has been
                      // trimmed and we can pull out dynamic interpolated values. We do not
                      // want to grab a childNode by accident for the last one.
                      if (index !== array.length - 1) {
                        childNodes.push(supplemental.children.shift());
                      }
                    });

                    currentParent.childNodes.push.apply(currentParent.childNodes, childNodes);
                  })();
                } else if (string && string.length && !doctypeEx.exec(string)) {
                  currentParent.childNodes.push((0, _tree.createTree)('#text', string));
                }
              };

              /**
               * HTMLElement, which contains a set of children.
               *
               * Note: this is a minimalist implementation, no complete tree structure
               * provided (no parentNode, nextSibling, previousSibling etc).
               *
               * @param {String} nodeName - DOM Node name
               * @param {Object} rawAttrs - DOM Node Attributes
               * @param {Object} supplemental - Interpolated data from a tagged template
               * @return {Object} vTree
               */
              var HTMLElement = function HTMLElement(nodeName, rawAttrs, supplemental) {
                // Support dynamic tag names like: `<${MyComponent} />`.
                if (nodeName === TOKEN) {
                  return HTMLElement(supplemental.tags.shift(), rawAttrs, supplemental);
                }

                var attributes = {};

                // Migrate raw attributes into the attributes object used by the VTree.

                var _loop = function _loop(match) {
                  var name = match[1];
                  var value = match[6] || match[5] || match[4] || match[1];

                  // If we have multiple interpolated values in an attribute, we must
                  // flatten to a string. There are no other valid options.
                  if (value.indexOf(TOKEN) > -1 && value !== TOKEN) {
                    attributes[name] = '';

                    // Break the attribute down and replace each dynamic interpolation.
                    value.split(TOKEN).forEach(function (part, index, array) {
                      attributes[name] += part;

                      // Only interpolate up to the last element.
                      if (index !== array.length - 1) {
                        attributes[name] += supplemental.attributes.shift();
                      }
                    });
                  } else if (name === TOKEN) {
                    var nameAndValue = supplemental.attributes.shift();

                    if (nameAndValue) {
                      attributes[nameAndValue] = nameAndValue;
                    }
                  } else if (value === TOKEN) {
                    attributes[name] = supplemental.attributes.shift();
                  } else {
                    attributes[name] = value;
                  }

                  // Look for empty attributes.
                  if (match[6] === '""') {
                    attributes[name] = '';
                  }
                };

                for (var match; match = attrEx.exec(rawAttrs || '');) {
                  _loop(match);
                }

                return (0, _tree.createTree)(nodeName, attributes, []);
              };

              /**
               * Parses HTML and returns a root element
               *
               * @param {String} html - String of HTML markup to parse into a Virtual Tree
               * @param {Object} supplemental - Dynamic interpolated data values
               * @param {Object} options - Contains options like silencing warnings
               * @return {Object} - Parsed Virtual Tree Element
               */
              function parse(html, supplemental) {
                var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

                var root = (0, _tree.createTree)('#document-fragment', null, []);
                var stack = [root];
                var currentParent = root;
                var lastTextPos = -1;

                // If there are no HTML elements, treat the passed in html as a single
                // text node.
                if (html.indexOf('<') === -1 && html) {
                  interpolateValues(currentParent, html, supplemental);
                  return root;
                }

                var tagEx = /<!--[^]*?(?=-->)-->|<(\/?)([a-z\-\_][a-z0-9\-\_]*)\s*([^>]*?)(\/?)>/ig;

                // Look through the HTML markup for valid tags.
                for (var match, text; match = tagEx.exec(html);) {
                  if (lastTextPos > -1) {
                    if (lastTextPos + match[0].length < tagEx.lastIndex) {
                      // if has content
                      text = html.slice(lastTextPos, tagEx.lastIndex - match[0].length);

                      interpolateValues(currentParent, text, supplemental);
                    }
                  }

                  var matchOffset = tagEx.lastIndex - match[0].length;

                  if (lastTextPos === -1 && matchOffset > 0) {
                    var string = html.slice(0, matchOffset);

                    if (string && hasNonWhitespaceEx.test(string) && !doctypeEx.exec(string)) {
                      interpolateValues(currentParent, string, supplemental);
                    }
                  }

                  lastTextPos = tagEx.lastIndex;

                  // This is a comment.
                  if (match[0][1] === '!') {
                    continue;
                  }

                  if (!match[1]) {
                    // not </ tags
                    var attrs = {};

                    if (!match[4] && kElementsClosedByOpening[currentParent.rawNodeName]) {
                      if (kElementsClosedByOpening[currentParent.rawNodeName][match[2]]) {
                        stack.pop();
                        currentParent = stack[stack.length - 1];
                      }
                    }

                    currentParent = currentParent.childNodes[currentParent.childNodes.push(HTMLElement(match[2], match[3], supplemental)) - 1];

                    stack.push(currentParent);

                    if (blockText.has(match[2])) {
                      // A little test to find next </script> or </style> ...
                      var closeMarkup = '</' + match[2] + '>';
                      var index = html.indexOf(closeMarkup, tagEx.lastIndex);
                      var length = match[2].length;

                      if (index === -1) {
                        lastTextPos = tagEx.lastIndex = html.length + 1;
                      } else {
                        lastTextPos = index + closeMarkup.length;
                        tagEx.lastIndex = lastTextPos;
                        match[1] = true;
                      }

                      var newText = html.slice(match.index + match[0].length, index);

                      // TODO Determine if a closing tag is present.
                      //if (options.strict) {
                      //  const nodeName = currentParent.rawNodeName;

                      //  // Find a subset of the markup passed in to validate.
                      //  const markup = markup.slice(
                      //    tagEx.lastIndex - match[0].length
                      //  ).split('\n').slice(0, 3);

                      //  console.log(markup);

                      //  // Position the caret next to the first non-whitespace character.
                      //  const caret = Array(spaceEx.exec(markup[0]).index).join(' ') + '^';

                      //  // Craft the warning message and inject it into the markup.
                      //  markup.splice(1, 0, `${caret}
                      //Invali markup. Saw ${match[2]}, expected ${nodeName}
                      //  `);

                      //  // Throw an error message if the markup isn't what we expected.
                      //  throw new Error(`\n\n${markup.join('\n')}`);
                      //}

                      interpolateValues(currentParent, newText.trim(), supplemental);
                    }
                  }

                  if (match[1] || match[4] || selfClosing.has(match[2])) {
                    if (match[2] !== currentParent.rawNodeName && options.strict) {
                      var nodeName = currentParent.rawNodeName;

                      // Find a subset of the markup passed in to validate.
                      var markup = html.slice(tagEx.lastIndex - match[0].length).split('\n').slice(0, 3);

                      // Position the caret next to the first non-whitespace character.
                      var caret = Array(spaceEx.exec(markup[0]).index).join(' ') + '^';

                      // Craft the warning message and inject it into the markup.
                      markup.splice(1, 0, caret + '\nPossibly invalid markup. Saw ' + match[2] + ', expected ' + nodeName + '...\n        ');

                      // Throw an error message if the markup isn't what we expected.
                      throw new Error('\n\n' + markup.join('\n'));
                    }

                    // </ or /> or <br> etc.
                    while (currentParent) {
                      // Self closing dynamic nodeName.
                      if (match[2] === TOKEN && match[4] === '/') {
                        stack.pop();
                        currentParent = stack[stack.length - 1];

                        break;
                      }
                      // Not self-closing, so seek out the next match.
                      else if (match[2] === TOKEN) {
                          var _value = supplemental.tags.shift();

                          if (currentParent.nodeName === _value) {
                            stack.pop();
                            currentParent = stack[stack.length - 1];

                            break;
                          }
                        }

                      if (currentParent.rawNodeName == match[2]) {
                        stack.pop();
                        currentParent = stack[stack.length - 1];

                        break;
                      } else {
                        var tag = kElementsClosedByClosing[currentParent.rawNodeName];

                        // Trying to close current tag, and move on
                        if (tag) {

                          if (tag[match[2]]) {
                            stack.pop();
                            currentParent = stack[stack.length - 1];

                            continue;
                          }
                        }

                        // Use aggressive strategy to handle unmatching markups.
                        break;
                      }
                    }
                  }
                }

                // Find any last remaining text after the parsing completes over tags.
                var remainingText = html.slice(lastTextPos === -1 ? 0 : lastTextPos).trim();

                // Ensure that all values are properly interpolated through the remaining
                // markup after parsing.
                interpolateValues(currentParent, remainingText, supplemental);

                // This is an entire document, so only allow the HTML children to be
                // body or head.
                if (root.childNodes.length && root.childNodes[0].nodeName === 'html') {
                  (function () {
                    // Store elements from before body end and after body end.
                    var head = { before: [], after: [] };
                    var body = { after: [] };
                    var HTML = root.childNodes[0];

                    var beforeHead = true;
                    var beforeBody = true;

                    // Iterate the children and store elements in the proper array for
                    // later concat, replace the current childNodes with this new array.
                    HTML.childNodes = HTML.childNodes.filter(function (el) {
                      // If either body or head, allow as a valid element.
                      if (el.nodeName === 'body' || el.nodeName === 'head') {
                        if (el.nodeName === 'head') beforeHead = false;
                        if (el.nodeName === 'body') beforeBody = false;

                        return true;
                      }
                      // Not a valid nested HTML tag element, move to respective container.
                      else if (el.nodeType === 1) {
                          if (beforeHead && beforeBody) head.before.push(el);else if (!beforeHead && beforeBody) head.after.push(el);else if (!beforeBody) body.after.push(el);
                        }
                    });

                    // Ensure the first element is the HEAD tag.
                    if (!HTML.childNodes[0] || HTML.childNodes[0].nodeName !== 'head') {
                      var headInstance = (0, _tree.createTree)('head', null, []);
                      var existing = headInstance.childNodes;

                      existing.unshift.apply(existing, head.before);
                      existing.push.apply(existing, head.after);
                      HTML.childNodes.unshift(headInstance);
                    } else {
                      var _existing = HTML.childNodes[0].childNodes;

                      _existing.unshift.apply(_existing, head.before);
                      _existing.push.apply(_existing, head.after);
                    }

                    // Ensure the second element is the body tag.
                    if (!HTML.childNodes[1] || HTML.childNodes[1].nodeName !== 'body') {
                      var bodyInstance = (0, _tree.createTree)('body', null, []);
                      var _existing2 = bodyInstance.childNodes;

                      _existing2.push.apply(_existing2, body.after);
                      HTML.childNodes.push(bodyInstance);
                    } else {
                      var _existing3 = HTML.childNodes[1].childNodes;
                      _existing3.push.apply(_existing3, body.after);
                    }
                  })();
                }

                return root;
              }
            }, { "../tree": 17, "./escape": 22, "./pool": 27 }], 26: [function (_dereq_, module, exports) {
              (function (process) {
                'use strict';

                Object.defineProperty(exports, "__esModule", {
                  value: true
                });
                exports.default = measure;
                var marks = exports.marks = new Map();
                var prefix = exports.prefix = 'diffHTML';
                var token = 'diff_perf';

                var hasSearch = typeof location !== 'undefined' && location.search;;
                var hasArguments = typeof process !== 'undefined' && process.argv;
                var wantsSearch = hasSearch && location.search.includes(token);
                var wantsArguments = hasArguments && process.argv.includes(token);

                var wantsPerfChecks = wantsSearch || wantsArguments;

                function measure(name) {
                  if (!wantsPerfChecks) {
                    return;
                  }

                  var endName = name + '-end';

                  if (!marks.has(name)) {
                    marks.set(name, performance.now());
                    performance.mark(name);
                  } else {
                    var totalMs = (performance.now() - marks.get(name)).toFixed(3);

                    marks.delete(name);

                    performance.mark(endName);
                    performance.measure(prefix + ' ' + name + ' (' + totalMs + 'ms)', name, endName);
                  }
                }
              }).call(this, _dereq_('_process'));
            }, { "_process": 30 }], 27: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              // A modest size.
              var size = 10000;

              /**
               * Creates a pool to query new or reused values from.
               *
               * @param name
               * @param opts
               * @return {Object} pool
               */
              var memory = {
                free: new Set(),
                allocated: new Set(),
                protected: new Set()
              };

              // Prime the memory cache with n objects.
              for (var i = 0; i < size; i++) {
                memory.free.add({
                  rawNodeName: '',
                  nodeName: '',
                  nodeValue: '',
                  nodeType: 1,
                  key: '',
                  childNodes: null,
                  attributes: null
                });
              }

              // Cache VTree objects in a pool which is used to get
              exports.default = {
                size: size,
                memory: memory,

                get: function get() {
                  var value = memory.free.values().next().value || fill();
                  memory.free.delete(value);
                  memory.allocated.add(value);
                  return value;
                },
                protect: function protect(value) {
                  memory.allocated.delete(value);
                  memory.protected.add(value);
                },
                unprotect: function unprotect(value) {
                  if (memory.protected.has(value)) {
                    memory.protected.delete(value);
                    memory.free.add(value);
                  }
                }
              };
            }, {}], 28: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              // Namespace.
              var namespace = exports.namespace = 'http://www.w3.org/2000/svg';

              // List of SVG elements.
              var elements = exports.elements = ['altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'set', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tref', 'tspan', 'use', 'view', 'vkern'];
            }, {}], 29: [function (_dereq_, module, exports) {
              'use strict';

              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.buildTrigger = buildTrigger;
              exports.makePromises = makePromises;
              var forEach = Array.prototype.forEach;

              /**
               * Contains arrays to store transition callbacks.
               *
               * attached
               * --------
               *
               * For when elements come into the DOM. The callback triggers immediately after
               * the element enters the DOM. It is called with the element as the only
               * argument.
               *
               * detached
               * --------
               *
               * For when elements are removed from the DOM. The callback triggers just
               * before the element leaves the DOM. It is called with the element as the only
               * argument.
               *
               * replaced
               * --------
               *
               * For when elements are replaced in the DOM. The callback triggers after the
               * new element enters the DOM, and before the old element leaves. It is called
               * with old and new elements as arguments, in that order.
               *
               * attributeChanged
               * ----------------
               *
               * Triggered when an element's attribute has changed. The callback triggers
               * after the attribute has changed in the DOM. It is called with the element,
               * the attribute name, old value, and current value.
               *
               * textChanged
               * -----------
               *
               * Triggered when an element's `textContent` chnages. The callback triggers
               * after the textContent has changed in the DOM. It is called with the element,
               * the old value, and current value.
               */
              var states = exports.states = {
                attached: [],
                detached: [],
                replaced: [],
                attributeChanged: [],
                textChanged: []
              };

              // Define the custom signatures necessary for the loop to fill in the "magic"
              // methods that process the transitions consistently.
              var fnSignatures = {
                attached: function attached(el) {
                  return function (cb) {
                    return cb(el);
                  };
                },
                detached: function detached(el) {
                  return function (cb) {
                    return cb(el);
                  };
                },
                replaced: function replaced(oldEl, newEl) {
                  return function (cb) {
                    return cb(oldEl, newEl);
                  };
                },
                textChanged: function textChanged(el, oldVal, newVal) {
                  return function (cb) {
                    return cb(el, oldVal, newVal);
                  };
                },
                attributeChanged: function attributeChanged(el, name, oldVal, newVal) {
                  return function (cb) {
                    return cb(el, name, oldVal, newVal);
                  };
                }
              };

              var make = {};

              // Dynamically fill in the custom methods instead of manually constructing
              // them.
              Object.keys(states).forEach(function (stateName) {
                var mapFn = fnSignatures[stateName];

                /**
                 * Make's the transition promises.
                 *
                 * @param elements
                 * @param args
                 * @param promises
                 */
                make[stateName] = function makeTransitionPromises(elements, args, promises) {
                  // Sometimes an array-like is passed so using forEach in this manner yields
                  // more consistent results.
                  forEach.call(elements, function (element) {
                    // Never pass text nodes to a state callback unless it is textChanged.
                    if (stateName !== 'textChanged' && element.nodeType !== 1) {
                      return;
                    }

                    // Call the map function with each element.
                    var newPromises = states[stateName].map(mapFn.apply(null, [element].concat(args)));

                    // Merge these Promises into the main cache.
                    promises.push.apply(promises, newPromises);

                    // Recursively call into the children if attached or detached.
                    if (stateName === 'attached' || stateName === 'detached') {
                      make[stateName](element.childNodes, args, promises);
                    }
                  });

                  return promises.filter(function (promise) {
                    return Boolean(promise && promise.then);
                  });
                };
              });

              /**
               * Builds a reusable trigger mechanism for the element transitions.
               *
               * @param allPromises
               */
              function buildTrigger(allPromises) {
                var addPromises = allPromises.push.apply.bind(allPromises.push, allPromises);

                // This becomes `triggerTransition` in process.js.
                return function (stateName, makePromisesCallback, callback) {
                  if (states[stateName] && states[stateName].length) {
                    // Calls into each custom hook to bind Promises into the local array,
                    // these will then get merged into the main `allPromises` array.
                    var promises = makePromisesCallback([]);

                    // Add these promises into the global cache.
                    addPromises(promises);

                    if (callback) {
                      callback(promises.length ? promises : undefined);
                    }
                  } else if (callback) {
                    callback();
                  }
                };
              }

              /**
               * Make a reusable function for easy transition calling.
               *
               * @param stateName
               */
              function makePromises(stateName) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }

                // Ensure elements is always an array.
                var elements = [].concat(args[0]);

                // Accepts the local Array of promises to use.
                return function (promises) {
                  return make[stateName](elements, args.slice(1), promises);
                };
              }
            }, {}], 30: [function (_dereq_, module, exports) {
              // shim for using process in browser
              var process = module.exports = {};

              // cached from whatever global is present so that test runners that stub it
              // don't break things.  But we need to wrap it in a try catch in case it is
              // wrapped in strict mode code which doesn't define any globals.  It's inside a
              // function because try/catches deoptimize in certain engines.

              var cachedSetTimeout;
              var cachedClearTimeout;

              (function () {
                try {
                  cachedSetTimeout = setTimeout;
                } catch (e) {
                  cachedSetTimeout = function cachedSetTimeout() {
                    throw new Error('setTimeout is not defined');
                  };
                }
                try {
                  cachedClearTimeout = clearTimeout;
                } catch (e) {
                  cachedClearTimeout = function cachedClearTimeout() {
                    throw new Error('clearTimeout is not defined');
                  };
                }
              })();
              function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                  return setTimeout(fun, 0);
                } else {
                  return cachedSetTimeout.call(null, fun, 0);
                }
              }
              function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                  clearTimeout(marker);
                } else {
                  cachedClearTimeout.call(null, marker);
                }
              }
              var queue = [];
              var draining = false;
              var currentQueue;
              var queueIndex = -1;

              function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                  return;
                }
                draining = false;
                if (currentQueue.length) {
                  queue = currentQueue.concat(queue);
                } else {
                  queueIndex = -1;
                }
                if (queue.length) {
                  drainQueue();
                }
              }

              function drainQueue() {
                if (draining) {
                  return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;

                var len = queue.length;
                while (len) {
                  currentQueue = queue;
                  queue = [];
                  while (++queueIndex < len) {
                    if (currentQueue) {
                      currentQueue[queueIndex].run();
                    }
                  }
                  queueIndex = -1;
                  len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
              }

              process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                  for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                  }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                  runTimeout(drainQueue);
                }
              };

              // v8 likes predictible objects
              function Item(fun, array) {
                this.fun = fun;
                this.array = array;
              }
              Item.prototype.run = function () {
                this.fun.apply(null, this.array);
              };
              process.title = 'browser';
              process.browser = true;
              process.env = {};
              process.argv = [];
              process.version = ''; // empty string to avoid regexp issues
              process.versions = {};

              function noop() {}

              process.on = noop;
              process.addListener = noop;
              process.once = noop;
              process.off = noop;
              process.removeListener = noop;
              process.removeAllListeners = noop;
              process.emit = noop;

              process.binding = function (name) {
                throw new Error('process.binding is not supported');
              };

              process.cwd = function () {
                return '/';
              };
              process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
              };
              process.umask = function () {
                return 0;
              };
            }, {}] }, {}, [2])(2);
        });
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}] }, {}, [1])(1);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
