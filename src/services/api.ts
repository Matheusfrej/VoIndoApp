import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const apiLogin = axios.create({
  baseURL: 'http://34.30.162.63:8000',
})

const api = axios.create({
  baseURL: 'http://34.30.162.63:8000',
})

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('token')

  if (token && request.headers) {
    request.headers.Authorization = token ? `Token ${token}` : ''
  }

  return request
})

export default api
