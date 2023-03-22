import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  Avatar,
  Button,
  Container,
  Title,
  Description,
  TextArea,
} from './styles'

export function Apresentation({ navigation }: any) {
  const goToParticipation = () => {
    console.log('apertou')

    navigation.push('participation')
  }

  return (
    <Container>
      <TextArea>
        <Title>
          <CustomText type="h1"> Oi, eu sou a Fulana!</CustomText>
        </Title>

        <Description>
          <CustomText type="body">
            Vou te ajudar a encontrar atividades do seu interesse, encontrar
            grupos, desenvolver novas habilidades...
          </CustomText>
        </Description>

        <Description>
          <CustomText type="body"> Pode contar comigo!</CustomText>
        </Description>
      </TextArea>

      <Button>
        <CustomButton
          text="Continuar"
          variantType="block"
          onPress={goToParticipation}
        ></CustomButton>
      </Button>

      <Avatar>
        <Image
          source={require('../../../assets/avatar/avatar-happy2.png')}
          alt=""
        ></Image>
      </Avatar>
    </Container>
  )
}
