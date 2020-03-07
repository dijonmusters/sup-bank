import React from 'react'
import styled from 'styled-components'
import { Phone, Mail, Linkedin } from 'react-feather'
import Link from './styled/Link'

const Panel = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Contact = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.text};
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.highlight};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const ContactPanel = () => {
  return (
    <Panel>
      <Contact href="tel:0401045624">
        <Phone size="3rem" />
        <span>Call</span>
      </Contact>
      <Contact href="mailto:jonathon.d.meyers@gmail.com">
        <Mail size="3rem" />
        <span>Email</span>
      </Contact>
      <Contact href="https://www.linkedin.com/in/jon-meyers/">
        <Linkedin size="3rem" />
        <span>Message</span>
      </Contact>
    </Panel>
  )
}

export default ContactPanel
