import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProfessionalsService from '../services/professionals'
import ProfessionalCard from './ProfessionalCard'

const ProfessionalsListStyled = styled.section`
  display: flex;
  overflow-x: scroll;
`

export default function ProfessionalsList() {
  const [professionals, setProfessionals] = useState([])
  useEffect(() => {
    ProfessionalsService.getAll()
      .then((data) => { setProfessionals(data) })
  }, [])
  return (
    <ProfessionalsListStyled>
      {professionals.map((professional) => <ProfessionalCard professional={professional} />)}
    </ProfessionalsListStyled>
  )
}
