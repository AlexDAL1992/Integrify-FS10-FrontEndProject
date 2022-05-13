import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Menu, MenuItem, Fade } from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Country } from '../../types'
import { removeProduct } from '../../redux/actions'
import './cart.scss'

type CartProps = {
  cart: Country[]
  onClick: Function
  open: boolean
  anchorElement: null | HTMLElement
}

const Cart = ({ cart, onClick, open, anchorElement }: CartProps) => {
  const dispatch = useDispatch()

  return (
    <div className="cart">
      <Menu
        className="cart__menu"
        id="fade-menu"
        anchorEl={anchorElement}
        keepMounted
        open={open}
        onClose={() => onClick()}
        TransitionComponent={Fade}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="cart__list">
          <h3>Cart List</h3>
          {cart.length === 0 && (
            <div className="cart__empty">
              <h3>Cart is empty</h3>
            </div>
          )}
          {cart &&
            cart.map((country) => (
              <div key={country.id} className="cart__item">
                <img src={country.flag} alt={country.name} />
                <h3>{country.name}</h3>
                <Delete
                  className="cart__delete"
                  onClick={() => dispatch(removeProduct(country))}
                />
              </div>
            ))}
        </div>
      </Menu>
    </div>
  )
}

export default Cart
