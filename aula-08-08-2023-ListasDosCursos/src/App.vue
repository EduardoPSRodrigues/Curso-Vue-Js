
<template>
  <div>
    <h1>Lista de Cursos</h1>
    <CursoItem 
    v-for="(curso, index) in listaCursos" 

    :key="index"
    v-bind:titulo="curso.titulo" 
    :duracao="curso.duracao" 
    :vagas="curso.vagas">

    </CursoItem>
  </div>
</template>

<script>

import CursoItem from './components/CursoItem.vue'

export default {
  components: {
    CursoItem
  },

  data() {
    return {
      listaCursos: [
        {
          titulo: 'HTML e CSS',
          duracao: 20,
          vagas: 40
        },
        {
          titulo: 'JavaScript',
          duracao: 30,
          vagas: 50
        },
        {
          titulo: 'PHP',
          duracao: 40,
          vagas: 60
        },
      ]
    }
  }
}

</script>

<style scoped></style>


<!-- Informações do projeto

* props passa informações de um componente pai para o filho, só é definido a variável e não o valor 
  significa que aquela variavel vai receber um valor e vai exibir na tela
* App.vue é um componente pai APENAS para o CursoItem pois eu estou importando e registrando ele
* v-bind:duracao="20" significa que estou passando valores javascript para dentro das props, senão tivesse isso, esse 20
  seria lido como string, ja com o v-bind: será lido como numero, poderia passar um valor booleano também
  v-bind:duracao="listaCursos[0].duracao" === :duracao="listaCursos[0].duracao"
* v-for="curso in listaCursos"     
    v-bind:titulo="curso.titulo" :duracao="curso.duracao" :vagas="curso.vagas">
    Significa que faz um loop em ListaCursos e armazena a informação, como se fosse um map, essa variavel eu determinei o nome de curso
*    v-for="(curso, index) in listaCursos" 
    :key="index"
    Significa que posso passar ate 3 parametros no for, o segundo indice é um index e ele é um id pois nunca se repete
-->