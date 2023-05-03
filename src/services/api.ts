import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const apiLogin = axios.create({
  baseURL: 'https://8251-2804-14d-5492-910b-2557-99e6-56bd-a3e6.sa.ngrok.io',
})

const api = axios.create({
  baseURL: 'https://8251-2804-14d-5492-910b-2557-99e6-56bd-a3e6.sa.ngrok.io',
})

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('token')

  if (token && request.headers) {
    request.headers.Authorization = token ? `Token ${token}` : ''
  }

  return request
})

export default api
