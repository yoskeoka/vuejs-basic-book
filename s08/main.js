var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    radius: 50,
    list: [
      {id: 1, name: 'りんご', price: 100},
      {id: 2, name: 'みかん', price: 70},
      {id: 3, name: 'いちご', price: 200},
    ],
    monsters: [],
  },
  methods: {
    increment: function() {
      this.count++;
    },
  },
  created: function() {
    axios
      .get('monsters.json')
      .then(
        function(resp) {
          this.monsters = resp.data;
        }.bind(this),
      )
      .catch(function(e) {
        console.error(e);
      });
  },
});
