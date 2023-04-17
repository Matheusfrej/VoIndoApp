import styled from 'styled-components/native'
import { StyledText } from '../../components/CustomText/styles'

export const PreferencesContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`
export const Back = styled.Text`
  color: #667a8c;
  margin: 15px;
`

export const MainContainer = styled.View`
  align-items: center;
`

export const MainTexts = styled.View`
  gap: 16px;
  align-items: center;
`

export const Interests = styled.View`
  width: 100%;
`

export const InterestsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
`

export const InterestsList = styled.View`
  flex-direction: row;
  margin: 30px 40px;
  gap: 10px;
  flex-wrap: wrap;
`

export const TextContainer = styled.View`
  width: 255px;
`

export const CentralizedCustomText = styled(StyledText)`
  text-align: center;
`

export const Options = styled.View`
  margin: auto;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`

export const Avatar = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`
