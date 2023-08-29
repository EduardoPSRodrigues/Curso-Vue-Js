<!-- HTML -->
<template>
    <v-layout>
        <v-app-bar color="blue" v-if="renderizarMenu">
            <v-app-bar-title> Instagram</v-app-bar-title>

            <v-btn icon>
                <router-link to="/posts/novo">
                    <v-icon color="#FFF">mdi-email</v-icon>
                </router-link>
            </v-btn>

            <v-btn>
                <router-link to="/posts">
                <v-icon color="#FFF">mdi-list-box</v-icon>
                </router-link>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view> </router-view>
        </v-main>
    </v-layout>
</template>

<script>
export default {
  computed: {
    renderizarMenu() {
      return this.$route.path !== '/' && this.$route.path !== '/cadastro'
    }
  }
}
</script>

<!-- Informações do projeto
* Primeiro passo criar todas as telas da aplicação.
* Recomenda criar um componente do Menu e importar apenas
  no app.vue
-->