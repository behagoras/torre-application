/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import Button from '../components/Button'
import OpportunityCard from '../components/OpportunityCard'
import OpportunitiesService from '../services/opportunities'
import useGetOpportunities from '../hooks/useGetOpportunities'

const RecommendedJobsStyled = styled.div`
  max-width: 100vw;
`
const Header = styled.div`
  display:flex;
  align-content: center;
  align-items: center;
`
const Title = styled.h1`
  margin-left:${(props) => props.theme.space * 2}px;
`
const Main = styled.main``
const OpportunitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${(props) => props.theme.cardWidth}px, 1fr));
  grid-gap: ${(props) => props.theme.space * 3}px;
`

export default function RecommendedJobs() {
  const {
    opportunities,
    unwantedOpportunities,
    setUnwantedOpportunities,
  } = useGetOpportunities()
  return (
    <RecommendedJobsStyled>
      <Header>
        <Button to="/"><span className="material-icons">arrow_left</span></Button>
        <Title>
          Recommended Jobs
        </Title>
      </Header>
      <Main>
        <OpportunitiesWrapper>
          { opportunities
            .map((opportunity) => {
              console.log('RecommendedJobs -> opportunity', opportunity)
              return (
                <OpportunityCard
                  unwantedOpportunities={unwantedOpportunities}
                  setUnwantedOpportunities={setUnwantedOpportunities}
                  id={opportunity.id}
                  key={opportunity.id}
                  close={true}
                />
              )
            })}
        </OpportunitiesWrapper>
      </Main>
    </RecommendedJobsStyled>
  )
}
