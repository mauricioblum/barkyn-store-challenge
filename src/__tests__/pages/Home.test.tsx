import Home from '../../pages/index';
import { renderTestComponent, screen, userEvent } from '../../utils/testUtils';
import MockAdapter from 'axios-mock-adapter';
import { api } from '../../services';

const mock = new MockAdapter(api);

describe('<Home />', () => {

  const setup = async () => {
    renderTestComponent(<Home />);

    mock.onGet('/products').reply(200, [
      {
        productId: 1,
        title: 'Test Product 1',
        price: 53,
        image: 'test.jpg',
        colors: ['red', 'green', 'blue'],
        productSizes: ['XS', 'M'],
      },
      {
        productId: 2,
        title: 'Test Product 2',
        price: 31,
        image: 'test.jpg',
        colors: ['black', 'white', 'red'],
        productSizes: ['XS', 'M', 'L'],
      },
    ]);
  }

  it('should render page with products', async () => {
    setup();
    const products = await screen.findAllByTestId('product');
    const totalProducts = products.length;

    expect(totalProducts).toBe(2);

  });

  it('should not be able to add a product to cart when no color/size are selected', async () => {
    setup();
    await screen.findAllByTestId('product');

    const imgProduct = screen.getAllByAltText('Shirt');

    userEvent.click(imgProduct[0]);

    const addToCartButton = screen.getByText(/Add to Cart/i) as HTMLButtonElement;

    expect(addToCartButton.disabled).toBeTruthy();

  });

  it('should add a product to cart', async () => {
    setup();
    await screen.findAllByTestId('product');

    const imgProduct = screen.getAllByAltText('Shirt');

    userEvent.click(imgProduct[0]);

    const color = screen.getByTestId('color-red');
    const size = screen.getByTestId('size-XS');

    userEvent.click(color);
    userEvent.click(size);

    const addToCartButton = screen.getByText(/Add to Cart/i);

    userEvent.click(addToCartButton);

    const goToCartButton = screen.getByTestId('cartButton');

    expect(goToCartButton).toHaveTextContent('Cart Total: € 53');

  });
})