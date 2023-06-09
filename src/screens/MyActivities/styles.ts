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

  /* margin-top: 80px; */
`

export const TitleContainer = styled.View`
  width: 100%;
  margin-left: auto;
  margin-top: 24px;
`

export const MainContentContainer = styled.View`
  margin: auto;
  margin-left: 24px;
  gap: 20px;
  margin-top: 40px;
`

export const ConfirmedActivitiesContainer = styled.View`
  margin: 0 auto;
  gap: 40px;
`

export const ActivityAndButtons = styled.View`
  gap: 16px;
  max-width: 95%;
`

export const PastActivities = styled.View`
  margin: 0 auto;
  margin-left: 24px;
  margin-top: 48px;
  gap: 20px;
  margin-bottom: 20px;
`

export const PastActivityCardContainer = styled.ScrollView``

export const NoResult = styled.View`
  /* backgroundColor: 'blue'
                  height: 100
                  alignItems: 'center' */
  height: 150px;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
`
