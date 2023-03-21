import { ButtonText, StyledButton } from './styles'

interface ButtonProps {
  text: string
  variantType: 'default' | 'large' | 'outline' | 'small' | 'block'
  color?: 'blue' | 'orange'
  onPress: any // chama qualquer função que você passar
}

export function CustomButton({
  text,
  variantType,
  color = 'orange',
  onPress,
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      variantType={variantType}
      onPress={onPress}
      underlayColor="orange"
    >
      <ButtonText type="subtitle">{text}</ButtonText>
    </StyledButton>
  )
}
