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
  PastActivities,
  PastActivityCardContainer,
  TitleContainer,
} from './styles'

export function MyActivities({ navigation }: any) {
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
        <PastActivityCardContainer
          horizontal={true}
          contentContainerStyle={{ gap: 20, paddingRight: 200 }}
        >
          <OtherActivityCard
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
          ></OtherActivityCard>
        </PastActivityCardContainer>
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
