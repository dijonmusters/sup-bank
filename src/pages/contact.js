import React from 'react'
import { Helmet } from 'react-helmet'
import ContactMe from '../components/ContactMe'
import Page from '../components/styled/Page'

const Contact = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Sup Bank - Contact</title>
      <meta name="description" content="Contact page to get in touch" />
    </Helmet>
    <Page>
      <ContactMe />
    </Page>
  </>
)

export default Contact
