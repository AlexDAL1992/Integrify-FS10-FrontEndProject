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
} from '@mui/material'

import { createCountry, Order, stableSort, getComparator } from '../utilities'

import { Country } from '../../../types'
// import CountryTableHead from '../CountryTableHead/CountryTableHead'
// import CountryRow from '../CountryRow/CountryRow'

import './country-table.scss'
import { copyFileSync } from 'fs'

const rows = [
  createCountry(
    'aaa',
    'https://flagcdn.com/w320/gu.png',
    'Afghanistan',
    'Pashto, Uzbek, Turkmen',
    27657145,
    'Asia'
  ),
  createCountry(
    'bbb',
    'https://flagcdn.com/w320/gu.png',
    'Albania',
    'Albanian',
    2886026,
    'Europe'
  ),
  createCountry(
    'ccc',
    'https://flagcdn.com/w320/gu.png',
    'Algeria',
    'Arabic',
    40400000,
    'Africa'
  ),
  createCountry(
    'ddd',
    'https://flagcdn.com/w320/gu.png',
    'Afghanistan',
    'Pashto, Uzbek, Turkmen',
    27657145,
    'Asia'
  ),
  createCountry(
    'eee',
    'https://flagcdn.com/w320/gu.png',
    'Albania',
    'Albanian',
    2886026,
    'Europe'
  ),
  createCountry(
    'fff',
    'https://flagcdn.com/w320/gu.png',
    'Algeria',
    'Arabic',
    40400000,
    'Africa'
  ),
  createCountry(
    'ggg',
    'https://flagcdn.com/w320/gu.png',
    'Afghanistan',
    'Pashto, Uzbek, Turkmen',
    27657145,
    'Asia'
  ),
  createCountry(
    'hhh',
    'https://flagcdn.com/w320/gu.png',
    'Albania',
    'Albanian',
    2886026,
    'Europe'
  ),
  createCountry(
    'iii',
    'https://flagcdn.com/w320/gu.png',
    'Algeria',
    'Arabic',
    40400000,
    'Africa'
  ),
]

const CountryTable = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const countries = useSelector((state: AppState) => state.country.countries)
  const isLoading = useSelector((state: AppState) => state.country.isLoading)

  /* const countryList = countries.map((country) => {
    let languages = []
    for (const lang in country.languages) {
      languages.push(country.languages[lang])
    }
    return {
      id: country.cca3,
      flag: country.flags.png,
      name: country.name.common,
      languages: languages,
      population: country.population,
      region: country.region,
    }
  }) */

  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<keyof Country>('name')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Country
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  return (
    <Box className="table" sx={{ width: '80%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            {/* <CountryTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            /> */}
            <TableHead>
              <TableRow>
                <TableCell align={'center'} padding={'normal'}>
                  Flag
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  Name
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  Languages
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  Population
                </TableCell>
                <TableCell align={'center'} padding={'normal'}>
                  Region
                </TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {/*{stableSort(countryList, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)*/}
              {isLoading && <p>Loading countries, please wait...</p>}

              {!isLoading &&
                countries &&
                countries.map((row) => {
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
                        <Button onClick={() => dispatch(addProduct(row))}>
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
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export default CountryTable
