import { Image } from 'react-native'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Button, Container, Title, Avatar, TextArea, TextArea2 } from './styles'

export function Participation({ navigation }: any) {
  const goToHub = () => {
    console.log('apertou')

    navigation.push('hub')
  }

  return (
    <Container>
      <Title>
        <CustomText type="h1">Como funcionam as atividades?</CustomText>
      </Title>

      <TextArea>
        <CustomText type="body">
          Nos detalhes de cada atividade você pode encontrar informações sobre a
          organização, como participar e quem frequenta.
        </CustomText>
      </TextArea>

      <TextArea2>
        <CustomText type="body">Existem dois tipos de atividades:</CustomText>
      </TextArea2>
      <TextArea2>
        <CustomText type="body">
          - Realizadas por um profissional ou empresa
        </CustomText>
      </TextArea2>
      <TextArea2>
        <CustomText type="body">
          - Organizadas pela própria comunidade
        </CustomText>
      </TextArea2>

      <TextArea>
        <CustomText type="body">
          Você também pode visualizar as atividades que você confirmou presença
        </CustomText>
      </TextArea>

      <Button>
        <CustomButton
          text="Entendi"
          variantType="block"
          onPress={goToHub}
        ></CustomButton>
      </Button>

      <Avatar>
        <Image
          source={require('../../../assets/avatar/avatar-happy3.png')}
          alt=""
        ></Image>
      </Avatar>
    </Container>
  )
}
