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
import { UserInfo } from '../Profile'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Preferences({ navigation }: any) {
  const [infos, setInfos] = useState<UserInfo>()

  const navigateToActivitiesList = (ordered: boolean) => {
    navigation.push('activitiesList', { ordered })
  }

  const getUserId = async () => {
    try {
      const id = await AsyncStorage.getItem('myid')
      getProfileInfos(parseInt(id!))
    } catch (error) {
      console.log(error)
    }
  }

  const getProfileInfos = async (id: number) => {
    try {
      const response = await api.get(`api/users/detail/${id}`)
      setInfos(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserId()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              onPress={() => {
                if (infos !== undefined)
                  navigation.push('editProfile', { infos })
              }}
            ></CustomButton>
          </InterestsHeader>

          <InterestsList>
            {infos !== undefined &&
              infos.tags?.map((tag, idx) => {
                return <Tag key={idx}>{tag.name}</Tag>
              })}
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
