import { StyledButton } from './styles'

interface ButtonProps {
  text: string
  variantType: 'default' | 'large' | 'outline' | 'small' | 'block'
  color?: 'blue' | 'orange'
}

export function ButtonComponent({
  text,
  variantType,
  color = 'orange',
}: ButtonProps) {
  return (
    <StyledButton
      uppercase={false}
      title={text}
      variantType={variantType}
      color={color}
    />
  )
}
