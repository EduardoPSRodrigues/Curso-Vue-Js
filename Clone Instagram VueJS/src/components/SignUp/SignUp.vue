<!-- HTML -->
<template>
    <form class="form-login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
        alt="Logotipo do instagram">

      <p>Cadastre-se para ver fotos e vídeos dos seus amigos</p>

      <div class="input-area">
        <label for="nomeCompleto">Nome Completo:</label>
        <input 
        type="text" 
        id="nomeCompleto"
        v-model="nomeCompleto">
      </div>
  
      <div class="input-area">
        <label for="email">E-mail:</label>
        <input 
        type="text"
        id="email" 
        v-model="email" >
      </div>

      <div class="input-area">
        <label for="telefone">Telefone:</label>
        <input 
        type="text"
        id="telefone" 
        v-model="telefone" >
      </div>

      <div class="input-area">
        <label for="password">Senha:</label>
        <input 
        type="password" 
        id="password"
        v-model="password" >
      </div>

      <div class="input-area">
        <label for="confirmarPassword">Confirme a senha:</label>
        <input 
        type="password" 
        id="confirmarPassword"
        v-model="confirmarPassword" >
      </div>

      <div class="input-area">
        <label for="patrocinador">Patrocinador:</label>
        <select id="patrocinador" v-model="patrocinador">
            <option value="">Sem patrocinador</option>
            <option value="Coca Cola">Coca Cola</option>
            <option value="Nike">Nike</option>
            <option value="Lab 365">Lab 365</option>
            <option value="Zucchetti">Zucchetti</option>
        </select>   
      </div>

      <div class="input-area">
        <label for="biografia">Digite sua biografia:</label>
        <textarea id="biografia" cols="30" rows="10" v-model="biografia" ></textarea>
      </div>

      <div class="input-area">
        <label for="confirmeTermos">Aceita termos de uso: {{ confirmeTermos ? 'Sim' : 'Não' }}</label>
        <input type="checkbox" id="confirmeTermos" v-model="confirmeTermos">
      </div>

      <div class="input-area">
        <input id="Bronze" type="radio" v-model="tipoPlano" value="1">  <label for="Bronze">Bronze </label>
        <input id="Prata" type="radio" v-model="tipoPlano" value="2">  <label for="Prata">Prata </label>
        <input id="Premium" type="radio" v-model="tipoPlano" value="3">  <label for="Premium">Premium </label>
      </div>


 
      <button type="submit">Cadastre-se</button>

      <p class="input-area">Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade
         e Política de Cookies</p>
        
    </form>
    
  </template>
  
  <!-- Java Script -->
  
  <script>
  export default {
    data() {
      return {
        nomeCompleto: '',
        email: '',
        telefone: '',
        password: '',
        confirmarPassword: '',
        patrocinador: '',
        biografia: '',
        confirmeTermos: true,
        tipoPlano: 2,
      }
    },
    methods: {
      
    },
  }
  </script>
  
  <!-- Estilização -->
  
  <style scoped>
  .error-box {
    background-color: tomato;
    width: 80%;
    color: #fff;
    margin: 4px;
  
  }
  .form-login {
    margin: 0 auto;
    width: 40%;
  
    border-radius: 4px;
    border: 2px solid #f2f2f2;
  
    display: flex;
    flex-direction: column;
    gap: 16px;
  
    align-items: center;
    padding: 12px;
  }
  
  img {
    width: 250px;
  }
  
  input {
    background-color: #fafafa;
    height: 40px;
    width: 80%;
  
    border-radius: 8px;
    border: 1px solid #f2f2f2;
  
    outline: none;
  }
  
  .input-area {
    display: flex;
    flex-direction: column;
  
    width: 80%;
  }
  
  .input-area input {
    width: 100%;
  }
  
  button {
    background-color: #4bb4f8;
    color: white;
  
    font-size: 16px;
  
    height: 40px;
    width: 80%;
  
    border-radius: 8px;
    border: none;
  }
  
  button:hover {
    background-color: #2985c2;
  }
  
  label {
    color: #707b88;
    font-size: 14px;
  }
  
  .input-error {
    border-color: red;
  }
  </style>
  
  
  <!-- Informações do projeto
  
  * Para criar uma função de submissão no formulário, basta colocar @submit="" e declarar a função
  * Quando tem um formulário, não precisa colocar o @submit no botão, pois estará vinculado no formulário, 
    coloca @click ou @submit quando for um botão independente. 
  * @submit.prevent significa que o submit não vai mais recarregar a tela, seria como o preventDefault no java
  * Quando o if tem apenas 1 linha, pode omitir as chaves e deixar tudo na mesma linha
  * Caso o email ou senha seja preenchido, o campo this. errorInputEmail = '' faz limpar a variavel e sumir com o erro na tela
  * v-if="errorInputEmail": Essa é uma diretiva do Vue.js chamada v-if. Ela é usada para renderizar condicionalmente 
    um elemento com base em uma expressão booleana. No caso, o elemento <li> só será renderizado se o valor de 
    errorInputEmail for avaliado como verdadeiro (ou seja, não for nulo, vazio, falso, etc.).
  * button :disabled="!email && !password"  vai deixar o botão desabilitado até esses campos terem informação.
  * Como esse código é um componente, tem que importar ele no APP.vue, registrar em export default { 
    components:{LoginInstagram}, e colocar a tag no HTML.
  * <p><router-link to="/cadastro">Cadastre-se</router-link></p> significa que dentro da tag p estou colocando um link 
    para quando clicar na palavra Cadastre-se, o usuário ir para a tela de cadastro, coloca sempre o nome do patch que foi
    configurado no router
  * Dentro de uma função no methods, para ser direcionado a outra tela usa-se this.$router.push('/home'), dentro das aspas 
    coloca o path para ser direcionado
  -->