import React from 'react'
import styled from 'styled-components'
import OpportunitiesList from '../components/OpportunitiesList'

const DashboardWrapper = styled.div``
export default function Dashboard() {
  return (
    <DashboardWrapper>
      <OpportunitiesList />
    </DashboardWrapper>
  )
}
