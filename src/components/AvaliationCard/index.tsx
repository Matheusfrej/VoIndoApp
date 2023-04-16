import { Image } from 'react-native'
import { CardContainer, Top, Perfil, Stars } from '../AvaliationCard/styles'

import { CustomText } from '../CustomText'

export function AvaliationCard() {
  const goToProfile = () => {}
  return (
    <CardContainer>
      <Top>
        <CustomText type="span"> Rodrigo </CustomText>
        <Perfil onPress={goToProfile}> Ver Perfil </Perfil>
      </Top>

      <Stars>
        <Image
          source={require('../../../assets/Star.png')}
          alt=""
          style={{ marginRight: 2 }}
        />
        <Image
          source={require('../../../assets/Star.png')}
          alt=""
          style={{ marginRight: 2 }}
        />
        <Image
          source={require('../../../assets/Star.png')}
          alt=""
          style={{ marginRight: 2 }}
        />
        <Image
          source={require('../../../assets/Star.png')}
          alt=""
          style={{ marginRight: 2 }}
        />
        <Image source={require('../../../assets/Star.png')} alt="" />
      </Stars>

      <CustomText type="body"> Gostei muito da atividade</CustomText>
    </CardContainer>
  )
}
