import { View } from 'react-native'
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
          <View
            style={{
              width: 235,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: -20,
            }}
          >
            <CustomText type="h3" centered={true}>
              Buscando atividades sugeridas para você
            </CustomText>
          </View>
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
        <CustomButton variantType="outline" text="Filtrar" />
      </FilterBar>

      <NewView>
        <ActivitiesContainer
          contentContainerStyle={{ gap: 32, paddingBottom: 300 }}
          showsVerticalScrollIndicator={false}
        >
          <ActivityCard check={true} />
          <ActivityCard />
          <ActivityCard profissional={true} />
          <ActivityCard />
          <ActivityCard check={true} />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard profissional={true} check={true} />
          <ActivityCard profissional={true} check={true} />
          <ActivityCard profissional={true} check={true} />
          <ActivityCard profissional={true} check={true} />
          <ActivityCard profissional={true} check={true} />
          <ActivityCard profissional={true} check={true} />
          <ActivityCard profissional={true} check={true} />
        </ActivitiesContainer>
      </NewView>
    </ListContainer>
  )
}
