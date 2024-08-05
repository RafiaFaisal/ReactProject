import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../ProductList/ProductList.types';
import { fetchProductDetail } from '../../store/ProductDetail/productDetail.thunks';
import { RootState } from '../../store/store';
import ProductDetailView from './ProductDetail.view';

// Type Definitions for Navigation Props
type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

// Props Type Definition
type Props = {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailScreenRouteProp;
};

// ProductDetailContainer Component
const ProductDetailContainer: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state: RootState) => state.productDetail);

  // UseEffect to Fetch Product Detail
  useEffect(() => {
    dispatch(fetchProductDetail(route.params.id) as any); // Explicitly type the dispatch call
  }, [dispatch, route.params.id]);

  // Render the ProductDetailView Component
  return <ProductDetailView product={product} loading={loading} error={error} />;
};

export default ProductDetailContainer;
