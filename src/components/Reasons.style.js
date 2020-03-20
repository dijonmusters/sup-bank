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
  ${({ positionX, positionY, rotate, color, theme }) => css`
    position: absolute;
    background: ${color.background};
    padding: 1rem 2rem;
    font-size: 0.75rem;
    text-align: center;
    transform: translate3d(${positionX}px, ${positionY}px, 0)
      rotate(${rotate}deg);
    width: 80%;
    color: ${color.text};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media ${theme.isLargeScreen} {
      padding: 2rem;
      font-size: 1rem;
      width: 100%;
    }
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
