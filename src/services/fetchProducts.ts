import { Product } from '../pages/api/products';
import { api } from './api';

export async function fetchProducts() {
  try {
    const response = await api.get<Product[]>('/products');
    return response.data;
  }catch(err) {
    console.log('Error fetching products', err);
  }
}