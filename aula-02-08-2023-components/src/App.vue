<template>
  <div>
    <Card>
      <template v-slot:header>
        <div>
          <h1>Título do Card</h1>

        </div>
      </template>
      <p>O Speedtest é melhor com o app Baixe o app do Speedtest para medições adicionais, teste de vídeo, mapas de
        cobertura móvel e mais. Get it on Google Play.</p>

      <template #footer>
        <h6>Criado por Eduardo Phelipe</h6>
      </template>
    </Card>



  </div>
</template>

<script>
import Card from "./components/Card.vue"

export default {
  components: {
    Card
  }
}
</script>

<style scoped></style>

<!-- Informações do projeto

* <style scoped> a palavra scoped faz com que o estilo fica encapsulado e seja aplicado apenas nesse arquivo
* <script setup> o setup informa que o VUE estará usando a nova versão de composition API, sem setup fica em OPTION API

* Regras para criar componentes:
  * nome do componente deve estar em PascalCase
  * Precisa importar o componente onde deseja utilizar
    import Card from "./components/Card.vue"
  * Precisa registrar o componente no arquivo onde ele será utilizado
    export default{
    components:{
    Card
    }
  * Não precisa fazer o export, pois o VUE entende que é componente e já faz automático
* <Card /> assim tambem esta correto
* <template v-slot:header> ou  <template #footer> consegue chamar o slot pelo nome, não importa a onde que esta o codigo, pois
  quem determina é a hierarquia do componente


-->