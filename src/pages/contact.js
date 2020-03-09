import React from 'react'
import { Helmet } from 'react-helmet'
import ContactMe from '../components/ContactMe'
import Page from '../components/styled/Page'

const Contact = () => (
  <>
    <Helmet>
      <title>Sup Bank - Contact</title>
    </Helmet>
    <Page>
      <ContactMe />
    </Page>
  </>
)

export default Contact
