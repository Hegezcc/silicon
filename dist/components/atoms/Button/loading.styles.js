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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOADING_STYLES = void 0;
var defaultLoadingStyles = {
    cursor: 'not-allowed',
    boxShadow: 'none',
    pointerEvents: 'none',
};
exports.LOADING_STYLES = {
    primary: __assign({ background: '#4B4FA0' }, defaultLoadingStyles),
    secondary: __assign({ background: '#3d3e50' }, defaultLoadingStyles),
    tertiary: __assign({ background: '#242537' }, defaultLoadingStyles),
    ghost: __assign({ background: '#28293d', border: '2px solid #4F5275' }, defaultLoadingStyles),
};
//# sourceMappingURL=loading.styles.js.map