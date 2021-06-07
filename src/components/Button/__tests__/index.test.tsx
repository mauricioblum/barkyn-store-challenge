import Button from '..'
import { renderTestComponent, screen } from '../../../utils/testUtils'

describe('<Button />', () => {
  it('should render component', () => {
    renderTestComponent(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  })
})