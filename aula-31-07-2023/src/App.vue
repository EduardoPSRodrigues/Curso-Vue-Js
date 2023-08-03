<template>
  <div class="container">
    <h1>Hello world</h1>
    <h2> {{ nome }}</h2>
    <h3>{{ usuario.idade }}</h3>
    <h3>{{ usuario.idade % 2 == 0 ? 'A idade é par' : 'A idade é impar' }}</h3>

    <p> {{ usuario.data.split('').reverse().join('') }}</p>
    <input type="text" v-model="usuario.data">
    <br><br><br>
    


    <h1>Calculadora IMC</h1>
    <input type="number" placeholder="Peso" id="">
    <input type="number" placeholder="Altura" id="">
    <button>Calular</button>
    <!-- Resultado -->
    <span></span>










  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: 'Eduardo Phelipe',
      usuario: {
        idade: 32,
        email: 'eduardo@gmail.com',
        data: '2023/12/31'
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
