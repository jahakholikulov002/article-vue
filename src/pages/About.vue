<template lang="">
    <div class="section-1">
       <span> Jurnallar </span>  
       <span>haqida umumiy ma'lumot</span>  
    </div>
    <div class="container"></div>
    <AboutMag/>

</template>
<script>
import AboutMag from "@/components/magazines/about/AboutMag.vue"
export default {
    components: {
        AboutMag,
    }
}
</script>
<style scoped>
.section-1 {
    margin: 0;
    padding: 0;
    background-image: url("@/assets/images/books.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 219px;
}

span {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: 'Montserrat';
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 5%;
    /* align-items: center; */

}
</style>