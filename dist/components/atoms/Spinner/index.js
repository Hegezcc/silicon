"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var Spinner = function (_a) {
    var _b = _a.color, color = _b === void 0 ? '#fff' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.borderWidth, borderWidth = _d === void 0 ? '3px' : _d;
    var isNumber = typeof borderWidth === 'number';
    var borderWidthStyle = isNumber ? "".concat(borderWidth, "px") : borderWidth;
    var border = "".concat(borderWidthStyle, " solid transparent");
    var borderTop = "".concat(borderWidthStyle, " solid ").concat(color);
    var spinnerSize = size;
    if (size === 'sm') {
        spinnerSize = '.6em';
    }
    else if (size === 'md') {
        spinnerSize = '1em';
    }
    else if (size === 'lg') {
        spinnerSize = '1.2em';
    }
    else if (size === 'xl') {
        spinnerSize = '1.6em';
    }
    var styles = {
        border: border,
        borderTop: borderTop,
        width: spinnerSize,
        height: spinnerSize,
        borderRight: borderTop,
    };
    return react_1.default.createElement(styles_1.StyledSpinner, __assign({}, styles));
};
exports.Spinner = Spinner;
//# sourceMappingURL=index.js.map