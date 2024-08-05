import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ProductDetail } from './ProductDetail.types';
import styles from './ProductDetail.styles';

type Props = {
  product: ProductDetail | null;
  loading: boolean;
  error: string | null;
};

const ProductDetailView: React.FC<Props> = ({ product, loading, error }) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!product) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={18} color="#B2AC88" />
            <Text style={styles.ratingText}>{product.rating.rate} ({product.rating.count})</Text>
          </View>
          <View style={styles.priceContainer}>
            <FontAwesome name="tag" size={18} color="#B2AC88" />
            <Text style={styles.price}>Rs {product.price}</Text>
          </View>
        </View>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetailView;
