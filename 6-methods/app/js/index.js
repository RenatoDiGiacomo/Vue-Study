const vm = new Vue({
    el: "#app",
    data: {
        total: 0,
    },
    methods: {
        incrementar() {
            this.total++;
        },
        diminuir() {
            this.total--;
        },
    },
});

const vm2 = new Vue({
    el: "#app2",
    data: {
        instrumento: "",
    },
    methods: {
        mudarInstrumento(inst) {
            this.instrumento = inst;
        },
    },
});

const vm3 = new Vue({
    el: "#app3",
    data: {
        preco: 149,
        alerta: "",
    },
    methods: {
        adicionarCupom() {
            this.preco *= 0.9;
            this.alertaCupom();
        },
        alertaCupom() {
            this.alerta = "Cupom Adicionado";
        },
    },
});

// Utilizando a API
// https://api.origamid.dev/stock/aapl/quote

// Crie um método que faça o fetch da resposta acima
// O método deve ser ativado ao clique no botão Ver Preço

// Coloque a resposta json do fetch em uma data e
// mostre o valor de lalestPrice, latestTime e o
// companyName na interface.

const vmex = new Vue({
    el: "#appex",
    data: {
        titulo:"Exercícios de fetch",
        url:"https://api.origamid.dev/stock/aapl/quote",
        valor:"",
        ultima:"",
        companhia:"",
        
        acoes: {},
    },
    methods: {
        //Meu MODO
        lista() {
            fetch(this.url).then(response => response.json().then(data =>{
               this.valor = data.latestPrice, this.ultima = data.latestTime ,this.companhia = data.companyName
            }))
        },
        //MODO DA AULA
        lista1() {
            fetch("https://api.origamid.dev/stock/aapl/quote")
                .then(response => response.json())
                .then(res => {
                    this.acoes = res
                })
        },
    },
});
