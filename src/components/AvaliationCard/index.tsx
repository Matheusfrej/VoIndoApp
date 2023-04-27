import { Image } from 'react-native'
import { CardContainer, Top, Perfil, Stars } from '../AvaliationCard/styles'

import { CustomText } from '../CustomText'

interface AvaliationCardProps {
  id: number
  nota: number
  texto: string
}

export function AvaliationCard({ id, nota, texto }: AvaliationCardProps) {
  const goToProfile = () => {}
  console.log(nota)
  return (
    <CardContainer>
      <Top>
        <CustomText type="span"> Rodrigo </CustomText>
        <Perfil onPress={goToProfile}> Ver Perfil </Perfil>
      </Top>

      <Stars>
        {Array.from({ length: nota }).map((_, index) => (
          <Image
            key={index}
            source={require('../../../assets/FullStar.png')}
            alt=""
            style={{ marginRight: 2 }}
          />
        ))}
        {Array.from({ length: 5 - nota }).map((_, index) => (
          <Image
            key={index}
            source={require('../../../assets/EmptyStar.png')}
            alt=""
            style={{ marginRight: 2 }}
          />
        ))}
      </Stars>

      <CustomText type="body"> {texto}</CustomText>
    </CardContainer>
  )
}
