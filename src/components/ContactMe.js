import React from 'react'
import Divider from './styled/Divider'
import ContactPanel from './ContactPanel'
import { Container } from './ContactMe.style'
import { contacts, furtherConvincing } from '../data/contacts'

const ContactMe = () => (
  <Container>
    <ContactPanel heading="Get in touch" contacts={contacts} />
    <Divider />
    <ContactPanel
      heading="Need a little more convincing..."
      contacts={furtherConvincing}
    />
  </Container>
)

export default ContactMe
