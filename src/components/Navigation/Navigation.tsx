import React from 'react'
import { ShoppingCart, Menu } from '@mui/icons-material'
import Search from '../Search/Search'
import './navigation.scss'

interface NavigationProps {
  drawerState: boolean
  onClick: Function
}

const Navigation = ({ drawerState, onClick }: NavigationProps) => {
  const onDrawerClick = () => {
    onClick(!drawerState)
  }

  return (
    <div className="navigation">
      <div className="navigation__content container">
        <div className="navigation__content-theme">
          <Menu onClick={onDrawerClick} />
        </div>
        <div className="navigation__content-title">Countries</div>
        <div className="navigation__content-search">
          <Search />
        </div>
        <div className="navigation__content-cart">
          <ShoppingCart />
          <div className="navigation__content-cart-count">10</div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
