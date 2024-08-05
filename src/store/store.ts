import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './ProductList/productList.reducer';  // Correct path
import productDetailReducer from './ProductDetail/productDetail.reducer';  // Correct path

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetail: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
