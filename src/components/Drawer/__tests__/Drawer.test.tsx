import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import store from '../../../store/store'
import baseTheme from '../../../styles/themes/base'
import { friendlistMock } from '../../../../__mocks__/friendlistMock'
import Drawer from '..'

const mockStore = configureStore()({ friendlist: friendlistMock })

const Provided = ({ useMock }: any) => (
  <Provider store={useMock ? mockStore : store}>
    <ThemeProvider theme={baseTheme}>
      <Drawer />
    </ThemeProvider>
  </Provider>
)

describe('<Drawer', () => {
  it('should display all friends names', () => {
    render(<Provided useMock={true} />)

    expect(screen.queryAllByRole('option')).toHaveLength(friendlistMock.length)
  })
})
