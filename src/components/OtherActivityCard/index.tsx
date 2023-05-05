import { CustomButton } from '../CustomButton'
import { CustomText } from '../CustomText'
import { Image } from 'react-native'
import {
  Footer,
  Header,
  HeaderTitle,
  PastActivityCardContainer,
} from './styles'

interface OtherActivityCardProps {
  check?: boolean
  activity: string
  organizer?: string
  mine?: boolean
  id?: number
  navigation?: any
  onPress?: any
  onPressDelete?: any
}

export function OtherActivityCard({
  check = false,
  activity,
  organizer,
  mine,
  id,
  navigation,
  onPress,
  onPressDelete,
}: OtherActivityCardProps) {
  return (
    <PastActivityCardContainer onPress={onPress}>
      <Header>
        <HeaderTitle>
          <CustomText type="span" centered={true}>
            {activity}
          </CustomText>
          {check && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </HeaderTitle>
        {!mine && (
          <HeaderTitle>
            <CustomText type="body" centered={true}>
              Organizado por {organizer}
            </CustomText>
          </HeaderTitle>
        )}
      </Header>
      <Footer>
        {!mine ? (
          <CustomButton
            textSize={14}
            text="Avaliar atividade"
            variantType="block"
            color="blue"
            onPress={() => navigation.push('avaliateActivity', id)}
          />
        ) : (
          <></>
        )}
        {!mine ? (
          <></>
        ) : (
          <CustomButton
            textSize={16}
            text="Deletar"
            variantType="block"
            color="red"
            onPress={onPressDelete}
          />
        )}
      </Footer>
    </PastActivityCardContainer>
  )
}
