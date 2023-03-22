import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import {
  Avatar,
  Button,
  Container,
  Title,
  Description,
  CountMe,
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
        <Title> Oi, eu sou a Fulana!</Title>

        <Description>
          Vou te ajudar a encontrar atividades do seu interesse, encontrar
          grupos, desenvolver novas habilidades...
        </Description>

        <CountMe> Pode contar comigo!</CountMe>
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
