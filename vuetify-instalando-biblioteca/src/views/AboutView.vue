<template>
  <v-form ref="form" @submit.prevent="handleSubmit">
    <v-text-field 
      label="Nome" 
      variant="outlined" 
      :rules="[v => !!v || 'Nome é obrigatório!']"
      v-model="nome"
      required
    ></v-text-field>

    <v-text-field 
      label="Email" 
      variant="outlined" 
      :rules="[v => !!v || 'Email é obrigatório!']"
      v-model="email"
      required
    ></v-text-field>

    <v-select 
      label="Estado" 
      variant="outlined" 
      :items="estadosList"
      v-model="estado"
    >

    </v-select>

    <v-btn variant="tonal" color="green" type="submit">Cadastrar</v-btn>
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
</template>

<script>
export default {
  data(){
    return {
      snackbar: false,
      timeout: 2000,
      text: "",
      nome: "",
      estado: "",
      email: "",
      estadosList: [
        'CE',
        'SP',
        'SC',
        'PR',
        'RS',
        'PE'
      ]
    }
  },
  methods: {
    async handleSubmit(){
      const {valid} = await this.$refs.form.validate()

      if(valid){ 
        this.text = 'Usuário cadastrado com sucesso!'
        this.snackbar = true
        this.$refs.form.reset() //Faz a limpeza do formulário, o nome do meu formulário é form
      }
    }
  }
}
</script>

<style>

</style>

<!-- Informações do projeto
1 -  ref="form" é como se fosse o getElementById, pois eu estou colocando uma referência em uma tag
2 - É a maneira como o Vuetify trabalha, const {valid} = await this.$refs.form.validate(), esta basicamente falando para
    ir na referencia form e por estar usando o $, ele me permite usar todas as propriedades, então estou usando a propriedade
    de validação e estou falando para ver se a const [valid] é true ou false, se valid for verdadeiro eu faço o cadastro.
    Ou seja, bloqueio o botão para só ficar ativado quando tudo for preenchido
    o comando async faz com que o programa execute a função em segundo plano
    e o comando await significa que o código ficará travado até que seja validado
3 - :timeout="timeout" é quantos milesegundos vai demorar para ser disparado, normalmente são 2000 = 2 segundos
4 - this.text = 'Usuário cadastrado com sucesso!' é a mensagem que vai aparecer no "alert" do Vuetify 
    this.snackbar = true o botão esta em data como false, ao clicar na função, ele mudará o status para true
5 - Ao colocar um botão com o type reset dentro do form, ao clicar no botão, ele limpa os campos dos inputs sem precisar configurar
    <v-btn variant="tonal" color="orange" type="reset">Limpar</v-btn>



-->