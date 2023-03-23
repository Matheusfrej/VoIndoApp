import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  Avatar,
  BackButton,
  CentralizedCustomText,
  MainContainer,
  MainTexts,
  Options,
  PreferencesContainer,
  TextContainer,
} from './styles'

export function Preferences({ navigation }: any) {
  const goToHub = () => {
    navigation.push('hub')
  }

  return (
    <PreferencesContainer>
      <BackButton>
        <CustomButton
          text="Voltar"
          textSize={12}
          variantType="small"
          color="orange"
          onPress={() => {
            navigation.goBack()
          }}
        />
      </BackButton>

      <MainContainer>
        <MainTexts>
          <CentralizedCustomText type="h2">
            De que maneira prefere buscar atividades?
          </CentralizedCustomText>

          <TextContainer>
            <CentralizedCustomText type="body">
              Podemos te sugerir atividades com base nos seus gostos
            </CentralizedCustomText>
          </TextContainer>
        </MainTexts>

        <Options>
          <CustomButton
            text="Buscar Atividades mais próximas a mim"
            variantType="block"
            color="orange"
            onPress={goToHub}
            textSize={14}
          />
          <CustomText type="body">ou</CustomText>
          <CustomButton
            text="Ver atividades que tenho mais interesse"
            variantType="block"
            color="orange"
            textSize={14}
            onPress={goToHub}
          />
        </Options>
      </MainContainer>

      <Avatar>
        <Image
          source={require('../../../assets/avatar/avatar-eyes-to-right.png')}
          alt=""
        ></Image>
      </Avatar>
    </PreferencesContainer>
  )
}
