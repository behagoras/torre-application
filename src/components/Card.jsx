/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
  background:${(props) => props.theme.colors.backgroundCard};
  min-width: ${(props) => props.theme.cardWidth}px;
  border-radius: 2px;
  overflow: auto;
  position: relative;
  z-index: 1;
  margin-right:${(props) => props.theme.space}px;
`

export default function Card({ children, className, ...props }) {
  return (
    <CardStyled className={className} {...props}>
      {children}
    </CardStyled>
  )
}
