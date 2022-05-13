import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Product, AppState } from '../types'
import { addProduct, removeProduct } from '../redux/actions'

import Navigation from '../components/Navigation/Navigation'
import Theme from '../components/Theme/Theme'
import CountryTable from '../components/Country/CountryTable/CountryTable'

import { fetchAllCountries } from '../redux/actions'

import '../styles/home.scss'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const [search, setSearch] = useState('')
  const handleSearch = (keyword: string) => {
    setSearch(keyword)
  }

  const [drawerState, setDrawerState] = useState(false)
  const handleDrawerState = (state: boolean) => {
    setDrawerState(state)
  }
  return (
    <div className="home">
      <Navigation
        drawerState={drawerState}
        onClick={handleDrawerState}
        handleSearch={handleSearch}
      />
      <Theme state={drawerState} onClick={handleDrawerState} />
      <CountryTable search={search} />
    </div>
  )
}
