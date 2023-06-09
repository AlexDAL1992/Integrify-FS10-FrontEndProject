import React from 'react'
import { Button, Drawer } from '@mui/material'
import { Close } from '@mui/icons-material'

import './theme.scss'

interface DrawerProps {
  state: boolean
  onClick: Function
}

const Theme = ({ state, onClick }: DrawerProps) => {
  const onDrawerClick = () => {
    onClick(!state)
  }

  return (
    <div className="theme">
      <Drawer anchor="left" open={state} className="theme__drawer">
        <div className="theme__drawer-content">
          <div className="theme__drawer-title">
            <Close onClick={onDrawerClick} />
            <h3>THEMES</h3>
          </div>
          <div className="theme__drawer-menu">
            <ul>
              <li>
                <Button>Light</Button>
              </li>
              <li>
                <Button>Dark</Button>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Theme
