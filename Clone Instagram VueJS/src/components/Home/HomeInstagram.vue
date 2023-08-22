<template>

 <div class="content" id="conteudo">
            <h1>Conteúdo principal</h1>
            <p>Este é o conteúdo principal da página</p>

            <p id="bem-vindo-usuario"></p>

            <p>Hora Atual: <span id="hora-Atual"> </span></p>
            <p>Nome: <span id="nome-Usuario"> </span></p>
            <p>Username: <span id="User-Name"> </span></p>
            <p>Quantidade de Seguidores: <span id="qtd-de-seguidores"> </span></p>
            <p>Quantidade de Publicações: <span id="qtd-de-publicacoes"> </span></p>
            <p>Quantidade de Pessoas Seguindo: <span id="qtd-de-pessoas-seguindo"> </span></p>

            <div id="galeria" class="galeria-fotos">
            </div>


        </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

.content{
    flex: 1;
    padding: 20px;
    background-color: #fafafa;
    margin-left: 200px;
}
    
</style>

