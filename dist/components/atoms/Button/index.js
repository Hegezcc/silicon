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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importStar(require("react"));
var abbreviation_1 = require("../../../utils/abbreviation");
var icon_styles_1 = require("./icon.styles");
var size_styles_1 = require("./size.styles");
var styles_1 = require("./styles");
var Spinner_1 = require("../../../components/atoms/Spinner");
var loading_styles_1 = require("./loading.styles");
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, children = _a.children, text = _a.text, _d = _a._hover, _hover = _d === void 0 ? {} : _d, leftIcon = _a.leftIcon, rightIcon = _a.rightIcon, _e = _a.loading, loading = _e === void 0 ? false : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.spinnerSize, spinnerSize = _g === void 0 ? 'md' : _g, props = __rest(_a, ["variant", "size", "children", "text", "_hover", "leftIcon", "rightIcon", "loading", "disabled", "spinnerSize"]);
    var ref = (0, react_1.useRef)();
    var _h = (0, react_1.useState)(size_styles_1.BUTTON_SIZES[size].width), width = _h[0], setWidth = _h[1];
    var abbreviations = (0, abbreviation_1.abbreviation)(__assign({ pos: 'relative', width: width }, props));
    var abbrHover = (0, abbreviation_1.abbreviation)(_hover);
    var hoverStyles = {
        ':hover': __assign(__assign({}, abbrHover), { _hover: _hover }),
    };
    var loadingStyles = {};
    if (loading)
        loadingStyles = __assign({}, loading_styles_1.LOADING_STYLES[variant]);
    (0, react_1.useEffect)(function () {
        if (ref.current) {
            var width_1 = ref.current.offsetWidth + 'px';
            setWidth(width_1);
        }
    }, []);
    return (react_1.default.createElement(styles_1.StyledButton, __assign({}, styles_1.VARIANT_STYLES[variant], size_styles_1.BUTTON_SIZES[size], abbreviations, hoverStyles, loadingStyles, props, { ref: ref }),
        loading && react_1.default.createElement(Spinner_1.Spinner, { size: spinnerSize }),
        leftIcon && !loading && react_1.default.createElement(icon_styles_1.LeftIconButton, null, leftIcon),
        loading ? null : text ? text : children,
        rightIcon && !loading && react_1.default.createElement(icon_styles_1.RightIconButton, null, rightIcon)));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map