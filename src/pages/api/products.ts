import type { NextApiRequest, NextApiResponse } from 'next';

import faker from 'faker';

export type ProductColor = 'red' | 'blue' | 'green' | 'purple' | 'black' | 'white';
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface Product {
  productId: number;
  title: string;
  price: number;
  image: string;
  colors: ProductColor[];
  productSizes: ProductSize[];
}

faker.seed(20210604);

const products: Product[] = [
  {
    productId: 1,
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price(5, 100)),
    image: 'https://picsum.photos/seed/barkyn1/300/300',
    colors: ['red', 'green', 'blue'],
    productSizes: ['XS', 'M'],
  },
  {
    productId: 2,
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price(5, 100)),
    image: 'https://picsum.photos/seed/barkyn2/300/300',
    colors: ['purple', 'black', 'white'],
    productSizes: ['XS', 'L'],
  },
  {
    productId: 3,
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price(5, 100)),
    image: 'https://picsum.photos/seed/barkyn3/300/300',
    colors: ['green', 'blue'],
    productSizes: ['L', 'XL'],
  },
  {
    productId: 4,
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price(5, 100)),
    image: 'https://picsum.photos/seed/barkyn4/300/300',
    colors: ['red', 'green', 'purple'],
    productSizes: ['XS', 'S', 'L', 'XL'],
  },
  {
    productId: 5,
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price(5, 100)),
    image: 'https://picsum.photos/seed/barkyn5/300/300',
    colors: ['red', 'blue'],
    productSizes: ['XS', 'S', 'L', 'XL'],
  },
  {
    productId: 6,
    title: faker.commerce.productName(),
    price: Number(faker.commerce.price(5, 100)),
    image: 'https://picsum.photos/seed/barkyn6/300/300',
    colors: ['purple'],
    productSizes: ['XS', 'S', 'L', 'XL'],
  },
];

export default function getProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.json(products);
}