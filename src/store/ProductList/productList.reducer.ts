import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productList.thunks';
import { Product } from '../../components/ProductList/ProductList.types';

export interface ProductListState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductListState = {
  products: [],
  loading: false,
  error: null,
};



const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export default productListSlice.reducer;
