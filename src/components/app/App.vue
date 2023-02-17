<template>
  <div class="main">
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <div class="section">
      <Filter></Filter>

    </div>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue"
import SearchBar from "@/components/search-bar/SearchBar.vue"
import Filter from "@/components/Mag-types/Filter.vue"
export default {
 
 components:{
  Navbar,
  SearchBar,
  Filter,
 }
  
}
</script>
<style scoped> 
  .main{
    
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
</style>