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
  Tags,
  Title,
  Where,
  WhereMap,
  Who,
  WhoParticipated,
  WhoParticipatedList,
} from './styles'
import { BackButton } from '../../components/BackButton'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useActivities } from '../../contexts/ActivitiesContext'
import { CustomSnackBar } from '../../components/CustomSnackBar'
import { useTheme } from 'styled-components'
import { NoResult } from '../MyActivities/styles'

interface DetailedActivityProps {
  route: any
  navigation: any
}

export function DetailedActivity({ route, navigation }: DetailedActivityProps) {
  const { id } = route.params
  const [activity, setActivity] = useState<any>()
  const { setSnackBarStatus } = useActivities()
  const [isUserOrganizer, setIsUserOrganizer] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    const getActivityById = async () => {
      try {
        const response = await api.get(`/api/atividades/detail/${id}`)
        setActivity(response.data)
        getUserId(response.data.creator.id)
      } catch (error) {
        console.log('deu erro')
      }
    }

    const getUserId = async (idCreator: number) => {
      try {
        const response = await api.get('/api/users/get-my-id/')

        if (idCreator === response.data.id) {
          setIsUserOrganizer(true)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getActivityById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //  console.log(activity?.reviews)
  // console.log(activity?.ocorrencias)

  const participateActivity = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      }
      // console.log(newActivity)

      // eslint-disable-next-line no-unused-vars
      const response = await api.post(
        `/api/atividades/entrar-atividade/${activity.id}`,
        {
          withCredentials: false,
          headers,
        },
      )
      setSnackBarStatus(true, 'Você se cadastrou na atividade com sucesso!')
      // console.log(response.data)
      setTimeout(() => {
        navigation.push('home2')
      }, 3000)
    } catch (error) {
      setSnackBarStatus(
        false,
        'Houve um erro ao tentar participar da atividade',
      )

      // console.log('ruim')
      // console.error(error)
    }
  }

  const avaliations = activity?.reviews
  // console.log(avaliations)
  return (
    <BigContainer>
      {activity !== undefined && (
        <>
          <BackButton
            onPress={() => {
              navigation.goBack()
            }}
          />
          <Container>
            <Title>
              <CustomText type="h2">{activity?.name}</CustomText>
              {activity.creator.is_verified && (
                <Image
                  source={require('../../../assets/verificado.png')}
                  alt=""
                />
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
                  new Date(activity?.creator!.birth_date!).getFullYear()}{' '}
                anos.
              </CustomText>
            </Who>
            <CustomButton
              variantType="outline"
              color="blue"
              text="Visualizar perfil do responsável"
              textSize={16}
              onPress={() =>
                navigation.push('profile', { id: activity.creator.id })
              }
            ></CustomButton>

            <Who>
              <CustomText type="span" style={{ fontWeight: 'bold' }}>
                Quando acontece?
              </CustomText>

              {activity !== undefined &&
                activity.proximas_ocorrencias.length > 0 &&
                activity?.proximas_ocorrencias.map(
                  (ocorrencia: any, index: any) => {
                    return (
                      <CustomText key={index} type="body">
                        {new Date(ocorrencia.data_time).toLocaleDateString(
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
                    )
                  },
                )}
              {activity !== undefined &&
                activity.proximas_ocorrencias.length === 0 && (
                  <NoResult>
                    <CustomText
                      type="h2"
                      style={{ color: theme.color.GREY }}
                      centered
                    >
                      Essa atividade já aconteceu
                    </CustomText>
                  </NoResult>
                )}
            </Who>

            <Who>
              <CustomText type="h3" style={{ fontWeight: 'bold' }}>
                Quantidade máxima de participantes:
              </CustomText>

              <CustomText type="body">
                {activity.participants_limit.toString() === '-1'
                  ? 'Sem limites'
                  : activity.participants_limit.toString()}
              </CustomText>
            </Who>

            <Who>
              <CustomText type="h3" style={{ fontWeight: 'bold' }}>
                Preço:
              </CustomText>

              <CustomText type="body">
                {activity.price.toString() === '0.00'
                  ? 'Grátis'
                  : `R$ ${activity.price.toString().replace('.', ',')}`}
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
                {avaliations !== undefined &&
                  avaliations.length > 0 &&
                  avaliations.map((aval: any) => {
                    return (
                      <AvaliationCard
                        key={aval.id}
                        nota={aval.stars}
                        id={aval.id}
                        texto={aval.text}
                        idOfWhoDid={aval.author.id}
                        navigation={navigation}
                      ></AvaliationCard>
                    )
                  })}
              </AvaliationCards>
              {avaliations !== undefined && avaliations.length === 0 && (
                <NoResult>
                  <CustomText
                    type="h2"
                    style={{ color: theme.color.GREY }}
                    centered
                  >
                    Essa atividade ainda não tem nenhuma avaliação
                  </CustomText>
                </NoResult>
              )}
            </Avaliations>

            <WhoParticipated>
              <CustomText type="span" style={{ fontWeight: 'bold' }}>
                Quem já participou?
              </CustomText>
              <WhoParticipatedList
                horizontal={true}
                contentContainerStyle={{
                  gap: 16,
                  paddingRight: 20,
                  marginTop: 10,
                }}
              >
                {activity?.participantes_anteriores?.length > 0 &&
                  activity.participantes_anteriores.map(
                    (participante: any, idx: any) => {
                      const key = `participante-${participante.id}-${idx}`
                      const isVerified = participante.is_verified
                      const imageSource = participante.profile_image
                        ? { uri: participante.profile_image }
                        : require('../../../assets/NoProfilePic.png')
                      return (
                        <PersonWhoParticipated
                          key={key}
                          onPress={() =>
                            navigation.push('profile', {
                              id: participante.id,
                            })
                          }
                        >
                          {isVerified && (
                            <Image
                              source={require('../../../assets/verificado.png')}
                              alt=""
                              style={{
                                marginBottom: -32,
                                marginLeft: 'auto',
                              }}
                            />
                          )}
                          <Image
                            source={imageSource}
                            alt=""
                            style={{
                              width: 100,
                              height: 100,
                              borderRadius: 1000,
                            }}
                          />
                          <CustomText type="body">
                            {participante.nickname || participante.first_name}
                          </CustomText>
                        </PersonWhoParticipated>
                      )
                    },
                  )}
              </WhoParticipatedList>
              {activity.participantes_anteriores !== undefined &&
                activity.participantes_anteriores.length === 0 && (
                  <NoResult>
                    <CustomText
                      type="h2"
                      style={{ color: theme.color.GREY }}
                      centered
                    >
                      Essa atividade ainda não tem participantes anteriores
                    </CustomText>
                  </NoResult>
                )}
            </WhoParticipated>

            {isUserOrganizer && (
              <WhoParticipated>
                <CustomText type="span" style={{ fontWeight: 'bold' }}>
                  Participantes confirmados
                </CustomText>
                <WhoParticipatedList
                  horizontal={true}
                  contentContainerStyle={{ gap: 16, paddingRight: 20 }}
                >
                  {activity?.participantes_atuais?.length > 0 &&
                    activity.participantes_atuais.map(
                      (participante: any, idx: any) => {
                        const key = `participante-${participante.id}-${idx}`
                        const isVerified = participante.is_verified
                        const imageSource = participante.profile_image
                          ? { uri: participante.profile_image }
                          : require('../../../assets/NoProfilePic.png')

                        return (
                          <PersonWhoParticipated
                            key={key}
                            onPress={() =>
                              navigation.push('profile', {
                                id: participante.id,
                              })
                            }
                          >
                            {isVerified && (
                              <Image
                                source={require('../../../assets/verificado.png')}
                                alt=""
                                style={{
                                  marginBottom: -32,
                                  marginLeft: 'auto',
                                }}
                              />
                            )}
                            <Image
                              source={imageSource}
                              alt=""
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 1000,
                              }}
                            />
                            <CustomText type="body">
                              {participante.nickname || participante.first_name}
                            </CustomText>
                          </PersonWhoParticipated>
                        )
                      },
                    )}
                </WhoParticipatedList>
                {activity.participantes_atuais !== undefined &&
                  activity.participantes_atuais.length === 0 && (
                    <NoResult>
                      <CustomText
                        type="h2"
                        style={{ color: theme.color.GREY }}
                        centered
                      >
                        Essa atividade ainda não tem participantes confirmados
                      </CustomText>
                    </NoResult>
                  )}
              </WhoParticipated>
            )}

            {!isUserOrganizer && (
              <CustomButton
                variantType="large"
                color="orange"
                text="Participar"
                textSize={16}
                onPress={() => participateActivity()}
              ></CustomButton>
            )}
          </Container>
        </>
      )}
      <CustomSnackBar />
    </BigContainer>
  )
}
