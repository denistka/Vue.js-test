import Vue from 'vue'
import Vuex from 'vuex'

import users from './usersList'

Vue.use(Vuex)
console.log(users)
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      users
    }
  })

  return Store
}
