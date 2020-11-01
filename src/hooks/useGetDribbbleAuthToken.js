import { useEffect, useState } from 'react'
import DribbbleService from '../services/dribbble'

export default function useGetDribbbleAuthToken(code) {
  const [accessToken, setAccessToken] = useState(null)
  useEffect(() => {
    DribbbleService.getAuthToken(code)
      .then(({ ok, accessToken }) => {
        if (ok)setAccessToken(accessToken)
      })
  }, [])
  return [accessToken]
}
