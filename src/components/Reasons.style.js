import styled, { css } from 'styled-components'
import { default as StyledButton } from '../components/styled/Button'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ReasonPanel = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`

export const Card = styled.div`
  ${({ positionX, positionY, rotate, color }) => css`
    position: absolute;
    background: ${color.background};
    padding: 2rem;
    text-align: center;
    transform: translate3d(${positionX}px, ${positionY}px, 0)
      rotate(${rotate}deg);
    width: 80%;
    color: ${color.text};
  `}
`

export const Title = styled.h2`
  margin: 0.5rem 0;
`

export const Message = styled.h2`
  font-weight: 600;
`

export const Button = styled(StyledButton)`
  width: fit-content;
  margin: 0 auto;
`
