import styled from 'styled-components/native'

export const PastActivityCardContainer = styled.TouchableOpacity`
  width: 250px;
  padding: 16px 32px;
  gap: 24px;
  border: 1px solid ${(props) => props.theme.color.PRIMARY};
  border-radius: 4px;
  justify-content: space-around;
  margin-right: 16px;
`

export const Header = styled.View``

export const Footer = styled.View`
  gap: 8px;
`

export const HeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
