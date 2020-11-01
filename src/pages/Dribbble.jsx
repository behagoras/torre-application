import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import queryString from 'query-string'
// import useGetDribbbleAuthToken from '../hooks/useGetDribbbleAuthToken'
import useGetDribbbleAuthToken from '../hooks/useGetDribbbleAuthToken'
import { dribbbleClientId, dribbbleRedirectUri } from '../config'

const DribbbleWrapper = styled.div``

export default function Dribbble() {
  const location = useLocation()
  const { code = '' } = queryString.parse(location.search)
  const [accessToken] = useGetDribbbleAuthToken(code)
  const callbackUrl = `https://dribbble.com/oauth/authorize?client_id=${dribbbleClientId}&redirect_uri=${dribbbleRedirectUri}&scope=public&state=246810`
  return (
    <DribbbleWrapper>
      {!accessToken ? (
        <>
          <a href={callbackUrl}>
            Connect dribbble account
          </a>
        </>
      ) : (
        <>
          AccessToken:
          {accessToken}
        </>
      )}

    </DribbbleWrapper>
  )
}
