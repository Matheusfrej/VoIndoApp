import { useActivities } from '../../contexts/ActivitiesContext'
import { CustomText } from '../CustomText'
import { SnackBarContainer, SnackbarInnerContainer } from './styles'

interface CustomSnackBarProps {
  success: boolean
}

export function CustomSnackBar({ success }: CustomSnackBarProps) {
  const { snackBarMessage } = useActivities()

  return (
    <SnackBarContainer>
      {success ? (
        <SnackbarInnerContainer success={true}>
          <CustomText type="span" style={{ fontSize: 18, color: '#fff' }}>
            {snackBarMessage}
          </CustomText>
        </SnackbarInnerContainer>
      ) : (
        <SnackbarInnerContainer success={false}>
          <CustomText type="span" style={{ fontSize: 18, color: '#fff' }}>
            {snackBarMessage}
          </CustomText>
        </SnackbarInnerContainer>
      )}
    </SnackBarContainer>
  )
}
