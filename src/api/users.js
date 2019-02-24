import fetch from 'cross-fetch'

export const usersListRequest = () => fetch('statics/data/users.json')
