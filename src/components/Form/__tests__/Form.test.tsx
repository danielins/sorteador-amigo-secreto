import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "..";

test('when input is empty, new users cannot be added', () => {
  render(<Form />)

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeDisabled();
})