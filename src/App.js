import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Navigation from './components/Navigation'
import routes from './routes'
import themes from './styled/themes/index'

export default function App() {
  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = () => setTheme(theme === themes.light ? themes.dark : themes.light)
  if (false)toggleTheme
  const getPath = (route) => `${route.layout !== '/' ? route.layout : ''}${route.path}`
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navigation />
          <Switch>
            {
              routes.map((route) => {
                const path = getPath(route)
                return (
                  <Route
                    path={path}
                    exact={route.exact}
                    key={`route${route.layout}${route.path}`}
                    component={route.component}
                  />
                )
              })
            }
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

