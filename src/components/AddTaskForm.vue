<template>
  <!-- ADD TASK FORM -->
      <div class="container w-50 my-5">
        <h4>Add Task Form</h4>
        <form>
          <div class="form-group my-3">
            <label for="title">Title</label>
            <input class="form-control" type="text" placeholder="Masukkan Title">
            <label for="category">Category</label>
              <select class="form-control" name="category" id="category">
                <option value="" selected disabled>-- Choose Category --</option>
                <option value="backlog">Backlog</option>
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
            </div>
            <button class="btn btn-primary btn-lg" type="submit">Add Task</button>
        </form>
      </div>
      <!-- ADD TASKS FORM -->
</template>

<script>
export default {
  name: "AddTaskForm"
}
</script>

<style>

</style>