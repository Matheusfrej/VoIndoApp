import { Image, TouchableOpacity } from 'react-native'
import { CustomText } from '../CustomText'
import {
  ActivityName,
  CardContainer,
  CardFooterContainer,
  CardFooterSectionContainer,
  CardSectionContainer,
  Metros,
  MoneyAndQuantity,
  OrganizedBy,
  ProfessionalText,
} from './styles'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useTheme } from 'styled-components'

interface ActivityCardProps {
  check?: boolean
  profissional?: boolean
  activity: string
  quantity: number
  distance: number
  organizer?: string
  onPress?: any
  paid?: boolean
}

export function ActivityCard({
  onPress,
  check = false,
  profissional = true,
  activity = '',
  quantity = 0,
  distance = 0,
  organizer = '',
  paid = false,
}: ActivityCardProps) {
  const theme = useTheme()
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
          {paid && (
            <MoneyAndQuantity>
              {paid && (
                <FontAwesome name="money" color={theme.color.OK} size={24} />
              )}
              <ActivityName>
                <Image source={require('../../../assets/user.png')} alt="" />

                <CustomText type="body">
                  {quantity === -1 ? 'Sem limites' : quantity}
                </CustomText>
              </ActivityName>
            </MoneyAndQuantity>
          )}
          {!paid && (
            <ActivityName>
              <Image source={require('../../../assets/user.png')} alt="" />

              <CustomText type="body">
                {quantity === -1 ? 'Sem limites' : quantity}
              </CustomText>
            </ActivityName>
          )}
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
              <Metros>
              <CustomText type="body">
                {Math.round(distance * 1000)}m de
              </CustomText>
              <CustomText type="body">distância</CustomText>
              </Metros>
            )}
          </CardFooterSectionContainer>
          {profissional && (
            <ProfessionalText>
              <CustomText type="body">
                {''}
                Oferecida por profissional{''}
              </CustomText>
            </ProfessionalText>
          )}
        </CardFooterContainer>
      </CardContainer>
    </TouchableOpacity>
  )
}
