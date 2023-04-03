import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import { Back, Button, Container, Forms, Pair, Title } from './styles'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

export function MoreInfos({ navigation }: any) {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Back
        onPress={() => {
          navigation.goBack()
        }}
      >
        ← Voltar
      </Back>

      <Title>
        <CustomText style={{ color: '#3F3D56' }} type="h1">
          Mais informações
        </CustomText>
      </Title>

      <Forms>
        <Pair>
          <CustomButton
            text={'Quando a atividade irá acontecer?'}
            variantType={'outline'}
            color="blue"
            onPress={() => setOpen(true)}
          ></CustomButton>

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
          />
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
