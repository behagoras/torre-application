const getWeight = (w) => {
  const weight = w
  if (weight > 1000) return `${Math.round(weight / 1000)}K`
  return `${Math.round(weight)}`
}

export default getWeight
