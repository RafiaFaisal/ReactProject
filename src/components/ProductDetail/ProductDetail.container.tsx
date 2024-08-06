import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../ProductList/ProductList.types';
import { fetchProductDetail } from '../../store/ProductDetail/productDetail.thunks';
import { RootState } from '../../store/store';
import ProductDetailView from './ProductDetail.view';


type ProductDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;
type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;


type Props = {
  navigation: ProductDetailScreenNavigationProp;
  route: ProductDetailScreenRouteProp;
};


const ProductDetailContainer: React.FC<Props> = ({ route }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state: RootState) => state.productDetail);

 
  useEffect(() => {
    dispatch(fetchProductDetail(route.params.id) as any); 
  }, [dispatch, route.params.id]);

 
  return <ProductDetailView product={product} loading={loading} error={error} />;
};

export default ProductDetailContainer;
