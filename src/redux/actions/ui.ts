import {
  TOGGLE_DIALOG,
  UPDATE_SEARCH_KEYWORD,
  ToggleDialogAction,
  SetSearchKeywordAction,
  DialogType,
} from '../../types'

export function setSearchKeyword(keyword: string): SetSearchKeywordAction {
  return {
    type: UPDATE_SEARCH_KEYWORD,
    payload: keyword,
  }
}

export function toggleDialog(dialog: DialogType): ToggleDialogAction {
  return {
    type: TOGGLE_DIALOG,
    payload: {
      dialog,
    },
  }
}
