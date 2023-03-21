import { Image } from 'react-native'
import { CustomText } from '../CustomText'
import {
  ActivityName,
  CardContainer,
  CardFooterContainer,
  CardSectionContainer,
  ProfessionalText,
} from './styles'

interface ActivityCardProps {
  check?: boolean
  profissional?: boolean
}

export function ActivityCard({
  check = false,
  profissional = true,
}: ActivityCardProps) {
  return (
    <CardContainer>
      <CardSectionContainer>
        <ActivityName>
          <CustomText type="span">Caminhada em grupo</CustomText>
          {check && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </ActivityName>

        <ActivityName>
          <Image source={require('../../../assets/user.png')} alt="" />

          <CustomText type="body">8</CustomText>
        </ActivityName>
      </CardSectionContainer>

      <CardFooterContainer>
        <CardSectionContainer>
          <CustomText type="body">Organizado por Lúcia</CustomText>

          <CustomText type="body">100m de distância</CustomText>
        </CardSectionContainer>
        {profissional && (
          <ProfessionalText>
            Essa atividade é oferecida por um profissional
          </ProfessionalText>
        )}
      </CardFooterContainer>
    </CardContainer>
  )
}
