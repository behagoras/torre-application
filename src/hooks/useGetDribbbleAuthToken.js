import { useEffect, useState } from 'react'
import { clientId, clientSecret, redirectUri } from '../config/index'

export default function useGetDribbbleAuthToken(code) {
  const [data, setData] = useState(null)
  const requestOptions = {
    method: 'POST',
    // mode: 'no-cors',
    redirect: 'follow',
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const urlPrefix = 'https://dribbble.com/oauth/token'
  const fullUrl = `${urlPrefix}?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`
  const fetchData = () => fetch(fullUrl, requestOptions)
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      setData(data)
    })
    .catch((error) => console.log('error', error))
  useEffect(() => {
    fetchData()
  }, [])
  return [data]
}
