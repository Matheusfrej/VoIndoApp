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
import { useTheme } from 'styled-components'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { TagType } from '../../contexts/ActivitiesContext'

interface ProfileProps {
  navigation: any
  route: any
}

export interface UserInfo {
  id: number
  email: string
  nickname?: string
  first_name: string
  last_name: string
  birth_date: Date | null
  tags?: TagType[]
  comorbidities?: any
  age: number
  total_participacoes: number
  total_atividades_organizadas: number
}

export function Profile({ navigation, route }: ProfileProps) {
  const { mine, id } = route.params
  const theme = useTheme()
  const [infos, setInfos] = useState<UserInfo>()

  const getProfileInfos = async () => {
    try {
      if (mine) {
        const response = await api.get('api/users/detail/2')
        setInfos(response.data)
      } else {
        const response = await api.get(`api/users/detail/${id}`)
        setInfos(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfileInfos()
    console.log(infos)
  }, [])

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
            onPress={() => navigation.push('editProfile', { infos })}
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
          style={{ color: theme.color['BLACK-2'], marginTop: 24 }}
        >
          {infos?.first_name} {infos?.last_name}
        </CustomText>
        <PersonSubtitle>
          <CustomText
            type="subtitle"
            centered={true}
            style={{ color: theme.color['BLACK-2'] }}
          >
            {infos?.age} anos
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
                style={{ color: theme.color['SECONDARY-SATURATED'] }}
                centered={true}
              >
                {infos?.total_participacoes}
              </CustomText>
              <CustomText type="subtitle" centered={true}>
                participações em atividades
              </CustomText>
            </QuantityAndText>
            <QuantityAndText>
              <CustomText
                type="h1"
                style={{ color: theme.color['SECONDARY-SATURATED'] }}
                centered={true}
              >
                {infos?.total_atividades_organizadas}
              </CustomText>
              <CustomText type="subtitle" centered={true}>
                atividades organizadas
              </CustomText>
            </QuantityAndText>
          </MainLevelContent>
          <CustomText
            type="body"
            style={{ color: theme.color.GREY, paddingRight: 30 }}
          >
            Você pode aumentar seu nível participando ou organizando atividades
          </CustomText>
        </LevelContainer>
        <PreferencesProfileContainer>
          <CustomText type="h3">Preferências</CustomText>
          <PreferencesList>
            {infos?.tags !== undefined &&
              infos!.tags?.length > 0 &&
              infos?.tags.map((tag) => {
                return <Tag key={tag.id}>{tag.name}</Tag>
              })}
          </PreferencesList>
        </PreferencesProfileContainer>
      </PersonProfileContainer>
    </ProfileContainer>
  )
}
