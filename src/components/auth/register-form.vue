<template>

  <div class="bg-info dker">
    <section id="content" class="m-t-lg wrapper-md animated fadeInDown">
      <div class="container aside-xl">
        <a class="navbar-brand block" href="index.html"><span class="h1 font-bold">Whack Up</span></a>
        <section class="m-b-lg">
          <header class="wrapper text-center">
            <strong>Rejoignez-nous</strong>
          </header>

            <div class="form-group">
              <input v-model="nom" placeholder="Nom" class="form-control rounded input-lg text-center no-border">
            </div>
            <div class="form-group">
              <input v-model="prenom" placeholder="Prenom" class="form-control rounded input-lg text-center no-border">
            </div>
            <div class="form-group">
              <input v-model="email" type="email" placeholder="Email"
                     class="form-control rounded input-lg text-center no-border">
            </div>
            <div class="form-group">
              <input v-model="password" type="password" placeholder="Mot de passe"
                     class="form-control rounded input-lg text-center no-border">
            </div>
            <div class="checkbox i-checks m-b">
              <label class="m-l">
                <input type="checkbox" checked=""><i></i> Accepter <a
                href="#">les termes et conditions d'utilisation</a>
              </label>
            </div>
            <button @click="register" class="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded"><i
              class="icon-arrow-right pull-right"></i><span class="m-r-n-lg">Enregistrez-vous</span></button>
            <div class="line line-dashed"></div>
            <p class="text-muted text-center">
              <small>Vous avez déjà un compte?</small>
            </p>
            <a @click="redirect('login')" class="btn btn-lg btn-info btn-block btn-rounded">Connectez-vous</a>

        </section>
      </div>
    </section>
    <!-- footer -->
    <div>
      <div class="text-center padder clearfix">
        <p>
          <small>Web app framework base on Bootstrap<br>&copy; 2014</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import * as types from '../../store/types'
  import router from '../../router/index'
  export default {
    name: 'login-form',
    data () {
      return {
        nom: '',
        prenom: '',
        password: '',
        email: ''
      }
    },
    methods: {
      ...mapActions({
        setNameUser: types.SET_CREDENTIALS_CURRENT_USER_NAME,
        setPrenomUser: types.SET_CREDENTIALS_CURRENT_USER_PRENOM,
        setEmailUser: types.SET_CREDENTIALS_CURRENT_USER_EMAIL,
        setPasswordUser: types.SET_CREDENTIALS_CURRENT_USER_PASSWORD
      }),
      redirect (value) {
        router.push(value)
      },
      register () {
        this.setNameUser(this.nom)
        this.setPrenomUser(this.prenom)
        this.setEmailUser(this.email)
        this.setPasswordUser(this.password)
        router.push('/')
      }
    }
  }
</script>
<style></style>
