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
import { useState, useEffect } from 'react'
import { Switch } from 'react-native'
import api from '../../../services/api'
import { TagType, useActivities } from '../../../contexts/ActivitiesContext'
import { CustomSnackBar } from '../../../components/CustomSnackBar'

export function RegisterActivity({ route, navigation }: any) {
  const { need } = route.params
  const theme = useTheme()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [idProf, setIdProf] = useState('')
  // essas são as tags que vem do back
  const [tags, setTags] = useState<TagType[]>([])

  // essas são as tags que a pessoa selecionou
  const [tagsSelected, setTagsSelected] = useState<TagType[]>([])
  const { setSnackBarStatus } = useActivities()
  const [preenchido, setPreenchido] = useState(false)

  const tudoPreenchido = () => {
    if (
      need &&
      name !== '' &&
      description !== '' &&
      tagsSelected.length > 0 &&
      idProf !== ''
    ) {
      setPreenchido(true)
    } else if (
      !need &&
      name !== '' &&
      description !== '' &&
      tagsSelected.length > 0
    )
      setPreenchido(true)
    else {
      setPreenchido(false)
    }
  }

  useEffect(() => {
    tudoPreenchido()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, description, tagsSelected.length, idProf])

  const getTags = async () => {
    try {
      const response = await api.get('/api/tags/list-all/')

      setTags(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getTags()
  }, [])

  const handleTagChange = (tag: TagType) => {
    if (
      tagsSelected.find((tagSelected) => tagSelected.name === tag.name) !==
      undefined
    ) {
      setTagsSelected(
        tagsSelected.filter((tagSelected) => tagSelected.name !== tag.name),
      )
    } else {
      setTagsSelected([...tagsSelected, tag])
    }
  }

  const goToMoreInfos = (
    need: boolean,
    name: string,
    desc: string,
    tagsSelected: TagType[],
  ) => {
    if (preenchido) {
      navigation.push('moreInfos', { need, name, desc, tagsSelected })
    } else {
      setSnackBarStatus(false, 'Preencha todos os campos')
    }
  }
  return (
    <BigContainer>
      <BackButton
        onPress={() => {
          navigation.goBack()
        }}
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
                  value={idProf}
                  onChangeText={(newDesc) => setIdProf(newDesc)}
                />
              </Pair>
            )}

            <Pair>
              <CustomText type="h3">Preferências</CustomText>
              {tags.map((tag, index) => {
                return (
                  <PairTouchable
                    key={index}
                    onPress={() => handleTagChange(tag)}
                  >
                    <Switch
                      thumbColor={
                        tagsSelected.find(
                          (tagSelected) => tagSelected.name === tag.name,
                        ) !== undefined
                          ? theme.color['SECONDARY-SATURATED']
                          : theme.color.BG
                      }
                      trackColor={{
                        false: '#aaa',
                        true: theme.color['SECONDARY-LIGHT'],
                      }}
                      value={
                        tagsSelected.find(
                          (tagSelected) => tagSelected.name === tag.name,
                        ) !== undefined
                      }
                      onValueChange={() => handleTagChange(tag)}
                    />
                    <CustomText type="span">{tag.name}</CustomText>
                  </PairTouchable>
                )
              })}
            </Pair>
          </Forms>
        </ContainerHeader>

        <Button>
          <CustomButton
            variantType="block"
            text="Prosseguir"
            onPress={() => {
              goToMoreInfos(need, name, description, tagsSelected)
            }}
          ></CustomButton>
        </Button>
      </Container>
      <CustomSnackBar />
    </BigContainer>
  )
}
