import reducer, { initialState } from '../src/store/ProductDetail/productDetail.reducer';
import { fetchProductDetail } from '../src/store/ProductDetail/productDetail.thunks';

describe('productDetail reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle fetchProductDetail.pending', () => {
    const action = { type: fetchProductDetail.pending.type };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle fetchProductDetail.fulfilled', () => {
    const action = { type: fetchProductDetail.fulfilled.type, payload: { id: 1, name: 'Test' } };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      product: action.payload,
    });
  });

  it('should handle fetchProductDetail.rejected', () => {
    const action = { type: fetchProductDetail.rejected.type, error: { message: 'Failed' } };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: action.error.message,
    });
  });
});
