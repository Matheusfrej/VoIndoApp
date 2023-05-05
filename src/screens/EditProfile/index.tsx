import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { CustomText } from '../../components/CustomText'
import {
  Container,
  ButtonContainer,
  EditProfileContainer,
  EditProfileForm,
  EditProfileInputContainer,
  EditProfileTitle,
  TextInput,
  PairTouchable,
  Pair,
} from './styles'
import { CustomButton } from '../../components/CustomButton'
import { TagType, useActivities } from '../../contexts/ActivitiesContext'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Switch } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { CustomSnackBar } from '../../components/CustomSnackBar'

export function EditProfile({ navigation, route }: any) {
  const theme = useTheme()
  const { setSnackBarStatus } = useActivities()
  const { infos } = route.params

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [nickname, setNickname] = useState('')

  const [tags, setTags] = useState<TagType[]>([])
  const [tagsSelected, setTagsSelected] = useState<TagType[]>([])

  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShowDate(false)

    setDate(currentDate)
  }

  const showDatepicker = () => {
    // showMode('date')
    setShowDate(true)
  }

  useEffect(() => {
    setFirstName(infos.first_name)
    setLastName(infos.last_name)
    setTagsSelected(infos.tags!)
    setNickname(infos.nickname!)
    if (infos.birth_date !== null) {
      setDate(new Date(infos.birth_date))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTags = async () => {
    try {
      const response = await api.get('/api/tags/list-all/')

      setTags(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const submitEditProfile = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
        nickname,
        first_name: firstName,
        last_name: lastName,
        birth_date: date.toISOString().split('T')[0],
        tags: tagsSelected,
      }
      console.log(data)

      const response = await api.put('/api/users/edit-profile/', data, {
        withCredentials: false,
        headers,
      })
      console.log(response.data)
      setSnackBarStatus(true, 'Perfil editado com sucesso!')
      setTimeout(() => {
        navigation.goBack()
      }, 3000)
    } catch (error) {
      console.log(error)
      setSnackBarStatus(false, 'Houve um erro ao editar o perfil')
    }
  }

  useEffect(() => {
    getTags()
  }, [])

  const handleTagChange = (tag: TagType) => {
    if (
      tagsSelected.find((tagSelected) => tagSelected.name === tag.name) !==
      undefined
    ) {
      setTagsSelected(
        tagsSelected.filter((tagSelected) => tagSelected.name !== tag.name),
      )
    } else {
      setTagsSelected([...tagsSelected, tag])
    }
  }

  return (
    <Container>
      <BackButton
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 24 }}
      />

      <EditProfileContainer>
        <EditProfileTitle>
          <CustomText
            type="h1"
            centered={true}
            style={{ color: theme.color['BLACK-2'] }}
          >
            Editar Perfil
          </CustomText>
        </EditProfileTitle>

        <EditProfileForm>
          <EditProfileInputContainer>
            <CustomText type="h3">Primeiro nome</CustomText>
            <TextInput
              selectionColor={'#000'}
              placeholder={'Insira seu primeiro nome'}
              placeholderTextColor={'#AAAAAA'}
              value={firstName}
              onChangeText={(newName) => setFirstName(newName)}
            />
          </EditProfileInputContainer>
          <EditProfileInputContainer>
            <CustomText type="h3">Último nome</CustomText>
            <TextInput
              placeholder={'Insira seu último nome'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
              value={lastName}
              onChangeText={(newName) => setLastName(newName)}
            />
          </EditProfileInputContainer>
          <EditProfileInputContainer>
            <CustomText type="h3">Apelido</CustomText>
            <TextInput
              placeholder={'Insira seu apelido'}
              defaultValue={infos.nickname}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
              value={nickname}
              onChangeText={(newName) => setNickname(newName)}
            />
          </EditProfileInputContainer>

          <Pair>
            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                // date={date}
                mode="date"
                is24Hour={true}
                onChange={onChangeDate}
              />
            )}
            <CustomText type="h3" centered>
              Sua data de nascimento:
            </CustomText>
            <CustomText type="h3" centered>
              {date.toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </CustomText>
            <CustomButton
              variantType="outline"
              text="Alterar data de nascimento"
              onPress={showDatepicker}
              style={{ width: 280 }}
              color="blue"
            ></CustomButton>
          </Pair>

          <Pair>
            <CustomText type="h3">Prefências</CustomText>
            {tagsSelected !== undefined &&
              tags.map((tag, index) => {
                return (
                  <PairTouchable
                    key={index}
                    onPress={() => handleTagChange(tag)}
                  >
                    <Switch
                      thumbColor={
                        tagsSelected.find(
                          (tagSelected) => tagSelected.name === tag.name,
                        ) !== undefined
                          ? theme.color['SECONDARY-SATURATED']
                          : theme.color.BG
                      }
                      trackColor={{
                        false: '#aaa',
                        true: theme.color['SECONDARY-LIGHT'],
                      }}
                      value={
                        tagsSelected.find(
                          (tagSelected) => tagSelected.name === tag.name,
                        ) !== undefined
                      }
                      onValueChange={() => handleTagChange(tag)}
                    />
                    <CustomText type="span">{tag.name}</CustomText>
                  </PairTouchable>
                )
              })}
          </Pair>
        </EditProfileForm>
        <ButtonContainer>
          <CustomButton
            variantType="block"
            color="orange"
            text="Editar"
            onPress={() => submitEditProfile()}
          />
        </ButtonContainer>
      </EditProfileContainer>
      <CustomSnackBar />
    </Container>
  )
}
