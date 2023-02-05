import styled from 'styled-components'

export const Container = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => 'white'};
  box-shadow: ${({ theme }) => theme.shadow};
`