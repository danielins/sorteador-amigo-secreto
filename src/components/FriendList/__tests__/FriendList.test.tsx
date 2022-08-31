import { ThemeProvider } from '@emotion/react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import FriendList from '..'
import store from '../../../store/store'
import baseTheme from '../../../styles/themes/base'
import { friendlistMock } from '../../../../__mocks__/friendlistMock'

const mockStore = configureStore()({ friendlist: friendlistMock })

const Provided = ({ useMock }: any) => (
  <Provider store={useMock ? mockStore : store}>
    <ThemeProvider theme={baseTheme}>
      <FriendList />
    </ThemeProvider>
  </Provider>
)

describe('<FriendList /> when empty', () => {
  test('should be rendered without elements', () => {
    render(<Provided />)

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(0)
  })
})

describe('<FriendList />', () => {
  test('should be rendered with elements', () => {
    render(<Provided useMock={true} />)

    const items = screen.queryAllByRole('listitem')
    expect(items).toHaveLength(friendlistMock.length)
  })
})
