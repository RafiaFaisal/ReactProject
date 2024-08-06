import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ProductListContainer from '../src/components/ProductList/ProductList.container';
import { RootState } from '../src/store/store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ProductListContainer', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      productList: { products: [], loading: false, error: null },
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductListContainer navigation={{ navigate: jest.fn() } as any} />
      </Provider>
    );
    expect(getByText('ProductList')).toBeTruthy();
  });
});
