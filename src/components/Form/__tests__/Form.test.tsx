import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import Form from '..'

import store from '../../../store/store'

const Provided = () => (
  <Provider store={store}>
    <Form />
  </Provider>
)

test('when input is empty, new users cannot be added', () => {
  render(<Provided />)

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})

test("add new friend if there's a typed name", () => {
  render(<Provided />)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button = screen.getByRole('button')

  fireEvent.change(input, { target: { value: 'Batman' } })
  fireEvent.click(button)

  expect(input).toHaveFocus()
  expect(input).toHaveValue('')
})

test("can't add repeated names", () => {
  render(<Provided />)
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button = screen.getByRole('button')

  fireEvent.change(input, { target: { value: 'Superman' } })
  fireEvent.click(button)

  fireEvent.change(input, { target: { value: 'Superman' } })
  fireEvent.click(button)

  const errorMessage = screen.getByRole('alert')
  expect(errorMessage.textContent).toBe('Nomes iguais não são permitidos')
})
