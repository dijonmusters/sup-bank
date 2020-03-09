import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Introduction from '../components/Introduction'
import Page from '../components/styled/Page'

const Index = ({
  data: {
    file: {
      childImageSharp: { fixed },
    },
  },
}) => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Sup Bank - Introduction</title>
      <meta name="description" content="Landing page to introduce Jon Meyers" />
    </Helmet>
    <Page>
      <Introduction me={fixed} />
    </Page>
  </>
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
