import Axios from 'axios'
import { dribbbleAccessToken, dribbbleGetUserActive } from '../config/index'

export default class DribbbleService {
  constructor() {
    this.urlPrefix = 'https://dribbble.com/oauth/token'
  }

  static async getAuthToken(code) {
    let data
    if (dribbbleGetUserActive) {
      const urlPrefix = 'https://dribbble.com/oauth/token'
      const baseUrl = `${urlPrefix}/token`
      const fullUrl = `${baseUrl}?client_id=${dribbbleClientId}&client_secret=${dribbbleClientSecret}&code=${code}&redirect_uri=${dribbbleRedirectUri}`
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

  static async getShots() {
    let data
    try {
      // toDo save access token into localStorage
      const response2 = await this.getAuthToken()
      const { accessToken } = response2
      const fullUrl = 'https://api.dribbble.com/v2/user/shots'
      console.log('DribbbleService -> getShots -> fullUrl', fullUrl)
      const config = {
        method: 'get',
        url: fullUrl,
        cors: 'no-cors',
        crossdomain: true,
        Authorization: `Bearer ${accessToken}`,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      const response = await Axios(config)
      data = JSON.stringify(response.data)
    } catch (err) {
      data = { 'ok': false }
      console.error(err)
    }
    return data
  }

}
