import { Image } from 'react-native'
import { AvaliationCard } from '../../components/AvaliationCard'
import { Marker } from 'react-native-maps'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Tag } from '../../components/Tag'
import {
  AvaliationCards,
  Avaliations,
  Back,
  BigContainer,
  Container,
  How,
  MyMapView,
  PersonWhoParticipated,
  PersonWhoParticipatedAndPossibleCheck,
  Tags,
  Title,
  Where,
  WhereMap,
  Who,
  WhoParticipated,
  WhoParticipatedList,
} from './styles'

interface DetailedActivityProps {
  route: any
  navigation: any
}

export function DetailedActivity({ route, navigation }: DetailedActivityProps) {
  const { check, organizer, activity, local } = route.params
  return (
    <BigContainer>
      <Container>
        <Back
          onPress={() => {
            navigation.goBack()
          }}
        >
          ← Voltar
        </Back>

        <Title>
          <CustomText type="h2">{activity}</CustomText>
          {check && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </Title>
        <CustomText type="body"> descricao </CustomText>

        <Tags>
          <Tag>Atividade Fisica</Tag>
          <Tag>Em grupo</Tag>
        </Tags>

        <Who>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Quem é o responsável?
          </CustomText>

          <CustomText type="body">{organizer}, idade anos.</CustomText>
        </Who>
        <CustomButton
          variantType="outline"
          color="blue"
          text="Visualizar perfil do responsável"
          textSize={16}
        ></CustomButton>

        <How>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Como participar?
          </CustomText>

          <CustomText type="body"> comoParticipar </CustomText>
        </How>

        <Where>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Onde acontece?
          </CustomText>
          <CustomText type="body"> {local} </CustomText>
          <CustomText type="body"> Ponto de encontro: encontro </CustomText>
          <MyMapView>
            <WhereMap
              // -8.046485892509358, -34.90411727453414
              initialRegion={{
                latitude: -8.046485892509358,
                longitude: -34.90411727453414,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021,
              }}
            >
              <Marker
                coordinate={{
                  latitude: -8.046485892509358,
                  longitude: -34.90411727453414,
                }}
                title={activity}
                description="Ponto de encontro"
              />
            </WhereMap>
          </MyMapView>
        </Where>

        <Avaliations>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Avaliações da atividade
          </CustomText>
          <AvaliationCards
            horizontal={true}
            contentContainerStyle={{ gap: 20, paddingRight: 300 }}
          >
            <AvaliationCard></AvaliationCard>
            <AvaliationCard></AvaliationCard>
            <AvaliationCard></AvaliationCard>
          </AvaliationCards>
        </Avaliations>

        <WhoParticipated>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Quem já participou?
          </CustomText>
          <WhoParticipatedList
            horizontal={true}
            contentContainerStyle={{ gap: 16, paddingRight: 20 }}
          >
            <PersonWhoParticipatedAndPossibleCheck>
              <Image
                source={require('../../../assets/verificado.png')}
                alt=""
                style={{ marginBottom: -16, zIndex: 1 }}
              />
              <PersonWhoParticipated>
                <Image source={require('../../../assets/senhor.png')} alt="" />
                <CustomText type="body">Mário</CustomText>
              </PersonWhoParticipated>
            </PersonWhoParticipatedAndPossibleCheck>
            <PersonWhoParticipated>
              <Image source={require('../../../assets/senhora.png')} alt="" />
              <CustomText type="body">Rita</CustomText>
            </PersonWhoParticipated>
            <PersonWhoParticipated>
              <Image source={require('../../../assets/senhor.png')} alt="" />
              <CustomText type="body">Mário</CustomText>
            </PersonWhoParticipated>
            <PersonWhoParticipatedAndPossibleCheck>
              <Image
                source={require('../../../assets/verificado.png')}
                alt=""
                style={{ marginBottom: -16, zIndex: 1 }}
              />
              <PersonWhoParticipated>
                <Image source={require('../../../assets/senhora.png')} alt="" />
                <CustomText type="body">Rita</CustomText>
              </PersonWhoParticipated>
            </PersonWhoParticipatedAndPossibleCheck>
            <PersonWhoParticipated>
              <Image source={require('../../../assets/senhor.png')} alt="" />
              <CustomText type="body">Mário</CustomText>
            </PersonWhoParticipated>
            <PersonWhoParticipated>
              <Image source={require('../../../assets/senhora.png')} alt="" />
              <CustomText type="body">Rita</CustomText>
            </PersonWhoParticipated>
          </WhoParticipatedList>
        </WhoParticipated>

        <CustomButton
          variantType="large"
          color="orange"
          text="Participar"
          textSize={16}
        ></CustomButton>
      </Container>
    </BigContainer>
  )
}
