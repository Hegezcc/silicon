export type StrOrNumber = string | number;

export type AbbreviationType =
  | 'align'
  | 'b'
  | 'bb'
  | 'bg'
  | 'bl'
  | 'bs'
  | 'br'
  | 'brad'
  | 'bt'
  | 'bw'
  | 'c'
  | 'd'
  | 'dir'
  | 'f'
  | 'flexDir'
  | 'fs'
  | 'fw'
  | 'h'
  | 'justify'
  | 'lh'
  | 'm'
  | 'maxH'
  | 'maxW'
  | 'minH'
  | 'minW'
  | 'mb'
  | 'mt'
  | 'mx'
  | 'my'
  | 'ov'
  | 'p'
  | 'pos'
  | 'px'
  | 'py'
  | 'ta'
  | 'td'
  | 'ts'
  | 'tt'
  | 'w'
  | 'ws'
  | 'z';

export interface Abbreviation
  extends Partial<Record<AbbreviationType, StrOrNumber>> {}
