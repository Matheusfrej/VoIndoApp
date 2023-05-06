import { useEffect } from 'react'
import { ActivityCard } from '../../components/ActivityCard'
import { CustomText } from '../../components/CustomText'
import {
  ActivitiesContainer,
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
                  check={activity?.creator?.is_verified}
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
                  check={activity?.creator?.is_verified}
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
    </ListContainer>
  )
}
