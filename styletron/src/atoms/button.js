import React from 'react'
import StyledButton from 'styled/button'

export default (props) => (
  <StyledButton
    primary>
    {props.children}
  </StyledButton>
)
