import { useState } from 'react'
import { ActivityCard } from '../../components/ActivityCard'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  AcitivitiesTextInput,
  ActivitiesContainer,
  BackButton,
  FilterBar,
  ListContainer,
  ListHeader,
  NewView,
  TextAndLink,
  Title,
} from './styles'

export function ActivitiesList({ navigation }: any) {
  const [placeholderText, setPlaceholderText] = useState('Pesquisar atividade')

  return (
    <ListContainer>
      <ListHeader>
        <BackButton>
          <CustomButton
            text="Voltar"
            textSize={12}
            variantType="small"
            color="orange"
            onPress={() => {
              navigation.goBack()
            }}
          />
        </BackButton>

        <TextAndLink>
          <Title>
            <CustomText type="h3" centered={true}>
              Buscando atividades sugeridas para você
            </CustomText>
          </Title>
          <CustomText
            type="body"
            style={{ textDecorationLine: 'underline' }}
            centered={true}
          >
            Trocar para visualização por localização
          </CustomText>
        </TextAndLink>
      </ListHeader>

      <FilterBar>
        <AcitivitiesTextInput
          placeholder={placeholderText}
          selectionColor={'#000'}
          onFocus={() => setPlaceholderText('')}
        />
        <CustomButton variantType="outline" text="Filtrar" textSize={14} />
      </FilterBar>

      <NewView>
        <ActivitiesContainer
          contentContainerStyle={{ gap: 32, paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
        >
          <ActivityCard
            check={true}
            profissional={false}
            activity="Caminhada em grupo"
            organizer="Lucia"
            distance={100}
            quantity={8}
          ></ActivityCard>

          <ActivityCard
            check={false}
            profissional={false}
            activity="Aula de tricô"
            organizer="Zefa"
            distance={200}
            quantity={10}
          ></ActivityCard>

          <ActivityCard
            check={true}
            profissional={true}
            activity="Hidroginástica"
            organizer="Mario"
            distance={800}
            quantity={4}
          ></ActivityCard>

          <ActivityCard
            check={false}
            profissional={false}
            activity="Jogar baralho"
            organizer="Lucia"
            distance={1000}
            quantity={3}
          ></ActivityCard>

          <ActivityCard
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
