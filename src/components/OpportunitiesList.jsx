import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import useGetUser from '../hooks/useGetUser'
import OpportunitiesService from '../services/opportunities'
import OpportunityCard from './OpportunityCard'

const OpportunitiesListStyled = styled.div`
  display: flex;
  overflow-x: scroll;
`

export default function OpportunitiesList() {
  // const [user] = useGetUser()
  const [opportunities, setOpportunities] = useState([{
    id: '',
  }])
  useEffect(() => {
    OpportunitiesService.getAll()
      .then((data) => {
        setOpportunities(data)
      })
  }, [])
  return (
    <OpportunitiesListStyled>
      {opportunities.map((opportunity) => <OpportunityCard id={opportunity.id}>Card</OpportunityCard>)}
    </OpportunitiesListStyled>
  )
}
