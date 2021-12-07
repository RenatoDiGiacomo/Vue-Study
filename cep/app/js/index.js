const vm = new Vue({
  el: "#app",
  data: {
    titulo: "Verificação de Endereço",
    coment: "Entre com o seu CEP para verificar o endereço",
    input: "",
    api: "https://viacep.com.br/ws/",
    uri: "",
    end: {}
  },
  methods: {
    listagemCep() {
      fetch(`https://viacep.com.br/ws/${this.input}/json`)
        .then((response) => response.json())
        .then((dados) => {
          return (this.end = dados);
        });
    }
  }
});

// fetch("https://api.origamid.dev/stock/aapl/quote")
// .then(response => response.json())
// .then(res => {
//     this.acoes = res
// })
