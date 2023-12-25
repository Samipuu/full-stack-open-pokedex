import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid='error'>It seems an error occured: {error.toString()}</div>
)

export default ErrorMessage
