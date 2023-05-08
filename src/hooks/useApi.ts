import axios from 'axios'

const api = axios.create({
  baseURL: 'https://advisor-api.vercel.app/'
})

export const useApi = () => ({
  validateToken: async (token: string) => {

    const response = await api.post('/validate', null, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    console.log(token)
    console.log(response.data)
    return response.data
  },

  signin: async (email: string, password: string) => {
    const response = await api.post('/login', null, 
    {
      headers: {
        email, 
        password
      }
    })

    return response.data
  },

  signout: async () => {
    const response = await api.post('/logout')

    return response.data
  }
})