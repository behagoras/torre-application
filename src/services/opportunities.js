import opportunities from '../mocks/opportunities.mock.json'
import opportunity from '../mocks/opportunity.mock.json'

export default class OpportunitiesService {
  static async getAll() {
    let data
    try {
      data = opportunities.results
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }

  static async get(id) {
    let data
    try {
      data = opportunity
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }
}
