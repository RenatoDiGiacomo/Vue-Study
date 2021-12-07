const vm = new Vue({
el:'#app',
data:{
    teste:"Meu texto em teste",
    color: "#555000"
},
computed:{
    nomeProduto(){
        return this.teste +' '+ this.color
    }
}

})