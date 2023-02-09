<template>
  <div class="container">
    <img src="../assets/pkbfechada.png" alt="pokebolafechada"/>
    <div class="title">
      PokeFind
    </div>
    <div class="search-box">
      <input placeholder="Busque aqui o seu pokemon" v-on:change="Busca"/>
      <ion-icon name="search-outline" v-on:click="Find"></ion-icon>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index";

let pokenome="";
export default {
  name: 'HomePage',
  methods: {
    Busca: function (event){
      pokenome=(event.target.value);
    },
    Find: function (){
      if(pokenome===""){
        alert("Para continuar escreva o nome do seu pokemon");
      }else{
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokenome}`)
        .then(response=>{
          console.log(response);
          router.push('/pokemon')
        })
        .catch(error=>{
          console.log(error);
        })
      }
      
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input{
  border: none;
  text-decoration: none;
  width: 350px;
}
.title {
  height: 80px;
  color: red;
}
.search-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 400px;
  height: 20px;
  border: 1px solid gray;
  border-radius: 30px;
}
</style>
