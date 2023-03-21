import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.color['BG-2']};
`

export const Text = styled.Text`
  font-size: 48px;
  font-weight: 600;
  font-family: 'InterRegular';
`
