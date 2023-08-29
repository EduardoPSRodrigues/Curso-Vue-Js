<template>
    <v-form @submit.prevent="handleSubmit">
      <v-text-field label="Título" variant="outlined" v-model="title" />
      <span>{{ this.errors.title }} </span>

      <v-textarea label="Descrição" v-model="description" />
      <span>{{ this.errors.description }} </span>

      <v-text-field label="URL" variant="outlined" v-model="url" />
      <span>{{ this.errors.url }} </span>

      <v-btn type="submit">Cadastrar</v-btn>
    </v-form>
  </template>
  
  <script>
  import axios from 'axios'
  import * as yup from 'yup'
  import { captureErrorYup } from '../../../utils/captureErrorYup'
  
  export default {
    data() {
      return {
        title: '',
        description: '',
        url: '',
        errors: {}
      }
    },
    methods: {
      handleSubmit() {
        try {
          // 1 - criar schema validation
          const schema = yup.object().shape({
            title: yup.string().required('Título é obrigatório'),
            url: yup.string().required('URL é obrigatório'),
            description: yup
              .string()
              .required('Descrição é obrigatório')
              .min(20, 'A descrição é pequena demais')
              .max(200, 'A descrição ultrapassou o limite')
          })
  
          schema.validateSync(
            {
              title: this.title,
              description: this.description,
              url: this.url
            },
            { abortEarly: false }
          )

          //Pegando uma informação no local storage
  
          const token = localStorage.getItem('instagram_token')
  
          axios({
            url: 'http://localhost:3000/api/posts',
            method: 'post',
            data: {
              title: this.title,
              description: this.description,
              url: this.url
            },
            // O Token tem que ir no cabeçalho da requisição e estamos usando a palavra Bearen por causa do tipo do token
            // que estamos usando que é o JWT. Todos os tokens tem um prefixo
            // O objetivo é como que faz uma requisição privado por causa do token
            headers: {
              Authorization: `Bearen ${token}`
            }
          })
            .then(() => {
              alert('Cadastro com sucesso')
              this.title = ''
              this.url = ''
              this.description = ''
            })
            .catch(() => {
              alert('Houve um erro ao realizar o cadastro')
            })
  
          // ...............
        } catch (error) {
          if (error instanceof yup.ValidationError) {
            // capturar os errors do yup
            this.errors = captureErrorYup(error)
          }
        }
      }
    }
  }
  </script>