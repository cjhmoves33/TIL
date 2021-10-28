(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./.storybook/generated-stories-entry.js":
/*!***********************************************!*\
  !*** ./.storybook/generated-stories-entry.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, __react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

"use strict";

var _frameworkImportPath = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/esm/client/index.js");
/* eslint-disable import/no-unresolved */


(0, _frameworkImportPath.configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"), __webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")], module, false);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./.storybook/preview.js":
/*!*******************************!*\
  !*** ./.storybook/preview.js ***!
  \*******************************/
/*! exports provided: parameters */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameters", function() { return parameters; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./.storybook/preview.js-generated-config-entry.js":
/*!*********************************************************!*\
  !*** ./.storybook/preview.js-generated-config-entry.js ***!
  \*********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@storybook/client-api */ "./node_modules/@storybook/client-api/dist/esm/client_api.js");
/* harmony import */ var _Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@storybook/client-logger */ "./node_modules/@storybook/client-logger/dist/esm/index.js");
/* harmony import */ var _Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_storybook_preview_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.storybook/preview.js */ "./.storybook/preview.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
/* eslint-disable import/no-unresolved */





Object.keys(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_storybook_preview_js__WEBPACK_IMPORTED_MODULE_2__).forEach(function (key) {
  var value = _Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_storybook_preview_js__WEBPACK_IMPORTED_MODULE_2__[key];

  switch (key) {
    case 'args':
    case 'argTypes':
      {
        return _Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_logger__WEBPACK_IMPORTED_MODULE_1__[/* logger */ "a"].warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
      }

    case 'decorators':
      {
        return value.forEach(function (decorator) {
          return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* addDecorator */ "c"])(decorator, false);
        });
      }

    case 'loaders':
      {
        return value.forEach(function (loader) {
          return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* addLoader */ "d"])(loader, false);
        });
      }

    case 'parameters':
      {
        return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* addParameters */ "e"])(_objectSpread({}, value), false);
      }

    case 'argTypesEnhancers':
      {
        return value.forEach(function (enhancer) {
          return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* addArgTypesEnhancer */ "a"])(enhancer);
        });
      }

    case 'argsEnhancers':
      {
        return value.forEach(function (enhancer) {
          return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* addArgsEnhancer */ "b"])(enhancer);
        });
      }

    case 'render':
      {
        return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* setGlobalRender */ "g"])(value);
      }

    case 'globals':
    case 'globalTypes':
      {
        var v = {};
        v[key] = value;
        return Object(_Users_jaeha_Desktop_code_states_sprint_section2_im_sprint_react_custom_component_node_modules_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__[/* addParameters */ "e"])(v, false);
      }

    default:
      {
        // eslint-disable-next-line prefer-template
        return console.log(key + ' was not supported :( !');
      }
  }
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./.storybook/storybook-init-framework-entry.js":
/*!******************************************************!*\
  !*** ./.storybook/storybook-init-framework-entry.js ***!
  \******************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/esm/client/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":
/*!**********************************************************************************************************!*\
  !*** ./src sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$ ***!
  \**********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./stories/Autocomplete.stories.js": "./src/stories/Autocomplete.stories.js",
	"./stories/ClickToEdit.stories.js": "./src/stories/ClickToEdit.stories.js",
	"./stories/Modal.stories.js": "./src/stories/Modal.stories.js",
	"./stories/Tab.stories.js": "./src/stories/Tab.stories.js",
	"./stories/Tag.stories.js": "./src/stories/Tag.stories.js",
	"./stories/Toggle.stories.js": "./src/stories/Toggle.stories.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$";

/***/ }),

/***/ "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
/*!**********************************************************************************************!*\
  !*** ./src sync ^\.(?:(?:^|\/|(?:(?:(?!(?:^|\/)\.).)*?)\/)(?!\.)(?=.)[^/]*?\.stories\.mdx)$ ***!
  \**********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$";

/***/ }),

/***/ "./src/components/AdvancedChallenges/Autocomplete.js":
/*!***********************************************************!*\
  !*** ./src/components/AdvancedChallenges/Autocomplete.js ***!
  \***********************************************************/
