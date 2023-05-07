import { useState } from 'react'
import { AddressSugestion } from '../../../components/AddressSugestion'
import { BackButton } from '../../../components/BackButton'
import { CustomText } from '../../../components/CustomText'
import * as S from './styles'
import api from '../../../services/api'
import { CustomButton } from '../../../components/CustomButton'
import { useTheme } from 'styled-components'
import { TagType, useActivities } from '../../../contexts/ActivitiesContext'
import { ActivityIndicator } from 'react-native'

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
    price: string,
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
      price,
    })
  }
  const theme = useTheme()
  const { need, name, desc, max, tagsSelected, price } = route.params

  const { local, getLocalization } = useActivities()
  // console.log('no ask adress', tagsSelected)

  const [adress, setAdress] = useState('')
  const [addresses, setAddresses] = useState<AddressType[]>([])
  const [noResult, setNoResult] = useState(false)
  const [areAdressessNotLoading, setAreAdressessNotLoading] = useState(false)
  // const [localization, setLocalization] = useState<any>()

  // useEffect(() => {
  //   setLocalization(getLocalization())
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const getAddress = async (adr: string) => {
    try {
      // console.log(lat, long, adr)
      // console.log('entrou na funcao')
      // console.log(localization)

      setAreAdressessNotLoading(true)
      setNoResult(false)
      // console.log('veio até essa parte')

      // console.log('veio até aqui')
      let lat = 0
      let lon = 0
      if (local._j === null) {
        const localaux = await getLocalization()
        lat = localaux!.coords.latitude
        lon = localaux!.coords.longitude
      } else {
        lat = local._j.coords.latitude
        lon = local._j.coords.longitude
      }

      const response = await api.get('/api/address/', {
        params: { lat, lon, address: adr },
      })
      // console.log(response.data)
      if (typeof response.data === 'object' && response.data.length > 0) {
        // console.log('entrou no if')

        setAddresses(response.data)
        setNoResult(false)
        setAreAdressessNotLoading(false)
      } else {
        // console.log('entrou no else')

        setAddresses([])
        setNoResult(true)
        setAreAdressessNotLoading(false)
      }
      // console.log('passou den ovo')
    } catch (error) {
      setAddresses([])
      setNoResult(true)
      setAreAdressessNotLoading(false)
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
          {!areAdressessNotLoading &&
            addresses.map((add: AddressType, index) => {
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
                      price,
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
          {areAdressessNotLoading && (
            <S.LoadingContainer>
              <ActivityIndicator size="large" color={theme.color.PRIMARY} />
              <CustomText type="body">Buscando endereços...</CustomText>
            </S.LoadingContainer>
          )}
        </S.Suggestions>
      </S.Form>
    </S.Container>
  )
}
