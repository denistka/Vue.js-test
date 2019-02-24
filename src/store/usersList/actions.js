import api from '../../api'

export function updateUsersList ({ commit, state }) {
  if (!state.items.length) {
    commit('USERS_LIST_REQUEST')
    api.usersListRequest()
      .then(response => response.json())
      .then(json => commit('USERS_LIST_UPDATE', { items: json }))
  }
}

export function updateUser ({ commit, state }, id) {
  if (!state.items.length) {
    commit('USERS_LIST_REQUEST')
    api.usersListRequest()
      .then(response => response.json())
      .then(json => {
        commit('USERS_LIST_UPDATE', { items: json })
        commit('USERS_SELECT_USER', { id })
      })
  } else {
    commit('USERS_SELECT_USER', { id })
  }
}
