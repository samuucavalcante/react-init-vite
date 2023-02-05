import React from 'react'
import styled from 'styled-components'

type TextProps = {
  textColor?: string
  textSize?: number
  fontWeight?: 500 | 600 | 700 | 800 | 'bold'
  uppercase?: boolean
}

export const Text = styled.span<TextProps>`
  font-size: ${({ textSize = 14 }) => `${textSize}px`};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ textColor, theme }) => textColor || theme.colors.text};
`

type TitleProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ tag = 'h3', children }) => {
  const Text = styled(tag)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
  `
  return <Text>{children}</Text>
}
