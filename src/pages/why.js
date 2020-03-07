import React from 'react'
import { Helmet } from 'react-helmet'
import Reasons from '../components/Reasons'
import Page from '../components/styled/Page'

const Why = () => (
  <>
    <Helmet>
      <title>Sup Bank - Why</title>
    </Helmet>
    <Page>
      <Reasons />
    </Page>
  </>
)

export default Why
