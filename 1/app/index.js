const vm = new Vue({
    el: "#app",
    data: {
        msg: "Titulo",
    },
});
const vm2 = new Vue({
    el: "#app2",
    data: {
        url: "viacep.com.br/ws/01001000/json/",
    }
});
const vm3 = new Vue({
    el: "#app3",
    data: {
        listas: [{ text: "Testando 1" }, { text: "Testando 2" }, { text: "Testando 3" }],
    },
});
const vm5 = new Vue({
    el: "#app5",
    data: {
        nome: "Renato",
        idade: 35,
        faculdade: {
            possui: "Sim",
            Curso: "FrontEnd",
        },
    },
});
