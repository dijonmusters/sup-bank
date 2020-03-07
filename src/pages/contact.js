import React from 'react'
import { Helmet } from 'react-helmet'
import ContactPanel from '../components/ContactPanel'
import Page from '../components/styled/Page'

const Contact = () => (
  <>
    <Helmet>
      <title>Sup Bank - Contact</title>
    </Helmet>
    <Page>
      <ContactPanel />
    </Page>
  </>
)

export default Contact
