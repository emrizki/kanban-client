<template>
  <div class="container">
      <!-- WELCOME -->
        <div class="container" v-if="currentPage === 'welcome'">
          <div class="jumbotron text-center p-4 my-5" style="background-color: #f4eeed;">
            <h1 class="display-4">Selamat datang di Website Kami, KANBAN</h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente adipisci nobis facilis laudantium, molestias, nihil ipsum voluptatem quis id, animi sunt! Natus, quidem asperiores ab animi debitis quibusdam ipsum rem porro similique beatae temporibus officiis labore error nihil, quasi eos inventore pariatur earum. Laborum maiores ex quia eaque, ab inventore.</p>
            <button class="btn btn-primary btn-lg" v-on:click="changePage('login')">Login</button>
            <button class="btn btn-primary btn-lg" v-on:click="changePage('register')">Register</button>
          </div>
        </div>
        <!-- WELCOME -->
    <register-form v-if="currentPage === 'register'" v-on:changePage="changePage"></register-form>
    <login-form v-if="currentPage === 'login'" v-on:changePage="changePage"></login-form>
    <home v-if="currentPage === 'home'" v-bind:tasks="tasks"></home>
  </div>
</template>

<script>

import axios from "axios"
import RegisterForm from "./components/RegisterForm"
import LoginForm from "./components/LoginForm"
import Home from "./components/Home"

export default {
  name: "App",
  data() {
    return {
      message: "Hello World",
      currentPage: "welcome",
      tasks: [],
      user: {
        email: '',
        password: '',
      },
      server: 'http://localhost:3000'
    }
  },
  components: {
    LoginForm,
    Home,
    RegisterForm
  },
  methods: {
    changePage(payload) {
      this.currentPage = payload
    },
    fetchAllTasks() {
      axios({
        method: "GET",
        url: this.server+'/tasks',
        headers: {
          access_token: localStorage.access_token
        }
      }).then((response) => {
        console.log(response.data)
        this.tasks = response.data
      }).catch(err => {
        console.log(err.message)
      })
    }
  },
  created() {
    this.fetchAllTasks()
  }
}
</script>

<style>

</style>