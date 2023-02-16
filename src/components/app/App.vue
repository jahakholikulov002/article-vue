<template>
  <div class="main">
    <Navbar></Navbar>
    <SearchBar></SearchBar>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue"
import SearchBar from "@/components/search-bar/SearchBar.vue"
export default {
 
 components:{
  Navbar,
  SearchBar,
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