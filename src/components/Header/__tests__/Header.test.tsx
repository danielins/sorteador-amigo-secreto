import { render } from '@testing-library/react'
import Header from '..'

it('render Header component', () => {
  const { container } = render(<Header />)
  expect(container).toMatchSnapshot();
})