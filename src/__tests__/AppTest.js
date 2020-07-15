import React from 'react'
import {render, fireEvent} from "@testing-library/react"
import App from "../App";

test('Adiciona um item na lista', () => {
  const {getByLabelText, getByText, getByTestId} = render(<App />)

  fireEvent.change(getByLabelText('New Tech'), {target: {value: 'Reactzinho'}})
  fireEvent.submit(getByTestId('form-tech'))

  expect(getByTestId('list-tech')).toContainElement(getByText('Reactzinho'))
  expect(getByLabelText('New Tech')).toHaveValue('')
})
