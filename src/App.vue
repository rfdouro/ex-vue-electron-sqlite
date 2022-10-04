<template v-cloak>
 <q-layout view="lHh Lpr lFf">
  <q-header elevated class="">
   <q-toolbar>
    <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

    <q-toolbar-title> Sistema </q-toolbar-title>

    <div>v{{ versao }}</div>
   </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
   <q-list>
    <q-item-label header>Navegação</q-item-label>
    <q-item clickable to="/">
     <q-item-section avatar>
      <q-icon name="home" />
     </q-item-section>
     <q-item-section>
      <q-item-label>Início</q-item-label>
     </q-item-section>
    </q-item>
    <q-item clickable to="/about">
     <q-item-section avatar>
      <q-icon name="info" />
     </q-item-section>
     <q-item-section>
      <q-item-label>Sobre</q-item-label>
      <q-item-label caption>Informações</q-item-label>
     </q-item-section>
    </q-item>
   </q-list>
  </q-drawer>

  <q-page-container>
   <MeuBotao @acao="testeacao">Teste</MeuBotao>
   <OutroBotao @click="testeacao">Outro</OutroBotao>
   <MeuInput type="text" v-model="m" @acaochange="actch(this)"></MeuInput>
   <router-view></router-view>
  </q-page-container>
 </q-layout>
</template>

<script>
import MeuBotao from './components/MeuBotao.vue';
import OutroBotao from './components/OutroBotao.vue';
import MeuInput from './components/MeuInput.vue';

export default {
 name: "LayoutDefault",

 components: { MeuBotao, OutroBotao, MeuInput },

 data() {
  return {
   leftDrawerOpen: false,
   versao: "1.0",
   m: 'teste'
  };
 },

 mounted() {
  this.$router.push({ name: "home" });
 },

 methods: {
  testeacao() {
   alert(123);
  },
  actch(evt) {
   console.log(evt);
  }
 }
};
</script>

<style>
[v-cloak]>* {
 display: none;
}

[v-cloak]::before {
 content: " ";
 display: block;
 width: 16px;
 height: 16px;
 background-image: url("data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==");
}
</style>
