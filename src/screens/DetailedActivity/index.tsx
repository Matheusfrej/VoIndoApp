import { Image } from 'react-native'
import { AvaliationCard } from '../../components/AvaliationCard'
import { CustomButton } from '../../components/CustomButton'
import { CustomText } from '../../components/CustomText'
import { Tag } from '../../components/Tag'
import {
  AvaliationCards,
  Avaliations,
  Back,
  BigContainer,
  Container,
  How,
  Tags,
  Title,
  Where,
  Who,
} from './styles'

interface DetailedActivityProps {
  route: any
}

export function DetailedActivity({ route }: DetailedActivityProps) {
  const { check, organizer, activity, local } = route.params
  return (
    <BigContainer>
      <Container>
        <Back> ← Voltar</Back>

        <Title>
          <CustomText type="h2">{activity}</CustomText>
          {check && (
            <Image source={require('../../../assets/verificado.png')} alt="" />
          )}
        </Title>
        <CustomText type="body"> descricao </CustomText>

        <Tags>
          <Tag>Atividade Fisica</Tag>
          <Tag>Em grupo</Tag>
        </Tags>

        <Who>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Quem é o responsável?
          </CustomText>

          <CustomText type="body">{organizer}, idade anos.</CustomText>
        </Who>
        <CustomButton
          variantType="outline"
          color="blue"
          text="Visualizar perfil do responsável"
          textSize={16}
        ></CustomButton>

        <How>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Como participar?
          </CustomText>

          <CustomText type="body"> comoParticipar </CustomText>
        </How>

        <Where>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Onde acontece?
          </CustomText>
          <CustomText type="body"> {local} </CustomText>
          <CustomText type="body"> Ponto de encontro: encontro </CustomText>
        </Where>

        <Avaliations>
          <CustomText type="span" style={{ fontWeight: 'bold' }}>
            Avaliações da atividade
          </CustomText>
          <AvaliationCards
            horizontal={true}
            contentContainerStyle={{ gap: 20, paddingRight: 300 }}
          >
            <AvaliationCard></AvaliationCard>
            <AvaliationCard></AvaliationCard>
            <AvaliationCard></AvaliationCard>
          </AvaliationCards>
        </Avaliations>

        <CustomButton
          variantType="large"
          color="orange"
          text="Participar"
          textSize={16}
        ></CustomButton>
      </Container>
    </BigContainer>
  )
}
