import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 2rem;

  @media ${({ theme }) => theme.isLargeScreen} {
    flex-direction: row;
    margin: 0;
  }
`

const Image = styled(Img)`
  flex-shrink: 0;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.isLargeScreen} {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`

const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
`

const Highlight = styled.span`
  background-color: ${props => props.theme[props.color]};
  color: #333;
  padding: 0 1rem;
`

const Index = ({ data }) => (
  <Container>
    <Image fixed={data.file.childImageSharp.fixed} />
    <div>
      <Paragraph>Hi &#128075;</Paragraph>
      <Paragraph>
        My name is <Highlight color="highlight">Jon Meyers</Highlight> and I
        want to work at <Highlight color="highlight2">Up.</Highlight>
      </Paragraph>
    </div>
  </Container>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/me/" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Index
