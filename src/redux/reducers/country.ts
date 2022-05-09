import {
  FETCH_ALL_COUNTRIES,
  FETCH_ALL_COUNTRIES_SUCCESS,
  FETCH_ALL_COUNTRIES_FAILURE,
  CountryState,
} from '../../types'

export default function country(
  state: CountryState = {
    countries: [],
    isLoading: false,
    error: '',
  },
  action: any
) {
  switch (action.type) {
  case FETCH_ALL_COUNTRIES:
    return {
      ...state,
      isLoading: true,
    }

  case FETCH_ALL_COUNTRIES_SUCCESS:
    return {
      ...state,
      isLoading: false,
      countries: action.payload,
      error: '',
    }

  case FETCH_ALL_COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    }

  default:
    return state
  }
}
