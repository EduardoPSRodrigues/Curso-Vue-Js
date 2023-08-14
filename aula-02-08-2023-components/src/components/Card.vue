<template>
    <header>
        <slot name="header"></slot>
    </header>

    <slot></slot>

    <footer>
        <slot name="footer"></slot>

    </footer>
</template>
   
<script>
</script>
   
<style scoped>
h1 {
    color: red;
}
</style>

<!-- Informações do projeto

* <slot></slot> serve para marcar onde será exibido aquele dado que no caso essa informação esta no App.vue em uma tag p



-->