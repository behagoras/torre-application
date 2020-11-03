import React from 'react'
import styled from 'styled-components'

const ThemeStyled = styled.div`
  padding: 40px;
`

export default function Theme({ children }) {
  return (
    <ThemeStyled>
      {children}
    </ThemeStyled>
  )
}
