import React from 'react'
import { render } from 'react-dom'

import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'

import Button from 'atoms/button'
import ButtonCopy from 'atoms/button-copy'

const styles = document.createElement('style')
const styletron = new Styletron([styles])

document.head.appendChild(styles)

render(
  <StyletronProvider
    styletron={styletron}>
    <div>
      <Button>click me!</Button>
      <ButtonCopy>i am a copy</ButtonCopy>
    </div>
  </StyletronProvider>
, document.querySelector('#app'))
