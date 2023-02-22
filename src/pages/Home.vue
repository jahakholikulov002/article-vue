<template>
    <div class="main">
      <SearchBar></SearchBar>
      <div class="section">
        <Filter></Filter>
        <Magazine></Magazine>
      </div>
      <HomeButton></HomeButton>
      <Footer></Footer>
    </div>
  </template>
  <script>
 
  import SearchBar from "@/components/search-bar/SearchBar.vue"
  import Filter from "@/components/Mag-types/Filter.vue"
  import Magazine from "@/components/magazines/Magazine.vue"
  import HomeButton from "@/components/buttons/HomeButton.vue"
  import Footer from "@/components/footer/Footer.vue"
  
  export default {
   
   components:{
  
    SearchBar,
    Filter,
    Magazine,
    HomeButton,
    Footer,
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