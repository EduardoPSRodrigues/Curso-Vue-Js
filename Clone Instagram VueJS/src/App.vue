<!-- HTML -->
<template>

  <form class="form-login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="Logotipo do instagram">

        <div class="input-area">    
        <input type="text" placeholder="Telefone, nome do usuário ou e-mail" v-model="email">
        <span id="erro-email" class="texto-erro" hidden></span>
        </div>

        <div class="input-area">
        <input type="password" placeholder="Senha" v-model="password">
        <span id="erro-senha" class="texto-erro" hidden></span>
        </div>

        <button type="submit">Entrar</button>

        <a id="esqueceu-senha">Esqueceu a senha?</a>
        <span id="imagem-carregando" hidden></span>
    </form>

</template>

<!-- Java Script -->

<script>
export default {
  data(){
    return{
      email: '',
      password: '',
    }
  },
}
</script>

<!-- Estilização -->

<style scoped>
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

.texto-erro {
  color: red;
  margin: 4px;
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

a {
  color: #707b88;
  font-size: 14px;
}

.input-error {
  border-color: red;
}
</style>
