import { ButtonText, StyledButton } from './styles'

interface ButtonProps {
  text: string
  textSize?: number
  variantType: 'default' | 'large' | 'outline' | 'small' | 'block'
  color?: 'blue' | 'orange'
  onPress: any // chama qualquer função que você passar
}

export function CustomButton({
  text,
  textSize = 18,
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
      <ButtonText type="subtitle" textSize={textSize}>
        {text}
      </ButtonText>
    </StyledButton>
  )
}
