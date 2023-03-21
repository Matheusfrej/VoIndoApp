import { ButtonComponent } from '../../components/Button'
import { HomeContainer, Text } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Text>Home</Text>
      <ButtonComponent text="default" variantType="default" color="blue" />
      <ButtonComponent text="large" variantType="large" />
      <ButtonComponent text="outline" variantType="outline" />
      <ButtonComponent text="small" variantType="small" color="blue" />
      <ButtonComponent text="block" variantType="block" />
    </HomeContainer>
  )
}
