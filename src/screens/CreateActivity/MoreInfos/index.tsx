import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { BackButton } from '../../../components/BackButton'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import {
  Button,
  Container,
  FinalButton,
  Forms,
  Pair,
  TextInput,
  Title,
} from './styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import SelectDropdown from 'react-native-select-dropdown'
import { ActivityType } from '../../../contexts/ActivitiesContext'
import api from '../../../services/api'

export function MoreInfos({ navigation, route }: any) {
  const { need, name, desc, adr } = route.params

  const theme = useTheme()
  const [date, setDate] = useState(new Date())
  const [max, setMax] = useState('')

  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const quantity = ['Sem limites', '1', '2', '3', '4', '5', '8', '10']

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShowDate(false)
    setDate(currentDate)
  }

  const postNewActivity = async (
    need: boolean,
    name: string,
    desc: string,
    adr: string,
    date: Date,
    max: string,
  ) => {
    const newActivity: ActivityType = {
      name,
      address: adr,
      description: desc,
      participants_limit: max,
      professional_required: need,
      latitude: -8.127497893953393,
      longitude: -34.89946246037277,
      ocorrencias: [{ data_time: date }],
    }
    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      const response = await api.post(
        '/api/atividades/create-update/',
        newActivity,
        {
          withCredentials: false,
          headers,
        },
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const onChangeTime = (event: any, selectedTime: any) => {
    const currentTime = selectedTime
    setShowTime(false)

    setDate(currentTime)
  }

  // const showMode = (currentMode) => {
  //   if (Platform.OS === 'android') {
  //     setShow(false)
  //     // for iOS, add a button that closes the picker
  //   }
  //   setMode(currentMode)
  // }

  const showDatepicker = () => {
    // showMode('date')
    setShowDate(true)
  }

  const showTimepicker = () => {
    // showMode('time')
    setShowTime(true)
  }

  return (
    <Container>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
      />

      <Title>
        <CustomText style={{ color: theme.color['BLACK-2'] }} type="h1">
          Mais informações
        </CustomText>
      </Title>

      <Forms>
        <Button>
          <CustomButton
            variantType="outline"
            text="Escolher uma data"
            onPress={showDatepicker}
            style={{ width: 280 }}
          ></CustomButton>
          <CustomButton
            variantType="outline"
            text="Escolher uma hora"
            onPress={showTimepicker}
            style={{ width: 280 }}
          ></CustomButton>
          <CustomText type="h3">
            Data e hora selecionada: {date.toLocaleString()}
          </CustomText>
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
          {showTime && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              // date={date}
              mode="time"
              is24Hour={true}
              onChange={onChangeTime}
            />
          )}
        </Button>

        <Pair>
          <CustomText type="h3">Existe uma frequência?</CustomText>
          <TextInput
            placeholder={'Insira a frequência da atividade'}
            selectionColor={'#000'}
            placeholderTextColor={'#AAAAAA'}
          />
        </Pair>

        <Pair>
          <CustomText type="h3">Número máximo de participantes</CustomText>
          <SelectDropdown
            data={quantity}
            onSelect={(selectedItem, index) => {
              if (selectedItem === 'Sem limites') {
                setMax('-1')
              } else {
                setMax(selectedItem)
              }
            }}
            defaultValue={'Sem limites'}
            buttonStyle={{
              width: 320,
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </Pair>
      </Forms>

      <FinalButton>
        <CustomButton
          onPress={() => {
            postNewActivity(need, name, desc, adr, date, max)
          }}
          variantType="block"
          text="Cadastrar"
        ></CustomButton>
      </FinalButton>
    </Container>
  )
}
