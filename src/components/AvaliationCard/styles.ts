import styled from 'styled-components/native'

export const CardContainer = styled.View`
  width: 300px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  gap: 35px;
  justify-content: space-between;
`

export const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Perfil = styled.Text`
  border: none;
  text-decoration: underline;
  font-size: 15px;
`

export const Stars = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`
