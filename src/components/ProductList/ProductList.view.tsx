import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { Product } from './ProductList.types';
import styles from './ProductList.styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  products: Product[];
  loading: boolean;
  error: string | null;
  onItemPress: (id: number) => void;
};

const ProductListView: React.FC<Props> = ({ products, loading, error, onItemPress }) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
            <View style={styles.iconContainer}>
              <FontAwesome name="star" size={14} color="#B2AC88" />
              <Text style={styles.iconText}>{item.rating.rate} ({item.rating.count})</Text>
              <FontAwesome name="tag" size={14} color="#B2AC88" />
              <Text style={styles.iconText}>Rs {item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => onItemPress(item.id)} style={styles.button}>
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

export default ProductListView;
