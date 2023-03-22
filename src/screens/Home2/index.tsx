import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Container, Avatar, TextContainer, Buttons } from './styles'

export function Home2({ navigation }: any) {
  const goToHub = () => {
    console.log('apertou')

    navigation.push('hub')
  }
  return (
    <Container>
      <TextContainer>
        <CustomText type="h1"> O que você deseja fazer hoje?</CustomText>
      </TextContainer>

      <Buttons>
        <CustomButton
          text="Participar de uma atividade"
          variantType="block"
          onPress={goToHub}
        ></CustomButton>
      </Buttons>

      <Buttons>
        <CustomButton
          text="Organizar uma atividade"
          variantType="block"
          onPress={goToHub}
        ></CustomButton>
      </Buttons>

      <Buttons>
        <CustomButton
          text="Ver minhas atividades"
          variantType="block"
          onPress={goToHub}
        ></CustomButton>
      </Buttons>

      <Buttons>
        <CustomButton
          text="Ver meu perfil"
          variantType="block"
          onPress={goToHub}
        ></CustomButton>
      </Buttons>

      <Avatar>
        <Image
          source={require('../../../assets/avatar/avatar-happy1.png')}
          alt=""
        ></Image>
      </Avatar>
    </Container>
  )
}
