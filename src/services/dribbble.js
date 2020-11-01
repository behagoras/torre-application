import Axios from 'axios'
import { dribbbleAccessToken, dribbbleGetUserActive, ENV, ENVIRONMENTS } from '../config/index'

export default class DribbbleService {
  static async get() {
    let data
    try {
      if (ENV !== ENVIRONMENTS.local) {
        // TODO: connect to backend
        data = {}
      } else {
        data = conversationsMock
      }
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }

  static async getAuthToken(code) {
    let data
    if (dribbbleGetUserActive) {
      const urlPrefix = 'https://dribbble.com/oauth/token'
      const fullUrl = `${urlPrefix}?client_id=${dribbbleClientId}&client_secret=${dribbbleClientSecret}&code=${code}&redirect_uri=${dribbbleRedirectUri}`
      const config = {
        method: 'post',
        url: fullUrl,
        cors: 'no-cors',
        crossdomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      try {
        const response = await Axios(config)
        data = JSON.stringify(response.data)
      } catch (error) {
        data = { 'ok': false }
        console.error(err)
      }

    } else {
      data = {
        ok: true,
        accessToken: dribbbleAccessToken,
      }
    }
    return data
  }
}
