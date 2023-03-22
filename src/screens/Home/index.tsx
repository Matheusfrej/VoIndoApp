import { Image } from 'react-native'

import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  CenteredCustomText,
  HomeContainer,
  LogoImg,
  WelcomeText,
  WelcomeTexts,
} from './styles'

export function Home({ navigation }: any) {
  const goToApresentation = () => {
    console.log('apertou')

    navigation.push('apresentation')
  }

  // comentario

  return (
    <HomeContainer>
      <Image source={require('../../../assets/presentation.png')} alt="" />
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
          Complete seu cadastro para recomendarmos atividades de acordo com seus
          interesses!
        </CenteredCustomText>
      </WelcomeTexts>

      <CustomButton
        text="Iniciar"
        color="orange"
        variantType="block"
        onPress={goToApresentation}
      />
    </HomeContainer>
  )
}
