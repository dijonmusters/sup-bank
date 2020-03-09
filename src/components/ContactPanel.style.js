import styled from 'styled-components'
import Link from './styled/Link'

export const Panel = styled.div`
  flex: 1;
`

export const Row = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Contact = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.text};
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.highlight};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

export const Title = styled.span`
  margin-top: 0.5rem;
  font-weight: 500;
`

export const Heading = styled.h2`
  font-weight: 600;
`
