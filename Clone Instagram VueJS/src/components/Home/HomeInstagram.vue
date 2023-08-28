<template>

    <v-layout>
        <v-app-bar color="blue" >
            <v-app-bar-title> Instagram</v-app-bar-title>

            <v-btn icon>
                <router-link to="/posts/novo" >
            <v-icon>mdi-magnify</v-icon>
                </router-link>
            </v-btn>
        </v-app-bar>

    <v-main>
        <h1>Conteúdo principal</h1>
        <p>Este é o conteúdo principal da página.</p>
        <p id="bem_vindo_usuario"></p>
        <p>Nome: <span id="nome"></span> </p>
        <p>Username: <span id="username"></span> </p>
        <p>Qtd de seguidores: <span id="qtd_seguidores"></span> </p>
        <p>Qtd de publicações: <span id="qtd_publicacoes"></span> </p>

        <v-form class="d-flex" ref="form" @submit.prevent="handleSubmit">
            <v-text-field 
                class="w-25 me-5"
                label="Nome" 
                variant="outlined" 
                :rules="[v => !!v || 'Nome é obrigatório!']"
                v-model="post.usuario"
                required
            ></v-text-field>

            <v-text-field 
                class="w-50"
                label="Imagem" 
                variant="outlined" 
                :rules="[v => !!v || 'Imagem é obrigatória!']"
                v-model="post.imagem"
                required
            ></v-text-field>

            <v-btn variant="tonal" class="mx-5" color="green" type="submit">Cadastrar</v-btn>
            <v-btn variant="tonal" color="orange" type="reset">Limpar</v-btn>
        </v-form>

        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
        >
            {{ text }}

            <template v-slot:actions>
            <v-btn
                color="red"
                variant="text"
                @click="snackbar = false"
            >
                Fechar
            </v-btn>
            </template>
        </v-snackbar>

        <div class="d-flex flex-wrap w-100">
            <v-card 
                v-for="(item, index) in postsList" :key="index"
                variant="tonal" 
                class="w-25 ma-2" 
                :title="item.usuario"
            >
            
                <v-card-text>
                    <img :width="200" :src="item.imagem" alt="usuario">
                </v-card-text>
            </v-card>
        </div>
    </v-main>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            // nomes: [
            //     'https://http.cat/images/202.jpg',
            //     'https://http.cat/images/301.jpg',
            //     'https://http.cat/images/404.jpg',
            //     'https://http.cat/images/408.jpg',
            //     'https://http.cat/images/417.jpg',
            //     'https://http.cat/images/498.jpg',
            //     'https://http.cat/images/500.jpg'
            // ]
            snackbar: false,
            timeout: 2000,
            text: "",
            postsList: [],
            post: {
                usuario: '',
                imagem: ''
            }
        }
    },
    methods: {
    async handleSubmit(){
      const {valid} = await this.$refs.form.validate()

      if(valid){ 
        this.postsList.push({...this.post})
        this.text = 'Título e imagem cadastrados com sucesso!'
        this.snackbar = true
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<!-- Informações do projeto

1 - O código <v-card-text> </v-card-text> permite que dentro dele eu coloque qualquer tag de HTML
2 - <v-card v-for="(nome, index) in nomes" :key="index"> uando usar o v-for, o código fica reclamando de uma chave key, 
    para sanar o erro, basta colocar nessa estrutura
3 - Sendo que o :src="nome" esta pegando o array de dados que esta no data()
4 - class="mx-5" adiciona margem com a configuração 5 no eixo 5 (direita e esquerda)

 -->