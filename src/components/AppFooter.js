import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div style={{fontSize: '15px'}}>
        Developed by Diego Salas M. & Jeferson Miranda G.
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
