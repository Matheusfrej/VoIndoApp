import SelectDropdown from 'react-native-select-dropdown'
import { BackButton } from '../../components/BackButton'
import { CustomText } from '../../components/CustomText'
import * as S from './styles'
import { useState } from 'react'
import { CustomButton } from '../../components/CustomButton'
import api from '../../services/api'

interface AvaliationType {
  atividade: number
  stars: number
  text: string
}

export function AvaliateActivity({ navigation, route }: any) {
  const id = route.params
  const quantity = [1, 2, 3, 4, 5]

  const [grade, setGrade] = useState(1)
  const [description, setDescription] = useState('')

  const postNewAvaliation = async (id: number, stars: number, text: string) => {
    const newAval: AvaliationType = {
      atividade: id,
      stars,
      text,
    }

    try {
      const headers = {
        'Content-Type': 'application/json',
      }

      const response = await api.post('api/atividades/reviews/', newAval, {
        withCredentials: false,
        headers,
      })
      console.log(response)

      navigation.push('home2')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.BigContainer>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
      />
      <S.Container>
        <CustomText type="h1" style={{ textAlign: 'center' }}>
          Avaliar atividade
        </CustomText>

        <S.Pair>
          <CustomText type="h3">Nota da atividade:</CustomText>
          <SelectDropdown
            data={quantity}
            onSelect={(selectedItem, index) => {
              setGrade(selectedItem)
            }}
            defaultValue={1}
            buttonStyle={{
              width: '100%',
              borderColor: '#000',
              borderStyle: 'solid',
              borderWidth: 1,
            }}
          />
        </S.Pair>

        <S.Pair>
          <CustomText type="h3">Descreva sua experiência:</CustomText>
          <S.Desc
            placeholder={'Insira a descrição'}
            selectionColor={'#000'}
            placeholderTextColor={'#AAAAAA'}
            value={description}
            onChangeText={(newDesc) => setDescription(newDesc)}
          />
        </S.Pair>

        <CustomButton
          variantType="large"
          text="Avaliar"
          color="orange"
          onPress={() => postNewAvaliation(id, grade, description)}
        ></CustomButton>
      </S.Container>
    </S.BigContainer>
  )
}
