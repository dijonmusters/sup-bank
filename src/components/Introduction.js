import React from 'react'
import Img from 'gatsby-image'
import {
  Container,
  ImageContainer,
  ParagraphContainer,
  Paragraph,
  Highlight,
} from './Introduction.style'

const Introduction = ({ me }) => (
  <Container>
    <ImageContainer>
      <Img fixed={me} />
    </ImageContainer>
    <ParagraphContainer>
      <Paragraph>
        Hi{' '}
        <span role="img" aria-label="waving hand">
          &#128075;
        </span>
      </Paragraph>
      <Paragraph>
        My name is <Highlight color="highlight">Jon Meyers</Highlight> and I
        want to work at <Highlight color="highlight2">Up.</Highlight>
      </Paragraph>
    </ParagraphContainer>
  </Container>
)

export default Introduction
