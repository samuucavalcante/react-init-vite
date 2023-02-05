import styled from 'styled-components'

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors};
  box-shadow: ${({ theme }) => theme.shadow};
`
