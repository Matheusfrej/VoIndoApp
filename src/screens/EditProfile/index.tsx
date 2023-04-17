import { useTheme } from 'styled-components'
import { BackButton } from '../../components/BackButton'
import { CustomText } from '../../components/CustomText'
import {
  Container,
  ButtonContainer,
  EditProfileContainer,
  EditProfileForm,
  EditProfileInputContainer,
  EditProfileTitle,
  TextInput,
} from './styles'
import { CustomButton } from '../../components/CustomButton'

export function EditProfile({ navigation }: any) {
  const theme = useTheme()

  return (
    <Container>
      <BackButton
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 0 }}
        />
      <EditProfileContainer>
        
        <EditProfileTitle>
          <CustomText
            type="h1"
            centered={true}
            style={{ color: theme.color['BLACK-2'] }}
          >
            Editar Perfil
          </CustomText>
        </EditProfileTitle>
        <EditProfileForm>
          <EditProfileInputContainer>
            <CustomText type="h3">Seu nome</CustomText>
            <TextInput
              placeholder={'Insira seu nome'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
            />
          </EditProfileInputContainer>
          <EditProfileInputContainer>
            <CustomText type="h3">Data de nascimento</CustomText>
            <TextInput
              placeholder={'Digite no formato dd/mm/aaaa'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
            />
          </EditProfileInputContainer>
          <EditProfileInputContainer>
            <CustomText type="h3">Preferências</CustomText>
            <TextInput
              placeholder={'Adicione uma preferência'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
            />
          </EditProfileInputContainer>
          <EditProfileInputContainer>
            <CustomText type="h3">Documento de identificação</CustomText>
            <CustomText type="body" style={{ color: theme.color.GREY }}>
              Isso fará com que sua identidade fique confirmada no aplicativo
            </CustomText>
            <TextInput
              placeholder={'Exemplo: CPF, RG, CNH, Passaporte...'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
            />
          </EditProfileInputContainer>
        </EditProfileForm>
        <ButtonContainer>
          <CustomButton variantType="block" color="orange" text="Editar" />
        </ButtonContainer>
      </EditProfileContainer>
    </Container>
  )
}
