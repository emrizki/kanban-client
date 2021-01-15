<template>
  <!-- NAVBAR -->
       <nav class="navbar navbar-expand-lg navbar-light bg-light mx-5">
        <a class="navbar-brand" href="#">KANBAN</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" v-on:click="currentPage('tasks')" href="#">List Tasks</span></a>
            <button class="btn btn-danger" v-on:click="logout" style="background-color: f58634;">LOGOUT</button>
          </div>
        </div>
      </nav>
      <!-- NAVBAR -->
</template>

<script>
export default {

}
</script>

<style>

</style>