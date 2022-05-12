import React from 'react'
import { MouseEvent } from 'react'
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import { HeadCell, Order } from '../utilities'
import { Country } from '../../../types'

interface TableProps {
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Country) => void
  order: Order
  orderBy: string
}

const headCells: readonly HeadCell[] = [
  {
    id: 'flag',
    label: 'Flag',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'languages',
    label: 'Languages',
  },
  {
    id: 'population',
    label: 'Population',
  },
  {
    id: 'region',
    label: 'Region',
  },
]

const CountryTableHead = (props: TableProps) => {
  const { order, orderBy, onRequestSort } = props
  const createSortHandler =
    (property: keyof Country) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  )
}

export default CountryTableHead
