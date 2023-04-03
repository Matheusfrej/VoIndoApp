import styled from 'styled-components/native'
import { StyledText } from '../../components/CustomText/styles'

export const MyActivitiesContainer = styled.ScrollView`
  flex: 1;
`

export const MyActivitiesHeader = styled.View`
  flex-direction: row;
`

export const Back = styled.Text`
  color: #667a8c;
  margin: 15px;
`

export const MyActivitiesCustomText = styled(StyledText)`
  color: ${(props) => props.theme.color['BLACK-2']};
  width: 100%;
  margin-left: auto;
  margin-top: 41px;
`

export const MainContentContainer = styled.View`
  margin: auto;
  gap: 20px;
  margin-top: 40px;
`

export const ConfirmedActivitiesContainer = styled.View`
  margin: 0 auto;
  gap: 24px;
`

export const ActivityAndButtons = styled.View`
  gap: 16px;
`

export const PastActivities = styled.View`
  margin: 0 auto;
  margin-left: 24px;
  margin-top: 48px;
  gap: 20px;
  margin-bottom: 20px;
`

export const PastActivityCardContainer = styled.ScrollView``
