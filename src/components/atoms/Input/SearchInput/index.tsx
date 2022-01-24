/*eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { SiliconSearchInput } from 'types/Input/SearchInput'
import { abbreviation } from 'utils/abbreviation'
import { SEARCH_INPUT_SIZE } from './size.styles'
import { SearchIcon, StyledSearchInput } from './styles'

const WrapperStyledSearchInput = styled.div((props: React.CSSProperties) => ({
  display: 'flex',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 0.6)',
  border: '2px solid rgba(96, 100, 139, 1)',
  padding: '12px 32px 12px 32px',
  borderRadius: '12px',
  flexDirection: 'row-reverse' as any,
  ...props,
}))

export const SearchInput = forwardRef<HTMLInputElement, SiliconSearchInput>(
  ({ withIcon, center, inputSize = 'md', pesan = '', ...props }, ref) => {
    const CSS = {
      textAlign: center ? 'center' : 'left',
      fontSize: '16px',
      ...abbreviation(props),
      ...props,
    }
    const wrapCSS = {
      ...SEARCH_INPUT_SIZE[inputSize],
      ...abbreviation(props),
      ...props,
    } as any

    let content = <SearchIcon />
    if (pesan != '') {
      content = <p style={{ margin: '0px 12px 2px 0px' }}>{pesan}</p>
    }
    return (
      <WrapperStyledSearchInput {...wrapCSS}>
        <StyledSearchInput {...CSS} ref={ref} />
        {(withIcon || pesan) && content}
      </WrapperStyledSearchInput>
    )
  },
)
SearchInput.displayName = 'SearchInput'
