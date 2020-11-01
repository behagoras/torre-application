import Axios from 'axios'
import { useEffect, useState } from 'react'
import { clientId, clientSecret, redirectUri, dribbbleAccessToken, dribbbleGetUserActive } from '../config/index'

export default function useGetDribbbleAuthToken(code) {
  const [accessToken, setAccessToken] = useState(null)
  const fetchData = () => {
    console.log('fetchData -> dribbbleGetUserActive', dribbbleGetUserActive)
    if (dribbbleGetUserActive) {
      const urlPrefix = 'https://dribbble.com/oauth/token'
      const fullUrl = `${urlPrefix}?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`
      const config = {
        method: 'post',
        url: fullUrl,
        cors: 'no-cors',
        crossdomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
      return Axios(config)
        .then((response) => {
          const data = JSON.stringify(response.data)
          console.log('useGetDribbbleAuthToken -> response', response)
          console.log('useGetDribbbleAuthToken -> data', data)
          setAccessToken(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    setAccessToken(dribbbleAccessToken)
    console.log('fetchData -> dribbbleAccessToken', dribbbleAccessToken)
  }
  useEffect(() => {
    fetchData()
    // console.log(fetchData)
  }, [])
  return [accessToken]
}
