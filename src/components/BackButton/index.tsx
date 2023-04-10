import { useTheme } from 'styled-components'
import { CustomText } from '../CustomText'
import { Back, BackButtonContainer } from './styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface BackButtonProps {
  onPress: any
  style?: any
}

export function BackButton({ onPress, style }: BackButtonProps) {
  const theme = useTheme()
  return (
    <Back
      onPress={onPress}
      activeOpacity={0.4}
      underlayColor="#DDDDDD"
      style={style}
    >
      <BackButtonContainer>
        <FontAwesome name="arrow-left" color={theme.color['BLACK-2']} />
        <CustomText type="body" style={{ color: theme.color['BLACK-2'] }}>
          Voltar
        </CustomText>
      </BackButtonContainer>
    </Back>
  )
}
