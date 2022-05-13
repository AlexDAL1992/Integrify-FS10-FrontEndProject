import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CountryTable from '../components/Country/CountryTable/CountryTable'
import ThemeContext from '../context/ThemeContext'

import { fetchAllCountries } from '../redux/actions'

import '../styles/home.scss'

export default function Home() {
  const { theme } = useContext(ThemeContext)

  const [search, setSearch] = useState('')
  const handleSearch = (keyword: string) => {
    setSearch(keyword)
  }

  return (
    <div className="home">
      <CountryTable />
    </div>
  )
}
