<template>
  <div class="login">
    <form novalidate v-on:submit="handleSubmit($event)">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">Login</div>
          <div class="md-subhead">informe os dados para login</div>
        </md-card-header>

        <md-card-content>
          <md-input-container>
            <label>Usuário</label>
            <md-input v-model="user.email" required></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>Senha</label>
            <md-input v-model="user.password" required type="password"></md-input>
          </md-input-container>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary"><md-icon class="">send</md-icon> Entrar</md-button>
          <router-link to="signup" tag="md-button" class="md-primary">Quero me cadastrar</router-link>
        </md-card-actions>
      </md-card>      
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      // Auth
      this.$auth.login({
        params: {auth: this.user},
        success: function () {
          console.log('Usuário logado com sucesso.')
        },
        error: function () {
          console.log('Usuário e/ou senha inválidos.')
        },
        rememberMe: true,
        redirect: '/signup'
      })
    }
  }
}
</script>

<style>
  .login{
    padding: 10px;
  }
</style>