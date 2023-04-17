import { CustomText } from '../CustomText'
import { useTheme } from 'styled-components'
import * as S from './styles'

interface AdressSugestionProps {
  address: string
  locationName: string
  distance: number
  onPress?: any
}

export function AddressSugestion({
  address,
  locationName,
  distance,
  onPress,
}: AdressSugestionProps) {
  const theme = useTheme()
  return (
    <S.AdressContainer onPress={onPress}>
      <S.AddressAndName>
        <CustomText type="h3">{locationName}</CustomText>
        <CustomText type="body" style={{ color: theme.color.GREY }}>
          {address}
        </CustomText>
      </S.AddressAndName>
      {distance >= 1 && 
      <CustomText type="body">{Math.round(distance * 10) / 10}km</CustomText>
    }
    {distance < 1 && 
      <CustomText type="body">{Math.round(distance * 1000)}m</CustomText>
    }
    
    </S.AdressContainer>
  )
}
