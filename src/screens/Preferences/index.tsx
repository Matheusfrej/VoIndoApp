import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  Avatar,
  CentralizedCustomText,
  Interests,
  InterestsHeader,
  InterestsList,
  MainContainer,
  MainTexts,
  Options,
  PreferencesContainer,
} from './styles'
import { Tag } from '../../components/Tag'
import { BackButton } from '../../components/BackButton'

export function Preferences({ navigation }: any) {
  const navigateToActivitiesList = (ordered: boolean) => {
    navigation.push('activitiesList', { ordered })
  }

  return (
    <PreferencesContainer>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
      />

      <MainContainer>
        <MainTexts>
          <CentralizedCustomText type="h2">
            Você deseja procurar atividades baseadas nos seus interesses?
          </CentralizedCustomText>
        </MainTexts>

        <Interests>
          <InterestsHeader>
            <CustomText type="h3">Seus interesses</CustomText>
            <CustomButton
              variantType="outline"
              text="Editar"
              color="blue"
              textSize={16}
              onPress={() => navigation.push('editProfile')}
            ></CustomButton>
          </InterestsHeader>

          <InterestsList>
            <Tag>Em grupo</Tag>
            <Tag>Atividades Físicas</Tag>

            <Tag>Aprender algo novo</Tag>
          </InterestsList>
        </Interests>

        <Options>
          <CustomButton
            text="Buscar atividades do meu interesse"
            variantType="block"
            color="blue"
            onPress={() => {
              navigateToActivitiesList(false)
            }}
            textSize={16}
          />
          <CustomText type="body">ou</CustomText>
          <CustomButton
            text="Ver todas as atividades disponíveis"
            variantType="outline"
            color="blue"
            textSize={16}
            style={{ width: '100%' }}
            onPress={() => {
              navigateToActivitiesList(true)
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
