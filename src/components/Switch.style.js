import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }

  @media ${({ theme }) => theme.isLargeScreen} {
    margin-top: 0;
  }
`

export const Icon = styled.div`
  margin: 0 0.5rem;
  opacity: ${props => (props.isActive ? '0.75' : '0.2')};
`

export const Toggle = styled.label`
  display: inline-block;
  font-size: 20px;
  height: 1em;
  width: 2em;
  background: #ddd;
  border-radius: 1em;
`

export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
`

export const Dot = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #fff;
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  transition: all 300ms;
  ${props => props.isDarkMode && 'transform: translate3d(100%, 0, 0)'};
`
