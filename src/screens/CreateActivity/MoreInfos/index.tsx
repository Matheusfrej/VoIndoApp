import React, { useState } from 'react'
import { useTheme } from 'styled-components'
import { BackButton } from '../../../components/BackButton'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import { Button, Container, Forms, Pair, Title } from './styles'
import DateTimePicker from '@react-native-community/datetimepicker'
import { Platform } from 'react-native'

export function MoreInfos({ navigation }: any) {
  // const [open, setOpen] = useState(true)
  const theme = useTheme()
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [showDate, setShowDate] = useState(false)
  const [showTime, setShowTime] = useState(false)

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate
    setShowDate(false)
    setDate(currentDate)
  }

  const onChangeTime = (event, selectedTime) => {
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
        <Pair>
          {/* 
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />  */}
          <CustomButton
            variantType="outline"
            text="Escolher uma data"
            onPress={showDatepicker}
          ></CustomButton>
          <CustomButton
            variantType="outline"
            text="Escolher uma hora"
            onPress={showTimepicker}
          ></CustomButton>
          <CustomText type="h3">selected: {date.toLocaleString()}</CustomText>
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
        </Pair>

        <Pair>
          <CustomText type="h3">Existe uma frequência?</CustomText>
        </Pair>

        <Pair>
          <CustomText type="h3">Número máximo de participantes</CustomText>
        </Pair>
      </Forms>

      <Button>
        <CustomButton variantType="block" text="Cadastrar"></CustomButton>
      </Button>
    </Container>
  )
}
