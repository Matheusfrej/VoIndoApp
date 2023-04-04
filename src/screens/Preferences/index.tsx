import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  Avatar,
  Back,
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
      <Back
        onPress={() => {
          navigation.goBack()
        }}
      >
        {' '}
        ← Voltar
      </Back>

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
            variantType="large"
            color="blue"
            onPress={goToHub}
            textSize={14}
          />
          <CustomText type="body">ou</CustomText>
          <CustomButton
            text="Ver atividades que tenho mais interesse"
            variantType="large"
            color="blue"
            textSize={14}
            onPress={() => {
              navigation.push('activitiesList')
            }}
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
