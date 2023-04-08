import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'

const api = axios.create({
  baseURL: 'https://3da3-2804-14d-5492-8009-2d3a-375-658c-edbb.sa.ngrok.io',
})

// api.interceptors.request.use((request) => {
//   const token = AsyncStorage.getItem('token')
//   console.log(token)

//   if (token && request.headers) {
//     console.log('qualquer coisa')

//     request.headers.Authorization = token ? `Token ${token}` : ''
//   }

//   return request
// })

export default api
