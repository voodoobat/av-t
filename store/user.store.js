import { useAxios } from '~/services/useAxios'

export const state = {
  user: {}
}

export const actions = {
  async login ({ commit }, input) {
    const { data } = await useAxios('post', 'login', {
      data: input
    })

    console.log(input)
    console.log(data)
  }
}

export const mutations = {}

export const getters = {}
