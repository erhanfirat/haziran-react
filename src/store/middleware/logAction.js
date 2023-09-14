import { productsActions } from "../actions/productsActions";

export const logAction = (store) => (next) => (action) => {
  console.log("[logAction Middleware] Şimdiki state:", store.getState());
  console.log("[logAction Middleware] Şu aksiyon dispatch edilecek:", action);

  if (action.type === productsActions.delete) {
    if (store.getState().global.user?.isAdmin) {
      next(action);
    } else {
      alert("Bu işlemi yapmaya yetkiniz yok!");
    }
  } else {
    next(action);
  }

  console.log("[Middleware] Sonraki state:", store.getState());
};
