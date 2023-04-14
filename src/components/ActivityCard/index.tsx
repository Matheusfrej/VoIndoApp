import { Image, TouchableOpacity } from 'react-native'
import { CustomText } from '../CustomText'
import {
  ActivityName,
  CardContainer,
  CardFooterContainer,
  CardFooterSectionContainer,
  CardSectionContainer,
  OrganizedBy,
  ProfessionalText,
} from './styles'

interface ActivityCardProps {
  check?: boolean
  profissional?: boolean
  activity: string
  quantity: number
  distance: number
  organizer?: string
  onPress?: any
}

export function ActivityCard({
  onPress,
  check = false,
  profissional = true,
  activity = '',
  quantity = 0,
  distance = 0,
  organizer = '',
}: ActivityCardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <CardContainer>
        <CardSectionContainer>
          <ActivityName>
            <CustomText type="span">{activity}</CustomText>
            {check && (
              <Image
                source={require('../../../assets/verificado.png')}
                alt=""
              />
            )}
          </ActivityName>

          <ActivityName>
            <Image source={require('../../../assets/user.png')} alt="" />

            <CustomText type="body">
              {quantity === -1 ? 'Sem limites' : quantity}
            </CustomText>
          </ActivityName>
        </CardSectionContainer>

        <CardFooterContainer>
          <CardFooterSectionContainer>
            <OrganizedBy>
              <CustomText type="body">Organizado por {organizer}</CustomText>
            </OrganizedBy>

            {distance >= 1000 && (
              <CustomText type="body">
                {distance / 1000}km de distância
              </CustomText>
            )}

            {distance < 1000 && (
              <CustomText type="body">{distance}m de distância</CustomText>
            )}
          </CardFooterSectionContainer>
          {profissional && (
            <ProfessionalText>
              Essa atividade é oferecida por um profissional
            </ProfessionalText>
          )}
        </CardFooterContainer>
      </CardContainer>
    </TouchableOpacity>
  )
}
