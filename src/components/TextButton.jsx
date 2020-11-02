import React from 'react'
import styled from 'styled-components'
import { resetButton } from '../styled/mixins'

const TextButtonStyled = styled.button`
  ${resetButton}
  color: ${(props) => props.theme.colors.accent};
  text-transform: uppercase;
`

export default function TextButton({ children }) {
  return (
    <TextButtonStyled type="button">
      {children}
    </TextButtonStyled>
  )
}
