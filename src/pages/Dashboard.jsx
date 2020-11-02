import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import OpportunitiesList from '../components/OpportunitiesList'

const Title = styled.h2`
  color:${(props) => props.theme.colors.accent};
  font-weight: 400;
  margin: ${(props) => props.theme.space * 2}px 0;
  margin-right: ${(props) => props.theme.space * 2}px;
  text-decoration: none!important;
  font-size: 20px;
`

const Header = styled.div`
  display:flex;
  align-items: center;
  justify-content: start;
  margin-bottom: ${(props) => props.theme.space * 2}px;
`

const DashboardWrapper = styled.div``
export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Header>
        <Title>Jobs by organizations you have signaled</Title>
        <Button secondary text="View More" />
      </Header>
      <OpportunitiesList />
    </DashboardWrapper>
  )
}
