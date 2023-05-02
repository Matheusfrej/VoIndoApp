import { Snackbar } from '@react-native-material/core'
import { View } from 'react-native'
import { useTheme } from 'styled-components'
import { useActivities } from '../../contexts/ActivitiesContext'

interface CustomSnackBarProps {
  success: boolean
}

export function CustomSnackBar({ success }: CustomSnackBarProps) {
  const { snackBarMessage } = useActivities()
  const theme = useTheme()

  return (
    <View>
      {success ? (
        <Snackbar
          message={snackBarMessage}
          style={{
            position: 'absolute',
            start: 16,
            end: 16,
            bottom: 16,
            zIndex: 1,
            backgroundColor: theme.color.OK,
          }}
        />
      ) : (
        <Snackbar
          message={snackBarMessage}
          style={{
            position: 'absolute',
            start: 16,
            end: 16,
            bottom: 16,
            zIndex: 1,
            backgroundColor: theme.color.RED,
          }}
        />
      )}
    </View>
  )
}
