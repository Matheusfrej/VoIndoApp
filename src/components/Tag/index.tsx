import { CustomText } from '../CustomText'
import React from 'react'
import { TagContainer } from './styles'

interface TagProps {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  return (
    <TagContainer>
      <CustomText type="body">{children}</CustomText>
    </TagContainer>
  )
}
