import styled from 'styled-components/native'

export const CardContainer = styled.View`
  width: 100%;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.color.PRIMARY};
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
  max-width: 45%;
`

export const CardFooterContainer = styled.View`
  gap: 16px;
`

export const ProfessionalText = styled.View`
  max-width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PriceText = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`

export const OrganizedBy = styled.View`
  max-width: 50%;
`

export const MoneyAndQuantity = styled.View`
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
`
