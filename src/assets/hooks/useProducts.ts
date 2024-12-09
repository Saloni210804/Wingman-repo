import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {fetchProducts} from '../features/products/productsSlice';
import { selectFilteredProducts, selectSearch } from '../features/products/selectors';
import { RootState, AppDispatch } from '../../store';

export const useProducts = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const search = useSelector(selectSearch);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  const [sortType, setSortType] = useState<string>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === 'price') {
      return a.price - b.price;
    } else if (sortType === 'rating') {
      return b.rating.rate - a.rating.rate;
    } else {
      return 0;
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return { products: paginatedProducts, search, status, error, setSortType, currentPage, setCurrentPage, totalPages };
};
