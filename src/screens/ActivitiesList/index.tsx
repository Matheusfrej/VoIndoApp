import { useState } from 'react'
import { ActivityCard } from '../../components/ActivityCard'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  AcitivitiesTextInput,
  ActivitiesContainer,
  Back,
  FilterBar,
  ListContainer,
  ListHeader,
  NewView,
  TextAndLink,
  Title,
} from './styles'

export function ActivitiesList({ navigation }: any) {
  const [placeholderText, setPlaceholderText] = useState('Pesquisar atividade')
  const navigateToDetailedActivity = (
    check: boolean,
    activity: string,
    organizer: string,
    local: string,
  ) => {
    navigation.push('detailedActivity', { check, activity, organizer, local })
  }

  return (
    <ListContainer>
      <ListHeader>
        <Back> ← Voltar</Back>

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
          onFocus={() => setPlaceholderText('')}
        />
        <CustomButton
          variantType="outline"
          text="Filtrar"
          textSize={14}
          color="blue"
        />
      </FilterBar>

      <NewView>
        <ActivitiesContainer
          contentContainerStyle={{ gap: 32, paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
        >
          <ActivityCard
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
          ></ActivityCard>
        </ActivitiesContainer>
      </NewView>
    </ListContainer>
  )
}
