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
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(true)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    // setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false)
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
    setShow(true)
  }

  const showTimepicker = () => {
    showMode('time')
    setShow(true)
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
          <CustomText type="h3">selected: {date.toLocaleString()}</CustomText>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              // date={date}
              mode="time"
              is24Hour={true}
              onChange={onChange}
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
