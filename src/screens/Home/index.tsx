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

export function Home({ navigation }: any) {
  const goToPresentation = () => {
    console.log('apertou')

    navigation.push('home2')
  }

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
