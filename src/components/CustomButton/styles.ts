import styled, { css } from 'styled-components/native'
import { StyledText } from '../CustomText/styles'

interface StyledButtonProps {
  variantType: string
  color: string
}

export const StyledButton = styled.TouchableHighlight<StyledButtonProps>`
  margin: 0;
  border-radius: 4px;
  background-color: ${(props) =>
    props.color === 'blue'
      ? props.theme.color.PRIMARY
      : props.theme.color.SECONDARY};

  ${(props) =>
    (props.variantType === 'default' &&
      css`
        padding: 10px 16px;
        color: white;
      `) ||
    (props.variantType === 'large' &&
      css`
        padding: 10px 32px;
        color: white;
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
        color: black;
        border: 2px solid ${props.theme.color.SECONDARY};
      `) ||
    (props.variantType === 'small' &&
      css`
        padding: 8px 12px;
        max-width: 70px;
        color: white;
      `) ||
    (props.variantType === 'block' &&
      css`
        width: 100%;
        padding: 10px 16px;
        color: white;
      `)}
  font-size: 20px;
`

interface ButtonTextProps {
  textSize: number
  variantType: string
  textColor: string
}

export const ButtonText = styled(StyledText)<ButtonTextProps>`
  text-align: center;

  ${(props) =>
    (props.variantType === 'outline' &&
      props.textColor === 'blue' &&
      css`
        color: ${props.theme.color.PRIMARY};
      `) ||
    (props.variantType === 'outline' &&
      props.textColor === 'orange' &&
      css`
        color: ${props.theme.color.SECONDARY};
      `) ||
    css`
      color: ${props.theme.color.BG};
    `};
  font-size: ${(props) => props.textSize}px;
`
