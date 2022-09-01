import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import configureStore from 'redux-mock-store'

import Form from '..'
import store from '../../../store/store'
import baseTheme from '../../../styles/themes/base'
import { friendlistMock } from '../../../../__mocks__/friendlistMock'

const mockStore = configureStore()({ friendlist: friendlistMock })

const mockDraw = jest.fn()
const mockNavigation = jest.fn()

jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockNavigation
    }
  }
}))

jest.mock('../../../hooks/useDrawer', () => ({
  useDrawer: () => mockDraw
}))

const Provided = ({ useMock }: any) => (
  <Provider store={useMock ? mockStore : store}>
    <ThemeProvider theme={baseTheme}>
      <Form />
    </ThemeProvider>
  </Provider>
)

describe('<Form />', () => {
  test('when input is empty, new users cannot be added', () => {
    render(<Provided />)

    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByText(/Adicionar/i)

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test("add new friend if there's a typed name", () => {
    render(<Provided />)
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByText(/Adicionar/i)

    fireEvent.change(input, { target: { value: 'Batman' } })
    fireEvent.click(button)

    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })

  test("can't add repeated names", () => {
    render(<Provided />)
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByText(/Adicionar/i)

    fireEvent.change(input, { target: { value: 'Superman' } })
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: 'Superman' } })
    fireEvent.click(button)

    const errorMessage = screen.getByRole('alert')
    expect(errorMessage.textContent).toBe('Nomes iguais não são permitidos')
  })

  test('error message should disappear after 5s', () => {
    jest.useFakeTimers()

    render(<Provided />)
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByText(/Adicionar/i)

    fireEvent.change(input, { target: { value: 'Superman' } })
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: 'Superman' } })
    fireEvent.click(button)

    let errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeNull()
  })

  test("can't draw names if there are less than 3 friends", () => {
    render(<Provided />)

    const button = screen.getByText(/Iniciar a brincadeira\!/i)
    expect(button).toBeDisabled()
  })

  test('can draw names', () => {
    render(<Provided useMock={true} />)

    expect(screen.getByText(/Iniciar a brincadeira\!/i)).not.toBeDisabled()
  })

  test('start to draw names', () => {
    render(<Provided useMock={true} />)

    fireEvent.click(screen.getByText(/Iniciar a brincadeira\!/i))
    expect(mockDraw).toHaveBeenCalled()
    expect(mockNavigation).toHaveBeenCalled()
    expect(mockNavigation).toHaveBeenCalledWith('/draw')
  })
})
