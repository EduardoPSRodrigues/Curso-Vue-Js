<template>
    <div>
        <h1>Título: {{ titulo }}</h1>
        <span>Duração: {{ duracao }} horas</span> <br>
        <span>Vagas: {{ vagas }}</span>
    </div>
</template>

<script>
export default {
    props: ['titulo', 'duracao', 'vagas']
}
</script>

<!-- Informações do projeto

*  props: ['titulo', 'duracao', 'vagas'] assim faço o registro das props que eu preciso usar 

-->