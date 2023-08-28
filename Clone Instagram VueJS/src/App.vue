<!-- HTML -->
<template>
    <v-layout>
        <v-app-bar color="blue">
            <v-app-bar-title> Instagram</v-app-bar-title>

            <v-btn icon>
                <router-link to="/posts/novo">
                    <v-icon color="#FFF">mdi-post</v-icon>
                </router-link>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view> </router-view>
        </v-main>
    </v-layout>
</template>

<!-- Informações do projeto
* Primeiro passo criar todas as telas da aplicação.

-->