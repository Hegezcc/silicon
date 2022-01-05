"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSpinner = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var spin = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% { transform: rotate(0deg);}\n  100% { transform: rotate(360deg);}\n}\n"], ["\n  0% { transform: rotate(0deg);}\n  100% { transform: rotate(360deg);}\n}\n"])));
var Spinner = styled_components_1.default.div(function (props) { return (__assign({ borderRadius: '50%' }, props)); });
exports.StyledSpinner = (0, styled_components_1.default)(Spinner)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 0.8s ease-in-out infinite;\n"], ["\n  animation: ", " 0.8s ease-in-out infinite;\n"])), spin);
var templateObject_1, templateObject_2;
//# sourceMappingURL=styles.js.map