import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const apiLogin = axios.create({
  baseURL: 'https://1a43-2804-14d-5492-8009-aa-37f3-156b-f065.sa.ngrok.io',
})

const api = axios.create({
  baseURL: 'https://1a43-2804-14d-5492-8009-aa-37f3-156b-f065.sa.ngrok.io',
})

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('token')

  if (token && request.headers) {
    request.headers.Authorization = token ? `Token ${token}` : ''
  }

  return request
})

export default api
