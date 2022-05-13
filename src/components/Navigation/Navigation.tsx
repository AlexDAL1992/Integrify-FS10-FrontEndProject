import React from 'react'
import { useSelector } from 'react-redux'
import { useState, MouseEvent } from 'react'
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material'

import Search from '../Search/Search'
import { AppState } from '../../types'

import Cart from '../Cart/Cart'
import './navigation.scss'

interface NavigationProps {
  drawerState: boolean
  onClick: Function
  handleSearch: Function
}

const Navigation = ({
  drawerState,
  onClick,
  handleSearch,
}: NavigationProps) => {
  const onDrawerClick = () => {
    onClick(!drawerState)
  }

  const cart = useSelector((state: AppState) => state.product.inCart)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="navigation">
      <div className="navigation__content container">
        <div className="navigation__content-theme">
          <MenuIcon onClick={onDrawerClick} />
        </div>
        <div className="navigation__content-title">Countries</div>
        <div className="navigation__content-search">
          <Search handleSearch={handleSearch} />
        </div>
        <button className="navigation__content-cart" onClick={handleClick}>
          <ShoppingCart />
          <div className="navigation__content-cart-count">
            {cart && cart.length}
          </div>
        </button>
        <Cart
          cart={cart}
          open={open}
          anchorElement={anchorEl}
          onClick={handleClose}
        />
      </div>
    </div>
  )
}

export default Navigation
