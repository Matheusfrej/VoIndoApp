import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Container, Avatar, TextContainer, Buttons } from './styles'

export function Home2({ navigation }: any) {
  const goToPreferences = () => {
    navigation.push('preferences')
  }

  const goToNeedProf = () => {
    navigation.push('needProf')
  }

  const goToProfile = () => {
    navigation.push('profile', { mine: true, id: 1 })
  }
  return (
    <Container>
      <TextContainer>
        <CustomText type="h1"> O que você deseja fazer hoje?</CustomText>
      </TextContainer>

      <Buttons>
        <CustomButton
          color="blue"
          text="Participar de uma atividade"
          variantType="block"
          onPress={goToPreferences}
        ></CustomButton>
      </Buttons>

      <Buttons>
        <CustomButton
          color="blue"
          text="Organizar uma atividade"
          variantType="block"
          onPress={goToNeedProf}
        ></CustomButton>
      </Buttons>

      <Buttons>
        <CustomButton
          color="blue"
          text="Ver minhas atividades"
          variantType="block"
          onPress={() => navigation.push('myActivities')}
        ></CustomButton>
      </Buttons>

      <Buttons>
        <CustomButton
          color="blue"
          text="Ver meu perfil"
          variantType="block"
          onPress={goToProfile}
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
