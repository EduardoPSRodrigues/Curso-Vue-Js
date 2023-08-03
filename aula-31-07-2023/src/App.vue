<template>
<div class="container">
<h1>Hello world</h1>
<h2> {{ nome }}</h2>
<h3>{{ usuario.idade }}</h3>
<input type="text" v-model="nome">
</div>
</template>

<script>
export default {
data(){
  return{
    nome: 'Eduardo Phelipe',
    usuario: {
      idade: 33,
      email: 'eduardo@gmail.com'
    }
  }
}
}

</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(121, 53, 211);
}
</style>