/*! exports provided: InputContainer, DropDownContainer, Autocomplete, DropDown */
/*! exports used: Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* unused harmony export InputContainer */
/* unused harmony export DropDownContainer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autocomplete; });
/* unused harmony export DropDown */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/components/AdvancedChallenges/Autocomplete.js",
    _s = __webpack_require__.$Refresh$.signature();




const deselectedOptions = ['rustic', 'antique', 'vinyl', 'vintage', 'refurbished', '신품', '빈티지', '중고A급', '중고B급', '골동품'];
/* TODO : 아래 CSS를 자유롭게 수정하세요. */

const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';
const InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;
_c = InputContainer;
const DropDownContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;
  }
`;
_c2 = DropDownContainer;
const Autocomplete = () => {
  _s();

  /**
   * Autocomplete 컴포넌트는 아래 3가지 state가 존재합니다. 필요에 따라서 state를 더 만들 수도 있습니다.
   * - hasText state는 input값의 유무를 확인할 수 있습니다.
   * - inputValue state는 input값의 상태를 확인할 수 있습니다.
   * - options state는 input값을 포함하는 autocomplete 추천 항목 리스트를 확인할 수 있습니다.
   */
  const [hasText, setHasText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(deselectedOptions); // useEffect를 아래와 같이 활용할 수도 있습니다.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]); // TODO : input과 dropdown 상태 관리를 위한 handler가 있어야 합니다.

  const handleInputChange = event => {
    /**
     * handleInputChange 함수는
     * - input값 변경 시 발생되는 change 이벤트 핸들러입니다.
     * - input값과 상태를 연결시킬 수 있게 controlled component로 만들 수 있고
     * - autocomplete 추천 항목이 dropdown으로 시시각각 변화되어 보여질 수 있도록 상태를 변경합니다.
     *
     * handleInputChange 함수를 완성하여 아래 3가지 기능을 구현합니다.
     *
     * onChange 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
     * 2. input값 유무 상태인 hasText가 적절하게 변경되어야 합니다.
     * 3. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
     * Tip : options의 상태에 따라 dropdown으로 보여지는 항목이 달라집니다.
     */
  };

  const handleDropDownClick = clickedOption => {
    /**
     * handleDropDownClick 함수는
     * - autocomplete 추천 항목을 클릭할 때 발생되는 click 이벤트 핸들러입니다.
     * - dropdown에 제시된 항목을 눌렀을 때, input값이 해당 항목의 값으로 변경되는 기능을 수행합니다.
     *
     * handleInputChange 함수를 완성하여 아래 기능을 구현합니다.
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
     * 2. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
     */
  };

  const handleDeleteButtonClick = () => {
    /**
     * handleDeleteButtonClick 함수는
     * - input의 오른쪽에 있는 X버튼 클릭 시 발생되는 click 이벤트 핸들러입니다.
     * - 함수 작성을 완료하여 input값을 한 번에 삭제하는 기능을 구현합니다.
     *
     * handleDeleteButtonClick 함수를 완성하여 아래 기능을 구현합니다.
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 빈 문자열이 되어야 합니다.
     */
  }; // Advanced Challenge: 상하 화살표 키 입력 시 dropdown 항목을 선택하고, Enter 키 입력 시 input값을 선택된 dropdown 항목의 값으로 변경하는 handleKeyUp 함수를 만들고,
  // 적절한 컴포넌트에 onKeyUp 핸들러를 할당합니다. state가 추가로 필요한지 고민하고, 필요 시 state를 추가하여 제작하세요.


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "autocomplete-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "delete-button",
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropDown, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 142,
    columnNumber: 5
  }, undefined);
};

_s(Autocomplete, "I1nE9XhJBnuJkzMxhOQxfHyOo98=");

_c3 = Autocomplete;
const DropDown = ({
  options,
  handleComboBox
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DropDownContainer, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 156,
    columnNumber: 5
  }, undefined);
};
_c4 = DropDown;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "InputContainer");
__webpack_require__.$Refresh$.register(_c2, "DropDownContainer");
__webpack_require__.$Refresh$.register(_c3, "Autocomplete");
__webpack_require__.$Refresh$.register(_c4, "DropDown");
Autocomplete.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Autocomplete"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/AdvancedChallenges/Autocomplete.js"] = {
    name: "Autocomplete",
    docgenInfo: Autocomplete.__docgenInfo,
    path: "src/components/AdvancedChallenges/Autocomplete.js"
  };
}

DropDown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DropDown"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/AdvancedChallenges/Autocomplete.js"] = {
    name: "DropDown",
    docgenInfo: DropDown.__docgenInfo,
    path: "src/components/AdvancedChallenges/Autocomplete.js"
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/components/AdvancedChallenges/ClickToEdit.js":
/*!**********************************************************!*\
  !*** ./src/components/AdvancedChallenges/ClickToEdit.js ***!
  \**********************************************************/
/*! exports provided: InputBox, InputEdit, InputView, MyInput, ClickToEdit */
/*! exports used: ClickToEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* unused harmony export InputBox */
/* unused harmony export InputEdit */
/* unused harmony export InputView */
/* unused harmony export MyInput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickToEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/components/AdvancedChallenges/ClickToEdit.js",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();





const InputBox = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px #bbb dashed;
  border-radius: 10px;
  margin-left: 1rem;
`;
_c = InputBox;
const InputEdit = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].input`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
`;
_c2 = InputEdit;
const InputView = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  text-align: center;
  align-items: center;
  margin-top: 3rem;

  div.view {
    margin-top: 3rem;
  }
