import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'

import Layout from '..'
import store from '../../store/store'
import baseTheme from '../../styles/themes/base'

const Provided = () => (
  <Provider store={store}>
    <ThemeProvider theme={baseTheme}>
      <Layout />
    </ThemeProvider>
  </Provider>
)

describe('<Layout>', () => {
  it('base layout should match snapshot', () => {
    const { container } = render(<Provided />)

    expect(container).toMatchSnapshot()
  })
})
