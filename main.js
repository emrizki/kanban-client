const app = new Vue({
  el: '#app',
  data: {
    msg: 'Hello World From Vue js',
    task: ['belajar vue', 'belajar vue instance'],
    lorem: 'lorem ipsum dolor sit amet',
    html: '<h1>ini dari main js</h1>',
    halaman: 'welcome'
  },
  methods: {
    gantiHalaman(page) {
      this.halaman = page
    }
  }
})