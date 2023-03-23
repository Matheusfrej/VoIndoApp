import styled from 'styled-components/native'
import { StyledText } from '../../components/CustomText/styles'

export const PreferencesContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const BackButton = styled.View`
  margin-left: 23px;
  margin-top: 32px;
`

export const MainContainer = styled.View`
  align-items: center;
`

export const MainTexts = styled.View`
  gap: 16px;
  align-items: center;
`

export const TextContainer = styled.View`
  width: 255px;
`

export const CentralizedCustomText = styled(StyledText)`
  text-align: center;
`

export const Options = styled.View`
  width: 350px;
  margin: auto;
  align-items: center;
  gap: 16px;
  margin-top: 62px;
`

export const Avatar = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`
