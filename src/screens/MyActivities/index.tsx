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
import { ActivityType } from '../../contexts/ActivitiesContext'
import { useTheme } from 'styled-components'

export function MyActivities({ navigation }: any) {
  const theme = useTheme()
  const [atividadesOrganizando, setAtividadesOrganizando] = useState<
    ActivityType[] | undefined
  >(undefined)
  const [atividadesParticipando, setAtividadesParticipando] = useState<
    ActivityType[] | undefined
  >(undefined)

  useEffect(() => {
    const getMinhasAtividades = async () => {
      try {
        const [response1, response2] = await Promise.all([
          api.get('/api/atividades/list-organizando/'),
          api.get('/api/atividades/list-participando/'),
        ])
        setAtividadesOrganizando(response1.data)
        setAtividadesParticipando(response2.data)
      } catch (error) {
        console.error(error)
      }
    }

    getMinhasAtividades()
  }, [])

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
        {atividadesOrganizando !== undefined ? (
          <PastActivityCardContainer
            horizontal={true}
            contentContainerStyle={{ gap: 20, paddingRight: 400 }}
          >
            {atividadesOrganizando.map((atividade, idx) => {
              return (
                <OtherActivityCard
                  key={idx}
                  activity={atividade.name}
                  mine={true}
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

        <ConfirmedActivitiesContainer>
          <ActivityAndButtons>
            <ActivityCard
              check={true}
              profissional={false}
              activity="Caminhada em grupo"
              organizer="Lucia"
              distance={0.1}
              quantity={8}
            ></ActivityCard>
            <CustomButton
              text="Adicionar alarme para essa atividade"
              textSize={14}
              variantType="block"
              color="blue"
            />
            <CustomButton
              text="Cancelar presença"
              textSize={14}
              variantType="outline"
              color="red"
            />
          </ActivityAndButtons>
          <ActivityAndButtons>
            <ActivityCard
              check={true}
              profissional={true}
              activity="Aula de Pilates"
              organizer="Bruno"
              distance={1}
              quantity={16}
            ></ActivityCard>
            <CustomButton
              text="Adicionar alarme para essa atividade"
              textSize={14}
              variantType="block"
              color="blue"
            />
            <CustomButton
              text="Cancelar presença"
              textSize={14}
              variantType="outline"
              color="red"
            />
          </ActivityAndButtons>
        </ConfirmedActivitiesContainer>
      </MainContentContainer>
      <PastActivities>
        <CustomText type="h2">Atividades Passadas</CustomText>
        <PastActivityCardContainer
          horizontal={true}
          contentContainerStyle={{ gap: 20, paddingRight: 200 }}
        >
          <OtherActivityCard
            activity="Oficina de Tricô"
            check={true}
            organizer="Lúcia"
          ></OtherActivityCard>
          <OtherActivityCard
            activity="Jogo de Baralho"
            check={true}
            organizer="Maria"
          ></OtherActivityCard>
          <OtherActivityCard
            activity="Campeonato de Dominó"
            check={true}
            organizer="Roberto"
          ></OtherActivityCard>
        </PastActivityCardContainer>
      </PastActivities>
    </MyActivitiesContainer>
  )
}
