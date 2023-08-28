<!-- HTML -->
<template>
    <form @submit.prevent="handleCreateAccount" class="form-login">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
            alt="Logotipo do instagram">

        <p>Cadastre-se para ver fotos e vídeos dos seus amigos</p>

        <div class="form-element">
            <label for="nomeCompleto">Nome Completo:</label>
            <input class="form-input" type="text" id="nomeCompleto" v-model="nomeCompleto"
                :class="{ 'input-error': this.errors.nomeCompleto }">
            <span class="mensagem-erro">{{ this.errors.nomeCompleto }}</span>
        </div>

        <div class="form-element">
            <label for="email">E-mail:</label>
            <input class="form-input" type="text" id="email" v-model="email" :class="{ 'input-error': this.errors.email }">
            <span class="mensagem-erro">{{ this.errors.email }}</span>
        </div>

        <div class="form-element">
            <label for="telefone">Telefone:</label>
            <input class="form-input" type="text" id="telefone" v-model="telefone"
                :class="{ 'input-error': this.errors.telefone }">
            <span class="mensagem-erro">{{ this.errors.telefone }}</span>
        </div>

        <div class="form-element">
            <label for="password">Senha:</label>
            <input class="form-input" type="password" id="password" v-model="password"
                :class="{ 'input-error': this.errors.password }">
            <span class="mensagem-erro">{{ this.errors.password }}</span>

        </div>

        <div class="form-element">
            <label for="confirmarPassword">Confirme a senha:</label>
            <input class="form-input" type="password" id="confirmarPassword" v-model="confirmarPassword"
                :class="{ 'input-error': this.errors.confirmarPassword }">
            <span class="mensagem-erro">{{ this.errors.confirmarPassword }}</span>
        </div>

        <div class="form-element">
            <label for="patrocinador">Patrocinador:</label>
            <select class="form-select" id="patrocinador" v-model="patrocinador">
                <option value="">Sem patrocinador</option>
                <option value="Coca Cola">Coca Cola</option>
                <option value="Nike">Nike</option>
                <option value="Lab 365">Lab 365</option>
                <option value="Zucchetti">Zucchetti</option>
            </select>
        </div>

        <div class="form-element">
            <label for="biografia">Digite sua biografia:</label>
            <textarea class="form-textarea" id="biografia" cols="30" rows="10" v-model="biografia"></textarea>
        </div>

        <div class="form-element">
            <p>Selecione um tipo de plano:</p>

            <div class="form-radio">
                <input id="Bronze" type="radio" v-model="tipoPlano" value="1">
                <label for="Bronze">Bronze </label>
            </div>

            <div class="form-radio">
                <input id="Prata" type="radio" v-model="tipoPlano" value="2">
                <label for="Prata">Prata </label>
            </div>

            <div class="form-radio">
                <input id="Premium" type="radio" v-model="tipoPlano" value="3">
                <label for="Premium">Premium </label>
            </div>

        </div>

        <p class="form-element p-confirmeTermos">Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade
            e Política de Cookies</p>

        <div class="form-confirmeTermos">
            <label for="confirmeTermos">Aceita termos de uso: {{ confirmeTermos ? 'Sim' : 'Não' }}</label>
            <input type="checkbox" id="confirmeTermos" v-model="confirmeTermos">
            <span class="mensagem-erro">{{ this.errors.confirmeTermos }}</span>
        </div>

        <button type="submit">Criar conta</button>

    </form>
</template>
  
  <!-- Java Script -->
  
<script>

import * as yup from 'yup'
import { captureErrorYup } from "../../utils/captureErrorYup";
import axios from "axios"

export default {
    data() {
        return {
            nomeCompleto: '',
            email: '',
            telefone: '',
            password: '',
            confirmarPassword: '',
            patrocinador: '',
            biografia: '',
            confirmeTermos: true,
            tipoPlano: 2,

            errors: {},
        }
    },
    methods: {
        handleCreateAccount() {

            try {

                const schema = yup.object().shape({

                    nomeCompleto: yup.string().required('O nome é obrigatório.'),
                    email: yup.string().email('O e-mail não é válido.').required('O e-mail é obrigatório.'),
                    telefone: yup.string().required('O telefone é obrigatório.'),
                    password: yup.string().min(5, "A senha deve ter no mínimo 5 caracteres.").max(20, "A senha deve ter entre 8-20 caracteres.").required('A senha é obrigatória.'),
                    confirmarPassword: yup.string().required('A confirmação da senha é necessária.').oneOf([yup.ref('password')], 'As senhas devem coincidir.'),
                    confirmeTermos: yup.boolean().isTrue('Os termos de uso devem ser aceitos.'),

                })

                schema.validateSync({
                    nomeCompleto: this.nomeCompleto,
                    email: this.email,
                    telefone: this.telefone,
                    password: this.password,
                    confirmarPassword: this.confirmarPassword,
                    confirmeTermos: this.confirmeTermos,

                }, { abortEarly: false })

                axios({
                    url: 'http://localhost:3000/api/register',
                    method: 'POST',
                    data: {
                        name: this.nomeCompleto,
                        email: this.email,
                        contact: this.telefone,
                        password: this.password,
                        sponsor: this.patrocinador,
                        bio: this.biografia,
                        confirmTerms: this.confirmeTermos,
                        planType: this.tipoPlano,
                    }
                })
                    .then(() => {
                        alert('Cadastrado com sucesso')
                        this.$router.push('/')
                    })
                    // Estou pegando os dados da resposta do erro
                    // error.response?.data? é a forma como o axios trata os erros e o .message é a variável que o backend usou
                    // no código da API
                    .catch((error) => {
                        console.log(error)
                        if (error.response?.data?.message) {
                            alert(error.response.data.message)
                        } else {
                            alert('Houve uma falha ao tentar cadastrar')
                        }
                    })
 
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    this.errors = captureErrorYup(error)
                }
            }
        },
    },
}
</script>
  
  <!-- Estilização -->
  
