import { CustomButton } from '../../../components/CustomButton'
import { ActivityType } from '../../../contexts/ActivitiesContext'
import api from '../../../services/api'
import { FinalButton } from '../MoreInfos/styles'
import { Container } from './styles'

export function Confirm({ route }: any) {
  const { need, name, desc, date, max, adr, latitude, longitude } = route.params

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
      console.log('bom')
    } catch (error) {
      console.log('ruim')
      // console.error(error)
    }
  }
  return (
    <Container>
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
  )
}
