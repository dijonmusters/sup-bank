import React from 'react'
import { Phone, Mail, Linkedin, GitHub, Smartphone, Book } from 'react-feather'

const mobile = '0401045624'
const email = 'jonathon.d.meyers@gmail.com'
const subject = 'You got the job!'
const body = 'We liked the webapp! Welcome aboard!'

export const furtherConvincing = [
  {
    title: 'Blog',
    url: 'https://www.monoglot.dev/',
    icon: <Book size="3rem" />,
  },
  {
    title: 'GitHub',
    url: 'https://www.github.com/dijonmusters',
    icon: <GitHub size="3rem" />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jon-meyers/',
    icon: <Linkedin size="3rem" />,
  },
]

export const contacts = [
  {
    title: 'Call',
    url: `tel:${mobile}`,
    icon: <Phone size="3rem" />,
  },
  {
    title: 'Text',
    url: `sms:${mobile}&body=${body}`,
    icon: <Smartphone size="3rem" />,
  },
  {
    title: 'Email',
    url: `mailto:${email}?subject=${subject}&body=${body}`,
    icon: <Mail size="3rem" />,
  },
]
