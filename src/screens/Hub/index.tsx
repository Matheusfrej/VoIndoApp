import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Tag } from '../../components/Tag'
import { HubContainer } from './styles'

export function Hub({ navigation }: any) {
  const goToMap = () => {
    navigation.push('mapTest')
  }
  return (
    <HubContainer>
      <CustomText type="h1">Hub</CustomText>
      <Tag>Em Grupo</Tag>
      <CustomButton
        text="mapa"
        onPress={goToMap}
        variantType="large"
      ></CustomButton>
    </HubContainer>
  )
}
