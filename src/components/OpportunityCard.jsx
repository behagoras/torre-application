/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import OpportunitiesService from '../services/opportunities'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'
import Button from './Button'

import Card from './Card'
import TextButton from './TextButton'

const OpportunityCardStyled = styled(Card)`
  overflow-x: hidden;
  font-size: 14px;
  color:${(props) => props.theme.colors.textCardLow};
`

const Cover = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100%;
  height: 117px;
  display:flex;
  justify-content: center;
  align-items: flex-end;
`

const Avatar = styled.img`
  max-width: 62px;
  max-height: 62px;
  border-radius: 50%;
  margin-bottom: -30px;
`

const Main = styled.div`
  margin-top: 30px;
  padding: ${(props) => props.theme.space * 2}px;

`
const Title = styled.h3`
  font-size: 16px;
  margin-bottom: ${(props) => props.theme.space * 2}px;
  color:${(props) => props.theme.colors.textCardHard};
`
const SignalArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-right: ${(props) => props.theme.space}px;
  }
`

const LocationWrapper = styled.p`
  display: flex;
  align-items:center;
  span {
    margin-right: ${(props) => props.theme.space}px;
  }
`

const Line = styled.p`
  display: flex;
  align-items: center;
  span {
    color: ${(props) => props.theme.colors.textCardHard};
  }
`

const Thumbnail = styled.img`
  max-width: 20px;
  max-height: 20px;
  border-radius: 50%;
  margin-left: ${(props) => props.theme.space}px;
`

const Footer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: ${(props) => props.theme.space * 4}px;
  justify-content: end;
  justify-items: end;
  padding: ${(props) => props.theme.space * 2}px ${(props) => props.theme.space * 4}px;
  align-items: center;

`

const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
`
export default function OpportunityCard({ id }) {
  const [opportunity, setOpportunity] = useState({
    attachments: [{ address: '' }],
    organizations: [{ picture: '', name: '' }],
    agreement: { type: '' },
    members: [{ person: { picture: '', username: '' } }],
  })
  const {
    organizations = [{ picture: '', name: '' }],
    attachments = [{ address: '' }],
    agreement = { type: '' },
  } = opportunity
  useEffect(() => {
    OpportunitiesService.get(id)
      .then((data) => {
        setOpportunity(data)
      })
  }, [])
  return (
    <OpportunityCardStyled>
      <CloseButton icon={<span className="material-icons">close</span>} />
      <Cover src={Array.isArray(attachments) && attachments[0].address}>
        <Avatar src={
          Array.isArray(organizations) ?
            organizations[0].picture : ''
        }
        />
      </Cover>
      <Main>
        <Title>{opportunity.objective}</Title>
        <SignalArea>
          <span>{organizations[0].name}</span>
          <Button
            text="signal"
            icon={<span className="material-icons">sports_handball</span>}
          />
        </SignalArea>
        <Line>
          {capitalizeFirstLetter(agreement.type)
            .replace(/-/gi, '/')}
        </Line>
        <LocationWrapper>
          <span className="material-icons">vpn_lock</span>
          Remote
        </LocationWrapper>
        <Line>
          USD:
          <span> $ 45,000 - 90,000 </span>
          /year
        </Line>
        <Line>
          Team Members:
          {opportunity.members.map((member) => <Thumbnail src={member.person.picture} alt={member.person.username} />)}
        </Line>
      </Main>
      <Footer>
        <TextButton><span className="material-icons">share</span></TextButton>
        <TextButton>Refer</TextButton>
        <TextButton>View</TextButton>
      </Footer>
    </OpportunityCardStyled>
  )
}
