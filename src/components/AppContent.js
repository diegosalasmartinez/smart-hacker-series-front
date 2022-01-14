import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CContainer, CSpinner } from '@coreui/react'

import { allRoutes } from '../routes'

const AppContent = () => {
  const routes = allRoutes;
  const redirect = routes.length > 0 ? routes[1].path : "/";

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            )
          })}
          <Redirect from="/" to={redirect} />
        </Switch>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
