<template>
  <q-page class="flex flex-center">
    <q-list highlight>
      <q-list-header>Users list:</q-list-header>
      <q-item v-for="(item, index) in usersList" :key="index" link :to="linkTo(item)">
        <q-item-side>
          <q-item-tile avatar>
            <img class="users-list-avatar" :src="item.avatar">
          </q-item-tile>
        </q-item-side>
        <q-item-main :label="item.fullName" />
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageUsersList',
  mounted () {
    this.getUsers()
  },
  methods: {
    ...mapActions({
      getUsers: 'users/updateUsersList'
    }),
    linkTo (item) {
      return `/userDetail/${item.id}`
    }
  },
  computed: {
    ...mapGetters({
      usersList: 'users/getUsersList'
    })
  }
}
</script>
