import { useState } from 'react'
import { AddressSugestion } from '../../../components/AddressSugestion'
import { BackButton } from '../../../components/BackButton'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import * as S from './styles'

export function AskAdress({ navigation, route }: any) {
  const { need, name, desc } = route.params

  const [adress, setAdress] = useState('')

  const mockedAdress = [
    {
      adress: 'Rua real da torre 705',
      locationName: 'Casa de Mesel',
      distance: 1000,
    },
    {
      adress: 'Rua dom jose lopes 66',
      locationName: 'Casa de Frej',
      distance: 100,
    },
    {
      adress: 'Rua da aurora 1000',
      locationName: 'Casa de Gabriel',
      distance: 500,
    },
    {
      adress: 'Rua da hora 232',
      locationName: 'Casa de Filipe',
      distance: 100,
    },
    { adress: 'Rua 17 de agosto', locationName: 'Plaza', distance: 5000 },
  ]

  const goToMoreInfos = (
    need: boolean,
    name: string,
    desc: string,
    adr: string,
  ) => {
    navigation.push('moreInfos', { need, name, desc, adr })
  }

  return (
    <S.Container>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
        style={{ marginLeft: 0 }}
      />

      <S.Form>
        <CustomText type="h1" style={{ textAlign: 'center' }}>
          Local da atividade
        </CustomText>

        <S.Pair>
          <CustomText type="h3">Escolha o endereço:</CustomText>
          <S.TextInput
            placeholder={'Insira o endereço'}
            selectionColor={'#000'}
            placeholderTextColor={'#AAAAAA'}
            value={adress}
            onChangeText={(newAdr) => setAdress(newAdr)}
          />
        </S.Pair>

        <S.Suggestions>
          {mockedAdress.map((add, index) => {
            return (
              <AddressSugestion
                key={index}
                address={add.adress}
                distance={add.distance}
                locationName={add.locationName}
              ></AddressSugestion>
            )
          })}
        </S.Suggestions>

        <S.Button>
          <CustomButton
            variantType="block"
            text="Prosseguir"
            onPress={() => goToMoreInfos(need, name, desc, 'casa de frej')}
          ></CustomButton>
        </S.Button>
      </S.Form>
    </S.Container>
  )
}
