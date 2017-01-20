import { styled } from 'styletron-react'

export default styled('button', ({primary}) => ({
  padding: '.25rem .5rem',
  border: '1px solid rgb(0, 0, 155)',
  background: primary ? 'blue' : 'red',
  borderRadius: '2px',
  font: 'bold 1rem/1.5 helvetica',
  color: 'white',

  ':focus': {
    outline: 'none'
  }
}))
