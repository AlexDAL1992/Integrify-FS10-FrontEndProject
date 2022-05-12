import React from 'react'
import { Button, TableRow, TableCell } from '@mui/material'

import './country-row.scss'

type CountryRowProps = {
  row: {
    id: string
    flag: string
    name: string
    languages: string
    population: number
    region: string
  }
}

const CountryRow = (props: any) => {
  return (
    <TableRow>
      <TableCell>
        <img src={props.row.flag} alt={props.row.name} />
      </TableCell>
      <TableCell align="right">{props.row.name}</TableCell>
      <TableCell align="right">{props.row.languages}</TableCell>
      <TableCell align="right">{props.row.population}</TableCell>
      <TableCell align="right">{props.row.region}</TableCell>
      <TableCell align="right">
        <Button>ADD</Button>
      </TableCell>
    </TableRow>
  )
}

export default CountryRow
