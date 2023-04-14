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
  ContainerHeader,
  PairTouchable,
} from './styles'
import { useState } from 'react'
import { Switch } from 'react-native'

export function RegisterActivity({ route, navigation }: any) {
  const { need } = route.params
  const theme = useTheme()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  // Em grupo
  const [isTag1Selected, setIsTag1Selected] = useState(false)
  // Atividade Física
  const [isTag2Selected, setIsTag2Selected] = useState(false)
  // Aprender algo novo
  const [isTag3Selected, setIsTag3Selected] = useState(false)

  const handleTagChange = (id: number) => {
    if (id === 1) {
      setIsTag1Selected(!isTag1Selected)
    } else if (id === 2) {
      setIsTag2Selected(!isTag2Selected)
    } else if (id === 3) {
      setIsTag3Selected(!isTag3Selected)
    }
  }

  const goToMoreInfos = (need: boolean, name: string, desc: string) => {
    const auxTags = []
    if (isTag1Selected) {
      auxTags.push('Em grupo')
    }
    if (isTag2Selected) {
      auxTags.push('Atividade Física')
    }
    if (isTag3Selected) {
      auxTags.push('Aprender algo novo')
    }
    console.log(auxTags)

    navigation.push('moreInfos', { need, name, desc, tags: auxTags })
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
        <ContainerHeader>
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

            <Pair>
              <CustomText type="h3">Categorias</CustomText>
              <PairTouchable onPress={() => handleTagChange(1)}>
                <Switch
                  thumbColor={
                    isTag1Selected
                      ? theme.color['SECONDARY-SATURATED']
                      : theme.color.BG
                  }
                  trackColor={{
                    false: '#aaa',
                    true: theme.color['SECONDARY-LIGHT'],
                  }}
                  value={isTag1Selected}
                  onValueChange={() => handleTagChange(1)}
                />
                <CustomText type="span">Em grupo</CustomText>
              </PairTouchable>
              <PairTouchable onPress={() => handleTagChange(2)}>
                <Switch
                  thumbColor={
                    isTag2Selected
                      ? theme.color['SECONDARY-SATURATED']
                      : theme.color.BG
                  }
                  trackColor={{
                    false: '#aaa',
                    true: theme.color['SECONDARY-LIGHT'],
                  }}
                  value={isTag2Selected}
                  onValueChange={() => handleTagChange(2)}
                />
                <CustomText type="span">Atividade Física</CustomText>
              </PairTouchable>
              <PairTouchable onPress={() => handleTagChange(3)}>
                <Switch
                  thumbColor={
                    isTag3Selected
                      ? theme.color['SECONDARY-SATURATED']
                      : theme.color.BG
                  }
                  trackColor={{
                    false: '#aaa',
                    true: theme.color['SECONDARY-LIGHT'],
                  }}
                  value={isTag3Selected}
                  onValueChange={() => handleTagChange(3)}
                />
                <CustomText type="span">Aprender algo novo</CustomText>
              </PairTouchable>
            </Pair>
          </Forms>
        </ContainerHeader>

        <Button>
          <CustomButton
            variantType="block"
            text="Prosseguir"
            onPress={() => goToMoreInfos(need, name, description)}
          ></CustomButton>
        </Button>
      </Container>
    </BigContainer>
  )
}