`;
_c3 = InputView;
const MyInput = ({
  value,
  handleValueChange
}) => {
  _s();

  const inputEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [isEditMode, setEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [newValue, setNewValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setNewValue(value);
  }, [value]);

  const handleClick = () => {// TODO : isEditMode 상태를 변경합니다.
  };

  const handleBlur = () => {
    // TODO : Edit가 불가능한 상태로 변경합니다.
    handleValueChange(newValue);
  };

  const handleInputChange = e => {// TODO : 저장된 value를 업데이트합니다.
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputBox, {
    children: isEditMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputEdit, {
      type: "text",
      value: newValue,
      ref: inputEl // TODO : 포커스를 잃으면 Edit가 불가능한 상태로 변경되는 메소드가 실행되어야 합니다.
      // TODO : 변경 사항이 감지되면 저장된 value를 업데이트 되는 메소드가 실행되어야 합니다.

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
      children: newValue
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, undefined);
};

_s(MyInput, "habe0DkaSfBACQ3ROOUUhcEhLQw=");

_c4 = MyInput;
const cache = {
  name: '김코딩',
  age: 20
};
const ClickToEdit = () => {
  _s2();

  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cache.name);
  const [age, setAge] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(cache.age);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputView, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: "\uC774\uB984"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MyInput, {
        value: name,
        handleValueChange: newValue => setName(newValue)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputView, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
        children: "\uB098\uC774"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MyInput, {
        value: age,
        handleValueChange: newValue => setAge(newValue)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(InputView, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "view",
        children: ["\uC774\uB984 ", name, " \uB098\uC774 ", age]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s2(ClickToEdit, "R8DPSM7TfR0VhECUhWrkslbi96w=");

_c5 = ClickToEdit;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "InputBox");
__webpack_require__.$Refresh$.register(_c2, "InputEdit");
__webpack_require__.$Refresh$.register(_c3, "InputView");
__webpack_require__.$Refresh$.register(_c4, "MyInput");
__webpack_require__.$Refresh$.register(_c5, "ClickToEdit");
MyInput.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MyInput"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/AdvancedChallenges/ClickToEdit.js"] = {
    name: "MyInput",
    docgenInfo: MyInput.__docgenInfo,
    path: "src/components/AdvancedChallenges/ClickToEdit.js"
  };
}

ClickToEdit.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ClickToEdit"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/AdvancedChallenges/ClickToEdit.js"] = {
    name: "ClickToEdit",
    docgenInfo: ClickToEdit.__docgenInfo,
    path: "src/components/AdvancedChallenges/ClickToEdit.js"
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/components/BareMinimumRequirements/Modal.js":
/*!*********************************************************!*\
  !*** ./src/components/BareMinimumRequirements/Modal.js ***!
  \*********************************************************/
/*! exports provided: ModalContainer, ModalBackdrop, ModalBtn, ModalView, Modal */
/*! exports used: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* unused harmony export ModalContainer */
/* unused harmony export ModalBackdrop */
/* unused harmony export ModalBtn */
/* unused harmony export ModalView */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/components/BareMinimumRequirements/Modal.js",
    _s = __webpack_require__.$Refresh$.signature();





const ModalContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
_c = ModalContainer;
const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  display: flex;
  /* background-color: ${props => props.isOpen ? 'gray' : 'white'}; */
  background-color: 'gray';
  /* opacity: 0.5; */
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
_c2 = ModalBackdrop;
const ModalBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
_c3 = ModalBtn;
const ModalView = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
width: 50vh;
height: 50vh;
background-color: tomato;
/* opacity: 1; */
`;
const Modal = () => {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalContainer, {
      children: [isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalBackdrop, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalBtn, {
        onClick: openModalHandler,
        children: isOpen ? 'Opened' : 'Open Modal'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
}; // <ModalBackdrop isOpen={isOpen}>
//         {
//           isOpen? 
//           <ModalView /> :
//           <ModalBtn onClick={openModalHandler} >
//             {isOpen? 'Opened' : 'Open Modal'}
//           </ModalBtn>
//         }
//         </ModalBackdrop>

_s(Modal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c4 = Modal;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "ModalContainer");
__webpack_require__.$Refresh$.register(_c2, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c3, "ModalBtn");
__webpack_require__.$Refresh$.register(_c4, "Modal");
Modal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Modal"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/BareMinimumRequirements/Modal.js"] = {
    name: "Modal",
    docgenInfo: Modal.__docgenInfo,
    path: "src/components/BareMinimumRequirements/Modal.js"
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/components/BareMinimumRequirements/Tab.js":
/*!*******************************************************!*\
  !*** ./src/components/BareMinimumRequirements/Tab.js ***!
  \*******************************************************/
/*! exports provided: Tab */
/*! exports used: Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/components/BareMinimumRequirements/Tab.js";

 // TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.



const TabMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;

  .submenu {
    ${''
/* 기본 Tabmenu 에 대한 CSS를 구현합니다. */
}
  }

  .focused {
    ${''
/* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */
}
  }

  & div.desc {
    text-align: center;
  }
`;
_c = TabMenu;
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  text-align: center;
`;
_c2 = Desc;
const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  const menuArr = [{
    name: 'Tab1',
    content: 'Tab menu ONE'
  }, {
    name: 'Tab2',
    content: 'Tab menu TWO'
  }, {
    name: 'Tab3',
    content: 'Tab menu THREE'
  }];

  const selectMenuHandler = index => {// TIP: parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않습니다
    // TODO : 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신되도록 함수를 완성하세요.
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TabMenu, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          className: "submenu",
          children: menuArr[0].name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          className: "submenu",
          children: menuArr[1].name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          className: "submenu",
          children: menuArr[2].name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Desc, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          children: menuArr[0].content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};
_c3 = Tab;

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "TabMenu");
__webpack_require__.$Refresh$.register(_c2, "Desc");
__webpack_require__.$Refresh$.register(_c3, "Tab");
Tab.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tab"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/BareMinimumRequirements/Tab.js"] = {
    name: "Tab",
    docgenInfo: Tab.__docgenInfo,
    path: "src/components/BareMinimumRequirements/Tab.js"
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/components/BareMinimumRequirements/Tag.js":
/*!*******************************************************!*\
  !*** ./src/components/BareMinimumRequirements/Tag.js ***!
  \*******************************************************/
/*! exports provided: TagsInput, Tag */
/*! exports used: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* unused harmony export TagsInput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/components/BareMinimumRequirements/Tag.js",
    _s = __webpack_require__.$Refresh$.signature();


 // TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!



const TagsInput = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #4000c7;
        > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #4000c7;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {    
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
    outline: transparent;
  }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }

`;
_c = TagsInput;
const Tag = () => {
  _s();

  const initialTags = ['CodeStates', 'kimcoding'];
  const [tags, setTags] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTags);

  const removeTags = indexToRemove => {// TODO : 태그를 삭제하는 메소드를 완성하세요.
  };

  const addTags = event => {// TODO : tags 배열에 새로운 태그를 추가하는 메소드를 완성하세요. 
    // 이 메소드는 태그 추가 외에도 아래 3 가지 기능을 수행할 수 있어야 합니다.
    // - 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // - 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    // - 태그가 추가되면 input 창 비우기
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TagsInput, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
        id: "tags",
        children: tags.map((tag, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          className: "tag",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "tag-title",
            children: tag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            className: "tag-close-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, undefined)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
        className: "tag-input",
        type: "text",
        onKeyUp: () => {
          {
            /* 키보드의 Enter 키에 의해 addTags 메소드가 실행되어야 합니다. */
          }
        },
        placeholder: "Press enter to add tags"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(Tag, "JlOETRwVVaCzhmFuD06zVsVkoYs=");

