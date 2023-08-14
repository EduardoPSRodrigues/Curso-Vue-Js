<template>
    <header>
        <slot name="header"></slot>
        <h1>Carro Ferrari</h1>
    </header>

    <slot name="imagem">
        <img :width="500"
        src="https://s2-autoesporte.glbimg.com/RYlcw6bmUzcF_kxljoZGfhXMwR0=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/t/O/ETjpIzSLiA8pJG77gB4A/2020-05-30-ferrari-f8-tributo.jpg"
            alt="carro da ferrari">
    </slot>

    <slot></slot>

    <footer>
        <slot name="footer">
            <h6>Carro da Ferrari - Venda</h6>
        </slot>

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