webpackHotUpdate("main",{

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
  background-color: gray;
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
`;
_c4 = ModalView;
const Modal = () => {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalContainer, {
      children: [isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalBackdrop, {
        onClick: openModalHandler,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalView, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ModalBtn, {
        onClick: openModalHandler,
        children: isOpen ? 'Opened' : 'Open Modal'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(Modal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c5 = Modal;

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "ModalContainer");
__webpack_require__.$Refresh$.register(_c2, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c3, "ModalBtn");
__webpack_require__.$Refresh$.register(_c4, "ModalView");
__webpack_require__.$Refresh$.register(_c5, "Modal");
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

/***/ })

})
//# sourceMappingURL=main.00d0c5eafc84d3146999.hot-update.js.map