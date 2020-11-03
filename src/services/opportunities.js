
export default class OpportunitiesService {
  static async getAll() {
    let data
    try {
      const response = await fetch('https://torreapi3.behagoras.vercel.app/api/search/opportunities', {
        method: 'POST',
        headers: {
          body: { currency: 'MXN', page: 0, periodicity: 'hourly', lang: 'en', size: 20, aggregate: false, offset: 10 },
        },
      })
      const json = await response.json()
      data = json.results
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }

  static async get(id) {
    let data
    try {
      const url = `https://torreapi3.behagoras.vercel.app/api/opportunities/${id}`
      const response = await fetch(url)
      const json = await response.json()
      data = json
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }
}
