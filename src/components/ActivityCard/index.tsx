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
              <CustomText type="body">
                Organizado por <CustomText type="span">{organizer}</CustomText>
              </CustomText>
            </OrganizedBy>

            {distance >= 1 && (
              <CustomText type="body" style={{ maxWidth: '40%' }}>
                {distance.toPrecision(2)}km de distância
              </CustomText>
            )}

            {distance < 1 && (
              <CustomText type="body">
                {Math.round(distance * 1000)}m de distância
              </CustomText>
            )}
          </CardFooterSectionContainer>
          {profissional && (
            <ProfessionalText>
              <CustomText type="body">
                {''}
                Essa atividade é oferecida por um profissional{''}
              </CustomText>
            </ProfessionalText>
          )}
        </CardFooterContainer>
      </CardContainer>
    </TouchableOpacity>
  )
}
