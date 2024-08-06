import reducer, { initialState } from '../src/store/ProductList/productList.reducer';
import { fetchProducts } from '../src/store/ProductList/productList.thunks';

describe('productList reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle fetchProducts.pending', () => {
    const action = { type: fetchProducts.pending.type };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle fetchProducts.fulfilled', () => {
    const action = { type: fetchProducts.fulfilled.type, payload: [{ id: 1, name: 'Test' }] };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      products: action.payload,
    });
  });

  it('should handle fetchProducts.rejected', () => {
    const action = { type: fetchProducts.rejected.type, error: { message: 'Failed' } };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.error.message,
    });
  });
});
