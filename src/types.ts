// Product action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Country action types
export const FETCH_ALL_COUNTRIES_LOADING = 'FETCH_ALL_COUNTRIES_LOADING'
export const FETCH_ALL_COUNTRIES_SUCCESS = 'FETCH_ALL_COUNTRIES_SUCCESS'
export const FETCH_ALL_COUNTRIES_FAILURE = 'FETCH_ALL_COUNTRIES_FAILURE'

// UI types
export const UPDATE_SEARCH_KEYWORD = 'UPDATE_SEARCH_KEYWORD'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// Product type and its action types
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Country
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Country
  }
}

export type SetSearchKeywordAction = {
  type: typeof UPDATE_SEARCH_KEYWORD
  payload: string
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction | SetSearchKeywordAction

// Country type and its action types
export type Country = {
  [key: string]: any
}

export type FetchAllCountriesLoadingAction = {
  type: typeof FETCH_ALL_COUNTRIES_LOADING
  payload?: string
}

export type FetchAllCountriesSuccessAction = {
  type: typeof FETCH_ALL_COUNTRIES_SUCCESS
  payload: Country[]
}

export type FetchAllCountriesFailureAction = {
  type: typeof FETCH_ALL_COUNTRIES_FAILURE
  payload: string
}

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type CountriesAction =
  | FetchAllCountriesLoadingAction
  | FetchAllCountriesSuccessAction
  | FetchAllCountriesFailureAction

// state types
export type ProductState = {
  inCart: Country[]
}

export type CountryState = {
  countries: Country[]
  isLoading: boolean
  error: string
}

// Using dynamic keys from an enum
export type UiState = {
  searchKeyword: string
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  country: CountryState
}
