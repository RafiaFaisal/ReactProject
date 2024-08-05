import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail.types';

export const fetchProductDetail = createAsyncThunk<ProductDetail, number>(
  'productDetail/fetchProductDetail',
  async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product details');
    }
    const data: ProductDetail = await response.json();
    return data;
  }
);
