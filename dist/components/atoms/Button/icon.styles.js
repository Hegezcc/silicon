"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightIconButton = exports.LeftIconButton = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var IconButton = styled_components_1.default.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
exports.LeftIconButton = (0, styled_components_1.default)(IconButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 8px;\n"], ["\n  margin-right: 8px;\n"])));
exports.RightIconButton = (0, styled_components_1.default)(IconButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=icon.styles.js.map