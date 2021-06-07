import ProductImage from '..'
import { renderTestComponent } from '../../../utils/testUtils'

describe('<ProductImage />', () => {
  it('should render component', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="black" />);

    const img = container.querySelector('img[src="test.jpg"]');

    expect(img).toBeInTheDocument();
  });

  it('should render color variant: red', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="red" />);

    const img = container.querySelector('img.tshirt');

    if (img) {
      expect(window.getComputedStyle(img, null).getPropertyValue('filter')).toBe('invert(20%) sepia(100%) saturate(6780%) hue-rotate(356deg) brightness(98%) contrast(116%)');
    }
  });

  it('should render color variant: blue', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="blue" />);

    const img = container.querySelector('img.tshirt');

    if (img) {
      expect(window.getComputedStyle(img, null).getPropertyValue('filter')).toBe('invert(10%) sepia(71%) saturate(3905%) hue-rotate(234deg) brightness(125%) contrast(143%)');
    }
  });

  it('should render color variant: green', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="green" />);

    const img = container.querySelector('img.tshirt');

    if (img) {
      expect(window.getComputedStyle(img, null).getPropertyValue('filter')).toBe('invert(43%) sepia(92%) saturate(690%) hue-rotate(78deg) brightness(93%) contrast(89%)');
    }
  });

  it('should render color variant: white', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="white" />);

    const img = container.querySelector('img.tshirt');

    if (img) {
      expect(window.getComputedStyle(img, null).getPropertyValue('filter')).toBe('invert(100%) sepia(100%) saturate(50%) hue-rotate(218deg) brightness(105%) contrast(103%)');
    }
  });

  it('should render color variant: purple', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="purple" />);

    const img = container.querySelector('img.tshirt');

    if (img) {
      expect(window.getComputedStyle(img, null).getPropertyValue('filter')).toBe('invert(16%) sepia(84%) saturate(2164%) hue-rotate(287deg) brightness(81%) contrast(113%)');
    }
  });

  it('should render color variant: black', () => {
    const { container } = renderTestComponent(<ProductImage imageURL="test.jpg" color="black" />);

    const img = container.querySelector('img.tshirt');

    if (img) {
      expect(window.getComputedStyle(img, null).getPropertyValue('filter')).toBe('');
    }
  });
})