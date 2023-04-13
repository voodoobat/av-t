import cookie from 'cookie-universal'
import { axiosService } from '~/services/axios.service'

export const state = {
  user: {}
}

export const actions = {
  async login ({ commit }, input) {
    const { data, error } = await axiosService('post', 'login', {
      data: input
    })

    if (error) {
      console.error(error)
    }

    cookie().set('x-user-token', data.token)
    commit('SET_USER', data.user)
  },

  async fetch ({ commit }) {
    // const { data, error } = await axiosService('get', )
  }
}

export const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  }
}

export const getters = {}
