import { ButtonText, StyledButton } from './styles'

interface ButtonProps {
  text: string
  textSize?: number
  variantType: 'default' | 'large' | 'outline' | 'small' | 'block'
  color?: 'blue' | 'orange'
  style?: any
  onPress?: any // chama qualquer função que você passar
}

export function CustomButton({
  text,
  textSize = 18,
  variantType,
  color = 'orange',
  style,
  onPress,
}: ButtonProps) {
  return (
    <StyledButton
      color={color}
      variantType={variantType}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <ButtonText
        type="subtitle"
        textSize={textSize}
        style={style}
        variantType={variantType}
        textColor={color}
      >
        {text}
      </ButtonText>
    </StyledButton>
  )
}
