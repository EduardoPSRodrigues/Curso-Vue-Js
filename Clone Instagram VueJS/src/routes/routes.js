import { createRouter, createWebHistory } from "vue-router";

import HomeInstagram from '../components/Home/HomeInstagram.vue'
import LoginInstagram from '../components/Login/LoginInstagram.vue'
import SignUp from '../components/SignUp/SignUp.vue'
import NewPost from '../components/Posts/New/NewPost.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', 
            name: 'Login',
            component: LoginInstagram,
        },
        {
            path: '/cadastro', 
            name: 'SignUp',
            component: SignUp,
        },
        {
            path: '/home', 
            name: 'Home',
            component: HomeInstagram,
        },
        {
            path: '/posts/novo', 
            name: 'NewPost',
            component: NewPost,
        },
    ]
})

export default router

/* Informações do projeto

* Instalar o Vue Router - npm install vue-router@4
* Depois criar uma pasta com o nome routes dentro de src e criar um arquivo routes.js, 
* Dentro do arquivo routes.js insira o codigo
  * import { createRouter, createWebHistory } from "vue-router";
* Importar todas as telas da aplicação. Ex: import HomeInstagram from '../components/Home/HomeInstagram.vue'
* Criar o roteamento da aplicação
* Para cada rota vai definir qual é o caminho, componente e o nome dela
* path é a rota raiz, name é o nome da rota e component é o nome que foi importado
* No final do código colocar export default router
* Ir no mais.js e colocar o código 
  import router from './routes/routes.js'

  createApp(App)
  .use(router)
  .mount('#app')
*/