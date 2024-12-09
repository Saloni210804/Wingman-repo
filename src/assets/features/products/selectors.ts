import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store';

const selectProductsState = (state: RootState) => state.products;

export const selectProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.products
);

export const selectSearch = createSelector(
  [selectProductsState],
  (productsState) => productsState.search
);

export const selectFilteredProducts = createSelector(
  [selectProducts, selectSearch],
  (products, search) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
);
