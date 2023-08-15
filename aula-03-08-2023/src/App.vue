<!--
  PASSOS PARA CRIAR UM COMPONENTE:
  - 1 [x] - crie um arquivo dentro da pasta components
  - 2 [x] - dê o nome ao arquivo usando PascalCase
    Obs: PascalCase significa que as primeiras letras
    sempre serão maiúsculas.
  - 3 [x] - Escreva a estrutura base do arquivo Vue (Single File Component
  - template | script | style)
  - 4* [x] - Se for usar props, defina o array de props
    - 4.1* - [x] Defina onde as props devem ser utilizadas
  - 5 [x] - importe o componente no local que será utilizado
    import NomeDoComponente from "./components/NomeDoComponente.vue"
  - 6 [x] - Registre o componente na propriedade components:
    components: { // esse fica dentro do export default
      NomeDoComponente
    }
    6.1 [x] - Adicione o componente no template no arquivo onde ele foi importado
  - 7* [x] - Se usou props, passe os valores das props para serem utilizados
-->

<template>
  <div>
    <h1>Lista de Cursos</h1>
    <CursoItem 
    v-for="(curso, index) in listaCursos" 

    :key="index"
    v-bind:titulo="curso.titulo" 
    :duracao="curso.duracao" 
    :vagas="curso.vagas"
    @inscrever="funcaoEscreverNoApp"
    >
    
    </CursoItem>
  </div>
</template>

<script>

import CursoItem from "./components/CursoItem.vue"
export default {
  components: {
    CursoItem
  },
  data(){
    return {
      listaCursos: [
        {
          titulo: "HTML e CSS", duracao: 30, vagas: 400000
        },
        {
          titulo: "Javascript", duracao: 20, vagas: 40
        },
        {
          titulo: "PHP", duracao: 20, vagas: 40
        },
      ]
    }
  },
  methods: {
    funcaoEscreverNoApp(){
      alert("O aluno deseja se inscrever.")
    }

  }
}

</script>

<style scoped>
</style>


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
* @inscrever="inscrever" o @inscrever significa o mesmo nome do emit em CursoItem e o ="funcaoEscreverNoApp" é o mesmo nome da função
  criado no methods



-->