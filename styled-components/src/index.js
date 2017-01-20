import React from 'react'
import { render } from 'react-dom'

import Button from 'atoms/button'
import ButtonCopy from 'atoms/button-copy'

render(
  <div>
    <Button>click me!</Button>
    <ButtonCopy>i am a copy</ButtonCopy>
  </div>, document.querySelector('#app'))
