import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'
import Form from '..'

import store from '../../../store/store'
import baseTheme from '../../../styles/themes/base'

const Provided = () => (
  <Provider store={store}>
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
    const button = screen.getByRole('button')

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  test("add new friend if there's a typed name", () => {
    render(<Provided />)
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    )
    const button = screen.getByRole('button')

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
    const button = screen.getByRole('button')

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
    const button = screen.getByRole('button')

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
})
