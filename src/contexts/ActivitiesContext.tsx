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
  atividade: number
  data_time: Date
  id: number
  participantes: []
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
    }
  }[]
}

interface ActivitiesContextType {
  activitiesList: ActivityType[] | undefined
  activitiesListOrdered: ActivityType[] | undefined
  areActivitiesLoading: boolean
  isLogged: boolean
  activityOrganizationDate: Date
  getActivityById: (id: string) => ActivityType | undefined
  getActivities: () => void
  getActivityiesOrderByDistance: () => void
  getLocalization: () => Promise<Location.LocationObject | undefined>
  setActivityOrganizationDate: React.Dispatch<React.SetStateAction<Date>>
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

  // FUNCTIONS

  const getActivityById = (id: string) => {
    if (activitiesList !== undefined) {
      return activitiesList.find((activity) => activity.id === id)
    }
    return undefined
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
        setIsLogged(true)
      } catch (error) {
        console.error(error)
      }
    }

    postActivity()
  }, [])

  const getActivities = async () => {
    try {
      const local = await getLocalization()
      const lat = local?.coords.latitude
      const lon = local?.coords.longitude
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
      const local = await getLocalization()
      const lat = local?.coords.latitude
      const lon = local?.coords.longitude
      // console.log(lat)
      // console.log(lon)
      setAreActivitiesLoading(true)
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
        setActivityOrganizationDate,
        getActivityById,
        getActivities,
        getActivityiesOrderByDistance,
        getLocalization,
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
