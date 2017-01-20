import styled from 'styled-components'

export default styled.button`
  padding: .25rem .5rem;
  border: 1px solid rgb(0, 0, 155);
  background: ${(props) => props.primary ? 'blue' : 'red'};
  border-radius: 2px;
  font: bold 1rem/1.5 helvetica;
  color: white;

  &:focus {
    outline: none;
  }
`
