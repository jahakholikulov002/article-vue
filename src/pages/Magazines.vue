<template>
    <div class="main-content">
        <Filter/>
        <Magazine :magazines="magazines"/>

    </div>
    <Pagination :current-page="currentPage" :page-count="pageCount" :page-range="pageRange" @page-changed="changePage" />
    <Footer class="footer"></Footer>
</template>
<script>
import Filter from "@/components/Mag-types/Filter.vue"
import Magazine from "@/components/magazines/Magazine.vue"
import Pagination from "@/components/buttons/Pagination.vue"
import Footer from "@/components/footer/Footer.vue" 
export default {
    components: {
        Filter,
        Magazine,
        Pagination,
        Footer
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
.main-content {
    display: flex;
    flex-direction: row;

}
.footer{
    margin-top: 35px;
}

</style>