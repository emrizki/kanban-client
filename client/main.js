const app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello World From Vue js',
    tasks: [],
    lorem: 'lorem ipsum dolor sit amet',
    html: '<h1>ini dari main js</h1>',
    page: 'welcome',
    inputTask: {
      title: '',
      category: ''
    },
    user: {
      email: '',
      password: ''
    },
    server: 'http://localhost:4000'
  },
  methods: {
    currentPage(page) {
      this.page = page
    },
    addTask() {
      axios({
        method: 'POST',
        url: this.server+'/tasks',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: this.inputTask.title,
          category: this.inputTask.category
        },
      }).then(response => {
        console.log(response)
        // this.fetchAllTasks()
        // this.inputTask = ''
      }).catch(err => {
        console.log(err.message)
      })
    },
    checkAuth() {
      if(localStorage.access_token) {
        this.currentPage('tasks')
        this.fetchAllTasks()
      } else {
        this.currentPage('welcome')
      }
    },
    register() {
      axios
    },
    login() {
      axios({
        method: 'POST',
        url: this.server+'/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      }).then(response => {
        localStorage.setItem('access_token', response.data.access_token)
        this.checkAuth()
      }).catch(err => {
        console.log(err.message)
      })
    },
    logout() {
      localStorage.clear()
      this.checkAuth()
    },
    fetchAllTasks() {
      axios({
        method: 'GET',
        url: this.server+'/tasks',
        headers: {
          access_token: localStorage.access_token
        }
      }).then(response => {
        this.tasks = response.data
      }).catch(err => {
        console.log(err.message)
      })
    }
  },
  created() {
    this.checkAuth()
  },
  computed:  {
    filterBacklog: function() {
      return this.tasks.filter(task => task.category === 'backlog')
    },
    filterTodo: function() {
      return this.tasks.filter(task => task.category === 'todo')
    },
    filterDoing: function() {
      return this.tasks.filter(task => task.category === 'doing')
    },
    filterDone: function() {
      return this.tasks.filter(task => task.category === 'done')
    }
  }
})