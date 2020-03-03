import styled from 'styled-components'

const Link = styled.a`
  color: ${props => (props.highlight ? props.theme.highlight : 'inherit')};
  text-decoration: none;

  &:visited,
  &:hover,
  &:active {
    color: ${props => (props.highlight ? props.theme.highlight : 'inherit')};
    text-decoration: inherit;
    font-weight: inherit;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.highlight};
    outline-offset: 4px;
  }
`

export default Link
