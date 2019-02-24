export function USERS_LIST_REQUEST (state) {
  state.isFetching = true
}
export function USERS_LIST_UPDATE (state, payload) {
  state.items = payload.items.map((el) => {
    return {
      ...el,
      fullName: `${el.firstName} ${el.lastName}`
    }
  })
  state.isFetching = false
}
export function USERS_SELECT_USER (state, payload) {
  state.selected = state.items.filter(item => item.id.toString() === payload.id)[0] || state.selected
}
