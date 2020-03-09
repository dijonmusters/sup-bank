import styled from 'styled-components'

const Button = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0%;
  background: none;
  color: inherit;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.highlight};
    outline-offset: -1px;
  }
`

export default Button
