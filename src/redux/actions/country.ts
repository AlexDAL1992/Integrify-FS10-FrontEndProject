import {
  Country,
  FetchAllCountriesAction,
  FETCH_ALL_COUNTRIES,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_FAILURE,
} from '../../types'

export function fetchAllCountries(): FetchAllCountriesAction {
  return {
    type: FETCH_ALL_COUNTRIES,
  }
}

export function fetchAllCountriesSuccess(countries: Country[]): any {
  return {
    type: FETCH_ALL_COUNTRIES_SUCCESS,
    payload: countries,
  }
}

export function fetchAllCountriesFailure(error: string): any {
  return {
    type: FETCH_ALL_COUNTRIES_FAILURE,
    payload: error,
  }
}
