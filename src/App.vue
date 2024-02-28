<template>
  <q-layout class="app" :style="{ width: '100%', height: '100%' }">
    <q-page-container>
      <HeaderFooter/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import HeaderFooter from './views/HeaderFooter.vue'

export default {
  name: 'LayoutDefault',

  components: {
    HeaderFooter
  },

  setup () {
    return {
      // leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mali&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.text-main {
  color: #33AEB0 !important;
}
.bg-maindark {
  background: #64AF65 !important;
}
.bg-mainlight {
  background: #B4ECAC !important;
}
.bg-mainlight2 {
  background: #ECF4DB !important;
}
.bg-mainred {
  background: #FFB1A5 !important;
}
.title{
  font-family: 'Poppins', sans-serif;
}
.menu{
  /* font-family: 'Fredoka One', 'Mali'; */
}
.text{
  font-family: 'Mali', cursive;
  line-height: 1.5 !important;
}
.text2{
  font-family: 'Mali', cursive;
}

@media screen and (max-width: 426px) {
  div.text-h1{
    font-size: 65px;
  }
  div.text-h2{
    font-size: 50px;
  }
  div.text-h3{
    font-size: 40px;
  }
  div.text-h4{
    font-size: 25px;
  }
  div.text-h5{
    font-size: 20px;
  }
}

  #app{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(to bottom right, #ECF4DB , #B4ECAC);
}

.app{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
html {
  height: 100vh;
  padding: 0;
}
body {
  height: 100vh;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
.full-height{
  height: 100vh;
  min-height: 100vh;
  padding: 0;
}
.text-light {
  color: #ffffff !important;
}
.bg-light {
  background: #ffffff !important;
}
.text-disgrey {
  color: #a6a6a6 !important;
}
.bg-disgrey {
  background: #a6a6a6 !important;
}
.bg-transparent {
  background: #a6a6a6 !important;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 0%), 0 3px 1px -2px rgb(0 0 0 / 0%), 0 1px 5px 0 rgb(0 0 0 / 0%);
}
</style>
