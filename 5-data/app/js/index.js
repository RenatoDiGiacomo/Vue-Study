const vm = new Vue({
    el: "#app1",
    data: {
        titulo: "Vue.JS Completo",
        $preco:59
    },
});


const vm2 = new Vue({
  el:"#app2",
  data:{
    logado: ''
  }
});

setTimeout(()=>{
 vm2.logado = "Sim"
}, 100);


const vmex = new Vue({
  el: "#appex",
  data: {
    empresa: "Apple",
    produto: "iPhone",
  }
});

// <!-- Crie uma instância que mostre
// baseado no valor do lado do quadrado
// o seu perímetro (lX4) e área (lXl).
// O lado do quadrado deve ser um estado reativo -->
const vmlado = new Vue({
  el:"#appLado",
  data:{
    lado:""
  }
})