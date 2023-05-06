import { useEffect, useState } from 'react'
import { ActivityCard } from '../../components/ActivityCard'
import { BackButton } from '../../components/BackButton'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { OtherActivityCard } from '../../components/OtherActivityCard'
import {
  ActivityAndButtons,
  ConfirmedActivitiesContainer,
  MainContentContainer,
  MyActivitiesContainer,
  MyActivitiesCustomText,
  MyActivitiesHeader,
  NoResult,
  PastActivities,
  PastActivityCardContainer,
  TitleContainer,
} from './styles'
import api from '../../services/api'
import { useTheme } from 'styled-components'
import { CustomSnackBar } from '../../components/CustomSnackBar'
import { useActivities } from '../../contexts/ActivitiesContext'

export function MyActivities({ navigation }: any) {
  const theme = useTheme()
  const [atividadesOrganizando, setAtividadesOrganizando] =
    useState<any>(undefined)
  const [atividadesConfirmadas, setAtividadesConfirmadas] =
    useState<any>(undefined)
  const [atividadesPassadas, setAtividadesPassadas] = useState<any>(undefined)
  const { setSnackBarStatus } = useActivities()

  useEffect(() => {
    const getMinhasAtividades = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          api.get('/api/atividades/list-organizando/'),
          api.get('/api/atividades/list-confirmadas/'),
          api.get('/api/atividades/list-passadas/'),
        ])
        setAtividadesOrganizando(response1.data)
        setAtividadesConfirmadas(response2.data)
        setAtividadesPassadas(response3.data)
      } catch (error) {
        console.error(error)
      }
    }

    getMinhasAtividades()
  }, [])

  const deleteActivity = async (id: number) => {
    try {
      const response = api.delete(`api/atividades/delete/${id}`)
      console.log(response)
      setSnackBarStatus(true, 'Atividade deletada com sucesso')
      const filteredActivities = atividadesOrganizando.filter(
        (item: any) => item.id !== id,
      )

      setAtividadesOrganizando(filteredActivities)
      setSnackBarStatus(true, 'Atividade deletada com sucesso')
    } catch (error) {
      console.log(error)
      setSnackBarStatus(false, 'Houve um erro ao deletar a atividade')
    }
  }

  const leaveActivity = async (id: number) => {
    try {
      const response = api.post(`api/atividades/sair-atividade/${id}`)
      console.log(response)
      setSnackBarStatus(true, 'Presença cancelada com sucesso')
      const filteredActivities = atividadesConfirmadas.filter(
        (item: any) => item.id !== id,
      )
      setAtividadesConfirmadas(filteredActivities)
    } catch (error) {
      console.log(error)
      setSnackBarStatus(false, 'Houve um erro ao sair da atividade')
    }
  }

  return (
    <MyActivitiesContainer>
      <MyActivitiesHeader>
        <BackButton
          onPress={() => {
            navigation.goBack()
          }}
        />
      </MyActivitiesHeader>
      <TitleContainer>
        <MyActivitiesCustomText type="h1" centered={true}>
          Minhas atividades
        </MyActivitiesCustomText>
      </TitleContainer>
      <PastActivities>
        <CustomText type="h2">Atividades que estou organizando</CustomText>
        {atividadesOrganizando !== undefined &&
        atividadesOrganizando.length > 0 ? (
          <PastActivityCardContainer
            horizontal={true}
            contentContainerStyle={{ gap: 20, paddingRight: 400 }}
          >
            {atividadesOrganizando.map((atividade: any, idx: any) => {
              return (
                <OtherActivityCard
                  key={idx}
                  activity={atividade.name}
                  mine={true}
                  onPress={() =>
                    navigation.push('detailedActivity', { id: atividade.id })
                  }
                  onPressDelete={() => deleteActivity(atividade.id)}
                ></OtherActivityCard>
              )
            })}
            {/* <OtherActivityCard
            activity="Campeonato de truco"
            mine={true}
          ></OtherActivityCard>
          <OtherActivityCard
            activity="Caminhada em grupo"
            mine={true}
          ></OtherActivityCard>
          <OtherActivityCard
            activity="Funcional na praia"
            mine={true}
          ></OtherActivityCard> */}
          </PastActivityCardContainer>
        ) : (
          <NoResult>
            <CustomText type="h2" style={{ color: theme.color.GREY }} centered>
              Você não está organizando nenhuma atividade no momento
            </CustomText>
          </NoResult>
        )}
      </PastActivities>

      <MainContentContainer>
        <CustomText type="h2">Atividades Confirmadas</CustomText>
        {atividadesConfirmadas !== undefined &&
        atividadesConfirmadas.length > 0 ? (
          <ConfirmedActivitiesContainer>
            {atividadesConfirmadas.map((atividade: any, idx: any) => {
              return (
                <ActivityAndButtons key={idx}>
                  <ActivityCard
                    check={atividade.creator.is_verified}
                    profissional={atividade.professional_required}
                    activity={atividade.name}
                    organizer={
                      atividade.creator.nickname || atividade.creator.first_name
                    }
                    distance={0.1}
                    quantity={8}
                    onPress={() =>
                      navigation.push('detailedActivity', { id: atividade.id })
                    }
                  ></ActivityCard>
                  <CustomButton
                    text="Cancelar presença"
                    textSize={14}
                    variantType="outline"
                    color="red"
                    onPress={() => leaveActivity(atividade.id)}
                  />
                </ActivityAndButtons>
              )
            })}
          </ConfirmedActivitiesContainer>
        ) : (
          <NoResult>
            <CustomText type="h2" style={{ color: theme.color.GREY }} centered>
              Você não está participando de nenhuma atividade no momento
            </CustomText>
          </NoResult>
        )}
      </MainContentContainer>
      <PastActivities>
        <CustomText type="h2">Atividades Passadas</CustomText>
        {atividadesPassadas !== undefined && atividadesPassadas.length > 0 ? (
          <PastActivityCardContainer
            horizontal={true}
            contentContainerStyle={{ gap: 20, paddingRight: 200 }}
          >
            {atividadesPassadas.map((atividade: any, idx: any) => {
              return (
                <OtherActivityCard
                  key={idx}
                  activity={atividade.name}
                  check={atividade.creator.is_verified}
                  organizer={
                    atividade.creator.nickname || atividade.creator.first_name
                  }
                  navigation={navigation}
                  id={atividade.id}
                  onPress={() =>
                    navigation.push('detailedActivity', { id: atividade.id })
                  }
                ></OtherActivityCard>
              )
            })}
          </PastActivityCardContainer>
        ) : (
          <NoResult>
            <CustomText type="h2" style={{ color: theme.color.GREY }} centered>
              Você ainda não participou de nenhuma atividade
            </CustomText>
          </NoResult>
        )}
      </PastActivities>
      <CustomSnackBar />
    </MyActivitiesContainer>
  )
}
