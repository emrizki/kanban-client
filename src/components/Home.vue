<template>
  <div class="row">
    <!-- NAVBAR -->
       <nav class="navbar navbar-expand-lg navbar-light bg-light mx-5">
        <a class="navbar-brand" href="#">KANBAN</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <button class="btn btn-danger" v-on:click="logout" style="background-color: f58634;">LOGOUT</button>
          </div>
        </div>
      </nav>
      <!-- NAVBAR -->
    <add-task-form></add-task-form>
    <task-list v-bind:tasks="tasks"></task-list>
  </div>
</template>

<script>

import axios from "axios"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"

export default {
  name: "Home",
  components: {
    AddTaskForm,
    TaskList,
  },
  props: ['tasks']
}
</script>

<style>

</style>