import React, { forwardRef } from 'react'
import { SiliconButtonProps } from 'types/button'
import { abbreviation } from 'utils/abbreviation'
import { LeftIconButton, RightIconButton } from './icon.styles'
import { BUTTON_SIZES } from './size.styles'
import { StyledButton, VARIANT_STYLES } from './styles'
import { Spinner } from 'components/atoms/Spinner'
import { LOADING_STYLES } from './loading.styles'
import { responsive } from 'utils/responsive'

export const Button = forwardRef<HTMLButtonElement, SiliconButtonProps>(
  (
    {
      variant = 'primary',
      size = 'unset',
      children,
      text,
      _hover = {},
      leftIcon,
      rightIcon,
      midIcon,
      loading = false,
      spinnerSize = 'md',
      _responsive = {},
      ...props
    },
    ref,
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const abbreviations: any = abbreviation({ pos: 'relative', ...props })
    const abbrHover = abbreviation(_hover)
    const hoverStyles = {
      ':hover': {
        ...abbrHover,
        ..._hover,
      },
    }

    let loadingStyles = {}
    if (loading)
      loadingStyles = {
        ...LOADING_STYLES[variant],
      }

    return (
      <StyledButton
        {...BUTTON_SIZES[size]}
        {...VARIANT_STYLES[variant]}
        {...abbreviations}
        {...responsive(_responsive)}
        {...hoverStyles}
        {...loadingStyles}
        {...props}
        ref={ref}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: loading ? 1 : 0,
            zIndex: loading ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <Spinner size={spinnerSize} />
        </div>

        <div
          style={{
            opacity: loading ? 0 : 1,
            zIndex: loading ? 0 : 1,
            transition: 'opacity 0.3s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {leftIcon && <LeftIconButton>{leftIcon}</LeftIconButton>}
          {text ? text : midIcon ?? children}
          {rightIcon && <RightIconButton>{rightIcon}</RightIconButton>}
        </div>
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'
