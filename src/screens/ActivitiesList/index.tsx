import { useState } from 'react'
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
  const { activitiesList, areActivitiesLoading } = useActivities()

  const [placeholderText, setPlaceholderText] = useState('Pesquisar atividade')
  const navigateToDetailedActivity = (id: string) => {
    navigation.push('detailedActivity', { id })
  }

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
                  organizer={activity.organizers[0]?.id}
                  distance={100}
                  quantity={activity.participants_limit}
                  onPress={() => navigateToDetailedActivity(activity.id)}
                />
              )
            })}
          {/* <ActivityCard
            onPress={() =>
              navigateToDetailedActivity(
                true,
                'Caminhada em grupo',
                'Lucia',
                'Rua real da torre 705',
              )
            }
            check={true}
            profissional={false}
            activity="Caminhada em grupo"
            organizer="Lucia"
            distance={100}
            quantity={8}
          ></ActivityCard>

          <ActivityCard
            onPress={() =>
              navigateToDetailedActivity(
                false,
                'Aula de tricô',
                'Zefa',
                'Parque da Jaqueira',
              )
            }
            check={false}
            profissional={false}
            activity="Aula de tricô"
            organizer="Zefa"
            distance={200}
            quantity={10}
          ></ActivityCard>

          <ActivityCard
            onPress={() =>
              navigateToDetailedActivity(
                true,
                'Hidroginástica',
                'Mario',
                'Beira Rio',
              )
            }
            check={true}
            profissional={true}
            activity="Hidroginástica"
            organizer="Mario"
            distance={800}
            quantity={4}
          ></ActivityCard>

          <ActivityCard
            onPress={() =>
              navigateToDetailedActivity(
                false,
                'Jogar baralho',
                'Lucia',
                'Marco zero',
              )
            }
            check={false}
            profissional={false}
            activity="Jogar baralho"
            organizer="Lucia"
            distance={1000}
            quantity={3}
          ></ActivityCard>

          <ActivityCard
            onPress={() =>
              navigateToDetailedActivity(true, 'Bingo', 'Lucia', 'Disney')
            }
            check={true}
            profissional={false}
            activity="Bingo"
            organizer="Lucia"
            distance={100}
            quantity={24}
          ></ActivityCard> */}
        </ActivitiesContainer>
      </NewView>
    </ListContainer>
  )
}
