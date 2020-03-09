import styled from 'styled-components'

const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.separator};
  margin: 3rem 0;
`

export default Divider
