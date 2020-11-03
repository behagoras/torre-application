import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import OpportunitiesList from '../components/OpportunitiesList'
import ProfessionalsList from '../components/ProfessionalsList'

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

const Section = styled.div`
  margin-bottom: ${(props) => props.theme.space * 8}px;
`

const DashboardWrapper = styled.div``
export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Section>
        <Header>
          <Title>Jobs by organizations you have signaled</Title>
          <Button secondary to="/recommended">
            View More
          </Button>
        </Header>
        <OpportunitiesList />
      </Section>
      <Section>
        <Header>
          <Title>More relevant people in your industry</Title>
          <Button secondary>
            View More
          </Button>
        </Header>
        <ProfessionalsList />
      </Section>
    </DashboardWrapper>
  )
}
