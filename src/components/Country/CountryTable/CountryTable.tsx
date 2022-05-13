// import React from 'react'
import React from 'react'
import { useState, useEffect, MouseEvent, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, fetchAllCountries } from '../../../redux/actions'
import { AppState } from '../../../types'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TablePagination,
  Paper,
  Button,
  TableHead,
  TableSortLabel,
} from '@mui/material'
import _ from 'lodash'
import CountryPagination from '../CountryPagination/CountryPagination'

import './country-table.scss'

const CountryTable = () => {
  // using redux to load data from api
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const countries = useSelector((state: AppState) => state.country.countries)
  const isLoading = useSelector((state: AppState) => state.country.isLoading)
  const cart = useSelector((state: AppState) => state.product.inCart)

  // using react hooks to search for countries
  const keyword = useSelector((state: AppState) => state.ui.searchKeyword)
  const [searchedCountries, setSearchedCountries] = useState(countries)

  useEffect(() => {
    setSearchedCountries(countries)
  }, [countries])

  useEffect(() => {
    const tempList = countries.filter((country) =>
      country.name.toLowerCase().includes(keyword.toLowerCase())
    )
    setSearchedCountries(tempList)
  }, [keyword, countries])

  // using react hooks to sort countries in table
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const handleSortByName = ({ target }: MouseEvent<HTMLElement>) => {
    if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      setSortOrder('asc')
    }
    const temp = _.orderBy(searchedCountries, ['name'], [sortOrder]) as []
    setPaginatedList(temp)
  }

  const handleSortByPopulation = ({ target }: MouseEvent<HTMLElement>) => {
    if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      setSortOrder('asc')
    }
    const temp = _.orderBy(searchedCountries, ['population'], [sortOrder]) as []
    setPaginatedList(temp)
  }

  const handleSortByRegion = ({ target }: MouseEvent<HTMLElement>) => {
    if (sortOrder === 'asc') {
      setSortOrder('desc')
    } else if (sortOrder === 'desc') {
      setSortOrder('asc')
    }
    const temp = _.orderBy(searchedCountries, ['region'], [sortOrder]) as []
    setPaginatedList(temp)
  }

  // using react hooks to set pagination for the table

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [paginatedList, setPaginatedList] = useState(countries)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    const paginated = searchedCountries.slice(
      page * rowsPerPage,
      (page + 1) * rowsPerPage
    )
    setPaginatedList(paginated)
  }, [page, rowsPerPage, searchedCountries])

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - searchedCountries.length)
      : 0

  return (
    <Box className="table" sx={{ width: '80%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <TableHead>
              <TableRow>
                <TableCell align={'center'} padding={'normal'}>
                  Flag
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  <TableSortLabel
                    direction={sortOrder}
                    onClick={handleSortByName}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  Languages
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  <TableSortLabel
                    direction={sortOrder}
                    onClick={handleSortByPopulation}
                  >
                    Population
                  </TableSortLabel>
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  <TableSortLabel
                    direction={sortOrder}
                    onClick={handleSortByRegion}
                  >
                    Region
                  </TableSortLabel>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <p>Loading countries, please wait...</p>
                  </TableCell>
                </TableRow>
              )}

              {!isLoading &&
                paginatedList &&
                paginatedList.map((row) => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell align={'center'} padding={'normal'}>
                        <img src={row.flag} alt={row.name} />
                      </TableCell>
                      <TableCell align={'center'} padding={'normal'}>
                        {row.name}
                      </TableCell>
                      <TableCell align={'center'} padding={'normal'}>
                        <ul>
                          {row.languages.map((lang: any) => (
                            <li key={lang}>{lang}</li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell align={'center'} padding={'normal'}>
                        {row.population.toLocaleString('en-US')}
                      </TableCell>
                      <TableCell align={'center'} padding={'normal'}>
                        {row.region}
                      </TableCell>
                      <TableCell align={'center'} padding={'normal'}>
                        <Button
                          disabled={cart.includes(row)}
                          onClick={() => dispatch(addProduct(row))}
                        >
                          ADD
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          colSpan={3}
          count={searchedCountries.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              'aria-label': 'rows per page',
            },
            native: true,
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={CountryPagination}
        />
      </Paper>
    </Box>
  )
}

export default CountryTable
