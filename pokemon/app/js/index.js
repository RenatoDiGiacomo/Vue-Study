const vm = new Vue({
  el: "#app",
  data: {
    menu: []
  },
  mehotds: {
    menu() {
      fetch("menu.json")
        .then((response) => response.json())
        .then((list) => {
          this.menu = list;
        });
    }
  }
});
