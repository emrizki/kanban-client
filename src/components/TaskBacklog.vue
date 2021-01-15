<template>
    <div class="col m-3" style="border: 1px red solid; background-color: white">
      <h1></h1>
      <div class="card mt-3 mb-3 border-primary">
        <div class="card-body">
          item.title
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Add Task</button>
    </div>
</template>

<script>
export default {
  name: "TaskBacklog",
  props: ['tasks']
}
</script>

<style>

</style>