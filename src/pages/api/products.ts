import type { NextApiRequest, NextApiResponse } from 'next';

import faker from 'faker';

export type ProductColor = 'red' | 'blue' | 'green' | 'purple' | 'black' | 'white';
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL';
export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
  colors: ProductColor[];
  sizes: ProductSize[];
}

faker.seed(20210604);

const products: Product[] = [
  {
    id: 1,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn1/300/300',
    colors: ['red', 'green', 'blue'],
    sizes: ['XS', 'M'],
  },
  {
    id: 2,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn2/300/300',
    colors: ['purple', 'black', 'white'],
    sizes: ['XS', 'L'],
  },
  {
    id: 3,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn3/300/300',
    colors: ['green', 'blue'],
    sizes: ['L', 'XL'],
  },
  {
    id: 4,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn4/300/300',
    colors: ['red', 'green', 'purple'],
    sizes: ['XS', 'S', 'L', 'XL'],
  },
  {
    id: 5,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn5/300/300',
    colors: ['red', 'blue'],
    sizes: ['XS', 'S', 'L', 'XL'],
  },
  {
    id: 6,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn6/300/300',
    colors: ['purple'],
    sizes: ['XS', 'S', 'L', 'XL'],
  },
];

export default function getProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.json(products);
}