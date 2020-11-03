import React from 'react'
import styled from 'styled-components'
import { resetButton } from '../styled/mixins'

const TextButtonStyled = styled.button`
  ${resetButton}
  color: ${(props) => props.theme.colors.accent};
  text-transform: uppercase;
  display: ${(props) => props.center && 'flex'};
  justify-content: ${(props) => props.center && 'center'};
  justify-items: ${(props) => props.center && 'center'};
  width: 100%;
`

export default function TextButton({ children, center }) {
  return (
    <TextButtonStyled type="button" center={center}>
      {children}
    </TextButtonStyled>
  )
}
