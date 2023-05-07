import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import api, { apiLogin } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Location from 'expo-location'

interface ActivitiesContextProviderProps {
  children: ReactNode
}

// acho que isso não tá sendo usado
export interface adressType {
  address: string
  location: string
  distance: number
}

export interface TagType {
  id: number
  name: string
}

export interface OcorrenciaType {
  id: number
  atividade: number
  data_time: Date
  participantes: []
  recorrencia: number
  data_limite: Date | null
}

export interface ActivityType {
  id?: string
  tags?: any
  comorbidities?: string[]
  ocorrencias: any
  creator?: {
    id: string
    email: string
    nickname: string
    first_name: string
    last_name: string
    birth_date: string
    is_verified: boolean
  }
  organizers?: {
    id: string
    email: string
    nickname: string
    first_name: string
    last_name: string
  }[]
  name: string
  created?: string
  description: string
  address: string
  contact?: string
  professional_required: boolean
  participants_limit: string
  is_active?: boolean
  is_boosted?: boolean
  latitude: number
  longitude: number
  distance?: number
  price?: number
  reviews?: {
    stars: number
    id: number
    text: string
    author: {
      birth_date: Date
      email: string
      first_name: string
      id: number
      last_name: string
      nickname: string
      is_verified: boolean
    }
  }[]
}

interface ActivitiesContextType {
  activitiesList: ActivityType[] | undefined
  activitiesListOrdered: ActivityType[] | undefined
  areActivitiesLoading: boolean
  isLogged: boolean
  activityOrganizationDate: Date
  snackBarSuccess: boolean | null
  snackBarMessage: string
  local: any
  setSnackBarStatus: (success: boolean, message: string) => void
  getActivityById: (id: string) => any | undefined
  getActivities: () => void
  getActivityiesOrderByDistance: () => void
  getLocalization: () => Promise<Location.LocationObject | undefined>
  setActivityOrganizationDate: React.Dispatch<React.SetStateAction<Date>>
  onSetAreActivitiesLoading: (value: boolean) => void
}

export const ActivitiesContext = createContext({} as ActivitiesContextType)

export function ActivitiesContextProvider({
  children,
}: ActivitiesContextProviderProps) {
  const [activitiesList, setActivitiesList] = useState<
    ActivityType[] | undefined
  >()
  const [activitiesListOrdered, setActivitiesListOrdered] = useState<
    ActivityType[] | undefined
  >()
  const [areActivitiesLoading, setAreActivitiesLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [activityOrganizationDate, setActivityOrganizationDate] = useState(
    new Date(),
  )
  const [local, setLocal] = useState<any>({ _j: null })
  const [snackBarSuccess, setSnackBarSuccess] = useState<boolean | null>(null)
  const [snackBarMessage, setSnackBarMessage] = useState('')

  // FUNCTIONS

  const getActivityById = (id: string) => {
    if (activitiesList !== undefined) {
      return activitiesList.find((activity) => activity.id === id)
    }
    return undefined
  }

  const onSetAreActivitiesLoading = (value: boolean) => {
    setAreActivitiesLoading(value)
  }

  const setSnackBarStatus = (success: boolean, message: string) => {
    setSnackBarSuccess(success)
    setSnackBarMessage(message)
  }

  // API CALLS

  const getLocalization = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permissão negada')
      return
    }

    const local = await Location.getCurrentPositionAsync({})
    return local
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSnackBarSuccess(null)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [snackBarSuccess])

  useEffect(() => {
    const postActivity = async () => {
      try {
        const data = {
          email: 'matheusfrej@gmail.com',
          password: 'wQvZAAi.F4a9A@4',
        }
        const headers = {
          'Content-Type': 'application/json',
        }
        const response = await apiLogin.post('/authuser/login/', data, {
          withCredentials: false,
          headers,
        })
        AsyncStorage.setItem('token', response.data.token)
        AsyncStorage.setItem('myid', response.data.id.toString())
        // console.log(response.data.id)
        setIsLogged(true)
      } catch (error) {
        console.error(error)
      }
    }

    postActivity()
  }, [])

  // pega o local quando abre o aplicativo
  useEffect(() => {
    // console.log(local)

    setLocal(getLocalization())
  }, [isLogged])

  const getActivities = async () => {
    try {
      let lat = 0
      let lon = 0
      if (local._j === null) {
        const localaux = await getLocalization()
        lat = localaux!.coords.latitude
        lon = localaux!.coords.longitude
      } else {
        lat = local._j.coords.latitude
        lon = local._j.coords.longitude
      }
      setAreActivitiesLoading(true)
      const response = await api.get('/api/atividades/list-sugeridas-tags/', {
        params: { lat, lon },
      })

      setActivitiesList(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setAreActivitiesLoading(false)
    }
  }

  const getActivityiesOrderByDistance = async () => {
    try {
      let lat = 0
      let lon = 0
      if (local._j === null) {
        const localaux = await getLocalization()
        lat = localaux!.coords.latitude
        lon = localaux!.coords.longitude
      } else {
        lat = local._j.coords.latitude
        lon = local._j.coords.longitude
      }
      const response = await api.get(
        '/api/atividades/list-sugeridas-distance/',
        {
          params: { lat, lon },
        },
      )

      setActivitiesListOrdered(response.data)
      // console.log(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setAreActivitiesLoading(false)
    }
  }

  return (
    <ActivitiesContext.Provider
      value={{
        activitiesList,
        activitiesListOrdered,
        areActivitiesLoading,
        isLogged,
        activityOrganizationDate,
        snackBarSuccess,
        snackBarMessage,
        local,
        setSnackBarStatus,
        setActivityOrganizationDate,
        getActivityById,
        getActivities,
        getActivityiesOrderByDistance,
        getLocalization,
        onSetAreActivitiesLoading,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}

export function useActivities(): ActivitiesContextType {
  const context = useContext(ActivitiesContext)

  return context
}
