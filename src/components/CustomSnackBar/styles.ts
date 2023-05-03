import styled from 'styled-components/native'

export const SnackBarContainer = styled.View`
  width: 100%;
`

interface SnackbarInnerContainerProps {
  success: boolean
}

export const SnackbarInnerContainer = styled.View<SnackbarInnerContainerProps>`
  margin: 0 auto;
  position: absolute;
  bottom: 32px;
  left: 32px;
  right: 32px;
  z-index: 1;
  border-radius: 4px;
  padding: 16px;
  background-color: ${(props) =>
    props.success ? props.theme.color.OK : props.theme.color.RED};
`
