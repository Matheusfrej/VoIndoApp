import { ActivityCard } from '../../components/ActivityCard'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  ActivityAndButtons,
  BackButton,
  ConfirmedActivitiesContainer,
  MainContentContainer,
  MyActivitiesContainer,
  MyActivitiesCustomText,
  MyActivitiesHeader,
  PastActivities,
} from './styles'

export function MyActivities({ navigation }: any) {
  return (
    <MyActivitiesContainer>
      <MyActivitiesHeader>
        <BackButton>
          <CustomButton
            text="Voltar"
            textSize={12}
            variantType="small"
            color="blue"
            onPress={() => {
              navigation.goBack()
            }}
          />
        </BackButton>
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
              color="blue"
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
              color="blue"
            />
          </ActivityAndButtons>
        </ConfirmedActivitiesContainer>
      </MainContentContainer>
      <PastActivities>
        <CustomText type="h3">Atividades Passadas</CustomText>
      </PastActivities>
    </MyActivitiesContainer>
  )
}
