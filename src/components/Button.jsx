import React from 'react'
import styled from 'styled-components'
import { resetButton } from '../styled/mixins'

const ButtonStyled = styled.button`
  ${resetButton}
  background: ${(props) => (!props.secondary ?
    props.theme.colors.accent :
    props.theme.colors.gray
  )};
  color:${(props) => (!props.secondary ?
    props.theme.colors.textButton :
    props.theme.colors.textButtonInverted
  )};
  box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)!important;
  padding: ${(props) => props.theme.space}px ${(props) => props.theme.space * 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  text-transform: uppercase;
  border-radius: 2px;
  box-sizing: border-box;
  height: fit-content;
`

export default function Button({ text, icon, className, secondary, handleClick, children }) {
  return (
    <ButtonStyled onClick={handleClick} secondary={secondary} className={className}>
      {icon || ''}
      {children || text}
    </ButtonStyled>
  )
}
