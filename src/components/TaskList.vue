<template>
   <!-- LIST TASKS -->
    <div class="container my-5" style="border: 1px #333 solid; background-color: blue">
      <div class="row justify-content-center" style="height: 500px; border: 1px #333 solid">
        <task-backlog v-bind:tasks="tasks"></task-backlog>
        <task-todo></task-todo>
        <task-doing></task-doing>
        <task-done></task-done>
      </div>
    </div>
  <!-- LIST TASKS -->

</template>

<script>
import TaskBacklog from "./TaskBacklog"
import TaskTodo from "./TaskTodo"
import TaskDoing from "./TaskDoing"
import TaskDone from "./TaskDone"

export default {
  name: "TaskList",
  components: {
    TaskBacklog,
    TaskTodo,
    TaskDoing,
    TaskDone
  },
  props: ['tasks'],
  methods: {
    computed: {
      filterBacklog: function() {
        // console.log('task')
        return this.props.filter(task => task.category === "backlog")
      }
    }
  }
}
</script>

<style>

</style>