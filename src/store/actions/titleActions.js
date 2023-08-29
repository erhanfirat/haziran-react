export const titleActions = Object.freeze({
  changeTitle: "CHANGE_TITLE",
});

// action objesi oluşturup döndürür
export const changeTitleAction = (newTitle) => ({
  type: titleActions.changeTitle,
  payload: newTitle,
});
