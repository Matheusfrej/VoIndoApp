import { useTheme } from 'styled-components'
import { BackButton } from '../../../components/BackButton'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import {
  BigContainer,
  Button,
  Container,
  Forms,
  TextInput,
  Pair,
  Title,
} from './styles'
import { useState } from 'react'

export function RegisterActivity({ route, navigation }: any) {
  const { need } = route.params
  const theme = useTheme()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [adress, setAdress] = useState('')

  const goToMoreInfos = (
    need: boolean,
    name: string,
    desc: string,
    adr: string,
  ) => {
    navigation.push('moreInfos', { need, name, desc, adr })
  }
  return (
    <BigContainer>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
        style={{ marginLeft: 0 }}
      />
      <Container>
        <Title>
          <CustomText style={{ color: theme.color['BLACK-2'] }} type="h1">
            Cadastar atividade
          </CustomText>
        </Title>

        <Forms>
          <Pair>
            <CustomText type="h3">Nome da atividade</CustomText>
            <TextInput
              placeholder={'Insira o nome da atividade'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
              value={name}
              onChangeText={(newName) => setName(newName)}
            />
          </Pair>

          <Pair>
            <CustomText type="h3">Descrição da atividade</CustomText>
            <TextInput
              placeholder={'Insira a descrição da atividade'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
              value={description}
              onChangeText={(newDesc) => setDescription(newDesc)}
            />
          </Pair>

          <Pair>
            <CustomText type="h3">Endereço da atividade</CustomText>
            <TextInput
              placeholder={'Insira o endereço'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
              value={adress}
              onChangeText={(newAdr) => setAdress(newAdr)}
            />
          </Pair>

          {need && (
            <Pair>
              <CustomText type="h3">
                Número do conselho do profissional
              </CustomText>
              <TextInput
                placeholder={'Exemplo: CRF, CREFITO, CREF, COREN... '}
                selectionColor={'#000'}
                placeholderTextColor={'#AAAAAA'}
              />
            </Pair>
          )}
        </Forms>

        <Button>
          <CustomButton
            variantType="block"
            text="Prosseguir"
            onPress={() => goToMoreInfos(need, name, description, adress)}
          ></CustomButton>
        </Button>
      </Container>
    </BigContainer>
  )
}
