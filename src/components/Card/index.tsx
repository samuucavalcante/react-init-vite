import React from 'react'
import { Container } from './styles'
import { Text } from 'components/Common'

type Props = {
  // title: string
}

export const Card: React.FC<Props> = () => {
  return (
    <Container>
      <Text>Teste</Text>
    </Container>
  )
}
