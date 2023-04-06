import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import api from '../services/api'

interface ActivitiesContextProviderProps {
  children: ReactNode
}

interface ActivityType {
  id: string
  tags?: string[]
  comorbidities?: string[]
  ocorrencias?: string[]
  creator: {
    id: string
    email: string
    nickname: string
    first_name: string
    last_name: string
  }
  organizers: {
    id: string
    email: string
    nickname: string
    first_name: string
    last_name: string
  }[]
  name: string
  created: string
  description: string
  location: string
  contact: string
  professional_required: boolean
  participants_limit: number
  is_active: boolean
  is_boosted: boolean
}

interface ActivitiesContextType {
  activitiesList: ActivityType[] | undefined
  areActivitiesLoading: boolean
  getActivityById: (id: string) => ActivityType | undefined
}

export const ActivitiesContext = createContext({} as ActivitiesContextType)

export function ActivitiesContextProvider({
  children,
}: ActivitiesContextProviderProps) {
  const [activitiesList, setActivitiesList] = useState<
    ActivityType[] | undefined
  >()
  const [areActivitiesLoading, setAreActivitiesLoading] = useState(true)

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
        const response = await api.post('/authuser/login/', data, {
          withCredentials: false,
          headers,
        })

        console.log(response.data) // do something with the response
      } catch (error) {
        console.error(error)
      }
    }

    postActivity()
  }, [])

  useEffect(() => {
    const getActivities = async () => {
      try {
        setAreActivitiesLoading(true)
        const response = await api.get('/api/atividades/list-all/')

        setActivitiesList(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setAreActivitiesLoading(false)
      }
    }

    if (!activitiesList) getActivities()
  }, [activitiesList])
  return (
    <ActivitiesContext.Provider
      value={{ activitiesList, areActivitiesLoading, getActivityById }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}

export function useActivities(): ActivitiesContextType {
  const context = useContext(ActivitiesContext)

  return context
}
