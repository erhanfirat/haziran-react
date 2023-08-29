import { titleActions } from "../actions/titleActions";

const titleStateInitial = "Merhaba Redux!";

export function titleReducer(state = titleStateInitial, action) {
  switch (action.type) {
    case titleActions.changeTitle:
      return action.payload;

    default:
      return state;
  }
}
