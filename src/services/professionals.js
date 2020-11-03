import persons from '../mocks/persons.mock.json'
import person from '../mocks/person.mock.json'

export default class ProfessionalsService {
  static async getAll() {
    let data
    try {
      data = persons
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }

  static async get(id) {
    let data
    try {
      data = person
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }
}
