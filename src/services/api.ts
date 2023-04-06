import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'https://3159-2804-14d-5492-8009-445c-b7c5-6637-d7c4.sa.ngrok.io',
})

// api.interceptors.request.use((request) => {
//   const token = AsyncStorage.getItem('token')

//   if (request.headers) {
//     request.headers.Authorization = token ? `Token ${token}` : ''
//   }

//   return request
// })

export default api
