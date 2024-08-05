import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store/store';
import ProductListContainer from './src/components/ProductList/ProductList.container';
import ProductDetailContainer from './src/components/ProductDetail/ProductDetail.container';
import { RootStackParamList } from './src/components/ProductList/ProductList.types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductListContainer} />
          <Stack.Screen name="ProductDetail" component={ProductDetailContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
