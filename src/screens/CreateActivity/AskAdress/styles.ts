import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  height: 100%;
`

export const Form = styled.View`
  display: flex;
  margin: 0px 20px 20px 20px;
  gap: 30px;
`

export const Pair = styled.View`
  gap: 10px;
`
export const TextInput = styled.TextInput`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 60%;
  font-size: 16px;
  border-radius: 5px;
  flex: 1;
`

export const FilterCont = styled.View`
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 60px;
`

export const Suggestions = styled.ScrollView`
  height: 80%;
`
