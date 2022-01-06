import { AbbreviationType } from 'types/abbreviation'

export const aliases: Record<AbbreviationType, string> = {
  align: 'align-items',
  b: 'border',
  bb: 'border-bottom',
  bc: 'border-color',
  bg: 'background',
  bl: 'border-left',
  bs: 'border-style',
  br: 'border-right',
  brad: 'border-radius',
  bt: 'border-top',
  bw: 'border-width',
  c: 'color',
  d: 'display',
  dir: 'direction',
  f: 'float',
  flexDir: 'flex-direction',
  fs: 'font-size',
  fw: 'font-weight',
  h: 'height',
  justify: 'justify-content',
  lh: 'line-height',
  m: 'margin',
  maxH: 'max-height',
  maxW: 'max-width',
  minH: 'min-height',
  minW: 'min-width',
  mb: 'margin-bottom',
  mt: 'margin-top',
  mx: 'margin',
  my: 'margin',
  ov: 'overflow',
  p: 'padding',
  pos: 'position',
  px: 'padding',
  py: 'padding',
  ta: 'text-align',
  td: 'text-decoration',
  ts: 'text-shadow',
  tt: 'text-transform',
  w: 'width',
  ws: 'white-space',
  z: 'z-index',
}

export const aliasesInArray: Array<AbbreviationType> = [
  'align',
  'b',
  'bb',
  'bc',
  'bg',
  'bl',
  'bs',
  'br',
  'brad',
  'bt',
  'bw',
  'c',
  'd',
  'flexDir',
  'dir',
  'f',
  'fs',
  'fw',
  'h',
  'justify',
  'lh',
  'm',
  'maxH',
  'maxW',
  'minH',
  'minW',
  'mb',
  'mt',
  'mx',
  'my',
  'ov',
  'p',
  'pos',
  'px',
  'py',
  'ta',
  'td',
  'ts',
  'tt',
  'w',
  'ws',
  'z',
]

export const suffixX = ['mx', 'px']
export const suffixY = ['my', 'py']
