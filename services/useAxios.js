import axios from 'axios'
import { useStorage } from '~/services/useStorage'

export const useAxios = async (method, url, requestConfig) => {
  const jwt = useStorage('x-user-token')
  const headers = jwt
    ? { 'X-User-Token': jwt }
    : {}

  try {
    const response = await axios.request({
      baseURL: process.env.public.API_URL,
      headers,
      url,
      method,
      ...requestConfig,
    })

    return { data: response.data }
  } catch (error) {
    return { error }
  }
}
