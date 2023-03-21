// import { CustomButton } from '../../components/CustomButton'
import { Image, View } from 'react-native'
import { ActivityCard } from '../../components/ActivityCard'
// import { CustomText } from '../../components/CustomText'
import {
  AvatarContainer,
  ContentContainer,
  HomeContainer,
  Text,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Image source={require('../../../assets/logo.png')} alt="" />
        <Text>Home</Text>
        {/* <CustomButton text="default" variantType="default" color="blue" />
        <CustomButton text="large" variantType="large" />
        <CustomButton text="outline" variantType="outline" />
        <CustomButton text="small" variantType="small" color="blue" />
        <CustomButton text="block" variantType="block" /> */}
        {/* <CustomText type="h1">Texto exemplo de h1</CustomText>
        <CustomText type="h2">Texto exemplo de h2</CustomText>
        <CustomText type="h3">Texto exemplo de h3</CustomText>
        <CustomText type="subtitle">Texto exemplo de subtitle</CustomText>
        <CustomText type="span">Texto exemplo de span</CustomText>
        <CustomText type="body">Texto exemplo de body</CustomText> */}
        <View style={{ gap: 10 }}>
          <ActivityCard />
          <ActivityCard check={true} />
          <ActivityCard check={true} profissional={true} />
        </View>
      </ContentContainer>

      <AvatarContainer>
        <Image
          alt=""
          source={require('../../../assets/avatar/avatar-happy1.png')}
        />
      </AvatarContainer>
    </HomeContainer>
  )
}
