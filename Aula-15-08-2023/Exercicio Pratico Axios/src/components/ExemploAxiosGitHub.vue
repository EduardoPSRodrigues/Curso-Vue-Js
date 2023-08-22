<template>
    <!-- <form>
       <h1>Axios via GitHub</h1>
       <h2>Nome: {{ usuario.name }}</h2>
        <img :src="usuario.avatar_url" :width="200" alt="imagem"> 
     </form>-->
   
     <form>
       <h1>Axios via Via Cep</h1>
       <h2>Endereço: {{ endereco.logradouro }}</h2>
       <h2>CEP: {{ endereco.cep }}</h2>
       <h2>complemento: {{ endereco.complemento }}</h2>
       <h2>bairro: {{ endereco.bairro }}</h2>
       <h2>localidade: {{ endereco.localidade }}</h2>
       
     </form>
   </template>
   
   <script>
   /**
    * PASSOS PARA UTILIZAR O AXIOS
    * 
    * Não precisa fazer a validação e a conversão para json, sendo que no fetch tem que fazer na mão
    * Não precisa fazer a configuração do tipo de conteúdo que esta passando
    * 
    * 
    * 1 - [x] instalar o axios - npm install axios
    * 2 - [x] importar o axios no local que será utilizado - import axios from "axios"
    * 3 - [x] utilizar o axios usando o método (GET, POST, PUT...) desejado
    * 
    * mounted(){ } é responsável por montar o site, entao se estou pegando valores de outros lugares para depois montar o meu site
    * o site sempre ficará atualizado, sendo que o resultado da requisição do axios fica na variavel resultado.data que armazena na 
    * variavel endereço no data 
    */
   
   import axios from "axios"
   
   export default {
     data(){
       return {
        usuario: {},
        endereco: {},
       }
     },
     // mounted(){
     //   axios.get('https://api.github.com/users/Bruno-Costa-fig')
     //   .then(resultado => this.usuario = resultado.data)
     //   .catch(erro => console.log('erro'))
     // }, 
     mounted() {
       axios.get('https://viacep.com.br/ws/01001000/json/')
       .then(resultado => this.endereco = resultado.data)
       .catch(erro => console.log('erro'))
     },
   }
   </script>
   
   <style scoped>
   form{
     display: flex;
     flex-direction: column;
     gap: 10px;
   }
   </style>