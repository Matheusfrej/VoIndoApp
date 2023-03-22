import styled from 'styled-components/native'
import { StyledText } from '../../components/CustomText/styles'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 120px 24px;
`

export const LogoImg = styled.Image`
  width: 90px;
  margin: 0;
  padding: 0;
`

export const WelcomeText = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const WelcomeTexts = styled.View`
  text-align: center;
  gap: 20px;
  margin-bottom: 10px;
`

export const CenteredCustomText = styled(StyledText)`
  text-align: center;
`

export const FullTouchableHighlight = styled.TouchableHighlight`
  width: 100%;
`

export const Button = styled.View`
  width: 90%;
  margin-top: 30px;
`
