import { Abbreviation, StrOrNumber } from '../types/abbreviation';
export declare const suffixXY: {
    x: (val: StrOrNumber) => string;
    y: (val: StrOrNumber) => string;
};
export declare const helper: ({ attr, value, abbr, }: {
    attr: string;
    value: StrOrNumber;
    abbr: object;
}) => object;
export declare const abbreviation: (abbrs: Abbreviation) => {};
export declare const abbrStories: () => {};
