import { useState } from 'react'
import { AddressSugestion } from '../../../components/AddressSugestion'
import { BackButton } from '../../../components/BackButton'
import { CustomText } from '../../../components/CustomText'
import * as S from './styles'
import api from '../../../services/api'
import { CustomButton } from '../../../components/CustomButton'
import { useTheme } from 'styled-components'

interface AddressType {
  name: string
  complement: string
  distance: number
  full_address: string[]
  latitude: number
  longitude: number
}

export function AskAdress({ navigation, route }: any) {
  const goToConfirmation = (
    need: boolean,
    name: string,
    desc: string,
    date: Date,
    max: string,
    adr: string,
    latitude: number,
    longitude: number,
  ) => {
    navigation.push('confirmation', {
      need,
      name,
      desc,
      date,
      max,
      adr,
      latitude,
      longitude,
    })
  }
  const theme = useTheme()
  const { need, name, desc, date, max } = route.params

  const [adress, setAdress] = useState('')
  const [addresses, setAddresses] = useState<AddressType[]>([])
  const [noResult, setNoResult] = useState(false)

  const ufpeCoords = {
    lat: -8.055363554937818,
    long: -34.9513776120133,
  }

  const getAddress = async (lat: number, long: number, adr: string) => {
    try {
      console.log(lat, long, adr)

      const response = await api.get('/api/address/', {
        params: { lat: long, lon: lat, address: adr },
      })
      console.log(response.data)
      if (typeof response.data === 'object' && response.data.length > 0) {
        console.log('entrou no if')

        await setAddresses(response.data)
        setNoResult(false)
      } else {
        console.log('entrou no else')

        setAddresses([])
        setNoResult(true)
      }
      console.log('passou den ovo')
    } catch (error) {
      console.error(error)
    }
  }

  const handleTextInputChange = (newAdr: string) => {
    setAdress(newAdr)
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
          <S.FilterCont>
            <S.TextInput
              placeholder={'Insira o endereço'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
              value={adress}
              onChangeText={(newAdr) => handleTextInputChange(newAdr)}
            />

            <CustomButton
              variantType="outline"
              color="blue"
              text="Pesquisar"
              onPress={() => {
                getAddress(ufpeCoords.lat, ufpeCoords.long, adress)
              }}
            ></CustomButton>
          </S.FilterCont>
        </S.Pair>

        <S.Suggestions>
          {addresses.map((add: AddressType, index) => {
            return (
              <AddressSugestion
                key={index}
                address={add.complement}
                distance={add.distance}
                locationName={add.name}
                onPress={() => {
                  goToConfirmation(
                    need,
                    name,
                    desc,
                    date,
                    max,
                    add.name,
                    add.latitude,
                    add.longitude,
                  )
                }}
              ></AddressSugestion>
            )
          })}
          {noResult && (
            <S.NoResult>
              <CustomText
                type="h2"
                centered={true}
                style={{ color: theme.color.GREY }}
              >
                Não encontramos nenhum endereço para sua busca
              </CustomText>
            </S.NoResult>
          )}
        </S.Suggestions>
      </S.Form>
    </S.Container>
  )
}
