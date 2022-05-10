import React from 'react'
import { Drawer } from '@mui/material'

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
      <Drawer
        anchor="left"
        open={true}
        onClose={onDrawerClick}
        className="theme__drawer"
      />
    </div>
  )
}

export default Theme
