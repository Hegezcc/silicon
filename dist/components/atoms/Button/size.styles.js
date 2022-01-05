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
exports.BUTTON_SIZES = exports.DEFAULT_SIZE = void 0;
exports.DEFAULT_SIZE = {
    padding: '12px 32px',
    width: '116px',
    height: '48px',
    fontSize: '16px',
};
exports.BUTTON_SIZES = {
    unset: __assign(__assign({}, exports.DEFAULT_SIZE), { width: 'auto', height: 'auto' }),
    sm: __assign(__assign({}, exports.DEFAULT_SIZE), { width: '80px', height: '40px', fontSize: '12px' }),
    md: __assign({}, exports.DEFAULT_SIZE),
    lg: {
        padding: '16px 40px',
        width: '160px',
        height: '48px',
        fontSize: '16px',
    },
    '1/2': __assign(__assign({}, exports.DEFAULT_SIZE), { width: '50%' }),
    full: __assign(__assign({}, exports.DEFAULT_SIZE), { width: '100%' }),
};
//# sourceMappingURL=size.styles.js.map