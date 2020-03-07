import React from 'react'
import { graphql } from 'gatsby'
import Introduction from '../components/Introduction'
import Page from '../components/styled/Page'

const Index = ({
  data: {
    file: {
      childImageSharp: { fixed },
    },
  },
}) => (
  <Page>
    <Introduction me={fixed} />
  </Page>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/me/" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Index
