import { titleActions } from "../actions/titleActions";

const titleStateInitial = "Merhaba Yazılım Dünyası!";

/**
 * Reducer function aldığı action objesine göre işlem yapar ve yeni state değerini döndürür
 *
 * @param {?} state global store içindeki data
 * @param {Object} action { type, payload } olan bir JS Objesi
 * @returns yeni state değeri
 */

export function titleReducer(state = titleStateInitial, action) {
  switch (action.type) {
    case titleActions.changeTitle:
      return action.payload;

    default:
      return state;
  }
}
