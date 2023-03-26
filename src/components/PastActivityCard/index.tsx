import { CustomButton } from '../CustomButton'
import { CustomText } from '../CustomText'
import { Image } from 'react-native'
import {
  Footer,
  Header,
  HeaderTitle,
  PastActivityCardContainer,
} from './styles'

interface PastActivityCardProps {
  check?: boolean
  activity: string
  organizer: string
}

export function PastActivityCard({
  check = false,
  activity,
  organizer,
}: PastActivityCardProps) {
  return (
    <PastActivityCardContainer>
      <Header>
        <HeaderTitle>
          <CustomText type="span" centered={true}>
            {activity}
          </CustomText>
          {check && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </HeaderTitle>
        <HeaderTitle>
          <CustomText type="body" centered={true}>
            Organizado por {organizer}
          </CustomText>
        </HeaderTitle>
      </Header>
      <Footer>
        <CustomButton
          textSize={12}
          text="Avaliar atividade"
          variantType="block"
          color="blue"
        />
        <CustomButton
          textSize={12}
          text="Denunciar"
          variantType="block"
          color="red"
        />
      </Footer>
    </PastActivityCardContainer>
  )
}
