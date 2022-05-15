import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

import { AppState } from '../types'
import { fetchAllCountries, addProduct } from '../redux/actions'

import '../styles/product.scss'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const dispatch = useDispatch()

  const cart = useSelector((state: AppState) => state.product.inCart)
  const countries = useSelector((state: AppState) => state.country.countries)
  const country = countries.find((p) => p.id === id)

  useEffect(() => {
    dispatch(fetchAllCountries)
  }, [dispatch])

  const [currentCountry, setCurrentCountry] = useState(country)
  useEffect(() => {
    setCurrentCountry(country)
  }, [countries, country, id])

  return (
    <div className="country-page">
      {!currentCountry && (
        <div>
          <h2>Country is not found!</h2>
        </div>
      )}

      {currentCountry && (
        <div className="country-page__detail">
          <img src={currentCountry.flag} alt={currentCountry.name} />
          <h2>{currentCountry.name}</h2>
          <h3>
            Population: {currentCountry.population.toLocaleString('en-US')}
          </h3>
          <h3>Languages: {currentCountry.languages.toString()}</h3>
          <h3>Region: {currentCountry.region}</h3>
          <Button
            onClick={() => dispatch(addProduct(currentCountry))}
            disabled={cart.includes(currentCountry)}
          >
            ADD TO CART
          </Button>
        </div>
      )}

      <Button onClick={() => history.push('/')}>BACK TO HOME</Button>
    </div>
  )
}
