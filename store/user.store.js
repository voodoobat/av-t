import cookie from 'cookie-universal'
import { axiosService } from '~/services/axios.service'

export const state = {
  user: {}
}

export const actions = {
  async login ({ commit }, input) {
    const cookies = cookie()
    const { data, error } = await axiosService('post', 'login', {
      data: input
    })

    if (error) {
      return console.error(error)
    }

    cookies.set('user-id', data.user.id)
    cookies.set('x-user-token', data.token)

    commit('SET_USER', data.user)
  },

  async fetch ({ commit }) {
    const userId = cookie().get('user-id')
    const { data, error } = await axiosService('get', `user/${userId}`)

    if (error) {
      return console.error(error)
    }

    commit('SET_USER', data)
  }
}

export const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  }
}

export const getters = {
  isAuthorized: ({ user }) => {
    return !!user.id
  }
}
