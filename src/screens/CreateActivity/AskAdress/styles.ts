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
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
`
export const Suggestions = styled.ScrollView`
  height: 50%;
`

export const Button = styled.View`
  justify-self: flex-end;
`