<style scoped>
.form-login {
    margin: 0 auto;
    width: 40%;
    border-radius: 4px;
    border: 2px solid #f2f2f2;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    padding: 12px;
}

img {
    width: 250px;
}

.form-input {
    background-color: #fafafa;
    height: 40px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    outline: none;
}

.form-element {
    display: flex;
    flex-direction: column;
    width: 80%;
}


.form-textarea,
.form-select {

    background-color: #fafafa;
    width: 100%;

    border-radius: 8px;
    border: 1px solid #f2f2f2;

    outline: none;
}

.form-select {
    height: 40px;
}

.form-confirmeTermos,
.form-radio {
    display: flex;
    gap: 10px;
    align-items: center;
}

.p-confirmeTermos {
    width: 90%;
}

.input-error {
    border-color: red;
}

.mensagem-erro {
    color: red;
    margin: 4px;
    font-size: small;
}

label,
p {
    color: #707b88;
    font-size: 14px;
}

button {
    background-color: #4bb4f8;
    color: white;

    font-size: 16px;

    height: 40px;
    width: 80%;

    border-radius: 8px;
    border: none;
}

button:hover {
    background-color: #2985c2;
}
</style>
  
  
  <!-- Informações do projeto
  
  * Para criar uma função de submissão no formulário, basta colocar @submit="" e declarar a função
  * Quando tem um formulário, não precisa colocar o @submit no botão, pois estará vinculado no formulário, 
    coloca @click ou @submit quando for um botão independente. 
  * @submit.prevent significa que o submit não vai mais recarregar a tela, seria como o preventDefault no java
  * Quando o if tem apenas 1 linha, pode omitir as chaves e deixar tudo na mesma linha
  * Caso o email ou senha seja preenchido, o campo this. errorInputEmail = '' faz limpar a variavel e sumir com o erro na tela
  * v-if="errorInputEmail": Essa é uma diretiva do Vue.js chamada v-if. Ela é usada para renderizar condicionalmente 
    um elemento com base em uma expressão booleana. No caso, o elemento <li> só será renderizado se o valor de 
    errorInputEmail for avaliado como verdadeiro (ou seja, não for nulo, vazio, falso, etc.).
  * button :disabled="!email && !password"  vai deixar o botão desabilitado até esses campos terem informação.
  * Como esse código é um componente, tem que importar ele no APP.vue, registrar em export default { 
    components:{LoginInstagram}, e colocar a tag no HTML.
  * <p><router-link to="/cadastro">Cadastre-se</router-link></p> significa que dentro da tag p estou colocando um link 
    para quando clicar na palavra Cadastre-se, o usuário ir para a tela de cadastro, coloca sempre o nome do patch que foi
    configurado no router
  * Dentro de uma função no methods, para ser direcionado a outra tela usa-se this.$router.push('/home'), dentro das aspas 
    coloca o path para ser direcionado
  * Código com fecth
    /*Configurando com o fetch
                    fetch('http://localhost:3000/api/register', {
                        method: 'POST',
                        body: JSON.stringify({
                            nomeCompleto: this.nomeCompleto,
                            email: this.email,
                            telefone: this.telefone,
                            password: this.password,
                            confirmarPassword: this.confirmarPassword,
                            patrocinador: this.patrocinador,
                            biografia: this.biografia,
                            confirmeTermos: this.confirmeTermos,
                            tipoPlano: this.tipoPlano,
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }) 
                    .then((response) => {
                        console.log('entrei aqui no then')
                        if (response.ok === false) {
                            throw new Error()
                        }
                        return response.json()
                    }) 
                    .then(() => {
                        alert('Cadastrado com sucesso')
                        this.$router.push('/')
                    })
                    .catch(() => {
                        alert('Houve uma falha ao tentar cadastrar')
                    })*/

  -->