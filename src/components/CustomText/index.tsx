import React from 'react'
import { StyledText } from './styles'

interface CustomTextProps {
  type: 'h1' | 'h2' | 'h3' | 'subtitle' | 'span' | 'body'
  children: React.ReactNode
}

export function CustomText({ type, children }: CustomTextProps) {
  return <StyledText type={type}>{children}</StyledText>
}
