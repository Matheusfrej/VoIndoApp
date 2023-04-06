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

// interface ActivityType {
//   name: string
//   description: string
//   location: string
//   contact: string
// }

interface ActivitiesContextType {
  activitiesList: any | undefined
  areActivitiesLoading: boolean
}

export const ActivitiesContext = createContext({} as ActivitiesContextType)

export function ActivitiesContextProvider({
  children,
}: ActivitiesContextProviderProps) {
  const [activitiesList, setActivitiesList] = useState()
  const [areActivitiesLoading, setAreActivitiesLoading] = useState(true)

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
      value={{ activitiesList, areActivitiesLoading }}
    >
      {children}
    </ActivitiesContext.Provider>
  )
}

export function useActivities(): ActivitiesContextType {
  const context = useContext(ActivitiesContext)

  return context
}
