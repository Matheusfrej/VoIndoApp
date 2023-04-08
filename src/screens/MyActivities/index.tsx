import { ActivityCard } from '../../components/ActivityCard'
import { BackButton } from '../../components/BackButton'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { PastActivityCard } from '../../components/PastActivityCard'
import {
  ActivityAndButtons,
  ConfirmedActivitiesContainer,
  MainContentContainer,
  MyActivitiesContainer,
  MyActivitiesCustomText,
  MyActivitiesHeader,
  PastActivities,
  PastActivityCardContainer,
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

        <MyActivitiesCustomText type="h3" centered={true}>
          Minhas atividades
        </MyActivitiesCustomText>
      </MyActivitiesHeader>

      <MainContentContainer>
        <CustomText type="h3">Atividades Confirmadas</CustomText>

        <ConfirmedActivitiesContainer>
          <ActivityAndButtons>
            <ActivityCard
              check={true}
              profissional={false}
              activity="Caminhada em grupo"
              organizer="Lucia"
              distance={100}
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
              distance={1000}
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
        <CustomText type="h3">Atividades Passadas</CustomText>
        <PastActivityCardContainer
          horizontal={true}
          contentContainerStyle={{ gap: 20, paddingRight: 200 }}
        >
          <PastActivityCard
            activity="Oficina de Tricô"
            check={true}
            organizer="Lúcia"
          ></PastActivityCard>
          <PastActivityCard
            activity="Jogo de Baralho"
            check={true}
            organizer="Maria"
          ></PastActivityCard>
          <PastActivityCard
            activity="Campeonato de Dominó"
            check={true}
            organizer="Roberto"
          ></PastActivityCard>
        </PastActivityCardContainer>
      </PastActivities>
    </MyActivitiesContainer>
  )
}
