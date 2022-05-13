import React from 'react'
import { Input } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

import './search.scss'

type SearchProps = {
  handleSearch: Function
}

const Search = ({ handleSearch }: SearchProps) => {
  const handleInput = ({ target }: any) => {
    handleSearch(target.value)
  }
  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <Input
          onChange={handleInput}
          placeholder="Search..."
          disableUnderline
        />
        <SearchIcon />
      </div>
    </div>
  )
}

export default Search
