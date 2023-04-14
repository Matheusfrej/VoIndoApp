import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import api, { apiLogin } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ActivitiesContextProviderProps {
  children: ReactNode
}

// acho que isso não tá sendo usado
export interface adressType {
  address: string
  location: string
  distance: number
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
}

interface ActivitiesContextType {
  activitiesList: ActivityType[] | undefined
  areActivitiesLoading: boolean
  isLogged: boolean
  getActivityById: (id: string) => ActivityType | undefined
  getActivities: () => void
}

export const ActivitiesContext = createContext({} as ActivitiesContextType)

export function ActivitiesContextProvider({
  children,
}: ActivitiesContextProviderProps) {
  const [activitiesList, setActivitiesList] = useState<
    ActivityType[] | undefined
  >()
  const [areActivitiesLoading, setAreActivitiesLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  // FUNCTIONS

  const getActivityById = (id: string) => {
    if (activitiesList !== undefined) {
      return activitiesList.find((activity) => activity.id === id)
    }
    return undefined
  }

  // API CALLS

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
      setAreActivitiesLoading(true)
      const response = await api.get('/api/atividades/list-all/')

      setActivitiesList(response.data)
      console.log(response.data)
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
        areActivitiesLoading,
        getActivityById,
        isLogged,
        getActivities,
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
