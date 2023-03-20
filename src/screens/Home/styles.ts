import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.PRIMARY};
`

export const Text = styled.Text`
  font-size: 48px;
  font-weight: 600;
  font-family: 'InterRegular';
`
