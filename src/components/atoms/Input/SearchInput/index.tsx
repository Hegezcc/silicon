import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { SiliconSearchInput } from 'types/Input/SearchInput'
import { SEARCH_INPUT_SIZE } from './size.styles'
import { SearchIcon, StyledSearchInput } from './styles'

const WrapperStyledSearchInput = styled.div((props: React.CSSProperties) => ({
  position: 'absolute' as const,
  color: 'rgba(255, 255, 255, 0.6)',
  ...props,
}))

export const SearchInput = forwardRef<HTMLInputElement, SiliconSearchInput>(
  ({ withIcon, center, inputSize = 'md', ...props }, ref) => {
    const CSS = {
      ...props,
      textAlign: center ? 'center' : 'left',
      paddingLeft: withIcon ? 60 : 30,
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapCSS = { ...SEARCH_INPUT_SIZE[inputSize], ...props } as any

    return (
      <WrapperStyledSearchInput {...wrapCSS}>
        <StyledSearchInput {...CSS} ref={ref} />
        {withIcon && <SearchIcon />}
      </WrapperStyledSearchInput>
    )
  },
)
SearchInput.displayName = 'SearchInput'
