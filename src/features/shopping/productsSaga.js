import { call, select, takeEvery } from "redux-saga/effects";
import { saveProductsInLocaleStorage } from "./productsFromLocaleStorage";
import { selectProducts } from "./productsSlice";

function* saveProductsInLocaleStorageWorker() {
  const products = yield select(selectProducts);
  yield call(saveProductsInLocaleStorage, products);
}

export function* productsSaga() {
  yield takeEvery("*", saveProductsInLocaleStorageWorker);
}
