import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { getNewReason } from '../utils/reasons'
import Button from '../components/styled/Button'
import { Card, Title, ReasonPanel, Container, Message } from './Reasons.style'

const REASON_BUTTON_QUERY = graphql`
  query ReasonButtonQuery {
    file(relativePath: { regex: "/click/" }) {
      childImageSharp {
        fixed(width: 191) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const addReason = (reasons, setReasons) => e => {
  const newReason = getNewReason(reasons)
  setReasons([...reasons, newReason])
}

const renderReason = ({
  id,
  title,
  description,
  positionX,
  positionY,
  rotate,
  color,
}) => (
  <Card
    key={id}
    positionX={positionX}
    positionY={positionY}
    rotate={rotate}
    color={color}
  >
    <Title>{title}</Title>
    <div>{description}</div>
  </Card>
)

const Reasons = () => {
  const [reasons, setReasons] = useState([])

  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(REASON_BUTTON_QUERY)

  return (
    <Container>
      <ReasonPanel>
        <Message>Why should you contact me?</Message>
        {reasons.map(renderReason)}
      </ReasonPanel>
      <Button onClick={addReason(reasons, setReasons)}>
        <Img fixed={fixed} />
      </Button>
    </Container>
  )
}

export default Reasons
