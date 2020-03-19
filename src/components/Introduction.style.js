import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;

  @media ${({ theme }) => theme.isLargeScreen} {
    flex-direction: row;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ParagraphContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
`

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
`

export const Highlight = styled.span`
  background-color: ${props => props.theme[props.color]};
  color: #333;
  padding: 0 1rem;
`
