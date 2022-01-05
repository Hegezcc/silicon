"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abbrStories = exports.abbreviation = exports.helper = exports.suffixXY = void 0;
var aliases_1 = require("../constants/aliases");
exports.suffixXY = {
    x: function (val) {
        if (typeof val === 'number') {
            return "0 ".concat(val, "px");
        }
        return "0 ".concat(val);
    },
    y: function (val) {
        if (typeof val === 'number') {
            return "".concat(val, "px 0");
        }
        return "".concat(val, " 0");
    },
};
var helper = function (_a) {
    var _b;
    var attr = _a.attr, value = _a.value, abbr = _a.abbr;
    var res = abbr;
    if (value) {
        var realValue = null;
        if (aliases_1.suffixX.includes(attr)) {
            realValue = exports.suffixXY['x'](value);
        }
        else if (aliases_1.suffixY.includes(attr)) {
            realValue = exports.suffixXY['y'](value);
        }
        if (attr === 'z')
            realValue = value;
        if (!realValue) {
            if (typeof value === 'number') {
                realValue = "".concat(value, "px");
            }
            else {
                realValue = value;
            }
        }
        Object.assign(res, (_b = {}, _b[attr] = realValue, _b));
    }
    return res;
};
exports.helper = helper;
var abbreviation = function (abbrs) {
    var result = {};
    for (var key in abbrs) {
        if (aliases_1.aliasesInArray.includes(key))
            result = (0, exports.helper)({
                attr: aliases_1.aliases[key],
                value: abbrs[key],
                abbr: result,
            });
    }
    return result;
};
exports.abbreviation = abbreviation;
var abbrStories = function () {
    var stories = {};
    aliases_1.aliasesInArray.forEach(function (key) {
        var _a;
        Object.assign(stories, (_a = {},
            _a[key] = {
                control: 'text',
            },
            _a));
    });
    return stories;
};
exports.abbrStories = abbrStories;
//# sourceMappingURL=abbreviation.js.map