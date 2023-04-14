import { useTheme } from 'styled-components'
import { BackButton } from '../../../components/BackButton'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import { ActivityType } from '../../../contexts/ActivitiesContext'
import api from '../../../services/api'
import {
  Container,
  Pair,
  FinalButton,
  Title,
  BigContainer,
  MyMapView,
  WhereMap,
} from './styles'
import { Marker } from 'react-native-maps'

export function Confirm({ navigation, route }: any) {
  const { need, name, desc, date, max, adr, latitude, longitude } = route.params
  const theme = useTheme()

  const postNewActivity = async (
    need: boolean,
    name: string,
    desc: string,
    adr: string,
    date: Date,
    max: string,
    latitude: number,
    longitude: number,
  ) => {
    const newActivity: ActivityType = {
      name,
      address: adr,
      description: desc,
      participants_limit: max,
      professional_required: need,
      latitude,
      longitude,
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
      // console.log(response)
      console.log(response.data)
    } catch (error) {
      console.log('ruim')
      // console.error(error)
    }
  }
  return (
    <BigContainer>
      <Container>
        <BackButton
          onPress={() => {
            navigation.goBack()
          }}
        />
        <Title>
          <CustomText
            style={{ color: theme.color['BLACK-2'] }}
            type="h1"
            centered={true}
          >
            Confirmar criação da atividade
          </CustomText>
        </Title>
        <Pair>
          <CustomText type="h3" style={{ fontWeight: 'bold' }}>
            Nome da atividade:
          </CustomText>

          <CustomText type="body">{name}</CustomText>
        </Pair>

        <Pair>
          <CustomText type="h3" style={{ fontWeight: 'bold' }}>
            Descrição da atividade:
          </CustomText>

          <CustomText type="body">{desc}</CustomText>
        </Pair>

        <Pair>
          <CustomText type="h3" style={{ fontWeight: 'bold' }}>
            Data e hora:
          </CustomText>

          <CustomText type="body">{date.toLocaleString()}</CustomText>
        </Pair>

        <Pair>
          <CustomText type="h3" style={{ fontWeight: 'bold' }}>
            Quantidade máxima de participantes:
          </CustomText>

          <CustomText type="body">
            {max === -1 ? 'Sem limites' : max}
          </CustomText>
        </Pair>

        <Pair>
          <CustomText type="h3" style={{ fontWeight: 'bold' }}>
            Endereço:
          </CustomText>

          <CustomText type="body">{adr}</CustomText>
        </Pair>

        <MyMapView>
          <WhereMap
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0021,
            }}
          >
            <Marker
              coordinate={{
                latitude,
                longitude,
              }}
              title={name}
              description="Ponto de encontro"
            />
          </WhereMap>
        </MyMapView>

        <FinalButton>
          <CustomButton
            onPress={() => {
              postNewActivity(
                need,
                name,
                desc,
                adr,
                date,
                max,
                latitude,
                longitude,
              )
              // console.log(need, name, desc, adr, date, max, latitude, longitude)
            }}
            variantType="block"
            text="Cadastrar"
          ></CustomButton>
        </FinalButton>
      </Container>
    </BigContainer>
  )
}
