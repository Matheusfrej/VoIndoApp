import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.color['BG-2']};
`

export const ContentContainer = styled.View`
  flex: 1;
  height: 50%;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 48px;
  font-weight: 600;
  font-family: 'InterSemiBold';
`

export const AvatarContainer = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`
