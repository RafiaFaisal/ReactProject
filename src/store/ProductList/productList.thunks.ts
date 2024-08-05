import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../components/ProductList/ProductList.types';

export const fetchProducts = createAsyncThunk<Product[]>('productList/fetchProducts', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
});
