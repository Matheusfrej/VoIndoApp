import { CustomText } from '../../components/CustomText'
import { Tag } from '../../components/Tag'
import { HubContainer } from './styles'

export function Hub() {
  return (
    <HubContainer>
      <CustomText type="h1">Hub</CustomText>
      <Tag>Em Grupo</Tag>
    </HubContainer>
  )
}
