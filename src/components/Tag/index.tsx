import { CustomText } from '../CustomText'
import React from 'react'
import { TagContainer } from './styles'
import { useTheme } from 'styled-components'

interface TagProps {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  const theme = useTheme()
  return (
    <TagContainer>
      <CustomText type="body" style={{ color: theme.color.PRIMARY }}>
        {children}
      </CustomText>
    </TagContainer>
  )
}
