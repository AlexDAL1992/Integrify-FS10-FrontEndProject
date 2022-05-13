import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Country,
} from '../../types'

export function addProduct(product: Country): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Country): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
  return (dispatch: Dispatch) => {
    return fetch(`products/${productId}`)
      .then((resp) => resp.json())
      .then((product) => {
        dispatch(addProduct(product))
      })
  }
}
