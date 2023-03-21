import { TouchableHighlight, Image, View } from 'react-native'

import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  CenteredCustomText,
  FullTouchableHighlight,
  HomeContainer,
  LogoImg,
  WelcomeText,
  WelcomeTexts,
} from './styles'

export function Home({ navigation }) {
  const goToHub = () => {
    navigation.push('hub')
  }

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

      <FullTouchableHighlight onPress={goToHub}>
        <CustomButton text="Iniciar" color="orange" variantType="block" />
      </FullTouchableHighlight>
    </HomeContainer>
  )
}
