<template>
        <div class="container w-100">
          <form v-on:submit.prevent="login" class="p-5 w-25 mx-auto" style="margin-top: 100px; background-color: #efd9d1">
            <h2>Login Form</h2>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <div class="g-signin2 bg-primary" data-onsuccess="onSignIn"></div>
          </form>
        </div>
</template>

<script>
import axios from "axios"

export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      server: "http://localhost:3000"
    }
  },
  methods: {
    login() {
      axios({
        method: "POST",
        url: this.server+'/login',
        data: {
          email: this.email,
          password: this.password
        }
      }).then(response => {
        localStorage.setItem("access_token", response.data.access_token)
        this.$emit("changePage", "home")
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>