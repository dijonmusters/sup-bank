import React from 'react'
import { Contact, Panel, Row, Title, Heading } from './ContactPanel.style'

const renderContact = ({ title, url, icon }) => (
  <Contact key={title} href={url}>
    {icon}
    {title && <Title>{title}</Title>}
  </Contact>
)

const ContactPanel = ({ heading, contacts }) => (
  <Panel>
    <Heading>{heading}</Heading>
    <Row>{contacts.map(renderContact)}</Row>
  </Panel>
)

export default ContactPanel
