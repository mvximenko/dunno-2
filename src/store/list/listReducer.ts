import { SET_LIST, ListActionsTypes, FetchList } from './listTypes';

export default function listReducer(
  state: FetchList,
  action: ListActionsTypes
): FetchList {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        titles: [...state.titles, action.titles],
        networks: [...state.networks, action.network],
      };
    default:
      return state;
  }
}
