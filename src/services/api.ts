import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'https://f020-2804-14d-5492-8009-2d3a-375-658c-edbb.sa.ngrok.io',
})

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem('token')

  if (token && request.headers) {
    request.headers.Authorization = token ? `Token ${token}` : ''
  }

  return request
})

export default api
