import { CustomText } from '../CustomText'
import { Back, BackButtonContainer } from './styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface BackButtonProps {
  onPress: any
  style?: any
}

export function BackButton({ onPress, style }: BackButtonProps) {
  return (
    <Back
      onPress={onPress}
      activeOpacity={0.4}
      underlayColor="#DDDDDD"
      style={style}
    >
      <BackButtonContainer>
        <FontAwesome name="arrow-left" color="#3F3D56" />
        <CustomText type="body" style={{ color: '#3F3D56' }}>
          Voltar
        </CustomText>
      </BackButtonContainer>
    </Back>
  )
}
