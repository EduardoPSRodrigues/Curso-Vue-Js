<template>
  <div class="container">
    <h1>Hello world</h1>
    <h2> {{ nome }}</h2>
    <h3>{{ usuario.idade }}</h3>
    <h3>{{ usuario.idade % 2 == 0 ? 'A idade é par' : 'A idade é impar' }}</h3>

    <p> {{ usuario.data.split('').reverse().join('') }}</p>
    <input type="text" v-model="usuario.data">
    <br><br><br>

    <!------------------------------------------------------------------------->

    <h1>Calculadora IMC</h1>
    <input type="number" placeholder="Peso" v-model="peso">
    <input type="number" placeholder="Altura" v-model="altura">
    <button @click="calcularIMC()">Calular</button>
    <!-- Resultado -->
    <p> Resultado: {{ resultado }} </p>

    <!------------------------------------------------------------------------->

    <h1>Determinar se o número é PAR OU IMPAR</h1>
    <input type="number" placeholder="Insira o numero" v-model="numeroParOuImpar">
    <button @click="DeterminarParOuImpar()">Calular</button>
    <!-- Resultado -->
    <p> Resultado: {{ resultadoParOuImpar }} </p>



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
      },
      peso: '',
      altura: '',
      resultado: '',
      numeroParOuImpar: '',
      resultadoParOuImpar: ''
    }
  },
  methods: {
    calcularIMC() {
      if (!this.peso || !this.altura) {
        alert('Preencha todos os dados')
        return
      }
      this.resultado = (this.peso / (this.altura ** 2)).toFixed(2)
    },

  DeterminarParOuImpar() {
    if (this.numeroParOuImpar % 2 ===0) {
      this.resultadoParOuImpar = 'Número PAR'
    } else {
      this.resultadoParOuImpar = 'Número IMPAR'
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


<!-- Informações do projeto
* export default {  data() {}, } Dentro do data eu coloco as minhas variáveis
* methods: {} eu coloco as minhas funções, sendo que não preciso colocar a palavra function
* No v-model não posso fazer manipulação de variável como soma, por exemplo, posso apenas passar o nome da variável 
* {{ usuario.idade % 2 == 0 ? 'A idade é par' : 'A idade é impar' }} posso apenas usar a combinação ternária ou contas simples
* Para chamar a função pode colocar apenas o nome da função calcularIMC ou com os parenteses calcularIMC()
* v-on:click="calcularIMC()" === @click="calcularIMC()"
* Eventos: 
  * onBlur: quando eu clico no corpo da página, ativo o blur
  * onFocus: campo do input ficar em evidência
  * onSubmit: usando dentro de formulários
* return vazio tem a função de fazer o código parar a partir daquele ponto e não executar o restante do código
* o objetivo de usar a palavra this é porque ele sempre vai se referir as variáveis do data e tambem irei chamar outras funções. 
-->