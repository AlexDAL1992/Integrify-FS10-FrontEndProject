import {
  TOGGLE_DIALOG,
  UPDATE_SEARCH_KEYWORD,
  UiState,
  UiActions,
} from '../../types'

const defaultState: UiState = {
  searchKeyword: '',
  dialogOpen: {},
}

export default function ui(
  state: UiState = defaultState,
  action: UiActions
): UiState {
  switch (action.type) {
  case TOGGLE_DIALOG: {
    return {
      ...state,
      dialogOpen: {
        ...state.dialogOpen,
        [action.payload.dialog]: !state.dialogOpen[action.payload.dialog],
      },
    }
  }

  case UPDATE_SEARCH_KEYWORD: {
    return {
      ...state,
      searchKeyword: action.payload,
    }
  }

  default:
    return state
  }
}
