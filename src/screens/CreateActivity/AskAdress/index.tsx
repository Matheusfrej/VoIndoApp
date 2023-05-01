import { useState } from 'react'
import { AddressSugestion } from '../../../components/AddressSugestion'
import { BackButton } from '../../../components/BackButton'
import { CustomText } from '../../../components/CustomText'
import * as S from './styles'
import api from '../../../services/api'
import { CustomButton } from '../../../components/CustomButton'
import { useTheme } from 'styled-components'
import { TagType, useActivities } from '../../../contexts/ActivitiesContext'

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
    max: string,
    adr: string,
    latitude: number,
    longitude: number,
    tagsSelected: TagType[],
  ) => {
    navigation.push('confirmation', {
      need,
      name,
      desc,
      max,
      adr,
      latitude,
      longitude,
      tagsSelected,
    })
  }
  const theme = useTheme()
  const { need, name, desc, max, tagsSelected } = route.params

  const { getLocalization } = useActivities()
  // console.log('no ask adress', tagsSelected)

  const [adress, setAdress] = useState('')
  const [addresses, setAddresses] = useState<AddressType[]>([])
  const [noResult, setNoResult] = useState(false)

  const getAddress = async (adr: string) => {
    try {
      // console.log(lat, long, adr)
      const location = await getLocalization()

      const lat = location?.coords.latitude
      const long = location?.coords.longitude

      const response = await api.get('/api/address/', {
        params: { lat, lon: long, address: adr },
      })
      // console.log(response.data)
      if (typeof response.data === 'object' && response.data.length > 0) {
        // console.log('entrou no if')

        await setAddresses(response.data)
        setNoResult(false)
      } else {
        // console.log('entrou no else')

        setAddresses([])
        setNoResult(true)
      }
      // console.log('passou den ovo')
    } catch (error) {
      // console.error(error)
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
              onChangeText={(newAdr) => {
                handleTextInputChange(newAdr)
                // getAddress(newAdr)
              }}
            />

            <CustomButton
              variantType="outline"
              color="blue"
              text="Pesquisar"
              onPress={() => {
                getAddress(adress)
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
                    max,
                    add.name,
                    add.latitude,
                    add.longitude,
                    tagsSelected,
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
                Não encontramos nenhum endereço para sua busca. Tente
                especificar mais o local.
              </CustomText>
            </S.NoResult>
          )}
        </S.Suggestions>
      </S.Form>
    </S.Container>
  )
}
