import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Container, Avatar, TextContainer, Buttons } from './styles'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Home2({ navigation }: any) {
  const [id, setId] = useState(0)

  const goToPreferences = () => {
    navigation.push('preferences')
  }

  const goToNeedProf = () => {
    navigation.push('needProf')
  }

  const getUserId = async () => {
    try {
      const id = await AsyncStorage.getItem('myid')
      setId(parseInt(id!))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserId()
  }, [])

  const goToProfile = () => {
    navigation.push('profile', { id })
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
