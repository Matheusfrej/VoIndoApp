import { ActivityCard } from '../../components/ActivityCard'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import {
  Activities,
  Activities2,
  ChangeText,
  Container,
  Search,
  SearchFilter,
  Title,
} from './styles'

export function SearchActivities({ navigation }: any) {
  const goToHub = () => {
    navigation.push('hub')
  }
  return (
    <Container>
      <Title>
        <CustomText type="h3">
          Buscando atividades sugeridas para você
        </CustomText>
      </Title>

      <ChangeText onPress={goToHub}>
        Trocar para visualização por localização
      </ChangeText>

      <SearchFilter>
        <Search
          placeholder="Pesquisar atividade"
          placeholderTextColor={'#AAAAAA'}
        ></Search>
        <CustomButton
          variantType="outline"
          text="Filtrar"
          onPress={goToHub}
          textSize={14}
        ></CustomButton>
      </SearchFilter>

      <Activities>
        <Activities2>
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
        </Activities2>
      </Activities>
    </Container>
  )
}
