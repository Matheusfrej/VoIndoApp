import styled from 'styled-components/native'

export const ListContainer = styled.View`
  flex: 1;
`

export const Back = styled.Text`
  color: #667a8c;
  margin: 15px;
`

export const ListHeader = styled.View``

export const TextAndLink = styled.View`
  width: 80%;
  margin: auto;
  gap: 10px;
`

export const Title = styled.View`
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
`

export const FilterBar = styled.View`
  flex-direction: row;
  justify-content: center;
  /* flex: 1; */
  /* align-items: center; */
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 32px;
`

export const ActivitiesContainer = styled.ScrollView`
  gap: 32px;
`

export const NewView = styled.View`
  margin: 0 auto;
  height: 100%;
  max-width: 90%;
`

export const AcitivitiesTextInput = styled.TextInput`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 60%;
  font-size: 16px;
  border-radius: 5px;
`

export const LoadingContainer = styled.View`
  height: 200px;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`
