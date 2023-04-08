import styled, { css } from 'styled-components/native'
import { StyledText } from '../CustomText/styles'

interface StyledButtonProps {
  variantType: string
  color: string
}

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  margin: 0;
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return props.theme.color.PRIMARY
      case 'orange':
        return props.theme.color.SECONDARY
      case 'red':
        return props.theme.color.RED
      case 'grey':
        return props.theme.color.GREY
    }
  }};

  ${(props) => {
    switch (props.variantType) {
      case 'default':
        return css`
          padding: 10px 16px;
        `
      case 'large':
        return css`
          padding: 10px 32px;
        `
      case 'outline':
        if (props.color === 'blue') {
          return css`
            padding: 8px 16px;
            background-color: transparent;
            border: 2px solid ${props.theme.color.PRIMARY};
            /* width: 100%; */
          `
        } else if (props.color === 'orange') {
          return css`
            padding: 8px 16px;
            background-color: transparent;
            border: 2px solid ${props.theme.color.SECONDARY};
            /* width: 100%; */
          `
        } else if (props.color === 'red') {
          return css`
            padding: 8px 16px;
            background-color: transparent;
            border: 2px solid ${props.theme.color.RED};
            /* width: 100%; */
          `
        } else if (props.color === 'grey') {
          return css`
            padding: 8px 16px;
            background-color: transparent;
            border: 2px solid ${props.theme.color.GREY};
            /* width: 100%; */
          `
        }
        break
      case 'small':
        return css`
          padding: 8px 12px;
          max-width: 100px;
        `
      case 'block':
        return css`
          width: 100%;
          padding: 10px 16px;
        `
      default:
        return ''
    }
  }};

  font-size: 20px;
`

interface ButtonTextProps {
  textSize: number
  variantType: string
  textColor: string
}

export const ButtonText = styled(StyledText)<ButtonTextProps>`
  text-align: center;

  ${(props) => {
    if (props.variantType === 'outline') {
      switch (props.textColor) {
        case 'blue':
          return css`
            color: ${props.theme.color.PRIMARY};
          `
        case 'orange':
          return css`
            color: ${props.theme.color.SECONDARY};
          `
        case 'red':
          return css`
            color: ${props.theme.color.RED};
          `
        case 'grey':
          return css`
            color: ${props.theme.color.GREY};
          `
        default:
          break
      }
    } else {
      return css`
        color: ${props.theme.color.BG};
      `
    }
  }};
  font-size: ${(props) => props.textSize}px;
`
