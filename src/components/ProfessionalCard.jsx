import React from 'react'
import styled from 'styled-components'
import getWeight from '../utils/getWeight'
import Button from './Button'
import Card from './Card'
import TextButton from './TextButton'

const ProfessionalCardStyled = styled(Card)`
  overflow-x: hidden;
  font-size: 14px;
  color:${(props) => props.theme.colors.textCardLow};
`

const Header = styled.div`
  width: 100%;
  display:flex;
  justify-content: center;
  align-items: flex-start;
`

const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  margin-bottom: -30px;
  background: rgba(100, 100, 100, .3)
`

const Main = styled.div`
  margin-top: 30px;
  padding: ${(props) => props.theme.space * 2}px;
`

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: ${(props) => props.theme.space * 2}px;
  color:${(props) => props.theme.colors.textCardHard};
  display:inline;
`

const SignalArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-right: ${(props) => props.theme.space}px;
  }
`

const Line = styled.p`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.space * 3}px 0;
  span {
    color: ${(props) => props.theme.colors.textCardHard};
  }
`

export default function ProfessionalCard({ professional }) {
  return (
    <ProfessionalCardStyled>
      <Header>
        <Avatar src={professional.picture} alt={professional.name} />
      </Header>
      <Main>
        <Title>
          {professional.name}
          <span className="material-icons">weight</span>
          {getWeight(professional.weight)}
        </Title>
        <Line>
          {professional.professionalHeadline}
        </Line>
        <SignalArea>
          <Button
            text="signal"
            icon={<span className="material-icons">sports_handball</span>}
          />
        </SignalArea>
        <Line>
          <TextButton center>View Genome</TextButton>
        </Line>
      </Main>
    </ProfessionalCardStyled>
  )
}
