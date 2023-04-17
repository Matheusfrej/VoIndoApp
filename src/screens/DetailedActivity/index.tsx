import { Image } from 'react-native'
import { AvaliationCard } from '../../components/AvaliationCard'
import { Marker } from 'react-native-maps'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Tag } from '../../components/Tag'
import {
  AvaliationCards,
  Avaliations,
  BigContainer,
  Container,
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
import { useActivities } from '../../contexts/ActivitiesContext'
import { BackButton } from '../../components/BackButton'

interface DetailedActivityProps {
  route: any
  navigation: any
}

export function DetailedActivity({ route, navigation }: DetailedActivityProps) {
  const { getActivityById } = useActivities()
  const { id } = route.params

  const activity = getActivityById(id)
  // console.log(activity)
  // console.log(activity?.ocorrencias)

  return (
    <BigContainer>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Container>
        <Title>
          <CustomText type="h2">{activity?.name}</CustomText>
          {false && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </Title>
        <CustomText type="body">{activity?.description}</CustomText>

        <Tags>
          {activity !== undefined &&
            activity.tags?.map(
              (tag: { id: number; name: string }, index: number) => {
                return <Tag key={index}>{tag.name}</Tag>
              },
            )}
        </Tags>

        <Who>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Quem é o responsável?
          </CustomText>

          <CustomText type="body">
            <CustomText type="span">
              {activity?.creator?.nickname || activity?.creator?.first_name}
            </CustomText>
            ,{' '}
            {new Date().getFullYear() -
              new Date(activity?.creator.birth_date!).getFullYear()}{' '}
            anos.
          </CustomText>
        </Who>
        <CustomButton
          variantType="outline"
          color="blue"
          text="Visualizar perfil do responsável"
          textSize={16}
          onPress={() => navigation.push('profile', { mine: false })}
        ></CustomButton>

        <Who>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Quando acontece?
          </CustomText>

          {/* {activity !== undefined &&
            activity?.ocorrencias.map((ocorrencia: OcorrenciaType, index) => {
              return (
                <CustomText key={index} type="body">
                  {ocorrencia.data_time.toLocaleDateString()}
                </CustomText>
              )
            })} */}
          <CustomText type="body">
            {activity?.ocorrencias[0] !== undefined &&
              new Date(activity?.ocorrencias[0].data_time).toLocaleString(
                'pt-BR',
                {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
                  timeZone: 'America/Sao_Paulo',
                },
              )}
          </CustomText>
        </Who>

        <Where>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Onde acontece?
          </CustomText>
          <CustomText type="body"> {activity?.address} </CustomText>
          <MyMapView>
            <WhereMap
              // -8.046485892509358, -34.90411727453414
              initialRegion={{
                latitude: Number(activity?.latitude),
                longitude: Number(activity?.longitude),
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021,
              }}
            >
              <Marker
                coordinate={{
                  latitude: Number(activity?.latitude),
                  longitude: Number(activity?.longitude),
                }}
                title={activity?.name}
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
              <PersonWhoParticipated
                onPress={() => navigation.push('profile', { mine: false })}
              >
                <Image source={require('../../../assets/senhor.png')} alt="" />
                <CustomText type="body">Mário</CustomText>
              </PersonWhoParticipated>
            </PersonWhoParticipatedAndPossibleCheck>
            <PersonWhoParticipated
              onPress={() => navigation.push('profile', { mine: false })}
            >
              <Image source={require('../../../assets/senhora.png')} alt="" />
              <CustomText type="body">Rita</CustomText>
            </PersonWhoParticipated>
            <PersonWhoParticipated
              onPress={() => navigation.push('profile', { mine: false })}
            >
              <Image source={require('../../../assets/senhor.png')} alt="" />
              <CustomText type="body">Mário</CustomText>
            </PersonWhoParticipated>
            <PersonWhoParticipatedAndPossibleCheck>
              <Image
                source={require('../../../assets/verificado.png')}
                alt=""
                style={{ marginBottom: -16, zIndex: 1 }}
              />
              <PersonWhoParticipated
                onPress={() => navigation.push('profile', { mine: false })}
              >
                <Image source={require('../../../assets/senhora.png')} alt="" />
                <CustomText type="body">Rita</CustomText>
              </PersonWhoParticipated>
            </PersonWhoParticipatedAndPossibleCheck>
            <PersonWhoParticipated
              onPress={() => navigation.push('profile', { mine: false })}
            >
              <Image source={require('../../../assets/senhor.png')} alt="" />
              <CustomText type="body">Mário</CustomText>
            </PersonWhoParticipated>
            <PersonWhoParticipated
              onPress={() => navigation.push('profile', { mine: false })}
            >
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
          onPress={() => navigation.push('home2')}
        ></CustomButton>
      </Container>
    </BigContainer>
  )
}
