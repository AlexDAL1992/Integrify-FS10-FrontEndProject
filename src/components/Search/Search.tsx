import React from 'react'
import { useDispatch } from 'react-redux'
import { Input } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

import { setSearchKeyword } from '../../redux/actions'
import './search.scss'

const Search = () => {
  const dispatch = useDispatch()
  const handleInput = ({ target }: any) => {
    dispatch(setSearchKeyword(target.value))
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
