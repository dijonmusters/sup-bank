import styled from 'styled-components'

export const Container = styled.nav`
  padding: 1rem;
  color: ${({ theme }) => theme.text};
  display: block;
  text-align: center;

  @media ${({ theme }) => theme.isLargeScreen} {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled.h1`
  margin: 0;
  padding: 0;
`

export const Items = styled.ul`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.isLargeScreen} {
    justify-content: flex-start;
    margin-left: 2rem;
    margin-top: 0.5rem;
  }
`

export const Item = styled.li`
  position: relative;
  list-style: none;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  border-bottom: ${props =>
    props.active ? `2px solid ${props.theme.highlight}` : 'none'};

  &:hover {
    border-bottom: ${props => `2px solid ${props.theme.highlight}`};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
    &:after {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    border-left: 1px solid ${props => props.theme.separator};
    height: 1rem;
    right: -1rem;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
`

export const Divider = styled.div`
  align-self: center;
  border-left: 1px solid ${props => props.theme.separator};
  height: 1rem;
`

export const Img = styled.img`
  width: 100px;
`
