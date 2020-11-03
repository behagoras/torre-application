import React from 'react'
import styled from 'styled-components'
import useGetOpportunities from '../hooks/useGetOpportunities'
// import useGetUser from '../hooks/useGetUser'
import OpportunityCard from './OpportunityCard'

const OpportunitiesListStyled = styled.div`
  display: flex;
  overflow-x: scroll;
`

export default function OpportunitiesList() {
  // const [user] = useGetUser()
  const {
    opportunities,
    unwantedOpportunities,
    setUnwantedOpportunities,
  } = useGetOpportunities()
  return (
    <OpportunitiesListStyled>
      {opportunities.map((opportunity) => {
        console.log('OpportunitiesList -> opportunity', opportunity)
        return (
          <OpportunityCard
            unwantedOpportunities={unwantedOpportunities}
            setUnwantedOpportunities={setUnwantedOpportunities}
            id={opportunity.id}

          >
            Card
          </OpportunityCard>
        )
      })}
    </OpportunitiesListStyled>
  )
}
