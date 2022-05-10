import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState } from '../types'
import { addProduct, removeProduct } from '../redux/actions'

import Navigation from '../components/Navigation/Navigation'
import Theme from '../components/Theme/Theme'

import '../styles/home.scss'

const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export default function Home() {
  const dispatch = useDispatch()
  const products = useSelector((state: AppState) => state.product.inCart)

  const handleAddProduct = () => {
    const product: Product = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      price: +(Math.random() * 10).toFixed(2),
    }
    dispatch(addProduct(product))
  }

  const [drawerState, setDrawerState] = useState(false)
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }

  return (
    <div className="home">
      {/* <h1>Home page</h1>
      {products.length <= 0 && <div>No products in cart</div>}
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{`${p.name} - $${p.price}`}</Link>
            <button onClick={() => dispatch(removeProduct(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Add product</button> */}

      <Navigation drawerState={drawerState} onClick={handleDrawerState} />
      <Theme state={drawerState} onClick={handleDrawerState} />
    </div>
  )
}
