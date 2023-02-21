<template>
  <div class="main">
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <div class="section">
      <Filter></Filter>
      <Magazine></Magazine>
    </div>
    <HomeButton></HomeButton>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue"
import SearchBar from "@/components/search-bar/SearchBar.vue"
import Filter from "@/components/Mag-types/Filter.vue"
import Magazine from "@/components/magazines/Magazine.vue"
import HomeButton from "@/components/buttons/HomeButton.vue"
export default {
 
 components:{
  Navbar,
  SearchBar,
  Filter,
  Magazine,
  HomeButton,
 }
  
}
</script>
<style scoped> 
  .main{
    
    position: relative;
    width: 100%;
    min-height: 100vh;
  }
  .section{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
</style>