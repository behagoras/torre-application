import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavigationWrapper = styled.nav``
const routes = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Dribbble',
    to: '/dribbble',
  },
]

export default function Navigation() {
  return (
    <NavigationWrapper>
      <ul>
        {routes.map((route) => (
          <li key={route.to}>
            <Link to={route.to}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </NavigationWrapper>
  )
}
