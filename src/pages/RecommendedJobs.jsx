/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import OpportunityCard from '../components/OpportunityCard'
import OpportunitiesService from '../services/opportunities'

const RecommendedJobsStyled = styled.div`
  max-width: 100vw;
`
const Header = styled.div``
const Title = styled.h1``
const Main = styled.main``
const OpportunitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${(props) => props.theme.cardWidth}px, 1fr));
  grid-gap: ${(props) => props.theme.space * 3}px;
`

export default function RecommendedJobs() {
  const [opportunities, setOpportunities] = useState([{}])
  const [unwantedOpportunities, setUnwantedOpportunities] = useState({})
  const getOpportunities = async () => {
    const data = await OpportunitiesService.getAll()
    setOpportunities(data)
  }
  useEffect(() => {
    getOpportunities()
  }, [])
  useEffect(() => {
    const newOpportunities = []
    opportunities.forEach((opportunity) => {
      if (typeof unwantedOpportunities[opportunity.id] === 'undefined') {
        newOpportunities.push(opportunity)
      }
    })
    setOpportunities(newOpportunities)
  }, [unwantedOpportunities])
  return (
    <RecommendedJobsStyled>
      <Header>
        <Title>Recommended Jobs</Title>
      </Header>
      <Main>
        <OpportunitiesWrapper>
          { opportunities
            .map((opportunity) => (
              <OpportunityCard
                unwantedOpportunities={unwantedOpportunities}
                setUnwantedOpportunities={setUnwantedOpportunities}
                id={opportunity.id}
                key={opportunity.id}
              />
            ))}
        </OpportunitiesWrapper>
      </Main>
    </RecommendedJobsStyled>
  )
}
