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
              setMax(selectedItem)
            }}
            defaultButtonText="Selecione a quantidade"
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
            // console.log(need)
            // console.log(name)
            // console.log(desc)
            // console.log(adr)
            // console.log(name)
            // console.log(date.toLocaleString())
            // console.log(max)
          }}
          variantType="block"
          text="Cadastrar"
        ></CustomButton>
      </FinalButton>
    </Container>
  )
}
