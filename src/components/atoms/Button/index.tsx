import React, { useEffect, useRef, useState } from 'react'
import { SiliconButtonProps } from 'types/button'
import { abbreviation } from 'utils/abbreviation'
import { LeftIconButton, RightIconButton } from './icon.styles'
import { BUTTON_SIZES } from './size.styles'
import { StyledButton, VARIANT_STYLES } from './styles'
import { Spinner } from 'components/atoms/Spinner'
import { LOADING_STYLES } from './loading.styles'

export const Button: React.FC<SiliconButtonProps> = ({
  variant = 'primary',
  size = 'unset',
  children,
  text,
  _hover = {},
  leftIcon,
  rightIcon,
  loading = false,
  spinnerSize = 'md',
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>()
  const [btnSize, setBtnSize] = useState({
    width: BUTTON_SIZES[size].width,
    height: BUTTON_SIZES[size].height,
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const abbreviations: any = abbreviation({ pos: 'relative', ...props })
  const abbrHover = abbreviation(_hover)
  const hoverStyles = {
    ':hover': {
      ...abbrHover,
      _hover,
    },
  }

  let loadingStyles = {}
  if (loading) loadingStyles = { ...LOADING_STYLES[variant] }

  useEffect(() => {
    if (ref.current) {
      setBtnSize({
        width: ref.current.offsetWidth + 'px',
        height: ref.current.offsetHeight + 'px',
      })
    }
  }, [])

  return (
    <StyledButton
      {...VARIANT_STYLES[variant]}
      {...BUTTON_SIZES[size]}
      {...abbreviations}
      {...hoverStyles}
      {...loadingStyles}
      {...btnSize}
      {...props}
      ref={ref}
    >
      {loading && <Spinner size={spinnerSize} />}

      {leftIcon && !loading && <LeftIconButton>{leftIcon}</LeftIconButton>}
      {loading ? null : text ? text : children}
      {rightIcon && !loading && <RightIconButton>{rightIcon}</RightIconButton>}
    </StyledButton>
  )
}
