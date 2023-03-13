<template>
  <div class="main">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue"

export default {

  components: {
    Navbar,

  },
  // methods:{
  //  load(){
  //   window.addEventListener('DOMContentLoaded',)
  //  } 
  // }


}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* margin-top: 5rem!important; */
}
</style>