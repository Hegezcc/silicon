import { Abbreviation, AbbreviationType, StrOrNumber } from 'types/abbreviation'
import { aliases, aliasesInArray, suffixX, suffixY } from 'constants/aliases'

export const suffixXY = {
  x: (val: StrOrNumber): string => {
    if (typeof val === 'number') {
      return `0px ${val}px`
    }
    return `0px ${val}`
  },
  y: (val: StrOrNumber): string => {
    if (typeof val === 'number') {
      return `${val}px 0px`
    }
    return `${val} 0px`
  },
}

export const helper = ({
  attr,
  value,
  abbr,
  alias,
}: {
  attr: string
  value: StrOrNumber
  // eslint-disable-next-line  @typescript-eslint/ban-types
  abbr: object
  alias: string
}) => {
  const res = abbr
  if (typeof value !== 'string' || typeof value !== 'number') {
    let realValue: string | number | null = null

    if (suffixX.includes(alias)) {
      realValue = suffixXY.x(value)
    } else if (suffixY.includes(alias)) {
      realValue = suffixXY.y(value)
    }

    if (alias === 'z') realValue = value
    if (alias === 'fw') realValue = value

    if (!realValue) {
      if (typeof value === 'number') {
        realValue = `${value}px`
      } else {
        realValue = value
      }
    }

    Object.assign(res, { [attr]: realValue })
  }

  return res
}

export const abbreviation = (abbrs: Abbreviation) => {
  let result = {}

  for (const key in abbrs) {
    if (aliasesInArray.includes(key as AbbreviationType))
      result = helper({
        attr: aliases[key as AbbreviationType],
        value: abbrs[key as AbbreviationType] as StrOrNumber,
        abbr: result,
        alias: key,
      })
  }

  return result
}

export const abbrStories = () => {
  const stories = {}
  aliasesInArray.forEach((key) => {
    Object.assign(stories, {
      [key]: {
        control: 'text',
      },
    })
  })

  return stories
}
