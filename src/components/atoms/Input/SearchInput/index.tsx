import React, { forwardRef, useState } from 'react'
import styled from 'styled-components'
import { abbreviation } from 'utils/abbreviation'
import { mergeRefs } from 'utils/mergeRefs'
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
    const wrapref = React.useRef<HTMLDivElement>(null)
    const customRef = React.useRef<HTMLInputElement>(null)
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
    }
    return (
      <WrapperStyledSearchInput {...wrapCSS} ref={wrapref}>
        <StyledSearchInput {...CSS} ref={mergeRefs(customRef, ref)} />
        {withIcon && <SearchIcon />}
      </WrapperStyledSearchInput>
    )
  },
)
SearchInput.displayName = 'SearchInput'
