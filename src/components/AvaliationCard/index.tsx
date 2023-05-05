import { Image } from 'react-native'
import { CardContainer, Top, Perfil, Stars } from '../AvaliationCard/styles'

import { CustomText } from '../CustomText'
import { useEffect, useState } from 'react'
import api from '../../services/api'

interface AvaliationCardProps {
  id: number
  nota: number
  texto: string
  idOfWhoDid: number
  navigation: any
}

export function AvaliationCard({
  id,
  nota,
  texto,
  idOfWhoDid,
  navigation,
}: AvaliationCardProps) {
  const goToProfile = () => {
    navigation.push('profile', { id: idOfWhoDid })
  }

  const [name, setName] = useState()

  useEffect(() => {
    const getProfileInfos = async () => {
      try {
        const response = await api.get(`api/users/detail/${idOfWhoDid}`)
        console.log(response.data)

        setName(response.data.first_name)
      } catch (error) {
        console.log(error)
      }
    }

    getProfileInfos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <CardContainer>
      <Top>
        <CustomText type="span"> {name} </CustomText>
        <Perfil onPress={() => goToProfile()}> Ver Perfil </Perfil>
      </Top>

      <Stars>
        {Array.from({ length: nota }).map((_, index) => (
          <Image
            key={index}
            source={require('../../../assets/FullStar.png')}
            alt=""
            style={{ marginRight: 2 }}
          />
        ))}
        {Array.from({ length: 5 - nota }).map((_, index) => (
          <Image
            key={index}
            source={require('../../../assets/EmptyStar.png')}
            alt=""
            style={{ marginRight: 2 }}
          />
        ))}
      </Stars>

      <CustomText type="body"> {texto} </CustomText>
    </CardContainer>
  )
}
