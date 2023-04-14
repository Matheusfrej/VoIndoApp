import styled from 'styled-components/native'
import MapView from 'react-native-maps'

export const BigContainer = styled.ScrollView`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
  height: 100%;
  padding: 0 24px;
  gap: 24px;
  padding-bottom: 24px;
`

export const Pair = styled.View``

export const FinalButton = styled.View`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Title = styled.View`
  align-items: center;
  width: 80%;
  margin: 0 auto;
`

export const MyMapView = styled.View`
  height: 150px;
`

export const WhereMap = styled(MapView)`
  width: 100%;
  height: 100%;
`
