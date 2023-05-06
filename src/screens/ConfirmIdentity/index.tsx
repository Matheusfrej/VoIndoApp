import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { CustomText } from '../../components/CustomText'
import {
  ButtonContainer,
  ConfirmIdentityContainer,
  ConfirmIdentityForm,
  ConfirmIdentityInputContainer,
  ConfirmIdentityTitle,
  Container,
  TextInput,
} from './styles'
import { useState } from 'react'
import { CustomButton } from '../../components/CustomButton'
import api from '../../services/api'
import { CustomSnackBar } from '../../components/CustomSnackBar'
import { useActivities } from '../../contexts/ActivitiesContext'

export function ConfirmIdentity({ navigation }: any) {
  const { setSnackBarStatus } = useActivities()
  const theme = useTheme()
  const [document, setDocument] = useState('')

  const submitConfirmIdentity = async () => {
    if (document === '') {
      setSnackBarStatus(false, 'Preencha todos os campos')
    } else {
      try {
        const headers = {
          'Content-Type': 'application/json',
        }
        const response = await api.post('/api/users/verify-user/', {
          withCredentials: false,
          headers,
        })
        console.log(response)
        setSnackBarStatus(true, 'Documento adicionado com sucesso!')
        setTimeout(() => {
          navigation.goBack()
        }, 3000)
      } catch (error) {
        setSnackBarStatus(false, 'Houve um erro ao adicionar o documento')
      }
    }
  }
  return (
    <Container>
      <BackButton
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 24 }}
      />
      <ConfirmIdentityContainer>
        <ConfirmIdentityTitle>
          <CustomText
            type="h1"
            centered={true}
            style={{ color: theme.color['BLACK-2'] }}
          >
            Confirmar identidade
          </CustomText>
          <CustomText type="body" centered>
            Adicione um documento de identificação para confirmar que você é uma
            pessoa real (CPF, RG, Passaporte...)
          </CustomText>
        </ConfirmIdentityTitle>
        <ConfirmIdentityForm>
          <ConfirmIdentityInputContainer>
            <CustomText type="h3">Documento</CustomText>
            <TextInput
              selectionColor={'#000'}
              placeholder={'Insira apenas os dígitos do documento'}
              placeholderTextColor={'#AAAAAA'}
              value={document}
              onChangeText={(newDocument) => setDocument(newDocument)}
            />
          </ConfirmIdentityInputContainer>
        </ConfirmIdentityForm>
        <ButtonContainer>
          <CustomButton
            variantType="block"
            color="orange"
            text="Adicionar"
            onPress={() => submitConfirmIdentity()}
          />
        </ButtonContainer>
      </ConfirmIdentityContainer>
      <CustomSnackBar />
    </Container>
  )
}
