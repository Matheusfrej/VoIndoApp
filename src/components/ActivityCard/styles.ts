import styled from 'styled-components/native'

export const CardContainer = styled.View`
  width: 100%;
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  gap: 24px;
  justify-content: space-between;
`

export const CardSectionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CardFooterSectionContainer = styled(CardSectionContainer)`
  gap: 20px;
`

export const ActivityName = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
`

export const CardFooterContainer = styled.View`
  gap: 16px;
`

export const ProfessionalText = styled.Text`
  font-size: 12px;
`
