import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
`

const Return = styled.p`
  margin-top: 1rem;
  color: ${({ theme }) => theme.highlightColor};
`

const FourOhFour = () => (
  <Container>
    <h2>Four uh-oh Four!</h2>
    <Return>
      <Link to="/">Return to Introduction</Link>
    </Return>
  </Container>
)

export default FourOhFour
