import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Container, Avatar, TextContainer, Buttons } from './styles'

export function Home2({ navigation }: any) {
  const goToHub = () => {
    navigation.push('hub')
  }

  const goToPreferences = () => {
    navigation.push('preferences')
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
          onPress={goToPreferences}
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
          onPress={() => navigation.push('myActivities')}
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
