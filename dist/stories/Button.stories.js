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
exports.Ghost = exports.Tertiary = exports.Secondary = exports.Primary = exports.Default = void 0;
var react_1 = __importDefault(require("react"));
var Button_1 = require("../components/atoms/Button");
var abbreviation_1 = require("../utils/abbreviation");
exports.default = {
    title: 'silicon/Atoms/Button',
    component: Button_1.Button,
    argTypes: __assign(__assign({ variant: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary', 'tertiary', 'ghost'],
            },
        }, size: {
            control: {
                type: 'radio',
                options: ['unset', 'sm', 'md', 'lg', '1/2', 'full'],
            },
        }, spinnerSize: {
            control: {
                type: 'radio',
                options: ['sm', 'md', 'lg', 'xl'],
            },
        }, disabled: {
            control: 'boolean',
        }, loading: {
            control: 'boolean',
        } }, (0, abbreviation_1.abbrStories)()), { bg: {
            control: 'color',
        }, c: {
            control: 'color',
        } }),
};
var Default = function (args) { return (react_1.default.createElement(Button_1.Button, __assign({}, args))); };
exports.Default = Default;
exports.Default.args = {
    variant: 'primary',
    size: 'unset',
    text: 'Button',
};
exports.Primary = exports.Default.bind({});
exports.Primary.args = {
    variant: 'primary',
    size: 'unset',
    text: 'Primary',
};
exports.Secondary = exports.Default.bind({});
exports.Secondary.args = {
    variant: 'secondary',
    size: 'unset',
    text: 'Secondary',
};
exports.Tertiary = exports.Default.bind({});
exports.Tertiary.args = {
    variant: 'tertiary',
    size: 'unset',
    text: 'Tertiary',
};
exports.Ghost = exports.Default.bind({});
exports.Ghost.args = {
    variant: 'ghost',
    size: 'unset',
    text: 'Ghost',
};
//# sourceMappingURL=Button.stories.js.map