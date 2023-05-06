import { BackButton } from '../../components/BackButton'
import { CustomText } from '../../components/CustomText'
import { ConfirmIdentityContainer, Container } from './styles'

export function ConfirmIdentity({ navigation }: any) {
  return (
    <Container>
      <BackButton
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 24 }}
      />
      <ConfirmIdentityContainer>
        <CustomText type="h1">Confirmar identidade</CustomText>
      </ConfirmIdentityContainer>
    </Container>
  )
}
