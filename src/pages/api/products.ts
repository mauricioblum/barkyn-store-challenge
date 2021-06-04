import type { NextApiRequest, NextApiResponse } from 'next';

import faker from 'faker';

faker.seed(20210604);

const products = [
  {
    id: 1,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn1/300/300'
  },
  {
    id: 2,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn2/300/300'
  },
  {
    id: 3,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn3/300/300'
  },
  {
    id: 4,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn4/300/300'
  },
  {
    id: 5,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn5/300/300'
  },
  {
    id: 6,
    title: faker.commerce.productName(),
    price: faker.commerce.price(5, 100),
    image: 'https://picsum.photos/seed/barkyn6/300/300'
  },
];

export default function productsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.json(products);
}