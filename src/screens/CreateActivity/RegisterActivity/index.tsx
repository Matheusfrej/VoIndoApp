import { CustomButton } from '../../../components/CustomButton'
import { CustomText } from '../../../components/CustomText'
import {
  Back,
  BigContainer,
  Button,
  Container,
  Forms,
  TextInput,
  Pair,
  Title,
} from './styles'

export function RegisterActivity({ route, navigation }: any) {
  const { need } = route.params

  const goToMoreInfos = () => {
    navigation.push('moreInfos')
  }
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
          <CustomText style={{ color: '#3F3D56' }} type="h1">
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
            />
          </Pair>

          <Pair>
            <CustomText type="h3">Descrição da atividade</CustomText>
            <TextInput
              placeholder={'Insira a descrição da atividade'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
            />
          </Pair>

          <Pair>
            <CustomText type="h3">Instruções de participação</CustomText>
            <TextInput
              placeholder={'Descreva como participar'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
            />
          </Pair>

          <Pair>
            <CustomText type="h3">Endereço da atividade</CustomText>
            <TextInput
              placeholder={'Insira o endereço'}
              selectionColor={'#000'}
              placeholderTextColor={'#AAAAAA'}
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
            onPress={goToMoreInfos}
          ></CustomButton>
        </Button>
      </Container>
    </BigContainer>
  )
}
