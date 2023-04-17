import styled from 'styled-components/native'
import MapView from 'react-native-maps'

export const BigContainer = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  margin: 0 20px 16px;
  gap: 20px;
`

export const Title = styled.View`
  flex-direction: row;
  gap: 5px;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Back = styled.Text`
  color: #667a8c;
  margin: -5px;
`

export const Tags = styled.View`
  flex: 1;
  gap: 10px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Who = styled.View`
  gap: 8px;
`

export const How = styled.View`
  gap: 8px;
`

export const Where = styled.View`
  flex: 1;
  gap: 8px;
`

export const MyMapView = styled.View`
  height: 150px;
`

export const WhereMap = styled(MapView)`
  width: 100%;
  height: 100%;
`

export const Avaliations = styled.View`
  gap: 10px;
`

export const AvaliationCards = styled.ScrollView``

export const WhoParticipated = styled.View`
  gap: 8px;
  margin-bottom: 20px;
`

export const WhoParticipatedList = styled.ScrollView``

export const PersonWhoParticipated = styled.TouchableOpacity`
  flex: 1;
  gap: 16px;
  align-items: center;
`

export const PersonWhoParticipatedAndPossibleCheck = styled.View`
  align-items: flex-end;
`
