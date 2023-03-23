import styled, { css } from 'styled-components/native'
import { StyledText } from '../CustomText/styles'

interface StyledButtonProps {
  variantType: string
  color: string
}

export const StyledButton = styled.TouchableHighlight<StyledButtonProps>`
  border-radius: 4px;
  background-color: ${(props) =>
    props.color === 'blue'
      ? props.theme.color.PRIMARY
      : props.theme.color.SECONDARY};

  ${(props) =>
    (props.variantType === 'default' &&
      css`
        padding: 10px 16px;
      `) ||
    (props.variantType === 'large' &&
      css`
        padding: 10px 32px;
      `) ||
    (props.variantType === 'outline' &&
      props.color === 'blue' &&
      css`
        padding: 10px 16px;
        background-color: transparent;
        border: 2px solid ${props.theme.color.PRIMARY};
      `) ||
    (props.variantType === 'outline' &&
      props.color === 'orange' &&
      css`
        padding: 10px 16px;
        background-color: transparent;
        border: 2px solid ${props.theme.color.SECONDARY};
      `) ||
    (props.variantType === 'small' &&
      css`
        padding: 8px 12px;
        max-width: 70px;
      `) ||
    (props.variantType === 'block' &&
      css`
        width: 100%;
        padding: 10px 16px;
      `)}
  font-size: 20px;
`

interface ButtonTextProps {
  textSize: number
}

export const ButtonText = styled(StyledText)<ButtonTextProps>`
  text-align: center;
  color: white;
  font-size: ${(props) => props.textSize}px;
`
