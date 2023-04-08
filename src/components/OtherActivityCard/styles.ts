import styled from 'styled-components/native'

export const PastActivityCardContainer = styled.View`
  width: 100%;
  padding: 16px 32px;
  gap: 24px;
  border: 1px solid ${(props) => props.theme.color.PRIMARY};
  border-radius: 4px;
  min-width: 200px;
  max-width: 300px;
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
