import { useActivities } from '../../contexts/ActivitiesContext'
import { CustomText } from '../CustomText'
import { SnackBarContainer, SnackbarInnerContainer } from './styles'

export function CustomSnackBar() {
  const { snackBarSuccess, snackBarMessage } = useActivities()

  return (
    <>
      {snackBarSuccess !== null && (
        <SnackBarContainer>
          {snackBarSuccess ? (
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
      )}
    </>
  )
}
