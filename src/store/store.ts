import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './ProductList/productList.reducer'; 
import productDetailReducer from './ProductDetail/productDetail.reducer';  

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetail: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
