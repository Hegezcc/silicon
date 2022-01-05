import { Abbreviation, AbbreviationType, StrOrNumber } from 'types/abbreviation'
import { aliases, aliasesInArray, suffixX, suffixY } from 'constants/aliases'

export const suffixXY = {
  x: (val: StrOrNumber): string => {
    if (typeof val === 'number') {
      return `0 ${val}px`
    }
    return `0 ${val}`
  },
  y: (val: StrOrNumber): string => {
    if (typeof val === 'number') {
      return `${val}px 0`
    }
    return `${val} 0`
  },
}

export const helper = ({
  attr,
  value,
  abbr,
}: {
  attr: string
  value: StrOrNumber
  // eslint-disable-next-line  @typescript-eslint/ban-types
  abbr: object
}) => {
  const res = abbr
  if (value) {
    let realValue: string | number | null = null

    if (suffixX.includes(attr)) {
      realValue = suffixXY.x(value)
    } else if (suffixY.includes(attr)) {
      realValue = suffixXY.y(value)
    }

    if (attr === 'z') realValue = value

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
