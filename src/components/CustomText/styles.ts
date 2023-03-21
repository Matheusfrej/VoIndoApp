import { Text } from '@react-native-material/core'

import styled, { css } from 'styled-components'

interface StyledTextProps {
  type: string
}

export const StyledText = styled(Text)<StyledTextProps>`
  ${(props) =>
    (props.type === 'h1' &&
      css`
        font-size: 22px;
        font-weight: 600;
        font-family: 'InterSemiBold';
      `) ||
    (props.type === 'h2' &&
      css`
        font-size: 20px;
        font-weight: 600;
        font-family: 'InterSemiBold';
      `) ||
    (props.type === 'h3' &&
      css`
        font-size: 18px;
        font-weight: 600;
        font-family: 'InterSemiBold';
      `) ||
    (props.type === 'subtitle' &&
      css`
        font-size: 18px;
        font-weight: normal;
        font-family: 'InterRegular';
      `) ||
    (props.type === 'span' &&
      css`
        font-size: 16px;
        font-weight: 600;
        font-family: 'InterSemiBold';
      `) ||
    (props.type === 'body' &&
      css`
        font-size: 16px;
        font-weight: normal;
        font-family: 'InterRegular';
      `)}
`
