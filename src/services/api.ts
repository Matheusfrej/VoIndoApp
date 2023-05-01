import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const apiLogin = axios.create({
  baseURL: 'https://6b69-2804-14d-5492-8333-dd56-b4dc-f68b-26d5.sa.ngrok.io',
})

const api = axios.create({
  baseURL: 'https://6b69-2804-14d-5492-8333-dd56-b4dc-f68b-26d5.sa.ngrok.io',
})

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('token')

  if (token && request.headers) {
    request.headers.Authorization = token ? `Token ${token}` : ''
  }

  return request
})

export default api
