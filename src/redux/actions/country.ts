import { Dispatch } from 'redux'

import {
  CountriesAction,
  FETCH_ALL_COUNTRIES_LOADING,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_FAILURE,
} from '../../types'

export function fetchAllCountriesLoading(): CountriesAction {
  return {
    type: FETCH_ALL_COUNTRIES_LOADING,
  }
}

export function fetchAllCountriesSuccess(countries: []): CountriesAction {
  return {
    type: FETCH_ALL_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

export function fetchAllCountriesFailure(error: string): CountriesAction {
  return {
    type: FETCH_ALL_COUNTRIES_FAILURE,
    payload: error,
  }
}

export function fetchAllCountries() {
  return (dispatch: Dispatch) => {
    dispatch(fetchAllCountriesLoading())
    return fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((countries) => {
        dispatch(fetchAllCountriesSuccess(countries))
      })
      .catch((err) => {
        dispatch(fetchAllCountriesFailure(err))
      })
  }
}
