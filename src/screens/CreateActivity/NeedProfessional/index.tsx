import { Image } from 'react-native'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import { Avatar, Back, Buttons, Container, Ou, Texts } from './styles'

export function NeedProfessional({ navigation }: any) {
  const goToRegister = (need: boolean) => {
    navigation.push('registerActivity', { need })
  }
  return (
    <Container>
      <Back
        onPress={() => {
          navigation.goBack()
        }}
      >
        ← Voltar
      </Back>

      <Texts>
        <CustomText style={{ textAlign: 'center' }} type="h1">
          A atividade que você quer criar precisa de um profissional
          qualificado?
        </CustomText>

        <CustomText style={{ textAlign: 'center' }} type="body">
          Algumas atividades relacionadas a saúde e ensino só podem ser
          ministradas por profissionais da área
        </CustomText>
      </Texts>

      <Buttons>
        <CustomButton
          variantType="block"
          text="Sim"
          color="blue"
          onPress={() => goToRegister(true)}
        ></CustomButton>

        <Ou>
          <CustomText type="body">ou</CustomText>
        </Ou>

        <CustomButton
          variantType="block"
          text="Não"
          color="blue"
          onPress={() => goToRegister(false)}
        ></CustomButton>
      </Buttons>

      <Avatar>
        <Image
          source={require('../../../../assets/avatar/avatar-happy2.png')}
          alt=""
        />
      </Avatar>
    </Container>
  )
}
