import React from 'react'
import { Input } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

import './search.scss'

const Search = () => {
  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <Input placeholder="Search..." disableUnderline />
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search
