import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  CenteredCustomText,
  HomeContainer,
  LogoImg,
  WelcomeText,
  Button,
  WelcomeTexts,
  Img,
} from './styles'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import api from '../../services/api'

export function Home({ navigation }: any) {
  const [activities, setActivities] = useState<any>([])

  const goToPresentation = () => {
    console.log('apertou')

    navigation.push('home2')
  }

  useEffect(() => {
    const getActivities = async () => {
      try {
        console.log('oiiii')
        const response = await api.get('/api/atividade/list-all')
        console.log(response.data)
        console.log('oiiii2')

        setActivities(response.data)
      } catch (error) {
        console.log('oiiii erro')
        // throw new Error(error)
        console.error(error)
      }
    }

    getActivities()
  }, [])

  // comentario

  return (
    <HomeContainer>
      <Img source={require('../../../assets/presentation.png')} alt="" />

      <WelcomeTexts>
        <WelcomeText>
          <CustomText type="h1">Seja bem vindo ao </CustomText>
          <LogoImg
            source={require('../../../assets/logo.png')}
            alt=""
            style={{ resizeMode: 'contain' }}
          />
        </WelcomeText>
        <CenteredCustomText type="body">
          Aqui você pode encontrar atividades adequadas para idosos, oferecidas
          por profissionais confiáveis ou por outros idosos usuários do app.
        </CenteredCustomText>
        <CenteredCustomText type="body">
          Complete seu cadastro para recomendarmos atividades de acordo com seus
          interesses!
        </CenteredCustomText>
      </WelcomeTexts>

      {activities.length > 0 && (
        <CustomText type="span">{activities[0].description}</CustomText>
      )}
      {/* <CustomText type="span">{'oi' || activities[0].description}</CustomText> */}
      {/* ;-; activities.length > 0 && */}
      <Button>
        <CustomButton
          text="Iniciar"
          color="orange"
          variantType="block"
          onPress={goToPresentation}
        />
      </Button>
    </HomeContainer>
  )
}