_c2 = Tag;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "TagsInput");
__webpack_require__.$Refresh$.register(_c2, "Tag");
Tag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tag"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/BareMinimumRequirements/Tag.js"] = {
    name: "Tag",
    docgenInfo: Tag.__docgenInfo,
    path: "src/components/BareMinimumRequirements/Tag.js"
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/components/BareMinimumRequirements/Toggle.js":
/*!**********************************************************!*\
  !*** ./src/components/BareMinimumRequirements/Toggle.js ***!
  \**********************************************************/
/*! exports provided: Toggle */
/*! exports used: Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/components/BareMinimumRequirements/Toggle.js",
    _s = __webpack_require__.$Refresh$.signature();





const ToggleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  position: relative;
  margin-top: 8rem;
  left: 47%;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #ffffff;
    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }
`;
_c = ToggleContainer;
const Desc = styled_components__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].div`
  // TODO : 설명 부분의 CSS를 구현합니다.
`;
const Toggle = () => {
  _s();

  const [isOn, setisOn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleHandler = () => {// TODO : isOn의 상태를 변경하는 메소드를 구현합니다.
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ToggleContainer // TODO : 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다.
    , {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(Toggle, "KGOahal+fTALx46Eqg8qydCEI+s=");

_c2 = Toggle;

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ToggleContainer");
__webpack_require__.$Refresh$.register(_c2, "Toggle");
Toggle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Toggle"
};

if (typeof STORYBOOK_REACT_CLASSES !== "undefined") {
  STORYBOOK_REACT_CLASSES["src/components/BareMinimumRequirements/Toggle.js"] = {
    name: "Toggle",
    docgenInfo: Toggle.__docgenInfo,
    path: "src/components/BareMinimumRequirements/Toggle.js"
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/stories/Autocomplete.stories.js":
/*!*********************************************!*\
  !*** ./src/stories/Autocomplete.stories.js ***!
  \*********************************************/
/*! exports provided: default, Primary */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdvancedChallenges_Autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AdvancedChallenges/Autocomplete */ "./src/components/AdvancedChallenges/Autocomplete.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/stories/Autocomplete.stories.js";

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React from 'react';\n\nimport { Autocomplete } from '../components/AdvancedChallenges/Autocomplete';\n\nexport default {\n  title: 'Example/Autocomplete',\n  component: Autocomplete\n};\n\nconst Template = (args) => <Autocomplete {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'Autocomplete'\n};\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 10
    },
    "endLoc": {
      "col": 53,
      "line": 10
    },
    "startBody": {
      "col": 17,
      "line": 10
    },
    "endBody": {
      "col": 53,
      "line": 10
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Autocomplete',
  component: _components_AdvancedChallenges_Autocomplete__WEBPACK_IMPORTED_MODULE_1__[/* Autocomplete */ "a"]
});

