<template>
    <div class="section-1">
        <span> Jurnallar </span>
        <span>haqida umumiy ma'lumot</span>
    </div>
    <div class="container">
        <AboutMag />
        <div class="section">
        <AboutFilter/>
        <Author></Author>
    </div>
    </div>
    <div class="pagination">

        <Pagination :current-page="currentPage" :page-count="pageCount" :page-range="pageRange"
            @page-changed="changePage" />
    </div>
    <Footer></Footer>
</template>
<script>
import AboutFilter from "@/components/Mag-types/AboutFilter.vue"
import AboutMag from "@/components/magazines/about/AboutMag.vue"
import Pagination from "@/components/buttons/Pagination.vue"
import Footer from "@/components/footer/Footer.vue"
import Author from "@/components/authors/Author.vue"
export default {
    components: {
        AboutMag,
        AboutFilter,
        Pagination,
        Footer,
        Author
    },
    data() {
        return {
            currentPage: 1,
            pageCount: 5,
            pageRange: 5
        };
    },
    methods: {
        changePage(pageNumber) {
            this.currentPage = pageNumber;
            // fetch data for new page here
        }
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
.section{
    margin: 0;
    padding: 0;
    /* align-items: center; */
    /* justify-content: center; */
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

.container {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;

}
.pagination{
    margin: 2rem 0;
}
</style>