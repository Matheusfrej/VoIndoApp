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
  LoadingContainer,
  NewView,
  TextAndLink,
  Title,
} from './styles'
import { useActivities } from '../../contexts/ActivitiesContext'
import { BackButton } from '../../components/BackButton'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components'
import { CustomSnackBar } from '../../components/CustomSnackBar'

export function ActivitiesList({ navigation, route }: any) {
  const {
    activitiesList,
    activitiesListOrdered,
    areActivitiesLoading,
    getActivities,
    getActivityiesOrderByDistance,
    isLogged,
    onSetAreActivitiesLoading,
  } = useActivities()

  const theme = useTheme()
  const { snackBarSuccess } = useActivities()

  const [placeholderText, setPlaceholderText] = useState('Pesquisar atividade')
  const navigateToDetailedActivity = (id: string) => {
    navigation.push('detailedActivity', { id })
  }
  const { ordered } = route.params
  useEffect(() => {
    onSetAreActivitiesLoading(true)
    if (isLogged) {
      if (!ordered) {
        getActivities()
      } else {
        getActivityiesOrderByDistance()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <CustomText type="h2" centered={true}>
              Buscando atividades sugeridas para você
            </CustomText>
          </Title>
        </TextAndLink>
      </ListHeader>
      {!areActivitiesLoading && (
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
      )}

      <NewView>
        <ActivitiesContainer
          contentContainerStyle={{ gap: 32, paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
        >
          {!areActivitiesLoading &&
            activitiesList !== undefined &&
            !ordered &&
            activitiesList.map((activity) => {
              return (
                <ActivityCard
                  key={activity.id}
                  activity={activity.name}
                  distance={activity.distance!}
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
          {!areActivitiesLoading &&
            activitiesListOrdered !== undefined &&
            ordered &&
            activitiesListOrdered.map((activity) => {
              return (
                <ActivityCard
                  key={activity.id}
                  activity={activity.name}
                  distance={activity.distance!}
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
          {areActivitiesLoading && (
            <LoadingContainer>
              <ActivityIndicator size="large" color={theme.color.PRIMARY} />
              <CustomText type="body">Carregando atividades...</CustomText>
            </LoadingContainer>
          )}
        </ActivitiesContainer>
      </NewView>
      {snackBarSuccess && <CustomSnackBar success />}
      {snackBarSuccess === false && <CustomSnackBar success={false} />}
    </ListContainer>
  )
}
