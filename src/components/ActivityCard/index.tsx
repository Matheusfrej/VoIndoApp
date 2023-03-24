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
  activity: string
  quantity: number
  distance: number
  organizer: string
}

export function ActivityCard({
  check = false,
  profissional = true,
  activity = '',
  quantity = 0,
  distance = 0,
  organizer = '',
}: ActivityCardProps) {
  return (
    <CardContainer>
      <CardSectionContainer>
        <ActivityName>
          <CustomText type="span">{activity}</CustomText>
          {check && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </ActivityName>

        <ActivityName>
          <Image source={require('../../../assets/user.png')} alt="" />

          <CustomText type="body">{quantity}</CustomText>
        </ActivityName>
      </CardSectionContainer>

      <CardFooterContainer>
        <CardSectionContainer>
          <CustomText type="body">Organizado por {organizer}</CustomText>

          {distance >= 1000 && (
            <CustomText type="body">
              {distance / 1000}km de distância
            </CustomText>
          )}

          {distance < 1000 && (
            <CustomText type="body">{distance}m de distância</CustomText>
          )}
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
