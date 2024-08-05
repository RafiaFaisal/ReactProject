import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './ProductList.types';
import { fetchProducts } from '../../store/ProductList/productList.thunks';
import { RootState, AppDispatch } from '../../store/store';
import ProductListView from './ProductList.view';

type ProductListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>;

type Props = {
  navigation: ProductListScreenNavigationProp;
};

const ProductListContainer: React.FC<Props> = ({ navigation }) => {
  const dispatch: AppDispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onItemPress = (id: number) => {
    navigation.navigate('ProductDetail', { id });
  };

  return <ProductListView products={products} loading={loading} error={error} onItemPress={onItemPress} />;
};

export default ProductListContainer;
