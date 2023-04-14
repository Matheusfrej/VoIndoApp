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

export function MoreInfos({ navigation, route }: any) {
  const goToAskAddress = (
    need: boolean,
    name: string,
    desc: string,
    date: Date,
    max: string,
  ) => {
    navigation.push('askAddress', { need, name, desc, date, max })
  }

  const { need, name, desc } = route.params

  const theme = useTheme()
  const [date, setDate] = useState(new Date())
  const [max, setMax] = useState('-1')
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)
  const quantity = ['Sem limites', '1', '2', '3', '4', '5', '8', '10']

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShowDate(false)
    setDate(currentDate)
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
          <CustomText type="h3" centered={true}>
            Data e hora selecionada:{' '}
            {date.toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
              timeZone: 'America/Sao_Paulo',
            })}
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
              width: '100%',
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
            goToAskAddress(need, name, desc, date, max)
          }}
          variantType="block"
          text="Prosseguir"
        ></CustomButton>
      </FinalButton>
    </Container>
  )
}