const Template = args => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_AdvancedChallenges_Autocomplete__WEBPACK_IMPORTED_MODULE_1__[/* Autocomplete */ "a"], { ...args
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 28
}, undefined);

_c = Template;
const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Autocomplete'
};
Primary.parameters = {
  storySource: {
    source: "(args) => <Autocomplete {...args} />"
  },
  ...Primary.parameters
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Template");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/stories/ClickToEdit.stories.js":
/*!********************************************!*\
  !*** ./src/stories/ClickToEdit.stories.js ***!
  \********************************************/
/*! exports provided: default, Primary */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AdvancedChallenges_ClickToEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AdvancedChallenges/ClickToEdit */ "./src/components/AdvancedChallenges/ClickToEdit.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/stories/ClickToEdit.stories.js";

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React from 'react';\n\nimport { ClickToEdit } from '../components/AdvancedChallenges/ClickToEdit';\n\nexport default {\n  title: 'Example/ClickToEdit',\n  component: ClickToEdit\n};\n\nconst Template = (args) => <ClickToEdit {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'ClickToEdit'\n};\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 10
    },
    "endLoc": {
      "col": 52,
      "line": 10
    },
    "startBody": {
      "col": 17,
      "line": 10
    },
    "endBody": {
      "col": 52,
      "line": 10
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/ClickToEdit',
  component: _components_AdvancedChallenges_ClickToEdit__WEBPACK_IMPORTED_MODULE_1__[/* ClickToEdit */ "a"]
});

