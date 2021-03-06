// import { apiBaseUrl } from '../config'

export default class UserService {
  static async get(username) {
    let data
    try {
      // const url = `${apiBaseUrl}/bio/?username=${username}`
      const url = 'https://torreapi3.behagoras.vercel.app/api/bio/taniazapata'
      const result = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
      })
      const _data = await result.json()
      return _data
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }
}
