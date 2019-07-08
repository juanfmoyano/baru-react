import * as menuActions from 'store/actions/menu/actionTypes';

import initialState from './initialState';

export default function ui(state = initialState, action = {}) {
  switch (action.type) {
    case menuActions.OPEN_MENU:
      return {
        ...state,
        menuOpen: true,
      };
    case menuActions.CLOSE_MENU:
      return {
        ...state,
        menuOpen: false,
      };
    default:
      return state;
  }
}
