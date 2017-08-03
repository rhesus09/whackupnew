<template>
  <div class="bg-info dker">
    <section id="content" class="m-t-lg wrapper-md animated fadeInUp">
      <div class="container aside-xl">
        <a class="navbar-brand block" href="index.html"><span class="h1 font-bold">Whack Up</span></a>
        <section class="m-b-lg">
          <header class="wrapper text-center">
            <strong>Stay Whack Up, Connectez-vous</strong>
          </header>
          <form>
            <div class="form-group">
              <input type="email" placeholder="Email" class="form-control rounded input-lg text-center no-border">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Mot de passe"
                     class="form-control rounded input-lg text-center no-border">
            </div>
            <button class="btn btn-lg btn-warning lt b-white b-2x btn-block btn-rounded"
                    @click="setUser()"><i
              class="icon-arrow-right pull-right"></i><span class="m-r-n-lg">Connectez Vous!</span></button>
            <div class="text-center m-t m-b"><a href="#">
              <small>Mot de passe oublié?</small>
            </a></div>
            <div class="line line-dashed"></div>
            <p class="text-muted text-center">
              <small>Première Connexion?</small>
            </p>
            <a @click="redirect('register')" class="btn btn-lg btn-info btn-block rounded">Creer un Compte</a>
          </form>
        </section>
      </div>
    </section>
    <!-- footer -->
    <div id="footer">
      <div class="text-center padder">
        <p>
          <small>POOC WhackUp<br>&copy; 2017</small>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../../router/index'
  import * as types from '../../store/types'
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions({setUser: types.SET_CREDENTIALS_CURRENT_USER_NAME}),
      redirect (value) {
        router.push(value)
      }
    }
  }
</script>
<style></style>