const Template = args => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_AdvancedChallenges_ClickToEdit__WEBPACK_IMPORTED_MODULE_1__[/* ClickToEdit */ "a"], { ...args
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 28
}, undefined);

_c = Template;
const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ClickToEdit'
};
Primary.parameters = {
  storySource: {
    source: "(args) => <ClickToEdit {...args} />"
  },
  ...Primary.parameters
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Template");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/stories/Modal.stories.js":
/*!**************************************!*\
  !*** ./src/stories/Modal.stories.js ***!
  \**************************************/
/*! exports provided: default, Primary */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BareMinimumRequirements_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BareMinimumRequirements/Modal */ "./src/components/BareMinimumRequirements/Modal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/stories/Modal.stories.js";

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React from 'react';\n\nimport { Modal } from '../components/BareMinimumRequirements/Modal';\n\nexport default {\n  title: 'Example/Modal',\n  component: Modal\n};\n\nconst Template = (args) => <Modal {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'Modal'\n};\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 10
    },
    "endLoc": {
      "col": 46,
      "line": 10
    },
    "startBody": {
      "col": 17,
      "line": 10
    },
    "endBody": {
      "col": 46,
      "line": 10
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Modal',
  component: _components_BareMinimumRequirements_Modal__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"]
});

const Template = args => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_BareMinimumRequirements_Modal__WEBPACK_IMPORTED_MODULE_1__[/* Modal */ "a"], { ...args
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 28
}, undefined);

_c = Template;
const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Modal'
};
Primary.parameters = {
  storySource: {
    source: "(args) => <Modal {...args} />"
  },
  ...Primary.parameters
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Template");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/stories/Tab.stories.js":
/*!************************************!*\
  !*** ./src/stories/Tab.stories.js ***!
  \************************************/
/*! exports provided: default, Primary */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BareMinimumRequirements_Tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BareMinimumRequirements/Tab */ "./src/components/BareMinimumRequirements/Tab.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/stories/Tab.stories.js";

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React from 'react';\n\nimport { Tab } from '../components/BareMinimumRequirements/Tab';\n\nexport default {\n  title: 'Example/Tab',\n  component: Tab\n};\n\nconst Template = (args) => <Tab {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'Tab'\n};\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 10
    },
    "endLoc": {
      "col": 44,
      "line": 10
    },
    "startBody": {
      "col": 17,
      "line": 10
    },
    "endBody": {
      "col": 44,
      "line": 10
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Tab',
  component: _components_BareMinimumRequirements_Tab__WEBPACK_IMPORTED_MODULE_1__[/* Tab */ "a"]
});

const Template = args => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_BareMinimumRequirements_Tab__WEBPACK_IMPORTED_MODULE_1__[/* Tab */ "a"], { ...args
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 28
}, undefined);

_c = Template;
const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Tab'
};
Primary.parameters = {
  storySource: {
    source: "(args) => <Tab {...args} />"
  },
  ...Primary.parameters
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Template");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/stories/Tag.stories.js":
/*!************************************!*\
  !*** ./src/stories/Tag.stories.js ***!
  \************************************/
/*! exports provided: default, Primary */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BareMinimumRequirements_Tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BareMinimumRequirements/Tag */ "./src/components/BareMinimumRequirements/Tag.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/stories/Tag.stories.js";

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React from 'react';\n\nimport { Tag } from '../components/BareMinimumRequirements/Tag';\n\nexport default {\n  title: 'Example/Tag',\n  component: Tag\n};\n\nconst Template = (args) => <Tag {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'Tag'\n};\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 10
    },
    "endLoc": {
      "col": 44,
      "line": 10
    },
    "startBody": {
      "col": 17,
      "line": 10
    },
    "endBody": {
      "col": 44,
      "line": 10
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Tag',
  component: _components_BareMinimumRequirements_Tag__WEBPACK_IMPORTED_MODULE_1__[/* Tag */ "a"]
});

