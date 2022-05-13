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
        const countryList = countries.map(
          (country: {
            languages: { [x: string]: any }
            cca3: any
            flags: { png: any }
            name: { common: any }
            population: any
            region: any
          }) => {
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
          }
        )
        dispatch(fetchAllCountriesSuccess(countryList))
      })
      .catch((err) => {
        dispatch(fetchAllCountriesFailure(err))
      })
  }
}
