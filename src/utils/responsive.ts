import { Responsive } from 'types/props'
import { abbreviation } from './abbreviation'

export const responsive = (_responsive?: Responsive) => {
  let xsm = {}
  let sm = {}
  let md = {}
  let lg = {}
  let xl = {}
  let xl2 = {}

  if (_responsive?.xsm)
    xsm = {
      '@media (min-width: 480px)': {
        ...abbreviation(_responsive.xsm),
        ..._responsive.xsm,
      },
    }

  if (_responsive?.sm)
    sm = {
      '@media (min-width: 640px)': {
        ...abbreviation(_responsive.sm),
        ..._responsive.sm,
      },
    }

  if (_responsive?.md)
    md = {
      '@media (min-width: 768px)': {
        ...abbreviation(_responsive.md),
        ..._responsive.md,
      },
    }

  if (_responsive?.lg)
    lg = {
      '@media (min-width: 1024px)': {
        ...abbreviation(_responsive.lg),
        ..._responsive.lg,
      },
    }

  if (_responsive?.xl)
    xl = {
      '@media (min-width: 1280px)': {
        ...abbreviation(_responsive.xl),
        ..._responsive.xl,
      },
    }

  if (_responsive?.xl2)
    xl2 = {
      '@media (min-width: 1536px)': {
        ...abbreviation(_responsive.xl2),
        ..._responsive.xl2,
      },
    }

  const responsiveStyles = {
    ...xsm,
    ...sm,
    ...md,
    ...lg,
    ...xl,
    ...xl2,
  }

  return responsiveStyles
}
