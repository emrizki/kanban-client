<template>
    <!-- REGISTER FORM -->
      <div class="container">
        <form v-on:submit.prevent="register" class="w-25 mx-auto" style="margin-top: 100px">
          <h1>Register Form</h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <!-- REGISTER FORM -->
</template>

<script>
import axios from "axios"

export default {
  name: "RegisterForm",
  data() {
    return {
      email: '',
      password: '',
      server: 'http://localhost:3000'
    }
  },
  methods: {
    register() {
      axios({
        method: 'POST',
        url: this.server+'/register',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(response => {
        this.$emit("changePage", "login")
      }).catch(err => {
        console.log(err.message)
      })
    }
  }
}
</script>

<style>

</style>