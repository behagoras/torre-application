import { useEffect, useState } from 'react'
import OpportunitiesService from '../services/opportunities'

export default function useGetOpportunities() {
  const [opportunities, setOpportunities] = useState([])
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
  return {
    opportunities,
    setOpportunities,
    unwantedOpportunities,
    setUnwantedOpportunities,
    getOpportunities,
  }
}
