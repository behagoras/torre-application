import React from 'react'
import styled from 'styled-components'
import useGetUser from '../hooks/useGetUser'

const OpportunitiesListStyled = styled.div``

export default function OpportunitiesList() {
  const [user] = useGetUser()
  console.log(user)
  return (
    <OpportunitiesListStyled>
      Oportunities
    </OpportunitiesListStyled>
  )
}
