<template >
    <div class="section-1">
        <span> Yangiliklar </span>
    </div>
    <NewsBox />
    <Add></Add>
    <Footer></Footer>

</template>
<script>
import NewsBox from "@/components/news/NewsBox.vue"
import Add from "@/components/buttons/Add.vue"
import Footer from "@/components/footer/Footer.vue"
export default {
    components: {
        NewsBox,
        Add,
        Footer
    },
   
}
</script>
<style scoped>
.section-1 {
    margin: 0;
    padding: 0;
    background-image: url("@/assets/images/news.png");
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