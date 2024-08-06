import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import ProductDetailContainer from '../src/components/ProductDetail/ProductDetail.container';
import { RootState } from '../src/store/store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ProductDetailContainer', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      productDetail: { product: null, loading: false, error: null },
    });
  });

  it('renders correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ProductDetailContainer
          route={{ key: '1', name: 'ProductDetail', params: { id: 1 } } as any}
          navigation={{ navigate: jest.fn() } as any}
        />
      </Provider>
    );
    expect(getByText('ProductDetail')).toBeTruthy();
  });
});
