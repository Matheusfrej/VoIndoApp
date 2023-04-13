import { CustomText } from '../CustomText'
import { useTheme } from 'styled-components'
import * as S from './styles'

interface AdressSugestionProps {
  address: string
  locationName: string
  distance: number
}

export function AddressSugestion({
  address,
  locationName,
  distance,
}: AdressSugestionProps) {
  const theme = useTheme()
  return (
    <S.AdressContainer>
      <S.AddressAndName>
        <CustomText type="h3">{locationName}</CustomText>
        <CustomText type="body" style={{ color: theme.color.GREY }}>
          {address}
        </CustomText>
      </S.AddressAndName>
      <CustomText type="span" style={{ color: theme.color.GREY }}>
        {distance}
      </CustomText>
    </S.AdressContainer>
  )
}
