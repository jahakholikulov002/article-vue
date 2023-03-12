<template>
  <div class="main">
    <SearchBar></SearchBar>
    <div class="section">
      <Filter></Filter>
      <Magazine :magazines="magazines"></Magazine>
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

  components: {

    SearchBar,
    Filter,
    Magazine,
    HomeButton,
    Footer,
  },
  // data() {
  //   return {
  //     magazines: [
  //       {
  //         title: "Urban Agriculture Magazine #38:",
  //         titleYear: "20+ years of RUAF",
  //         description: "The new issue of the Urban Agriculture Magazine analyses five key work areas for the coming decade: Resilience, Social inclusion, Urban and Peri- urban Agriculture, Urban Planning, and Governance.Resilience Food systems around the globe are highly vulnerable to the impacts of multiple hazards, including climate shocks, natural events, global warming, and political instability.People, assets […]",
  //         type: "PDF",
  //       },
  //       {
  //         title: "Urban Agriculture Magazine #38:",
  //         titleYear: "20+ years of RUAF",
  //         description: "The new issue of the Urban Agriculture Magazine analyses five key work areas for the coming decade: Resilience, Social inclusion, Urban and Peri- urban Agriculture, Urban Planning, and Governance.Resilience Food systems around the globe are highly vulnerable to the impacts of multiple hazards, including climate shocks, natural events, global warming, and political instability.People, assets […]",
  //         type: "PDF",
  //       },
  //       {
  //         title: "Urban Agriculture Magazine #38:",
  //         titleYear: "20+ years of RUAF",
  //         description: "The new issue of the Urban Agriculture Magazine analyses five key work areas for the coming decade: Resilience, Social inclusion, Urban and Peri- urban Agriculture, Urban Planning, and Governance.Resilience Food systems around the globe are highly vulnerable to the impacts of multiple hazards, including climate shocks, natural events, global warming, and political instability.People, assets […]",
  //         type: "PDF",
  //       },
  //     ]

  //   }
  // }


}
</script>
<style scoped> .main {

   position: relative;
   width: 100%;
   min-height: 100vh;
 }

 .section {
   display: flex;
   flex-direction: row;
   justify-content: center;
 }
</style>