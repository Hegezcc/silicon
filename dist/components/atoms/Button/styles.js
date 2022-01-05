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
exports.StyledButton = exports.VARIANT_STYLES = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var ghost_styles_1 = require("./ghost.styles");
var primary_styles_1 = require("./primary.styles");
var secondary_styles_1 = require("./secondary.styles");
var tertiary_styles_1 = require("./tertiary.styles");
exports.VARIANT_STYLES = {
    primary: primary_styles_1.PRIMARY_STYLES,
    secondary: secondary_styles_1.SECONDARY_STYLES,
    tertiary: tertiary_styles_1.TERTIARY_STYLES,
    ghost: ghost_styles_1.GHOST_STYLES,
};
exports.StyledButton = styled_components_1.default.button(function (props) { return (__assign({ color: '#fff', padding: '12px 32px', borderRadius: '12px', outline: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 600, transition: 'all 0.15s ease-out, background-color 0s linear', boxSizing: 'border-box', position: 'relative' }, props)); });
//# sourceMappingURL=styles.js.map