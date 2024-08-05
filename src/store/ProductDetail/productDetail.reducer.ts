import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductDetail } from './productDetail.thunks';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail.types';

type ProductDetailState = {
  product: ProductDetail | null;
  loading: boolean;
  error: string | null;
};

const initialState: ProductDetailState = {
  product: null,
  loading: false,
  error: null,
};


const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action: PayloadAction<ProductDetail>) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product details';
      });
  },
});

export default productDetailSlice.reducer;
