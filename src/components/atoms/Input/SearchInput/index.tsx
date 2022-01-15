import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { abbreviation } from 'utils/abbreviation'
import { SiliconSearchInput } from '../../../../types/Input/SearchInput'
import { SEARCH_INPUT_SIZE } from './size.styles'
import { SearchIcon, StyledSearchInput } from './styles'

const WrapperStyledSearchInput = styled.div((props: React.CSSProperties) => ({
  position: 'absolute' as const,
  color: 'rgba(255, 255, 255, 0.6)',
  ...props,
}))

export const SearchInput = forwardRef<HTMLInputElement, SiliconSearchInput>(
  ({ withIcon, placeholder, center, inputSize = 'md', ...props }, ref) => {
    const CSS = {
      textAlign: center ? 'center' : 'left',
      paddingLeft: withIcon ? 84 : 32,
      fontSize: '16px',
      ...abbreviation(props),
      ...props,
    }
    const wrapCSS = {
      ...SEARCH_INPUT_SIZE[inputSize],
      ...abbreviation(props),
      ...props,
    } as any;
    return (
      <WrapperStyledSearchInput {...wrapCSS}>
        <StyledSearchInput
          {...CSS}
          placeholder={placeholder ?? ''}
          ref={ref}
        />
        {withIcon && <SearchIcon />}
      </WrapperStyledSearchInput>
    )
  },
)
SearchInput.displayName = 'SearchInput'
