import { BackButton } from '../../components/BackButton'
import { CustomButton } from '../../components/CustomButton'
import { Image } from 'react-native'
import {
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
  profile_image: string
  is_verified: boolean
}

export function Profile({ navigation, route }: ProfileProps) {
  const { id } = route.params
  const theme = useTheme()

  const [mine, setMine] = useState(false)
  const [infos, setInfos] = useState<UserInfo>()

  const getUserId = async () => {
    try {
      const response = await api.get('/api/users/get-my-id/')
      if (id === response.data.id) setMine(true)
    } catch (error) {
      console.log(error)
    }
  }

  const getProfileInfos = async () => {
    try {
      const response = await api.get(`api/users/detail/${id}`)
      console.log(response.data)

      setInfos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfileInfos()
    getUserId()
    console.log(infos?.profile_image)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ProfileContainer>
      <ProfileContainerHeader>
        <BackButton
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15 }}
        ></BackButton>
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
        {infos?.profile_image !== undefined && infos?.profile_image !== null ? (
          <Image
            source={{ uri: infos.profile_image }}
            alt=""
            style={{ width: 100, height: 100, borderRadius: 20 }}
          />
        ) : (
          <Image
            source={require('../../../assets/NoProfilePic.png')}
            alt=""
            style={{ width: 100, height: 100, borderRadius: 20 }}
          />
        )}

        <CustomText
          type="h1"
          centered={true}
          style={{ color: theme.color['BLACK-2'], marginTop: 24 }}
        >
          {infos?.first_name} {infos?.last_name}
        </CustomText>
        <PersonSubtitle>
          {infos?.age !== undefined && infos?.age > 0 ? (
            <CustomText
              type="subtitle"
              centered={true}
              style={{ color: theme.color['BLACK-2'] }}
            >
              {infos?.age} anos
            </CustomText>
          ) : (
            <CustomText
              type="subtitle"
              centered={true}
              style={{ color: theme.color['BLACK-2'] }}
            >
              Idade não informada
            </CustomText>
          )}
        </PersonSubtitle>
        <Identity>
          {!infos?.is_verified && (
            <>
              <CustomText type="subtitle" style={{ fontSize: 20 }}>
                Identidade não confirmada
              </CustomText>
              {mine && (
                <CustomButton
                  text="Confirmar identidade"
                  color="blue"
                  variantType="default"
                  onPress={() => navigation.push('confirmIdentity')}
                />
              )}
            </>
          )}
          {infos?.is_verified && (
            <>
              <CustomText type="subtitle" style={{ fontSize: 20 }}>
                Identidade confirmada
              </CustomText>
              <Image
                source={require('../../../assets/verificado.png')}
                alt=""
              />
            </>
          )}
        </Identity>

        <LevelContainer>
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
