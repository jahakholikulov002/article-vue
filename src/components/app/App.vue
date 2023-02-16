<template>
  <div class="main">
    <Navbar></Navbar>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue"
export default {
 components:{
  Navbar,
 }
  
}
</script>
<style scoped> 
  .main{
    
    position: relative;
    width: 100%;
    height: 100vh;
  }
</style>