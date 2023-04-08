import { BackButton } from '../../components/BackButton'
import { CustomButton } from '../../components/CustomButton'
import { Image } from 'react-native'
import {
  IconAndLevel,
  Identity,
  LevelContainer,
  MainLevelContent,
  PersonProfileContainer,
  PersonSubtitle,
  PreferencesList,
  PreferencesProfileContainer,
  ProfileContainer,
  ProfileContainerHeader,
  QuantityAndText,
} from './styles'
import { CustomText } from '../../components/CustomText'
import { Tag } from '../../components/Tag'

interface ProfileProps {
  navigation: any
  route: any
}

export function Profile({ navigation, route }: ProfileProps) {
  const { mine } = route.params
  return (
    <ProfileContainer>
      <ProfileContainerHeader>
        <BackButton onPress={() => navigation.goBack()}></BackButton>
        {mine && (
          <CustomButton
            text="Editar"
            variantType="small"
            textSize={16}
            color="grey"
          />
        )}
      </ProfileContainerHeader>
      <PersonProfileContainer>
        <Image
          source={require('../../../assets/senhora.png')}
          alt=""
          style={{ width: 100, height: 100 }}
        />
        <CustomText
          type="h1"
          centered={true}
          style={{ color: '#3F3D56', marginTop: 24 }}
        >
          Maria Conceição
        </CustomText>
        <PersonSubtitle>
          <CustomText
            type="subtitle"
            centered={true}
            style={{ color: '#3F3D56' }}
          >
            72 anos.
          </CustomText>
          <CustomText
            type="subtitle"
            centered={true}
            style={{ color: '#3F3D56' }}
          >
            Membro desde jan/2023
          </CustomText>
        </PersonSubtitle>
        <Identity>
          <CustomText type="subtitle" style={{ fontSize: 20 }}>
            Identidade não confirmada
          </CustomText>
          {mine && (
            <CustomButton
              text="Confirmar identidade"
              color="blue"
              variantType="default"
            />
          )}
        </Identity>

        <LevelContainer>
          <IconAndLevel>
            <Image source={require('../../../assets/crown.png')} alt="" />
            <CustomText type="h2">Nivel 2</CustomText>
          </IconAndLevel>
          <MainLevelContent>
            <QuantityAndText>
              <CustomText
                type="h1"
                style={{ color: '#EC6C01' }}
                centered={true}
              >
                8
              </CustomText>
              <CustomText type="subtitle" centered={true}>
                participações em atividades
              </CustomText>
            </QuantityAndText>
            <QuantityAndText>
              <CustomText
                type="h1"
                style={{ color: '#EC6C01' }}
                centered={true}
              >
                0
              </CustomText>
              <CustomText type="subtitle" centered={true}>
                atividades organizadas
              </CustomText>
            </QuantityAndText>
          </MainLevelContent>
          <CustomText
            type="body"
            style={{ color: '#667A8C', paddingRight: 30 }}
          >
            Você pode aumentar seu nível participando ou organizando atividades
          </CustomText>
        </LevelContainer>
        <PreferencesProfileContainer>
          <CustomText type="h3">Preferências</CustomText>
          <PreferencesList>
            <Tag>Atividade Física</Tag>
            <Tag>Em grupo</Tag>
          </PreferencesList>
        </PreferencesProfileContainer>
      </PersonProfileContainer>
    </ProfileContainer>
  )
}
