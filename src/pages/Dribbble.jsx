import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import queryString from 'query-string'
// import useGetDribbbleAuthToken from '../hooks/useGetDribbbleAuthToken'
import useGetDribbbleAuthToken from '../hooks/useGetDribbbleAuthToken'
import { clientId, redirectUri } from '../config'

const DribbbleWrapper = styled.div``

export default function Dribbble() {
  const location = useLocation()
  const { code = '' } = queryString.parse(location.search)
  const [data] = useGetDribbbleAuthToken(code)
  const callbackUrl = `https://dribbble.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=public&state=246810`
  return (
    <DribbbleWrapper>
      {!data ? (
        <p>
          <a href={callbackUrl}>
            Connect dribbble account
          </a>
        </p>
      ) : (
        <pre>
          Data:
          {JSON.stringify(data)}
        </pre>
      )}

    </DribbbleWrapper>
  )
}
