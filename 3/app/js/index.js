///Template
const vm = new Vue({
    el: "#app",
    data: {
        titulo: "Meu titulo",
        comentario: "Meu Comentário",
        lado: 5,
        comprou: false,
    },
});

const vm2 = new Vue({
    el: "#app2",
    data: {
        comprou: true,
  
    },
});
//Diretivas
/*
v-bind
v-if
v-model => somente para formulário
*/

const vm3 = new Vue({
    el:"#app3",
    data:{
        check: true,
        text1:"Testando o 1",
        text2:"Testando o 2",
        color:"#000",
        href: "http://www.google.com.br/",
    }
});