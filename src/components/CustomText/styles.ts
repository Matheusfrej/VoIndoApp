import styled, { css } from 'styled-components/native'

interface StyledTextProps {
  type: string
  centered?: boolean
}

export const StyledText = styled.Text<StyledTextProps>`
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
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
        font-size: 18px;
        font-weight: 600;
        font-family: 'InterSemiBold';
      `) ||
    (props.type === 'body' &&
      css`
        font-size: 18px;
        font-weight: normal;
        font-family: 'InterRegular';
      `)}
`
