import { useState, useEffect } from 'react'
import { ActivityCard } from '../../components/ActivityCard'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  AcitivitiesTextInput,
  ActivitiesContainer,
  FilterBar,
  ListContainer,
  ListHeader,
  NewView,
  TextAndLink,
  Title,
} from './styles'
import { useActivities } from '../../contexts/ActivitiesContext'
import { BackButton } from '../../components/BackButton'

export function ActivitiesList({ navigation }: any) {
  const { activitiesList, areActivitiesLoading, getActivities, isLogged } =
    useActivities()

  const [placeholderText, setPlaceholderText] = useState('Pesquisar atividade')
  const navigateToDetailedActivity = (id: string) => {
    navigation.push('detailedActivity', { id })
  }

  useEffect(() => {
    if (isLogged) {
      getActivities()
    }
  }, [])

  return (
    <ListContainer>
      <ListHeader>
        <BackButton
          onPress={() => {
            navigation.goBack()
          }}
        />

        <TextAndLink>
          <Title>
            <CustomText type="h3" centered={true}>
              Buscando atividades sugeridas para você
            </CustomText>
          </Title>
        </TextAndLink>
      </ListHeader>

      <FilterBar>
        <AcitivitiesTextInput
          placeholder={placeholderText}
          selectionColor={'#000'}
          placeholderTextColor={'#AAAAAA'}
          onFocus={() => setPlaceholderText('')}
        />
        <CustomButton
          variantType="outline"
          text="Buscar"
          textSize={14}
          color="blue"
        />
      </FilterBar>

      <NewView>
        <ActivitiesContainer
          contentContainerStyle={{ gap: 32, paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
        >
          {!areActivitiesLoading &&
            activitiesList !== undefined &&
            activitiesList.map((activity) => {
              return (
                <ActivityCard
                  key={activity.id}
                  activity={activity.name}
                  distance={100}
                  quantity={Number(activity.participants_limit)}
                  profissional={activity.professional_required}
                  organizer={
                    activity?.creator?.nickname || activity?.creator?.first_name
                  }
                  onPress={() => {
                    if (activity.id !== undefined) {
                      navigateToDetailedActivity(activity.id)
                    }
                  }}
                />
              )
            })}
        </ActivitiesContainer>
      </NewView>
    </ListContainer>
  )
}
