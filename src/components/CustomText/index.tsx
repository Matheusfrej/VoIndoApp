import React from 'react'
import { StyledText } from './styles'

interface CustomTextProps {
  type: 'h1' | 'h2' | 'h3' | 'subtitle' | 'span' | 'body'
  children: React.ReactNode
  centered?: boolean
  onPress?: any
  style?: any
}

export function CustomText({
  type,
  children,
  centered = false,
  style,
  onPress,
}: CustomTextProps) {
  return (
    <StyledText type={type} onPress={onPress} centered={centered} style={style}>
      {children}
    </StyledText>
  )
}
