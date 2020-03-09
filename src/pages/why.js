import React from 'react'
import { Helmet } from 'react-helmet'
import Reasons from '../components/Reasons'
import Page from '../components/styled/Page'

const Why = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Sup Bank - Why</title>
      <meta
        name="description"
        content="List of reasons why Jon Meyers should be employed at Up"
      />
    </Helmet>
    <Page>
      <Reasons />
    </Page>
  </>
)

export default Why