const Template = args => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_BareMinimumRequirements_Tag__WEBPACK_IMPORTED_MODULE_1__[/* Tag */ "a"], { ...args
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 28
}, undefined);

_c = Template;
const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Tag'
};
Primary.parameters = {
  storySource: {
    source: "(args) => <Tag {...args} />"
  },
  ...Primary.parameters
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Template");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ "./src/stories/Toggle.stories.js":
/*!***************************************!*\
  !*** ./src/stories/Toggle.stories.js ***!
  \***************************************/
/*! exports provided: default, Primary */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_BareMinimumRequirements_Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BareMinimumRequirements/Toggle */ "./src/components/BareMinimumRequirements/Toggle.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/src/stories/Toggle.stories.js";

/* eslint-disable */
// @ts-nocheck
// @ts-ignore
var __STORY__ = "import React from 'react';\n\nimport { Toggle } from '../components/BareMinimumRequirements/Toggle';\n\nexport default {\n  title: 'Example/Toggle',\n  component: Toggle\n};\n\nconst Template = (args) => <Toggle {...args} />;\n\nexport const Primary = Template.bind({});\nPrimary.args = {\n  primary: true,\n  label: 'Toggle'\n};\n"; // @ts-ignore

var __LOCATIONS_MAP__ = {
  "Primary": {
    "startLoc": {
      "col": 17,
      "line": 10
    },
    "endLoc": {
      "col": 47,
      "line": 10
    },
    "startBody": {
      "col": 17,
      "line": 10
    },
    "endBody": {
      "col": 47,
      "line": 10
    }
  }
};



/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Example/Toggle',
  component: _components_BareMinimumRequirements_Toggle__WEBPACK_IMPORTED_MODULE_1__[/* Toggle */ "a"]
});

const Template = args => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_BareMinimumRequirements_Toggle__WEBPACK_IMPORTED_MODULE_1__[/* Toggle */ "a"], { ...args
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 18,
  columnNumber: 28
}, undefined);

_c = Template;
const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Toggle'
};
Primary.parameters = {
  storySource: {
    source: "(args) => <Toggle {...args} />"
  },
  ...Primary.parameters
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Template");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js")))

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js ./node_modules/@storybook/core-client/dist/esm/globals/globals.js ./.storybook/storybook-init-framework-entry.js ./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-other-entry.js ./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-other-entry.js ./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-other-entry.js ./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-other-entry.js ./node_modules/@storybook/addon-measure/dist/esm/preset/preview.js-generated-other-entry.js ./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-other-entry.js ./.storybook/preview.js-generated-config-entry.js ./.storybook/generated-stories-entry.js (webpack)-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js */"./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/core-client/dist/esm/globals/globals.js */"./node_modules/@storybook/core-client/dist/esm/globals/globals.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/.storybook/storybook-init-framework-entry.js */"./.storybook/storybook-init-framework-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-other-entry.js */"./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-other-entry.js */"./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-other-entry.js */"./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-other-entry.js */"./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-other-entry.js */"./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-other-entry.js */"./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-other-entry.js */"./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@storybook/addon-measure/dist/esm/preset/preview.js-generated-other-entry.js */"./node_modules/@storybook/addon-measure/dist/esm/preset/preview.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-other-entry.js */"./node_modules/storybook-addon-outline/dist/esm/preset/addDecorator.js-generated-other-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/.storybook/preview.js-generated-config-entry.js */"./.storybook/preview.js-generated-config-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/.storybook/generated-stories-entry.js */"./.storybook/generated-stories-entry.js");
__webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined */"./node_modules/webpack-hot-middleware/client.js?reload=true&quiet=false&noInfo=undefined");
module.exports = __webpack_require__(/*! /Users/jaeha/Desktop/code-states/sprint/section2/im-sprint-react-custom-component/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ErrorOverlayEntry.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.iframe.bundle.js.map