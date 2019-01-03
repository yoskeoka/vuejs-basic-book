var app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue.js',
    list: ['りんご', 'バナナ', 'いちご'],
    showMessage: false,
  },
  methods: {
    handleClick: function(event) {
      //   app.showMessage = true;
      alert(event.target);
    },
  },
});
