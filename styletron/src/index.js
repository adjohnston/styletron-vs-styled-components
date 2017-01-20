import React from 'react'
import { render } from 'react-dom'

import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'

import Button from 'atoms/button'

const styles = document.createElement('style')
const styletron = new Styletron([styles])

document.head.appendChild(styles)

render(
  <StyletronProvider
    styletron={styletron}>
    <Button>click me!</Button>
  </StyletronProvider>
, document.querySelector('#app'))
