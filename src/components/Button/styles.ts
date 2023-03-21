import { Button } from '@react-native-material/core'
import styled from 'styled-components/native'

interface StyledButtonProps {
  variantType: string
  color: string
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: ${(props) =>
    props.color === 'blue'
      ? props.theme.color.PRIMARY
      : props.theme.color.SECONDARY};

  ${(props) =>
    (props.variantType === 'default' &&
      `
    padding: 10px 16px;
  `) ||
    (props.variantType === 'large' &&
      `
    padding: 10px 32px;
  `) ||
    (props.variantType === 'outline' &&
      props.color === 'blue' &&
      `
    padding: 10px 16px;
    background-color: transparent;
    border: 2px solid ${props.theme.color.PRIMARY};
  `) ||
    (props.variantType === 'outline' &&
      props.color === 'orange' &&
      `
    padding: 10px 16px;
    background-color: transparent;
    border: 2px solid ${props.theme.color.SECONDARY};
  `) ||
    (props.variantType === 'small' &&
      `
    padding: 8px 12px;
  `) ||
    (props.variantType === 'block' &&
      `
    width: 100%;
    padding: 10px 16px;
  `)}
`
