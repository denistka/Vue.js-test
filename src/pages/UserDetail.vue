<template>
  <q-page class="flex flex-center">
    <q-card>

      <q-card-separator />

      <q-card-title>
        UserDetail
        <q-card-media>
          <img :src="user.avatar">
        </q-card-media>
      </q-card-title>
      <q-card-main>
        <p>Full name</p>
        <p class="text-faded">{{ user.fullName }}</p>
        <q-card-separator />
        <p>Description</p>
        <p class="text-faded">{{ user.description }}</p>
      </q-card-main>
        <q-btn
          color="secondary"
          style="margin: 5px"
          @click="$router.push('/')"
        >Go back</q-btn>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageUserDetail',
  mounted () {
    this.getUser(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getUser: 'users/updateUser'
    })
  },
  computed: {
    ...mapGetters({
      user: 'users/getUser'
    })
  }
}
</script>
