var app = new Vue({
  el: '#app',
  data: {},
  methods: {
    handleClick: function(event) {
      //   app.showMessage = true;
      alert(event.target);
    },
  },
  mounted: function() {
    console.log(this.$el);
    console.log(this.$refs.hello);
  },
});
