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
exports.Default = void 0;
var Spinner_1 = require("../components/atoms/Spinner");
var react_1 = __importDefault(require("react"));
exports.default = {
    title: 'silicon/Atoms/Spinner',
    component: Spinner_1.Spinner,
    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['sm', 'md', 'lg', 'xl'],
            },
        },
        color: {
            control: 'color',
        },
        borderWidth: {
            control: 'number',
        },
    },
};
var Default = function (args) { return (react_1.default.createElement(Spinner_1.Spinner, __assign({}, args))); };
exports.Default = Default;
exports.Default.args = {
    size: 'md',
};
//# sourceMappingURL=Spinner.stories.js.map